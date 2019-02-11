<template>
  <mobile-page
    :left-button-to="{ name: 'new-account' }"
    left-button-icon-name="back"
    class="new-account-create"
    title="New Account"
  >
    <guide
      fill="primary"
      icon="⅓"
    >
      <em>
        Carefully keep this
        <br>phrase<img :src="keyEmoji">safe!
      </em>
      <br>Write these 12 words
      <br>down and keep them
      <br><strong>in a safe place</strong>.You need
      <br>them to <mark>recover</mark> your
      <br>account in the future.
    </guide>
    <p class="mnemonic">
      {{ seed }}
    </p>

    <ae-button
      slot="footer"
      fill="secondary"
      @click="createSeed"
    >
      Next
    </ae-button>

    <div
      :style="{ animationPlayState: readingPaused ? 'paused' : 'running' }"
      class="progress"
      @animationend="readingEnded = true"
    />
  </mobile-page>
</template>

<script>
import { generateMnemonic } from '@aeternity/bip39';
import keyEmojiPath from 'emoji-datasource-apple/img/apple/64/1f511.png';
import MobilePage from '../../components/mobile/Page.vue';
import Guide from '../../components/Guide.vue';
import AeButton from '../../components/AeButton.vue';

export default {
  components: { MobilePage, AeButton, Guide },
  data: () => ({
    seed: generateMnemonic(),
    readingPaused: false,
    readingEnded: false,
    keyEmoji: keyEmojiPath,
  }),
  methods: {
    async createSeed() {
      if (this.readingEnded) {
        this.$router.push({ name: 'new-account-confirm', params: { seed: this.seed } });
      } else {
        this.readingPaused = true;
        await this.$store.dispatch('alert', {
          title: 'That was too fast',
          text: 'Please make sure to write it down on paper, and don\'t loose it!',
        });
        this.readingPaused = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/placeholders/typography.scss';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.new-account-create {
  .mnemonic {
    @extend %face-mono-s;
    line-height: 1.67;
    color: $color-neutral-negative-3;
  }

  .progress {
    @keyframes increase-width {
      from { width: 0; }
      to { width: 100%; }
    }

    height: 7px;
    background: $color-primary;
    position: fixed;
    bottom: 0;
    left: 0;
    animation: increase-width 6s linear forwards;
  }
}
</style>