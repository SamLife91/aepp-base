<template>
  <mobile-page
    class="update-security"
  >
    <guide
      fill="primary"
    >
      Important <em>security update</em> available!
      <img :src="maleConstructionWorkerEmoji">Please enter
      <br><mark>your password below</mark>
      <br><strong>to update safely</strong>
    </guide>

    <form @submit.prevent="unlockSavedKeystore">
      <ae-input
        v-validate="'required|min:4'"
        v-focus="true"
        :id="_uid.toString()"
        v-model="password"
        :label="error ? 'Password': ''"
        :error="error"
        :type="showPassword ? 'text' : 'password'"
        name="password"
        placeholder="Password"
        @click.native="error = false"
      >
        <ae-toolbar slot="footer">
          <span>
            <span
              v-if="error"
              class="error"
            >
              Try again or
            </span>
          </span>
          <ae-icon
            name="eye"
            size="16px"
            @click.native="showPassword = !showPassword"
          />
        </ae-toolbar>
      </ae-input>
    </form>

    <template slot="footer">
      <ae-button
        :disabled="errors.any()"
        size="medium"
        fill="alternative"
        @click="unlockSavedKeystore"
      >
        Update security
      </ae-button>
    </template>
  </mobile-page>
</template>

<script>
import { AeLabel } from '@aeternity/aepp-components';
import { AeToolbar, AeIcon } from '@aeternity/aepp-components-3';
import maleConstructionWorkerEmojiPath from 'emoji-datasource-apple/img/apple/64/1f477-200d-2642-fe0f.png';
import MobilePage from '../components/MobilePage.vue';
import Guide from '../components/Guide.vue';
import AeButton from '../components/AeButton.vue';
import AeInput from '../components/AeInput.vue';

export default {
  components: {
    MobilePage, AeInput, AeLabel, AeButton, Guide, AeToolbar, AeIcon,
  },
  data() {
    return {
      maleConstructionWorkerEmoji: maleConstructionWorkerEmojiPath,
      password: '',
      showPassword: false,
      error: false,
    };
  },
  methods: {
    async unlockSavedKeystore() {
      if (!await this.$validator.validateAll()) {
        this.error = true;
        return;
      }

      try {
        await this.$store.dispatch('unlockKeystore', this.password);
      } catch (e) {
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/placeholders/typography';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors';

.update-security {
  .guide {
    margin-bottom: rem(46px);

    /deep/ div {
      margin: 0 auto;
    }
  }

  form {
    margin: 0 rem(-15px);
  }

  .ae-toolbar {
    justify-content: space-between;
    @extend %face-sans-xs;
    color: $color-neutral-negative-1;
    text-transform: none;

    .recover {
      height: auto;
      color: $color-neutral-negative-1;

      /deep/ .label {
        padding: 0;
        @extend %face-sans-xs;
        text-decoration: underline;
        text-transform: none;
      }
    }
  }
}
</style>
<style lang="scss" src="../components/MobilePageContent.scss" scoped />
<style lang="scss" src="./FixedHeader.scss" scoped />
