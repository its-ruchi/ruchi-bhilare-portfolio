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
    eyebrow: "INTERACTIVE PRODUCT CASE STUDY · THE MORNING MILK PROBLEM",
    title: "Blinkit Case Study",
    sections: [
      { label: "THE MOMENT", text: "8 am, no milk for chai. My mom opened Blinkit and found cow milk out of stock, with no alternative and no restock date. She installed another app and ordered there. A week later, she ordered bread there too." },
      { label: "THE INSIGHT", text: "People don't stay loyal to delivery apps; they stay out of habit. Every out-of-stock dead end is a free trial for a rival app, and the empty shelf does the rival's marketing for them." },
      { label: "THE SIZE OF IT", text: "Blinkit already leads on availability (about 94% in a Bernstein study of 150 items). But at about 25 lakh orders a day, even a small gap adds up to thousands of people a day drifting away. An interactive calculator lets you test my assumptions." },
      { label: "THE FIXES", text: "Before: Stock Pulse, honest “Only 3 left” badges for shoppers plus restock alerts for the dark store. During: Smart Swap, one best-match replacement in one tap. After: Notify Me, a back-in-stock message that gives people a reason to return." },
      { label: "PLAYING FAIR", text: "Urgency only when it's true. Badges use live store stock, and swaps pick the best match, not the brand that pays most." },
      { label: "HOW I'D MEASURE IT", text: "North Star: orders that arrive complete, or with a swap the person accepted. Main signals: carts saved after an out-of-stock, and quick exits that suggest someone left for another app. Guardrails: order size, refunds, notification mutes and badge accuracy." }
    ],
    link: "blinkit-case-study.html",
    linkLabel: "PLAY THE INTERACTIVE STORY ↗"
  },
  {
    eyebrow: "UI RESEARCH · FIRST IMPRESSIONS",
    title: "Regain Case Study",
    sections: [
      { label: "THE PREMISE", text: "First impression is the last impression. People download a focus app because they want to start focusing, and every screen before that is a chance to give up and close it." },
      { label: "THE METHOD", text: "I downloaded Regain and wrote down every mistake I noticed in my first three minutes, backed by my own screenshots." },
      { label: "WHAT I FOUND", text: "A logo that just sits there, so it looks stuck. A voice that talks with no mute button. Onboarding you can't skip. Copy that assumes you have an exam and competition to beat. A reminder of how far you are from your goal before you've started. And a 2-minute timer that starts on its own." },
      { label: "THE FIXES", text: "Animate the hourglass logo while the app loads. Put Mute and Skip on the first screen. Add a “no specific goal” answer. Let people set the timer themselves. Show the motivating “climb” after the first finished session, so it feels like progress, not pressure." },
      { label: "WHAT'S NEXT", text: "Use Regain every day for a week, look at what brings people back and what doesn't, and add the findings to the case study." }
    ],
    link: "regain-case-study.html",
    linkLabel: "PLAY THE INTERACTIVE STORY ↗"
  },
  {
    eyebrow: "WEBSITE UX REVIEW · B2B SAAS",
    title: "Recruit CRM Case Study",
    sections: [
      { label: "THE PREMISE", text: "Switching a CRM is a trust decision. An agency owner on the homepage is weighing a move of their whole database, and every small mismatch is one more reason to wait another quarter." },
      { label: "THE METHOD", text: "I visited recruitcrm.io as if I ran a small agency thinking about switching, and noted every place I got stuck, backed by my own screenshots." },
      { label: "WHAT I FOUND", text: "A “Switching from…” heading that names one competitor while the card below names another. Three different answers to “how fast can I go live?” A “6 Agents Live” badge above a list of four. A chat box covering the reassurance I came to read. And “Book a demo” seven times on one page, with integration counts that change from section to section." },
      { label: "THE FIXES", text: "Make the card follow the heading. Tell one go-live timeline the same way everywhere. Keep one live-now / coming-soon agent list across menus. Fold the chat into its icon. Offer two clear doors: a trial and a demo, each saying who it's for." },
      { label: "QUICK WIN", text: "Start with fixes 1 and 3. They're copy changes: the biggest trust gain for the least work." },
      { label: "HOW I'D MEASURE IT", text: "Homepage visitors who start a trial or book a demo, visitors who reach “Switch in days” and talk to a migration specialist, and whether chats rise or fall once the box is tucked away." }
    ],
    link: "recruit-crm-case-study.html",
    linkLabel: "PLAY THE INTERACTIVE STORY ↗"
  }
];

const toolkitData = {
  technical: ["React.js", "Next.js", "TypeScript", "Node.js", "Supabase", "SQL / MySQL", "Python", "Excel", "API fundamentals"],
  product: ["Product Analytics", "A/B Testing", "Product Metrics", "Activation", "Retention", "North Star Metrics", "Product Discovery", "User Research", "PRDs", "AI Product Evaluation"],
  tools: ["Claude", "Cursor", "ChatGPT", "Lovable", "Figma", "Git / GitHub", "n8n"],
  // Ways of working reads as sentences, not keywords: a lead line plus a short aside.
  ways: [
    { lead: "Give me 12 days, I'll learn it.", note: "Day 1: confused. Day 12: explaining it to you like I invented it." },
    { lead: "Talk to users first.", note: "Then build. Then talk to them again, and change my mind if they say so." },
    { lead: "Ship the rough version.", note: "Something people can click beats a perfect doc nobody opens." },
    { lead: "Translate between rooms.", note: "Engineers, founders, clients: same problem, different words. I speak all three." },
    { lead: "Agile & Scrum,", note: "minus the meetings about meetings." }
  ]
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
  if (window.avatarWelcome) window.avatarWelcome();

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
  if (window.avatarReset) window.avatarReset();
  window.scrollTo(0, 0);
}

openDoorBtn.addEventListener('click', openDoor);
doorWrapper.addEventListener('click', (e) => {
  if (e.target === doorWrapper || doorWrapper.contains(e.target)) {
    openDoor();
  }
});
skipDoorBtn.addEventListener('click', skipDoor);

// Deep links (e.g. index.html#projects from a case study) skip the door and land on that section.
const deepLinkTarget = location.hash ? document.getElementById(location.hash.slice(1)) : null;
if (deepLinkTarget && portfolio.contains(deepLinkTarget)) {
  landingScreen.style.display = 'none';
  portfolio.classList.remove('hidden');
  window.addEventListener('load', () => {
    const navHeight = document.getElementById('main-nav').offsetHeight;
    window.scrollTo(0, deepLinkTarget.getBoundingClientRect().top + window.pageYOffset - navHeight - 20);
  });
}
navBackBtn.addEventListener('click', goBackToDoor);
backToDoorBtn.addEventListener('click', goBackToDoor);

// ===== AVATAR: a small, living host by the door =====
const avatar = document.getElementById('avatar');
if (avatar) {
  const svg = avatar.querySelector('.avatar-svg');
  const head = avatar.querySelector('.av-head');
  const pupils = avatar.querySelectorAll('.av-pupil');
  const bubble = document.getElementById('avatar-bubble');
  const clickLines = [
    "Hi, I'm Ruchi!",
    "I turn fuzzy ideas into things you can click.",
    "← The door's right there.",
    "Okay, okay. One more wave."
  ];
  let lineIndex = 0;
  let sayTimer = null;

  // Talk: speech bubble + open mouth + wave, for a moment.
  function say(text, ms) {
    bubble.textContent = text;
    bubble.classList.add('show');
    avatar.classList.add('talking', 'waving');
    clearTimeout(sayTimer);
    sayTimer = setTimeout(() => {
      bubble.classList.remove('show');
      avatar.classList.remove('talking', 'waving');
    }, ms);
  }

  // Eyes (and a little of the head) follow the cursor or finger.
  function look(clientX, clientY) {
    const r = svg.getBoundingClientRect();
    if (!r.width) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height * (100 / 440);
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    const k = Math.min(1, dist / 260);
    const mx = (dx / dist) * 2.3 * k;
    const my = (dy / dist) * 2.0 * k;
    pupils.forEach(p => { p.style.transform = `translate(${mx}px, ${my}px)`; });
    if (!avatar.classList.contains('look-door')) {
      head.style.transform = `rotate(${(dx / dist) * 4 * k}deg)`;
    }
  }
  document.addEventListener('pointermove', (e) => look(e.clientX, e.clientY));

  // Natural blinking at random intervals, sometimes a double blink.
  function blinkLoop() {
    avatar.classList.add('blink');
    setTimeout(() => avatar.classList.remove('blink'), 140);
    if (Math.random() < 0.2) {
      setTimeout(() => {
        avatar.classList.add('blink');
        setTimeout(() => avatar.classList.remove('blink'), 140);
      }, 300);
    }
    setTimeout(blinkLoop, 2200 + Math.random() * 3200);
  }
  setTimeout(blinkLoop, 1500);

  // Hovering the door: she waves you in.
  doorWrapper.addEventListener('mouseenter', () => say('Go on, open it!', 1800));

  // Clicking her: a hop and a line.
  function poke() {
    avatar.classList.remove('hop');
    void avatar.offsetWidth;
    avatar.classList.add('hop');
    say(clickLines[lineIndex % clickLines.length], 2200);
    lineIndex++;
  }
  avatar.addEventListener('click', poke);
  avatar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); poke(); }
  });

  // Called when the door opens: she turns to it and welcomes you.
  window.avatarWelcome = () => {
    avatar.classList.add('look-door');
    head.style.transform = 'rotate(-6deg)';
    pupils.forEach(p => { p.style.transform = 'translate(-2.3px, 0)'; });
    say('Come on in!', 1500);
  };
  window.avatarReset = () => {
    avatar.classList.remove('look-door');
    head.style.transform = '';
  };
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
  toolkitContent.classList.toggle('ways', tab === 'ways');
  if (tab === 'ways') {
    toolkitContent.innerHTML = items.map(w =>
      `<p class="way-item"><span class="way-lead">${w.lead}</span> <span class="way-note">${w.note}</span></p>`
    ).join('');
    return;
  }
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
// Download the actual PDF resume.
function downloadResume() {
  const a = document.createElement('a');
  a.href = 'Ruchi_Bhilare_Resume.pdf';
  a.download = 'Ruchi_Bhilare_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
downloadResumeBtn.addEventListener('click', downloadResume);
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
