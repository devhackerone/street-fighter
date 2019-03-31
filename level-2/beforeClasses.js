const $root = document.getElementById('root');
const $loading = document.getElementById('loading-overlay');
const API_URL = 'https://api.github.com/';

async function startApp() {
	try {
		const endpoint = 'repos/sahanr/street-fighter/contents/fighters.json';
		const fighters = await callApi(endpoint, 'GET');
		renderFighters(fighters);
	} catch(error) {
		console.warn(error);
		$root.innerText = 'Failed to load data';
	} finally {
        $loading.style.display = 'none';
    }
}

function callApi(endpoind, method) {
    const url = API_URL + endpoind;
    const options = {
		method
	};

	return fetch(url, options)
		.then(response => response.ok ? response.json() : Promise.reject(Error('Failed to load')))
		.then(file => JSON.parse(atob(file.content)))
		.catch(error => { throw error; });
}

function renderFighters(fighters) {
	const $fighters = document.getElementById('fighters');
	fighters.forEach(fighter => $fighters.appendChild(createFighterNode(fighter)));
}

function createElement({ tagName, className, attributes }) {
	const $element = document.createElement(tagName);
	$element.classList.add(className);
	
	if (attributes) {
		attributes.forEach(({ name, value }) => $element.setAttribute(name, value));
	}

	return $element;
}

function createFighterNode(fighter) {
	const $wrapper = createElement({ tagName: 'div', className: 'fighter' });

	$wrapper.appendChild(createImage(fighter.source));
    $wrapper.appendChild(createName(fighter.name));
    $wrapper.addEventListener('click', (event) => handleFighterClick(event, fighter), false)

	return $wrapper;
}

function createName(name) {
	const $name = createElement({ tagName: 'span', className: 'name' });
	$name.innerText = name;

	return $name;
}

function createImage(src) {
	const attributes = [{ name: 'src', value: src }];
	const $img = createElement({ tagName: 'img', className: 'fighter-image', attributes });

	return $img;
}

function handleFighterClick(event, fighter) {
	// get from map or load info and add to fightersMap
	// show modal with fighter info
	// allow to edit info about fighter in this modal
}

function fight() {
	// implement this function
	// create multiplues functions (helpers) if you need
}

startApp();
