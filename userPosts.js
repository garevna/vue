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
              <transition-group name="articles" tag="div">
                <div v-for="item in currentUserPosts"
                      :key="item.head">
                  <transition name="articles" tag="div">
                  <h3>{{ item.head }}</h3>
                  </transition>
                  <transition name="articles" tag="div">
                  <img v-if="item.pict" :src="item.pict"/>
                  </transition>
                  <transition name="articles" tag="div">
                  <pre>{{ item.code }}</pre>
                  </transition>
                  <p>{{ item.text }}</p>
                  <a v-if="item.ref"
                      v-for="sample in item.ref"
                      class="menu-item"
                      :href="sample" target="_blank">
                    <span :v-if="item.ref">Пример</span>
                  </a>
                  <hr/>
                </div>
              </transition-group>
             </section>`
}
