import { motion } from "framer-motion";

export function LetterButtons({
    guessedLetters,
    handleClickButton,
}: {
    guessedLetters: string[];
    handleClickButton: (letter: string) => void;
}) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return (
        <div className="letterButtons">
            {alphabet.map((letter) => (
                <motion.button
                    key={letter}
                    className="letterButton"
                    onClick={() => handleClickButton(letter)}
                    whileTap={{ scale: 0.9 }}
                    disabled={guessedLetters.includes(letter)}
                >
                    {letter}
                </motion.button>
            ))}
        </div>
    );
}
