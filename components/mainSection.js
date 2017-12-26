const MainSection = {
  props: [ "id" ],
  data: function () {
    return  {
      sectionMenu: [ 'about', 'details' ],
      sectionInfoIsVisible: false,
      sectionPostsAreVisible: false
    }
  },
  computed: {
      sectionIsReady: function () {
        return this.$root.$store.getters.sectionIsReady
      },
      sectionInfoVisible: function () {
        return this.$root.$store.getters.sectionInfoVisible
      },
      sectionPostsVisible: function () {
        return this.$root.$store.getters.sectionPostsVisible
      },
      sectionInfo: function () {
        return this.$root.$store.sectionInfo
      },
      sectionPosts: function () {
        return this.$root.$store.sectionPosts
      }
  },

  mounted: function () {
    console.log ( 'MainSection: ', this.id )
    console.log ( 'MainSection sectionMenu: ', this.sectionMenu )
    store.commit ( 'changeCurrentSectionId', this.id )
    this.$on ( 'menuSelect', function ( val ) {
      console.info ( 'MainSection menuSelect: ' + val )
      this.$router.push ( { name: val, props: true } )
    } )
  },
  components: {
    'dropdown-menu': BaseDropdownMenu
  },
  template: `
    <div class="inner-content">
      <div class="main-content-header" v-if="id">
        <span>&nbsp;{{ id }}</span>
      </div>
      <dropdown-menu v-if="sectionIsReady"
	          :options="sectionMenu"
	          buttonClass="right-dropdown-menu-button"
	          menuClass="right-dropdown-menu"
	          transitionName="slideUp">
      </dropdown-menu>

      <router-view class="section-info">
      </router-view>
    </div>
  `
}
