import { useState } from 'react';
import { HealthReportModal } from './components/HealthReportModal';
import { ResipayModal } from './components/ResipayModal';
import { TTBModal } from './components/TTBModal';
import { MuzeModal } from './components/MuzeModal';
import { KPlusModal } from './components/KPlusModal';

import ttbLogo from '../imports/Logo/ttb-spark.png';
import muzeLogo from '../imports/Logo/muze-logo.png';
import healthCover from '../imports/HealthReportModal/cover.png';
import kplusCover from '../imports/KplusModal/1.png';
import resipay1 from '../imports/ResipayModal/1.jpg';

import resumePDF from '../imports/Resume/Sira0ne_Resume_2026.pdf';

type Section = 'home' | 'projects' | 'about';

const projects = [
  {
    name: 'Health Report Redesign',
    color: '#2B7390',
    bg: '#EEFAFF',
    featured: true,
    italic: false,
    type: 'project',
    tag: 'Assignment',
    desc: 'Redesigning health reports to be understood by everyone, not just doctors.',
    cover: healthCover,
  },
  {
    name: 'What Do You Meme',
    color: '#5cb85c',
    bg: '#f0faf0',
    featured: true,
    italic: true,
    type: 'project',
    tag: 'Final Year Project',
    desc: 'A meme-sharing platform designed for Thai users.',
    cover: null,
  },
  {
    name: 'Redesign K PLUS',
    color: '#00a884',
    bg: '#f0fdf9',
    featured: false,
    italic: false,
    type: 'project',
    tag: 'Assignment',
    desc: 'My first UX/UI challenge — redesigning KBANK mobile banking app in 7 days.',
    cover: kplusCover,
  },
  {
    name: 'Resipay',
    color: '#622320',
    bg: '#FFF4F4',
    featured: false,
    italic: false,
    type: 'project',
    tag: 'HCI Course',
    desc: 'Utility bill app for university dormitory students.',
    cover: resipay1,
  },
];

const experiences = [
  {
    name: 'Muze Innovation',
    color: '#1a1aff',
    role: 'Product Designer Intern',
    period: 'Jun – Dec 2025',
    featured: true,
    logoSrc: 'muze',
  },
  {
    name: 'TTB Spark',
    color: '#003087',
    role: 'UI/UX Designer Intern',
    period: 'Jun – Nov 2024',
    featured: true,
    logoSrc: 'ttb',
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);
  const [isResipayModalOpen, setIsResipayModalOpen] = useState(false);
  const [isKPlusModalOpen, setIsKPlusModalOpen] = useState(false);
  const [isTTBModalOpen, setIsTTBModalOpen] = useState(false);
  const [isMuzeModalOpen, setIsMuzeModalOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex flex-col" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>

      {/* Modals */}
      <HealthReportModal isOpen={isHealthModalOpen} onClose={() => setIsHealthModalOpen(false)} />
      <KPlusModal isOpen={isKPlusModalOpen} onClose={() => setIsKPlusModalOpen(false)} />
      <ResipayModal isOpen={isResipayModalOpen} onClose={() => setIsResipayModalOpen(false)} />
      <TTBModal isOpen={isTTBModalOpen} onClose={() => setIsTTBModalOpen(false)} />
      <MuzeModal isOpen={isMuzeModalOpen} onClose={() => setIsMuzeModalOpen(false)} />

      {/* ── Main Layout ── */}
      <div className="flex-1 flex overflow-hidden flex-col md:flex-row">

        {/* Left — Name + Nav */}
        <div className="md:w-2/5 bg-[#f5f5f0] flex flex-col md:border-r border-gray-200">

          {/* Nav — ติดบนสุดของ left panel */}
          <nav className="flex border-b border-gray-200 overflow-x-auto flex-shrink-0">
            {[
              { id: 'home', label: 'home', color: '#5cb85c' },
              { id: 'projects', label: 'works', color: '#e8825a' },
              { id: 'about', label: 'about me :)', color: '#1a1a1a' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                className="px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium transition-all duration-200 flex-shrink-0"
                style={{
                  backgroundColor: activeSection === item.id ? item.color : '#f5f5f0',
                  color: activeSection === item.id ? 'white' : '#777',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Name */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 gap-3">
            <h1
              className="lowercase select-none leading-none"
              style={{
                fontSize: 'clamp(3rem, 9vw, 7rem)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                color: activeSection === 'home' ? '#5cb85c'
                     : activeSection === 'projects' ? '#e8825a'
                     : '#1a1a1a',
                transition: 'color 0.4s ease',
              }}
            >
              sira0ne
            </h1>
            <p className="text-gray-400 text-xs lowercase tracking-widest">
              ui/ux & product designer
            </p>
          </div>
        </div>

        {/* Right — Content */}
        <div
          className="flex-1 overflow-y-auto transition-colors duration-500"
          style={{
            backgroundColor:
              activeSection === 'home' ? '#ff9980' :
              activeSection === 'about' ? '#5cb85c' :
              '#fafaf8',
          }}
        >

          {/* ── HOME ── */}
          {activeSection === 'home' && (
            <div className="h-full flex flex-col justify-center p-10 md:p-16">
              <p
                className="text-white/90 mb-8 max-w-sm"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: '300', lineHeight: '1.8' }}
              >
                hello — i design experiences that feel simple, even when the problem isn't.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {['UI/UX Design', 'Product Design', 'User Research', 'Figma'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: 'white', letterSpacing: '0.05em' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setActiveSection('projects')}
                  className="px-6 py-3 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  view works →
                </button>
                <a href="mailto:sirawan@email.com"
                  className="px-6 py-3 border-2 border-white text-white rounded-full text-sm font-medium hover:bg-white hover:text-gray-800 transition-all">
                  contact
                </a>
              </div>
            </div>
          )}

          {/* ── PROJECTS ── */}
          {activeSection === 'projects' && (
            <div className="flex h-full">

              {/* Left list — scrollable */}
              <div className="w-2/5 overflow-y-auto p-8 border-r border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">projects</p>
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredProject(project.name)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => {
                      if (project.name === 'Health Report Redesign') setIsHealthModalOpen(true);
                      if (project.name === 'Redesign K PLUS') setIsKPlusModalOpen(true);
                      if (project.name === 'Resipay') setIsResipayModalOpen(true);
                    }}
                    className="cursor-pointer py-2 transition-all duration-200"
                    style={{ transform: hoveredProject === project.name ? 'translateX(6px)' : 'translateX(0)' }}
                  >
                    <div style={{
                      color: project.color,
                      fontSize: hoveredProject === project.name ? '1.2rem' : '1rem',
                      fontStyle: project.italic ? 'italic' : 'normal',
                      fontWeight: project.featured ? '700' : '400',
                      transition: 'all 0.2s ease',
                      lineHeight: '1.3',
                    }}>
                      {project.name}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5 tracking-wide">{project.tag}</div>
                  </div>
                ))}

                {/* Experience */}
                <div className="pt-6 mt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">experience</p>
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredProject(exp.name)}
                      onMouseLeave={() => setHoveredProject(null)}
                      onClick={() => {
                        if (exp.name === 'TTB Spark') setIsTTBModalOpen(true);
                        if (exp.name === 'Muze Innovation') setIsMuzeModalOpen(true);
                      }}
                      className="cursor-pointer py-2 transition-all duration-200"
                      style={{ transform: hoveredProject === exp.name ? 'translateX(6px)' : 'translateX(0)' }}
                    >
                      <img src={exp.logoSrc === 'ttb' ? ttbLogo : muzeLogo} alt={exp.name} className={exp.logoSrc === 'ttb' ? 'h-5 mb-1' : 'h-4 mb-1'} />
                      <div className="text-xs text-gray-400">{exp.role} · {exp.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — vertical scroll gallery */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {projects
                  .filter((p) => p.cover !== null)
                  .map((project, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (project.name === 'Health Report Redesign') setIsHealthModalOpen(true);
                        if (project.name === 'Redesign K PLUS') setIsKPlusModalOpen(true);
                        if (project.name === 'Resipay') setIsResipayModalOpen(true);
                      }}
                      className="cursor-pointer group relative rounded-2xl overflow-hidden transition-all duration-200 hover:scale-[1.02]"
                      style={{ border: `1px solid ${project.color}22` }}
                    >
                      <img
                        src={project.cover!}
                        alt={project.name}
                        className="w-full object-cover"
                        style={{ maxHeight: '220px', objectPosition: 'top' }}
                      />
                      {/* Overlay on hover */}
                      <div
                        className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: `linear-gradient(to top, ${project.color}dd, transparent)` }}
                      >
                        <p className="text-white text-xs uppercase tracking-widest mb-1">{project.tag}</p>
                        <p className="text-white font-bold text-sm">{project.name}</p>
                      </div>
                    </div>
                  ))}

                {/* What Do You Meme — placeholder */}
                <div
                  className="rounded-2xl p-6 flex items-center justify-center"
                  style={{ backgroundColor: '#f0faf0', border: '1px solid #5cb85c22', minHeight: '120px' }}
                >
                  <div className="text-center">
                    <p className="font-bold italic mb-1" style={{ color: '#5cb85c' }}>What Do You Meme</p>
                    <p className="text-xs text-gray-400">coming soon</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ── ABOUT ── */}
          {activeSection === 'about' && (
            <div className="p-10 md:p-16">
              <div className="max-w-lg">
                <h2 className="text-white mb-5"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', lineHeight: '1.2' }}>
                  hello, i'm sirawan :)
                </h2>
                <p className="text-white/90 text-base md:text-lg mb-5 leading-relaxed" style={{ fontWeight: '300' }}>
                  a ui/ux & product designer from bangkok, thailand. i love designing experiences that are both clean and genuinely useful for people.
                </p>
                <p className="text-white/75 text-sm md:text-base mb-10 leading-relaxed" style={{ fontWeight: '300' }}>
                  i studied computer science, which helps me bridge the gap between design intent and how things actually get built.
                </p>
                <div className="mb-10">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-3"> Design & Develop</p>
                  <div className="flex flex-wrap gap-2">
                    {['User Interface', 'User Experience', 'User Research', 'Interactive Prototype', 'Typography Design', 'Front End Develop'].map((skill) => ( 
                      <span key={skill} className="px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Code / Cursor', 'Git / GitHub'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="mailto:sirawansangkasin@email.com"
                    className="px-8 py-3 bg-white text-green-700 rounded-full font-medium text-sm text-center hover:bg-gray-100 transition-colors">
                    Email
                  </a>
                  <a
  href={resumePDF}
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-white/20 text-white border-2 border-white rounded-full font-medium text-sm text-center hover:bg-white hover:text-green-700 transition-all"
>
  Resume
</a>
                </div>
                <div className="flex gap-5">
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">linkedin</a>
                  <a href="mailto:sirawan@email.com" className="text-white/60 hover:text-white text-sm transition-colors">email</a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}