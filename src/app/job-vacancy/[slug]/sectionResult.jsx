import React from "react";
import useSWR from "swr";
import { BoxVacancy } from "../box-vacancy";
import { LoadingBox } from "../../../components";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SectionResult({ query }) {
  const { data, error } = useSWR(
    `https://dev-example.sanbercloud.com/api/job-vacancy`,
    fetcher
  );
  const datas = data.data;
  const result = datas.filter((a) => {
    return a.title.toLowerCase().includes(query.toLocaleLowerCase());
  });
  var loading = !data && !error;
  return (
    <>
      {result.length === 0 ? (
        <>
          {loading && <LoadingBox />}
          <p>Data tidak ada..</p>
        </>
      ) : (
        <>
          {loading && <LoadingBox />}
          {result &&
            result.map((res, idx) => (
              <BoxVacancy
                navigation={`./job-vacancy/${res.id}`}
                company_image_url={res.company_image_url}
                title={res.title}
                key={idx}
                company_name={res.company_name}
                company_city={res.company_city}
                tenure={res.job_tenure}
                salary_min={res.salary_min}
                salary_max={res.salary_max}
                updated_at={res.updated_at}
                job_description={res.job_description}
                job_type={res.job_type}
                job_status={res.job_status}
              />
            ))}
        </>
      )}
    </>
  );
}
