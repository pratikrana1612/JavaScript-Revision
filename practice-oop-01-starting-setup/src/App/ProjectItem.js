// import { Tooltip } from "./Tooltip.js";
import { DOMHelper as DOM } from "../Utility/DOMhelper";



export class ProjectItem {
  hastoolTip = false;
  constructor(id, switchfun, type) {
    this.id = id;
    this.switchfun = switchfun;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
    this.connectDraggable();
  }
  connectSwitchButton(type = null, FirstTimeChanging = false) {
    const projectItemElement = document.getElementById(this.id);
    let swithBtn = projectItemElement.querySelector("button:last-of-type");
    swithBtn = DOM.clearEventListeners(swithBtn);
    swithBtn = DOM.textChanger(swithBtn, type, FirstTimeChanging);
    // swithBtn.textContent = type === "active" ? "finished" : "active";
    swithBtn.addEventListener("click", this.switchfun.bind(null, this.id));
    // swithBtn.addEventListener("click", App.switch.bind(null, this.id));
  }
  connectDraggable() {
    const item = document.getElementById(this.id);
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.moveElement = "move";
    });
    item.addEventListener("dragend", (event) => {
      console.log(event);
    });
  }
  update(updatedFunc, type) {
    this.switchfun = updatedFunc;
    this.connectSwitchButton(type, true);
  }
  connectMoreInfoButton() {
    const toolTipBtn = document
      .getElementById(this.id)
      .querySelector("button:first-of-type");
    toolTipBtn.addEventListener("click", this.showMoreInfo.bind(this));
  }
  showMoreInfo() {
    if (this.hastoolTip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    // projectElement.dataset.moreInfo="this is more info  "
    const toolTipText = projectElement.dataset.extraInfo;
    import("./Tooltip.js").then((module) => {
      const tooltip = new module.Tooltip(
        () => {
          this.hastoolTip = false;
        },
        toolTipText,
        this.id
      );
      tooltip.show();
      this.hastoolTip = true;
    });
  }
}
