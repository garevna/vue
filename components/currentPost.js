const currentPost = ( 'current-post', {
  props: [ "index", "postObject" ],
  data: function () {
    return {
      hideItem: true,
      readmeContent: null
    }
  },
  computed: {
    codeExist: function () {
      return this.postObject.code.length > 0
    }
  },
  template: `
    <section>
      <button class="plus-button" @click="changeView">
          {{ postObject.head }}
      </button>
      <button class = "readme-button"
              v-if = "postObject.readme"
              @click = "showReadme">
      </button>
      <transition name = "expand-elem">
        <div class="expand-elem" v-if="!hideItem">
            <img v-if="postObject.picture" class="section-picture"
                  :src="postObject.picture"/>

            <code v-html="postObject.text"></code>
            <div class="code-snippet" v-if="codeExist">
              <div v-for="code_item in postObject.code">
                  {{ code_item.replace(/ /g,"&nbsp;") }}
              </div>
            </div>
            <section class="samples-section">
                <span v-for="sample in postObject.samples">
                    <span class="samples-section-item"
                        @click="openRef(sample)">
                    </span>
                </span>
            </section>
            <section class="refs-section">
                <span v-for="ref in postObject.usefull">
                    <span class="refs-section-item"
                        @click="openRef(ref)">
                    </span>
                </span>
            </section>
        </div>
      </transition>
    </section>
  `,
  methods: {
    changeView: function () {
      this.hideItem = event.target.className === "minus-button"
      event.target.className = this.hideItem ?
                "plus-button" : "minus-button"
      var property = `--y`
      var size = Math.round ( window.innerHeight * 0.7 )
      document.documentElement.style.removeProperty ( property )
      document.documentElement.style.setProperty ( property, size + 'px' )
    },
    showReadme: function () {
        var readme = document.createElement ( 'article' )
        document.body.appendChild ( readme )
        readme.innerHTML = this.readmeContent

        menuAppearFromCenter ( readme )
    },
    changeCodeVisibility: function () {
      this.setButtons ()
    },
    setReadmeVisible: function () {
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
  mounted: function () {
    if ( !this.postObject.readme ) return
    this.$root.$http.get ( this.postObject.readme ).then ( response => {
            this.readmeContent = response.body
    })
    if ( !this.postObject.textURL ) return
    this.$root.$http.get ( this.postObject.textURL ).then ( response => {
            this.postObject.text = response.body
    })
  },
  components: {
    'readme-content': readmeContent
  }
})
