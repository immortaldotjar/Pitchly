import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import SignIn from "../components/AuthComps/SignIn";
import SignUp from "../components/AuthComps/SignUp";

const Auth = () => {
  const [mode, setMode] = useState("signin");

  return (
    <main className="flex min-h-screen">
      <section className="hidden lg:flex w-1/2 bg-dark-background relative p-margin_desktop flex-col justify-between overflow-hidden">
        <div className="z-10">
          <span className="font-headline-md text-headline-md font-bold text-primary-fixed">Pitchly</span>
        </div>

        <div className="relative z-10 flex flex-col gap-12 max-w-lg">
          <h1 className="font-display text-display text-on-primary leading-tight">
            "The best way to predict the future is to create it."
          </h1>
          <div className="relative h-64 w-full">
          </div>
        </div>

        <div className="z-10">
          <p className="font-body-sm text-body-sm text-outline-variant">
            Premium Startup Networking Platform © 2024
          </p>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #acc7ff 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </section>

      <section className="w-full lg:w-1/2 bg-surface-container-lowest center p-margin_mobile md:p-margin_desktop">
        <div className="w-full max-w-110 flex flex-col gap-4">
          <div className="lg:hidden mb-4">
            <span className="font-headline-md text-headline-md font-bold text-primary">Pitchly</span>
          </div>

          <AnimatePresence mode="wait"> 
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {mode === "signin" ? (
                <SignIn onSwitchMode={() => setMode("signup")} />
              ) : (
                <SignUp onSwitchMode={() => setMode("signin")} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

export default Auth