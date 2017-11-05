const readmeContent = ( 'readme-content', {
  props: [ "content_url" ],
  data: function () {
    return {
      content_body: null,
      isHidden: true,
      articleButtonClass: "article-button"
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
  methods: {
    changeVisibility: function () {
      this.isHidden = !this.isHidden
      this.articleButtonClass = this.isHidden ?
              "article-button-active" : "article-button"
    }
  },
  template: `
    <div v-if = "content_body">
      <button class="article-button"
              @click = "changeVisibility">
      </button>
      <transition name = "roll-down">
        <article class="readme"
                v-if = "!isHidden"
                v-html = "content_body">
        </article>
      </transition>
    </div>
  `
})

const currentPost = ( 'current-post', {
  props: [ "postObject" ],
  data: function () {
    return {
      postIsVisible: false,
      readmeContent: null,
      codeButtonClass: "code-button"
    }
  },
  methods: {
    changeVisibility: function () {
      this.postIsVisible = !this.postIsVisible
      this.titleClass = this.postIsVisible ?
                          "code-button-active" :
                          "code-button"
    },
    openRef: ref => window.open ( ref, "_blank" )
  },
  components: {
    'readme-content': readmeContent
  },
  template: `
    <section>
      <transition name="slideLeft">
        <p class="section-article-title">
          {{ postObject.head }}
        </p>
      </transition>
      <button :class="codeButtonClass"
                @click="changeVisibility">
      </button>
      <transition name="slideUp">
        <img v-if="postObject.picture && this.postIsVisible"
              :src="postObject.picture"/>
      </transition>os
      <transition name="slideLeft">
        <div v-if="this.postIsVisible &&
                    postObject.code &&
                    postObject.code.length > 0"
              class="code-snippet">
          <p v-for = "cod in postObject.code">
              {{ cod.replace(/ /g,"&nbsp;") }}
          </p>
        </div>
      </transition>
      <transition name="slideLeft">
        <p v-if="postObject.text && this.postIsVisible"
            v-html="postObject.text">
        </p>
      </transition>
      <readme-content :content_url = "postObject.readme">
      </readme-content>
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
      <section class="section-article">
          <div v-for="item in this.$root.store.sectionPosts">
                  <current-post :postObject = "item">
                  </current-post>
                  <hr/>
          </div>
      </section>
    </transition>`
}
