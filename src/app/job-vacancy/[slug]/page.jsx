import React, { Suspense } from "react";
import Image from "next/image";
import { LoadingBox } from "../../../components/loadingcomp";
import styles from "../style/detail-page.module.css";
import { splitter, tandaPemisahTitik } from "../../../utils/convert";

const getData = async (params) => {
  const res = await fetch(
    `https://dev-example.sanbercloud.com/api/job-vacancy/${params}`
  );
  return res.json();
};

export default async function DetailJob({ params }) {
  const data = await getData(params.slug);

  return (
    <Suspense fallback={<LoadingBox />}>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.card}>
            <div className={styles.comp_card}>
              <Image
                src={data.company_image_url}
                alt={data.title}
                height={60}
                width={60}
                className={styles.image_comp}
              />
              <div>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.comp_name}>{data.company_name}</p>
              </div>
            </div>
            <div>
              <button>Lamar</button>
              <button>Share</button>
              <button>Simpan</button>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <h4>Job Location</h4>
              <p>{data.company_city}</p>
            </div>
            <div>
              <h4>Job Type</h4>
              <p>{data.job_type}</p>
            </div>
            <div>
              <h4>Work Type</h4>
              <p>{data.job_tenure}</p>
            </div>
            <div>
              <h4>Salary</h4>
              <p>
                IDR. {tandaPemisahTitik(data.salary_min)} -{" "}
                {tandaPemisahTitik(data.salary_max)}
              </p>
            </div>
          </div>
          <div className={styles.cardJob}>
            <div>
              <h3>Job Description</h3>
              <p>{data.job_description}</p>
            </div>
            <div className={styles.job_qual}>
              <h3>Job Qualification</h3>
              {splitter(data.job_qualification).map((res, idx) => {
                return (
                  <ul key={idx}>
                    <li>{res}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <h3>Pekerjaan Lainnya</h3>
        </div>
      </div>
    </Suspense>
  );
}
