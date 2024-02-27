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

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.top}>
                <h1 className={sanchez.className}>Apply to be a PLEASURE Educator!</h1>
                <h3 className={sanchez.className}>
                    Applications are due Monday, November 27th, 2023 at 11:59pm!
                </h3>
                <h1 className={sanchez.className}>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeVbDJX3XKtAqCgnfhwjVPY6paUfie05I3bxnurJ7UKORPEFw/viewform">
                        Apply here!
                    </Link>
                </h1>
            </div>
            <div className={styles.content}>
                <h1 className={sanchez.className}>About us</h1>
                <p>
                    We aim to improve how our communities navigate sex and relationships
                    in order to end sexual violence.
                </p>
                <p>
                    PLEASURE works on a model of culture change. We know that violence
                    thrives in a culture that accepts or is indifferent to bigotry. We
                    seek to change the environment and empower others to seek health and
                    healthy relationships of all kinds. We reject all forms of Racism,
                    Sexism, Homophobia, Transphobia, and Identity-based hatred. We aim to
                    help each student explore and develop their own set of values and
                    skills. As such, we strive for inclusivity in our discussions,
                    welcoming participants of all backgrounds and perspectives.
                </p>

                <p>
                    We do our work in lots of ways. You might find a Pleasure Educator :
                </p>
                <ul>
                    <li>On a committee working to change policy</li>
                    <li>
                        Hosting a study break about contraception or communication or
                        erotica
                    </li>
                    <li>
                        Presenting a workshop to athletes, FSILGs, and other student
                        groups
                    </li>
                    <li>
                        Hosting a larger event with other educators such as “Pleasure in
                        the Dark” (an AMA about sex and relationships and consent and
                        pleasure- anonymous & in the dark with glow things)
                    </li>
                    <li>
                        Speaking up when they hear someone tell a hate-based
                        &quot;joke&quot;
                    </li>
                    <li>Supporting a friend</li>
                    <li>
                        Having fun and sharing their passion for not just health—but
                        pleasure
                    </li>
                </ul>
                <h1 className={sanchez.className}>Our History</h1>
                <p>
                    Started in 2015, Pleasure is a student-led effort to promote healthy
                    relationships and eliminate sexual violence at MIT. We are sponsored
                    and supported by the office for Violence Prevention and Response. In
                    the fall of 2015, we implemented a pilot program in Random Hall
                    consisting of peer-facilitated workshops on topics ranging from sexual
                    health to communicating across cultures and value systems. Since then
                    we have held workshops and facilitated conversations in nearly every
                    dorm and we are actively expanding into FSILGs!
                </p>
            </div>
        </main>
    );
}
