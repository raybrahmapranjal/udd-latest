"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-navy border-t-saffron rounded-full animate-spin"></div>
            <p className="mt-4 font-bold text-navy uppercase tracking-widest text-xs">UDD BTR Portal</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
