
console.log('fadf')
export class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static moveElement(id, newDestionationSelector) {
    const element = document.getElementById(id);
    const newElement = document.querySelector(newDestionationSelector);
    newElement.append(element);
    element.scrollIntoView({ behavior: "smooth" });
  }
  static textChanger(switchBtn, type, FirstTimeChanging) {
    if (type === "active" && FirstTimeChanging) {
      switchBtn.textContent = "finished";
    } else if (type === "finished" && FirstTimeChanging) {
      switchBtn.textContent = "active";
    }
    return switchBtn;
  }
}
export function clearEventListeners(element) {
  const clonedElement = element.cloneNode(true);
  element.replaceWith(clonedElement);
  return clonedElement;
}
export function moveElement(id, newDestionationSelector) {
  const element = document.getElementById(id);
  const newElement = document.querySelector(newDestionationSelector);
  newElement.append(element);
  element.scrollIntoView({ behavior: "smooth" });
}
export function textChanger(switchBtn, type, FirstTimeChanging) {
  if (type === "active" && FirstTimeChanging) {
    switchBtn.textContent = "finished";
  } else if (type === "finished" && FirstTimeChanging) {
    switchBtn.textContent = "active";
  }
  return switchBtn;
}
