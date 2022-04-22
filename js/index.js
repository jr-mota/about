import handleProjectsBtns from "../js/functions/handleProjectBtns.js";
import initBarMove from "./functions/initBarMove.js";
import projectsData from "./data/projectsData.js";
import skillsData from "./data/skillsData.js";

import getProjectTemplate from "./templates/getProjectTemplate.js";
import getSkillTemplate from "./templates/getSkillTemplate.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const projectsWrapper = document.getElementById("projects");
  const projectsLeftBtn = document.getElementById("projectsLeftBtn");
  const projectsRightBtn = document.getElementById("projectsRightBtn");
  const projectsBar = document.getElementById("projectsBar");
  const skillsWrapper = document.getElementById("skills");

  for (const project of projectsData.list) {
    projectsWrapper.innerHTML =
      projectsWrapper.innerHTML +
      getProjectTemplate(project.src, project.name, project.projectHref);
  }

  projectsWrapper.innerHTML =
    getProjectTemplate(
      projectsData.list[projectsData.list.length - 1].src,
      projectsData.list[projectsData.list.length - 1].name,
      projectsData.list[projectsData.list.length - 1].projectHref
    ) +
    projectsWrapper.innerHTML +
    getProjectTemplate(
      projectsData.list[0].src,
      projectsData.list[0].name,
      projectsData.list[0].projectHref
    );

  projectsData.elems = Array.from(
    document.getElementsByClassName("user-project")
  );

  projectsWrapper.style.transform = `translateX(-${projectsData.elems[0].offsetWidth}px)`;

  projectsBar.style.width = 100 + "%";

  projectsBar.addEventListener("transitionend", (e) => {
    initBarMove(projectsBar);

    handleProjectsBtns("right", projectsWrapper, projectsData);
  });

  projectsLeftBtn.addEventListener("click", (e) => {
    handleProjectsBtns(
      "left",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    );
  });
  projectsRightBtn.addEventListener("click", (e) => {
    handleProjectsBtns(
      "right",
      projectsWrapper,
      projectsData,
      getProjectTemplate
    );
  });

  const sortedSkills = skillsData.list.sort((prev, next) => {
    if (prev.points > next.points) {
      return -1;
    } else {
      return 1;
    }
  });

  for (let i = 0; i < sortedSkills.length; ++i) {
    const skill = sortedSkills[i];

    skillsWrapper.innerHTML =
      skillsWrapper.innerHTML + getSkillTemplate(skill.name, skill.points, i);
  }

  const skillElems = Array.from(
    document.getElementsByClassName("user-skill__bar-inner")
  );

  const observer = new IntersectionObserver((entries) => {
    const elem = entries[0].target;
    const indexOfElem = Number(elem.dataset.index);

    if (elem.style.width === "0%") {
      elem.style.width = sortedSkills[indexOfElem].points * 10 + "%";
    }
  });

  for (const skillElem of skillElems) {
    if (
      window.scrollY + window.innerHeight >
      skillElem.getBoundingClientRect().top + window.scrollY
    ) {
      const indexOfElem = Number(skillElem.dataset.index);

      skillElem.style.width = sortedSkills[indexOfElem].points * 10 + "%";
    }

    observer.observe(skillElem);
  }

  // Handle resize for format projects
  window.addEventListener("resize", (e) => {
    const widthOfProject = projectsData.elems[0].offsetWidth;
    const currentSlide = projectsData.currentSlide;

    projectsWrapper.style.transform = `translateX(-${
      currentSlide * widthOfProject
    }px)`;
  });
});
