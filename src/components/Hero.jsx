import { useEffect, useRef } from 'react';
import { Small } from './Icons.jsx';
import cutout from '../assets/mamta-cutout.webp';

// Portrait bursting out of a purple ring, in a 3D scene that tilts with the
// pointer while three skill chips orbit around it (passing behind and in front).
export default function Hero() {
  const stage = useRef(null), scene = useRef(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = stage.current;
    let x = 0, y = 0, raf;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      x = (e.clientX - r.left) / r.width - 0.5;
      y = (e.clientY - r.top) / r.height - 0.5;
    };
    const leave = () => { x = 0; y = 0; };
    window.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    const t0 = performance.now();
    let cx = 0, cy = 0;
    const loop = (t) => {
      const s = (t - t0) / 1000;
      const tx = x || Math.sin(s * 0.6) * 0.18, ty = y || Math.cos(s * 0.5) * 0.08;
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      scene.current.style.transform = `rotateY(${cx * 16}deg) rotateX(${-cy * 12}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, []);

  const sats = [
    { a: 0, icon: 'robot', t: 'ai agents', s: 'plan → act → verify' },
    { a: 120, icon: 'spark', t: 'gen ai · rag', s: 'llms on your data' },
    { a: 240, icon: 'code', t: 'fullstack', s: '.net · react · angular' },
  ];

  return (
    <div className="gutter">
      <header className="wrap hero">
        <div>
          <span className="bar" />
          <h1>i'm mamta yadav, a <span>full stack ai engineer</span></h1>
          <p className="lede">Full stack engineer and freelance website developer. I design and build fast business websites, AI agents and LLM apps that do real work, from .NET and React to cloud and lead automation.</p>
          <div className="cta-row">
            <a className="btn primary" href="#contact">contact me</a>
            <a className="btn ghost" href="#portfolio">browse portfolio</a>
          </div>
        </div>

        <div className="stage" ref={stage}>
          <div className="stage-3d" ref={scene}>
            <span className="halo h1" /><span className="halo h2" />
            <span className="ring" />
            <div className="orbit" aria-hidden="true">
              {sats.map((c) => (
                <div className="sat" key={c.t} style={{ transform: `rotateZ(${c.a}deg) translateX(46cqw) rotateZ(${-c.a}deg)` }}>
                  <div className="chip"><span className="ic"><Small name={c.icon} /></span><span>{c.t}<small>{c.s}</small></span></div>
                </div>
              ))}
            </div>
            <div className="portrait"><img src={cutout} alt="Mamta Yadav, freelance website developer and AI agent engineer" /></div>
            <div className="badge-av"><b />open to work</div>
          </div>
        </div>
      </header>
    </div>
  );
}
