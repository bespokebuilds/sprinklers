'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation, findTabForPath } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import { navigationTabs } from '@/lib/navigation'

function Header({ activeTab, onTabChange }) {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="sticky top-0 z-50">
      <header
        className={clsx(
          'flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-red-950/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
          isScrolled
            ? 'dark:bg-red-950/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-yellow-950/5'
            : 'dark:bg-transparent',
        )}
      >
        <div className="mr-6 flex lg:hidden">
          <MobileNavigation activeTab={activeTab} onTabChange={onTabChange} />
        </div>
        <div className="relative flex flex-grow basis-0 items-center">
          <Link href="/" aria-label="Home page">
            <Logomark className="h-6 w-6 lg:hidden" />
            <Logo className="hidden h-6 w-auto fill-red-700 dark:fill-orange-100 lg:block" />
          </Link>
        </div>
        <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
          <Search />
        </div>
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <ThemeSelector className="relative z-10" />
        </div>
      </header>
      {/* Tab bar below header — desktop only */}
      <div className="hidden lg:block border-b border-orange-200 bg-white dark:border-red-900 dark:bg-red-950/80">
        <div className="mx-auto flex max-w-8xl gap-1 px-4 sm:px-6 lg:px-8 xl:px-12">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={clsx(
                'border-b-2 px-3 py-2.5 text-sm font-medium transition-colors',
                tab.id === activeTab
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-orange-500 hover:border-orange-300 hover:text-orange-700 dark:text-orange-400 dark:hover:border-orange-700 dark:hover:text-orange-300',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Layout({ children }) {
  let pathname = usePathname()
  let [activeTab, setActiveTab] = useState(() => findTabForPath(pathname))

  useEffect(() => {
    setActiveTab(findTabForPath(pathname))
  }, [pathname])

  return (
    <div className="flex w-full flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-zinc-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-red-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-red-800 dark:block" />
          <div className="sticky top-[7.5rem] -ml-0.5 h-[calc(100vh-7.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
