import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";

const query = `query contentPageEntryQuery {
  data: contentPage(id: "6zBYL8g6YW9U2MzXiFY9vg") {
    hero {
      ...hero
    }
    contentArea {
      ...contentArea
    }
  }
}
${heroFragment}
${contentAreaFragment}
`;
export { query };
