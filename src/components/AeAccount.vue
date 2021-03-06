<template>
  <AeCard
    :fill="fill"
    class="ae-account"
  >
    <header>
      <AeIdenticon :address="address" />
      <AeInputPlain
        v-if="nameEditable"
        v-focus="nameEditable"
        :value="name"
        placeholder="Account name"
        fill="white"
        maxlength="16"
        @input="$emit('name-input', $event)"
        @blur.native="$emit('name-blur')"
      />
      <span v-else>
        {{ name }}
      </span>
      <div class="slot-icon">
        <slot name="icon" />
      </div>
    </header>

    <main>
      <AeAddress
        :address="address"
        length="medium"
      />
    </main>

    <Balance
      slot="toolbar"
      :balance="balance"
      invert
    />
  </AeCard>
</template>

<script>
import { focus } from 'vue-focus';
import { AeIdenticon, AeInputPlain } from '@aeternity/aepp-components-3';
import BigNumber from 'bignumber.js';
import AeCard from './AeCard.vue';
import AeAddress from './AeAddress.vue';
import Balance from './Balance.vue';

export default {
  directives: { focus },
  components: {
    AeAddress,
    AeIdenticon,
    AeCard,
    AeInputPlain,
    Balance,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    balance: {
      type: BigNumber,
      required: true,
    },
    fill: {
      type: String,
      required: true,
    },
    nameEditable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/placeholders/typography.scss';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.ae-account.ae-card {
  header {
    display: flex;
    align-items: center;
    margin: rem(12px) rem(16px);

    .slot-icon {
      margin-left: auto;
    }

    span {
      @extend %face-sans-base;
      color: $color-neutral-maximum;
    }

    .ae-identicon {
      margin-right: rem(8px);
    }
  }

  main {
    display: flex;
    justify-content: flex-end;
    margin: rem(32px) rem(16px) rem(8px) rem(16px);
  }

  /deep/ .ae-toolbar {
    text-align: right;
  }
}
</style>
