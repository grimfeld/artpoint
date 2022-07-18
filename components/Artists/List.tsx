import { Artist } from 'types'
import ArtistCard from '@components/Artists/Card'

const ArtistsList = ({ artists }: { artists: Artist[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {artists.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  )
}

export default ArtistsList