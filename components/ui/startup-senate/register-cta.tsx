"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useRegistration } from "@/contexts/registration-context";
import { RegistrationForm } from "./registration-form";

const ctaClass =
  "h-14 rounded-full bg-orange-500 px-9 text-base text-black hover:bg-orange-400";

// Spring tuned to feel closer to the gallery's smooth, weighty motion
// rather than a snappy/bouncy modal pop-in.
const morphTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 32,
  mass: 0.9,
};

export function RegisterCTA({ className = "" }: { className?: string }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  const { formData, updateField, resetForm } = useRegistration();

  // Lock the page behind the modal without losing scroll position or
  // causing a layout jump — plain `overflow: hidden` alone still lets
  // touch/scroll-wheel events reach the page underneath on some browsers.
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const body = document.body.style;

    body.position = "fixed";
    body.top = `-${scrollY}px`;
    body.left = "0";
    body.right = "0";

    return () => {
      body.position = "";
      body.top = "";
      body.left = "";
      body.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Close on Escape — Radix's Dialog gave us this for free, so it needs
  // to be added back now that the modal is hand-rolled.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Google Sheets / Apps Script submission wires in here later.
    console.log("Registration submitted:", formData);
    resetForm();
    setOpen(false);
  };

  if (!isDesktop) {
    return (
      <a
        href="#register"
        className={cn(buttonVariants({ size: "lg" }), ctaClass, className)}
      >
        Apply now
      </a>
    );
  }

  return (
    <AnimatePresence>
      {!open ? (
        <motion.button
          key="apply-button"
          layoutId="register-cta-shape"
          type="button"
          onClick={() => setOpen(true)}
          transition={morphTransition}
          className={cn(buttonVariants({ size: "lg" }), ctaClass, className)}
        >
          Apply now
        </motion.button>
      ) : (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            layoutId="register-cta-shape"
            transition={morphTransition}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-modal-title"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#0a0a0a] p-6 text-white shadow-2xl sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.25 }}
            >
              <div className="mb-6 space-y-1.5">
                <h2
                  id="register-modal-title"
                  className="font-serif text-2xl italic tracking-tight"
                >
                  Register for Startup Senate
                </h2>
                <p className="text-sm text-zinc-400">
                  Your progress is saved automatically — close this anytime
                  and pick up where you left off.
                </p>
              </div>

              <RegistrationForm
                formData={formData}
                onFieldChange={updateField}
                onSubmit={handleSubmit}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}