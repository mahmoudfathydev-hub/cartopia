import React from "react";
import { motion } from "framer-motion";

export default function Pagetransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0,  y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="page-transition"
        >
            {children}
        </motion.div>
    );
}
