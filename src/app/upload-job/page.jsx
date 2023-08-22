"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { handleChangeFromAddJob, handleSubmitFromAddJob } from "../../utils/form-add-job";
import styles from './add-job.module.css'

export default function FormJobVacancy() {
    const router = useRouter()
    const [input, setInput] = useState({
        title: '',
        job_description: '',
        job_qualification: '',
        job_type: '',
        job_tenure: '',
        job_status: '',
        company_name: '',
        company_image_url: '',
        company_city: '',
        salary_min: '',
        salary_max: ''
    })

    const handleChange = (event) => handleChangeFromAddJob(event, setInput)
    const handleSubmit = (event) => handleSubmitFromAddJob(event, input, router, setInput)

    return (

            <div className={styles.container}>
                <div className={styles.uploadWrapper}>
                    <h3>Upload Job</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.jobtitle}>
                            <label className={styles.titlelabel}>
                                Job Title
                            </label>
                            <input className={styles.titleinput} type="text" onChange={handleChange} name="title" value={input.title} />
                        </div>
                        <div className={styles.imagecomp}>
                            <img src={input.company_image_url || null} alt={input.company_name || null} width={70} height={70} />
                            <div className={styles.inputGroup}>
                                <label className={styles.imagelabel}>
                                    Image URL Company
                                </label>
                                <input className={styles.imageinput} type="text" onChange={handleChange} name="company_image_url" value={input.company_image_url} required />
                            </div>
                        </div>
                        <div className={styles.colContainer}>

                            <div className={styles.col}>
                                <div className={styles.compname}>
                                    <label className={styles.namelabel}>
                                        Company Name
                                    </label>
                                    <input className={styles.nameinput} type="text" onChange={handleChange} name="company_name" value={input.company_name} required />
                                </div>
                                <div className={styles.salmin}>
                                    <label className={styles.salminlabel}>
                                        Salary Minimal
                                    </label>
                                    <input className={styles.salmininput} type="number" onChange={handleChange} name="salary_min" value={input.salary_min} required />
                                </div>
                                <div className={styles.jobtype}>
                                    <label className={styles.typelabel}>
                                        Job Type
                                    </label>
                                    <select className={styles.typeinput} name="job_tenure" id="tenure" onChange={handleChange} value={input.job_tenure} required>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Intern">Intern</option>
                                    </select>
                                </div>
                                <div className={styles.jobdesc}>
                                    <label className={styles.desclabel}>
                                        Job Description
                                    </label>
                                    <textarea className={styles.descinput} type="text" onChange={handleChange} name="job_description" value={input.job_description} required></textarea>
                                </div>
                            </div>
                            <div className={styles.col2}>
                                <div className={styles.compcity}>
                                    <label className={styles.citylabel}>
                                        Company City
                                    </label>
                                    <input className={styles.cityinput} type="text" onChange={handleChange} name="company_city" value={input.company_city} required />
                                </div>
                                <div className={styles.salmax}>
                                    <label className={styles.salmaxlabel}>
                                        Salaray Maximal
                                    </label>
                                    <input className={styles.salmaxinput} type="number" onChange={handleChange} name="salary_max" value={input.salary_max} required/>
                                </div>
                                <div className={styles.jobtenure}>
                                    <label className={styles.tenurelabel}>
                                        Job Tenure
                                    </label>
                                    <select className={styles.tenureinput}  name="job_type" id="type" onChange={handleChange} value={input.job_type} required>
                                        <option value="WFH">WFH</option>
                                        <option value="On-Site">On-Site</option>
                                        <option value="WFA">WFA</option>
                                    </select>
                                </div>
                                <div className={styles.jobqual}>
                                    <label className={styles.quallabel}>
                                        Job Qualification
                                    </label>
                                    <textarea className={styles.qualinput} type="text" onChange={handleChange} name="job_qualification" value={input.job_qualification} required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statusWrapper}>
                            <p>Job Status</p>
                            <div className={styles.status1}>
                                <input type="radio" onChange={handleChange} name="job_status" value='1' />
                                <label>
                                    Tersedia
                                </label>
                            </div>
                            <div className={styles.status1}>
                                <input type="radio" onChange={handleChange} name="job_status" value='0' />
                                <label>
                                    Tidak tersedia
                                </label>
                            </div>
                            <button className={styles.btnSub} type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
