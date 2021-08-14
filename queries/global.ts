const query = `query globalSettingsEntryQuery($isPreview: Boolean!) {
    globalSettings(id: "4exnZopd4FhVaVLSGW87R1", preview:$isPreview) {
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
