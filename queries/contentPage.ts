import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";


const query = `query contentPageEntryQuery($slug: String!) {
  data: contentPageCollection(where: {slug: $slug}, limit: 1) {
    items{
      hero {
        ...hero
      }
      contentArea {
        ...contentArea
      }
    }
  }
}
${heroFragment}
${contentAreaFragment}
`;
export { query };
