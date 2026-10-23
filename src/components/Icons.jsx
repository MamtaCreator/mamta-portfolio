const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
);
export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
);
export const MediumIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.39 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.39 2.88 3.39 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
);
export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01C2.63 6.89 6.86 2.67 12.06 2.67c2.52 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.76 6.66c0 5.2-4.23 9.41-9.43 9.41zm8.03-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.7 5.84.7 12.1c0 2 .52 3.95 1.52 5.67L.6 23.25l5.61-1.47a11.33 11.33 0 0 0 5.83 1.6h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02z"/></svg>
);
export const MailIcon = () => (
  <svg viewBox="0 0 24 24" {...line} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>
);
export const Chevron = ({ left }) => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth="2.6" aria-hidden="true"><path d={left ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}/></svg>
);
const small = {
  robot: <><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6"/></>,
  spark: <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z"/>,
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>,
};
export const Small = ({ name }) => <svg viewBox="0 0 24 24" {...line} aria-hidden="true">{small[name]}</svg>;

/* Illustrated tiles for the expertise cards (purple on lavender, like the reference) */
const P = '#7051EF', P2 = '#A994FF', W = '#fff', L = '#D9CFFF';
export const TileArt = ({ kind }) => {
  if (kind === 'agents') return (
    <svg viewBox="0 0 80 80"><rect x="6" y="6" width="68" height="68" rx="18" fill={W}/><circle cx="40" cy="22" r="8" fill={P}/><circle cx="20" cy="56" r="7" fill={P2}/><circle cx="60" cy="56" r="7" fill={P2}/><path d="M40 30v10M40 40L22 50M40 40l18 10" stroke={P} strokeWidth="3" strokeLinecap="round"/><circle cx="40" cy="40" r="4" fill={P}/></svg>);
  if (kind === 'genai') return (
    <svg viewBox="0 0 80 80"><rect x="6" y="10" width="54" height="36" rx="12" fill={W}/><rect x="14" y="20" width="30" height="5" rx="2.5" fill={L}/><rect x="14" y="30" width="20" height="5" rx="2.5" fill={L}/><rect x="22" y="36" width="52" height="34" rx="12" fill={P}/><path d="M48 44l2.5 5.5L56 52l-5.5 2.5L48 60l-2.5-5.5L40 52l5.5-2.5z" fill={W}/></svg>);
  if (kind === 'fullstack') return (
    <svg viewBox="0 0 80 80"><rect x="6" y="10" width="68" height="48" rx="12" fill={W}/><rect x="6" y="10" width="68" height="12" rx="6" fill={L}/><circle cx="14" cy="16" r="2" fill={P}/><circle cx="21" cy="16" r="2" fill={P2}/><path d="M30 34l-7 6 7 6M50 34l7 6-7 6" stroke={P} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><rect x="26" y="62" width="28" height="8" rx="4" fill={P}/></svg>);
  return (
    <svg viewBox="0 0 80 80"><path d="M24 50a12 12 0 0 1-1-24 18 18 0 0 1 34-2 13 13 0 0 1-1 26z" fill={W}/><path d="M40 32v22M32 46l8 8 8-8" stroke={P} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><rect x="14" y="60" width="52" height="10" rx="5" fill={P}/></svg>);
};

/* Project mockups (UI-style illustrations) */
export const ProjectArt = ({ kind }) => {
  if (kind === 'dashboard') return (
    <svg viewBox="0 0 640 400" aria-hidden="true">
      <rect x="20" y="20" width="600" height="360" rx="28" fill={W}/>
      <rect x="20" y="20" width="140" height="360" rx="28" fill={P}/><rect x="44" y="56" width="80" height="12" rx="6" fill={P2}/>
      {[100,136,172,208].map((y,i)=><rect key={y} x="44" y={y} width={i===0?92:70} height="14" rx="7" fill={i===0?W:'#8B70F5'}/>)}
      <rect x="190" y="52" width="130" height="80" rx="18" fill="#F5F2FF"/><rect x="336" y="52" width="130" height="80" rx="18" fill="#F5F2FF"/><rect x="482" y="52" width="110" height="80" rx="18" fill={P}/>
      <text x="208" y="102" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800" fontSize="26" fill="#3A395E">86%</text>
      <text x="354" y="102" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800" fontSize="26" fill="#3A395E">4.2x</text>
      <text x="500" y="102" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="800" fontSize="26" fill={W}>360°</text>
      <rect x="190" y="152" width="276" height="200" rx="18" fill="#F5F2FF"/>
      <path d="M210 320l40-30 40 16 40-52 40 22 40-60 30 18" fill="none" stroke={P} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="482" y="152" width="110" height="200" rx="18" fill="#F5F2FF"/>
      {[0,1,2].map(i=><rect key={i} x={504+i*28} y={330-[60,120,90][i]} width="18" height={[60,120,90][i]} rx="9" fill={i===1?P:P2}/>)}
    </svg>);
  if (kind === 'leads') return (
    <svg viewBox="0 0 640 400" aria-hidden="true">
      <rect x="60" y="40" width="300" height="320" rx="28" fill={W}/><rect x="60" y="40" width="300" height="70" rx="28" fill={P}/>
      <circle cx="104" cy="75" r="18" fill={W}/><rect x="134" y="62" width="110" height="10" rx="5" fill={W}/><rect x="134" y="80" width="70" height="8" rx="4" fill={P2}/>
      <rect x="86" y="132" width="200" height="44" rx="16" fill="#F5F2FF"/><rect x="134" y="192" width="200" height="44" rx="16" fill={P}/><rect x="86" y="252" width="170" height="44" rx="16" fill="#F5F2FF"/>
      <rect x="102" y="148" width="140" height="10" rx="5" fill={L}/><rect x="150" y="208" width="150" height="10" rx="5" fill={P2}/><rect x="102" y="268" width="110" height="10" rx="5" fill={L}/>
      <rect x="390" y="110" width="200" height="90" rx="22" fill={W}/><circle cx="430" cy="155" r="20" fill="#25D366"/><rect x="462" y="140" width="100" height="10" rx="5" fill={L}/><rect x="462" y="160" width="70" height="8" rx="4" fill="#EDECF5"/>
      <rect x="390" y="220" width="200" height="90" rx="22" fill={W}/><circle cx="430" cy="265" r="20" fill={P}/><rect x="462" y="250" width="100" height="10" rx="5" fill={L}/><rect x="462" y="270" width="70" height="8" rx="4" fill="#EDECF5"/>
      <path d="M360 200h30" stroke={P} strokeWidth="4" strokeDasharray="6 6"/>
    </svg>);
  if (kind === 'nlp') return (
    <svg viewBox="0 0 640 400" aria-hidden="true">
      <rect x="40" y="40" width="340" height="320" rx="28" fill={W}/>
      {[[80,260],[118,200],[156,280],[194,170],[232,240],[270,150]].map(([y,w],i)=><rect key={i} x="72" y={y} width={w} height="18" rx="9" fill={i%2? L : '#EDECF5'}/>)}
      <rect x="72" y="300" width="120" height="34" rx="12" fill={P}/><rect x="204" y="300" width="100" height="34" rx="12" fill={P2}/>
      <rect x="410" y="40" width="190" height="320" rx="28" fill={P}/>
      {[[230,80],[180,130],[150,160],[270,40]].map(([h,_],i)=><rect key={i} x={440+i*38} y={330-h*0.9} width="22" height={h*0.9} rx="11" fill={i===1?W:P2}/>)}
      <circle cx="505" cy="90" r="26" fill={W}/><path d="M492 92q13 14 26 0" stroke={P} strokeWidth="4" fill="none" strokeLinecap="round"/><circle cx="496" cy="84" r="3" fill={P}/><circle cx="514" cy="84" r="3" fill={P}/>
    </svg>);
  return (
    <svg viewBox="0 0 640 400" aria-hidden="true">
      <rect x="40" y="30" width="560" height="340" rx="28" fill={W}/>
      <path d="M80 330h480M80 330V70" stroke="#EDECF5" strokeWidth="4" strokeLinecap="round"/>
      {[[170,130,P],[400,110,P2],[300,260,'#3A395E']].map(([cx,cy,c],k)=><g key={k}>
        <circle cx={cx} cy={cy} r="62" fill={c} opacity=".08"/>
        {[[0,0],[28,-18],[-24,22],[30,24],[-30,-16],[8,36],[-6,-34],[40,4]].map(([x,y],i)=><circle key={i} cx={cx+x} cy={cy+y} r="8" fill={c}/>)}
        <path d={`M${cx-8} ${cy}h16M${cx} ${cy-8}v16`} stroke={W} strokeWidth="3"/>
      </g>)}
    </svg>);
};

export const ArticleCover = ({ i = 0 }) => {
  const shapes = [
    <g key="a"><rect x="40" y="90" width="140" height="100" rx="20" fill={W} opacity=".95"/><rect x="300" y="90" width="140" height="100" rx="20" fill={W} opacity=".95"/><rect x="200" y="110" width="80" height="60" rx="16" fill={P2}/><path d="M180 140h20M280 140h20" stroke={W} strokeWidth="5"/></g>,
    <g key="b"><rect x="80" y="70" width="150" height="110" rx="20" fill={W}/><rect x="250" y="100" width="150" height="110" rx="20" fill={P2}/><path d="M220 125l30 0" stroke={W} strokeWidth="5" strokeDasharray="6 6"/></g>,
    <g key="c">{[0,1,2,3].map(k=><rect key={k} x={110+k*20} y={190-k*36} width="220" height="30" rx="12" fill={k===3?P2:W} opacity={1-k*.12}/>)}</g>,
    <g key="d"><rect x="180" y="50" width="120" height="70" rx="18" fill={W}/><rect x="80" y="160" width="120" height="70" rx="18" fill={P2}/><rect x="280" y="160" width="120" height="70" rx="18" fill={P2}/><path d="M240 120v20M140 160v-20h200v20" stroke={W} strokeWidth="5" fill="none"/></g>,
    <g key="e"><circle cx="240" cy="140" r="70" fill={W}/><circle cx="240" cy="140" r="34" fill={P2}/><circle cx="240" cy="140" r="10" fill={W}/></g>,
  ];
  return <svg viewBox="0 0 480 280" aria-hidden="true">{shapes[i % shapes.length]}</svg>;
};
