import { LetterButton } from "./LetterButton";

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
                <LetterButton
                    {...{
                        letter,
                        handleClickButton,
                        isDisabled: guessedLetters.includes(letter),
                    }}
                />
            ))}
        </div>
    );
}
