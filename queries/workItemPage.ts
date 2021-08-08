import { heroFragment } from "./fragments/hero";
import { contentAreaFragment } from "./fragments/contentArea";
import { seoFragment } from "./fragments/seo";

const query = `query workItemPageQuery($slug: String!) {
  data: workItemCollection(where: {slug: $slug}, limit: 1) {
    items{
      workNumber
      siteUrl
      hero {
        ...hero
      }
      contentArea {
        ...contentArea
      }
      seoSection {
        ...seo
      }
    }
  }
}
${heroFragment}
${contentAreaFragment}
${seoFragment}
`;
export { query };
