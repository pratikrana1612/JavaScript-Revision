
import * as _ from 'lodash/array'
import { ProjectList } from "./App/ProjectList";


console.log(_.difference([0,1],[1,2]));
// const DEFAULT_VALUE='None'
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
  static fun() {
    const someScript = document.createElement("script");
    someScript.src = "assets/scripts/Utility/analytic.js";
    someScript.defer = true;
    document.body.append(someScript);
  }

  //   static switch(id) {
  //     App.activeProjectsList.switchProjects.call(App.activeProjectsList, id);
  //   }
}

App.init();
// setTimeout(() => {
//   App.fun();
// }, 2000);
