import styles from "./loadingbox.module.css";

export const LoadingBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <div className={styles.image}></div>
        <ul className={styles.textcontainer}>
          <li className={styles.title}></li>
          <li className={styles.comp_name}></li>
        </ul>
      </div>
      <div className={styles.job_desc}></div>
      <ul className={styles.box3}>
        <li className={styles.boxli}></li>
        <li className={styles.boxli}></li>
      </ul>
      <ul className={styles.box4}>
        <li className={styles.boxli}></li>
        <li className={styles.boxli}></li>
        <li className={styles.button}></li>
      </ul>
    </div>
  );
};
