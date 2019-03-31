import { createElement } from './uiHelper';

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

export default FightersView;