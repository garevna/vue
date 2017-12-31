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
    openRef: ref => window.open ( ref, "_blank" )
  },
  template: `
    <transition name="slideRight">
      <div class="section" v-if="sectionIsReady">
          <img v-if="sectionInfo.picture"
               class="section-picture"
               :src="sectionInfo.picture"/>
          <a v-if="sectionInfo.ref"
                target="_blank"
                class="demo-button"
                :href="sectionInfo.ref">
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
          <section class="refs-section" v-if="sectionInfo.usefull">
                <span v-for="ref in sectionInfo.usefull">
                    <span class="refs-section-item"
                        @click="openRef(ref)">
                    </span>
                </span>
          </section>
      </div>
    </transition>`
}
