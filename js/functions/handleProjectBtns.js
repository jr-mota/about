const CLICK_INTERVAL = 450;
let lastClickTime = Date.now();

export default function handleProjectsBtns(
  side,
  projectsWrapper,
  projectsData
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

        if (!e.target.classList.contains("user-projects__slide-inner")) return;

        projectsWrapper.classList.remove(
          "user-projects__slide-inner_transition"
        );

        if (projectsData.currentSlide > projectsData.list.length) {
          projectsData.currentSlide = 1;

          projectsWrapper.style.transform = `translateX(-${
            projectsData.currentSlide * projectsData.elems[0].offsetWidth
          }px)`;
        }
      });
      break;
    case "left":
      projectsData.currentSlide--;

      projectsWrapper.addEventListener("transitionend", (e) => {
        if (Date.now() - deltaForTransitionEnd < 400) return;

        if (!e.target.classList.contains("user-projects__slide-inner")) return;

        projectsWrapper.classList.remove(
          "user-projects__slide-inner_transition"
        );

        if (projectsData.currentSlide < 1) {
          projectsData.currentSlide = projectsData.list.length;

          projectsWrapper.style.transform = `translateX(-${
            projectsData.currentSlide * projectsData.elems[0].offsetWidth
          }px)`;
        }
      });
      break;
    default:
      return;
  }

  projectsWrapper.classList.add("user-projects__slide-inner_transition");

  projectsWrapper.style.transform = `translateX(-${
    projectsData.currentSlide * projectsData.elems[0].offsetWidth
  }px)`;

  lastClickTime = Date.now();
}
