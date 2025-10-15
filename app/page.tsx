"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Alert from "@/components/Alert";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import CardItem from "@/components/CardItem";
// import { countries } from "@/components/utils";
import LoadingIcons from "react-loading-icons";

export default function Home() {
  const items = [
    "Something amazing is brewing... ✨",
    "Get ready for the future of finance 🚀",
    "Your financial sidekick is almost here 💫",
    "The wait will be worth it, we promise! 🎯",
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
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
      <div className={styles.page}>
        <div className={styles.headerContainer}>
          <Image
            src={"/bg.svg"}
            alt=""
            width={738}
            height={360}
            className={styles.bgImage}
          />
          <Image src={"/p.svg"} width={38} height={87} alt="Phinmon" />
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <p
                style={{
                  color: "#7A5FFF",
                  fontSize: "12px",
                  fontWeight: "500",
                  margin: "0",
                }}
              >
                Coming Soon
              </p>
            </div>
            <div className={styles.mainContentContainer}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                }}
              >
                <span style={{ color: "#7A5FFF" }}>Phinmon </span> is <br />{" "}
                Almost
                <span style={{ color: "#3FE0B6" }}> Here</span>
              </p>
            </div>
            <div className={styles.subContentContainer}>
              <p>
                {" "}
                We're crafting something extraordinary - a financial sidekick
                that will revolutionize how you manage money. Get ready for
                personalized insights, smart notifications, and a banking
                experience like never before.
              </p>
            </div>
            <div className={styles.alertContainer}>
              <AnimatePresence
                onExitComplete={() => {
                  console.log("exit complete");
                }}
                mode="wait"
              >
                {active === 0 && (
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    key={0}
                  >
                    <Alert description={items[active]} />
                  </motion.div>
                )}
                {active === 1 && (
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    key={1}
                  >
                    <Alert description={items[active]} />
                  </motion.div>
                )}
                {active === 2 && (
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    key={2}
                  >
                    <Alert description={items[active]} />
                  </motion.div>
                )}{" "}
                {active === 3 && (
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    key={3}
                  >
                    <Alert description={items[active]} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Countdown Timer */}
            <div className={styles.countdownContainer}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={styles.countdown}
              >
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
                  <span className={styles.countdownLabel}>Days</span>
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
                  <span className={styles.countdownLabel}>Hours</span>
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
                  <span className={styles.countdownLabel}>Minutes</span>
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
                  <span className={styles.countdownLabel}>Seconds</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.goalsContainer}>
          <div className={styles.titleContainer}>
            <p
              style={{
                color: "#7A5FFF",
                fontSize: "12px",
                fontWeight: "500",
                margin: "0",
              }}
            >
              What's Coming
            </p>
          </div>
          <div className={styles.goalsItem}>
            <p>🔐 Bank-level security with a user-friendly interface</p>
            <p>📱 Smart notifications that actually help you save money</p>
            <p>💡 AI-powered insights tailored to your spending habits</p>
            <p>🚀 A financial companion that grows with your goals</p>
          </div>
        </div>
        <div>
          <div className={styles.ideaMaintext}>
            <p>Be the first to know</p>
          </div>
          <div className={styles.ideaSubtext}>
            <p>
              Get notified when Phinmon launches and be among the first to
              experience the future of personal finance.
            </p>
          </div>

          <motion.div
            className={styles.notifyForm}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.inputContainer}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Enter your email address"
                style={{ ...(isMobileIOS && { fontSize: "16px" }) }}
              />
            </div>
            <div className={styles.buttonContainer}>
              <motion.button
                className={styles.button}
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
                  "Notify Me"
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.socialContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className={styles.socialText}>Follow us for updates</p>
            <div className={styles.socialLinks}>
              <motion.a
                href="https://twitter.com/phinmon"
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
                href="https://instagram.com/phinmon"
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/phinmon"
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
      </div>
      {showModal && (
        <div className={styles.modalContainer}>
          <div className={styles.modalItemContainer}>
            <Image
              src={"/success.svg"}
              alt="svg"
              width={600}
              height={462}
              className={styles.modalImage}
            />
            <p className={styles.modalTopText}>You're on the list! 🎉</p>
            <p className={styles.modalText}>
              We'll notify you as soon as Phinmon is ready to launch. Get ready
              for something amazing! ✨
            </p>
            <div
              className={styles.modalButtonContainer}
              onClick={handleCloseModal}
            >
              <Image src={"/cancel.svg"} alt="cancel" width={50} height={50} />
            </div>
            <div className={styles.pContainer}>
              <Image src={"/p-bg.svg"} alt="p" width={360} height={600} />
            </div>
            <div className={styles.pContainer2}>
              <Image src={"/ellipse.svg"} alt="p" width={360} height={600} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
