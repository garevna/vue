const UserPosts = {
  props:[ 'currentUser' ],
  data: function () {
    return {
      currentUserPosts: this.$parent.articles
    }
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
    },
    changeVisibility: function () {
      this.visible = !this.visible
    }
  },
  components: {
    currentPost: ( 'current-post', {
      props: [ "title", "image", "code", "text", "refs" ],
      data: function () {
        return { postIsVisible: false }
      },
      methods: {
        changeVisibility: function () {
          this.postIsVisible = !this.postIsVisible
        },
        openRef: function ( ref ) {
          window.open (ref, "_blank")
        }
      },
      template: `
        <section>
          <transition name="slideLeft">
            <h3 class="menu-item" @click="changeVisibility">{{ title }}</h3>
          </transition>
          <transition name="slideUp">
            <img v-if="image && this.postIsVisible" 
                  :src="image"/>
          </transition>
          <transition name="slideUp">
            <pre v-if="code && this.postIsVisible">
              {{ code }}
            </pre>
          </transition>
          <transition name="slideUp">
            <p v-if="text && this.postIsVisible">
              {{ text }}
            </p>
          </transition>
          <ol v-for="sample in refs">
              <li class="menu-item"
                @click="openRef(sample)"
                >
              </li>
          </ol>
        </section>
      `
    })
  },
  template: `<section class="article">
                <div v-for="item in currentUserPosts">
                  <current-post :title="item.head"
                                :image="item.pict"
                                :code="item.code"
                                :text="item.text"
                                :refs="item.ref">
                  </current-post>
                  <hr/>
                </div>
             </section>`
}
