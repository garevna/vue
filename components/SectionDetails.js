const SectionDetails = {
  data: function () {
    return {
      currentSectionPosts: 
        this.$parent.articles && 
        this.$parent.articles.length > 0 ? 
        this.$parent.articles : 
        [{
            head: "В работе...",
            pict: sadSmile,
            text: `К сожалению, материал еще не готов`,
            code: false,
            ref:false
          }]
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
  template: `
    <transition name="slideDown">
      <section class="section-article">
                <div v-for="item in currentSectionPosts">
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