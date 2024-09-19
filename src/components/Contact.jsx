import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion"
import { useTranslation } from "react-i18next"


const TEMPLATE_ID = 'template_iyi7vik'
const SERVICE_ID = 'service_daz3qy1'
const PUBLIC_KEY = 'dKG7BpZLqVrW7QP10'
const MY_EMAIL = 'guguzim.anacleto@gmail.com'

const Contact = () => {
  const { t } = useTranslation();
  const defaultForm = {
    name: '',
    email: '',
    message: ''
  }
  const formRef = useRef()
  const [form, setForm] = useState(defaultForm)
  const [loading, setLoading] = useState(false)

  function handleChange({ target }) {
    const { name, value } = target;

    setForm({ ...form, [name]: value })
  }

  function validForm(form) {
    if (form.name === null || form.name === '') {
      return false
    }
    if (form.email === null || form.email === '') {
      return false
    }
    if (form.message === null || form.message === '') {
      return false
    }
    return true
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validForm(form)) {
      alert(t('invalid-fields'))
      return
    }

    setLoading(true)

    const informationsToMountEmail = {
      from_name: form.name,
      to_name: 'Gustavo Anacleto',
      from_email: form.email,
      to_email: MY_EMAIL,
      message: form.message
    }

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      informationsToMountEmail,
      PUBLIC_KEY
    ).then(() => {
      alert(t('email-success'))
      setForm(defaultForm);
    })
      .catch(() => alert(t('email-error')))
      .finally(() => setLoading(false))

  }
  return (
    <div className="xl:mt-12 xl:flex flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.headText')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.subText')}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="tex-white font-medium mb-4">{t('contact.label-name')}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.input-name')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="tex-white font-medium mb-4">{t('contact.label-email')}</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.input-email')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="tex-white font-medium mb-4">{t('contact.label-message')}</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.input-message')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? t('button-sending') : t('button-send')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")