import { sample } from "lodash";
import { useState, useEffect } from "react";
import { wordList } from "../data/wordList.ts";
import { LetterButtons } from "./LetterButtons.tsx";
import { LettersDisplay } from "./LettersDisplay.tsx";
import { StartNewGameButton } from "./StartNewGameButton.tsx";

export function HangmanGame() {
    //tracked state
    //wordToGuess will be replaced during an effect at the end of first render.
    const [wordToGuess, setWordToGuess] = useState("start");
    const [guessedLetters, setGuessedLetters] = useState([] as string[]);

    useEffect(() => {
        setStartingWordBasedOnQueryParamOrRandom();
    }, []);

    //derived state
    const lettersToDisplay = calcLettersToDisplay(wordToGuess, guessedLetters);
    const countOfMisses = countMisses(wordToGuess, guessedLetters);
    const winState = calculateWinState(countOfMisses, lettersToDisplay);

    //handler functions
    function startGame(numLetters: number | null) {
        const matchingWords =
            numLetters === null
                ? wordList
                : wordList.filter((w) => w.length === numLetters);

        const chosenWord = sample(matchingWords);
        if (!chosenWord) {
            throw new Error("No matching words found");
        }
        setWordToGuess(chosenWord);
        setGuessedLetters([]);
    }

    function guessLetter(letter: string): void {
        if (winState !== "in-play") {
            return;
        }
        if (guessedLetters.includes(letter)) {
            return;
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    function setStartingWordBasedOnQueryParamOrRandom() {
        //if the page has been loaded with ~testWord=whatever, use that value.  else, pick at random.
        const urlParams = new URLSearchParams(window.location.search);
        const testWord = urlParams.get("testWord");
        if (testWord) {
            setWordToGuess(testWord);
        } else {
            setWordToGuess(sample(wordList)!);
        }
    }

    //build the UI
    return (
        <div className="hangmanGame">
            <h1>Hangman Game</h1>

            <LettersDisplay lettersOrNulls={lettersToDisplay} />

            {winState === "loss" && (
                <>
                    <div data-testid="loss-message">
                        You lose! Too many misses.
                    </div>
                    <LettersDisplay lettersOrNulls={wordToGuess.split("")} />
                </>
            )}

            {winState === "win" && (
                <div data-testid="win-message">You win!</div>
            )}

            <div>
                Number of misses:{" "}
                <span data-testid="miss-count">{countOfMisses}</span>
            </div>

            <LetterButtons
                guessedLetters={guessedLetters}
                handleClickButton={guessLetter}
            />

            {winState !== "in-play" && (
                <StartNewGameButton onClick={startGame} />
            )}
        </div>
    );
}

//pure functions - easily unit-testable
function calcLettersToDisplay(
    word: string,
    guessedLetters: string[]
): (null | string)[] {
    return word.split("").map((l) => (guessedLetters.includes(l) ? l : null));
}

function countMisses(word: string, guessedLetters: string[]) {
    return guessedLetters.filter((l) => !word.includes(l)).length;
}

function calculateWinState(
    countOfMisses: number,
    lettersOrNulls: (string | null)[]
): "in-play" | "win" | "loss" {
    if (lettersOrNulls.every((l) => l !== null)) {
        return "win";
    }
    if (countOfMisses >= 10) {
        return "loss";
    }

    return "in-play";
}
