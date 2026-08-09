import { motion } from "motion/react";
import Button from "../Button";
import communityHeroBg from "../../assets/communityHeroBg.webp"
const CommunityHero = () => {
  return (
    <section className="pt-20 pb-16 px-margin_mobile md:px-margin_desktop bg-cover bg-no-repeat bg-bottom " style={{backgroundImage : `url(${communityHeroBg})`}}>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-headline-lg text-headline-lg md:text-display md:leading-tight text-on-surface"
        >
          A network built for people who build companies.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
        >
          Pitchly bridges the gap between ambitious founders, seasoned mentors, and
          forward-thinking investors through data-driven networking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <Button variant="primary" className="px-8 py-3 rounded-[14px]">
            Join Pitchly
          </Button>
          <Button variant="secondary" className="px-8 py-3 rounded-[14px]">
            Discover Startups
          </Button>
        </motion.div>
      </div>

      
    </section>
  );
}

export default CommunityHero