import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";
import { privateWorkUnderConstructionFragment } from "./fragments/privateWorkUnderConstruction";
import { privateWork } from "./fragments/privateWork";
import { seoFragment } from "./fragments/seo";

const query = `query contentPageEntryQuery($slug: String!, $isPreview: Boolean!) {
  data: contentPageCollection(where: {slug: $slug}, limit: 1, preview:$isPreview) {
    items{
      hero {
        ...hero
      }
      contentArea {
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
}
${privateWorkUnderConstructionFragment}
${privateWork}
${heroFragment}
${contentAreaFragment}
${seoFragment}
`;
export { query };
