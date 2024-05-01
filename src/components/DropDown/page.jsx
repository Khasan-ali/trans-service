
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import cls from './styles.module.css'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import SelectArrow from '../../assets/images/select-arrow.svg'
import CloseBtn from '../../assets/images/close.png'

export default function MyDropdown({setState}) {
  const t = useTranslations('Header')

  const data = [
    {
           id: 1,
           title: t('first-title'),
           children: [
                  {
                    id: 2,
                    title: t('first-section-one'),
                    path: "/about-us"
                  },
                  {
                    id: 3,
                    title: t('first-section-two'),
                    path: "/departament"
                  },
                  {
                    id: 4,
                    title: t('first-section-three'),
                    path: "/structure"
                  },
                  {
                    id: 5,
                    title: t('first-section-five'),
                    path: "/division"
                  },
                  {
                    id: 6,
                    title: t('first-section-six'),
                    path: "/organizations"
                  },
                  {
                    id: 7,
                    title: t('first-section-seven'),
                    path: "/data/#/meyoriy_hujjatlar"
                  },
                  {
                    id: 8,
                    title: t('first-section-eight'),
                    path: "/vacancy"
                  },
                  {
                    id: 9,
                    title: t('first-section-nine'),
                    path: "/faq"
                  },
                  {
                    id: 10,
                    title: t('first-section-ten'),
                    path: "/news/#/jamiyat_raqamlashtirish"
                  },
                  {
                    id: 11,
                    title: t('first-section-eleven'),
                    path: "/community-union"
                  },
           ]
    },
    {
      id: 12,
      title: t('second-title'),
      children: [
        {
          id: 13,
          title: t('second-section-one'),
          path: "/korxona_yonalishlari"
        },
        {
          id: 14,
          title: t('second-section-two'),
          path: "/data/#/chora_tadbirlar"
        },
        {
          id: 15,
          title: t('second-section-three'),
          path: "/news/#/hisobotlar"
        },
        {
          id: 16,
          title: t('second-section-four'),
          path: "/data/#/elektron_hukumat"
        },
        {
          id: 17,
          title: t('second-section-five'),
          path: "/cooperation"
        },
        {
          id: 18,
          title: t('second-section-six'),
          path: "/services-provided"
        },
        {
          id: 19,
          title: t('second-section-seven-title'),
          child: [
            {
                   id: 20,
                   title: t('second-section-seven-one-text'),
                   path: "/news/#/yoshlarga_oid_yangiliklar"
            },
            {
                   id: 21,
                   title: t('second-section-seven-two-text'),
                   path: "/data/#/yoshlar_siyosati"
            },
          ]
        },
      ]
    },
    {
      id: 22,
      title: t('three-title'),
      children: [
        {
          id: 23,
          title: t('three-section-one-title'),
          child: [
            {
              id: 24,
              title: t('three-section-one-text-one'),
              path: '/council/#/kuzatuv_kengashi'
            },
            {
              id: 25,
              title: t('three-section-one-text-two'),
              path: '/council/#/ijro_organi'
            },
            {
              id: 26,
              title: t('three-section-one-text-three'),
              path: '/council/#/taftish_komissiya'
            },
            {
              id: 27,
              title: t('three-section-one-text-four'),
              path: '/council/#/ichki_audit'
            },
            {
              id: 28,
              title: t('three-section-one-text-five'),
              path: '/news/#/kuzatuv_kengashi_azolarini_mukofotlash'
            },
          ]
        },
        {
          id: 29,
          title: t('three-section-two-title'),
          child: [
            {
              id: 30,
              title: t('three-section-two-text-one'),
              path: '/news/#/qimmatbaho_qogozlar'
            },
            {
              id: 31,
              title: t('three-section-two-text-two'),
              path: '/data/#/muhim_faktlar'
            },
            {
              id: 32,
              title: t('three-section-two-text-three'),
              path: '/data/#/buxgalteriya_standardlari'
            },
            {
              id: 33,
              title: t('three-section-two-text-four'),
              path: '/data/#/moliyaviy_standardlari'
            },
            {
              id: 34,
              title: t('three-section-two-text-five'),
              path: '/data/#/audit_xulosasi'
            },
            {
              id: 35,
              title: t('three-section-two-text-six'),
              path: '/data/#/emitent_hisobotlar'
            }
          ]
        },
        {
          id: 36,
          title: t('three-section-three-title'),
          path: '/data/#/jamiyat_ichki_hujjatlari'
        },
        {
          id: 37,
          title: t('three-section-four-title'),
          child: [
            {
              id: 38,
              title: t('three-section-four-text-one'),
              path: '/news/#/ustav_fondi'
            },
            {
              id: 39,
              title: t('three-section-four-text-two'),
              path: '/data/#/affillangan_shaxslar'
            },
            {
              id: 40,
              title: t('three-section-four-text-three'),
              path: '/news/#/aksiyadorlar_royxati'
            },
            {
              id: 41,
              title: t('three-section-four-text-four'),
              path: '/data/#/rezident_bolmagan'
            },
            {
              id: 42,
              title: t('three-section-four-text-five'),
              path: '/data/#/dividentlar'
            },
          ]
        },
        {
          id: 43,
          title: t('three-section-five-title'),
          child: [
            {
              id: 44,
              title: t('three-section-five-text-one'),
              path: '/news/#/investitsion'
            },
            {
              id: 45,
              title: t('three-section-five-text-two'),
              path: '/news/#/tenderlar'
            },
            {
              id: 46,
              title: t('three-section-five-text-three'),
              path: '/news/#/davlat_xaridlari'
            },
            {
              id: 47,
              title: t('three-section-five-text-four'),
              path: '/news/#/davlat_sheriklik'
            },
            {
              id: 48,
              title: t('three-section-five-text-five'),
              path: '/news/#/tadbirlar'
            },
          ]
        },
        {
          id: 49,
          title: t('three-section-six-title'),
          path: '/data/#/kbt_baholash'
        },
        {
          id: 50,
          title: t('three-section-seven-title'),
          path: '/data/#/samaradorlik'
        },
        {
          id: 51,
          title: t('three-section-eight-title'),
          path: '/data/#/biznes_reja'
        },
      ]
    },
    {
      id: 52,
      title: t('four-title'),
      children: [
        {
          id: 53,
          title: t('four-section-one'),
          path: '/news/#/yangiliklar'
        },
        {
          id: 54,
          title: t('four-section-two'),
          path: '/news/#/press_konferensiya'
        },
        {
          id: 55,
          title: t('four-section-three'),
          path: '/news/#/photo-gallery'
        },
        {
          id: 56,
          title: t('four-section-four'),
          path: '/video-gallery'
        },
        {
          id: 57,
          title: t('four-section-five'),
          path: '/information-service-relations'
        },
      ]
    },
    {
      id: 58,
      title: t('five-title'),
      path: '/komplaens'
    },
    {
      id: 59,
      title: t('six-title'),
      path: '/open-data'
    },
    {
      id: 60,
      title: t('seven-title'),
      children: [
        {
          id: 61,
          title: t('seven-section-one'),
          path: '/devonxona'
        },
        {
          id: 62,
          title: t('seven-section-two'),
          path: '/xalqaro-hamkorlik'
        },
        {
          id: 63,
          title: t('seven-section-three'),
          path: '/ishonch-telefoni'
        },
        {
          id: 64,
          title: t('seven-section-four'),
          path: '/qayta-aloqa'
        },
        {
          id: 65,
          title: t('seven-section-five'),
          path: '/fuqorolar-murojaati'
        },
        {
          id: 66,
          title: t('seven-section-six'),
          path: '/fuqarolar-murojaatlari-statistikasi'
        },
      ]
    }

]



  return (
    <>
    <div className='header_center'>
      <button onClick={() => setState(false)} className='header-close-btn'>
        <Image src={CloseBtn} alt='has close img' width={'22'} height={'22'} />
      </button>
    <ul className={'header_center_list'}>
      {data?.map((element) => (

        element?.children ? (
          <li className={cls.header_menu_section} key={element?.id}>
        <Menu>
          <Menu.Button className={`${cls.header_menu_btn}`}>{element?.title}<Image className={cls.header_menu_btn_img} src={SelectArrow} alt='Has select arrow' /></Menu.Button>
          <Menu.Items className={'nav_menu_list'}>

            {element?.children?.map((childElement) => (
              <Menu.Item key={childElement?.id}>

                {childElement?.child ? (
                  <div className={cls.nav_menu_inner}>
                  <Menu>
                    <Menu.Button className={cls.header_menu_btn_inner}><p className={cls.header_menu_btn_inner_text}>{childElement?.title}</p><Image className={cls.header_menu_btn_img_inner} src={SelectArrow} alt='Has select arrow' /></Menu.Button>
                    <Menu.Items className={cls.nav_menu_inner_list}>
                      {childElement?.child?.map((row) => (
                        <Menu.Item key={row?.id}>
                              
                            <Link className={cls.header_menu_link_inner} href={row?.path}>
                              {row?.title}
                            </Link>

                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                  </div>
                ) : <Link className={cls.header_menu_link} id='RouterNavLink' href="/account-settings">{childElement?.title}</Link>}

              </Menu.Item>
            ))}

          </Menu.Items>
          
        </Menu></li>) : (<Link className={cls.header_menu_element_link} key={element?.id} href={element?.path}>{element?.title}</Link>))
        
      
      )}
    </ul>
    </div>
    <span onClick={() => setState(false)} className="blur"></span>
    </>
  )
}
