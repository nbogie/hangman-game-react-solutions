import { motion } from "framer-motion";

export function LettersDisplay({
    lettersOrNulls,
}: {
    lettersOrNulls: (null | string)[];
}) {
    const lettersOrSpaces = lettersOrNulls.map((l) => (l === null ? "_" : l));
    const animVariantsForContainer = {
        smaller: {
            scale: 0.8,
            transition: {
                staggerChildren: 0.3, // Delay between each child animation
            },
        },
        normal: {
            scale: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each child animation
            },
        },
    };

    const itemVariants = {
        smaller: { scale: 0.8 },
        normal: { scale: 1 },
    };

    return (
        <motion.div
            className="lettersOrSpaces"
            variants={animVariantsForContainer}
            initial={"smaller"}
            animate={"normal"}
        >
            {lettersOrSpaces.map((l, ix) => (
                <LetterOrSpace
                    key={l + "_at_" + ix}
                    variants={itemVariants}
                    letterOrSpace={l}
                />
            ))}
        </motion.div>
    );
}

function LetterOrSpace({
    letterOrSpace,
    variants,
}: {
    variants: Record<string, object>;
    letterOrSpace: string | null;
}) {
    return (
        <motion.div
            variants={variants}
            initial={"smaller"}
            animate={"normal"}
            className="letterOrSpace"
        >
            {letterOrSpace}
        </motion.div>
    );
}
