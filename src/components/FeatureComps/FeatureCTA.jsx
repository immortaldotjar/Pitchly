import { motion } from "motion/react";
import Button from "../Button";
import wave from "../../assets/featureWave.svg"
import { useNavigate } from "react-router";
const FeatureCTA = () => {

  const navigate = useNavigate()
  return (
    <section className="pt-35 pb-20 px-margin_mobile md:px-margin_desktop overflow-hidden bg-cover bg-" style={{backgroundImage : `url(${wave})`}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-primary">
          Ready to scale your startup?
        </h2>
        <p className="font-body-md text-body-md text-on-primary/70">
          Join 2,000+ founders and investors already connecting on the world's most
          professional startup network.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
          <Button variant="secondary" className="px-8 py-3 bg-on-primary text-primary border-transparent" onClick = {() => {navigate("/auth/signup")}}>
            Get Started Now
          </Button>
          <button className="font-body-sm text-body-sm text-on-primary font-semibold hover:underline">
            Talk to our team
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default FeatureCTA