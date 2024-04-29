import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";

export default function Header() {

       const t = useTranslations('Navigation')

       return (
              <header>
                     <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <Link href={'/'}>{t('home')}</Link>
                            <LocalSwitcher/>
                     </nav>
              </header>
       )
}
