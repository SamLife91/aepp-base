<template>
  <div class="onboarding-page">
    <img src="../../assets/onboarding/phones.svg">
    <Guide>
      <em>Base aepp</em>
      <br>æternity begins here
      <div class="note">
        Send & receive AE, explore æpps
        <br>and manage accounts.
      </div>
    </Guide>
  </div>
</template>

<script>
import Guide from '../../components/Guide.vue';

export default {
  components: { Guide },
};
</script>

<style lang="scss" src="./OnboardingPage.scss" scoped />
