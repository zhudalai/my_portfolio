import { useI18n } from '../i18n/I18nContext'

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-8 px-4 border-t border-dark-border">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
        <p>{t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  )
}

export default Footer
