import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@root/components/Header'
import { useRouter } from 'next/router'
import Button from '@root/components/Button'

function MyApp ({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div className="p-4">
      <Header />
      {router.pathname !== '/' && <Button className='my-4' onClick={() => router.back()}>Retour</Button>}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
