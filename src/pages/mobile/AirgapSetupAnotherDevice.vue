<template>
  <MobilePage
    class="airgap-setup-another-device"
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
        Install AirGap on another
        <br>phone
      </em>
      <br>Search for AirGap.it in the
      <br>store or scan this QR code.
    </Guide>

    <AeQrCode
      :size="241"
      data="https://airgap.it/"
    />

    <AeButton
      slot="footer"
      fill="alternative"
      @click="$router.push({ name: 'airgap-setup-another-device-link' });"
    >
      Link
    </AeButton>
  </MobilePage>
</template>

<script>
import MobilePage from '../../components/mobile/Page.vue';
import Guide from '../../components/Guide.vue';
import AeFraction from '../../components/AeFraction.vue';
import AeQrCode from '../../components/AeQrCode.vue';
import AeButton from '../../components/AeButton.vue';

export default {
  components: {
    MobilePage, AeButton, Guide, AeFraction, AeQrCode,
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/globals/functions.scss';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.airgap-setup-another-device {
  .ae-fraction {
    color: $color-alternative;
  }

  .guide {
    margin-bottom: rem(41px);
  }

  .ae-qr-code {
    margin: 0 auto;
  }
}
</style>
