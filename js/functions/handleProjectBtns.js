const PROJECT_ELEM_WIDTH = 514; // PX
let lastClickTime = Date.now();

export default function handleProjectsBtns(
  side,
  projectsWrapper,
  projectsData,
  getProjectTemplate
) {
  if (Date.now() - lastClickTime < 400) {
    return;
  }

  switch (side) {
    case "right":
      projectsData.currentSlide++;

      projectsWrapper.addEventListener("transitionend", (e) => {
        projectsWrapper.classList.remove(
          "user-projects__slide-inner_transition"
        );

        if (projectsData.currentSlide > projectsData.list.length) {
          projectsData.currentSlide = 1;

          projectsWrapper.style.transform = `translateX(-${
            projectsData.currentSlide * PROJECT_ELEM_WIDTH
          }px)`;
        }
      });
      break;
    case "left":
      projectsData.currentSlide--;

      projectsWrapper.addEventListener("transitionend", (e) => {
        projectsWrapper.classList.remove(
          "user-projects__slide-inner_transition"
        );

        if (projectsData.currentSlide < 1) {
          projectsData.currentSlide = projectsData.list.length;

          projectsWrapper.style.transform = `translateX(-${
            projectsData.currentSlide * PROJECT_ELEM_WIDTH
          }px)`;
        }
      });
      break;
    default:
      return;
  }

  projectsWrapper.classList.add("user-projects__slide-inner_transition");

  projectsWrapper.style.transform = `translateX(-${
    projectsData.currentSlide * PROJECT_ELEM_WIDTH
  }px)`;

  lastClickTime = Date.now();
}
