import { Sanchez } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const sanchez = Sanchez({
    weight: "400",
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={sanchez.className}>Contact</h1>
                <p>
                    Feel free to contact us at any time to inquire about joining PLEASURE,
                    request a workshop or study break, or ask any other question you may
                    have! You can reach us by email at
                </p>
                <p>pleasure(at)mit.edu.</p>
            </div>
        </main>
    );
}
