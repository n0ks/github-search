const searchUser = document.getElementById('searchUser')
const container = document.querySelector('.container')
const error = document.querySelector('.error')
const ui = new Ui
const github = new Github()
let user;

searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value
	if (userText) {
		github.getUser(userText).then(data => {
			if (data.profile.message) {
				//Show alert
				ui.showAlert('User not found', 'alert alert-danger fade show')

			} else {
				// Show profile
				ui.showProfile(data)
				ui.showRepos(data.repos)
			}
		})
	} else {
		//Clear profile
		ui.cleanUsers()
	}
})