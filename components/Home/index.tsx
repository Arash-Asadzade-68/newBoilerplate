import React from 'react'
import { useTranslation, Translation } from 'react-i18next'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div>
      <Translation>
        {
          (t, { i18n }) => <span>{t('enterMobile')}</span>
        }
      </Translation>
      <div onChange={changeLanguage}>
        <input type="radio" value="GB" name="language" defaultChecked /> GB

      <input type="radio" value="FR" name="language" /> FR
      <input type="radio" value="IT" name="language" /> IT
      <input type="radio" value="DE" name="language" /> DE
      </div>
    </div>

  )
}

export default LanguageSelector