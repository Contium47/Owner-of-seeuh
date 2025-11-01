import { loadEmployees } from '../api/employees.js';
import { renderEmployeeCard } from '../ui/employeeCard.js';

export async function initAbout() {
  const container = document.querySelector('.team__list');
  const template = document.getElementById('employee-card-tpl');

  const controller = new AbortController();

  try {
    const employees = await loadEmployees(3, 6, { signal: controller.signal });

    const fragment = document.createDocumentFragment();
    for (const employee of employees) {
      fragment.appendChild(renderEmployeeCard(template, employee));
    }

    container.innerHTML = '';
    container.appendChild(fragment);
  } catch (error) {
    console.error('Помилка завантаження співробітників:', error);
  } finally {
    console.log('Завершено ініціалізацію');
  }

  return () => controller.abort();
}
