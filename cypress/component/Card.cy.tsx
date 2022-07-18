import ArtistCard from "@components/Artists/Card"

describe("ArtistCard suite", () => {

  const mockArtist = {
    id: "1",
    name: "Artist 1",
    texts: [
      {
        body: "Text 1",
        id: "1"
      }
    ],
    slug: "artist-1",
    artworks: [
      {
        id: "1",
        slug: "artwork-1",
        texts: [
          {
            body: "Text 1",
            id: "1"
          }
        ]
      }

    ]
  }


  it("mounts", () => {
    cy.mount(<ArtistCard artist={mockArtist} />)
  })

  it("renders", () => {
    cy.mount(<ArtistCard artist={mockArtist} />)
    cy.get('h2').contains(mockArtist.name)
    cy.get('img').should('have.attr', 'src', 'https://via.placeholder.com/750')
    cy.get('div').contains(mockArtist.texts[0].body)
  })

})
