<template>
  <AeModal class="migrated-balance-modal">
    <div class="balance">
      <div class="label">
        {{ migratedBalance }}
      </div>
      are in migration now. They will be available after the next hardfork.
    </div>

    <div class="buttons">
      <AeButton @click="$emit('close')">
        Ok
      </AeButton>
      <AeButton
        :to="'https://token-migration.aepps.com/#/status/result/' + activeIdentity.address"
        plain
      >
        See migrations
      </AeButton>
    </div>
  </AeModal>
</template>

<script>
import BigNumber from 'bignumber.js';
import { mapGetters } from 'vuex';
import AeModal from '../AeModal.vue';
import AeButton from '../AeButton.vue';
import { MAGNITUDE } from '../../lib/constants';

export default {
  components: {
    AeModal,
    AeButton,
  },
  data() {
    return {
      migratedBalance: '',
    };
  },
  computed: mapGetters(['activeIdentity']),
  async mounted() {
    const response = await fetch(process.env.VUE_APP_MIGRATION_STATUS_URL.replace('ADDRESS', this.activeIdentity.address));
    const json = await response.json();
    this.migratedBalance = json
      .filter(i => i.deliveryPeriod > process.env.VUE_APP_MIGRATION_PHASE)
      .reduce((r, item) => r.plus(item.value), BigNumber(0)).shiftedBy(-MAGNITUDE).toFormat();
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/placeholders/typography.scss';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.migrated-balance-modal.ae-modal {
  background-color: rgba($color-neutral-positive-2, 0.8);

  /deep/ .modal {
    width: rem(275px);
    padding: rem(50px) rem(30px) rem(10px) rem(30px);
    border-radius: rem(4px);
    background-color: $color-neutral-positive-3;
  }

  .balance {
    @extend %face-sans-s;
    font-weight: normal;
    color: $color-neutral-negative-3;
    text-align: center;

    .label {
      margin-bottom: rem(8px);
      @extend %face-sans-l;
      font-size: rem(43px);
      font-weight: bold;
      word-break: break-all;
      line-height: rem(40px);

      &:after {
        margin-left: rem(-8px);
        @extend %face-sans-s;
        content: 'AE';
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    margin-top: rem(20px);

    .ae-button {
      min-width: 0;
    }
  }
}
</style>
