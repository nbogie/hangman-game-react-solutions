import { motion } from "framer-motion";

const containerVariants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Delay between each child animation
        },
    },
    hidden: { opacity: 0 },
};

const itemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }, // Start position off-screen
};

export const StaggeredListExample = ({ items }: { items: string[] }) => (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible">
        {items.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
                {item}
            </motion.li>
        ))}
    </motion.ul>
);
