/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

import website from "./documents/website";
import previewImage from "./objects/previewImage";
import category from "./documents/category";
import tag from "./documents/tag";
import featured from "./documents/featured";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([website, previewImage, category, tag, featured]),
});
