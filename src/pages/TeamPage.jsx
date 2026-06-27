import { useMemo, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const backendTeam = [
  {
    rollNo: '24X41A42I7',
    name: 'Balasai',
    role: 'Team Lead · Backend & ML Integration Lead',
    badge: 'Team Lead',
    contributions: [
      'Led backend module planning, task coordination, and final integration of the project workflow.',
      'Designed the Flask API structure for symptom prediction and response handling between frontend and backend.',
      'Coordinated machine learning integration, including model loading, prediction flow, and output formatting.',
      'Supervised dataset preparation, feature selection planning, and alignment between symptoms, disease labels, and API responses.',
      'Managed testing support for prediction outputs, confidence messages, and final system stability.',
    ],
    stack: [
      'Python',
      'Flask',
      'REST API integration',
      'Machine learning pipeline coordination',
      'Model-response mapping',
    ],
  },
  {
    rollNo: '24X41A42I8',
    name: 'Venkatesh',
    role: 'Backend Developer · Data Processing Support',
    contributions: [
      'Supported backend development for request handling, JSON processing, and symptom input validation.',
      'Worked on data cleaning support, symptom normalization logic, and backend-friendly input formatting.',
      'Assisted with API testing using sample symptom combinations and response verification.',
      'Helped organize dataset fields and check whether backend outputs matched expected prediction structure.',
      'Contributed to debugging model-serving issues and backend execution flow.',
    ],
    stack: [
      'Python',
      'Flask',
      'Data preprocessing',
      'Validation logic',
      'API testing',
    ],
  },
  {
    rollNo: '24X41A42J2',
    name: 'Jaya Shankar',
    role: 'Backend Developer · Model Training & Evaluation Support',
    contributions: [
      'Assisted in machine learning experimentation for disease prediction and symptom-to-disease mapping.',
      'Worked on training workflow support, dataset understanding, and model behavior checking.',
      'Helped review algorithm suitability for symptom classification and comparative output analysis.',
      'Supported prediction testing for common symptom patterns and result consistency review.',
      'Contributed to backend documentation related to training, inference, and module behavior.',
    ],
    stack: [
      'Python',
      'Dataset analysis',
      'Training support',
      'Prediction testing',
      'Model evaluation assistance',
    ],
  },
]

const frontendTeam = [
  {
    rollNo: '24X41A42I9',
    name: 'Muntaz',
    role: 'Frontend Developer · UI Structure Lead',
    contributions: [
      'Developed the main page layouts and user interface structure for core website sections.',
      'Worked on homepage composition including hero sections, content grouping, and visual hierarchy.',
      'Implemented navigation flow, reusable page structure, and consistent section spacing across the site.',
      'Supported responsive layout improvements for desktop and mobile viewing.',
      'Helped align frontend presentation with the preventive healthcare theme of the project.',
    ],
    stack: [
      'React',
      'JSX',
      'Tailwind CSS',
      'Responsive UI layout',
      'Component structuring',
    ],
  },
  {
    rollNo: '24X41A42J0',
    name: 'Shabnum',
    role: 'Frontend Developer · Styling & Content Integration',
    contributions: [
      'Worked on visual styling for cards, sections, footer, buttons, and content presentation.',
      'Integrated health-related content into frontend components in a clean and readable way.',
      'Supported page consistency for colors, spacing, fonts, and section-level design elements.',
      'Helped implement informative content blocks such as features, about content, and project messaging.',
      'Contributed to improving user readability and polished visual presentation.',
    ],
    stack: [
      'React',
      'Tailwind CSS',
      'Content-driven UI',
      'Component styling',
      'Page consistency improvements',
    ],
  },
  {
    rollNo: '24X41A42J1',
    name: 'Lokesh',
    role: 'Frontend Developer · Routing & Interaction Support',
    contributions: [
      'Worked on page routing, internal navigation paths, and frontend integration across pages.',
      'Supported linking of homepage, about page, team page, feature sections, and symptom-check workflows.',
      'Helped improve interactive behavior for buttons, navigation items, and section transitions.',
      'Assisted with final frontend testing to ensure page flow and route structure worked correctly.',
      'Contributed to overall user experience refinement and project presentation readiness.',
    ],
    stack: [
      'React Router',
      'React',
      'Navigation integration',
      'Interaction flow',
      'Frontend testing',
    ],
  },
]

const projectDetails = [
  {
    title: 'Frontend Frameworks',
    points: [
      'React was used to build reusable page and section components.',
      'React Router was used for navigation across homepage, features, about, and team pages.',
      'Tailwind CSS was used for layout, spacing, colors, and responsive styling.',
    ],
  },
  {
    title: 'Backend Frameworks',
    points: [
      'Flask was used to expose prediction endpoints and connect the trained model to the frontend.',
      'REST-style JSON request and response handling was used for symptom submission and result delivery.',
      'Backend logic was organized to support prediction output, confidence notes, and symptom selection mapping.',
    ],
  },
  {
    title: 'Datasets and Inputs',
    points: [
      'The system used a symptom-and-disease dataset for model training and prediction mapping.',
      'Symptom fields were processed into model-readable inputs before prediction.',
      'Input symptom names were normalized to match the trained symptom column structure.',
    ],
  },
  {
    title: 'Algorithms and Training',
    points: [
      'The project used a machine learning disease-prediction approach based on symptom classification.',
      'Training involved preparing symptom vectors, mapping prognosis labels, and testing prediction results.',
      'Evaluation focused on whether the model returned relevant disease suggestions and usable support messages.',
    ],
  },
]

function MemberCard({ member, accent = 'cyan' }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const accentClasses = useMemo(() => {
    if (accent === 'fuchsia') {
      return {
        glow: 'rgba(217, 70, 239, 0.18)',
        border: 'border-fuchsia-400/20',
        badge: 'border-fuchsia-300/20 bg-fuchsia-400/10 text-fuchsia-200',
        subtle: 'text-fuchsia-200',
        line: 'from-fuchsia-400/50 via-fuchsia-300/20 to-transparent',
        hoverBorder: 'hover:border-fuchsia-300/30',
      }
    }

    return {
      glow: 'rgba(34, 211, 238, 0.18)',
      border: 'border-cyan-400/20',
      badge: 'border-cyan-300/20 bg-cyan-400/10 text-cyan-200',
      subtle: 'text-cyan-200',
      line: 'from-cyan-400/50 via-cyan-300/20 to-transparent',
      hoverBorder: 'hover:border-cyan-300/30',
    }
  }, [accent])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-[2rem] border bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 ${accentClasses.border} ${accentClasses.hoverBorder} hover:-translate-y-1 hover:bg-white/[0.06]`}
      style={{
        boxShadow: isHovered
          ? '0 20px 60px rgba(0, 0, 0, 0.28)'
          : '0 10px 30px rgba(0, 0, 0, 0.18)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${accentClasses.glow} 0%, rgba(15, 23, 42, 0.02) 32%, transparent 68%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              {member.rollNo}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {member.name}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              {member.role}
            </p>
          </div>

          {member.badge && (
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentClasses.badge}`}
            >
              {member.badge}
            </span>
          )}
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        <div className="mt-6">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Key Contributions
          </h4>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {member.contributions.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${accentClasses.line}`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Tools and Areas
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {member.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function SectionHeader({ title, description, count, accent = 'cyan' }) {
  const badgeClass =
    accent === 'fuchsia'
      ? 'border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200'
      : 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200'

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
      </div>

      <div className={`rounded-full border px-4 py-2 text-sm font-medium ${badgeClass}`}>
        {count}
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-xl md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-slate-200">
              Project Team
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Meet the team behind the Smart Preventive Healthcare System
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A six-member development team worked across backend engineering,
              machine learning workflow support, frontend design, routing, testing,
              and final integration to deliver a polished healthcare support platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                6 Members
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                3 Backend
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                3 Frontend
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader
            title="Backend Team"
            description="API development, prediction handling, dataset alignment, model support, and backend workflow stability."
            count="3 Members"
            accent="cyan"
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {backendTeam.map((member, index) => (
              <div
                key={member.rollNo}
                className="animate-[fadeUp_0.7s_ease-out_forwards]"
                style={{ animationDelay: `${index * 120}ms`, opacity: 0 }}
              >
                <MemberCard member={member} accent="cyan" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeader
            title="Frontend Team"
            description="Interface design, component structure, responsive layout, navigation flow, and presentation polish."
            count="3 Members"
            accent="fuchsia"
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {frontendTeam.map((member, index) => (
              <div
                key={member.rollNo}
                className="animate-[fadeUp_0.7s_ease-out_forwards]"
                style={{ animationDelay: `${index * 120}ms`, opacity: 0 }}
              >
                <MemberCard member={member} accent="fuchsia" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Project Development Details
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              The project combined interface design, Flask backend services,
              machine learning workflow support, dataset preparation, training,
              testing, and final web integration into one coordinated delivery.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projectDetails.map((section, index) => (
              <div
                key={section.title}
                className="animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-5"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 via-white/[0.03] to-cyan-400/10 p-6 backdrop-blur-xl md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Contribution Balance
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-200">
            Work was distributed across backend architecture, data handling, training
            support, model behavior review, interface design, navigation, styling,
            testing, and final presentation. The result is a balanced six-member
            collaboration shaped through shared review, debugging, and integration.
          </p>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}