/* Learning filters are independent of the historical project filters. */
(() => {
  'use strict';
  const section = document.getElementById('learning');
  if (!section) return;
  const controls = section.querySelector('.learning-filters');
  const buttons = [...section.querySelectorAll('[data-learning-filter]')];
  const records = [...section.querySelectorAll('.learning-record[data-learning-type]')];
  const results = section.querySelector('#learning-results');
  const empty = section.querySelector('#learning-empty');
  const labels = {all: '全部记录', course: '课程学习', note: '知识笔记', book: '阅读书单'};

  const filter = type => {
    if (!Object.hasOwn(labels, type)) return;
    let count = 0;
    records.forEach(record => {
      const visible = type === 'all' || record.dataset.learningType === type;
      record.hidden = !visible;
      if (visible) count++;
      else record.querySelectorAll('details[open]').forEach(detail => { detail.open = false; });
    });
    buttons.forEach(button => {
      const active = button.dataset.learningFilter === type;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (results) results.textContent = labels[type] + ' · ' + count + ' 条示例记录';
    if (empty) empty.hidden = count !== 0;
  };

  buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.learningFilter)));
  filter('all');
  if (controls) controls.hidden = false;
})();
