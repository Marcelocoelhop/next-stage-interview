import { Circle, CheckCircle } from '@phosphor-icons/react'
import styles from './Checkbox.module.css'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isChecked?: boolean
}

export function Checkbox ({ isChecked = false, ...props }: Props) {
  return (
    <button className={styles.checkbox} {...props}>
      {isChecked ? (
        <CheckCircle size={24} weight='fill' color='#5E60CE' />
      ) : (
        <Circle size={24} />
      )}
    </button>
  )
}
