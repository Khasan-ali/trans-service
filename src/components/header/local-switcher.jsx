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
       }

       return (
              <label style={{border: '2px'}}>
                     <p>change language</p>

                     <select defaultValue={localActive}
                      onChange={onSelectChange}
                      disabled={isPending}
                      >
                            <option value="en">English</option>
                            <option value="id">Uz</option>
                     </select>
              </label>
       );
}