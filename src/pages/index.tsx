import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'
import { SubribeButton } from '../components/SubscribeButton'

import Head from 'next/head'
import styles from './home.module.scss'

type HomeProps = {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title> Home | Ig News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications: <br />
            Subribe Now! <br />
            <span>for {product.amount} month</span>
          </p>
          <SubribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Estamos acrescentando uma tipagem a essa constante.

  const price = await stripe.prices.retrieve('price_1KctTTKJ8gVnvrMcMekQPgmo', {
    expand: ['product'] // Parametro expand que passamos o product que o stripe passa o id do produto ao qual ele está relacionado.
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // Dá 24 horas ao final
  }
}
