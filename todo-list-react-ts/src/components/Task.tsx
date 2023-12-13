import { Trash } from '@phosphor-icons/react'
import { Checkbox } from './Checkbox'
import styles from './Task.module.css'

type Props = {
  content: string
  isChecked?: boolean
  onCheck: () => void
  onDelete: () => void
}

export function Task ({ content, isChecked = false, onCheck, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <Checkbox onClick={onCheck} isChecked={isChecked} />
      <p className={isChecked ? styles.completedTask : ''}>{content}</p>
      <button className={styles.deleteTask} onClick={onDelete}>
        <Trash size={24} />
      </button>
    </div>
  )
}
