import img1 from '../../imports/ResipayModal/1.jpg';
import img2 from '../../imports/ResipayModal/2.jpg';
import img4 from '../../imports/ResipayModal/4.jpg';
import img5 from '../../imports/ResipayModal/5.jpg';
import img7 from '../../imports/ResipayModal/7.jpg';
import img8 from '../../imports/ResipayModal/8.jpg';
import img11 from '../../imports/ResipayModal/11.jpg';
import img13 from '../../imports/ResipayModal/13.jpg';
import img14 from '../../imports/ResipayModal/14.jpg';
import img15 from '../../imports/ResipayModal/15.jpg';
import img16 from '../../imports/ResipayModal/16.jpg';
import img17 from '../../imports/ResipayModal/17.jpg';
import final1 from '../../imports/ResipayModal/final1.png';
import final2 from '../../imports/ResipayModal/final2.png';
import final3 from '../../imports/ResipayModal/final3.png';

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

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">{title}</h3>
    {children}
  </div>
);

const ImgBlock = ({ src, caption }: { src: string; caption: string }) => (
  <div className="space-y-2">
    <img src={src} alt={caption} style={imgStyle} />
    <p className="text-xs text-gray-400 text-center">{caption}</p>
  </div>
);

export function ResipayModal({ isOpen, onClose }: Props) {
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

        {/* ── Hero ── */}
        <div className="relative">
          <img src={img1} alt="Resipay Cover" className="w-full rounded-t-2xl object-cover"
            style={{ height: '220px', objectPosition: 'center' }} />
          <button onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            ×
          </button>
        </div>

        {/* ── Header ── */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">HCI Course · University Project · Solo</div>
          <h2 className="text-2xl font-bold" style={{ color: '#9370db' }}>Resipay</h2>
          <p className="text-sm text-gray-400 mt-1">Electricity & water bill tracking app for university dormitory students</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {['UX Research', 'UI Design', 'Figma', 'Need Finding', 'HCI'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: '#9370db18', color: '#9370db' }}>
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
    <p className="text-sm font-medium text-gray-700">Aug – Dec 2023</p>
  </div>
  <div className="w-px bg-gray-100" />
  <div>
    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
    <p className="text-sm font-medium text-gray-700">UI/UX Designer</p>
  </div>
</div>

          {/* Overview */}
          <Section title="Overview">
            <ImgBlock src={img2} caption="Resipay — แอปพลิเคชันติดตามประกาศและการชำระค่าน้ำค่าไฟสำหรับหอพักนักศึกษา" />
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              Resipay is a mobile app designed to help university dormitory students track, receive, and pay electricity and water bills — eliminating the need to physically collect bills from the ground floor and reducing late payment fees.
            </p>
          </Section>

          {/* Research */}
          <Section title="Need Finding — Research">
            <ImgBlock src={img4} caption="Data gathering techniques: Interview และ Direct Observation" />
            <div className="mt-4">
              <ImgBlock src={img5} caption="Interview questions สำหรับ data gathering" />
            </div>
          </Section>

          {/* Affinity Diagram */}
          <Section title="Affinity Diagram">
            <ImgBlock src={img7} caption="Raw data จาก interview — จัด sticky notes ใน Miro" />
            <div className="mt-4">
              <ImgBlock src={img8} caption="Affinity Diagram หลังจัดกลุ่ม — 5 clusters: การติดประกาศ, ช่องทางรับ-ส่งข้อมูล, Payment process, การติดต่อ, เวลา" />
            </div>
          </Section>

          {/* Behavioral Patterns */}
          <Section title="User Segmentation & Behavioral Patterns">
            <ImgBlock src={img11} caption="Behavior spectrum — แกนพฤติกรรมการจ่ายเงินและรับใบแจ้งชำระ" />
            <div className="mt-4">
              <ImgBlock src={img13} caption="Pattern 1 vs Pattern 2 — 2 กลุ่ม user ที่มีพฤติกรรมต่างกัน" />
            </div>
          </Section>

          {/* Persona */}
          <Section title="Persona">
            <ImgBlock src={img14} caption="Persona: น้ำฝน — นักศึกษาปี 2 ที่พักหอพักชั้น 7 ต้องลงมารับใบแจ้งชำระที่ชั้น 1 ทุกเดือน" />
          </Section>

          {/* Scenario */}
          <Section title="Scenario Mapping">
            <ImgBlock src={img16} caption="Scenario mapping — 4 scenarios หลัก: รับประกาศ, รับใบแจ้งชำระออนไลน์, ดูยอด, และชำระเงิน" />
          
          </Section>

          {/* Task Analysis */}
          <Section title="Task Analysis">
            <ImgBlock src={img17} caption="Task Analysis: ดูยอดค่าน้ำค่าไฟในใบแจ้งยอดชำระ — แบ่งออกเป็น sub-goals และ sub-tasks" />
          </Section>

          {/* Final UI */}
          <Section title="Final Design">
            <div className="space-y-4">
              <ImgBlock src={final1} caption="Flow หน้าเข้าสู่ระบบและรับรหัส OTP" />
              <ImgBlock src={final2} caption="Flow เมื่อต้องการเปลื่ยนรหัสผ่าน" />
              <ImgBlock src={final3} caption="Flow Feature ต่างๆ ใน Resipay App" />
            </div>
          </Section>

          {/* Reflection */}
          <Section title="Reflection">
            <p className="text-gray-500 text-sm leading-relaxed">
              This project taught me to ground design decisions in real user research. Looking back, I would refine the visual design further and conduct more rounds of usability testing to validate the solution before finalizing.
            </p>
          </Section>

          
        </div>
      </div>
    </div>
  );
}