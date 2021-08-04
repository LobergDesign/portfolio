const contentAreaFragment = `fragment contentArea on ComponentContentarea {
  contentBlocksCollection(limit: 5) {
    items {
      type: __typename
      ... on ComponentTextarea {
        intro
        firstRteSection {
          json
        }
        secondRteSection {
          json
        }
        linkTextOverwrite
        link {
          ... on ContentPage {
            slug
          }
        }
      }
      ... on ComponentCta {
        title
        rotateEffectText
      }
      ... on ComponentTabelList {
        tabelHeadlines
        tabelItemsCollection(limit: 15) {
          items {
            year
            place
            description
          }
        }
      }
    }
  }
}`;
  export { contentAreaFragment };