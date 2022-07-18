import { GetServerSideProps, NextPage } from 'next'
import { Artist, Artwork } from 'types'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()
  const artist = data.artists.find((artist: Artist) => artist.id === context.query.id)
  const artwork = artist.artworks.find((artwork: Artwork) => artwork.id === context.query.artwork)
  return {
    props: {
      ...artwork
    }
  }
}

const ArtworkPage: NextPage<Artwork> = ({ slug, texts }) => {
  return <>
    <h1 className='my-16 text-6xl font-bold'>{slug}</h1>
    <img src="https://via.placeholder.com/1920" alt={slug} className="object-cover w-full aspect-video" />
    {texts.map(text => <div key={text.id} dangerouslySetInnerHTML={{ __html: text.body }} />)}
  </>
}

export default ArtworkPage
