import { motion } from "motion/react";
import Button from "../Button";
import featureHeroBg from "../../assets/featureHeroBg.webp"
import { useNavigate } from "react-router";
const FeatureHero = () => {
  const navigate = useNavigate()

  return (
    <div className="pt-20 pb-20 px-margin_mobile md:px-margin_desktop text-center bg-bottom bg-no-repeat bg-cover" style={{ backgroundImage: `url(${featureHeroBg})` }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-headline-lg text-headline-lg md:text-display md:leading-tight text-on-surface"
        >
          Everything founders need to build, present and grow their startup.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
        >
          A high-performance ecosystem designed to bridge the gap between visionary ideas
          and strategic capital through structural networking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <Button className="px-8 py-3" onClick={() => { navigate("/auth/signup") }}>
            Explore Startups
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default FeatureHero