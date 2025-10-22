"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { resolvedTheme } = useTheme();

  // Use resolvedTheme for any theme-specific logic if needed
  console.log("Current theme:", resolvedTheme);

  const features = [
    {
      icon: "🤖",
      title: "AI That Gets You",
      description:
        "Your personal finance guru that actually understands your vibe and gives you insights that make sense (no boring financial jargon, we promise!)",
    },
    {
      icon: "🏦",
      title: "All Your Money, One Place",
      description:
        "Connect all your accounts safely and see everything in one clean dashboard. No more switching between 10 different apps!",
    },
    {
      icon: "📊",
      title: "Spending Patterns That Slap",
      description:
        "Discover where your money actually goes and find sneaky ways to save more. Your future self will thank you! 💸",
    },
  ];

  const testimonials = [
    {
      name: "Ayo",
      content:
        "The potential of Phinmon's AI-powered financial insights is incredible. I can see how it could revolutionize personal finance management and help people make smarter money decisions.",
    },
    {
      name: "Favour",
      content:
        "This app has the potential to be a game-changer in the fintech space. The combination of AI insights and bank integration could transform how people interact with their finances.",
    },
  ];

  useEffect(() => {
    // Feature rotation effect can be added here if needed
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isMobileIOS, setisMobileIOS] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date (you can adjust this)
  const launchDate = new Date("2025-12-31T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const getIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org/?format=json");
      const data = await response.json();

      return data.ip;
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryFromIp = async (ip: string) => {
    try {
      const response = await fetch(
        `https://geolocation-db.com/json/b570c4c0-e375-11ef-9827-cfbfb458272c/${ip}`
      );
      const data = await response.json();
      console.log(data);
      // Country detection for analytics (not used in coming soon page)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const ip = await getIP();
      if (ip) {
        await getCountryFromIp(ip);
      }
    };
    fetchData();
  }, []);

  const notifyMe = async () => {
    if (!email) return;

    try {
      setIsLoading(true);
      const res = await fetch("/api/save-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          agree: "Yes",
          country: "Coming Soon",
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data.message === "Data saved to sheet") {
        setShowModal(true);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleCloseModal = () => {
    window.location.reload();
  };

  useEffect(() => {
    const isMobileIOS =
      /iPhone|iPad|iPod/.test(navigator.userAgent) &&
      /Mobile/.test(navigator.userAgent);
    setisMobileIOS(isMobileIOS);
  }, []);

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
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image src={"/p.svg"} width={32} height={32} alt="Phinmon" />
            <span className={styles.logoText}>Phinmon</span>
          </motion.div>
          <div className={styles.navLinks}>
            <motion.a
              href="#features"
              className={styles.navLink}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#testimonials"
              className={styles.navLink}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Reviews
            </motion.a>
            <motion.a
              href="#waitlist"
              className={styles.navLink}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Join Waitlist
            </motion.a>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>
              <span className={styles.badgeText}>🚀 Coming Soon</span>
            </div>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your AI-Powered
              <motion.span
                className={styles.gradientText}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {" "}
                Money
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Bestie
              </motion.span>
            </motion.h1>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect your accounts, get AI insights that actually make sense,
              and finally understand your money like never before. Phinmon is
              about to make managing your finances actually fun (yes, really!
              🎉).
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              className={styles.countdownContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className={styles.countdownLabel}>Launching in:</p>
              <div className={styles.countdown}>
                <div className={styles.countdownItem}>
                  <motion.div
                    key={timeLeft.days}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={styles.countdownNumber}
                  >
                    {timeLeft.days}
                  </motion.div>
                  <span className={styles.countdownText}>Days</span>
                </div>
                <div className={styles.countdownItem}>
                  <motion.div
                    key={timeLeft.hours}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={styles.countdownNumber}
                  >
                    {timeLeft.hours}
                  </motion.div>
                  <span className={styles.countdownText}>Hours</span>
                </div>
                <div className={styles.countdownItem}>
                  <motion.div
                    key={timeLeft.minutes}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={styles.countdownNumber}
                  >
                    {timeLeft.minutes}
                  </motion.div>
                  <span className={styles.countdownText}>Minutes</span>
                </div>
                <div className={styles.countdownItem}>
                  <motion.div
                    key={timeLeft.seconds}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={styles.countdownNumber}
                  >
                    {timeLeft.seconds}
                  </motion.div>
                  <span className={styles.countdownText}>Seconds</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.dashboardPreview}>
              <div className={styles.dashboardCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>AI Insights</div>
                  <div className={styles.cardStatus}>Live</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.insightItem}>
                    <span className={styles.insightIcon}>💰</span>
                    <span className={styles.insightText}>
                      You could save more this month (no cap!)
                    </span>
                  </div>
                  <div className={styles.insightItem}>
                    <span className={styles.insightIcon}>🚀</span>
                    <span className={styles.insightText}>
                      Crypto move detected 📊
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresContent}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Why Phinmon Hits Different</h2>
            <p className={styles.sectionDescription}>
              The features that&apos;ll make you actually excited about managing
              your money
            </p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>The Hype is Real</h2>
            <p className={styles.sectionDescription}>
              People are already talking about how Phinmon is about to change
              the game
            </p>
          </motion.div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className={styles.waitlist}>
        <div className={styles.waitlistContent}>
          <motion.div
            className={styles.waitlistHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.waitlistTitle}>
              Get Early Access (It&apos;s Free!)
            </h2>
            <p className={styles.waitlistDescription}>
              Join the waitlist and be among the first to experience the future
              of personal finance. Plus, early birds get a sweet discount when
              we launch! 🎉
            </p>
          </motion.div>

          <motion.div
            className={styles.waitlistForm}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.formContainer}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                placeholder="Enter your email address"
                style={{ ...(isMobileIOS && { fontSize: "16px" }) }}
              />
              <motion.button
                className={styles.submitButton}
                onClick={notifyMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!email || isLoading}
              >
                {isLoading ? (
                  <LoadingIcons.TailSpin
                    width={20}
                    height={20}
                    stroke={"#FFFFFF"}
                  />
                ) : (
                  "I'm In! 🚀"
                )}
              </motion.button>
            </div>
            <p className={styles.formNote}>
              🔒 Your email is safe with us. No spam, just the good stuff!
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.socialContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className={styles.socialText}>Follow us for the latest tea ☕</p>
            <div className={styles.socialLinks}>
              <motion.a
                href="https://x.com/phinmonhq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/phinmon/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image src={"/p.svg"} width={24} height={24} alt="Phinmon" />
            <span>Phinmon</span>
          </div>
          <p className={styles.footerText}>
            © 2024 Phinmon. All rights reserved. Making money management
            actually fun, one insight at a time.
          </p>
        </div>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className={styles.modalContent}>
              <div className={styles.modalIcon}>🎉</div>
              <h3 className={styles.modalTitle}>You&apos;re on the list!</h3>
              <p className={styles.modalDescription}>
                We&apos;ll notify you as soon as Phinmon is ready to launch. Get
                ready for something amazing! ✨
              </p>
              <motion.button
                className={styles.modalButton}
                onClick={handleCloseModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Awesome!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
