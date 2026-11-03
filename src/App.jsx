import { useCallback, useEffect, useState } from "react";
import {
  siDocker,
  siExpress,
  siGit,
  siKubernetes,
  siMongodb,
  siNodedotjs,
  siNextdotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { profile, skills, experience, projects, education, certifications } from "./data.js";
import { useReveal, useTheme, useActiveSection, useTypewriter } from "./hooks.js";

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];
const IDS = NAV.map(([id]) => id);
const HERO_WORDS = ["full-stack", "thoughtful", "scalable"];

function OpeningAnimation({ onComplete }) {
  const codeLines = [
    'const developer = new WebDeveloper();',
    '// crafting digital experiences',
    'await developer.build("your ideas");',
  ];
  const suggestions = [
    ["developer", "WebDeveloper", "WebProject"],
    ["crafting", "creative", "clean code"],
    ["build", "deploy", "ship"],
  ];
  const [lineIndex, setLineIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const currentLine = codeLines[lineIndex];
    const timer = window.setTimeout(() => {
      if (characterIndex < currentLine.length) {
        setCharacterIndex((index) => index + 1);
      } else if (lineIndex < codeLines.length - 1) {
        setLineIndex((index) => index + 1);
        setCharacterIndex(0);
      } else {
        onComplete();
      }
    }, characterIndex === currentLine.length ? 220 : 38);
    return () => window.clearTimeout(timer);
  }, [characterIndex, lineIndex, onComplete]);

  return (
    <div className="opening-screen" role="status" aria-label="Loading portfolio">
      <div className="opening-shell">
        <div className="opening-brand mono"><span>&lt;</span>Rupayan_Sen<span>/&gt;</span></div>
        <div className="opening-code mono">
          <p className="opening-typed-line">{codeLines[lineIndex].slice(0, characterIndex)}<span className="opening-cursor">▌</span></p>
          <div className="opening-suggestions">
            {suggestions[lineIndex].map((suggestion, index) => (
              <span className={index === 0 ? "suggestion-active" : ""} key={suggestion}>{suggestion}</span>
            ))}
          </div>
        </div>
        <div className="opening-progress"><span /></div>
        <p className="opening-status mono">initializing portfolio <span>•••</span></p>
      </div>
    </div>
  );
}

function Section({ id, num, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section reveal" ref={ref}>
      <h2 className="section-title">
        <span className="mono num">{num}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const tokenIcons = {
  JavaScript: ["JS", "javascript"],
  TypeScript: [siTypescript, "typescript"],
  C: ["C", "c"],
  "React.js": [siReact, "react"],
  React: [siReact, "react"],
  "Redux Toolkit": ["R", "redux"],
  "Tailwind CSS": [siTailwindcss, "tailwind"],
  Bootstrap: ["B", "bootstrap"],
  HTML5: ["5", "html"],
  "React Router": ["↪", "router"],
  "React Hook Form": ["HF", "hook-form"],
  "Node.js": [siNodedotjs, "node"],
  "Node.js/Express": [siNodedotjs, "node"],
  "Express.js": [siExpress, "express"],
  "Spring Boot": ["S", "spring"],
  "REST API Design": ["↗", "rest"],
  "REST APIs": ["↗", "rest"],
  MongoDB: [siMongodb, "mongodb"],
  MySQL: ["SQL", "mysql"],
  PostgreSQL: [siPostgresql, "postgresql"],
  Redis: ["R", "redis"],
  Git: [siGit, "git"],
  GitHub: ["GH", "github"],
  "Git/GitHub": ["GH", "github"],
  "VS Code": ["<>", "vscode"],
  Postman: ["↗", "postman"],
  npm: ["npm", "npm"],
  Cloudinary: ["☁", "cloudinary"],
  "Next.js": [siNextdotjs, "next"],
  "Prisma ORM": [siPrisma, "prisma"],
  Kubernetes: [siKubernetes, "kubernetes"],
  Docker: [siDocker, "docker"],
  "Gemini API": ["✦", "gemini"],
  "C++": ["C++", "cpp"],
  Java: ["☕", "java"],
  Python: ["Py", "python"],
};

function TokenIcon({ token }) {
  const [icon, name] = tokenIcons[token] || ["•", "default"];
  return (
    <span className={`token-icon ${name}`} aria-hidden="true">
      {typeof icon === "string" ? icon : <svg viewBox="0 0 24 24" role="img"><path d={icon.path} /></svg>}
    </span>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t} className="mono"><TokenIcon token={t} />{t}</li>
      ))}
    </ul>
  );
}

const skillIcons = {
  Frontend: ["▣", "frontend"],
  Backend: ["⌘", "backend"],
  "Infra & Tools": ["✦", "tools"],
};

function SkillIcon({ group }) {
  const [label, name] = skillIcons[group] || ["✦", "skill"];
  return <span className={`skill-icon ${name}`} aria-hidden="true">{label}</span>;
}

function SocialIcon({ name }) {
  const common = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };
  if (name === "Facebook") return <svg {...common}><path d="M14 8h3V4h-3c-3.3 0-5 1.8-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" /></svg>;
  if (name === "WhatsApp") return <svg {...common}><path d="M12 2a9.8 9.8 0 0 0-8.5 14.8L2 22l5.4-1.4A10 10 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 19.8Zm4.4-5.8c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.3 6.3 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1 0-.3-.1-.5-.2Z" /></svg>;
  if (name === "Threads") return <svg {...common}><path d="M12.4 21.5c-4.8 0-8-3.1-8-8.2 0-5.2 3.2-8.8 8-8.8 3.6 0 6.5 1.8 7.3 4.7l-2.1.7c-.6-2-2.4-3.1-5.2-3.1-3.4 0-5.6 2.4-5.6 6.5 0 4 2.1 6 5.6 6 2.8 0 4.7-1.4 4.7-3.5 0-1.5-.9-2.5-2.7-2.9-.2 2.6-1.5 4-3.7 4-1.8 0-3-1-3-2.5 0-1.8 1.7-3 4.4-3 .1 0 .3 0 .4.1-.3-1.3-1.2-1.9-2.5-1.9-1.3 0-2.3.5-3 1.5l-1.7-1.2c1-1.5 2.7-2.4 4.8-2.4 2.7 0 4.5 1.5 4.8 4 2.8.5 4.2 2.2 4.2 4.6 0 3.5-3.1 6-7.7 6Zm-1.3-7c-1.4 0-2.1.4-2.1 1 0 .4.4.7 1 .7.8 0 1.2-.6 1.3-1.7h-.2Z" /></svg>;
  if (name === "Instagram") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="17.5" cy="6.5" r="1" /></svg>;
  if (name === "X") return <svg {...common}><path d="M5 4h3.2l3.6 4.8L15.8 4H19l-5.7 6.5L19.5 20h-3.2l-4-5.3L7.5 20H4.3l6-6.9L5 4Zm2.8 1.8 8.6 12.4h.9L8.7 5.8h-.9Z" /></svg>;
  return <svg {...common}><path d="M5 7.5 7.5 4l3.2 1.2a8 8 0 0 1 2.6 0L16.5 4 19 7.5c1.3 2 1.8 4.2 1.5 6.8-1.8 1.3-3.5 2-5.1 2.4l-.9-1.2c.8-.2 1.5-.5 2.2-.9l-.5-.4c-3 1.4-5.9 1.4-8.8 0l-.5.4c.7.4 1.4.7 2.2.9l-.9 1.2c-1.6-.4-3.3-1.1-5.1-2.4-.3-2.6.2-4.8 1.5-6.8ZM8.7 13c.7 0 1.3-.7 1.3-1.6s-.6-1.6-1.3-1.6-1.3.7-1.3 1.6.6 1.6 1.3 1.6Zm6.6 0c.7 0 1.3-.7 1.3-1.6s-.6-1.6-1.3-1.6-1.3.7-1.3 1.6.6 1.6 1.3 1.6Z" /></svg>;
}

function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social media links">
      {profile.socials.map((social) => (
        <a key={social.name} className={`social-link social-${social.name.toLowerCase()}`} href={social.url} target="_blank" rel="noreferrer" aria-label={social.name} title={social.name}>
          <SocialIcon name={social.name} />
        </a>
      ))}
    </nav>
  );
}

function Header() {
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  return (
    <header className="header">
      <a href="#top" className="logo mono">&lt;Rupayan_Sen/&gt;</a>
      <nav className={open ? "nav open" : "nav"}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-talk mono" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
        <button className="icon-btn" onClick={toggle} aria-label="Toggle colour theme" title="Toggle theme">
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const typedWord = useTypewriter(HERO_WORDS);

  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow mono">Freelance web developer · Hi, my name is</p>
        <h1>{profile.name}.</h1>
        <p className="hero-role">I build <em>{typedWord}<span className="typing-cursor" aria-hidden="true">|</span></em> products for the web.</p>
        <p className="hero-sub">{profile.seeking}</p>
        <div className="cta">
          <a className="btn primary" href="#projects">View my work</a>
          <a className="btn" href={profile.resume} download>Download résumé</a>
          <a className="btn ghost" href={`mailto:${profile.email}`}>Say hello</a>
        </div>
      </div>
      <div className="terminal" aria-hidden="true">
        <div className="term-bar"><i /><i /><i /><span className="mono">developer.js</span></div>
<pre className="mono">{`const developer = {
  name: "Rupayan Sen",
  role: "Freelance Web Developer",
  education: "MCA, 2026",
  stack: [
    "React", "Redux Toolkit",
    "Node.js", "Express",
    "MongoDB", "PostgreSQL",
  ],
  currently: "Travel Booking Platform",
  openToWork: true,
};`}</pre>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" num="01" title="About me">
      <div className="about">
        <div className="about-copy">
          <p>{profile.summary}</p>
        </div>
        <figure className="about-image">
          <img src={profile.image} alt={`${profile.name} portrait`} onError={(event) => { event.currentTarget.style.display = "none"; }} />
          <figcaption className="mono">a little about me</figcaption>
        </figure>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" num="02" title="Technical skills">
      <div className="skill-grid">
        {skills.map((s) => (
          <div className="skill-panel" key={s.group}>
            <h3 className="mono skill-heading"><SkillIcon group={s.group} />{s.group}</h3>
            <ul className="skill-items">
              {s.items.map((item) => (
                <li key={item}>
                  <TokenIcon token={item} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="skills-note mono">+ always exploring new technologies</p>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" num="03" title="Experience">
      {experience.map((e) => (
        <article className="card job" key={e.title}>
          <div className="job-head">
            <h3>{e.title}</h3>
            <span className="mono period">{e.period}</span>
          </div>
          <p className="muted">{e.meta}</p>
          <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <Tags items={e.stack} />
        </article>
      ))}
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" num="04" title="Featured work">
      <div className="projects-intro">
        <div>
          <p className="projects-kicker mono">Selected projects</p>
          <h3 className="projects-heading">Some things<br />I've built</h3>
        </div>
        <a className="view-all mono" href={profile.github} target="_blank" rel="noreferrer">View all projects ↗</a>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <article className={p.featured ? "card project featured" : "card project"} key={p.name}>
            <div className={`project-preview project-preview-${p.preview || "default"}`}>
              <span className="preview-label mono">{p.previewLabel || "PROJECT / 0"}</span>
              <span className="preview-mark">{p.name.slice(0, 1)}</span>
              <span className="preview-grid" />
              <a className="project-arrow" href={p.live || profile.site} target="_blank" rel="noreferrer" aria-label={`View ${p.name} live website`}>↗</a>
            </div>
            <div className="project-body">
              <div className="project-head">
                <h3>{p.name}</h3>
                {p.featured && <span className="badge mono">featured</span>}
              </div>
            <p className="muted">{p.tagline}</p>
            <Tags items={p.stack} />
            <div className="project-actions">
              <a className="project-link" href={p.github || profile.github} target="_blank" rel="noreferrer">
                <span aria-hidden="true">⌘</span> Open GitHub repository ↗
              </a>
              <a className="project-link project-link-live" href={p.live || profile.site} target="_blank" rel="noreferrer">
                <span aria-hidden="true">↗</span> View live website
              </a>
            </div>
            </div>
          </article>
        ))}
      </div>
      <p className="more mono">More on <a href={profile.github} target="_blank" rel="noreferrer">github.com/rupayansen23 ↗</a></p>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" num="05" title="Education & certifications">
      <div className="edu-grid">
        <div>
          {education.map((e) => (
            <div className="card edu" key={e.school}>
              <span className="mono period">{e.period}</span>
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
            </div>
          ))}
        </div>
        <div>
          {certifications.map((c) => (
            <div className="card edu" key={c.name}>
              <span className="mono period">{c.detail}</span>
              <h3>{c.name}</h3>
              <p className="muted">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" num="06" title="Get in touch">
      <div className="contact">
        <p>
          I work with businesses, founders, and teams to design and build reliable, modern web experiences.
          If you have something to build, my inbox is open.
        </p>
        <a className="btn primary big" href={`mailto:${profile.email}`}>{profile.email}</a>
        <SocialLinks />
        <ul className="links mono">
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
          <li><a href={profile.site} target="_blank" rel="noreferrer">rupayan.info ↗</a></li>
          <li><a href={profile.resume} download>Résumé ↓</a></li>
        </ul>
      </div>
    </Section>
  );
}

export default function App() {
  const [isOpening, setIsOpening] = useState(true);
  const finishOpening = useCallback(() => setIsOpening(false), []);

  return (
    <>
      {isOpening && <OpeningAnimation onComplete={finishOpening} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer mono">Designed & built by Rupayan Sen · React + Vite · {new Date().getFullYear()}</footer>
    </>
  );
}
