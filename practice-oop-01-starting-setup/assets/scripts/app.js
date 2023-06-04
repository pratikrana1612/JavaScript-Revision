class DOMHelper {
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
class Component {
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
class Tooltip extends Component {
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
    const toolTipBody=document.importNode(toolTipTemplate.content,true)
    toolTipBody.querySelector('p').textContent=this.text
    toolTipElment.append(toolTipBody)

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

class ProjectItem {
  hastoolTip = false;
  constructor(id, switchfun, type) {
    this.id = id;
    this.switchfun = switchfun;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }
  connectSwitchButton(type = null, FirstTimeChanging = false) {
    const projectItemElement = document.getElementById(this.id);
    let swithBtn = projectItemElement.querySelector("button:last-of-type");
    swithBtn = DOMHelper.clearEventListeners(swithBtn);
    swithBtn = DOMHelper.textChanger(swithBtn, type, FirstTimeChanging);
    // swithBtn.textContent = type === "active" ? "finished" : "active";
    swithBtn.addEventListener("click", this.switchfun.bind(null, this.id));
    // swithBtn.addEventListener("click", App.switch.bind(null, this.id));
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
    const tooltip = new Tooltip(
      () => {
        this.hastoolTip = false;
      },
      toolTipText,
      this.id
    );
    tooltip.show();
    this.hastoolTip = true;
  }
}

class ProjectList {
  projects = [];
  constructor(type, switchHandlerFunction) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // console.log(prjItems)
    for (const projItem of prjItems) {
      this.projects.push(
        new ProjectItem(projItem.id, this.switchProjects.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  settingFunction(switchHandlerFunction) {
    console.log("😁😀", this);
    this.switchHandlerFunction = switchHandlerFunction;
  }
  addProject(project) {
    this.projects.push(project);
    console.log("😂😁", this);
    console.log(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProjects.bind(this), this.type);
  }
  switchProjects(id) {
    // console.log(this);
    // console.log(this.projects);
    // console.log(id)
    // const projectIndex = this.projects.findIndex((pro) => pro.id === id);
    // console.log(projectIndex);
    // this.projects.splice(projectIndex, 1);
    this.switchHandlerFunction(this.projects.find((pro) => pro.id === id));
    this.projects = this.projects.filter((pro) => pro.id !== id);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectsList.settingFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.settingFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
    // someScript.textContent='alert("fa")'
    // document.body.append(someScript)
  }
  static fun(){
    const someScript=document.createElement('script')
    someScript.src='assets/scripts/analytic.js'
    someScript.defer=true
    document.body.append(someScript)
  }

  //   static switch(id) {
  //     App.activeProjectsList.switchProjects.call(App.activeProjectsList, id);
  //   }
}

App.init();
setTimeout(() => {
  App.fun()
  
}, 2000);