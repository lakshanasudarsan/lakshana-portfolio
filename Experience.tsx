import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'LCS Supply Chain Management Analyst',
    company: 'Krones',
    location: 'Dubai, UAE',
    period: 'Feb 2026 - Present',
    description: [
      'Leading MEA-wide governance transformation — standardising SOPs, policies, and workflows across Middle East and Africa subsidiaries in alignment with Krones AG global standards',
      'Spearheading SAP S/4HANA (Fiori) and SAP Ariba rollout across MEA — end-to-end system testing, UAT, requirements translation, and training delivery for 12 stakeholders across 4 subsidiaries',
      'Conducting structured gap analysis identifying ~38 process gaps across 8 functional domains including procurement, finance, IT, and sustainability',
      'Acting as primary bridge between MEA subsidiaries and Krones AG Germany HQ — driving organisational change and process standardisation at scale',
      'Designed automated Power BI dashboards reducing manual reporting cycles by ~70%',
    ],
    tech: ['SAP S/4HANA', 'SAP Ariba', 'Power BI', 'Jira', 'Fiori', 'Visio'],
  },
  {
    title: 'Business Analyst',
    company: 'SGN Digital Marketing',
    location: 'Dubai, UAE',
    period: 'Apr 2025 - Oct 2025',
    description: [
      'Delivered end-to-end business analysis across multi-department systems — producing BRDs, FSDs, and SSDs with full requirement traceability',
      'Led UAT execution validating user stories, acceptance criteria, and workflow compliance across concurrent workstreams',
      'Mapped and improved business processes using Visio, contributing to Agile sprint planning and retrospectives',
    ],
    tech: ['Visio', 'Jira', 'Agile', 'UAT', 'BRD/FSD'],
  },
  {
    title: 'Materials Analyst',
    company: 'Lear Corporation',
    location: 'Worcestershire, UK',
    period: 'Nov 2023 - Mar 2025',
    description: [
      'Designed and implemented real-time material tracking system for JLR MY26 prototype launch — eliminating visibility gaps that had contributed to material losses in previous programme years',
      'Resolved critical supplier disruption (TR Fastenings) through on-site engagement and cross-functional coordination across quality, engineering, and logistics teams',
      'Managed end-to-end material planning for 13+ suppliers including DHL, DB Schenker, and JLR — maintaining 98%+ inventory accuracy via SAP',
      'Automated Jira issue escalation workflows — removing manual dependency across the MY26 programme lifecycle',
    ],
    tech: ['SAP', 'MRP', 'Power BI', 'Jira', 'JIT'],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Omnex Inc',
    location: 'Michigan, USA',
    period: 'Mar 2023 - Aug 2023',
    description: [
      'Executed end-to-end behavioural analytics for a global corporate training platform — covering segmentation, dropout pattern analysis, and course performance trends across multiple regions',
      'Built Power BI dashboards translating complex engagement data into leadership-ready insights using SQL, Python, and Google Analytics',
      'Presented data-driven retention strategy recommendations directly to senior management',
    ],
    tech: ['Python', 'Power BI', 'Google Analytics', 'SQL'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4C8] text-sm tracking-[0.2em] uppercase font-semibold">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#0A1628]">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-[#00D4C8] mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title + exp.company}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[#00D4C8] border-4 border-white shadow-md" />

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="group p-6 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] hover:border-[#00D4C8]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Briefcase className="text-[#0A1628]" size={22} />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-xl font-bold text-[#0A1628]">{exp.title}</h3>
                        <p className="text-[#00D4C8] font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 text-sm text-[#1E293B]/70 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#00D4C8]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-[#00D4C8]" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-[#1E293B]/80 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">• {item}</li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-[#00D4C8]/10 text-[#0A1628] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
