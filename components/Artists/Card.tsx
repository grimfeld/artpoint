import { Artist } from "types"
import Button from '@components/Button'
import Heading from '@components/Heading'
import { useRouter } from 'next/router'

const ArtistCard = ({ artist }: { artist: Artist }): JSX.Element => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-between p-4 border rounded-lg shadow gap-y-4">
      <Heading>{artist.name}</Heading>
      <img
        src="https://via.placeholder.com/750"
        className='object-cover w-full aspect-video'
        alt="Image"
      />
      <div dangerouslySetInnerHTML={{ __html: artist.texts[0].body }} />
      <Button onClick={() => router.push(`/artists/${artist.id}`)}>Voir plus</Button>
    </div>
  )
}

export default ArtistCard
