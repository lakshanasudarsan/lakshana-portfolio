import { useState } from 'react'

const skillCategories = [
  {
    name: 'Analytics & BI',
    skills: ['Power BI', 'SQL', 'Python', 'DAX', 'Data Modelling', 'Google Analytics', 'Databricks', 'Data Visualisation'],
  },
  {
    name: 'ERP & Systems',
    skills: ['SAP S/4HANA', 'SAP Ariba', 'SAP MDG', 'SAP GUI', 'SAP Fiori', 'SAP ERP', 'MRP Systems', 'Jira', 'SharePoint'],
  },
  {
    name: 'Process & Governance',
    skills: ['Gap Analysis', 'SOP Development', 'Policy Alignment', 'RACI Framework', 'Process Mapping', 'AS-IS/TO-BE Analysis', 'Business Process Improvement', 'Change Management', 'Stakeholder Workshops'],
  },
  {
    name: 'Business Analysis',
    skills: ['BRD', 'FSD', 'SSD', 'UAT Planning & Execution', 'Requirements Traceability', 'Agile', 'Scrum', 'Sprint Planning', 'User Story Validation'],
  },
]

const otherCompetencies = [
  'Visio', 'Excel Advanced', 'Risk Management', 'Training Delivery', 
  'Cross-functional Leadership', 'Supplier Management', 'Logistics Coordination', 'Programme Monitoring'
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-6 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4C8] text-sm tracking-[0.2em] uppercase font-semibold">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#0A1628]">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-[#00D4C8] mx-auto rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-[#0A1628] text-white shadow-md'
                  : 'bg-white text-[#1E293B] border border-[#E2E8F0] hover:border-[#00D4C8] hover:text-[#0A1628]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skillCategories[activeCategory].skills.map((skill) => (
            <div
              key={skill}
              className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#00D4C8] transition-all duration-300 text-center"
            >
              <span className="font-medium text-[#0A1628]">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-12 text-center">
          <p className="text-[#1E293B]/60 mb-5 font-medium">Other Competencies:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherCompetencies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white border border-[#E2E8F0] text-[#1E293B] text-sm font-medium hover:border-[#00D4C8] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
