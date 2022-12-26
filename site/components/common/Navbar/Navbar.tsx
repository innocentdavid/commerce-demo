import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import Image from 'next/image'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/" className={`${s.logo} mr-3`} aria-label="Logo">
            {/* <Logo /> */}
            <Image src={'/1MW Logo.png'} alt="" width={32} height={12} className="w-[fit-content]" />
          </Link>
          <Link href="/about" className={s.link}>
            Sell
          </Link>
          <nav className={s.navMenu}>
            <Link href="/search" className={s.link}>
              All
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
)

export default Navbar
