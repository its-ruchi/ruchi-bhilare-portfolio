/* ============================================
   RUCHI BHILARE PORTFOLIO — JAVASCRIPT
   Interactive Door, Experience Timeline, 
   Projects Modals, Toolkit Tabs
   ============================================ */

// ===== PRELOADER =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 1600);
});

// ===== DATA =====

const experienceData = [
  {
    eyebrow: "THE DESK I'M AT RIGHT NOW",
    title: "Founder's Office Intern",
    meta: "The Product Folks · Current",
    quote: "\u201CWorking directly with the founder's office — crafting pitch decks, writing blogs, and helping shape how the product story is told.\u201D",
    highlights: [
      "Pitch deck creation — structuring narratives for investor and partner conversations",
      "Blog writing — publishing content that drives community engagement and thought leadership",
      "Product and community work alongside the founder and team",
      "Research and content strategy to support growth initiatives"
    ],
    tags: ["PITCH DECKS", "BLOG WRITING", "CONTENT STRATEGY", "RESEARCH"]
  },
  {
    eyebrow: "A STACK OF PRDS",
    title: "Product Development Intern",
    meta: "Kaari Labs · May 2026 – Jul 2026",
    quote: "\u201CTurned fuzzy 3D product ideas into flows engineering could actually build.\u201D",
    highlights: [
      "Scoped and documented four core flows: image-to-3D generation, segmentation, uploads, embeds",
      "Wrote structured PRDs and aligned engineering with non-technical stakeholders",
      "Prioritised a working 3D product configurator prototype with real 3D models and interactive material controls",
      "Translated ambiguous asset-management requirements into structured specs"
    ],
    tags: ["PRD", "PRODUCT FLOW", "PROTOTYPE"]
  },
  {
    eyebrow: "AN OUTREACH SPREADSHEET",
    title: "Business Development Intern",
    meta: "Fourfive · Jun 2026 – Aug 2026",
    quote: "\u201CLearned what founders actually reply to \u2014 by testing it.\u201D",
    highlights: [
      "Client outreach and lead generation with early-stage founders",
      "Analysed response rates and experimented with messaging",
      "Content strategy and lead qualification",
      "Put it together into a GTM playbook"
    ],
    tags: ["STRATEGY DOC", "GTM PLAYBOOK"]
  },
  {
    eyebrow: "A SHIPPED COURSE PLATFORM",
    title: "Freelance Web Developer",
    meta: "Digiculum · Mar 2026",
    quote: "\u201CReal client, real deadline, real production site.\u201D",
    highlights: [
      "Scoped requirements from client conversations",
      "Prioritised work across Agile sprints",
      "Shipped a production course-selling platform",
      "Chose infrastructure by cost \u2014 unlisted YouTube hosting for video delivery"
    ],
    tags: ["REQUIREMENTS", "LIVE PLATFORM"]
  }
];

const projectData = [
  {
    eyebrow: "AI RESUME TAILORING TOOL",
    title: "ResumePilot",
    sections: [
      { label: "THE PROBLEM", text: "Candidates rewrite resumes for every job posting without knowing whether their bullets match what an ATS is scanning for." },
      { label: "THE DECISION", text: "Build a scoring engine that finds gaps against the job description — and only rewrite using the candidate's actual existing experience. Honest + ATS-safe beats impressive-sounding." },
      { label: "THE BUILD", text: "A scoring engine that compares a resume to a job description, plus a rewrite engine constrained to what you've really done." },
      { label: "THE FEEDBACK", text: "Used on my own applications and shared with peers for feedback." },
      { label: "WHAT I LEARNED", text: "The most useful AI constraint is often what you tell it not to do." }
    ],
    link: "https://resumecopilot-five.vercel.app"
  },
  {
    eyebrow: "HEALTHCARE COORDINATION PLATFORM",
    title: "MediSchedule",
    sections: [
      { label: "THE PROBLEM", text: "Clinics needed a lightweight way to separate emergency from routine patients and coordinate care without exposing personal phone numbers." },
      { label: "THE DECISION", text: "Build a triage-first scheduling layer. Emergency patients auto-flagged. Routine patients see open slots. All communication routed through the platform, never personal numbers." },
      { label: "THE BUILD", text: "React + Supabase + role-based dashboards for patients, staff, and admins. Each role sees only what they need." },
      { label: "THE FEEDBACK", text: "Shared with healthcare professionals for usability testing." },
      { label: "WHAT I LEARNED", text: "Healthcare UX is about trust, not features." }
    ],
    link: "https://medischedule-eight.vercel.app/"
  },
  {
    eyebrow: "AI PERSONAL-BRANDING SAAS",
    title: "LinkedIn Growth OS",
    sections: [
      { label: "THE PROBLEM", text: "Founders and creators want to post consistently, but generic AI writing tools make them sound like someone else." },
      { label: "THE DECISION", text: "Voice-first onboarding. The tool captures your real speaking style and uses it to constrain every draft — no corporate-sounding templates." },
      { label: "THE BUILD", text: "Voice-capturing onboarding built on Groq + Llama 3. Learns how you write, what topics you care about, and generates drafts that retain your authentic tone." },
      { label: "THE FEEDBACK", text: "Tested with founders who wanted consistent posting without losing authenticity." },
      { label: "WHAT I LEARNED", text: "Voice fidelity matters more than output volume." }
    ],
    link: "https://linkedin-growth-os-omega.vercel.app/"
  },
  {
    eyebrow: "PRODUCT CASE STUDY · SUBSTACK",
    title: "Substack Reading Assistant",
    sections: [
      { label: "THE PROBLEM", text: "Readers save articles intending to return, but saved posts get buried before they are read. The opportunity is to help readers turn saved intent into action." },
      { label: "THE INSIGHT", text: "Saving takes one tap; reading needs time, attention, and a useful moment. A calm reading queue and a timely nudge can close that gap." },
      { label: "THE SOLUTION", text: "A dedicated queue for saved, unread articles with reading times, progress, and one-tap resume. Smart, user-controlled reminders resurface articles at useful moments." },
      { label: "WHAT TO TEST FIRST", text: "Start with the reading queue, then contextual reminders. Test the optional AI assistant only after validating that users want help understanding complex articles." },
      { label: "SUCCESS METRICS", text: "Primary: percentage of users who read at least one saved article in a defined period. Secondary: saved-to-read conversion, article completion, and repeat readership. Guardrails: notification opt-outs, unsubscribes, and reminder dismissals." },
      { label: "DECISION RULE", text: "Expand when reading increases and guardrails hold. Adjust if readers return but opt-outs rise. Stop if there is no lift after iteration." }
    ],
    link: "substack-reading-assistant-case-study.html",
    linkLabel: "VIEW FULL CASE STUDY"
  },
  {
    eyebrow: "SPEAKING PRACTICE PLATFORM",
    title: "On The Spot",
    sections: [
      { label: "THE PROBLEM", text: "People want to become clearer, more confident speakers, but it is hard to find low-pressure ways to practise thinking and speaking without relying on AI-generated answers." },
      { label: "THE DECISION", text: "Create focused, time-boxed practice that gives people a random prompt, time to prepare notes, and a real constraint: speak from their own thinking." },
      { label: "THE EXPERIENCE", text: "Choose a random idea or topic, take up to 10 minutes to prepare notes, then speak for 2 minutes. The format makes practice simple, repeatable, and honest." },
      { label: "THE CONSTRAINT", text: "The product is designed for original practice: users do not use ChatGPT or other GPT tools to research or generate their response." },
      { label: "WHAT I LEARNED", text: "A small time constraint can turn a vague goal like 'be a better speaker' into a habit people can actually build." }
    ],
    link: "https://onthespot-tau.vercel.app/"
  }
];

const toolkitData = {
  technical: ["React.js", "Next.js", "TypeScript", "Node.js", "Supabase", "SQL / MySQL", "Python", "Excel", "API fundamentals"],
  product: ["Product Analytics", "A/B Testing", "Product Metrics", "Activation", "Retention", "North Star Metrics", "Product Discovery", "User Research", "PRDs", "AI Product Evaluation"],
  tools: ["Claude", "Cursor", "ChatGPT", "Lovable", "Figma", "Git / GitHub", "n8n"],
  ways: ["Client & Stakeholder Communication", "Agile", "Scrum"]
};

// ===== DOM ELEMENTS =====
const landingScreen = document.getElementById('landing-screen');
const portfolio = document.getElementById('portfolio');
const openDoorBtn = document.getElementById('open-door-btn');
const skipDoorBtn = document.getElementById('skip-door-btn');
const theDoor = document.getElementById('the-door');
const doorGlow = document.getElementById('door-glow');
const doorWrapper = document.getElementById('door-wrapper');
const navBackBtn = document.getElementById('nav-back-btn');
const backToDoorBtn = document.getElementById('back-to-door-btn');
const resumeBtn = document.getElementById('resume-btn');
const viewResumeBtn = document.getElementById('view-resume-btn');
const downloadResumeBtn = document.getElementById('download-resume-btn');
const experienceDetail = document.getElementById('experience-detail');
const toolkitContent = document.getElementById('toolkit-content');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const resumeOverlay = document.getElementById('resume-overlay');
const resumeClose = document.getElementById('resume-close');

// ===== DOOR INTERACTION =====
function openDoor() {
  theDoor.classList.add('opening');
  doorGlow.classList.add('active');
  
  setTimeout(() => {
    landingScreen.classList.add('exit');
  }, 800);
  
  setTimeout(() => {
    landingScreen.style.display = 'none';
    portfolio.classList.remove('hidden');
    window.scrollTo(0, 0);
  }, 1600);
}

function skipDoor() {
  landingScreen.classList.add('exit');
  setTimeout(() => {
    landingScreen.style.display = 'none';
    portfolio.classList.remove('hidden');
    window.scrollTo(0, 0);
  }, 600);
}

function goBackToDoor() {
  portfolio.classList.add('hidden');
  landingScreen.style.display = '';
  landingScreen.classList.remove('exit');
  theDoor.classList.remove('opening');
  doorGlow.classList.remove('active');
  window.scrollTo(0, 0);
}

openDoorBtn.addEventListener('click', openDoor);
doorWrapper.addEventListener('click', (e) => {
  if (e.target === doorWrapper || doorWrapper.contains(e.target)) {
    openDoor();
  }
});
skipDoorBtn.addEventListener('click', skipDoor);
navBackBtn.addEventListener('click', goBackToDoor);
backToDoorBtn.addEventListener('click', goBackToDoor);

// ===== AVATAR WAVE ON HOVER =====
const avatarCharacter = document.querySelector('.avatar-character');
if (avatarCharacter) {
  doorWrapper.addEventListener('mouseenter', () => {
    avatarCharacter.style.animation = 'none';
    avatarCharacter.offsetHeight;
    avatarCharacter.style.animation = 'wave 0.6s ease';
  });
  doorWrapper.addEventListener('mouseleave', () => {
    avatarCharacter.style.animation = 'float 3s ease-in-out infinite';
  });
}

// ===== EXPERIENCE TIMELINE =====
function renderExperience(index) {
  const exp = experienceData[index];
  
  experienceDetail.innerHTML = `
    <p class="exp-detail-eyebrow">${exp.eyebrow}</p>
    <h3 class="exp-detail-title">${exp.title}</h3>
    <p class="exp-detail-meta">${exp.meta}</p>
    <p class="exp-detail-quote">${exp.quote}</p>
    <ul class="exp-detail-list">
      ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>
    <div class="exp-detail-tags">
      ${exp.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
    </div>
  `;
  
  // Re-trigger animation
  experienceDetail.style.animation = 'none';
  experienceDetail.offsetHeight; // Force reflow
  experienceDetail.style.animation = '';
}

// Timeline item click handlers
document.querySelectorAll('.timeline-item').forEach((item, idx) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    renderExperience(idx);
  });
});

// Initialize first experience
renderExperience(0);

// ===== TOOLKIT TABS =====
function renderToolkit(tab) {
  const items = toolkitData[tab];
  toolkitContent.innerHTML = items.map((item, idx) => 
    `<span class="skill-item">${item}</span>${idx < items.length - 1 ? '<span class="skill-dot">.</span>' : '<span class="skill-dot">.</span>'}`
  ).join('');
}

document.querySelectorAll('.toolkit-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.toolkit-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderToolkit(tab.dataset.tab);
  });
});

// Initialize first toolkit tab
renderToolkit('technical');

// ===== PROJECT MODALS =====
function openProjectModal(index) {
  const project = projectData[index];
  
  modalBody.innerHTML = `
    <p class="modal-eyebrow">${project.eyebrow}</p>
    <h3 class="modal-title">${project.title}</h3>
    ${project.sections.map(s => `
      <p class="modal-section-label">${s.label}</p>
      <p class="modal-text">${s.text}</p>
    `).join('')}
    ${project.link ? `<a href="${project.link}" target="_blank" class="modal-link">VIEW LIVE PROJECT ↗</a>` : ''}
  `;
  
  const projectLink = modalBody.querySelector('.modal-link');
  if (projectLink && project.linkLabel) projectLink.textContent = project.linkLabel;
  if (projectLink && project.download) projectLink.setAttribute('download', 'Substack-Reading-Assistant-PM-Case-Study.pdf');

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const idx = parseInt(card.dataset.project);
    openProjectModal(idx);
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// ===== RESUME MODAL =====
function openResumeModal() {
  resumeOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  resumeOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

resumeBtn.addEventListener('click', openResumeModal);
viewResumeBtn.addEventListener('click', openResumeModal);
downloadResumeBtn.addEventListener('click', openResumeModal);
resumeClose.addEventListener('click', closeResumeModal);
resumeOverlay.addEventListener('click', (e) => {
  if (e.target === resumeOverlay) closeResumeModal();
});

// ===== KEYBOARD SHORTCUT =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeResumeModal();
  }
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.getElementById('main-nav').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== SCROLL-BASED NAV BACKGROUND =====
const mainNav = document.getElementById('main-nav');
const experienceSection = document.getElementById('experience');

function updateNav() {
  if (!experienceSection || portfolio.classList.contains('hidden')) return;
  
  const expRect = experienceSection.getBoundingClientRect();
  const navHeight = mainNav.offsetHeight;
  
  if (expRect.top < navHeight && expRect.bottom > navHeight) {
    mainNav.classList.add('dark-bg');
    mainNav.querySelectorAll('.nav-back, .nav-link').forEach(el => {
      el.style.color = 'var(--text-muted-light)';
    });
  } else {
    mainNav.classList.remove('dark-bg');
    mainNav.querySelectorAll('.nav-back, .nav-link').forEach(el => {
      el.style.color = '';
    });
  }
}

window.addEventListener('scroll', updateNav);

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply animation setup to key elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.section-header, .subsection-label, .bio-main, .education-card, .like-card, .dislike-item, .project-card, .cert-item'
  );
  
  animatedElements.forEach((el, idx) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${idx * 0.03}s, transform 0.6s ease ${idx * 0.03}s`;
    animateObserver.observe(el);
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  if (portfolio.classList.contains('hidden')) return;
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ===== PARALLAX HERO GLOW =====
const heroGlow = document.querySelector('.hero-glow');
window.addEventListener('scroll', () => {
  if (heroGlow && !portfolio.classList.contains('hidden')) {
    const scrolled = window.scrollY;
    heroGlow.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
  }
});
