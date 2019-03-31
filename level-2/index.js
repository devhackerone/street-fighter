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

class FightersView {
	constructor(fighters, containerID = 'fighters') {
		this.$fighters = document.getElementById(containerID);
		this.fighters = fighters;
	}

	$fighters;
	fighters;

	renderFighters() {
		this.fighters.forEach(fighter => this.$fighters.appendChild(this.createFighterNode(fighter)));
	}

	createFighterNode(fighter) {
		const $wrapper = createElement({ tagName: 'div', className: 'fighter' });
	
		$wrapper.appendChild(this.createImage(fighter.source));
		$wrapper.appendChild(this.createName(fighter.name));
		$wrapper.addEventListener('click', (event) => this.handleFighterClick(event, fighter), false)
	
		return $wrapper;
	}

	createName(name) {
		const $name = createElement({ tagName: 'span', className: 'name' });
		$name.innerText = name;
	
		return $name;
	}

	createImage(src) {
		const attributes = [{ name: 'src', value: src }];
		const $img = createElement({ tagName: 'img', className: 'fighter-image', attributes });
		
		return $img;
	}

	handleFighterClick(event, fighter) {
		// get from map or load info and add to fightersMap
		// show modal with fighter info
		// allow to edit info about fighter in this modal
	}	
}

class App {
	constructor() {
		this.startApp();
	}

	static $root = document.getElementById('root');
	static $loading = document.getElementById('loading-overlay');

	async startApp() {
		try {
			const fighters = await fighterService.getFighters();
			const fightersView = new FightersView(fighters);
			fightersView.renderFighters();
		} catch(error) {
			console.warn(error);
			App.$root.innerText = 'Failed to load data';
		} finally {
			App.$loading.style.display = 'none';
		}
	}
}

function createElement({ tagName, className, attributes }) {
	const $element = document.createElement(tagName);
	$element.classList.add(className);
	
	if (attributes) {
		attributes.forEach(({ name, value }) => $element.setAttribute(name, value));
	}

	return $element;
} 

new App();