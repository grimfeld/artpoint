export type Text = {
  id: string
  body: string
}

export type Artwork = {
  id: string
  slug: string
  texts: Text[]
}

export type Artist = {
  id: string
  name: string
  slug: string
  texts: Text[]
  artworks: Artwork[]
}
