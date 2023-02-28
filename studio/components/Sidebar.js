import S from "@sanity/desk-tool/structure-builder";
import { AiOutlineStar } from "react-icons/ai";

function Sidebar() {
  return S.list()
    .title("zen-like-website")
    .items([
      S.listItem()
        .title("Featured")
        .id("featuredItems")
        .icon(AiOutlineStar)
        .child(S.editor().schemaType("featured").documentId("featuredItems")),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "featured"
      ),
    ]);
}

export default Sidebar;
