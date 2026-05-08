import clsx from 'clsx'
import Link from 'next/link'

const FooterLink = (props: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className={clsx(
        'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
      )}
      {...props}
    />
  )
}

export const Footer = () => {
  const year = new Date().getFullYear()
   const linkClasses = `
    font-['Roboto'] text-sm
    text-slate-400 dark:text-slate-500
    transition-colors duration-150
    hover:text-slate-600 dark:hover:text-slate-300
    bg-transparent border-none cursor-pointer
  `
  return (
    <footer className="flex flex-wrap gap-6 px-12 py-5 border-t border-slate-100 dark:border-slate-800">
        <FooterLink href="/" className={`${linkClasses} cursor-default`}>
          &copy; {year} Looper Soft LLC
        </FooterLink>
        <FooterLink className={linkClasses} href="https://x.com/">&#x1D54F;</FooterLink>
        
        <FooterLink className={linkClasses} href="/faq">Түгээмэл асуултууд</FooterLink>
        <FooterLink className={linkClasses} href="/contact">Бидэнтэй холбогдох</FooterLink>
      
    </footer>
  )
}

