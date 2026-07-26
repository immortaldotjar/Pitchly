import { MdShare, MdRssFeed } from "react-icons/md";
import { useNavigate } from "react-router";

const platformLinks = ["Explore", "Insights", "Pitch Deck Tool", "Success Stories"];
const companyLinks = ["About Us", "Careers", "Contact", "Press"];

export default function Footer() {

    const navigate = useNavigate()

    const handleTos = () => {
        window.open("/TermsOfService", "_blank");
    };

    const handlePolicy = () => {
        window.open("/PrivacyPolicy", "_blank");
    };
    return (
        <footer className="bg-on-background text-white pt-24 pb-12 px-margin_mobile md:px-margin_desktop">
            <div className="max-w-max_width mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-4 space-y-6">
                        <span className="font-headline-md text-headline-md font-bold">Pitchly</span>
                        <p className="font-body-sm text-surface-variant opacity-60 max-w-xs">
                            The definitive professional network for the next generation of global industry leaders.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border border-white/20 center hover:bg-white/10 cursor-pointer transition-colors">
                                <MdShare size={20} />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/20 center hover:bg-white/10 cursor-pointer transition-colors">
                                <MdRssFeed size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h5 className="font-label-caps text-label-caps text-white">Platform</h5>
                        <ul className="space-y-2 opacity-60 font-body-sm">
                            {platformLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h5 className="font-label-caps text-label-caps text-white">Company</h5>
                        <ul className="space-y-2 opacity-60 font-body-sm">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-4">
                        <h5 className="font-label-caps text-label-caps text-white">Newsletter</h5>
                        <p className="font-body-sm opacity-60">Curated startup insights delivered weekly.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full font-body-sm focus:outline-none focus:border-primary"
                            />
                            <button className="bg-primary px-4 py-2 rounded-lg font-body-sm whitespace-nowrap">Join</button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="font-body-sm text-xs opacity-40">© 2026 Pitchly Inc. All rights reserved.</p>
                    <div className="flex gap-8 opacity-40 font-body-sm text-xs">
                        <p className = "cursor-pointer" onClick={handlePolicy}>Privacy Policy</p>
                        <p className = "cursor-pointer" onClick={handleTos}>Terms of Service</p>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}