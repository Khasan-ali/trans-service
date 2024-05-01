'use client';

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {

       const [ isPending, startTransition ] = useTransition()  
       const router = useRouter()
       const localActive = useLocale()

       const onSelectChange = (e) => {
              const nextLocale = e.target.value;
              startTransition(() => {
                     router.replace(`/${nextLocale}`)
              })
              // props.setLang(nextLocale)
       }

       return (
                     <select className="language-select" style={{padding: "10px", background: "#F3F3F3", borderRadius: "5px", border: "none"}} defaultValue={localActive}
                      onChange={onSelectChange}
                      disabled={isPending}
                      >
                            <option value="uz">O'ZB</option>
                            <option value="id">ЎЗБ</option>
                            <option value="ru">РУС</option>
                            <option value="en">ENG</option>
                     </select>
       );
}