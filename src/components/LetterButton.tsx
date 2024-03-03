import { motion } from "framer-motion";
import { animVariants } from "./animVariants";

export function LetterButton({
    letter,
    handleClickButton,
    isDisabled,
}: {
    letter: string;
    handleClickButton: (letter: string) => void;
    isDisabled: boolean;
}) {
    return (
        <motion.button
            key={letter}
            variants={animVariants}
            className="letterButton"
            onClick={() => handleClickButton(letter)}
            whileTap={"shrinking"}
            disabled={isDisabled}
        >
            {letter}
        </motion.button>
    );
}
