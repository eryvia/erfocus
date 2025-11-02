
import { motion } from "motion/react"

interface DragTextProps {
    textDrag: string;
}

export default function DragText({ textDrag }: DragTextProps) {
  return (
      <motion.p drag style={text}>
        {textDrag}
      </motion.p>
  )
}

/**
 * ==============   Styles   ================
 */

const text = {
  fontFamily: "Satoshi",
  fontSize: 50,
  color: "#E0E1DD",
  cursor: "grab",
}