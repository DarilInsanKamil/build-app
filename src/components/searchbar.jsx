"use client";
import styles from "./comp.module.css";

export const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchWrapper} style={{ color: "black" }}>
      <p className={styles.titleSearch}>Jelajahi Pilihan Karir</p>
      <p className={styles.descSearch}>
        Temukan lowongan pekerjaan di berbagai industri dan tingkat pengalaman.
        Cari pekerjaan yang sesuai dengan keahlian Anda dan mulailah perjalanan
        karir Anda
      </p>
      <form className={styles.searchContainer} onSubmit={onSearch}>
        <input
          className={styles.inputWrapper}
          type="text"
          placeholder="search"
        />
        <button className={styles.btnsearch}>Search</button>
      </form>
    </div>
  );
};
