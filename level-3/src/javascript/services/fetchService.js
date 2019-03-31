class FetchService {
	API_URL = 'https://api.github.com/';

	callApi(endpoind, method) {
		const url = FetchService.API_URL + endpoind;
		const options = {
			method
		};
	
		return fetch(url, options)
			.then(response => response.ok ? response.json() : Promise.reject(Error('Failed to load')))
			.catch(error => { throw error; });
	}
}

export default FetchService;