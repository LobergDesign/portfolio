const query = `query globalSettingsEntryQuery {
    globalSettings(id: "4exnZopd4FhVaVLSGW87R1") {
      mainMenuCollection(limit:5) {
        items {
          model: __typename
          slug
          menuName
        }
      }
      headerValueOne
      headerValueTwo
      footerCtaText
      rotateEffectText
      email
      phoneNumber
      linkedIn
      facebook
    }
    workItemCollection(limit: 10) {
      items {
        slug
        model:__typename
      }
    }
  }`;
export { query };
