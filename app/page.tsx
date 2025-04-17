"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Alert from "@/components/Alert";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CardItem from "@/components/CardItem";
import { countries } from "@/components/utils";
import LoadingIcons from "react-loading-icons";

export default function Home() {
  const items = [
    "Another day, another deduction 😮‍💨",
    "That was a need, right? Not a want?",
    "Who’s rich again? Youuu 💰💃",
    "Okay, money magnet! 😎 Your balance looking better.",
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [activeState, setActiveState] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

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
      setCountry(data.country_name);
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
                Introducing Phinmon
              </p>
            </div>
            <div className={styles.mainContentContainer}>
              <p
                style={{
                  fontWeight: "700",
                  margin: "0",
                }}
              >
                Keeps you <span style={{ color: "#7A5FFF" }}>rich-ish </span>{" "}
                while <br /> throwing{" "}
                <span style={{ color: "#3FE0B6" }}>financial shade</span>
              </p>
            </div>
            <div className={styles.subContentContainer}>
              <p>
                {" "}
                The money app that lowkey roasts you when you overspend. Get in
                line 👀
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
          </div>
        </div>
        <div>
          <div className={styles.ideaMaintext}>
            <p>Do you like this idea ?</p>
          </div>
          <div className={styles.ideaSubtext}>
            <p>
              Join the waitlist for Phinmon – the only app that understands your
              soft life goals and your broke days.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <CardItem
              text="Yes, I’m hyped"
              onClick={(text) => setActiveState(text)}
              active={activeState === "Yes, I’m hyped"}
            />
            <CardItem
              text="Nah, I’ll chill for now"
              onClick={(text) => setActiveState(text)}
              active={activeState === "Nah, I’ll chill for now"}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email address"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={styles.select}
            >
              <option value="" disabled>
                Select your country
              </option>
              {countries.map((c) => {
                return (
                  <option key={c} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              Submit
              <LoadingIcons.TailSpin
                width={20}
                height={20}
                stroke={"#FFFFFF"}
                // style={{ marginLeft: "10px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
