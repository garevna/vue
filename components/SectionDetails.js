const SectionDetails = {
  data: function () {
    return {
      currentSectionPosts: function () {
        this.$root.store.sectionPosts &&
        this.$root.store.sectionPosts.length > 0 ?
        this.$root.store.sectionPosts :
        [{
            head: "В работе...",
            pict: "./images/smile-03.gif",
            text: `К сожалению, материал еще не готов`,
            code: false,
            ref:false
          }]
      }
    }
  },
  methods: {
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
            <p class="section-article-title"
                @click="changeVisibility">
              {{ title }}
            </p>
          </transition>
          <transition name="slideUp">
            <img v-if="image && this.postIsVisible"
                  :src="image"/>
          </transition>
          <transition name="slideUp">
            <div v-if="this.postIsVisible"
                  class="code-snippet">
              <pre v-for = "cod in code">
                  <code>{{cod}}</code>
              </pre>
            </div>
          </transition>
          <transition name="slideUp">
            <p v-if="text && this.postIsVisible"
                v-html="text">
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
  mounted: function () {
    console.log (this.$parent.articles)
  },
  template: `
    <transition name="slideDown">
      <section class="section-article">
                <div v-for="item in this.$root.store.sectionPosts">
                  <current-post :title="item.head"
                                :image="item.pict"
                                :code="item.code"
                                :text="item.text"
                                :refs="item.ref">
                  </current-post>
                  <hr/>
                </div>
             </section>
    </transition>`
}
