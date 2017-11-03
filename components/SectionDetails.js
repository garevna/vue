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
        return {
          postIsVisible: false,
          titleClass: "section-article-title"
        }
      },
      methods: {
        changeVisibility: function () {
          this.postIsVisible = !this.postIsVisible
          this.titleClass = this.postIsVisible ?
                              "section-article-title-active" :
                              "section-article-title"
        },
        openRef: ref => window.open ( ref, "_blank" )
      },
      template: `
        <section>
          <transition name="slideLeft">
            <p :class="titleClass"
                @click="changeVisibility">
              {{ title }}
            </p>
          </transition>
          <transition name="slideUp">
            <img v-if="image && this.postIsVisible"
                  :src="image"/>
          </transition>
          <transition name="slideLeft">
            <div v-if="this.postIsVisible && code && code.length > 0"
                  class="code-snippet">
              <p v-for = "cod in code">
                  {{ cod.replace(/ /g,"&nbsp;") }}
              </p>
            </div>
          </transition>
          <transition name="slideLeft">
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
