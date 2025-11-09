import { Cpu, Network, Workflow, BarChart3, PenTool, Zap, Rocket, Shield, DollarSign, Star } from 'lucide-react'

export default function PlatformOverview() {
  return (
    <section id="overview" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white/90 px-3 py-1 text-xs font-medium shadow-sm">
            <Zap className="h-3.5 w-3.5 text-yellow-300" /> Agentic AI Marketing
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Autonomous, AI‑powered marketing platform
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            An end‑to‑end system that plans, executes, and optimizes campaigns with minimal human intervention. Intelligent agents analyze, decide, and act across all channels while continuously learning.
          </p>
        </div>

        {/* Architecture */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900">Platform Architecture</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ArchCard icon={Cpu} title="Agentic AI Engine" desc="Multi‑agent orchestration with goal‑driven reasoning, continuous learning, and real‑time adaptation." />
            <ArchCard icon={Network} title="Data Integration Hub" desc="Unified CDP with real‑time sync, multi‑source aggregation, and enrichment." />
            <ArchCard icon={Workflow} title="Channel Management" desc="Omnichannel coordination with unified messaging across email, social, ads, and SMS." />
            <ArchCard icon={BarChart3} title="Analytics & Intelligence" desc="Predictive insights, attribution modeling, and performance monitoring dashboards." />
            <ArchCard icon={PenTool} title="Content Studio" desc="AI copy, image, and video generation with brand consistency and A/B automation." />
            <ArchCard icon={Zap} title="Automation Engine" desc="Visual workflows, triggers, and conditional logic on an event‑driven architecture." />
          </div>
        </div>

        {/* Core Features */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900">Core Capabilities</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FeatureItem title="Agentic Campaign Manager" points={[
              'Plans, executes, and optimizes autonomously',
              'Budget reallocation and A/B testing built‑in',
              'Cross‑channel orchestration'
            ]} />
            <FeatureItem title="Intelligent CDP" points={[
              '360° profiles and behavioral tracking',
              'Predictive LTV and churn analysis',
              'Identity resolution and compliance'
            ]} />
            <FeatureItem title="Multi‑Channel Automation" points={[
              'Email, social, paid ads, SMS/WhatsApp',
              'Smart send‑time and dynamic personalization',
              'Programmatic creative testing'
            ]} />
            <FeatureItem title="Analytics & Reporting" points={[
              'Real‑time dashboards and cohort analysis',
              'Multi‑touch attribution and forecasting',
              'Automated insights and alerts'
            ]} />
          </div>
        </div>

        {/* Workflows (collapsible) */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900">Intelligent Workflows</h3>
          <div className="mt-6 grid gap-4">
            <WorkflowRow title="Autonomous Lead Generation" summary="From strategy and creative to launch and real‑time optimization with automated lead qualification." />
            <WorkflowRow title="AI‑Powered Content Engine" summary="Trend detection, calendar planning, AI content creation, distribution, and performance feedback." />
            <WorkflowRow title="Customer Nurture Journeys" summary="Micro‑segment targeting, personalization, channel selection, and timing optimization." />
            <WorkflowRow title="Automated Social Management" summary="Discovery, creation, scheduling, publishing, engagement, and analytics." />
            <WorkflowRow title="Dynamic Ad Optimization" summary="Creative testing, bidding, budget shifts, audience expansion, and reporting." />
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16" id="pricing">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-gray-900">Pricing</h3>
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" /> Transparent, usage‑based limits per tier
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PriceCard name="Starter" price="$99" badge="Get started" features={[
              '10,000 contacts', '50k emails/mo', '3 social channels', 'Basic AI'
            ]} />
            <PriceCard name="Professional" price="$299" features={[
              '50,000 contacts', '250k emails/mo', 'Unlimited social', 'Advanced AI', 'Integrations'
            ]} popular />
            <PriceCard name="Business" price="$799" features={[
              '200,000 contacts', '1M emails/mo', 'Multi‑channel', 'Full agents', 'Advanced analytics'
            ]} />
            <PriceCard name="Enterprise" price="Custom" features={[
              'Unlimited scale', 'Custom AI models', 'SLA & support', 'White‑label'
            ]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-gray-900 text-white p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <Rocket className="h-3.5 w-3.5 text-purple-300" /> Launch in minutes
              </div>
              <h4 className="mt-4 text-2xl font-bold">Run your first autonomous campaign today</h4>
              <p className="mt-1 text-white/80">Connect channels, set goals and budget — agents handle the rest with continuous optimization.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-gray-900 hover:bg-gray-100">
                Start free trial
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10">
                Book a demo
              </a>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-600">
          <Star className="h-4 w-4 text-yellow-500" /> Trusted by modern marketing teams
        </div>
      </div>
    </section>
  )
}

function ArchCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-gray-900 text-white p-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ title, points }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function WorkflowRow({ title, summary }) {
  return (
    <details className="rounded-xl border border-gray-200 bg-white/60 backdrop-blur p-4 group open:bg-white/80">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-gray-900">{title}</h5>
          <span className="text-xs text-gray-500">View details</span>
        </div>
      </summary>
      <p className="mt-3 text-sm text-gray-700">{summary}</p>
    </details>
  )
}

function PriceCard({ name, price, features, badge, popular }) {
  return (
    <div className={`relative rounded-2xl border ${popular ? 'border-gray-900' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
      {popular && (
        <span className="absolute -top-2 left-4 rounded-full bg-gray-900 px-3 py-0.5 text-xs font-medium text-white">Most popular</span>
      )}
      <div className="flex items-baseline justify-between">
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        {badge && <span className="text-xs text-gray-500">{badge}</span>}
      </div>
      <div className="mt-3 flex items-end gap-1">
        <div className="text-3xl font-extrabold text-gray-900">{price}</div>
        <span className="text-sm text-gray-500">/mo</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium ${popular ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
        Choose {name}
      </a>
    </div>
  )
}
