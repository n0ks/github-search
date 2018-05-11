class Github {
	constructor() {
		/* 
		
		Essas keys apenas aumentam a quantidade de request para o server do github
		
		*/
		this.client_id = 'df379c727a5fb5b54c12'
		this.client_secret = '6efad3497714d7377117cbd2e45f77e6b0b2df50' 

		this.repos_count = 5;
		this.repos_sort = 'created: asc'

	}

	async getUser(user) {

		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

		const profile = await profileResponse.json()
		const repos = await repoResponse.json()

		return {
			profile,
			repos
		}

	}
}