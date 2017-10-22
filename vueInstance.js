const app = new Vue( {
    data: function () {
      return {
        menuVisible: false,
        profile:false,
        posts:false,
        routes_data: routes_data,
        currentRoute: {}
      }
    },
    computed: {
      dropdown_class: function () {
        return this.menuVisible ? "dropdown-active" : "dropdown"
      }
    },
    router,
    methods: {
      hideMenu: function ( params ) {
        this.currentUser = params.user
        this.profile = params.type === 'profile'
        this.posts = params.type === 'posts'
        this.menuVisible = false
      },
      changeMenuState: function ( event ) {
        this.menuVisible = !this.menuVisible
      }
    },
    components: {
      menuButton: ( 'menu-button', {
        template:`<button
                  @click="this.$parent.changeMenuState"
                  class="menu_button">
                  &#9776;
                </button>`
        }),
      }
  }).$mount('#app')

