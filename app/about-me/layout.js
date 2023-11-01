'use client'
import { motion } from "framer-motion"

export default function AboutMeLayout({ children }) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ scale: [0.1, 0.2, 0.4, 0.6, 1], opacity: 1, rotate: ["-360deg", "0"]}}
            transition={{
                duration: 1,
            }}
        >
            {children}
        </motion.div>

    )

}