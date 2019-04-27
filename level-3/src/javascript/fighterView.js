import View from "./view";

class FighterView extends View {
    constructor(fighter, handleClick) {
        super();
        createFighter(fighter, handleClick);
    }

    createFighterNode(fighter, handleClick) {
        const { name, source } = fighter;
        const nameElement = this.createName(name);
        const imageElement = this.createImage(source);

        this.element = createElement({ tagName: 'div', className: 'fighter' });
        this.element.append(nameElement, imageElement);
	    this.element.addEventListener('click', (event) => handleClick(event, fighter), false)
    }
    
    createName(name) {
		const $name = this.createElement({ tagName: 'span', className: 'name' });
		$name.innerText = name;
	
		return $name;
	}

	createImage(source) {
		const attributes = [{ src: source }];
		const $img = this.createElement({ tagName: 'img', className: 'fighter-image', attributes });
		
		return $img;
    }
}

export default FighterView;