export function doSomething() {}

export default class {
    constructor(id, insertBefore = false) {
      if (id) {
        this.hostElement = document.getElementById(id);
      } else {
        this.hostElement = document.body;
      }
      this.insertBefore = insertBefore;
    }
    remove() {
      if (this.toolTipElment) {
        this.toolTipElment.remove();
      }
    }
    show() {
      this.hostElement.insertAdjacentElement(
        this.insertBefore ? "beforebegin" : "beforeend",
        this.toolTipElment
      );
      // document.body.append(this.toolTipElment);
    }
  }