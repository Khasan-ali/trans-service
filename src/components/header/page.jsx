'use client'

// import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import cls from './styles.module.css'
import Image from "next/image";
import Logo from '../../assets/images/site-logo.svg'
import MyDropdown from '../DropDown/page'


export default function Header() {

       // const t = useTranslations('Header')
       const data = [
              {
                     id: 1,
                     // text: t('first-title')
              },
              {
                     id: 2,
                     // text: t('second-title')
              }
       ]


       return (
              <header className={cls.header}>
                     <div className={cls.header_container}>
                            <Link href={'/'}>
                                   <Image className={cls.header_logo_img} src={Logo} alt="Header has img" />
                            </Link>
                            <div className={cls.header_section}>
                                   <MyDropdown />
                                   <LocalSwitcher />  
                            </div>
                     </div>
              </header>
       )
}
