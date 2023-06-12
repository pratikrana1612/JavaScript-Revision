import Component ,{ doSomething } from "./Components"; 

console.log("Tooltip loading")
export class Tooltip extends Component {
  constructor(settingFlaseAgain, text, hostElementId) {
    super(hostElementId);
    this.text = text;
    this.settingFlaseAgain = settingFlaseAgain;
    this.create();
  }
  closeToolTip = () => {
    this.remove();
    this.settingFlaseAgain();
  };

  create() {
    const toolTipElment = document.createElement("div");
    toolTipElment.classList.add("card");
    // toolTipElment.textContent = this.text;

    const toolTipTemplate = document.getElementById("toolTip");
    const toolTipBody = document.importNode(toolTipTemplate.content, true);
    toolTipBody.querySelector("p").textContent = this.text;
    toolTipElment.append(toolTipBody);

    const leftPos = this.hostElement.offsetLeft;
    const topPos = this.hostElement.offsetTop;
    const height = this.hostElement.clientHeight;
    const scrolling = this.hostElement.parentElement.scrollTop;

    const x = leftPos + 20;
    const y = topPos + height - scrolling - 10;

    toolTipElment.style.position = "absolute";
    toolTipElment.style.left = x + "px";
    toolTipElment.style.top = y + "px";

    const hostElementLeft = this.hostElement.offsetLeft;
    const hostElementTop = this.hostElement.offsetTop;

    console.log(this.hostElement.getBoundingClientRect());
    toolTipElment.addEventListener("click", this.closeToolTip);
    this.toolTipElment = toolTipElment;
  }
}
