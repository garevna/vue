Vue.config.silent = true
const app = new Vue ( {
	data: {
		mainDataSource: "https://garevna.github.io/vue.github.io/data/mainData.json",
    		postDataSource: "https://garevna.github.io/vue.github.io/data/posts.json",
		section:false,
		details:false,
		mainMenuReady: false,

	},
	store,
	computed: Vuex.mapGetters ([
      'mainMenuitems'
  ]),
	created: function () {
			this.$http.get ( this.mainDataSource )
				.then ( response => {
					this.$store.commit ( 'getMainData', response.body )
					this.mainMenuReady = true
			})
			this.$http.get ( this.postDataSource )
				.then ( response => {
					this.$store.commit ( 'getPostData', response.body )
			})
	},
	mounted: function () {
			this.$on ( 'menuSelect', function ( val ) {
					this.$store.commit( 'changeCurrentSectionId', val )
					this.$store.commit( 'getCurrentSectionInfo' )
					this.$store.commit( 'getCurrentSectionPosts' )
					this.$router.push (
						{ name: "mainSection", params: { id: val } }
					)
			})
	},
	components: {
		'dropdown-menu': BaseDropdownMenu,
		MainSection,
	},
	router,
}).$mount ( '#VueCourseware' )
