import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/Header";
import type { NextPage } from "next";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#000510] via-[#0a0a1a] to-[#000510]">
      <PageHeader />

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#fe568d]/20 to-purple-500/20 border border-white/10 mb-8">
            <span className="text-sm font-medium bg-gradient-to-r from-[#fe568d] to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent mb-6 font-['DM_Sans']">
            Spyk Health
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-['DM_Sans']">
            Your privacy is our priority. We've built Spyk Health with privacy
            by design - no PII collection, no data selling, complete
            transparency.
          </p>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#fe568d]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Header Info Card */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-['DM_Sans']">
                Policy Information
              </h3>
              <div className="space-y-3 text-white/80">
                <p>
                  <span className="text-[#fe568d] font-medium">Effective:</span>{" "}
                  September 17, 2025
                </p>
                <p>
                  <span className="text-[#fe568d] font-medium">Developer:</span>{" "}
                  Synapsis Medical Technologies Inc.
                </p>
                <p>
                  <span className="text-[#fe568d] font-medium">Contact:</span>{" "}
                  info@synapsismedical.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-['DM_Sans']">
                About Spyk Health
              </h3>
              <p className="text-white/80 leading-relaxed">
                A health & wellness app offering general lifestyle support for
                goals, habits, activity, sleep hygiene, and mindfulness. We do
                not provide medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 font-['DM_Sans']">
              Summary (Plain Language)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fe568d] to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "We do not collect personally identifying information (PII) through the app.",
              "We do not sell user data and we do not use data for advertising or cross-app tracking.",
              "Any information processed is used only to make the app function (e.g., creating plans you request, saving preferences, ensuring reliability).",
              "If you email us for support, we receive your email address and whatever you include—used only to respond.",
              "You have clear in-app privacy toggles to control optional features.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#fe568d]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#fe568d] to-purple-400 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Information We Process */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 font-['DM_Sans']">
              What Information the App Processes
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Spyk Health is designed to minimize data and, by default, keep
              information on your device where feasible.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Information you provide in-app",
                  content:
                    "Wellness inputs you type or select (e.g., goals, activity preferences, reminders) are processed only to power requested features (plan creation, progress tracking, etc.). We do not collect PII (such as your name, phone number, or government identifiers) via the app.",
                },
                {
                  title: "Device and technical data",
                  content:
                    "The app may temporarily process basic technical information needed to operate (e.g., device model, OS version, in-app settings, error states). We do not use third-party advertising SDKs and do not track you across apps or websites.",
                },
                {
                  title: "Optional integrations (health sources)",
                  content:
                    "If you choose to connect a health source (e.g., Apple Health / Google Fit), we will only access the categories you explicitly permit, solely to deliver the feature you requested (e.g., personalizing general wellness plans). We do not use HealthKit/Google Fit data for advertising, marketing, or data brokerage. You can revoke permissions at any time in the integration's settings (e.g., Apple Health app).",
                  important:
                    "Spyk Health is not a medical device and does not collect or analyze data for medical diagnosis or treatment.",
                },
                {
                  title: "Generative AI / LLM features",
                  content:
                    "Spyk Health may use Generative AI/LLMs to summarize general wellness information and help create non-medical lifestyle plans. AI outputs are labeled in-app and may include citations to consumer-friendly sources where relevant. We implement guardrails so the app does not generate medical advice (no diagnoses, no drug dosing, no emergency guidance).",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/20 to-black/40 rounded-2xl p-6 border border-white/5"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 font-['DM_Sans']">
                    {section.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-2">
                    {section.content}
                  </p>
                  {section.important && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-[#fe568d]/10 to-purple-500/10 border border-[#fe568d]/20 rounded-lg">
                      <p className="text-[#fe568d] font-medium text-sm">
                        <span className="font-bold">Important:</span>{" "}
                        {section.important}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Controls */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 font-['DM_Sans']">
              App Privacy Controls & Usage Toggles
            </h2>
            <p className="text-xl text-white/80 mb-8">
              All toggles are available in Menu → Settings → Privacy (labels may
              vary by platform). Defaults are Off unless otherwise stated.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Health Data Access",
                  subtitle: "Apple Health / Google Fit — Default: Off",
                  content:
                    "Per-category, opt-in access (e.g., steps, sleep, heart rate) used only to deliver wellness features you request. Can be revoked anytime via Apple Health / Google Fit settings. Not used for ads, tracking, or data brokerage.",
                },
                {
                  title: "Cloud AI Processing",
                  subtitle: "Default: Off",
                  content:
                    "If enabled, content you submit for AI features may be processed transiently by our contracted processors to generate summaries or plans. We instruct providers not to use your content for advertising and not to train their models on your content without your explicit opt-in.",
                },
                {
                  title: "Allow Content for Model Improvement",
                  subtitle: "Default: Off",
                  content:
                    "If you explicitly opt in, de-identified content from AI interactions may be used to improve our models. Opt-in is optional and can be turned off at any time. Turning it off stops future use; we cease retaining new data for this purpose.",
                },
                {
                  title: "Diagnostics & Crash Reports",
                  subtitle: "Default: Off",
                  content:
                    "If enabled, we may collect de-identified technical logs and crash data to improve reliability (no PII, no content of your wellness entries). Used only for maintenance and troubleshooting; never for advertising.",
                },
                {
                  title: "Anonymous Usage Metrics",
                  subtitle: "Default: Off",
                  content:
                    "If enabled, we may collect aggregated, de-identified metrics (e.g., feature usage counts) to prioritize improvements. No cross-app tracking; no sale or sharing for targeted ads.",
                },
                {
                  title: "Cloud Backup / Sync",
                  subtitle: "Default: Off",
                  content:
                    "If offered and enabled, your wellness data may be encrypted and synced to allow multi-device continuity. Disabling stops future sync; you can request local deletion within the app.",
                },
              ].map((toggle, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/20 to-black/40 rounded-2xl p-6 border border-white/5 hover:border-[#fe568d]/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-[#fe568d] to-purple-400 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 font-['DM_Sans']">
                        {toggle.title}
                      </h3>
                      <p className="text-[#fe568d] text-sm font-medium mb-2">
                        {toggle.subtitle}
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {toggle.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Table Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 font-['DM_Sans']">
              App Store Privacy Disclosures
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              We design Spyk Health to minimize data. By default, all analytics
              toggles are Off. If you opt in (see Settings → Privacy), the
              following categories may be processed solely for app operations
              and analytics.
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#fe568d]/20 to-purple-500/20">
                    <tr>
                      {[
                        "Category",
                        "Examples",
                        "Collected?",
                        "Purpose",
                        "Linked to Identity",
                        "Retention",
                        "Control",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-white/10"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-gradient-to-br from-black/40 to-black/60">
                    {[
                      [
                        "Crash Data",
                        "Crash logs, stack traces, error codes",
                        "Optional",
                        "Analytics (reliability)",
                        "No — de-identified",
                        "Minimum needed",
                        "Toggle Off",
                      ],
                      [
                        "Performance Data",
                        "Launch time, hang rate, energy use",
                        "Optional",
                        "Analytics (performance)",
                        "No — de-identified",
                        "Minimum needed",
                        "Toggle Off",
                      ],
                      [
                        "Usage Data",
                        "Feature counts, screens viewed",
                        "Optional",
                        "Analytics (UX quality)",
                        "No — de-identified",
                        "Aggregates retained",
                        "Toggle Off",
                      ],
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-white/5 transition-colors ${index % 2 === 0 ? "bg-white/2" : ""}`}
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="px-6 py-4 text-sm text-white/80 border-b border-white/5"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 font-['DM_Sans']">
              Your Rights & Our Commitments
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-['DM_Sans']">
                    Data Storage & Retention
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    By default, wellness inputs remain on your device unless a
                    feature requires secure, transient cloud processing. We
                    retain only what is necessary for the feature you requested
                    and no longer than needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-['DM_Sans']">
                    Your Choices & Rights
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#fe568d] mt-2 flex-shrink-0"></div>
                      <span>
                        Grant or revoke permissions at any time in device
                        settings
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#fe568d] mt-2 flex-shrink-0"></div>
                      <span>
                        Use in-app Privacy toggles to manage optional processing
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-[#fe568d] mt-2 flex-shrink-0"></div>
                      <span>Request access or deletion by contacting us</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-['DM_Sans']">
                    Security & Privacy
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We use reasonable administrative, technical, and physical
                    safeguards to protect information. Spyk Health is intended
                    for users 13+ and is not directed to children under 13.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="text-orange-400 font-semibold mb-2">
                    No Medical Advice
                  </h4>
                  <p className="text-white/80 text-sm">
                    Spyk Health provides general wellness information only. It
                    is not a substitute for professional medical advice,
                    diagnosis, or treatment. For health concerns or emergencies,
                    seek care from a qualified professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#fe568d]/10 to-purple-500/10 border border-[#fe568d]/20 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-4 font-['DM_Sans']">
              Questions About Your Privacy?
            </h2>
            <p className="text-white/80 mb-6">
              We're committed to transparency. If you have any questions about
              our privacy practices, don't hesitate to reach out.
            </p>
            <a
              href="mailto:info@synapsismedical.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#fe568d] to-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              <span>Contact Us</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
