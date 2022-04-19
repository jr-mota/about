export default function getSkillTemplate(name, points) {
  return `
  <article class="user-skill">
    <div class="user-skill__top">${name}</div>
    <div class="user-skill__bottom">
      <div class="user-skill__bar">
        <div class="user-skill__bar-inner" style="width:${points * 10}%"></div>
      </div>
    </div>
  </article>
  `;
}
