const UserHome = {
  props: ['currentUser'],
  computed: {
    userInfo: function () {
      return this.$root.currentUserParams
    }
  },
  watch: {
    '$route' (to, from) {
      console.log ( 'UserHome to: ', to )
      console.log ( 'UserHome from: ', from )
    }
  },
  template: `<div>
    
    <router-link class="menu-item" 
                to="profile">
        Профиль
    </router-link>
    <router-link class="menu-item"
                to="posts">Посты</router-link>
  </div>`
}
