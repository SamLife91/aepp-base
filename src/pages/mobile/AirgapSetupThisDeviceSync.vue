<template>
  <MobilePage
    class="airgap-setup-this-device-sync"
    title="AirGap Setup"
  >
    <AeFraction
      slot="title"
      numerator="3"
      denominator="3"
    />
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="3"
        denominator="3"
      />
      <em>Vault sync completed</em>
      <br>Find your AirGap Vault
      <br>under your accounts.
    </Guide>

    <AeButton
      slot="footer"
      fill="alternative"
      @click="$router.push({ name: 'apps' });"
    >
      Finish
    </AeButton>
  </MobilePage>
</template>

<script>
import MobilePage from '../../components/mobile/Page.vue';
import Guide from '../../components/Guide.vue';
import AeFraction from '../../components/AeFraction.vue';
import AeButton from '../../components/AeButton.vue';

export default {
  components: {
    MobilePage, AeButton, Guide, AeFraction,
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.airgap-setup-this-device-sync .ae-fraction {
  color: $color-alternative;
}
</style>
