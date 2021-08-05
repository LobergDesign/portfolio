import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";
import { privateWorkUnderConstructionFragment } from "./fragments/privateWorkUnderConstruction";
import { privateWork } from "./fragments/privateWork";

const query = `query contentPageEntryQuery($slug: String!) {
  data: contentPageCollection(where: {slug: $slug}, limit: 1) {
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
    }
  }
}
${privateWorkUnderConstructionFragment}
${privateWork}
${heroFragment}
${contentAreaFragment}
`;
export { query };
