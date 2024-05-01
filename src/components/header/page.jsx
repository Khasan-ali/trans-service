'use client'


import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import cls from './styles.module.css'
import Image from "next/image";
import Logo from '../../assets/images/site-logo.svg'
import MyDropdown from '../DropDown/page'
import Hamburger from '../../assets/images/hamburger.png'
import { useState } from 'react'


export default function Header() {

       const [state, setState] = useState(false)
       console.log(state);

       return (
              <header className={state ? 'header_open' : ''}>
                     <div className={cls.header_container}>
                            <Link href={'/'}>
                                   <Image src={Logo} alt="Header has img" />
                            </Link>
                            <div className={cls.header_section}>
                                   <MyDropdown setState={setState} />
                                   <LocalSwitcher />
                                   <button className={cls.header_btn} onClick={() => setState(true)}>
                                          <Image src={Hamburger} alt="has hamburger img" width={'22'} height={'22'} />
                                   </button>
                            </div>
                     </div>
              </header>
       )
}
