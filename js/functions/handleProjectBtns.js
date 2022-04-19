const PROJECT_ELEM_WIDTH = 514; // PX
const CLICK_INTERVAL = 450;
let lastClickTime = Date.now();

export default function handleProjectsBtns(
  side,
  projectsWrapper,
  projectsData,
  getProjectTemplate
) {
  if (Date.now() - lastClickTime < CLICK_INTERVAL) {
    return;
  }

  let deltaForTransitionEnd = Date.now();

  switch (side) {
    case "right":
      projectsData.currentSlide++;

      projectsWrapper.addEventListener("transitionend", (e) => {
        if (Date.now() - deltaForTransitionEnd < 400) return;

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
        if (Date.now() - deltaForTransitionEnd < 400) return;

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
