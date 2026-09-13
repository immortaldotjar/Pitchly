import { motion } from "motion/react";
import { MdEco as GreenTechIcon }  from "react-icons/md"
import { TbHealthRecognition as HealthTechIcon } from "react-icons/tb";
import { HiOutlineCpuChip as DeepTechIcon } from "react-icons/hi2";
import { GiReceiveMoney as FinTechIcon } from "react-icons/gi";
const categories = [
    { icon: HealthTechIcon, title: "HealthTech", desc: "Revolutionizing patient outcomes through data." },
    { icon: DeepTechIcon, title: "DeepTech", desc: "Building the foundational tech of tomorrow." },
    { icon: GreenTechIcon, title: "GreenTech", desc: "Sustainable solutions for a global future." },
    { icon: FinTechIcon, title: "FinTech", desc: "Modernizing the movement of global capital." },
];
const Categories = () => {
    return (
        <div className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest">
            <div className="max-w-max_width mx-auto">
                <div className="text-center mb-10">
                    <h2 className="font-headline-lg text-headline-lg mb-4">Focused on High-Impact Industries</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        An ecosystem tailored for the most demanding tech verticals.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.title}
                            whileHover={{ y: -4 }}
                            className="p-8 border border-outline-variant rounded-lg hover:border-primary transition-colors cursor-pointer group"
                        >
                            <cat.icon className="text-4xl text-on-surface-variant group-hover:text-primary mb-6" />
                            <h4 className="font-headline-md text-body-lg font-bold mb-2">{cat.title}</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories