import FetchService from './fetchService';
class FighterService extends FetchService{
	async getFighters() {
		try {
			const endpoint = 'repos/sahanr/street-fighter/contents/fighters.json';
			const apiResult = await this.callApi(endpoint, 'GET');
			
			return JSON.parse(atob(apiResult.content));
		} catch (error) {
			throw error;
		}
	}

	async getFighterDetails(_id) {

	}
}

const fighterService = new FighterService();

export { fighterService };