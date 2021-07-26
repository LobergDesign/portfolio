import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";
import { privateWorkUnderConstructionFragment } from "./fragments/privateWorkUnderConstruction";
import { privateWork } from "./fragments/privateWork";
const query = `query contentPageEntryQuery {
  data: contentPage(id: "6zBYL8g6YW9U2MzXiFY9vg") {
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
${heroFragment}
${contentAreaFragment}
${privateWorkUnderConstructionFragment}
${privateWork}
`;
export { query };
