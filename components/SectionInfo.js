const SectionInfo = {
  props:['id'],
  data: function () {
    return { currentSectionData: this.$parent.sectionInfo }
  },
  methods: {
    changeSectionInfo: function ( currentSectionId ) {
        return routes_data.filter ( function ( item ) {
            return item.id === currentSectionId;
        });
    },
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
          <img v-if="this.currentSectionData.picture"
               class="section-picture"
               :src="this.currentSectionData.picture"/>
          <div class="section-title">
              {{currentSectionData.title}}
          </div>
          <p>{{currentSectionData.comment}}</p>
          <pre v-if="currentSectionData.code">
              {{currentSectionData.code}}
          </pre>
          <a v-if="currentSectionData.ref"
                target="_blank"
                class="menu-item"
                :href="currentSectionData.ref">
            <span v-if="currentSectionData.ref">Demo</span>
          </a>
      </div>
    </transition>`
}