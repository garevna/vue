const User = {
  props: ['id'],
  data: function () {
    return {
      usersPosts: usersPosts,
      profile: false,
      posts: false,
      userChanged:false,
	    userMenu:false
    }
  },
  computed: {
    userInfo: {
      get: function () {
        var currentUserId = this.id
        var tmp = routes_data.filter ( function ( item ) {
          return item.name === currentUserId
        })
        return tmp[0]
      },
      set: function ( newValue ) {
        this.userInfo = newValue
      }
    },
    articles: {
      get: function () {
        return this.usersPosts [ this.id ]
      },
      set: function ( newValue ) {
        this.usersPosts [ this.id ] = newValue
      }
    }
  },
  methods: {
    changeUserInfo: function () {
      var currentId = this.id
      return routes_data.filter ( function ( item ) {
          return item.name === currentId
      });
    },
    changeUserPosts: function () {
      return this.usersPosts [ this.id ]
    },
    sendUserEvent: function ( eventType ) {
      this.$emit('user-event', { type: eventType, user: this.id } )
    },
	  openUserMenu: function ( event ) {
		  this.userMenu = !this.userMenu
	  }
  },
  on: {
	  'user-event': function () {
		  this.userMenu = !this.userMenu
	  }
  },
  mounted: function () {
    this.sendUserEvent ( "userChanged" )
  },
  watch: {
    '$route': function () {
      this.sendUserEvent ( this.$route.name )
      this.profile = this.$route.name === 'profile'
      this.posts = this.$route.name === 'posts'
    }
  },
  template: `
    <div class="user">
      <h3>{{ id }}</h3>
      <div class="settings-button" @click="openUserMenu">
	  </div>
	  <div class="right-menu-item" v-if = "this.userMenu">
	  	<transition name="slideUp">
      		<router-link class="menu-item"
                	v-if = "this.userMenu && !this.profile"
                	:currentUser = "this.id"
                	:to='{ name:"profile" }'>
          		Общие сведения
      		</router-link>
	  	</transition>
	  	<transition name="slideUp">
      		<router-link class="menu-item"
                	v-if = "this.userMenu && !this.posts"
                	:currentUser = "this.id"
                	:to='{ name:"posts" }'>
          		Разделы
      		</router-link>
	  	</transition>
	  </div>
      <router-view class="userInfo"
                :currentUser = "this.id"
                v-if = "this.profile || this.posts">
          Инфо
      </router-view>
    </div>
  `
}