import { motion } from "framer-motion";
import { useState } from "react";
import { clamp } from "lodash";
import { animVariants } from "./animVariants";
export function StartNewGameButton({
    onClick,
}: {
    onClick: (numLetters: number) => void;
}) {
    const [numLetters, setNumLetters] = useState(8);

    function dec() {
        setNumLetters((p) => clamp(p - 1, 3, 9));
    }

    function inc() {
        setNumLetters((p) => clamp(p + 1, 3, 9));
    }

    return (
        <div>
            <motion.button
                variants={animVariants}
                className="gameSelectButton"
                onClick={() => onClick(numLetters)}
                whileTap={"shrinking"}
            >
                New Game
            </motion.button>
            with
            <motion.button
                variants={animVariants}
                className="gameSelectButton"
                onClick={dec}
                whileTap={"shrinking"}
            >
                -
            </motion.button>
            <span>{numLetters} letters</span>
            <motion.button
                variants={animVariants}
                className="gameSelectButton"
                onClick={inc}
                whileTap={"shrinking"}
            >
                +
            </motion.button>
        </div>
    );
}
