import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-ja'
import styles from './styles.module.scss'

type SubribeButtonProps = {
  priceId: string
}

export function SubribeButton({ priceId }: SubribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubribe() {
    if (!session) {
      signIn('github')
      return
    }
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <button
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubribe}
      >
        Subribe Now!
      </button>
    </>
  )
}
