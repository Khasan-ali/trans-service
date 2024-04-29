import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import cls from './styles.module.css'
import Image from "next/image";
import Logo from '../../assets/images/site-logo.svg'

export default function Header() {

       const t = useTranslations('Navigation')

       return (
              <header className={cls.header}>
                     <div className={cls.header_container}>
                            <Link href={'/'}>
                                   <Image className={cls.header_logo_img} src={Logo} alt="Header has img" />
                            </Link>
                            <div className={cls.header_section}>
                                   <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                          <Link href={'/'}>{t('home')}</Link>
                                   </nav>
                                   <LocalSwitcher/>  
                            </div>
                     </div>
              </header>
       )
}
