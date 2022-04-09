import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Juan Evangelista
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#ebe417" />
      Sign in with GitHub
    </button>
  ) //Aqui foi feito uma condicional para mudar o botão se o usuário estiver loggado ou não
}
