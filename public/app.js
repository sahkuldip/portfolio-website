const { useState } = React;
const html = htm.bind(React.createElement);

const stats = [
  { value: '04+', label: 'Core stacks' },
  { value: '03', label: 'Featured projects' },
  { value: '100%', label: 'Responsive UI' },
  { value: '01', label: 'React component app' },
];

const skills = [
  {
    name: 'HTML',
    icon: 'fab fa-html5',
    level: 'Semantic markup',
    description: 'Structured, accessible, and maintainable page architecture.',
  },
  {
    name: 'CSS',
    icon: 'fab fa-css3-alt',
    level: 'Visual systems',
    description: 'Modern responsive layouts, glass panels, gradients, and motion.',
  },
  {
    name: 'JavaScript',
    icon: 'fab fa-js',
    level: 'Interactive logic',
    description: 'Client-side behavior, form handling, and dynamic rendering.',
  },
  {
    name: 'React',
    icon: 'fab fa-react',
    level: 'Component UI',
    description: 'Reusable sections, state-driven forms, and cleaner composition.',
  },
  {
    name: 'Java',
    icon: 'fab fa-java',
    level: 'Core programming',
    description: 'Object-oriented development and strong problem-solving foundations.',
  },
  {
    name: 'Advanced Java',
    icon: 'fas fa-layer-group',
    level: 'Enterprise logic',
    description: 'Servlets, JSP, JDBC, and application-layer backend concepts.',
  },
  {
    name: 'Oracle',
    icon: 'fas fa-database',
    level: 'Database design',
    description: 'Schema awareness, SQL queries, and relational data handling.',
  },
  {
    name: 'Spring Boot',
    icon: 'fas fa-leaf',
    level: 'Backend framework',
    description: 'Fast API development with a clean, production-ready structure.',
  },
  {
    name: 'SQL',
    icon: 'fas fa-table',
    level: 'Data querying',
    description: 'Data retrieval, filtering, joins, and structured reporting.',
  },
  {
    name: 'Figma',
    icon: 'fab fa-figma',
    level: 'Interface design',
    description: 'Wireframes, UI structure, and design-to-development alignment.',
  },
  {
    name: 'Power BI',
    icon: 'fas fa-chart-line',
    level: 'Data visualization',
    description: 'Dashboards and visual storytelling for business insights.',
  },
  {
    name: 'MS Office',
    icon: 'fas fa-file-excel',
    level: 'Productivity',
    description: 'Documentation, analysis, and day-to-day professional workflows.',
  },
];

const projects = [
  
  {
  title: 'Banking Management System',
  subtitle: 'Full-Stack Banking Application',
  description: 'Developed a full-stack banking application with secure RESTful APIs, account management, transaction processing, and database integration using a layered architecture.',
  stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'ReactJS', 'MySQL', 'REST APIs'],
},
  {
    title: 'Portfolio Website',
    subtitle: 'Responsive personal brand site',
    description: 'A polished portfolio focused on layout clarity, responsive behavior, and strong presentation.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Restaurant Website',
    subtitle: 'Ordering and reservation experience',
    description: 'A responsive restaurant experience with booking flow and customer-friendly navigation.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const highlights = [
  'React component architecture for cleaner structure',
  'Backend-ready profile with Java, Advanced Java, Oracle, and Spring Boot',
  'Visual design skills with Figma and UI-focused thinking',
  'Responsive layout tuned for desktop and mobile',
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/kuldip-sah/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/sahkuldip?tab=repositories', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'mailto:sahkuldip186@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
];

const profilePhoto = {
  src: 'KS.jpg',
  alt: 'Kuldip Sah portrait',
  note: 'To change the profile photo, replace this single src value.',
};

function SectionHeading({ eyebrow, title, description }) {
  return html`
    <div className="section-heading">
      <p className="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      <p className="section-copy">${description}</p>
    </div>
  `;
}

function StatCard({ value, label }) {
  return html`
    <article className="stat-card">
      <strong>${value}</strong>
      <span>${label}</span>
    </article>
  `;
}

function SkillCard({ skill }) {
  return html`
    <article className="skill-card">
      <div className="skill-icon"><i className=${skill.icon} aria-hidden="true"></i></div>
      <div className="skill-body">
        <p className="skill-level">${skill.level}</p>
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
      </div>
    </article>
  `;
}

function ProjectCard({ project }) {
  return html`
    <article className="project-card">
      <p className="project-subtitle">${project.subtitle}</p>
      <h3>${project.title}</h3>
      <p className="project-copy">${project.description}</p>
      <div className="project-tags">
        ${project.stack.map((item) => html`<span key=${item}>${item}</span>`)}
      </div>
      <a className="text-link" href="#contact">Discuss this project</a>
    </article>
  `;
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

 

async function handleSubmit(event) {
  event.preventDefault();
  setStatus('Sending message...');

  try {
    if (
      !emailjs ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus('Please complete all fields and try again.');
      return;
    }

    
const response = await emailjs.send(
  'service_ewa0zf6',
  'template_fdt1lbd',
  {
    from_name: form.name.trim(),
    from_email: form.email.trim(),
    message: form.message.trim()
  },
  {
    publicKey: 'Odp3ljdPW2-KCmN6g'
  }
);


    console.log('Email response:', response);
    setStatus('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });

  } catch (error) {
    console.error('EmailJS error:', error);
    console.error('Status:', error.status);
    console.error('Details:', error.text);

    const details =
      error.text || error.message || 'Unknown error';

    setStatus(`Email failed: ${details}`);
  }
}


  return html`
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-bar">
          <a className="brand" href="#hero" >
            <span className="brand-mark">KS</span>
            <span className="brand-copy">
              <strong>Kuldip Sah</strong>
              <small>Java Full Stack • UI/UX • Backend minded</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section section">
          <div className="container hero-grid">
            <div className="hero-copy">
             <p className="eyebrow">Java Full Stack Developer Portfolio</p>
             <h1>Building scalable applications with Java and modern web technologies.</h1>
              <p className="lead">
                I’m Kuldip Sah, a Java Full Stack Developer focused on building scalable, responsive, and user-centric web applications. I specialize in Java, Advanced Java, Spring Boot, RESTful APIs, Oracle SQL, and modern frontend technologies, with an emphasis on clean code, modular architecture, reusable components, and efficient database integration. I’m passionate about solving real-world problems through reliable backend engineering and intuitive user interfaces while continuously expanding my technical expertise.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="M_Kuldip_Sah_Nepal_Resume.pdf" download className="btn btn-secondary">Download Resume</a>
              </div>
              <div className="hero-stats">
                ${stats.map((item) => html`<${StatCard} key=${item.label} value=${item.value} label=${item.label} />`)}
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-card">
                <img src=${profilePhoto.src} alt=${profilePhoto.alt} />
                <div className="portrait-note">
                  <span>Available for internships and freelance work</span>
                </div>
              </div>
              <div className="profile-meta">
                <p className="profile-meta-label">Current Stack</p>
                <strong>React + Java + Spring Boot</strong>
                <span>Modern UI, structured code, and scalable backend thinking.</span>
                <small>${profilePhoto.note}</small>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <${SectionHeading}
              eyebrow="About"
              title="A practical developer with design awareness and stronger backend depth."
              description="I build portfolio-style interfaces that feel polished, then pair them with backend knowledge so the work is not only attractive but technically grounded."
            />

            <div className="about-grid">
              <article className="panel panel-soft">
                <p>
                  I am a B.Sc. CSIT graduate from Birat Kshitiz College, Biratnagar, with a
  strong foundation in software development and full-stack web technologies.
  I focus on building responsive, user-friendly applications using ReactJS
  and developing robust backend solutions with Java and Spring Boot. I value
  clean code, modular architecture, efficient database integration, and
  practical problem-solving to create reliable, maintainable, and scalable
  software solutions.
                </p>
                <div className="highlight-list">
                  ${highlights.map((item) => html`<span key=${item}>${item}</span>`)}
                </div>
              </article>

              <article className="panel panel-strong">
                <h3>What I focus on</h3>
                <ul>
                  <li>Writing clean, maintainable code following object-oriented programming principles</li>
<li>Building responsive, interactive user interfaces using ReactJS and modern web technologies</li>
<li>Developing RESTful APIs and backend functionality using Java and Spring Boot</li>
<li>Working with relational databases, SQL queries, and data persistence using Spring Data JPA</li>
<li>Using IntelliJ IDEA and Eclipse for development, Postman for API testing, and Git/GitHub for version control</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <${SectionHeading}
              eyebrow="Skills"
              title="A stronger stack with clear symbols for each capability."
              description="The skill set now includes Java, Advanced Java, Oracle, and Spring Boot alongside the front-end tools already in the portfolio."
            />

            <div className="skills-grid">
              ${skills.map((skill) => html`<${SkillCard} key=${skill.name} skill=${skill} />`)}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <${SectionHeading}
              eyebrow="Projects"
              title="Selected work presented in a cleaner case-study style."
              description="These projects reflect both frontend delivery and broader product thinking, with room to expand into more polished case studies later."
            />

            <div className="projects-grid">
              ${projects.map((project) => html`<${ProjectCard} key=${project.title} project=${project} />`)}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact-grid">
            <div className="contact-copy">
              <${SectionHeading}
                eyebrow="Contact"
                title="Let’s build something clean, useful, and well-structured."
                description="If you want to discuss a project, internship, or collaboration, send a message and I’ll reply back."
              />

              <div className="social-links">
                ${socialLinks.map((link) => html`
                  <a key=${link.label} href=${link.href} target=${link.href.startsWith('mailto:') ? undefined : '_blank'} rel=${link.href.startsWith('mailto:') ? undefined : 'noreferrer'} aria-label=${link.label}>
                    <i className=${link.icon} aria-hidden="true"></i>
                  </a>
                `)}
              </div>
            </div>

            <form className="contact-form" onSubmit=${handleSubmit}>
              <label>
                <span>Name</span>
                <input type="text" name="name" value=${form.name} onInput=${handleChange} placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" value=${form.email} onInput=${handleChange} placeholder="Your email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" value=${form.message} onInput=${handleChange} placeholder="Tell me about your idea" required></textarea>
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
              ${status ? html`<p className="form-status">${status}</p>` : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bar">
          <p>&copy; 2026 Kuldip Sah. All rights reserved.</p>
          <a href="#hero">Back to top</a>
        </div>
      </footer>
    </div>
  `;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
