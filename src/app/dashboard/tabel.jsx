import React, { useState } from "react";
import { LoadingBox } from "../../components/loadingcomp";
import { tandaPemisahTitik } from "../../utils/convert";
import { TabelUi } from "./tabelui";

const getAllData = async () => {
  const API = process.env.MAIN_API_URL;
  const res = await fetch(API);
  return res.json();
};

export const Tabelcomp = async () => {
  const [trigger, setTrigger] = useState(false)

  let datas = await getAllData()
  let data = datas.data;
  let loading = !datas;
  return (
    <tbody>
      {loading && <LoadingBox />}
      {data &&
        data.map((res, idx) => (
          <TabelUi
            key={idx}
            title={res.title}
            company_name={res.company_name}
            job_type={res.job_type}
            tenure={res.job_tenure}
            salary_min={tandaPemisahTitik(res.salary_min)}
            salary_max={tandaPemisahTitik(res.salary_max)}
            job_status={res.job_status == 1 ? "Tersedia" : "Tidak Tersedia"}
            id={res.id}
            // handleDelete={handleDelete}
          />
        ))}
    </tbody>
  );
};
