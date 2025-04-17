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
  const [isLoading, setIsLoading] = useState(false);
  const [activeState, setActiveState] = useState("Yes, I’m hyped");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const saveDetails = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/save-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email ?? "placeholder@test.com",
          agree: activeState === "Yes, I’m hyped" ? "Yes" : "No",
          country: country ?? "Moon",
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
                Meet <span style={{ color: "#7A5FFF" }}>Phinmon </span> <br />{" "}
                Your Financial
                <span style={{ color: "#3FE0B6" }}> Sidekick</span>
              </p>
            </div>
            <div className={styles.subContentContainer}>
              <p>
                {" "}
                Phinmon links to your bank, peeps your alerts, and turns them
                into vibey, personalized notifications. It’s like having a
                money-savvy bestie that calls you out (lovingly) when you
                overspend — but never touches your cash.
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
              Phinmon Goals
            </p>
          </div>
          <div className={styles.goalsItem}>
            <p>Link your bank safely with zero stress and all the vibes.</p>
            <p>Get alerts that match your mood (and your money).</p>
            <p>
              Get smart about spending with advice that actually makes sense
            </p>
            <p>
              Keep your money untouched because we don’t hold or move a thing.
            </p>
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
              image={
                <Image src={"/yes.svg"} alt="yes" width={80} height={80} />
              }
            />
            <CardItem
              text="Nah, I’ll chill for now"
              onClick={(text) => setActiveState(text)}
              active={activeState === "Nah, I’ll chill for now"}
              image={<Image src={"/no.svg"} alt="yes" width={80} height={80} />}
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
            <button className={styles.button} onClick={saveDetails}>
              Submit
              {isLoading && (
                <LoadingIcons.TailSpin
                  width={20}
                  height={20}
                  stroke={"#FFFFFF"}
                  // style={{ marginLeft: "10px" }}
                />
              )}
            </button>
          </div>
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
            <p className={styles.modalTopText}>
              You’re in the lineup – we see you 🙌
            </p>
            <p className={styles.modalText}>
              The queue’s moving… slowly. But don’t worry, we’ll hit you up when
              it’s your time to shine 😎
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
