import { AiOutlineTag } from "react-icons/ai";

export default {
  title: "Tag",
  name: "tag",
  type: "document",
  icon: AiOutlineTag,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title, slug }) {
      return {
        title,
        subTitle: slug.current,
      };
    },
  },
};
