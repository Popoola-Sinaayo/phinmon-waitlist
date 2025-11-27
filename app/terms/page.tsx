"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function TermsAndConditions() {
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

      {/* Terms and Conditions Content */}
      <main className={styles.content}>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: {currentDate}</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p>
              These Terms & Conditions govern your use of the Phinmon mobile app
              and website.
            </p>
            <p>By using the app, you agree to these terms.</p>
            <p>Phinmon is a product of EvergreeneSoftware LTD.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. What Phinmon Does</h2>
            <p>Phinmon allows you to:</p>
            <ul>
              <li>Connect bank accounts using Mono</li>
              <li>Track personal finances</li>
              <li>Receive AI-powered financial insights</li>
            </ul>
            <p>
              Phinmon does not provide banking, lending, or financial advisory
              services.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Your Account</h2>
            <p>You must:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Be at least 18 years old</li>
              <li>Keep your login details secure</li>
              <li>Use the app for personal, lawful purposes only</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Bank Connection via Mono</h2>
            <p>When you connect your bank account:</p>
            <ul>
              <li>The connection is powered by Mono</li>
              <li>Mono securely handles your banking credentials</li>
              <li>Phinmon only receives read-only financial data</li>
              <li>We cannot and do not move money on your behalf</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Upload harmful content</li>
              <li>
                Attempt to hack, reverse-engineer, or disrupt the app
              </li>
              <li>Use the service for fraud or illegal activities</li>
              <li>Misrepresent your identity or account information</li>
            </ul>
            <p>
              We may suspend or terminate accounts that violate these terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Future Payments and Transactions
            </h2>
            <p>Phinmon does not currently process payments.</p>
            <p>
              If we later introduce payment features, separate terms will be
              provided.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Intellectual Property</h2>
            <p>
              All content, branding, and software belong to EvergreeneSoftware
              LTD.
            </p>
            <p>You may not copy, modify, resell, or distribute the app.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>8. AI-Generated Insights</h2>
            <p>Phinmon uses AI to analyze your financial data.</p>
            <p>
              Results may not always be perfect, and you should not rely solely
              on them for financial decisions.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Service Availability</h2>
            <p>We aim for 24/7 availability but do not guarantee:</p>
            <ul>
              <li>uninterrupted access</li>
              <li>error-free operation</li>
              <li>that the platform will always be secure</li>
            </ul>
            <p>
              We may update, improve, or remove features at any time.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Limitation of Liability</h2>
            <p>We are not responsible for:</p>
            <ul>
              <li>Losses caused by inaccurate financial data</li>
              <li>Downtime or technical issues</li>
              <li>Losses resulting from your misuse of the app</li>
              <li>Third-party service outages (e.g., Mono)</li>
            </ul>
            <p>
              Our maximum liability is limited to the amount you have paid to
              use the service (currently ₦0).
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Termination</h2>
            <p>You may stop using Phinmon at any time.</p>
            <p>
              We may suspend or terminate accounts that violate our policies or
              pose security risks.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Changes to These Terms</h2>
            <p>
              We may update these Terms occasionally. Continued use of the app
              means you accept the updated Terms.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Contact</h2>
            <p>For support or questions:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@evergreenesoftware.com">
                hello@evergreenesoftware.com
              </a>
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

