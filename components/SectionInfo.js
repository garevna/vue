const SectionInfo = {
  props:['id'],
  data: function () {
    return {
      store: this.$root.store
    }
  },
  methods: {
    sendSectionEvent ( eventType ) {
      this.$parent.$emit('section-event', {
                            type: eventType,
                            section: this.currentSection
                          } )
    }
  },
  template: `
    <transition name="slideRight">
      <div class="section">
          <img v-if="store.sectionInfo.picture"
               class="section-picture"
               :src="store.sectionInfo.picture"/>
          <a v-if="store.sectionInfo.ref"
                target="_blank"
                class="menu-item"
                :href="store.sectionInfo.ref">
            <span v-if="store.sectionInfo.ref">Demo</span>
          </a>
          <div class="section-title">
              {{ store.sectionInfo.title }}
          </div>
          <p v-html="store.sectionInfo.comment"></p>
          <div v-if="store.sectionInfo.code"
                class="code-snippet">
            <p v-for="item in store.sectionInfo.code">
                {{ item.replace(/ /g,"&nbsp;") }}
            </p>
          </div>
      </div>
    </transition>`
}
