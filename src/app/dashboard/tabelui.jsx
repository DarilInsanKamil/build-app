import styles from "@/styles/dashboard.module.css";

export const TabelUi = ({
  title,
  company_name,
  job_status,
  salary_min,
  salary_max,
  job_type,
  tenure,
  handleDelete,
  id,
}) => {

  const onDeleteClick = () => {
    handleDelete(id); // Call the handleDelete function with the 'id' value
  };

  return (
    <tr className={styles.titlerow}>
      <td className={styles.bodyrow}>{title}</td>
      <td className={styles.bodyrow}>{company_name}</td>
      <td className={styles.bodyrow}>{job_type}</td>
      <td className={styles.bodyrow}>
        {tenure} {id}
      </td>
      <td className={styles.bodyrow}>
        IDR. {salary_min} - IDR. {salary_max}
      </td>
      <td className={styles.bodyrow}>{job_status}</td>
      <td className={styles.bodyrow}>
        <a className={styles.editbtn}>Edit</a>
        <a className={styles.deletebtn} onClick={onDeleteClick}>
          Delete
        </a>
      </td>
    </tr>
  );
};
