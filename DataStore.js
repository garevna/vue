var dataStore = new Vue ({
  data: {
    currentSectionId:null,
    mainDataIsReady: false,
    postDataIsReady: false,
    mainData: null,
    postData: null,
    mainMenuOptions: null,
    sectionInfo: null,
    sectionPosts: null
  },
  methods: {
    getCurrentSectionInfo: function () {
      if ( !this.currentSectionId || !this.mainDataIsReady ) return
      var section = this.currentSectionId
      this.sectionInfo = this.mainData.filter ( function ( item ) {
            return item.name === section
      })[0]
    },
    getCurrentSectionPosts: function () {
      if ( !this.currentSectionId || !this.postDataIsReady ) return
      this.sectionPosts = this.postData [ this.currentSectionId ]
    }
  }
})
// Events from $http
dataStore.$on ( 'main-data-is-ready', function ( theData ) {
  this.mainDataIsReady = true
  this.mainData = theData
  this.mainMenuOptions = this.mainData.map ( function ( item ) {
    return item.name
  })
  this.getCurrentSectionInfo ()
  this.$emit ( 'main-data' )
})
dataStore.$on ( 'main-data-error', function ( theData ) {
  this.mainDataIsReady = false
  console.error ( theData )
})
dataStore.$on ( 'post-data-is-ready', function ( theData ) {
  this.postDataIsReady = true
  this.postData = theData
  this.getCurrentSectionPosts ()
  this.$emit ( 'post-data')
})
dataStore.$on ( 'post-data-error', function ( theData ) {
  this.postDataIsReady = false
  console.error ( theData )
})
// Events from Vue instance - request for current section data
dataStore.$on ( 'get-section-onfo', function ( currentSectionId ) {
    this.currentSectionId = currentSectionId
    this.getCurrentSectionInfo ()
    this.getCurrentSectionPosts ()
})
