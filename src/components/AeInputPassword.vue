<template>
  <AeInput
    class="ae-input-password"
    :type="showPassword ? 'text' : 'password'"
    :value="value"
    v-bind="$attrs"
    :header="header"
    v-on="$listeners"
  >
    <slot
      v-for="slot in Object.keys($slots)"
      :slot="slot"
      :name="slot"
    />
    <AeToolbarButton
      v-if="!hideRevealButton"
      slot="footer-right"
      type="button"
      @click="showPassword = !showPassword"
    >
      <AeIcon name="eye" />
    </AeToolbarButton>
  </AeInput>
</template>

<script>
import { AeIcon } from '@aeternity/aepp-components-3';
import AeInput from './AeInput.vue';
import AeToolbarButton from './AeToolbarButton.vue';

export default {
  components: { AeInput, AeToolbarButton, AeIcon },
  props: {
    value: { type: String, default: '' },
    header: { type: String, default: 'Password' },
    hideRevealButton: { type: Boolean, default: false },
  },
  data: () => ({ showPassword: false }),
};
</script>

<style lang="scss" scoped>
.ae-input-password /deep/ input::-ms-reveal {
  display: none;
}
</style>
