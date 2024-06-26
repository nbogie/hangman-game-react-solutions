import { clamp } from "lodash";
import { useState } from "react";

export function StartNewGameButton({
    onClick,
}: {
    onClick: (numLetters: number) => void;
}) {
    const [numLetters, setNumLetters] = useState(8);

    function inc() {
        setNumLetters((p) => clamp(p + 1, 3, 9));
    }
    function dec() {
        setNumLetters((p) => clamp(p - 1, 3, 9));
    }
    return (
        <div className={"newGameControlRow"}>
            <button
                className="gameSelectButton"
                data-testid="new-game-button"
                onClick={() => onClick(numLetters)}
            >
                New Game
            </button>
            with
            <button
                className="gameSelectButton"
                onClick={dec}
                data-testid="decrement-letters-button"
            >
                {" "}
                -{" "}
            </button>
            <span>{numLetters} letters</span>
            <button
                className="gameSelectButton"
                onClick={inc}
                data-testid="increment-letters-button"
            >
                {" "}
                +{" "}
            </button>
        </div>
    );
}
