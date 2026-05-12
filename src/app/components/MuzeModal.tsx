import muzeLogo from '../../imports/Logo/muze-logo.png';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function MuzeModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Hero ── */}
        <div
          className="relative rounded-t-2xl flex items-end p-8"
          style={{ backgroundColor: '#1a1aff', minHeight: '160px' }}
        >
          <div>
            <img src={muzeLogo} alt="Muze Innovation" className="h-8 mb-3" />
            <p className="text-blue-200 text-sm">Jun – Dec 2025 · 7 months · Bangkok</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            ×
          </button>
        </div>

        {/* ── Header ── */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100">
          
          <h3 className="text-xl font-bold text-gray-900">Muze Innovation - Product Designer Intern</h3>
          <p className="text-sm text-gray-400 mt-1">
            TrueVisions NOW — streaming app across Mobile, Tablet, and TV
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {['UI/UX Design', 'Figma', 'Tablet Design', 'Design System', 'Research', 'Presentation'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#1a1aff18', color: '#1a1aff' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="p-6 space-y-8">

          {/* ── Timeline & Role ── */}
<div className="flex gap-6 px-6 py-4 border-b border-gray-100">
  <div>
    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
    <p className="text-sm font-medium text-gray-700">Jun – Dec 2025</p>
  </div>
  <div className="w-px bg-gray-100" />
  <div>
    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
    <p className="text-sm font-medium text-gray-700">Product Designer</p>
  </div>
</div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Overview</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Joined Muze Innovation as a Product Designer intern for 7 months, working on TrueVisions NOW — a streaming application across three platforms: Mobile, Tablet, and TV. Received briefs directly from the Product Owner, designed 1–2 options per task, and presented work to the TrueVisions team in weekly meetings.
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">What I Did</h3>
            <div className="space-y-4">

              {/* Tablet */}
              <div className="rounded-xl p-4" style={{ backgroundColor: '#f0f0ff' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ backgroundColor: '#1a1aff', color: 'white' }}>Primary</span>
                  <span className="text-sm font-semibold text-gray-800">Tablet — Full Ownership</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Solely responsible for the entire Tablet experience of TrueVisions NOW — starting from research and competitive analysis, through UI design, and all the way to building the Design System and Design Guidelines for the tablet platform. Ensured the experience felt native to the tablet form factor while staying consistent with the overall product design language.
                </p>
              </div>

              {/* Mobile Shorts */}
              <div className="rounded-xl p-4" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ backgroundColor: '#555', color: 'white' }}>Contributing</span>
                  <span className="text-sm font-semibold text-gray-800">Mobile — Shorts Feature</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Contributed to the Mobile platform with a focus on the Shorts feature — a short-form video experience within the app. Designed the UI and interaction flow for this feature end-to-end.
                </p>
              </div>

              {/* TV */}
              <div className="rounded-xl p-4" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ backgroundColor: '#aaa', color: 'white' }}>Research</span>
                  <span className="text-sm font-semibold text-gray-800">TV — Research Support</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Supported the TV platform through UX research — exploring design patterns and best practices for TV interfaces to inform the team's design direction.
                </p>
              </div>
            </div>
          </div>

          {/* How I worked */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">How I Worked</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Received briefs directly from the Product Owner, then independently designed 1–2 options per task for the client to choose from. Each week, presented work to the TrueVisions team — walking through design decisions and gathering feedback to iterate.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { step: '01', label: 'Receive brief', desc: 'from Product Owner' },
                { step: '02', label: 'Design 1–2 options', desc: 'for client review' },
                { step: '03', label: 'Present weekly', desc: 'to TrueVisions team' },
              ].map((s) => (
                <div key={s.step} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs font-bold mb-1" style={{ color: '#1a1aff' }}>{s.step}</div>
                  <div className="text-xs font-semibold text-gray-800">{s.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* NDA note */}
          <div className="rounded-xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400 leading-relaxed">
              Due to a confidentiality agreement, design work from this internship cannot be publicly shared. Happy to walk through the process and decisions in more detail during an interview.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}