import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
    title: "PLEASURE at MIT",
    description:
        "Peers Leading Education about Sexuality and Speaking Up for Relationship Empowerment",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <header>
                    <nav>
                        <Link href="/" title="Home">
                            <Image
                                src="/pleasure-at-mit-logo.png"
                                alt="PLEASURE @ MIT Logo"
                                width={165}
                                height={54}
                            />
                        </Link>
                        <div className="heading-links">
                            <Link href="/">About</Link>
                            {/* <Link href="/educators">Educators</Link> */}
                            <Link href="/apply">Application</Link>
                            <Link href="/resources">Resources</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </nav>
                </header>
                {children}

                <footer>
                    <p>©2024 PLEASURE at MIT All rights reserved.</p>
                    {/* <div className="form-container">
                        <h2 className="form-title">Signup For Our Newsletter</h2>
                        <form action="#">
                            <div className="form-group">
                                <label for="first-name" className="form-label">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label for="email" className="form-label">
                                    E-Mail Address:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <p>We never spam your inbox.</p>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-submit">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div> */}
                </footer>
            </body>
        </html>
    );
}
