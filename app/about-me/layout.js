'use client'
import { motion } from "framer-motion"

export default function AboutMeLayout({ children }) {

    // , rotate: ["-360deg", "0"]

    return (
        <motion.div
            initial={{ opacity: 0, x: -5000, scale: 0.1 }}
            animate={{ scale: [.5, 1], opacity: 1, x: 0}}
            transition={{
                duration: 1.5,
            }}
        >
            {children}
        </motion.div>

    )

}