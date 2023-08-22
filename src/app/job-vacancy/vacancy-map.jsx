import { LoadingBox } from "../../components";
import { BoxVacancy } from "./box-vacancy";
import useSWR from "swr";
import {usePathname, useRouter} from 'next/navigation'

const fetcher = (url) => fetch(url).then((res) => res.json());
export const Vacancy = () => {

  const router = useRouter();
  const pathname = usePathname();

  const { data, error } = useSWR(
    `https://dev-example.sanbercloud.com/api/job-vacancy`,
    fetcher
  );
  let loading = !data && !error;
  return (
    <>
      {loading && <LoadingBox/>}
      { data &&
        data.data.map((res, idx) => (
          <BoxVacancy
            navigation={`/job-vacancy/${res.id}`}
            key={idx}
            company_image_url={res.company_image_url}
            title={res.title}
            company_name={res.company_name}
            company_city={res.company_city}
            tenure={res.job_tenure}
            salary_min={res.salary_min}
            salary_max={res.salary_max}
            updated_at={res.updated_at}
            job_description={res.job_description.split("\n")}
            job_type={res.job_type}
            job_status={res.job_status}
          />
        ))}
    </>
  );
};
