<template>
  <MobilePage
    class="address-book no-contacts"
    title="Addresses"
  >
    <AeDivider />
    <div class="banner">
      No saved contacts.
    </div>
    <FixedAddButton
      :to="{ name: 'address-book-new' }"
      quick-id
    />
  </MobilePage>
</template>

<script>
import { AeDivider } from '@aeternity/aepp-components';
import MobilePage from '../components/mobile/Page.vue';
import FixedAddButton from '../components/FixedAddButton.vue';

export default {
  components: { AeDivider, MobilePage, FixedAddButton },
};
</script>

<style lang="scss" scoped>
@import '~@aeternity/aepp-components/dist/variables.scss';

.address-book.no-contacts.mobile-page {
  /deep/ .panel .content {
    display: flex;
    flex-direction: column;
  }

  .banner {
    margin: auto;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    color: $grey;
  }
}
</style>
<style lang="scss" scoped src="./AddressBook.scss" />
