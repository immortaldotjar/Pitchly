import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { MdArrowBack, MdSearchOff } from "react-icons/md";
import Button from "../components/Button";
import NotFound404 from "../assets/404.png"
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen center px-margin_mobile md:px-margin_desktop bg-background overflow-hidden relative">

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center gap-8">
        <img src={NotFound404} alt="404_NotFound" />
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="space-y-3"
        >
          <h1 className="font-display text-4xl font-bold text-on-surface leading-tight">
            Lost the connection.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
            The page you're looking for doesn't exist, moved, or was never part of the network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="secondary"
            className="px-6 py-3 rounded-[14px] flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <MdArrowBack size={18} /> Go Back
          </Button>
          <Button
            variant="primary"
            className="px-6 py-3 rounded-[14px]"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound