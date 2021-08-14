const contentAreaFragment = `fragment contentArea on ComponentContentarea {
  contentBlocksCollection(limit: 10) {
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
        sectionTitle: title
        tabelHeadlines
        tabelItemsCollection(limit: 15) {
          items {
            year
            place
            description
          }
        }
      }
      ... on ComponentColumnList {
        listItemsCollection {
          items {
            title
            listItems
          }
        }
      }
      ... on ComponentImage {
        imageTitle: title
        image
      }
    }
  }
}`;
export { contentAreaFragment };
