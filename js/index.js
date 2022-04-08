import handleProjectsBtns from "../js/functions/handleProjectBtns.js";
import projectsData from "./data/projectsData.js";

import getProjectTemplate from "../js/templates/project.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const projectsWrapper = document.getElementById("projects");
  const projectsLeftBtn = document.getElementById("projectsLeftBtn");
  const projectsRightBtn = document.getElementById("projectsRightBtn");

  for (const project of projectsData.list) {
    projectsWrapper.innerHTML =
      projectsWrapper.innerHTML +
      getProjectTemplate(project.src, project.name, project.projectHref);
  }

  const projectsElems = Array.from(
    document.getElementsByClassName("user-project")
  );

  projectsLeftBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(
      this,
      "left",
      projectsWrapper,
      projectsData,
      projectsElems
    )
  );
  projectsRightBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(
      this,
      "right",
      projectsWrapper,
      projectsData,
      projectsElems
    )
  );
});
