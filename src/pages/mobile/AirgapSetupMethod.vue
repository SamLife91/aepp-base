<template>
  <MobilePage
    class="airgap-setup-method"
    title="AirGap Setup"
    right-button-icon-name="close"
    @right-button-click="$router.push({ name: 'apps' })"
  >
    <AeFraction
      slot="title"
      numerator="1"
      denominator="3"
    />
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="1"
        denominator="3"
      />
      <em>
        Robust security with
        <br>AirGap Vault
      </em>
      <br>We recommend using a
      <br>secondary offline device.
    </Guide>

    <ListItemChoose
      title="Maximum (recommended)"
      subtitle="Install AirGap on another device"
      :checked="maximumSecure"
      @click="maximumSecure = true"
    >
      <img
        slot="icon"
        :src="mobilePhoneEmoji"
      >
    </ListItemChoose>
    <ListItemChoose
      title="Normal"
      subtitle="Install AirGap on this device"
      :checked="!maximumSecure"
      @click="maximumSecure = false"
    >
      <img
        slot="icon"
        :src="lockEmoji"
      >
    </ListItemChoose>

    <AeButton
      slot="footer"
      fill="alternative"
      @click="$router.push({
        name: maximumSecure ? 'airgap-setup-another-device' : 'airgap-setup-this-device'
      });"
    >
      Next
    </AeButton>
  </MobilePage>
</template>

<script>
import mobilePhoneEmojiPath from 'emoji-datasource-apple/img/apple/64/1f4f1.png';
import lockEmojiPath from 'emoji-datasource-apple/img/apple/64/1f512.png';
import MobilePage from '../../components/mobile/Page.vue';
import Guide from '../../components/Guide.vue';
import AeFraction from '../../components/AeFraction.vue';
import ListItemChoose from '../../components/ListItemChoose.vue';
import AeButton from '../../components/AeButton.vue';

export default {
  components: {
    MobilePage, AeButton, Guide, AeFraction, ListItemChoose,
  },
  data: () => ({
    mobilePhoneEmoji: mobilePhoneEmojiPath,
    lockEmoji: lockEmojiPath,
    maximumSecure: true,
  }),
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/globals/functions.scss';
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.airgap-setup-method {
  .ae-fraction {
    color: $color-alternative;
  }

  .guide {
    margin-bottom: rem(79px);
  }
}
</style>
