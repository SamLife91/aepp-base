<template>
  <MobilePage
    class="receive"
    :left-button-to="{ name: 'transfer' }"
    left-button-icon-name="back"
    header-fill="neutral"
  >
    <template slot="header">
      <Guide>
        <em>Let others scan</em>
        <br>your address
      </Guide>

      <AeAccountReverse
        v-bind="activeIdentity"
        fill="neutral"
      />
    </template>

    <ListItem
      v-copy-on-click="activeIdentity.address"
      class="copy"
      title="Copy address"
      subtitle="Share it with sender"
      border-dark
    >
      <img
        slot="icon"
        :src="writingHandEmoji"
      >
      <AeIcon
        slot="right"
        fill="alternative"
        face="round"
        name="check"
      />
    </ListItem>
  </MobilePage>
</template>

<script>
import { mapGetters } from 'vuex';
import { AeIcon } from '@aeternity/aepp-components-3';
import writingHandEmojiPath from 'emoji-datasource-apple/img/apple/64/270d-fe0f.png';
import copyOnClick from '../../directives/copyOnClick';
import MobilePage from '../../components/mobile/Page.vue';
import Guide from '../../components/Guide.vue';
import AeAccountReverse from '../../components/mobile/AeAccountReverse.vue';
import ListItem from '../../components/ListItem.vue';

export default {
  components: {
    MobilePage,
    Guide,
    AeAccountReverse,
    ListItem,
    AeIcon,
  },
  directives: { copyOnClick },
  data() {
    return {
      writingHandEmoji: writingHandEmojiPath,
    };
  },
  computed: mapGetters(['activeIdentity']),
};
</script>

<style lang="scss" scoped>
.receive .list-item.copy:not(.v-copied) .ae-icon {
  display: none;
}
</style>
