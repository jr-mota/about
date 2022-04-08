export default function getProjectTemplate(src, name, projectHref) {
  return `
    <article class="user-project">
      <div class="user-project__img-wrapper">
        <div class="user-project__img-rotate">
          <img
            class="user-project__img"
            src="${src}"
          />
        </div>
      </div>
      <div class="user-project__content">
        <h4 class="user-project__name">${name}</h4>
        <a
          class="user-project__href"
          href="${projectHref}"
        >
          Open
        </a>
      </div>
    </article>
  `;
}