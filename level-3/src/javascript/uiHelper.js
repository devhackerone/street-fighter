export function createElement({ tagName, className, attributes }) {
	const $element = document.createElement(tagName);
	$element.classList.add(className);
	
	if (attributes) {
		attributes.forEach(({ name, value }) => $element.setAttribute(name, value));
	}

	return $element;
} 