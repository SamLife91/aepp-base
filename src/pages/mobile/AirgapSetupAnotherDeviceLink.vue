<template>
  <MobilePage
    class="airgap-setup-another-device-link"
    title="AirGap Setup"
    left-button-icon-name="back"
    @left-button-click="$router.back();"
  >
    <AeFraction
      slot="title"
      numerator="3"
      denominator="3"
    />
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="1"
        denominator="5"
      />
      <em>
        Open AirGap on the 2nd
        <br>device
      </em>
      <br>Turn off the internet
      <br>connection before
      <br>opening AirGap.
    </Guide>
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="2"
        denominator="5"
      />
      <em>Create secret key</em>
      <br>No internet connection
      <br>means maximum security
      <br>for the key.
    </Guide>
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="3"
        denominator="5"
      />
      <em>
        Write it down in the right
        <br>order
      </em>
      <br>You will need it for
      <br>recovery.
    </Guide>
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="4"
        denominator="5"
      />
      <em>Add an æternity wallet</em>
      <br>Tap wallet, add wallet and
      <br>choose æternity.
    </Guide>
    <Guide fill="alternative">
      <AeFraction
        slot="icon"
        numerator="5"
        denominator="5"
      />
      <em>Link your æternity wallet</em>
      <br>Finish by linking your vault
      <br>to you æternity address.
    </Guide>

    <AeButton
      slot="footer"
      fill="alternative"
      @click="readValueFromQrCode"
    >
      Link Vault
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
  methods: {
    async readValueFromQrCode() {
      await this.$store.dispatch('modals/readQrCode', { title: 'Link Vault' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components-3/src/styles/variables/colors.scss';

.airgap-setup-another-device-link .ae-fraction {
  color: $color-alternative;
}
</style>
