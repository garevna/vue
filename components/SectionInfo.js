const SectionInfo = {
  props:[ 'id' ],
  computed: {
    sectionIsReady: function () {
      return this.$root.$store.getters.sectionIsReady
    },
    sectionInfo: function () {
      this.$root.$store.commit ( 'getCurrentSectionInfo' )
      return this.$root.$store.state.sectionInfo
    }
  },
  methods: {
  },
  template: `
    <transition name="slideRight">
      <div class="section" v-if="sectionIsReady">
          <img v-if="sectionInfo.picture"
               class="section-picture"
               :src="sectionInfo.picture"/>
          <a v-if="sectionInfo.ref"
                target="_blank"
                class="menu-item"
                :href="sectionInfo.ref">
            <span v-if="sectionInfo.ref">Demo</span>
          </a>
          <div class="section-title">
              {{ sectionInfo.title }}
          </div>
          <p v-html="sectionInfo.comment"></p>
          <div v-if="sectionInfo.code"
                class="code-snippet">
            <p v-for="item in sectionInfo.code">
                {{ item.replace(/ /g,"&nbsp;") }}
            </p>
          </div>
      </div>
    </transition>`
}
