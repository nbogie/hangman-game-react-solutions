export function LettersDisplay({
    lettersOrNulls,
}: {
    lettersOrNulls: (null | string)[];
}) {
    const lettersOrSpaces = lettersOrNulls.map((l) => (l === null ? "_" : l));
    return <div className="letters">{lettersOrSpaces.join(" ")}</div>;
}
