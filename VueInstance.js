Vue.config.silent = true
const app = new Vue ( {
	data: {
		store: dataStore,
    mainDataSource: "https://garevna.github.io/vue.github.io/data/mainData.json",
    postDataSource: "https://garevna.github.io/vue.github.io/data/posts.json",
		section:false,
		details:false,
		mainMenuOptions: []
	},
	mounted: function () {
		if ( this.$route.name ) {
			this.store.$emit ( 'get-section-onfo',
				this.$route.params.id
			)
		}
		this.$http.get( this.mainDataSource ).then (
    	  this.mainDataSeccess,
    	  this.mainDataError
    ),
    this.$http.get( this.postDataSource ).then (
    	  this.postDataSeccess,
    	  this.postDataError
    )
	},
	components: {
		'dropdown-menu': BaseDropdownMenu,
		MainSection,
	},
	methods: {
		mainDataSeccess: function ( response ) {
      this.store.$emit ( 'main-data-is-ready', response.body )
    },
    postDataSeccess: function ( response ) {
      this.store.$emit ( 'post-data-is-ready', response.body )
    },
    mainDataError: function ( response ) {
      this.store.$emit ( 'main-data-error', response )
    },
    postDataError: function ( response ) {
      this.store.$emit ( 'post-data-error', response )
    }
	},
	router
}).$mount('#vue-courseware')

app.$on ( 'menuSelect', function ( val ) {
  if ( val === 'about' || val === 'details' ) {
    this.$router.push( { name: val } )
  }
	else {
		this.store.$emit ( 'get-section-onfo', val )
		this.$router.push ( { name: "mainSection",
                         params: { id:val }
											 } )
	}
})
app.$on ( 'request-for-readme', function ( readmeURL ) {
	console.info ( 'readmeURL: ', readmeURL )
	this.$http.get ( readmeURL ).then (
		response => {
    	this.store.$emit ( 'readme-file', {
				url: readmeURL,
				content: response.body
			})
  	},
		response => { console.log ( 'Error: ', response )
  })
})
