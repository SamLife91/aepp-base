<template>
  <MobilePage
    :right-button-to="{ name: 'intro' }"
    right-button-icon-name="close"
  >
    <Guide>
      <em>Hello!</em>{{ ' ' }}<img :src="wavingHandEmoji">
      {{ ' ' }}<mark>Log in</mark> to
      <br>æternity with your
      <br>password
    </Guide>

    <form
      :id="_uid"
      @submit.prevent="unlockSavedKeystore"
    >
      <PasswordPurpose />
      <AeInputPassword
        v-model="password"
        v-validate="'required|min:4'"
        autofocus
        autocomplete="current-password"
        :error="errors.has('password') || wrongPassword"
        name="password"
        @input="wrongPassword = false"
      >
        <template slot="footer">
          <template v-if="errors.has('password')">
            {{ errors.first('password') }}
          </template>
          <template v-else-if="wrongPassword">
            Try again or
            <RouterLink :to="{ name: 'recover' }">
              recover account
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink :to="{ name: 'recover' }">
              Recover account
            </RouterLink>
          </template>
        </template>
      </AeInputPassword>
    </form>

    <AeButton
      slot="footer"
      :disabled="errors.any() || wrongPassword"
      :form="_uid"
      fill="secondary"
    >
      Log in
    </AeButton>
  </MobilePage>
</template>

<script>
import wavingHandEmojiPath from 'emoji-datasource-apple/img/apple/64/1f44b.png';
import MobilePage from '../../components/mobile/Page.vue';
import Guide from '../../components/Guide.vue';
import AeButton from '../../components/AeButton.vue';
import PasswordPurpose from '../../components/mobile/PasswordPurpose.vue';
import AeInputPassword from '../../components/AeInputPassword.vue';

export default {
  components: {
    MobilePage, PasswordPurpose, AeInputPassword, AeButton, Guide,
  },
  data() {
    return {
      wavingHandEmoji: wavingHandEmojiPath,
      password: '',
      wrongPassword: false,
    };
  },
  methods: {
    async unlockSavedKeystore() {
      if (!await this.$validator.validateAll()) return;

      try {
        await this.$store.dispatch('unlockKeystore', this.password);
      } catch (e) {
        this.wrongPassword = true;
      }
    },
  },
};
</script>
