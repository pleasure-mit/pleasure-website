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
                <h1 className={sanchez.className}>Resources</h1>
                <p>
                    Feel free to ask anyone in <b>Pleasure</b> if you have a question
                    about sexual or relationship health. They are also great resources to
                    help connect you to the right staff on campus.
                </p>
                <p>
                    <b>
                        <Link href="https://studentlife.mit.edu/vpr">
                            Violence Prevention and Response
                        </Link>
                        &nbsp;(VPR)
                    </b>
                    . PLEASURE is trained and supported by VPR. VPR is a confidential
                    office on campus. We address issues related to gender-based violence,
                    sexual assault and harassment, stalking or discrimination related to
                    gender or sexuality. We also seek to support folks in our community
                    toward creating a safe and positive culture on campus for all
                    community members. We serve people people of all genders and we are
                    available to the entire MIT community. Because we are a confidential
                    resource, we are able follow the wishes of the individual we are
                    serving in terms of reporting or not. This makes us a great place to
                    start if you are not sure where to turn about an issue. No question or
                    issue is to small to reach out to us. Our hotline is 617-253-2300. The
                    VPR team is available virtually during the Fall 2020 semester due to
                    the COVID-19 pandemic.
                </p>

                <p>
                    <b>Our trusted colleagues:</b> <br />
                    <Link href="https://medical.mit.edu/">MIT Medical</Link> is MIT's
                    health system. With MIT's unique culture in mind, MIT Medical provides
                    resources and designs programs to help all members of the MIT
                    community learn about making healthy choices that will allow you to
                    get the most out of your time at MIT. <br />
                    <i>Urgent Care Phone (confidential): 617-253-4481</i>
                </p>
                <p>
                    <Link href="https://barcc.org/"> Boston Area Rape Crisis Center</Link>
                    (confidential) provides free, confidential support and services to
                    survivors of sexual violence ages 12 and up and their families and
                    friends. [BARCC] works with survivors of all genders, and our goal is
                    to empower survivors to heal and seek justice in ways that are
                    meaningful to them. [They] meet the needs of survivors in crisis and
                    long after, and also assist them as they navigate the health-care,
                    criminal legal, social service, and school systems. (Central Square
                    Cambridge) <br />
                    <i>Phone (24-hour hotline): (617) 492-7273</i>
                </p>
                <p>
                    <Link href="https://medical.mit.edu/services/mental-health-counseling">
                        MIT Mental Health and Counseling
                    </Link>
                    &nbsp;(confidential) works with students to identify, understand, and
                    solve problems, and to help transform that understanding into positive
                    action. [They] see nearly 21 percent of the student body each year,
                    and about 29 percent of students in a given class by the time they
                    graduate. Amongst other services, they can provide evaluations and
                    consultations, brief treatment (counseling/psychotherapy and
                    medication), referrals to non-MIT Medical clinicians and outreach,
                    education, and prevention. <br />
                    <i>Phone: 617-253-2916 or 617-253-4481</i> <br />
                    <i>
                        Walk-in hours: Monday through Friday, 2:00 pm to 4:00 pm (contact
                        for changes related to COVID-19)
                    </i>
                </p>
                <p>
                    <Link href="https://lbgtq.mit.edu/">LGBTQ@MIT</Link> (private)
                    supports numerous student, employee, and alumni groups as well as
                    other departments and initiatives on campus aiming to foster equity,
                    intersectionality, and the continuum of social justice. From
                    individual student support to organizational development and
                    institutional policy advocacy, LBGTQ+ Services' support, programming,
                    and educational endeavors aim to enhance the experiences of MIT's
                    LBGTQ+ community.
                </p>
                <p>
                    <Link href="https://studentlife.mit.edu/s3">
                        Student Support Services
                    </Link>
                    &nbsp;(S3) (private) is a friendly and easily accessible hub of
                    support for MIT students. Whether you are struggling with a PSET due
                    to personal hardship, you feel too ill to take an exam, you are
                    considering taking time away from the Institute, or you just aren't
                    sure who to talk to, S3 can help.<br />
                    <i>Phone: 617-253-4861</i>
                </p>
                <p>Campus Police/EMS <br/> (617) 253-1212 or dial 100 on campus</p>
                <p>
                    <b>Other possibly useful links:</b>
                </p>
                <p>
                    <Link href="https://medical.mit.edu/community/sleep/resources">
                        Sleep/relaxation recordings @ MIT
                    </Link>
                </p>
            </div>
        </main>
    );
}
