export function renderEmployeeCard(template, employee) {
  const node = template.content.cloneNode(true);

  const photoEl = node.querySelector('.employee-card__photo');
  const nameEl = node.querySelector('.employee-card__name');
  const roleEl = node.querySelector('.employee-card__role');
  const ctaEl = node.querySelector('.employee-card__cta');

  const { photo, name, role, profileUrl } = employee;

  photoEl.src = photo;
  photoEl.alt = `Фото: ${name}`;
  nameEl.textContent = name;
  roleEl.textContent = role;
  ctaEl.href = profileUrl;

  return node;
}
