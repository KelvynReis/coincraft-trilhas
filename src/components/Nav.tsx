import clsx from 'clsx'
type NavProps = {
  label: string
  path: string
  onClick?: () => void
}

export function Nav({ label, path, onClick }: NavProps) {
  const pathname = window.location.pathname

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = document.querySelector(event.currentTarget.getAttribute('href') as string) as HTMLElement;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (path.startsWith('#')) {
      handleSmoothScroll(event)
    }
    if (onClick) {
      onClick()
    }
  }


  return (
    <a
      href={path}
      onClick={handleClick}
      className={clsx(
        'leading-0 hover:nav-link-active relative block text-nowrap px-3 py-2 font-semibold text-white after:h-0 after:w-0 after:transition-all after:duration-500 hover:text-[#58F49A] uppercase',
        { 'nav-link-active after:!h-1 after:!w-4': pathname === path }
      )}
    >
      {label}
    </a>
  )
}
