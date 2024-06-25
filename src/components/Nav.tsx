import clsx from 'clsx'
type NavProps = {
  label: string
  path: string
  onClick?: () => void
}

export function Nav({ label, path, onClick }: NavProps) {
  const pathname = window.location.pathname
  return (
    <a
      href={path}
      onClick={onClick}
      className={clsx(
        'leading-0 hover:nav-link-active relative block text-nowrap px-3 py-2 font-semibold text-white after:h-0 after:w-0 after:transition-all after:duration-500 hover:text-[#58F49A] uppercase',
        { 'nav-link-active after:!h-1 after:!w-4': pathname === path }
      )}
    >
      {label}
    </a>
  )
}
