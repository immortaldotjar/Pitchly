import React from "react";

const sections = [
    {
        title: "1. About Pitchly",
        content: [
            "Pitchly is a platform that helps startup founders, entrepreneurs, mentors, and investors connect, showcase startup ideas, upload pitch decks, collaborate, and exchange feedback.",
            "Pitchly does not provide legal, financial, or investment advice.",
        ],
    },
    {
        title: "2. Eligibility",
        content: [
            "You must be at least 18 years old or have permission from a parent or guardian to use Pitchly.",
            "By creating an account, you confirm that the information you provide is accurate and current.",
        ],
    },
    {
        title: "3. Your Account",
        content: [
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "You are responsible for all activities that occur under your account.",
            "Notify us immediately if you suspect unauthorized access.",
        ],
    },
    {
        title: "4. Acceptable Use",
        content: [
            "Do not upload false or misleading information.",
            "Do not impersonate another person or organization.",
            "Do not upload malicious software.",
            "Do not harass, threaten, or abuse other users.",
            "Do not scrape or copy platform content without permission.",
        ],
    },
    {
        title: "5. Startup Profiles",
        content: [
            "Founders are responsible for the accuracy of the information they publish.",
            "Pitchly does not verify funding, revenue, customers, or startup performance.",
            "Investors and mentors should conduct their own research before making decisions.",
        ],
    },
    {
        title: "6. Uploaded Content",
        content: [
            "You retain ownership of your uploaded content.",
            "By uploading content, you grant Pitchly permission to display and store it for platform functionality.",
            "Do not upload copyrighted or confidential material without authorization.",
        ],
    },
    {
        title: "7. Feedback & Reviews",
        content: [
            "Feedback should remain respectful and constructive.",
            "Pitchly reserves the right to remove abusive or inappropriate content.",
        ],
    },
    {
        title: "8. Intellectual Property",
        content: [
            "The Pitchly name, branding, logo, and platform design belong to Pitchly.",
            "You may not copy or reproduce platform assets without permission.",
        ],
    },
    {
        title: "9. Third-Party Services",
        content: [
            "Pitchly may use third-party providers for cloud storage, email, authentication, analytics, and AI features.",
            "Those services may have their own terms and privacy policies.",
        ],
    },
    {
        title: "10. Account Suspension",
        content: [
            "Pitchly may suspend or terminate accounts that violate these Terms or misuse the platform.",
        ],
    },
    {
        title: "11. Disclaimer",
        content: [
            "Pitchly is provided 'as is' without guarantees regarding platform availability, funding success, or business outcomes.",
        ],
    },
    {
        title: "12. Limitation of Liability",
        content: [
            "Pitchly is not responsible for losses arising from the use of the platform to the fullest extent permitted by law.",
        ],
    },
    {
        title: "13. Changes",
        content: [
            "These Terms may be updated periodically. Continued use of Pitchly indicates acceptance of the revised Terms.",
        ],
    },
    {
        title: "14. Contact",
        content: [
            "For questions regarding these Terms, contact us at support@pitchly.app",
        ],
    },
];

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FA] py-20">
            <div className="mx-auto max-w-5xl px-6">
                <p className="text-sm font-medium uppercase tracking-widest text-[#20C997]">
                    Legal
                </p>

                <h1 className="mt-3 text-5xl font-bold text-[#212529]">
                    Terms of Service
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Effective Date: July 24, 2026
                </p>

                <p className="mt-8 text-gray-700 leading-8">
                    Welcome to Pitchly. These Terms of Service govern your access to and
                    use of the Pitchly platform. By creating an account or using Pitchly,
                    you agree to these Terms.
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
        </div>
    );
}

export default TermsOfService