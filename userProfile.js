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
                <img v-if="this.currentUserData.picture"
                    class="picture"
                    :src="this.currentUserData.picture"/>
                <h3>{{currentUserData.title}}</h3>
                <p>{{currentUserData.comment}}</p>
                <pre v-if="currentUserData.code">
                  {{currentUserData.code}}
                </pre>
                <a v-if="currentUserData.ref"
                    target="_blank"
                    class="menu-item"
                    :href="currentUserData.ref">
                  <span v-if="currentUserData.ref">Demo</span>
                </a>
             </div>`,
  mounted: function () {
    this.sendUserEvent ( 'profile' )
  }
}
