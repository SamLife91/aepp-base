<template>
  <progress
    class="progress"
    v-bind="$attrs"
  />
</template>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/globals/functions.scss';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  height: rem(2px);
  border: none;
  color: $color-magenta;

  @each $name in (
    '',
    '::-webkit-progress-bar',
  ) {
    &#{$name} {
      background-color: $color-neutral-positive-1;
    }
  }

  @each $name in (
    -webkit-progress-value,
    -moz-progress-bar,
  ) {
    &::#{$name} {
      background-color: $color-magenta;
    }
  }
}
</style>
