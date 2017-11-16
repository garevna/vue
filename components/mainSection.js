const MainSection = {
  props: ["id"],
  data: function () {
    return {
      sectionMenu: ["about", "details"],
      sectionInfoVisible: false,
      sectionPostsVisible: false,
      sectionChanged:false
    }
  },
  methods: {
    sendSectionEvent: function ( eventType ) {
      this.$emit ( 'section-event',
          { type: eventType, section: this.id } )
    },
	  openSectionMenu: function ( event ) {
		  this.sectionMenu = !this.sectionMenu
	  }
  },
  mounted: function () {
    this.$root.store.$on ( 'main-data',
        () => {
	    this.dataIsReady = true
	    this.$parent.$router.push ( { name: 'about' })
    	}
    )
    this.sendSectionEvent ( "sectionChanged" )
    this.$on ( 'menuSelect', function ( val ) {
      this.$parent.$router.push ( { name: val })
    } )
  },
  components: {
    'dropdown-menu': BaseDropdownMenu
  },
  template: `
    <div class="inner-content"
          v-if="this.$root.store.mainDataIsReady">
      <div class="main-content-header">
        <img src="./images/vue.svg" class="logo"/>
        <span>&nbsp;{{ id }}</span>
      </div>
      <dropdown-menu v-if = "this.$root.store.postDataIsReady"
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
