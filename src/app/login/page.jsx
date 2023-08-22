"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { handleChangeLogin, handleSubmitLogin } from '../../utils/form-login'
import styles from './Login.module.css'
import Link from "next/link"
import Image from "next/image"
import eye from '../../assets/icon/fluent_eye.svg'
import eyeoff from '../../assets/icon/fluent_eye-off.svg'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const [isPassword, setIsPassword] = useState(true)
  const togglePassword = () => {
    setIsPassword((prev) => !prev);
  };
  
  const handleFormChange = (event) => handleChangeLogin(event, input, setInput)
  const handleFormSubmit = (event) => handleSubmitLogin(event, input, setError, router)
  
  return (
    <div className={styles.form_login_layout}>
      <form onSubmit={handleFormSubmit} className={styles.form_card}>
        <h2 className={styles.title}>Login here</h2>
        <p className={styles.instruction}>New user? <Link href='/register' className={styles.create_acc}>Create an account</Link></p>
        <div className={styles.form_field}>
          {
            error != '' ? <section className={styles.error_field}>
              <p>Incorrect username or password.</p>
            </section> : <></>
          }

          <label className={styles.label_field}>
            Email
          </label>
          <input className={styles.email_field} type="email" name="email" value={input.email} onChange={handleFormChange} required />
          <label className={styles.label_field}>
            Password
          </label>
          <section className={styles.password_field}>
            <input className={styles.password} type={isPassword ? "password" : "text"} name="password" value={input.password} onChange={handleFormChange} autoComplete="off" required />
            {
              isPassword ? <Image src={eye} alt="icon-pass" width={24} height={24} onClick={togglePassword} /> : <Image src={eyeoff} width={24} height={24} alt="icon-pass" onClick={togglePassword}/>
            }
          </section>
          
          <button type="submit" className={styles.button_login}>Login</button>
          <p className={styles.terms}>By signing in you accept the <Link href="/" className={styles.create_acc}>Terms of Use and acknowledge the Privacy Policy and Cookie Policy. </Link></p>
        </div>
      </form>
    </div>
  )
}