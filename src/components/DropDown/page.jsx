
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import cls from './styles.module.css'
export default function MyDropdown() {

  const data = [
    {
           id: 1,
           title: "biz haqimizda",
           children: [
                  {
                         id: 2,
                         title: "Rahbariyat",
                         path: "/rahbariyat"
                  },
                  {
                         id: 3,
                         title: "tuzilma",
                         path: "/tuzilma"
                  },
           ]
    },
    {
           id: 4,
           title: "faoliyat",
           children: [
                  {
                         id: 5,
                         title: "hisobotlar",
                         path: "/hisobotlar"
                  },
                  {
                         id: 6,
                         title: "yoshlar siyosati",
                         child: [
                                {
                                       id: 7,
                                       title: 'y oid yangiliklar',
                                       path: "/news"
                                },
                                {
                                       id: 8,
                                       title: "meyoriy hujjatlar",
                                       path: "/document"
                                },
                         ]
                  },
                  {
                         id: 9,
                         title: "xizmatlar",
                         path: "/service",
                  },
           ]
    },

]



  return (
    <>
    <div>
      {data?.map((element) => (
        <Menu key={element?.id}>
          <Menu.Button>{element?.title}</Menu.Button>
          <Menu.Items className={cls.nav_menu_list}>
            {element?.children?.map((childElement) => (
              <Menu.Item key={childElement?.id}>
                {({ active }) => (
                  <Link
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    {childElement?.child ? (
                      <Menu>
                        <Menu.Button>{childElement?.title}</Menu.Button>
                        <Menu.Items>
                          {childElement?.child?.map((row) => (
                            <Menu.Item key={row?.id}>
                              {({active}) => (
                                <Link 
                                className={`${active && 'bg-blue-500'}`}
                                href={row?.path}>
                                  {row?.title}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Menu>
                    ) : childElement?.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ))}
    </div>

    </>
  )
}
