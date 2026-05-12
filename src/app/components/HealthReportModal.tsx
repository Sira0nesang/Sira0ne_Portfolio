import coverImg from '../../imports/HealthReportModal/cover.png';
import researchImg from '../../imports/HealthReportModal/research.png';
import affinityImg from '../../imports/HealthReportModal/Affinity diagram.png';
import behaviorSpectrumImg from '../../imports/HealthReportModal/Behavior Spectrum.png';
import behavioralPatternsImg from '../../imports/HealthReportModal/Behavioral Patterns.png';
import personaImg from '../../imports/HealthReportModal/Persona.png';
import competitiveImg from '../../imports/HealthReportModal/Competitive Analysis.png';
import wireframeImg from '../../imports/HealthReportModal/wireframe.png';
import finalImg from '../../imports/HealthReportModal/Final.png';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const imgStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  border: '1px solid #f0f0f0',
};

const ImgBlock = ({ src, caption }: { src: string; caption: string }) => (
  <div className="space-y-2">
    <img src={src} alt={caption} style={imgStyle} />
    <p className="text-xs text-gray-400 text-center">{caption}</p>
  </div>
);

export function HealthReportModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Hero Image ── */}
        <div className="relative">
          <img
            src={coverImg}
            alt="Health Report Redesign"
            className="w-full rounded-t-2xl object-cover"
            style={{ height: '220px', objectPosition: 'top' }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            ×
          </button>
        </div>

        {/* ── Header ── */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Take-home Challenge · Solo
          </div>
          <h2 className="text-2xl font-bold" style={{ color: '#e8825a' }}>
            Health Report Redesign
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {['UX Research', 'UI Design', 'Figma', 'Maze', 'Usability Testing'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#e8825a18', color: '#e8825a' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Timeline & Role ── */}
        <div className="flex gap-6 px-6 py-4 border-b border-gray-100">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
            <p className="text-sm font-medium text-gray-700">Apr 2026 · 3 Days</p>
          </div>
          <div className="w-px bg-gray-100" />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
            <p className="text-sm font-medium text-gray-700">UI/UX Designer</p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="p-6 space-y-8">

          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Overview</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              A 3-day take-home design challenge assigned by Agnos Health. I worked independently across the full design cycle — from user research to usability testing — within a tight timeline.
            </p>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Process</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { day: 'Day 1', items: 'Research\nInterview\nAffinity Diagram\nCompetitive Analysis' },
                { day: 'Day 2', items: 'Persona\nUser Flow\nBehavior Spectrum\nTask Analysis' },
                { day: 'Day 3', items: 'Wireframe\nFinal Design\nPrototype\nUsability Testing' },
              ].map((d) => (
                <div key={d.day} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-gray-900 mb-2">{d.day}</div>
                  <div className="text-xs text-gray-400 leading-relaxed whitespace-pre-line">{d.items}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Problem</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Traditional health check-up reports are mailed as physical booklets filled with raw lab results and medical jargon. Most patients struggle to interpret the data without medical knowledge, and physical documents are easy to lose or damage.
            </p>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Research</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Conducted surveys and interviews with 11 users across different age groups and health backgrounds.
            </p>
            <div className="space-y-2 mb-4">
              {[
                'Most users only check whether results are normal or abnormal',
                'Medical terminology and English labels create a comprehension barrier',
                'No existing app provides plain-language explanations inline',
                'Elderly users cannot navigate current digital solutions independently',
              ].map((finding, i) => (
                <div key={i} className="flex gap-2 text-sm text-gray-500">
                  <span style={{ color: '#e8825a' }}>—</span>
                  <span>{finding}</span>
                </div>
              ))}
            </div>
            <ImgBlock src={researchImg} caption="Survey & Interview — 11 users across different age groups" />
          </div>

          {/* Affinity Diagram */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Affinity Diagram</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Grouped insights from 11 interviews into 7 clusters — revealing that comprehension barriers and lack of context were the most common pain points.
            </p>
            <ImgBlock src={affinityImg} caption="Affinity Diagram — 7 clusters from interview insights" />
          </div>

          {/* Behavior Spectrum */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Behavior Spectrum</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Mapped users across two axes — reliance on doctor vs. self-research, and preference for summary vs. raw data — to identify how different users engage with health information.
            </p>
            <ImgBlock src={behaviorSpectrumImg} caption="Behavior Spectrum — mapping user engagement with health data" />
          </div>

          {/* Behavioral Patterns */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Behavioral Patterns</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Two distinct patterns emerged: users who open the report, check the status, and close it immediately — and users who want to understand their results but lack the tools to do so independently.
            </p>
            <ImgBlock src={behavioralPatternsImg} caption="Behavioral Patterns — 2 distinct user groups identified" />
          </div>

          {/* Persona */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Persona</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Mint — a 25-year-old office worker who skims reports for abnormal results but struggles with medical terminology and dense PDF formats.
            </p>
            <ImgBlock src={personaImg} caption="Persona: Mint — office worker, 25 y.o." />
          </div>

          {/* Competitive Analysis */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Competitive Analysis</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Reviewed Health Up, Bumrungrad, and MyRTARF. Key gap: none provide plain-language explanations or clear next steps when results are abnormal.
            </p>
            <ImgBlock src={competitiveImg} caption="Competitive Analysis — Health Up, Bumrungrad, MyRTARF" />
          </div>

          {/* Wireframe */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Wireframe</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              3-tab structure: Home, Report, and Settings. Report tab branches into Summary → individual Detail pages for each health value.
            </p>
            <ImgBlock src={wireframeImg} caption="Wireframe — Summary page and Detail page structure" />
          </div>

          {/* Final Design */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Final Design</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Users can immediately identify risky results without confusion, while still having the option to explore detailed information when needed.
            </p>
            <ImgBlock src={finalImg} caption="Final Design — Summary page with status indicators" />
          </div>

          {/* Usability Testing */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Usability Testing</h3>
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-sm font-semibold" style={{ color: '#e8825a' }}>
                100% task success rate · 0% drop-off
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                All 4 usability tasks passed with low misclick rates via Maze, confirming users could identify abnormal results and know what to do next — without any guidance.
              </p>
            </div>
          </div>

          {/* Reflection */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-2">Reflection</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              The research phase was the strongest part. Given more time, I would push the UI further and explore edge cases like users with many abnormal results. Working under a tight deadline taught me to prioritize ruthlessly.
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://www.figma.com/design/qhGIBbdCyDBbdEd1NXtszT/Agnos_UXUI_Sirawan_Sangaksin?node-id=0-1&t=tOkNZ2p9EF2iBNNA-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#e8825a' }}
          >
            View Full Project in Figma →
          </a>

        </div>
      </div>
    </div>
  );
}