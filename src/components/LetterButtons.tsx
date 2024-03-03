export function LetterButtons({
    guessedLetters,
    handleClickButton,
}: {
    guessedLetters: string[];
    handleClickButton: (letter: string) => void;
}) {
    return (
        <div className="letterButtons">
            {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
                <button
                    className="letterButton"
                    disabled={guessedLetters.includes(letter)}
                    onClick={() => handleClickButton(letter)}
                    key={letter}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}
