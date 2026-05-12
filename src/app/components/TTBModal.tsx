import ttbLogo from '../../imports/Logo/ttb-spark.png';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function TTBModal({ isOpen, onClose }: Props) {
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
          style={{ backgroundColor: '#003087', minHeight: '160px' }}
        >
          <div>
            <img src={ttbLogo} alt="TTB Spark" className="h-8 mb-3" />
            <p className="text-blue-200 text-sm">Jun – Nov 2024 · 6 months · Bangkok</p>
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
          
          <h3 className="text-xl font-bold text-gray-900">ttb spark - UI/UX Designer Intern</h3>
          <p className="text-sm text-gray-400 mt-1">
            Rotated across two teams — Product Design and UX Research (UX Clinic)
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {['UI/UX Design', 'Figma', 'UX Research', 'Usability Testing', 'A/B Testing', 'UX Writing', 'Presentation'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#00308718', color: '#003087' }}>
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
    <p className="text-sm font-medium text-gray-700">Jun – Nov 2024</p>
  </div>
  <div className="w-px bg-gray-100" />
  <div>
    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
    <p className="text-sm font-medium text-gray-700">UI/UX Designer</p>
  </div>
</div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Overview</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Joined TTB Spark's Tech & Data Internship program for 6 months — spending the first half embedded in a product design team working on Common Payment Alignment, and the second half in the UX Clinic (research team), contributing to 7 research projects that involved interviewing 80+ users in total.
            </p>
          </div>

          {/* First 3 months */}
          <div>
			<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">What I Did</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded"
                style={{ backgroundColor: '#003087', color: 'white' }}>Month 1–3</span>
              <h3 className="text-sm font-semibold text-gray-900">Common Payment - Design Team</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Collaborated in a team to design a unified payment flow across multiple product lines. Contributed across the full design cycle from research to user testing.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { step: '01', label: 'Research', desc: 'Competitive analysis & main flow structure' },
                { step: '02', label: 'Design & Test', desc: 'Drafted options, prototyped, ran user testing' },
                { step: '03', label: 'Report', desc: 'Presented findings back to the team' },
              ].map((s) => (
                <div key={s.step} className="bg-blue-50 rounded-xl p-4">
                  <div className="text-xs font-bold mb-1" style={{ color: '#003087' }}>{s.step}</div>
                  <div className="text-xs font-semibold text-gray-800">{s.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Supporting tasks */}
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Also contributed to</p>
            <div className="space-y-2">
              {[
                { title: 'UX Writing', desc: 'Reviewed and aligned copy used across different features in the app — ensuring consistency in tone and language throughout.' },
                { title: 'UAT', desc: 'Supported user acceptance testing to verify that features met the intended design and functional requirements.' },
                { title: 'Alignment Consent Template', desc: 'Researched which features across the app required consent alignment and helped lay the groundwork for a redesigned consent template.' },
                { title: 'Compare Design System', desc: 'Analyzed design system inconsistencies across features — similar in scope to the consent alignment work.' },
                { title: 'Resource Sharing for Marketing', desc: 'Prepared and exported design assets for the marketing team to use in promotional materials.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#003087' }}>—</span>
                  <div>
                    <span className="font-medium text-gray-700">{item.title}: </span>
                    <span className="text-gray-500">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100" />

          {/* Last 3 months */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded"
                style={{ backgroundColor: '#003087', color: 'white' }}>Month 4–6</span>
              <h3 className="text-sm font-semibold text-gray-900">UX Clinic — Research Team</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Moved to TTB's internal UX research team (UX Clinic), contributing to 7 research projects across different product areas. Each project involved designing research questions, recruiting and interviewing users, and presenting findings to designers and POs.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl p-4" style={{ backgroundColor: '#f0f4ff' }}>
                <p className="text-2xl font-bold mb-1" style={{ color: '#003087' }}>7</p>
                <p className="text-xs text-gray-500">research projects contributed to</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: '#f0f4ff' }}>
                <p className="text-2xl font-bold mb-1" style={{ color: '#003087' }}>80+</p>
                <p className="text-xs text-gray-500">users interviewed across all projects</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                'Designed interview questions and research plans for each project',
                'Recruited participants matching specific user criteria',
                'Conducted usability testing and user interviews',
                'Synthesized findings and presented insights to designers and POs',
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-gray-500">
                  <span style={{ color: '#003087' }}>—</span>
                  <span>{item}</span>
                </div>
              ))}
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
    </div>
  );
}