class View {
  element;

  get element() {
    this.element;
  }

  _setAttributes(element, attrs) {
    if (!attrs) {
      return;
    }

    for(const key in attrs) {
      element.setAttribute(key, attrs[key]);
    }
  }

  createElement({ tagName, className, attributes }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    this._setAttributes(element, attributes);

    return element;
  }
}

export default View;