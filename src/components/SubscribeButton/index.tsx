import styles from './styles.module.scss'

type SubribeButtonProps = {
  priceId: string
}

export function SubribeButton({ priceId }: SubribeButtonProps) {
  return (
    <>
      <button type="button" className={styles.subscribeButton}>
        Subribe Now!
      </button>
    </>
  )
}
