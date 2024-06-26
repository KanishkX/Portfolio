import {AnimatePresence, motion} from "framer-motion"
export const Transition = (OgComponent) => {
    return (props) => {
      return (
        <AnimatePresence>
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: 1, duration: 0.4, ease: "easeInOut" }}

            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
            // className="h-screen w-screen fixed top-0 pointer-events-none"
          >
            <OgComponent {...props} />
          </motion.div>
        </AnimatePresence>
      );
    };
  };