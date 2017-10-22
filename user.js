const User = {
  props: ['id'],
  data: function () {
    return {
      usersPosts: usersPosts,
      profile: false,
      posts: false,
      userChanged:false
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
    sendUserEvent ( eventType ) {
      this.$emit('user-event', { type: eventType, user: this.id } )
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
      <h2>Пользователь {{ id }}</h2>
      <img :src="userInfo.picture" class="userIco"/>
      <router-link class="menu-item"
                v-if = "!this.profile"
                :currentUser = "this.id"
                :to='{ name:"profile" }'>
          Профиль
      </router-link>
      <router-link class="menu-item"
                v-if = "!this.posts"
                :currentUser = "this.id"
                :to='{ name:"posts" }'>
          Посты
      </router-link>
      <router-view class="userInfo"
                :currentUser = "this.id"
                v-if = "this.profile || this.posts">
          Инфо
      </router-view>
    </div>
  `
}
