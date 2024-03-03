import { motion } from "framer-motion";
import { useState } from "react";
import { clamp } from "lodash";
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

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        shrinking: { scale: 0.8 },
    };

    return (
        <div>
            <motion.button
                variants={variants}
                className="gameSelectButton"
                onClick={() => onClick(numLetters)}
                whileTap={"shrinking"}
            >
                New Game
            </motion.button>
            with
            <motion.button
                variants={variants}
                className="gameSelectButton"
                onClick={dec}
                whileTap={"shrinking"}
            >
                {" "}
                -{" "}
            </motion.button>
            <span>{numLetters} letters</span>
            <motion.button
                variants={variants}
                className="gameSelectButton"
                onClick={inc}
                whileTap={"shrinking"}
            >
                {" "}
                +{" "}
            </motion.button>
        </div>
    );
}
