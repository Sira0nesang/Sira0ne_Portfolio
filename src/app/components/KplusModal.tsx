import img1 from '../../imports/KplusModal/1.png';
import img2 from '../../imports/KplusModal/2.png';
import img3 from '../../imports/KplusModal/3.png';
import img4 from '../../imports/KplusModal/4.png';
import img5 from '../../imports/KplusModal/5.png';
import img6 from '../../imports/KplusModal/6.png';
import img7 from '../../imports/KplusModal/7.png';
import img8 from '../../imports/KplusModal/8.png';
import img9 from '../../imports/KplusModal/9.png';
import img10 from '../../imports/KplusModal/10.png';
import img11 from '../../imports/KplusModal/11.png';
import img12 from '../../imports/KplusModal/12.png';
import img13 from '../../imports/KplusModal/13.png';
import img14 from '../../imports/KplusModal/14.png';
import img15 from '../../imports/KplusModal/15.png';
import img16 from '../../imports/KplusModal/16.png';
import img17 from '../../imports/KplusModal/17.png';
import img18 from '../../imports/KplusModal/18.png';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const imgStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  border: '1px solid #f0f0f0',
};

export function KplusModal({ isOpen, onClose }: Props) {
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

        {/* Hero */}
        <div className="relative">
          <img
            src={img1}
            alt="K PLUS Cover"
            className="w-full rounded-t-2xl object-cover"
            style={{
              height: '220px',
              objectPosition: 'center',
            }}
          />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          >
            ×
          </button>
        </div>

        {/* Header */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Assignment · Feb 2024 · 7 Days
          </div>

          <h2
            className="text-2xl font-bold"
            style={{ color: '#00a884' }}
          >
            Redesign K PLUS
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Redesigning KBANK mobile banking experience
            with improved usability and visual clarity.
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {[
              'UI Design',
              'Mobile Design',
              'Redesign',
              'Figma',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: '#00a88418',
                  color: '#00a884',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex gap-6 px-6 py-4 border-b border-gray-100">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Timeline
            </p>

            <p className="text-sm font-medium text-gray-700">
              Feb 2024 · 7 Days
            </p>
          </div>

          <div className="w-px bg-gray-100" />

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Role
            </p>

            <p className="text-sm font-medium text-gray-700">
              UI/UX Designer
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="p-6 space-y-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`K PLUS ${index + 1}`}
              style={imgStyle}
            />
          ))}
        </div>

        {/* Reflection */}
<div className="px-6 pb-8">
  <div className="border-t border-gray-100 pt-6">
    <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">
      Reflection
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed">
      This project marked the beginning of my journey into UI/UX design.
      I was given only 7 days to complete the challenge, and looking back,
      I realized that I spent too much time refining every small detail.
      At the time, I was still developing my visual UI skills and learning
      how to balance quality with time constraints.
      <br /><br />
      Even though the project was far from perfect, it became an important
      starting point that shaped the way I approach design today.
      It taught me the importance of prioritization, iteration,
      and continuously improving my craft.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}