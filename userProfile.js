const UserProfile = {
  props:['currentUser'],
  data: function () {
    return { currentUserData: this.$parent.userInfo }
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
  template: `<div>
                <img class="picture"
                  :src="this.currentUserData.picture"/>
                <p>{{currentUser}}</p>
                <h1>{{currentUserData.title}}</h1>
                <p>{{currentUserData.comment}}</p>
             </div>`,
  mounted: function () {
    this.sendUserEvent ( 'profile' )
  }
}
