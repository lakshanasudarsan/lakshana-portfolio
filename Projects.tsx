import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CaseStudy {
  tag: string
  title: string
  overview: string
  businessProblem: string
  myRole: string
  approach: string[]
  tools: string[]
  keyOutcomes: string[]
  metrics: { value: string; label: string }[]
  featured: boolean
}

const caseStudies: CaseStudy[] = [
  {
    tag: 'Gap Analysis | Governance | Process Standardisation',
    title: 'MEA Regional Policy & Process Standardisation',
    overview: 'Cross-functional governance and process standardisation programme spanning Middle East and Africa subsidiaries, aligning regional operations with Krones AG global standards.',
    businessProblem: 'With no unified governance framework, MEA subsidiaries operated in silos — making global reporting, audit compliance, and operational standardisation impossible to enforce at scale across finance, procurement, IT, sustainability, and supplier management functions.',
    myRole: 'Led end-to-end gap analysis and process standardisation initiative, acting as the primary bridge between MEA subsidiaries and Krones AG Germany HQ.',
    approach: [
      'Conducted structured AS-IS vs global standards gap analysis across 8 functional domains including finance, CAPEX, procurement, IT, governance, sustainability, internal controls, and banking',
      'Identified and documented approximately 38 process gaps across regional operations',
      'Built structured gap tracking system capturing gap identification, action items, assigned owners, resolution status, and closure validation',
      'Implemented RACI matrix for cross-functional accountability mapping',
      'Facilitated stakeholder workshops across subsidiaries for alignment and validation',
      'Coordinated with HQ standardisation teams throughout resolution lifecycle',
      'Supported creation of regional SOP and policy handbook'
    ],
    tools: ['SAP S/4HANA', 'SAP MDG', 'SAP GUI', 'SAP Ariba', 'Excel', 'Visio'],
    keyOutcomes: [
      'Regional SOP and policy handbook delivered across MEA subsidiaries',
      'Structured gap tracking system implemented with ownership and closure validation',
      'RACI governance framework established across cross-functional teams',
      'Standardised supplier lifecycle framework from onboarding through KPI tracking'
    ],
    metrics: [
      { value: '38', label: 'Process Gaps Identified' },
      { value: '8', label: 'Functional Domains' },
      { value: 'MEA', label: 'Regional Scope' }
    ],
    featured: true
  },
  {
    tag: 'ERP Adoption | Supplier Onboarding | SAP Ariba',
    title: 'SAP Ariba Supplier Onboarding Enablement — MEA',
    overview: 'End-to-end SAP Ariba enablement programme for supplier onboarding across four MEA subsidiaries, covering system testing, procurement training, and HQ coordination.',
    businessProblem: 'Each MEA subsidiary had developed its own supplier registration and onboarding process, shaped by unique regional and legal requirements. The result was inconsistent documentation standards, misaligned forms across subsidiaries, and no unified system of record for supplier data — creating compliance risk, operational fragmentation, and an inability to enforce consistent procurement governance.',
    myRole: 'Led SAP Ariba system testing, training delivery, onboarding documentation, and HQ issue escalation across four MEA subsidiaries.',
    approach: [
      'Conducted SAP Ariba system testing for supplier onboarding workflows prior to regional rollout',
      'Delivered training and demonstration sessions to procurement managers across 4 subsidiaries — 3 procurement officers per subsidiary',
      'Documented supplier onboarding requirements per subsidiary accounting for regional compliance variations',
      'Logged and tracked system issues via Jira and coordinated resolution with Krones Germany HQ',
      'Supported system adjustments for regional operational requirements',
      'Ensured functional adoption of SAP Ariba across MEA operations'
    ],
    tools: ['SAP Ariba', 'SAP ERP', 'SAP MDG', 'SAP Learning Environment', 'Jira', 'Excel'],
    keyOutcomes: [
      '12 procurement stakeholders trained across 4 MEA subsidiaries',
      'Documented onboarding requirement framework delivered per subsidiary',
      'System issue logs and HQ escalation reports produced',
      'Functional supplier onboarding adoption achieved across MEA'
    ],
    metrics: [
      { value: '12', label: 'Stakeholders Trained' },
      { value: '4', label: 'MEA Subsidiaries' },
      { value: '100%', label: 'Adoption Rate' }
    ],
    featured: true
  },
  {
    tag: 'Supply Chain Analytics | Launch Programme | Real-Time Reporting',
    title: 'Real-Time Supply Chain Visibility & Risk Management — JLR MY26 Prototype Launch',
    overview: 'End-to-end design and implementation of real-time material tracking, automated issue management, and stakeholder reporting for the Jaguar Land Rover 26 Model Year prototype launch.',
    businessProblem: 'Prototype material ordering was managed through SAP ERP, but once materials were dispatched by suppliers, there was no real-time visibility of what was physically entering the warehouse. Prototype materials were additional to normal production materials, creating shop floor confusion and contributing to material losses in previous programme years.',
    myRole: 'Brought into the programme specifically to design and implement real-time tracking and visibility solutions, and to serve as the central risk monitoring, issue resolution, and escalation point across all programme workstreams.',
    approach: [
      'Designed and built real-time material tracking system providing visibility across ETAs, supplier delivery compliance, and material status from procurement through warehouse receipt',
      'Automated issue notification workflows — tracker identified supplier problems and automatically generated Jira tickets assigning them to the relevant quality and engineering teams',
      'Resolved ERP version discrepancy challenge by automating material item configuration to accept current or previous engineering versions where prototype tolerance allowed',
      'Served as central risk monitoring point — identifying, documenting, and resolving issues through structured Jira ticketing',
      'Managed cross-functional issue ownership across quality, engineering, and materials teams',
      'Escalated to senior management where intervention was required',
      'Worked closely with Programme Manager and Production Floor Manager throughout execution',
      'Contributed to Power BI stakeholder dashboards as part of a wider analyst team'
    ],
    tools: ['SAP ERP', 'Power BI', 'Jira', 'Excel'],
    keyOutcomes: [
      'Real-time material tracking system implemented — eliminating the visibility gap that had contributed to material losses in previous programme years',
      'Automated Jira issue creation and team assignment, removing manual escalation dependency',
      'ERP version tolerance automation resolved supplier compliance bottleneck',
      'Cross-functional issue resolution framework established from identification through closure',
      'Stakeholder visibility dashboards delivered across prototype phases through go-live'
    ],
    metrics: [
      { value: 'MY26', label: 'Programme Scope' },
      { value: 'Zero', label: 'Material Losses' },
      { value: 'Automated', label: 'Issue Escalation' }
    ],
    featured: true
  },
  {
    tag: 'Supplier Risk Management | Material Planning',
    title: 'Supplier Risk Resolution & Material Planning — TR Fastenings',
    overview: 'Cross-functional supplier risk and material continuity programme managing 13+ suppliers across the UK and European network, including resolution of a critical supply disruption.',
    businessProblem: 'Supply disruptions within the UK and European supplier network — including a critical issue with TR Fastenings — threatened production continuity, requiring rapid cross-functional coordination to restore material flow.',
    myRole: 'Managed end-to-end material planning for 13+ suppliers, led cross-functional issue resolution, and coordinated inbound logistics with global carriers.',
    approach: [
      'Managed material planning and logistics execution across 13+ UK and European suppliers',
      'Identified and resolved critical supply disruption including on-site engagement with TR Fastenings',
      'Coordinated cross-functional resolution teams spanning quality, engineering, manufacturing, and supplier teams',
      'Managed inbound freight with global carriers including DHL, DB Schenker, AMCO, and Accumen',
      'Developed Power BI logistics tracking dashboards',
      'Participated in TIC supplier improvement forums with Lear and JLR stakeholders'
    ],
    tools: ['SAP ERP', 'Power BI', 'Jira', 'Excel'],
    keyOutcomes: [
      'Risk tracking system implemented within one week — full programme rollout at shop floor level completed over three to four months',
      'Critical supplier disruption resolved with production continuity restored',
      'Improved material flow visibility across 13+ supplier network',
      'Cross-functional escalation resolution framework established'
    ],
    metrics: [
      { value: '13+', label: 'Suppliers Managed' },
      { value: '1 Week', label: 'System Deployed' },
      { value: 'Restored', label: 'Production Continuity' }
    ],
    featured: false
  },
  {
    tag: 'Data Analytics | Customer Behaviour',
    title: 'Customer Behavioural Analytics & Retention Strategy — Omnex Inc',
    overview: 'Behavioural analytics engagement for a global corporate training platform, applying segmentation and engagement analysis to surface actionable insights for platform and content strategy.',
    businessProblem: 'Despite operating at scale, the organisation lacked structured visibility into user engagement — making it impossible to identify which courses drove retention, where engagement broke down, and which segments represented the highest drop-off risk.',
    myRole: 'Designed and executed end-to-end behavioural analytics from data extraction and segmentation through to dashboard delivery and leadership reporting.',
    approach: [
      'Extracted and analysed user engagement and retention data using SQL and Google Analytics',
      'Performed demographic and behavioural segmentation to identify distinct user groups and patterns',
      'Analysed course popularity trends identifying high-performing and underperforming content',
      'Identified dropout patterns and engagement decline points within training module sequences',
      'Built Power BI dashboards translating raw data into leadership-ready visualisations',
      'Presented findings and strategic recommendations to senior management'
    ],
    tools: ['SQL', 'Power BI', 'Google Analytics', 'Excel'],
    keyOutcomes: [
      'Behavioural segmentation framework delivered — enabling distinction between high-engagement and at-risk user segments for the first time',
      'Course popularity trend analysis identified underperforming content requiring strategic review',
      'Drop-off pattern analysis surfaced friction points in the user journey',
      'Leadership dashboards enabled data-driven platform and content strategy decisions'
    ],
    metrics: [
      { value: 'Multi-Region', label: 'Dataset Scope' },
      { value: 'SQL + Power BI', label: 'Tools Delivered' },
      { value: 'Leadership', label: 'Reporting Level' }
    ],
    featured: false
  }
]

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'bg-white shadow-xl' : 'bg-white shadow-md hover:shadow-lg'}`}>
      
      {/* Navy Blue Banner */}
      <div className="relative bg-[#0A1628] p-8">
        {/* Featured Badge */}
        {study.featured && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-[#F5A623] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              FEATURED
            </div>
          </div>
        )}

        {/* Tag */}
        <span className="text-[#00D4C8] text-xs font-semibold tracking-wide uppercase">
          {study.tag}
        </span>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mt-3 mb-4">
          {study.title}
        </h3>
        
        {/* Overview */}
        <p className="text-white/70 leading-relaxed">
          {study.overview}
        </p>
      </div>

      {/* Content Below Banner */}
      <div className="p-8">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-4 rounded-xl bg-[#F8F9FA]">
              <div className="text-2xl font-bold text-[#0A1628]">{metric.value}</div>
              <div className="text-xs text-[#1E293B]/60 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#00D4C8] font-semibold text-sm hover:gap-3 transition-all"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={16} /></>
          ) : (
            <>View Full Case Study <ChevronDown size={16} /></>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-[#E2E8F0] p-8 bg-[#FAFBFC]">
          
          {/* Business Problem */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-3">Business Problem</h4>
            <p className="text-[#1E293B]/70 text-sm leading-relaxed">{study.businessProblem}</p>
          </div>

          {/* My Role */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-3">My Role</h4>
            <p className="text-[#1E293B]/70 text-sm leading-relaxed">{study.myRole}</p>
          </div>

          {/* Approach */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-4">Approach</h4>
            <ul className="space-y-2">
              {study.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#1E293B]/70">
                  <span className="text-[#00D4C8] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-3">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-[#E2E8F0] text-[#0A1628]">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-3">Key Outcomes</h4>
            <ul className="space-y-2">
              {study.keyOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                  <span className="text-[#00D4C8]">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Confidentiality */}
          <p className="text-xs text-[#1E293B]/40 italic">
            Details have been generalised to maintain confidentiality in line with company policy.
          </p>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4C8] text-sm tracking-[0.2em] uppercase font-semibold">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#0A1628]">Selected Work</h2>
          <div className="w-16 h-1 bg-[#00D4C8] mx-auto rounded-full mb-6" />
          <p className="text-[#1E293B]/60 max-w-xl mx-auto">
            Projects spanning process improvement, ERP implementation, supply chain optimisation, and data analytics.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
