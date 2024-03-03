import { motion } from "framer-motion";

export function LettersDisplay({
    lettersOrNulls,
}: {
    lettersOrNulls: (null | string)[];
}) {
    const lettersOrSpaces = lettersOrNulls.map((l) => (l === null ? "_" : l));

    const containerVariants = {
        visible: {
            opacity: 1,
            //TODO: newly mounted children components are not attending to this stagger
            transition: {
                staggerChildren: 0.1, // Delay between each child animation
            },
        },
        hidden: { opacity: 0 },
    };

    return (
        <motion.div
            className="lettersOrSpaces"
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
        >
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
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
    };
    return (
        <motion.div variants={itemVariants} className="letterOrSpace">
            {letterOrSpace}
        </motion.div>
    );
}
