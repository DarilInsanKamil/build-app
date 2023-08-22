import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./comp.module.css";
import Cookies from "js-cookie";
import { Logout } from "@/src/utils/logout";
import arrowdrop from '../assets/icon/arrowdrop.svg'
import dash from '../assets/icon/dash.svg'
import signout from '../assets/icon/signout.svg'
import seting from '../assets/icon/seting.svg'


export const ProfilePanel = ({user, image}) => {
  const [display, setDisplay] = useState(false);

  const router = useRouter();
  const handleLogout = () => Logout(router);

  const handlePassword = () => {
    router.push("/change-password");
  };

  const handleDashboard = () => {
    router.push("/dashboard");
  };

  const handleDisplay = () => {
    if (Cookies.get("token") == null) {
      router.push("/login");
      setDisplay(false);
    } else {
      setDisplay(!display);
    }
  };
 
  return (
    <>
      <div className={styles.profileContainer} onClick={handleDisplay}>
        <Image
          src={image}
          alt="profile-pict"
          className={styles.imgprofile}
          draggable="false"
          width={32}
          height={32}
        />
        <p>{user}</p>
        <Image
          src={arrowdrop}
          alt="iconarrow"
          width={10}
          height={6}
        />
      </div>
      <div className={display ? styles.navFloat : styles.navVisible}>
        <section className={styles.password} onClick={handleDashboard}>
          <span>
            <Image
              width={20}
              height={20}
              src={dash}
              alt="dash-icon"
            />
          </span>
          Dashboard
        </section>
        <section onClick={handlePassword}>
          <span>
            <Image
              width={20}
              height={20}
              src={seting}
              alt="setting-icon"
            />
          </span>
          Change Password
        </section>
        <section className={styles.signOut} onClick={handleLogout}>
          <span>
            <Image
              width={20}
              height={20}
              src={signout}
              alt="signout-icon"
            />
          </span>
          Sign Out
        </section>
      </div>
    </>
  );
};
