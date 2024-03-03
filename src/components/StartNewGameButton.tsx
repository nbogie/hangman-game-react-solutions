import { motion } from "framer-motion";
import { useState } from "react";

export function StartNewGameButton({
    onClick,
}: {
    onClick: (numLetters: number) => void;
}) {
    const [numLetters, setNumLetters] = useState(8);

    function inc() {
        setNumLetters((p) => constrain(p + 1, 3, 9));
    }
    function dec() {
        setNumLetters((p) => constrain(p - 1, 3, 9));
    }
    return (
        <div>
            <motion.button
                className="gameSelectButton"
                onClick={() => onClick(numLetters)}
                whileTap={{ scale: 0.9 }}
            >
                New Game
            </motion.button>
            with
            <motion.button
                className="gameSelectButton"
                onClick={dec}
                whileTap={{ scale: 0.9 }}
            >
                {" "}
                -{" "}
            </motion.button>
            <span>{numLetters} letters</span>
            <motion.button
                className="gameSelectButton"
                onClick={inc}
                whileTap={{ scale: 0.9 }}
            >
                {" "}
                +{" "}
            </motion.button>
        </div>
    );
}

function constrain(inputNum: number, min: number, max: number) {
    return Math.min(max, Math.max(min, inputNum));
}
