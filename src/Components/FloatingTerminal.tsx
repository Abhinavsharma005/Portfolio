import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiTerminal, FiX } from 'react-icons/fi';

/* ─── Types ─── */
interface TerminalLine {
  t: string;
  c?: string;
  bold?: boolean;
  mono?: boolean;
}

interface FigletFont {
  [key: string]: [string, string, string];
}

/* ─── ASCII Banner ─── */
const BANNER: string[] = [
  " █████╗ ██████╗ ██╗  ██╗██╗███╗  ██╗ █████╗ ██╗   ██╗",
  "██╔══██╗██╔══██╗██║  ██║██║████╗ ██║██╔══██╗██║   ██║",
  "███████║██████╔╝███████║██║██╔██╗██║███████║██║   ██║",
  "██╔══██║██╔══██╗██╔══██║██║██║╚████║██╔══██║╚██╗ ██╔╝",
  "██║  ██║██████╔╝██║  ██║██║██║ ╚███║██║  ██║ ╚████╔╝ ",
  "╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚══╝╚═╝  ╚═╝  ╚═══╝  ",
  "",
  "  Portfolio Terminal v1.0  ·  built by Abhinav Sharma",
];


/* ─── Figlet font (Calvin S / 3-line) ─── */
const FIGLET_FONT: FigletFont = {
  ' ': ['   ','   ','   '],
  'A': ['╔═╗','╠═╣','╩ ╩'],  'B': ['╔╗ ','╠╩╗','╚═╝'],
  'C': ['╔═╗','║  ','╚═╝'],  'D': ['╔╦╗',' ║║',' ╩╝'],
  'E': ['╔═╗','╠╩╗','╚═╝'],  'F': ['╔═╗','╠╣ ','╚╝ '],
  'G': ['╔═╗','║ ╗','╚═╝'],  'H': ['╦ ╦','╠═╣','╩ ╩'],
  'I': ['╦','║','╩'],        'J': ['╦','║','╚╝'],
  'K': ['╦╔═','╠╩╗','╩╚═'], 'L': ['╦  ','║  ','╩═╝'],
  'M': ['╔╦╗','║║║','╩ ╩'], 'N': ['╔╗╔','║║║','╝╚╝'],
  'O': ['╔═╗','║ ║','╚═╝'], 'P': ['╔═╗','╠═╝','╩  '],
  'Q': ['╔═╗','║║╗','╚╩╝'], 'R': ['╦═╗','╠╦╝','╩╚═'],
  'S': ['╔═╗','╚═╗','╚═╝'], 'T': ['╔╦╗',' ║ ',' ╩ '],
  'U': ['╦ ╦','║ ║','╚═╝'], 'V': ['╦ ╦','╚╗╔╝',' ╚╝ '],
  'W': ['╦╦╦','║║║','╚╩╝'], 'X': ['╗╔ ','╠╣ ','╝╚ '],
  'Y': ['╦ ╦','╚╦╝',' ╩ '], 'Z': ['╔═╗','╔╝ ','╚═╝'],
  '0': ['╔═╗','║║║','╚═╝'], '1': [' ╦ ',' ║ ','═╩═'],
  '2': ['╔═╗','╔═╝','╚══'], '3': ['╔═╗',' ═╗','╚═╝'],
  '4': ['╦ ╦','╚═╣','  ╩'], '5': ['╔═╗','╚═╗','╚═╝'],
  '6': ['╔═╗','╠═╗','╚═╝'], '7': ['╔═╗','  ║','  ╩'],
  '8': ['╔═╗','╠═╣','╚═╝'], '9': ['╔═╗','╚═╣','╚═╝'],
  '!': ['╦','║','●'], '?': ['╔═╗','╔═╝',' ● '],
  '.': ['  ',' ','●'], '-': ['   ','═══','   '],
};

function makeFiglet(text: string): TerminalLine[] {
  const chars = text.toUpperCase().split('');
  const rows = ['  ', '  ', '  '];
  chars.forEach(ch => {
    const g = FIGLET_FONT[ch] || FIGLET_FONT[' '];
    for (let r = 0; r < 3; r++) rows[r] += (g[r] || '   ') + ' ';
  });
  return rows.map(r => ({ t: r, c: '#54c8fe' }));
}

/* ─── Commands ─── */
const COMMANDS: Record<string, () => TerminalLine[]> = {
  help: () => [
    { t: '┌─ Available Commands ───────────────────────────┐', c: '#54c8fe' },
    { t: '│  whoami          about me                      │', c: '#94A3B8' },
    { t: '│  skills          tech stack & expertise        │', c: '#94A3B8' },
    { t: '│  projects        featured projects             │', c: '#94A3B8' },
    { t: '│  contact         contact info                  │', c: '#94A3B8' },
    { t: '│  socials         social links                  │', c: '#94A3B8' },
    { t: '│  github          open GitHub profile           │', c: '#94A3B8' },
    { t: '│  date            current date & time           │', c: '#94A3B8' },
    { t: '│  neofetch        portfolio system stats        │', c: '#94A3B8' },
    { t: '│  figlet [text]   generate ASCII art            │', c: '#94A3B8' },
    { t: '│  clear           clear terminal                │', c: '#94A3B8' },
    { t: '└────────────────────────────────────────────────┘', c: '#54c8fe' },
  ],
  whoami: () => [
    { t: '  Abhinav Sharma', c: '#54c8fe', bold: true },
    { t: '  ├─ IT Undergrad @ UIT-RGPV Bhopal', c: '#e2e8f0' },
    { t: '  ├─ Full-Stack Developer', c: '#e2e8f0' },
    { t: '  ├─ ML Explorer  (TensorFlow, NumPy)', c: '#e2e8f0' },
    { t: '  └─ Building scalable apps & AI systems', c: '#64748b' },
  ],
  skills: () => [
    { t: '  Tech Stack', c: '#54c8fe', bold: true },
    { t: '  ├─ Languages   JS · TS · Python · C++', c: '#e2e8f0' },
    { t: '  ├─ Frontend    React · Next.js · TailwindCSS', c: '#e2e8f0' },
    { t: '  ├─ Backend     Node · Express · MongoDB · Redis', c: '#e2e8f0' },
    { t: '  ├─ Mobile      Flutter · React Native', c: '#e2e8f0' },
    { t: '  ├─ DevOps      Docker · Git · Vercel · Render', c: '#e2e8f0' },
    { t: '  └─ AI/ML       TensorFlow · NumPy · Pandas', c: '#64748b' },
  ],
  projects: () => [
    { t: '  Featured Projects', c: '#54c8fe', bold: true },
    { t: '  ├─ [1] EduStream    Live Teaching Platform', c: '#e2e8f0' },
    { t: '  │       Next.js · Redis · WebRTC · Socket.IO', c: '#64748b' },
    { t: '  ├─ [2] Shorty       URL Shortener', c: '#e2e8f0' },
    { t: '  │       React · Node.js · PostgreSQL', c: '#64748b' },
    { t: '  ├─ [3] ChatApp      Flutter Real-time Messenger', c: '#e2e8f0' },
    { t: '  │       Dart · Firebase · Cloudinary', c: '#64748b' },
    { t: '  └─ [4] Spotify Clone   Music Player', c: '#e2e8f0' },
    { t: '          React · Spotify API', c: '#64748b' },
    { t: '', c: '' },
    { t: '  → Scroll to #projects to see all  ↓', c: '#22d3ee' },
  ],
  contact: () => [
    { t: '  Contact', c: '#54c8fe', bold: true },
    { t: '  ├─ Email    sharmaabhinav1013@gmail.com', c: '#e2e8f0' },
    { t: '  ├─ GitHub   github.com/Abhinavsharma005', c: '#e2e8f0' },
    { t: '  ├─ LinkedIn linkedin.com/in/abhinav-sharma-314319327', c: '#e2e8f0' },
    { t: '  └─ Status   ● Available for Remote Work', c: '#22d3ee' },
  ],
  socials: () => {
    return [
      { t: '  Social Links', c: '#54c8fe', bold: true },
      { t: '  ├─ GitHub    → github.com/Abhinavsharma005', c: '#e2e8f0' },
      { t: '  ├─ LinkedIn  → linkedin.com/in/abhinav-sharma-314319327', c: '#e2e8f0' },
      { t: '  └─ Gmail     → sharmaabhinav1013@gmail.com', c: '#e2e8f0' },
      { t: '', c: '' },
      { t: '  Tip: type  github  to open GitHub directly', c: '#64748b' },
    ];
  },
  github: () => {
    setTimeout(() => window.open('https://github.com/Abhinavsharma005', '_blank'), 300);
    return [
      { t: '  → Opening github.com/Abhinavsharma005 ...', c: '#54c8fe' },
    ];
  },
  date: () => {
    const now = new Date();
    return [
      { t: `  ● ${now.toDateString()}`, c: '#54c8fe' },
      { t: `    ${now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`, c: '#e2e8f0' },
    ];
  },
  neofetch: () => {
    const now = new Date();
    const uptime = `${Math.floor((now.getTime() - new Date('2024-01-01').getTime()) / 86400000)} days coding`;
    return [
      { t: '  abhinav@portfolio', c: '#54c8fe', bold: true },
      { t: '  ──────────────────────────────', c: '#1e293b' },
      { t: '  OS         Windows 11 (Dev Mode)', c: '#e2e8f0' },
      { t: '  Host       Abhinav-Sharma-Portfolio', c: '#e2e8f0' },
      { t: `  Uptime     ${uptime}`, c: '#e2e8f0' },
      { t: '  Shell      portfolio-terminal v1.0', c: '#e2e8f0' },
      { t: '  Theme      Cyber Dark  ■ #54c8fe', c: '#54c8fe' },
      { t: '  Stack      React · Node.js · MongoDB', c: '#e2e8f0' },
      { t: '  Location   Bhopal, Madhya Pradesh, IN', c: '#e2e8f0' },
      { t: '  Status     ● Open to opportunities', c: '#22d3ee' },
      { t: '  ──────────────────────────────', c: '#1e293b' },
      { t: '  ■■■■ ░░░░ ░░░░ ■■■■ ░░░░ ■■■■', c: '#54c8fe' },
    ];
  },
};

const PROMPT = 'abhinav@portfolio:~$';

const BOOT_LINES: TerminalLine[] = [
  ...BANNER.map(b => ({ t: b, c: '#54c8fe', bold: b.includes('Terminal') })),
  { t: '', c: '' },
  { t: `  Type  "help"  to see available commands.`, c: '#64748b' },
  { t: '', c: '' },
];

/* ─── Main Component ─── */
const FloatingTerminal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [lines, setLines] = useState<TerminalLine[]>(BOOT_LINES);
  const [input, setInput] = useState<string>('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number>(-1);
  const [cmdCount, setCmdCount] = useState<number>(0);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* scroll to bottom */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  /* focus when open */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  /* ESC to close */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 280);
  };

  const runCommand = useCallback((raw: string) => {
    const trimmed = raw.trim();
    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    const promptLine: TerminalLine = { t: `${PROMPT} ${raw}`, c: '#a5f3fc', mono: true };

    if (!trimmed) { setLines(p => [...p, promptLine, { t: '', c: '' }]); return; }

    if (cmd === 'clear') { setLines(BOOT_LINES); setCmdCount(0); return; }

    /* ── figlet [text] ── */
    if (cmd === 'figlet') {
      const output = args
        ? [...makeFiglet(args), { t: '', c: '' }]
        : [{ t: '  Usage: figlet [text]  e.g.  figlet hello', c: '#f87171' }];
      setLines(p => [...p, promptLine, ...output, { t: '', c: '' }]);
      setCmdHistory(p => [raw, ...p.slice(0, 49)]);
      setCmdCount(p => p + 1);
      setHistIdx(-1);
      return;
    }

    const fn = COMMANDS[cmd];
    const output = fn
      ? fn()
      : [{ t: `  command not found: ${cmd}  (try  help)`, c: '#f87171' }];

    setLines(p => [...p, promptLine, ...output, { t: '', c: '' }]);
    setCmdHistory(p => [raw, ...p.slice(0, 49)]);
    setCmdCount(p => p + 1);
    setHistIdx(-1);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { runCommand(input); setInput(''); }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const i = histIdx + 1;
      if (i < cmdHistory.length) { setHistIdx(i); setInput(cmdHistory[i]); }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const i = histIdx - 1;
      if (i < 0) { setHistIdx(-1); setInput(''); }
      else { setHistIdx(i); setInput(cmdHistory[i]); }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.toLowerCase().trim();
      const allCmds = [...Object.keys(COMMANDS), 'figlet', 'clear'];
      const match = allCmds.find(k => k.startsWith(partial));
      if (match) setInput(match);
    }
  };

  /* ── Render ── */
  return (
    <>
      {/* ── Side Tab Trigger ── */}
      <div
        id="terminal-tab"
        onClick={() => setOpen(true)}
        aria-label="Open Terminal"
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(true)}
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 900,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          padding: '16px 9px',
          background: 'rgba(8, 11, 22, 0.92)',
          border: '1px solid rgba(84,200,254,0.22)',
          borderRight: 'none',
          borderRadius: '10px 0 0 10px',
          cursor: 'pointer',
          backdropFilter: 'blur(14px)',
          boxShadow: '-3px 0 28px rgba(84,200,254,0.1)',
          transition: 'all 0.2s ease',
          userSelect: 'none',
        }}
        className="terminal-side-tab"
      >
        <FiTerminal style={{ color: '#54c8fe', fontSize: '15px' }} />
        <span style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          color: '#54c8fe',
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontSize: '10px',
          letterSpacing: '0.12em',
          marginTop: '2px',
        }}>
          terminal
        </span>
      </div>

      {/* ── Backdrop + Modal ── */}
      {open && (
        <div
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1500,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: 'min(840px, 95vw)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0d1117',
              border: '1px solid rgba(84,200,254,0.18)',
              boxShadow: `
                0 0 0 1px rgba(84,200,254,0.05),
                0 0 60px rgba(84,200,254,0.1),
                0 40px 100px rgba(0,0,0,0.75)
              `,
              transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(24px)',
              opacity: visible ? 1 : 0,
              transition: 'transform 0.3s cubic-bezier(0.34,1.3,0.64,1), opacity 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* ── Title Bar ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '11px 16px',
              background: '#161b22',
              borderBottom: '1px solid rgba(84,200,254,0.09)',
              userSelect: 'none',
              gap: '12px',
            }}>
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: '7px' }}>
                <div
                  onClick={handleClose}
                  style={{ width: 13, height: 13, borderRadius: '50%', background: '#ff5f57', cursor: 'pointer', boxShadow: '0 0 6px #ff5f5766' }}
                  title="Close"
                />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#febc2e', boxShadow: '0 0 6px #febc2e66' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#28c840', boxShadow: '0 0 6px #28c84066' }} />
              </div>

              {/* Title */}
              <div style={{ flex: 1, textAlign: 'center', fontFamily: "'JetBrains Mono','Fira Code',monospace", fontSize: '12px', color: '#4a5568' }}>
                <span style={{ color: '#54c8fe' }}>abhinav</span>
                <span style={{ color: '#54c8fe' }}>@</span>
                <span style={{ color: '#94a3b8' }}>portfolio</span>
                <span style={{ color: '#4a5568' }}>: ~</span>
              </div>

              {/* X button */}
              <button
                onClick={handleClose}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a5568', padding: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '4px', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = '#4a5568'}
                aria-label="Close terminal"
              >
                <FiX size={14} />
              </button>
            </div>

            {/* ── Output ── */}
            <div
              style={{
                height: '440px',
                overflowY: 'auto',
                padding: '16px 20px 8px',
                fontFamily: "'JetBrains Mono','Fira Code','Cascadia Code',monospace",
                fontSize: '13px',
                lineHeight: '1.75',
                scrollbarWidth: 'thin',
                scrollbarColor: '#21262d transparent',
                background: '#0d1117',
              }}
            >
              {lines.map((line, i) => (
                <div key={i} style={{ color: line.c || '#e2e8f0', fontWeight: line.bold ? 700 : 400, whiteSpace: 'pre' }}>
                  {line.t || '\u00A0'}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* ── Input Row ── */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px 12px',
                background: '#0d1117',
                borderTop: '1px solid rgba(84,200,254,0.07)',
                gap: '6px',
                cursor: 'text',
              }}
              onClick={() => inputRef.current?.focus()}
            >
              <span style={{ color: '#54c8fe', fontFamily: "'JetBrains Mono','Fira Code',monospace", fontSize: '13px', userSelect: 'none', whiteSpace: 'nowrap' }}>
                {PROMPT}
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#e2e8f0',
                  fontFamily: "'JetBrains Mono','Fira Code',monospace",
                  fontSize: '13px',
                  caretColor: '#54c8fe',
                  minWidth: 0,
                }}
                placeholder=""
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal input"
              />
              <span style={{ color: '#54c8fe', fontSize: '14px', fontFamily: 'monospace', animation: 'term-blink 1s step-end infinite', userSelect: 'none' }}>▋</span>
            </div>

            {/* ── Status Bar ── */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px 14px',
              background: '#161b22',
              borderTop: '1px solid rgba(84,200,254,0.08)',
              fontFamily: "'JetBrains Mono','Fira Code',monospace",
              fontSize: '11px',
              userSelect: 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#22d3ee' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22d3ee', display: 'inline-block', boxShadow: '0 0 5px #22d3ee' }} />
                  portfolio
                </span>
                <span style={{ color: '#4a5568' }}>cmd v1.0</span>
                <span style={{ color: '#3b82f6' }}>●</span>
                <span style={{ color: '#4a5568' }}>history: {cmdHistory.length}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#4a5568' }}>
                <span>cmds: {cmdCount}</span>
                <span style={{ color: '#374151' }}>│</span>
                <span>UTF-8</span>
                <span style={{ color: '#374151' }}>│</span>
                <span style={{ color: '#54c8fe' }}>Ln {lines.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes term-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .terminal-side-tab:hover {
          background: rgba(84,200,254,0.1) !important;
          box-shadow: -4px 0 36px rgba(84,200,254,0.2) !important;
          padding-right: 13px !important;
        }
        .terminal-side-tab:hover span,
        .terminal-side-tab:hover svg {
          filter: drop-shadow(0 0 6px rgba(84,200,254,0.8));
        }
      `}</style>
    </>
  );
};

export default FloatingTerminal;
