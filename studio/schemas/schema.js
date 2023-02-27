/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

import websiteInfo from "./documents/websiteInfo";
import previewImage from "./objects/previewImage";
import category from "./documents/category";
import tag from "./documents/tag";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([websiteInfo, previewImage, category, tag]),
});
