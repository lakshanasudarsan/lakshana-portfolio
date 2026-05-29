import { Award, BarChart3, Globe, Database } from 'lucide-react'

const highlights = [
  {
    icon: Database,
    title: 'SAP S/4HANA Expert',
    description: 'Leading SAP rollouts across MEA with Fiori and Ariba implementations',
  },
  {
    icon: BarChart3,
    title: 'Power BI & Analytics',
    description: 'Designing automated dashboards reducing manual reporting by 70%',
  },
  {
    icon: Globe,
    title: 'Cross-Industry Experience',
    description: 'Manufacturing, automotive, supply chain, and digital operations across UK, UAE & Europe',
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'MSc Data Analytics with First Class Distinction and Global Scholarship',
  },
]

const metrics = [
  { value: '38', label: 'Process Gaps Identified' },
  { value: '12', label: 'Stakeholders Trained' },
  { value: '70%', label: 'Reduction in Manual Reporting' },
  { value: '13+', label: 'Suppliers Managed' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4C8] text-sm tracking-[0.2em] uppercase font-semibold">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#0A1628]">
            Analyst by Training. Systems Thinker by Nature.
          </h2>
          <div className="w-20 h-1 bg-[#00D4C8] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Photo and Metrics */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Circular Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-[3px] border-[#0A1628] shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Lakshana Sudarsan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
              {metrics.map((metric) => (
                <div 
                  key={metric.label}
                  className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-[#0A1628] mb-1">{metric.value}</div>
                  <div className="text-sm text-[#1E293B]/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-[#1E293B] text-lg leading-relaxed mb-6">
              I'm a Business and Operations Analyst specialising in functional consulting, process improvement, and ERP implementation — with cross-industry experience spanning manufacturing, automotive, supply chain, and digital operations across the UK, UAE, and Europe.
            </p>
            <p className="text-[#1E293B] text-lg leading-relaxed mb-6">
              At Krones AG, I currently lead MEA-wide policy alignment, spearhead SAP S/4HANA and Ariba rollouts, and act as the bridge between regional subsidiaries and Germany HQ — work that goes well beyond analysis into genuine organisational change and systems transformation.
            </p>
            <p className="text-[#1E293B] text-lg leading-relaxed mb-10">
              I think like a physicist, work like a consultant, and deliver like an operator — backed by an Integrated MSc in Physics and an MSc in Data Analytics.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item) => (
                <div 
                  key={item.title}
                  className="group p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#00D4C8]/50 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00D4C8]/10 flex items-center justify-center mb-3">
                    <item.icon className="text-[#00D4C8]" size={20} />
                  </div>
                  <h3 className="font-semibold text-[#0A1628] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#1E293B]/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Publications */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[#E2E8F0]">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-4 flex items-center gap-2">
              <Award className="text-[#F5A623]" size={20} />
              Honors & Awards
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#1E293B]">
                <div className="w-2 h-2 rounded-full bg-[#00D4C8]" />
                <span>Global Excellence Scholarship (2021/2022)</span>
              </li>
              <li className="flex items-center gap-3 text-[#1E293B]">
                <div className="w-2 h-2 rounded-full bg-[#00D4C8]" />
                <span>First Class with Distinction</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#E2E8F0]">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-4">Publication</h3>
            <p className="text-[#1E293B] text-sm leading-relaxed">
              <span className="font-medium">Implications of the σ-cut potential on antikaon condensates in neutron stars</span>
              <br />
              <span className="text-[#1E293B]/60">Lakshana Sudarsan</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
