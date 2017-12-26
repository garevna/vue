const SectionDetails = {
  props:[ 'id' ],
  computed: {
    sectionIsReady: function () {
      console.log ('******* ', this.$root.$store.getters.sectionIsReady)
      return this.$root.$store.getters.sectionIsReady
    } ,
    sectionPosts: function () {
      this.$root.$store.commit ( 'getCurrentSectionPosts' )
      console.log ('######## ', this.$root.$store.state.sectionPosts)
      return this.$root.$store.state.sectionPosts
    }
  },
  components: {
    'current-post': currentPost
  },
  methods: {
    changeVisibility: function () {
      this.visible = !this.visible
    }
  },
  mounted: function () {

  },
  template: `
    <transition name="slideDown">
      <section class="section-container" v-if="sectionIsReady">
          <div v-for="( item, index ) in sectionPosts">
                  <current-post
                        :index = "index"
                        :postObject = "item">
                  </current-post>
          </div>
      </section>
    </transition>`
}

