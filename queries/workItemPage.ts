import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";

const query = `query workItemPageQuery($slug: String!) {
  data: workItemCollection(where: {slug: $slug}, limit: 1) {
    items{
      workNumber
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
