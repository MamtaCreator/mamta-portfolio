import { useRef } from 'react';
import { TileArt, ProjectArt, ArticleCover, Chevron, GitHubIcon, LinkedInIcon, MediumIcon, WhatsAppIcon, MailIcon } from './Icons.jsx';
import { profile, expertise, stack, projects, jobs, articles } from '../data.js';
import event from '../assets/mamta-event.jpg';
import cutout from '../assets/mamta-cutout.webp';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const Head = ({ title, children }) => (
  <div className="head">
    <div><span className="bar" /><h2 className="h2">{title}</h2></div>
    {children}
  </div>
);
const Socials = ({ wa }) => (
  <div className="socials">
    <a className="soc" href={profile.github} {...ext} aria-label="GitHub"><GitHubIcon /></a>
    <a className="soc" href={profile.linkedin} {...ext} aria-label="LinkedIn"><LinkedInIcon /></a>
    <a className="soc" href={profile.medium} {...ext} aria-label="Medium"><MediumIcon /></a>
    {wa && <a className="soc wa" href={profile.whatsapp} {...ext} aria-label="WhatsApp"><WhatsAppIcon /></a>}
  </div>
);
const More = ({ href, label }) => (
  <a className="more" href={href} {...ext}>{label}<i><Chevron /></i></a>
);

export const Nav = () => (
  <nav className="gutter"><div className="wrap">
    <a className="logo" href="#top"><i>m</i>mamta<b>.</b></a>
    <ul>
      {[['home', 'top'], ['expertise', 'expertise'], ['stack', 'stack'], ['portfolio', 'portfolio'], ['about', 'about'], ['articles', 'articles']].map(([l, id], i) => (
        <li key={id}><a className={i === 0 ? 'on' : ''} href={'#' + id}>{l}</a></li>
      ))}
    </ul>
    <a className="btn primary small" href="#contact">contact</a>
  </div></nav>
);

export const Expertise = () => {
  const track = useRef(null);
  const go = (dir) => {
    const el = track.current, card = el.firstElementChild;
    el.scrollBy({ left: dir * (card.offsetWidth + 28), behavior: 'smooth' });
  };
  return (
    <section className="gutter" id="expertise"><div className="wrap">
      <div className="head">
        <div><span className="bar" /><h2 className="h2">my expertise</h2>
          <p style={{ marginTop: 18 }}>From one prompt to a production system: I design the agent, the data it reads and the app people use.</p></div>
        <div className="slider-nav">
          <button className="arrow" onClick={() => go(-1)} aria-label="Previous"><Chevron left /></button>
          <button className="arrow" onClick={() => go(1)} aria-label="Next"><Chevron /></button>
        </div>
      </div>
      <div className="slider" ref={track}>
        {expertise.map((e) => (
          <article className="xcard" key={e.title}>
            <div className="tile"><TileArt kind={e.art} /></div>
            <h3>{e.title}</h3><p>{e.text}</p>
          </article>
        ))}
      </div>
      <div className="center"><a className="btn primary" href="#contact">contact me</a></div>
    </div></section>
  );
};

export const Stack = () => (
  <section className="alt gutter" id="stack"><div className="wrap">
    <Head title="my tech stack"><p>The tools I build with every day. Filled tags are the ones I reach for first.</p></Head>
    <div className="sgrid">
      {stack.map((g) => (
        <div className="scard reveal" key={g.group}>
          <h3><i />{g.group}</h3>
          <div className="tags">{g.items.map((t) => <span key={t} className={'tag' + (t.endsWith('*') ? ' hot' : '')}>{t.replace('*', '')}</span>)}</div>
        </div>
      ))}
    </div>
  </div></section>
);

export const Portfolio = () => (
  <section className="gutter" id="portfolio"><div className="wrap">
    <Head title="my portfolio"><p>AI platforms, automation and machine learning work, from client builds to research projects.</p></Head>
    <div className="plist">
      {projects.map((p) => p.layout === 'feature' ? (
        <article className={'pfeat reveal' + (p.flip ? ' flip' : '')} key={p.title}>
          <div className="art"><ProjectArt kind={p.art} /></div>
          <div className="info">
            <span className="pill">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p>
            {p.link ? <More {...p.link} /> : <More href="#contact" label="discuss a similar project" />}
          </div>
        </article>
      ) : (
        <article className="pcard reveal" key={p.title}>
          <div className="art"><ProjectArt kind={p.art} /><span className="pill">{p.tag}</span></div>
          <div className="txt">
            <h3>{p.title}</h3><p>{p.text}</p>
            {p.link ? <More href={p.link.href} label={p.link.label} /> : <More href="#contact" label="discuss a similar project" />}
          </div>
        </article>
      ))}
    </div>
    <div className="follow reveal">
      <h3>like what you see? follow me for more.</h3>
      <Socials />
    </div>
  </div></section>
);

export const CtaBand = () => (
  <section className="band gutter">
    <div className="circles" aria-hidden="true">
      {['0%', '12%', '24%', '36%'].map((i) => <i key={i} style={{ '--i': i }} />)}
    </div>
    <div className="wrap">
      <h2>let's build your next ai agent together</h2>
      <p>Have a workflow that eats your team's time? I'll design an agent for it and ship the app around it.</p>
      <div className="cta-row">
        <a className="btn ghost" href={`mailto:${profile.email}`}><MailIcon />email me</a>
        <a className="btn wa" href={profile.whatsapp} {...ext}><WhatsAppIcon />whatsapp me</a>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section className="gutter" id="about"><div className="wrap about">
    <div className="pics reveal">
      <div className="p1"><img src={event} alt="Mamta Yadav, website developer and AI engineer, at an event" /></div>
      <div className="p2"><img src={cutout} alt="Mamta Yadav, studio portrait" /></div>
    </div>
    <div className="about-copy">
      <span className="bar" /><h2 className="h2">about me</h2>
      <p>I started as a fullstack developer on Angular, C#/.NET and Azure, then moved into machine learning and NLP. Today I combine both: I work as a freelance website developer and designer, and I build Gen AI, LLM and agentic AI systems that live inside real products, not demos.</p>
      <p>I also write about software design on Medium, explaining patterns in plain language with real-world examples.</p>
      <div className="facts">
        <div><b>3</b><span>disciplines: ai, backend, frontend</span></div>
        <div><b>5+</b><span>client sites with lead automation</span></div>
        <div><b>5</b><span>design-pattern articles on medium</span></div>
      </div>
      <a className="btn primary" href="#contact">work with me</a>
    </div>
  </div></section>
);

export const Experience = () => (
  <section className="alt gutter" id="experience"><div className="wrap xp">
    <div className="xp-col">
      <div><span className="bar" /><h2 className="h2">work experience</h2>
        <p style={{ margin: '18px 0 0', maxWidth: '44ch' }}>Fullstack engineering roots, now focused on AI agents and automation.</p></div>
      {jobs.filter((_, i) => i % 2 === 1).map((j) => <Job key={j.title + j.org} j={j} />)}
    </div>
    <div className="xp-col offset">
      {jobs.filter((_, i) => i % 2 === 0).map((j) => <Job key={j.title + j.org} j={j} />)}
    </div>
  </div></section>
);
const Job = ({ j }) => (
  <div className="job reveal"><span className="when">{j.when}</span><h3>{j.title}</h3><span className="org">{j.org}</span><p>{j.text}</p></div>
);

export const Articles = () => {
  const [feat, ...rest] = articles;
  return (
    <section className="gutter" id="articles"><div className="wrap">
      <Head title="my articles"><p>I explain software design the way I wish it had been explained to me: plain language and real-world examples.</p></Head>
      <a className="afeat reveal" href={feat.url} {...ext}>
        <div className="cover"><ArticleCover i={0} /></div>
        <div>
          <span className="pill">{feat.tag}</span>
          <h3>{feat.title}</h3>
          {feat.summary && <p>{feat.summary}</p>}
          <span className="date">{feat.date}</span>
        </div>
      </a>
      <div className="agrid">
        {rest.map((a, i) => (
          <a className="acard reveal" key={a.url} href={a.url} {...ext}>
            <div className="cover"><ArticleCover i={i + 1} /></div>
            <div className="meta"><span className="pill">{a.tag}</span><span className="date">{a.date}</span></div>
            <h3>{a.title}</h3>
          </a>
        ))}
      </div>
      <div className="center"><a className="btn ghost" href={profile.medium} {...ext}>read all on medium</a></div>
    </div></section>
  );
};

export const Footer = () => (
  <footer className="gutter" id="contact"><div className="wrap">
    <div className="top">
      <div>
        <h4>let's work together</h4>
        <p>Tell me about your AI idea, product or website. I usually reply within a day.</p>
        <div className="contact-btns">
          <a className="btn primary small" href={`mailto:${profile.email}`}><MailIcon />email me</a>
          <a className="btn wa small" href={profile.whatsapp} {...ext}><WhatsAppIcon />whatsapp me</a>
        </div>
        <Socials />
      </div>
      <div><h5>pages</h5><ul>
        <li><a href="#top">home</a></li><li><a href="#expertise">expertise</a></li><li><a href="#stack">tech stack</a></li>
        <li><a href="#portfolio">portfolio</a></li><li><a href="#about">about</a></li><li><a href="#experience">experience</a></li><li><a href="#articles">articles</a></li>
      </ul></div>
      <div><h5>connect</h5><ul>
        <li><a href={profile.github} {...ext}>github</a></li><li><a href={profile.linkedin} {...ext}>linkedin</a></li>
        <li><a href={profile.medium} {...ext}>medium</a></li><li><a href={profile.whatsapp} {...ext}>whatsapp</a></li>
      </ul></div>
    </div>
    <div className="copy">copyright © {new Date().getFullYear()} mamta yadav · freelance website developer &amp; ai agent engineer</div>
  </div></footer>
);

export const WhatsAppFloat = () => (
  <a className="wa-float" href={profile.whatsapp} {...ext} aria-label="Chat on WhatsApp"><WhatsAppIcon /><span>chat with me</span></a>
);
