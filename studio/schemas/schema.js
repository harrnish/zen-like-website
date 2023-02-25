/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

import websiteInfo from "./documents/websiteInfo";
import previewImage from "./objects/previewImage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([websiteInfo, previewImage]),
});
