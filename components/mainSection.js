const MainSection = {
  props: ['id'],
  data: function () {
    return {
      sectionMenu: ["about", "details"],
      sectionPosts: sectionPosts,
      section: false,
      details: false,
      sectionChanged:false,
	  sectionMenuVisible:false
    }
  },
  computed: {
    sectionInfo: {
      get: function () {
        var currentSectionId = this.id
        var tmp = mainData.filter ( function ( item ) {
          return item.name === currentSectionId
        })
        return tmp[0]
      },
      set: function ( newValue ) {
        this.sectionInfo = newValue
      }
    },
    articles: {
      get: function () {
        return this.sectionPosts [ this.id ]
      },
      set: function ( newValue ) {
        this.sectionPosts [ this.id ] = newValue
      }
    }
  },
  methods: {
    changeSectionInfo: function () {
      var currentId = this.id
      return mainData.filter ( function ( item ) {
          return item.name === currentId
      });
    },
    changeSectionPosts: function () {
      return this.sectionPosts [ this.id ]
    },
    sendSectionEvent: function ( eventType ) {
      this.$emit('section-event', 
          { type: eventType, section: this.id } )
    },
	  openSectionMenu: function ( event ) {
		  this.sectionMenu = !this.sectionMenu
	  }
  },
  mounted: function () {
    this.sendSectionEvent ( "sectionChanged" )
    this.$on ( 'menuSelect', function ( val ) {
      this.$parent.$router.push ( { name: val })
    } )
  },
  components: {
    'dropdown-menu': BaseDropdownMenu
  },
  template: `
    <div class="inner-content">
      <div class="main-content-header">
        <img src="./images/vue.svg" class="logo"/>
        <span>&nbsp;{{ id }}</span>
      </div>
      <dropdown-menu 
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