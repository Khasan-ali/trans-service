import { useTranslations } from "next-intl";

export default function Footer() {

       const t = useTranslations('Footers')

       return (
              <footer>
                     <p>{t('copyright')}</p>
              </footer>
       )
}
