const UserPosts = {
  props:[ 'currentUser' ],
  data: function () {
    return { currentUserPosts: this.$parent.articles }
  },
  mounted: function () {
    this.sendUserEvent ( 'posts' )
  },
  methods: {
    changeUserInfo: function ( currentUserId ) {
        return routes_data.filter ( function ( item ) {
            return item.id === currentUserId;
        });
    },
    sendUserEvent ( eventType ) {
      this.$parent.$emit('user-event', {
                            type: eventType,
                            user: this.currentUser
                          } )
    }
  },
  template: `<section class="article">
                <div v-for="item in currentUserPosts">
                  <h3>{{item.head}}</h3>
                  <img :src="item.pict"/>
                  <p>{{item.text}}</p>
                </div>
             </section>`
}
