import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";
import { privateWorkUnderConstructionFragment } from "./fragments/privateWorkUnderConstruction";
import { privateWork } from "./fragments/privateWork";
import { seoFragment } from "./fragments/seo";
const query = `query contentPageEntryQuery($isPreview: Boolean!) {
  data: contentPage(id: "6zBYL8g6YW9U2MzXiFY9vg", preview:$isPreview) {
    hero {
      ...hero
    }
    contentArea {
      ...contentArea
    }
    secondContentArea {
      ...contentArea
    }
    privateWorkUC: privateWorkUnderConstructionCollection(limit: 5) {
      ...privateWorkUnderConstruction
    }
    privateWork: privateWorkCollection(limit: 5){
      ...privateWork
    }
    seoSection {
      ...seo
    }
  }
}
${heroFragment}
${contentAreaFragment}
${privateWorkUnderConstructionFragment}
${privateWork}
${seoFragment}
`;
export { query };
