import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/Header";
import styles from "@/styles/tos.module.css";
import type { NextPage } from "next";

const TermsOfServicePage: NextPage = () => {
  return (
    <main className="min-h-screen bg-[#000510]">
      <PageHeader />
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.termsOfServiceWrapper}>
            <h1 className={styles.termsOfService}>Terms of Service</h1>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <section className={styles.introductionWelcomeToSynapsWrapper}>
            <div className={styles.introductionWelcomeToContainer}>
              <h2 className={styles.introduction}>
                <span className={styles.introduction1}>
                  Spyk Health — Terms of Service
                </span>
              </h2>
              <p className={styles.introText}>
                <span>Effective date: September 17, 2025</span>
              </p>
              <p className={styles.introText}>
                <span>
                  Developer/Operator: Synapsis Medical Technologies Inc.
                  ("Synapsis", "we", "us", "our")
                </span>
              </p>
              <p className={styles.introText}>
                <span>Contact: info@synapsismedical.com</span>
              </p>
              <p className={styles.introText}>
                <span>
                  Address: Unit 103, 6030 88 St NW, Edmonton, Alberta, T6E 6G4,
                  Canada
                </span>
              </p>
              <p className={styles.introText}>
                <span>Summary (not a substitute for the full terms)</span>
              </p>
              <ul className={styles.nameEmailAddressPhoneNumbe}>
                <li className={styles.listItem}>
                  <span>
                    Spyk Health is a consumer health & wellness app. It offers
                    general lifestyle support and does not provide medical
                    advice, diagnosis, or treatment.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    We do not collect PII, do not sell data, and use information
                    only to operate the app.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>By using the app, you agree to these Terms.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                1) Acceptance of Terms
              </h2>
              <p className={styles.introText}>
                <span>
                  By downloading, accessing, or using Spyk Health (the
                  "Service"), you agree to be bound by these Terms of Service
                  ("Terms"). If you do not agree, do not use the Service.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>2) Eligibility</h2>
              <p className={styles.introText}>
                <span>
                  You must be 13 years or older (or the minimum age required in
                  your jurisdiction) to use the Service. If you are under the
                  age of majority, you must have a parent/guardian's consent.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                3) Description of the Service
              </h2>
              <p className={styles.introText}>
                <span>
                  Spyk Health provides general wellness features (e.g., goals,
                  habits, activity, sleep hygiene, mindfulness) and may offer
                  AI-assisted summaries and planning tools. The Service is not a
                  medical device and is not intended to diagnose, treat, cure,
                  or prevent any disease or condition.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                4) No Medical Advice; Emergencies
              </h2>
              <ul className={styles.nameEmailAddressPhoneNumbe}>
                <li className={styles.listItem}>
                  <span>
                    The Service provides general wellness information only. It
                    does not provide medical or clinical advice and must not be
                    used to make medical decisions.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    If you have a health concern or emergency, seek care from a
                    qualified professional or call local emergency services
                    immediately.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    We do not monitor for emergencies and cannot provide crisis
                    response.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                5) Generative AI & Content Disclaimers
              </h2>
              <p className={styles.introText}>
                <span>
                  The Service may use Generative AI/LLMs to create non-medical
                  summaries, suggestions, or plans. Outputs may include
                  citations to consumer-friendly sources where relevant.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  AI outputs may be inaccurate or incomplete and are provided
                  for informational, wellness purposes only. You are responsible
                  for how you use the information.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  We implement guardrails that block clinical topics (e.g.,
                  diagnoses, drug dosing). Do not attempt to bypass these
                  restrictions.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>6) Privacy</h2>
              <p className={styles.introText}>
                <span>
                  We do not collect personally identifying information (PII) via
                  the app and do not sell data.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  Any information processed is used only to operate and improve
                  the Service's core features.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  See the Spyk Health Privacy Policy, which is incorporated by
                  reference. If these Terms conflict with the Privacy Policy on
                  a privacy matter, the Privacy Policy controls.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                7) Health Integrations & Third-Party Services
              </h2>
              <p className={styles.introText}>
                <span>
                  Optional health integrations (e.g., Apple Health, Google Fit):
                  We access only the categories you explicitly permit, solely to
                  provide requested wellness features. We do not use such data
                  for advertising, marketing, or data brokerage. You can revoke
                  access in the integration's settings.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  Third-party services: The Service may link to or rely on
                  third-party services (cloud providers, analytics for app
                  operation, mobile platforms). We are not responsible for
                  third-party terms or practices. Your use of those services is
                  governed by their terms.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                8) Your Responsibilities & Acceptable Use
              </h2>
              <ul className={styles.nameEmailAddressPhoneNumbe}>
                <li className={styles.listItem}>
                  <span>
                    Use the Service only for lawful, personal, wellness
                    purposes.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    Do not use the Service to seek or provide medical advice,
                    dosage, diagnoses, emergency guidance, or other clinical
                    content.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    Do not upload or transmit unlawful, harmful, or infringing
                    content; do not attempt to reverse engineer, disrupt, or
                    overload the Service; do not use automated scraping or
                    harvesting.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                9) Accounts & Security (if applicable)
              </h2>
              <p className={styles.introText}>
                <span>
                  If the Service offers accounts or sign-in, you are responsible
                  for maintaining the confidentiality of your credentials and
                  for all activity under your account. Notify us promptly of any
                  unauthorized use.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                10) Subscription & Purchases (if applicable)
              </h2>
              <p className={styles.introText}>
                <span>If premium features are offered for a fee:</span>
              </p>
              <ul className={styles.nameEmailAddressPhoneNumbe}>
                <li className={styles.listItem}>
                  <span>
                    Purchases made via app stores are billed and managed by the
                    platform (Apple/Google).
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    Auto-renewal terms, pricing, and cancellation are shown at
                    purchase. You can cancel auto-renewal in your platform
                    account settings.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span>
                    Fees are generally non-refundable except as required by law
                    or platform policy.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                11) Intellectual Property & License
              </h2>
              <p className={styles.introText}>
                <span>
                  The Service, including software, text, graphics, and
                  trademarks, is owned by Synapsis or its licensors and
                  protected by law.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  We grant you a limited, non-exclusive, non-transferable,
                  revocable license to install and use the app for personal,
                  non-commercial wellness purposes, subject to these Terms.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  You may not copy, modify, distribute, decompile, or create
                  derivative works except as permitted by law.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                12) User Content & Feedback
              </h2>
              <p className={styles.introText}>
                <span>
                  If you submit content (e.g., preferences, goals) or send us
                  feedback, you grant Synapsis a non-exclusive, worldwide,
                  royalty-free license to use it to operate, improve, and
                  support the Service.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  You represent you have the rights to any content you provide
                  and that it does not violate others' rights.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                13) Changes to the Service or Terms
              </h2>
              <p className={styles.introText}>
                <span>
                  We may update or discontinue features and may modify these
                  Terms at any time. We will update the Effective date and, when
                  required, provide in-app notice. Your continued use after
                  changes means you accept the updated Terms.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>14) Termination</h2>
              <p className={styles.introText}>
                <span>
                  We may suspend or terminate access if you violate these Terms
                  or for operational reasons. You may stop using the Service at
                  any time. Sections that by nature should survive (e.g., IP,
                  disclaimers, limitations of liability, governing law) will
                  survive termination.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>15) Disclaimers</h2>
              <p className={styles.introText}>
                <span>
                  THE SERVICE (INCLUDING AI OUTPUTS) IS PROVIDED "AS IS" AND "AS
                  AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNAPSIS
                  DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
                  ACCURATE, RELIABLE, UNINTERRUPTED, OR ERROR-FREE.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                16) Limitation of Liability
              </h2>
              <p className={styles.introText}>
                <span>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNAPSIS AND ITS
                  AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL
                  NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                  DATA, PROFITS, OR REVENUE, ARISING FROM OR RELATED TO YOUR USE
                  OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY.
                </span>
              </p>
              <p className={styles.introText}>
                <span>
                  OUR TOTAL LIABILITY FOR ANY CLAIMS UNDER THESE TERMS WILL NOT
                  EXCEED CAD $100 OR THE AMOUNT YOU PAID (IF ANY) FOR THE
                  SERVICE IN THE 3 MONTHS BEFORE THE EVENT, WHICHEVER IS
                  GREATER. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS;
                  THOSE LIMITATIONS MAY NOT APPLY TO YOU.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                17) Indemnification
              </h2>
              <p className={styles.introText}>
                <span>
                  You agree to defend, indemnify, and hold harmless Synapsis and
                  its personnel from any claims, damages, liabilities, costs,
                  and expenses (including reasonable legal fees) arising from
                  your misuse of the Service, your violation of these Terms, or
                  your violation of any law or third-party rights.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                18) Governing Law & Venue
              </h2>
              <p className={styles.introText}>
                <span>
                  These Terms are governed by the laws of the Province of
                  Alberta and the federal laws of Canada applicable therein,
                  without regard to conflict-of-laws rules. You agree to the
                  exclusive jurisdiction of the courts located in Alberta,
                  Canada for any dispute arising out of or relating to these
                  Terms or the Service. (You may also seek eligible claims in
                  small-claims court.)
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>
                19) Export & Sanctions
              </h2>
              <p className={styles.introText}>
                <span>
                  You must comply with all applicable export control and
                  sanctions laws. You represent you are not barred from using
                  the Service under such laws.
                </span>
              </p>
            </div>
          </section>

          <section className={styles.informationWeCollectPersonaWrapper}>
            <div className={styles.informationWeCollectContainer}>
              <h2 className={styles.informationWeCollect}>20) Contact</h2>
              <p className={styles.introText}>
                <span>Synapsis Medical Technologies Inc.</span>
              </p>
              <p className={styles.introText}>
                <span>
                  Unit 103, 6030 88 St NW, Edmonton, Alberta, T6E 6G4, Canada
                </span>
              </p>
              <p className={styles.introText}>
                <span>info@synapsismedical.com</span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfServicePage;
