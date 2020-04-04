import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyBeWwnmSEI89ydZMVCaM3mUDECkfiuHJgo",
  authDomain: "digimenu-dev.firebaseapp.com",
  databaseURL: "https://digimenu-dev.firebaseio.com",
  projectId: "digimenu-dev",
  storageBucket: "digimenu-dev.appspot.com",
  messagingSenderId: "803194380427",
  appId: "1:803194380427:web:e7d6f6c75a8ee22d71f48e"
};
class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
}

export default new Firebase()