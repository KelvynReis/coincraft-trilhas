import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export interface ContainerProps extends ComponentProps<'div'> {
  as?: 'div' | 'section' | 'main'
}

export function Container({
  className,
  children,
  as = 'div',
  ...props
}: ContainerProps) {
  const Comp = as

  return (
    <Comp className={cn('container-layout', className)} {...props}>
      {children}
    </Comp>
  )
}
