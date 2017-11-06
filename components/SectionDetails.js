const readmeContent = ( 'readme-content', {
  props: [ "content_url" ],
  data: function () {
    return {
      content_body: null,
      isHidden: true,
      readmeButtonClass: "readme-button"
    }
  },
  mounted: function () {
    if ( this.content_url ) {
      this.$root.$emit ( 'request-for-readme', this.content_url )
      this.$root.store.$on ( 'readme-ready', function ( response ) {
        if ( response.url === this.content_url ) {
          this.content_body = response.content
        }
      }.bind ( this ) )
    }
  },
  template: `
    <div v-if = "content_body">
        <article class="readme"
                v-html = "content_body">
        </article>
    </div>
  `
})

const currentPost = ( 'current-post', {
  props: [ "postObject" ],
  data: function () {
    return {
      postIsVisible: false,
      readmeContent: null,
      codeButtonClass: "code-button",
      readmeButtonClass: "readme-button",
      codeIsVisible:false,
      readmeIsVisible: false,
      textIsVisible: true
    }
  },
  methods: {
    changeCodeVisibility: function () {
      this.codeIsVisible = !this.codeIsVisible
      this.readmeIsVisible = !this.codeIsVisible ?
                              this.readmeIsVisible : false
      this.setButtons ()
    },
    changeReadmeVisibility: function () {
      this.readmeIsVisible = !this.readmeIsVisible
      this.codeIsVisible = !this.readmeIsVisible ?
                            this.codeIsVisible : false
      this.setButtons ()
    },
    setButtons: function () {
      this.textIsVisible = !this.readmeIsVisible
      this.codeButtonClass = this.codeIsVisible ?
                          "code-button-active" :
                          "code-button"
      this.readmeButtonClass = this.readmeIsVisible ?
                          "readme-button-active" :
                          "readme-button"
    },
    openRef: ref => window.open ( ref, "_blank" )
  },
  components: {
    'readme-content': readmeContent
  },
  template: `
    <section class="section-article">
      <transition name="slideLeft">
      <div>
        <p class="section-article-title">
          {{ postObject.head }}
        </p>
        <aside class="left-article-aside">
            <button :class="codeButtonClass"
                v-if="postObject.code &&
                      postObject.code.length > 0"
                  @click="changeCodeVisibility">
            </button>
            <button :class="readmeButtonClass"
                v-if="postObject.readme &&
                      postObject.readme.length > 0"
                  @click="changeReadmeVisibility">
            </button>
        </aside>
        </div>
      </transition>
      <transition name="slideUp">
        <img v-if="postObject.picture"
              :src="postObject.picture"/>
      </transition>
      <transition name="slideLeft">
        <p  class="article-annotation"
            v-if="postObject.text && textIsVisible"
            v-html="postObject.text">
        </p>
      </transition>



      <transition name="slideLeft">
        <div v-if="codeIsVisible"
              class="code-snippet">
          <p v-for = "cod in postObject.code">
              {{ cod.replace(/ /g,"&nbsp;") }}
          </p>
        </div>
      </transition>

      <transition name = "slideLeft">
          <readme-content
              :content_url = "postObject.readme"
              v-show = "readmeIsVisible">
          </readme-content>
      </transition>
      <ol>
          <li class="menu-item"
            @click = "openRef ( sample )"
            v-for="sample in postObject.ref">
          </li>
      </ol>
    </section>
  `
})

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
  components: {
    'current-post': currentPost
  },
  methods: {
    changeVisibility: function () {
      this.visible = !this.visible
    }
  },
  template: `
    <transition name="slideDown">
      <section class="section-container">
          <div v-for="item in this.$root.store.sectionPosts">
                  <current-post :postObject = "item">
                  </current-post>
          </div>
      </section>
    </transition>`
}
