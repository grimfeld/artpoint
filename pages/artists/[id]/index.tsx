import Button from '@root/components/Button'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Artist } from "types"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()
  const artist = data.artists.find((artist: Artist) => artist.id === context.query.id)
  return {
    props: {
      ...artist
    }
  }
}

const ArtistPage: NextPage<Artist> = ({ id, name, texts, artworks }) => {
  const router = useRouter()
  return (
    <>
      <h1 className='my-16 text-6xl font-bold'>{name}</h1>
      {texts.map(text => <div key={text.id} dangerouslySetInnerHTML={{ __html: text.body }} />)}
      <h2 className='my-8 text-3xl font-bold'>Liste des oeuvres de {name}:</h2>
      <div className="flex flex-col">
        {artworks.map((artwork, index) => {
          return (
            <div key={artwork.id} className={["flex flex-col w-3/5 gap-8 my-16", index % 2 == 0 ? 'self-start' : 'self-end'].join(' ')}>
              <img src="https://via.placeholder.com/1920x450" alt={artwork.slug} className='object-cover w-full aspect-video' />
              {artwork.texts.map(text => <div key={text.id} dangerouslySetInnerHTML={{ __html: text.body }} />)}
              <Button onClick={() => router.push(`/artists/${id}/${artwork.id}`)}>Voir plus</Button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ArtistPage