const app = new Vue ( {
  data: function () {
      return {
        section:false,
        details:false,
        mainData: mainData
      }
  },
  computed: {
    mainMenuOptions: function () {
      return this.mainData.map ( function (item) {
        return item.name
      })
    }
  },
  router,
  components: {
    'dropdown-menu': BaseDropdownMenu,
    MainSection
  }
}).$mount('#app')

app.$on ( 'menuSelect', function ( val ) {
  if ( val === 'about' || val === 'details' ) {
    this.$router.push( { name: val } )
  }
  else
    this.$router.push( { name: "mainSection", 
                         params: { id:val } } )
});