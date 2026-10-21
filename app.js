(() => {
  'use strict';

  // 下面全部是可替换的示例，不代表真实客户项目或已取得的业绩。
  // 项目字段：问题 problem、角色 role、方法 method、交付物 deliverables。
  const projects = [
    {
      title: '智能知识库助手',
      subtitle: '让分散的文档，成为可以追溯来源的回答。',
      category: 'ai',
      type: 'AI 应用',
      art: 'ai-preview',
      tags: ['RAG', 'Python', '文档检索', '回答评估'],
      description: '示例项目：面向团队内部资料查找场景，探索结合文档检索与生成式 AI 的问答助手。下方展示方案设计，不代表已部署的客户系统。',
      problem: '当制度、产品说明与常见问题分散在不同文档中，使用者需要反复搜索，并难以判断回答是否来自可靠资料。',
      role: '示例角色：独立完成需求梳理、检索流程设计、问答原型与评估方案；实际经历请替换为你在项目中的职责。',
      method: ['整理文档并保留标题、来源和更新时间等元数据。', '将文本分段后建立检索索引，把相关片段作为回答依据。', '设计带出处的回答格式；证据不足时明确提示，而不是生成确定答案。', '使用包含正常问题、无答案问题和资料冲突问题的样例集进行人工检查。'],
      deliverables: ['可演示的知识库问答原型', '文档处理与检索流程说明', '样例问题集和回答评估记录模板']
    },
    {
      title: '经营分析仪表板',
      subtitle: '把分散的业务数据，整理成清晰的经营视图。',
      category: 'data',
      type: '数据分析',
      art: 'analytics-preview',
      tags: ['SQL', 'Python', '指标口径', '数据可视化'],
      description: '示例项目：使用模拟业务数据设计经营分析流程，帮助使用者从趋势、渠道与商品结构理解经营表现。图表仅作视觉示意，无真实业务数值。',
      problem: '不同报表对收入、订单和退款的定义不一致，团队难以在同一口径下讨论经营变化及其可能原因。',
      role: '示例角色：负责指标定义、数据清洗、探索分析与仪表板原型；实际经历请替换为你承担的分析范围。',
      method: ['先明确分析粒度、统计期间、退款处理方式及核心指标口径。', '使用 SQL 汇总订单数据，用 Python 检查重复、缺失和异常记录。', '从时间、渠道和商品等维度拆解变化，区分已验证的发现与待验证假设。', '设计面向业务阅读的趋势视图，并为图表补充数据来源和口径说明。'],
      deliverables: ['指标字典与数据质量检查清单', '可复用的 SQL 查询和分析笔记', '经营分析仪表板原型与解读模板']
    },
    {
      title: '客户反馈文本分类',
      subtitle: '从大量反馈中，找到值得优先处理的主题。',
      category: 'ai',
      type: 'AI 应用',
      art: 'flow-preview',
      tags: ['文本分析', '提示词设计', '人工复核', '分类评估'],
      description: '示例项目：探索将开放文本整理为可检索、可复核的问题主题，辅助团队阅读客户反馈。示例不声称模型已达到某个准确率。',
      problem: '反馈表达方式不统一，同一问题可能出现不同措辞；仅靠关键词容易遗漏上下文，也难以高效整理待处理事项。',
      role: '示例角色：负责分类体系、标注规则、AI 分类原型和复核流程设计；请替换为你的真实参与方式。',
      method: ['先定义互相可区分的主题、边界情况和“无法判断”类别。', '清理敏感字段与重复文本，使用少量示例约束输出格式。', '对模糊、跨主题或低确定性的结果进入人工复核。', '通过人工标注样例检查各类错误，并记录模型或提示词版本。'],
      deliverables: ['反馈主题分类标准与标注指南', '批量文本分类原型', '人工复核队列和误分类分析模板']
    },
    {
      title: '用户分群与运营洞察',
      subtitle: '理解不同用户的行为，让运营假设更具体。',
      category: 'data',
      type: '数据分析',
      art: 'segments-preview',
      tags: ['Python', '用户分群', '行为分析', '实验设计'],
      description: '示例项目：用模拟用户行为数据演示分群思路，连接用户特征与后续验证计划。图中的分组位置为设计示意，不是分析结论。',
      problem: '当所有用户都使用同一套运营策略时，很难判断不同用户真正需要什么，也难以验证策略是否有效。',
      role: '示例角色：负责分群问题定义、特征探索、用户画像与运营实验建议；请替换为你真实完成的工作。',
      method: ['确定分群目的和观察窗口，检查数据覆盖范围与样本偏差。', '探索活跃程度、使用频次与关键行为，处理缺失并统一特征尺度。', '结合可解释规则或聚类方法划分群体，比较各组行为差异与稳定性。', '将画像转为可验证的运营假设，定义实验指标、对照组和观察周期。'],
      deliverables: ['分群分析笔记与特征说明', '用户群体画像和可视化原型', '运营假设清单与实验设计模板']
    }
  ];

  // 预览均由本地 HTML/CSS 绘制；所有图形都是示意，避免引入外部资源。
  const mockups = {
    'ai-preview': `
      <div class="preview-window chat-window" aria-hidden="true">
        <div class="preview-toolbar"><span class="preview-brand">知序 <b>✳</b></span><span>KNOWLEDGE ASSISTANT</span></div>
        <div class="chat-message chat-user">新成员入职，需要准备哪些资料？</div>
        <div class="chat-message chat-assistant"><span class="chat-avatar">✳</span><div><strong>从资料中找到答案</strong><p>可以先查看入职指南中的资料清单。<br>每条回答，都有据可查。</p><span class="chat-citation">↗ 来源：团队入职指南</span></div></div>
        <div class="chat-input"><span>向你的知识库提问…</span><b>↑</b></div>
      </div><span class="preview-caption">RAG / 可追溯的回答</span>`,
    'analytics-preview': `
      <div class="preview-window dashboard-window" aria-hidden="true">
        <div class="preview-toolbar"><span class="preview-brand">经营概览 <b>↗</b></span><span>示意数据</span></div>
        <div class="metric-row"><div class="metric-card"><span>收入趋势</span><b>稳步变化 ↗</b></div><div class="metric-card"><span>观察维度</span><b>渠道 / 商品</b></div></div>
        <div class="chart-grid"><div class="bar-chart"><span class="bar bar-one"></span><span class="bar bar-two"></span><span class="bar bar-three"></span><span class="bar bar-four"></span><span class="bar bar-five"></span><span class="bar bar-six"></span><span class="bar bar-seven"></span><span class="bar bar-eight"></span></div></div>
        <div class="chart-note"><span>趋势探索</span><span>口径一致 · 来源清晰</span></div>
      </div><span class="preview-caption">ANALYTICS / 从数据到判断</span>`,
    'flow-preview': `
      <div class="preview-window flow-window" aria-hidden="true">
        <div class="preview-toolbar"><span class="preview-brand">反馈整理 <b>✦</b></span><span>HUMAN + AI</span></div>
        <div class="flow-stack"><div class="flow-step flow-source"><span>01</span><div><strong>收集反馈</strong><small>把不同表达放到一起</small></div><b>≋</b></div><span class="flow-arrow">↓</span><div class="flow-step flow-model"><span>02</span><div><strong>理解与分类</strong><small>清晰规则 · 结构化输出</small></div><b>✳</b></div><span class="flow-arrow">↓</span><div class="flow-outputs"><span>产品建议</span><span>服务问题</span><span>人工复核 ↗</span></div></div>
      </div><span class="preview-caption">TEXT INTELLIGENCE / 让反馈有序</span>`,
    'segments-preview': `
      <div class="preview-window segments-window" aria-hidden="true">
        <div class="preview-toolbar"><span class="preview-brand">用户洞察 <b>◌</b></span><span>示意分群</span></div>
        <div class="segment-canvas"><span class="segment-axis-y">使用频次 →</span><span class="segment-axis-x">行为深度 →</span><div class="segment-cluster cluster-one"><i class="segment-dot dot-one"></i><i class="segment-dot dot-two"></i><i class="segment-dot dot-three"></i><i class="segment-dot dot-four"></i><i class="segment-dot dot-five"></i></div><div class="segment-cluster cluster-two"><i class="segment-dot dot-one"></i><i class="segment-dot dot-two"></i><i class="segment-dot dot-three"></i><i class="segment-dot dot-four"></i><i class="segment-dot dot-five"></i></div><div class="segment-cluster cluster-three"><i class="segment-dot dot-one"></i><i class="segment-dot dot-two"></i><i class="segment-dot dot-three"></i><i class="segment-dot dot-four"></i><i class="segment-dot dot-five"></i></div></div>
        <div class="segment-legend"><span><i></i>探索型</span><span><i></i>成长型</span><span><i></i>深度型</span></div>
      </div><span class="preview-caption">SEGMENTATION / 理解用户差异</span>`
  };

  const grid = document.querySelector('#projects');
  const dialog = document.querySelector('#project-dialog');
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  let lastProjectTrigger = null;

  function render(filter = 'all') {
    if (!grid) return;
    grid.innerHTML = projects.map((project, index) => ({ project, index }))
      .filter(({ project }) => filter === 'all' || project.category === filter)
      .map(({ project, index }) => `
        <article class="project">
          <button type="button" class="project-visual ${project.art}" data-project="${index}" aria-label="查看${escapeHTML(project.title)}项目详情">
            ${mockups[project.art]}
            <span class="preview-sample" aria-hidden="true">示例项目</span><span class="project-open" aria-hidden="true">↗</span>
          </button>
          <div class="project-meta"><h3><button type="button" data-project="${index}">${escapeHTML(project.title)}</button></h3><span>${escapeHTML(project.type)} / 示例</span></div>
          <p>${escapeHTML(project.subtitle)}</p>
        </article>`).join('');
  }

  function detailSection(heading, content) {
    const section = document.createElement('section');
    section.className = 'dialog-section';
    const title = document.createElement('h3');
    title.textContent = heading;
    section.append(title);
    if (Array.isArray(content)) {
      const list = document.createElement('ul');
      content.forEach(item => { const row = document.createElement('li'); row.textContent = item; list.append(row); });
      section.append(list);
    } else {
      const text = document.createElement('p');
      text.textContent = content;
      section.append(text);
    }
    return section;
  }

  render();
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    render(button.dataset.filter);
  }));

  grid?.addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (!button || !dialog) return;
    const project = projects[Number(button.dataset.project)];
    if (!project) return;
    lastProjectTrigger = button;
    const title = document.querySelector('#dialog-title');
    const description = document.querySelector('#dialog-description');
    const body = document.querySelector('#dialog-body');
    const tags = document.querySelector('#dialog-tags');
    if (title) title.textContent = project.title;
    if (description) description.textContent = project.description;
    if (body) body.replaceChildren(
      detailSection('要解决的问题', project.problem),
      detailSection('我的角色', project.role),
      detailSection('方法与过程', project.method),
      detailSection('交付物', project.deliverables)
    );
    if (tags) tags.replaceChildren(...project.tags.map(tag => { const span = document.createElement('span'); span.textContent = tag; return span; }));
    dialog.showModal();
  });

  document.querySelector('.close-dialog')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rectangle = dialog.getBoundingClientRect();
    if (event.clientX < rectangle.left || event.clientX > rectangle.right || event.clientY < rectangle.top || event.clientY > rectangle.bottom) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    if (lastProjectTrigger?.isConnected) lastProjectTrigger.focus({ preventScroll: true });
  });

  document.querySelector('#copy-email')?.addEventListener('click', async () => {
    const link = document.querySelector('#email-link');
    const feedback = document.querySelector('#feedback');
    if (!link || !feedback) return;
    const email = (link.getAttribute('href') || '').replace(/^mailto:/, '').split('?')[0];
    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = '邮箱已复制，期待你的来信。';
    } catch {
      feedback.textContent = `请手动复制邮箱：${email}`;
    }
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
