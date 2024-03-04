import { motion } from "framer-motion";

export function LettersDisplay({
    lettersOrNulls,
}: {
    lettersOrNulls: (null | string)[];
}) {
    const lettersOrSpaces = lettersOrNulls.map((l) => (l === null ? "_" : l));

    return (
        <motion.div className="lettersOrSpaces">
            {lettersOrSpaces.map((l, ix) => (
                // key needs to change when letter becomes non-null, and should be distinct per occurrence
                <LetterOrSpace key={l + "_at_" + ix} letterOrSpace={l} />
            ))}
        </motion.div>
    );
}

export function LetterOrSpace({
    letterOrSpace,
}: {
    letterOrSpace: string | null;
}) {
    const itemVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            //TODO: newly mounted children components are not attending to this stagger
            transition: {
                delay: custom, // Delay between each child animation
            },
        }),
    };
    return (
        <motion.div
            custom={Math.random() * 0.3}
            variants={itemVariants}
            className="letterOrSpace"
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
        >
            {letterOrSpace}
        </motion.div>
    );
}
