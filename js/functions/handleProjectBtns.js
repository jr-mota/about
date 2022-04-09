const PROJECT_ELEM_WIDTH = 514; // PX
const lastClickTime = Date.now();
let projectsTransitionClass = "user-projects__slide-inner_transition";

export default function handleProjectsBtns(
  side,
  projectsWrapper,
  projectsData,
  getProjectTemplate
) {
  if (Date.now() - lastClickTime < 400) {
    projectsTransitionClass = "";
  }

  if (side === "right") {
    projectsData.currentSlide += 1;

    projectsWrapper.classList.add(projectsTransitionClass);

    projectsWrapper.style.transform = `translateX(-${
      projectsData.currentSlide * PROJECT_ELEM_WIDTH
    }px)`;

    projectsWrapper.addEventListener("transitionend", (e) => {
      projectsWrapper.classList.remove(projectsTransitionClass);

      if (projectsData.currentSlide > projectsData.list.length) {
        projectsData.currentSlide = 1;

        projectsWrapper.style.transform = `translateX(-${
          projectsData.currentSlide * PROJECT_ELEM_WIDTH
        }px)`;
      }
    });
  } else if (side === "left") {
  } else {
    return;
  }

  lastClickTime = Date.now();
}
