<template>
  <MobilePage
    class="airgap-setup-this-device"
    title="AirGap Setup"
    left-button-icon-name="back"
    right-button-icon-name="close"
    @left-button-click="$router.back();"
    @right-button-click="$router.push({ name: 'apps' })"
  >
    <AeFraction
      slot="title"
      numerator="2"
      denominator="3"
    />
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="2"
        denominator="3"
      />
      <em>
        Install AirGap on this
        <br>smartphone
      </em>
      <br>Installing AirGap on this
      <br>device makes your Vault
      <br>pretty safe. For maximum
      <br>security, install AirGap
      <br>Vault on another device.
    </Guide>

    <AeButton
      slot="footer"
      fill="alternative"
      @click="$router.push({ name: 'airgap-setup-this-device-sync' });"
    >
      Sync with AirGap Vault
    </AeButton>
    <AeButton
      slot="footer"
      to="https://itunes.apple.com/us/app/airgap-vault-secure-secrets/id1417126841?l=de&ls=1&mt=8"
      fill="dark"
      plain
      style="margin-bottom: 0"
    >
      Install AirGap Vault
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

.airgap-setup-this-device .ae-fraction {
  color: $color-alternative;
}
</style>
