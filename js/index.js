import handleProjectsBtns from "../js/functions/handleProjectBtns.js";
import projectsData from "./data/projectsData.js";

import getProjectTemplate from "./templates/projectTemplate.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const projectsWrapper = document.getElementById("projects");
  const projectsLeftBtn = document.getElementById("projectsLeftBtn");
  const projectsRightBtn = document.getElementById("projectsRightBtn");

  projectsWrapper.innerHTML = getProjectTemplate(
    projectsData.list[0].src,
    projectsData.list[0].name,
    projectsData.list[0].projectHref
  );

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
      projectsElems,
      getProjectTemplate
    )
  );
  projectsRightBtn.addEventListener(
    "click",
    handleProjectsBtns.bind(
      this,
      "right",
      projectsWrapper,
      projectsData,
      projectsElems,
      getProjectTemplate
    )
  );
});
