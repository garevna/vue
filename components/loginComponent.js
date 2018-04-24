'use strict'

const LoginComponent = ( 'login-component', {
	data: function () {
		return {
			__route: '/vue/#/',
			uiConfig: {
				callbacks: {
					signInSuccess: ( currentUser, credential, redirectUrl ) => {
						this.$root.$store.dispatch ( 'registerUser', currentUser )
						var loginWidget = document.getElementById ( "firebaseui-auth-container" )
						if ( loginWidget ) loginWidget.parentNode.removeChild ( loginWidget )
						this.$root.$emit ( 'closeCurrentDialog' )
						return true
					},
					uiShown: function() {
						//console.info ( 'The widget is rendered' )
					}
				},
				// Will use popup for IDP Providers sign-in flow instead of the default, redirect
				signInFlow: 'popup',
				signInSuccessUrl: this.__route,
				signInOptions: [
					firebase.auth.GoogleAuthProvider.PROVIDER_ID,
					firebase.auth.TwitterAuthProvider.PROVIDER_ID,
					firebase.auth.GithubAuthProvider.PROVIDER_ID,
					firebase.auth.EmailAuthProvider.PROVIDER_ID,
				],
				tosUrl: this.__route
			}
		}
	},
	computed: {
		user: function () {
			return this.$root.$store.user
		}
	},
	template: `
        	<v-layout row justify-center>
            		<v-btn  icon dark class = "transparent"
                      		@click.native = "sendCloseEvent">
                		<v-icon> close </v-icon>
              		</v-btn>
        	</v-layout>`,
	methods: {
		sendCloseEvent: function () {
			var loginWidget = document.getElementById ( "firebaseui-auth-container" )
			if ( loginWidget ) loginWidget.parentNode.removeChild ( loginWidget )
          		this.$root.$emit ( 'closeCurrentDialog' )
      		},
	},
	mounted: function () {
		this.__route = '/vue/#' + this.$route.path
		if ( this.user ) {
			console.info ( 'User allready signed in: ', this.user )
			this.sendCloseEvent ()
		}
		else {
			var loginWidget = document.createElement ( 'figure' )
			document.body.appendChild ( loginWidget )
			loginWidget.id = "firebaseui-auth-container"
			firebaseAuthUI.start( '#firebaseui-auth-container', this.uiConfig )
		}
	}
})
