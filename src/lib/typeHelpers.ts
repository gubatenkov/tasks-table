import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { IconProps } from '@radix-ui/react-icons/dist/types'

export type Brand<K, T> = K & { __brand: T }
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
export type ReactIcon = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>
