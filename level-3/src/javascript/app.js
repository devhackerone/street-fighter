import FightersView from './fightersView';
import { fighterService } from './services/fightersService';

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

export default App;