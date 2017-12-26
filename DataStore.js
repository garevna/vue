const store = new Vuex.Store ({
  state: {
      mainData: null,
      postData: null,
      currentSectionId: null,
      currentPostReadme: [],
      sectionMenuSelected: null,
      mainDataIsReady: false,
      postDataIsReady: false,
      sectionInfo: null,
      sectionPosts: null,
      emptyPost: [{
          head: "В работе...",
          pict: "./images/smile-03.gif",
          text: `К сожалению, материал еще не готов`
      }]
  },
  getters: {
    dataIsReady:  state => state.mainDataIsReady && state.postDataIsReady,
    sectionIdDefined:  state => state.currentSectionId !== null,
    sectionIsReady:  state =>
          state.mainDataIsReady && state.postDataIsReady &&
                            state.currentSectionId !== null
    ,
    mainMenuitems: state =>
          state.mainDataIsReady ?
          state.mainData.map ( item => item.name ) : [],
  },
  mutations: {
    changeCurrentSectionId: ( state, sectionId ) => {
        if ( sectionId === 'about' || sectionId === 'details' )
              state.sectionMenuSelected = sectionId
        else {
          state.currentSectionId = sectionId
        }
    },
    getCurrentSectionInfo: state => {
      state.sectionInfo = state.mainData.filter ( item =>
                          item.name === state.currentSectionId )[0]
    },
    getCurrentSectionPosts: state => {
      state.sectionPosts = state.postData [ state.currentSectionId ]
    } ,
    getMainData: ( state, mainData ) => {
        state.mainData = mainData
        state.mainDataIsReady = true
        state.mainMenuOptions = mainData.map ( item => item.name )
    },
    getPostData: ( state, postData ) => {
        state.postData = postData
        state.postDataIsReady = true
    },
  },
  actions: {
      
  }
})
