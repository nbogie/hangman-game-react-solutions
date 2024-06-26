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
                <button
                    className="letterButton"
                    disabled={guessedLetters.includes(letter)}
                    onClick={() => handleClickButton(letter)}
                    data-testid={`letter-button-${letter}`}
                    key={letter}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}
