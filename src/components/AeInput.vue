<template>
  <AeInputWrapper
    class="ae-input"
    v-bind="$attrs"
  >
    <slot
      v-for="slot in Object.keys($slots)"
      :slot="slot"
      :name="slot"
    />
    <input
      :id="id"
      v-focus.lazy="autofocus"
      slot-scope="{ setFocus, id }"
      :value="value"
      v-bind="$attrs"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      @input="$emit('input', $event.target.value)"
    >
  </AeInputWrapper>
</template>

<script>
import { focus } from 'vue-focus';
import AeInputWrapper from './AeInputWrapper.vue';

export default {
  components: { AeInputWrapper },
  directives: { focus },
  props: {
    value: { type: String, default: '' },
    autofocus: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';
@import '~@aeternity/aepp-components-3/src/styles/placeholders/typography.scss';

.ae-input input {
  display: block;
  width: 100%;
  margin: rem(1px) 0 rem(7px) 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  @extend %face-sans-base;
  color: $color-neutral-negative-3;

  &::placeholder {
    color: $color-neutral-negative-1;
  }
}
</style>
