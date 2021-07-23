const query = `query globalSettingsEntryQuery {
    globalSettings(id: "4exnZopd4FhVaVLSGW87R1") {
      mainMenuCollection(limit:5) {
        items {
               model: __typename
          slug
        }
      }
    }
  }`;
export { query };