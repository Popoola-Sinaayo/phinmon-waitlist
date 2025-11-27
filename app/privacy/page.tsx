"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <motion.nav
        className={styles.navbar}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <Image src={"/p.svg"} width={32} height={32} alt="Phinmon" />
            <span className={styles.logoText}>Phinmon</span>
          </Link>
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Privacy Policy Content */}
      <main className={styles.content}>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {currentDate}</p>

          <div className={styles.section}>
            <p className={styles.intro}>
              <strong>Operated by:</strong> EvergreeneSoftware LTD
              <br />
              <strong>Contact:</strong>{" "}
              <a href="mailto:hello@evergreenesoftware.com">
                hello@evergreenesoftware.com
              </a>
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p>
              Phinmon is a personal finance tracking application that helps users
              connect their bank accounts and get AI-powered insights into their
              spending.
            </p>
            <p>
              Your privacy is important to us, and we follow the Nigerian Data
              Protection Regulation (NDPR) and global best practices.
            </p>
            <p>
              By using Phinmon, you agree to the practices described in this
              Privacy Policy.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <h3 className={styles.subsectionTitle}>A. Information you provide</h3>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>

            <h3 className={styles.subsectionTitle}>
              B. Information we collect through Mono
            </h3>
            <p>
              When you connect your bank account, we receive financial information
              such as:
            </p>
            <ul>
              <li>Transaction history</li>
              <li>Account name and number</li>
              <li>Financial balances</li>
            </ul>
            <p>We do not store your bank login credentials.</p>

            <h3 className={styles.subsectionTitle}>
              C. Automatically collected information
            </h3>
            <ul>
              <li>Device type</li>
              <li>Usage logs</li>
              <li>App interaction data</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide personal finance tracking</li>
              <li>Generate AI insights and analytics</li>
              <li>Improve app performance</li>
              <li>Communicate updates and support messages</li>
              <li>Protect against fraud or misuse</li>
            </ul>
            <p>
              <strong>We never sell your personal data.</strong>
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Legal Basis for Processing
            </h2>
            <p>We process your information based on:</p>
            <ul>
              <li>Your consent</li>
              <li>
                Our legitimate interest in providing the Phinmon service
              </li>
              <li>Compliance with applicable law</li>
              <li>
                Contractual necessity (providing the service you requested)
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. How We Share Your Data</h2>
            <h3 className={styles.subsectionTitle}>
              A. Third-party service providers
            </h3>
            <p>We currently share necessary data with:</p>
            <p>
              <strong>Mono Technologies</strong> – for bank connection and financial
              data retrieval.
            </p>
            <p>
              Mono only receives the information required to link your bank account
              securely.
            </p>

            <h3 className={styles.subsectionTitle}>
              B. Regulators or law enforcement
            </h3>
            <p>
              We may share data if required by law or to protect our legal rights.
            </p>
            <p>
              <strong>
                We do not share your information with advertisers or sell it to
                third parties.
              </strong>
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Data Security</h2>
            <p>
              We use industry-standard security measures including encryption,
              access controls, and secure hosting.
            </p>
            <p>
              However, no system is 100% secure. We take reasonable steps to
              protect your data but cannot guarantee absolute security.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Data Retention</h2>
            <p>
              We keep your personal data only as long as necessary to provide our
              service or as required by law.
            </p>
            <p>You may request deletion at any time.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Rights (NDPR)</h2>
            <p>Under the NDPR, you have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
              <li>Object to certain processing</li>
              <li>Request data portability</li>
            </ul>
            <p>
              To exercise these rights:{" "}
              <a href="mailto:hello@evergreenesoftware.com">
                hello@evergreenesoftware.com
              </a>
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Children&apos;s Privacy</h2>
            <p>Phinmon is not intended for users under 18.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will update the &ldquo;Last Updated&rdquo; date.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact Us</h2>
            <p>For any questions:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@evergreenesoftware.com">
                hello@evergreenesoftware.com
              </a>
            </p>
            <p>
              <strong>Company:</strong> EvergreeneSoftware LTD
            </p>
          </div>

          <div className={styles.backLink}>
            <Link href="/" className={styles.backButton}>
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

