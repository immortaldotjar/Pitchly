import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Account information such as your name, email address, and profile photo.",
      "Startup information including descriptions, industries, funding goals, team details, and uploaded pitch decks.",
      "Usage information such as browser type, IP address, and platform activity.",
    ],
  },
  {
    title: "2. How We Use Information",
    content: [
      "Create and manage your account.",
      "Display startup profiles.",
      "Provide platform features.",
      "Improve performance and user experience.",
      "Respond to support requests.",
    ],
  },
  {
    title: "3. AI Features",
    content: [
      "Information submitted to AI-powered features may be processed by trusted AI providers to generate responses.",
    ],
  },
  {
    title: "4. Cookies",
    content: [
      "Cookies help keep you signed in, remember preferences, and improve platform performance.",
    ],
  },
  {
    title: "5. Information Sharing",
    content: [
      "Pitchly does not sell your personal information.",
      "Data may be shared with cloud providers, authentication services, analytics providers, email providers, and AI providers as required to operate the platform.",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "Passwords are encrypted.",
      "Secure communication protocols are used where applicable.",
      "Reasonable safeguards are applied to protect your data.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "Your information is retained while your account remains active or as required by applicable law.",
    ],
  },
  {
    title: "8. Your Rights",
    content: [
      "You may request access to, correction of, or deletion of your personal information, subject to applicable laws.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Pitchly is not intended for children under the applicable minimum age.",
    ],
  },
  {
    title: "10. Changes",
    content: [
      "This Privacy Policy may be updated from time to time.",
    ],
  },
  {
    title: "11. Contact",
    content: [
      "For privacy-related questions, contact privacy@pitchly.app",
    ],
  },
];

const  PrivacyPolicy =( ) =>{
  return (
    <main className="min-h-screen bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-[#20C997]">
          Legal
        </p>

        <h1 className="mt-3 text-5xl font-bold text-[#212529]">
          Privacy Policy
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Effective Date: July 24, 2026
        </p>

        <p className="mt-8 text-gray-700 leading-8">
          This Privacy Policy explains how Pitchly collects, uses, stores, and
          protects your information when you use our platform.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-5 text-2xl font-semibold text-[#212529]">
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.content.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-gray-700 leading-8"
                  >
                    <span className="mt-3 h-2 w-2 rounded-full bg-[#20C997]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy