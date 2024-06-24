'use client'

import { IconBaseProps, IconType } from 'react-icons'
import * as IconCi from 'react-icons/ci'
import * as IconFa from 'react-icons/fa'
import * as IconFi from 'react-icons/fi'
import * as IconGi from 'react-icons/gi'
import * as IconGo from 'react-icons/go'
import * as IconHi from 'react-icons/hi'
import * as IconIo5 from 'react-icons/io5'
import * as IconMd from 'react-icons/md'
import * as IconPi from 'react-icons/pi'
import * as IconRi from "react-icons/ri";
import * as IconTfi from 'react-icons/tfi'

type IconGroup =
  | 'Fa'
  | 'Md'
  | 'Gi'
  | 'Fi'
  | 'Pi'
  | 'Hi'
  | 'Ci'
  | 'Tf'
  | 'Go'
  | 'Io'
  | 'Ri'

type IconNameFa = keyof typeof IconFa
type IconNameMd = keyof typeof IconMd
type IconNameGi = keyof typeof IconGi
type IconNameFi = keyof typeof IconFi
type IconNamePi = keyof typeof IconPi
type IconNameHi = keyof typeof IconHi
type IconNameCi = keyof typeof IconCi
type IconNameTfi = keyof typeof IconTfi
type IconNameGo = keyof typeof IconGo
type IconNameIo5 = keyof typeof IconIo5
type IconNameRi = keyof typeof IconRi

export type IconProps = IconBaseProps & {
  name:
  | IconNameFa
  | IconNameMd
  | IconNameGi
  | IconNameFi
  | IconNamePi
  | IconNameHi
  | IconNameCi
  | IconNameTfi
  | IconNameGo
  | IconNameIo5
  | IconNameRi
}

export function Icon({ name, ...rest }: IconProps) {
  const iconGroup = name.slice(0, 2) as IconGroup

  const Icon: { [K in IconGroup]: IconType } = {
    Fa: IconFa[name as IconNameFa],
    Md: IconMd[name as IconNameMd],
    Gi: IconGi[name as IconNameGi],
    Fi: IconFi[name as IconNameFi],
    Pi: IconPi[name as IconNamePi],
    Hi: IconHi[name as IconNameHi],
    Ci: IconCi[name as IconNameCi],
    Tf: IconTfi[name as IconNameTfi],
    Go: IconGo[name as IconNameGo],
    Io: IconIo5[name as IconNameIo5],
    Ri: IconRi[name as IconNameRi],
  }

  const IconElement = Icon[iconGroup]

  return <IconElement {...rest} />
}
