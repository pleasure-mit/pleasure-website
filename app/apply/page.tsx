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

export default function ApplicationPage() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={sanchez.className}>Application</h1>
                <h1 className={sanchez.className}>Becoming An Educator</h1>
                <h3 className={sanchez.className}>
                    Applications are due November 27th, 2023 at 11:59pm for the spring
                    2024 cycle!
                </h3>
                <h3 className={sanchez.className}>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeVbDJX3XKtAqCgnfhwjVPY6paUfie05I3bxnurJ7UKORPEFw/viewform">
                        Apply here!
                    </Link>
                </h3>
                <p>
                    Peer Educators act as leaders to facilitate discussions about a
                    variety of relationship and sexual health topics. Educators are also
                    empowered to support their fellow students with information and
                    guidance about sexual health, relationship concerns and resources on
                    campus.
                </p>
                <p>
                    New members undergo a thorough training process before the start of
                    each term, which prepares them to lead workshops on sensitive topics
                    and support friends who face challenges in their personal lives.
                </p>
                <p>
                    If you are interested in learning more, talk to any pleasure educator
                    – or submit an application! We will schedule a brief interview with
                    you where we will get to know you a bit and answer any questions you
                    have.
                </p>
                <h1 className={sanchez.className}>What is it like to join PLEASURE?</h1>
                <blockquote>
                    <p>
                        If you are selected to be a PLEASURE educator, you will be
                        training with the rest of your cohort + VPR and OSW staff + some
                        amazing talented PLEASURE educators. That training is pretty
                        diverse in content (everything from info on contraceptives, to
                        ways to understand how your own identity impacts your work as an
                        educator, to presentation skills, and so much more). It's
                        important to us to equip new Pleducators with both the info and
                        skills needed to do important work and to give them strong bonds
                        with their cohort so they always have a support network.
                    </p>
                    <p>
                        Once you are trained, the main commitments are showing up to
                        general body meetings (which range from specific content to
                        creating content for outward facing workshops), about one
                        presentation a month to either other Pleducators or a group we are
                        working with and being an active participant in informal culture
                        change on campus.
                    </p>
                    <p>
                        However, PLEASURE is very much an organization that you can commit
                        your energy is much or as little as you would like.
                    </p>
                    <p>
                        Some things we have going on right now that I or other educators
                        are involved with are: a committee that orders and distributes
                        heavily discounted menstrual cups and sex toys, a special working
                        group making content about pods and relationship boundaries for
                        first years, a committee that works on recruiting new PLEASURE
                        educators, and a team that gives the athletics teams their
                        mandatory sexual assault prevention workshops. These are just a
                        few of the things Pleducators are involved with right now, so if
                        there is something that YOU want PLEASURE to be involved in we'd
                        love to hear it.
                    </p>
                </blockquote>
                <b>Ruby '22</b>
            </div>
        </main>
    );
}
