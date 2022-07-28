import ArtistsList from '@root/components/Artists/List'
import Heading from '@root/components/Heading'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Artist } from 'types'

export const getServerSideProps: GetServerSideProps = async () => {
  if (!process.env.NEXT_PUBLIC_BASE_URL) throw new Error('Missing BASE_URL')
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'data.json')
  const data = await res.json()
  const artists = data.artists

  return {
    props: {
      artists
    }
  }
}
const Artists: NextPage<{ artists: Artist[] }> = ({ artists }) => {
  const [localArtists, setLocalArtists] = useState<Artist[]>([])
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    setLocalArtists(artists)
    const timeout = setTimeout(() => {
      setLocalArtists(artists.filter(artist => artist.name.toLowerCase().includes(query.toLowerCase())))
    }, 250)
    return () => clearTimeout(timeout)
  }, [artists, query])

  return (
    <>
      <Heading className='mb-8'>Nos artistes:</Heading>
      <input type="text" placeholder="Recherchez un artiste" className='w-full p-4 mb-8 border rounded-lg' onChange={(e) => setQuery(e.target.value)} />
      <ArtistsList artists={localArtists} />
    </>
  )
}

export default Artists
