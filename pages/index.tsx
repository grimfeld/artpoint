import type { GetServerSideProps, NextPage } from 'next'
import ArtistsList from '@root/components/Artists/List'
import { Artist } from 'types'

interface PageProps {
  title: string
  text: string
  artists: Artist[]
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const res = await fetch('http://localhost:3000/data.json')
  const { title, text, artists } = await res.json()
  return {
    props: {
      title,
      text,
      artists
    }
  }
}

const Home: NextPage<PageProps> = ({ title, text, artists }) => {
  return (
    <>
      <header className='my-16'>
        <div className='p-16 text-center text-white bg-emerald-500'>
          <h1 className='text-5xl font-bold tracking-widest uppercase'>{title}</h1>
        </div>
        <p className='mt-4 tracking-wider text-emerald-900'>{text}</p>
      </header>
      <div id='artists-list'>
        <h2 className='mb-8 text-2xl font-black text-emerald-900'>Nos artistes:</h2>
        <ArtistsList artists={artists} />
      </div>
    </>
  )
}

export default Home
