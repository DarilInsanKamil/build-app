"use client";
import styles from "./comp.module.css";
import { ProfilePanel } from "./profile";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from '../assets/icon/logo.svg'
import person from '../assets/icon/person.svg'

export const HeaderBar = () => {
  const [trigger, setTrigger] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    user: "Login",
    image: person,
  });

  useEffect(() => {
    const fetchDataFromCookies = () => {
      const token = Cookies.get("token");
      if (token) {
        setData({
          user: Cookies.get("user"),
          image: Cookies.get("image"),
        });
      } else {
        // If user is not logged in, reset the data to default values
        setData({
          user: "Login",
          image: person,
        });
      }
    };

    fetchDataFromCookies(); // Fetch data on the initial render
  }, []);

  const handleNav = () => {
    let token = Cookies.get("token") || null;
    if (token !== null) {
      router.push("/upload-job");
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className={styles.headerContainer}>
      <section className={styles.logo}>
        <Image
          src={logo}
          alt="logo"
          width={72}
          height={52}
          priority={true}
        />
      </section>
      <section className={styles.nav}>
        <ul>
          <li onClick={() => router.push("/job-vacancy")}>Find Job</li>
          <li onClick={handleNav}>Upload Job</li>
          <li onClick={() => router.push("/about-us")}>About Us</li>
        </ul>
      </section>
      <section className={styles.profile}>
        <ProfilePanel user={data.user} image={data.image || person} />
      </section>
    </nav>
  );
};
