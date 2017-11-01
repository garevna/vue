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
          <div class="section-title">
              {{ store.sectionInfo.title }}
          </div>
          <p v-html="store.sectionInfo.comment"></p>
          <pre v-if="store.sectionInfo.code"
                 v-for="item in store.sectionInfo.code">
              <code>{{item}}</code>
          </pre>
          <a v-if="store.sectionInfo.ref"
                target="_blank"
                class="menu-item"
                :href="store.sectionInfo.ref">
            <span v-if="store.sectionInfo.ref">Demo</span>
          </a>
      </div>
    </transition>`
}
