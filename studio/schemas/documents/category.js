import { AiOutlineFolderOpen } from "react-icons/ai";

export default {
  title: "Category",
  name: "category",
  type: "document",
  icon: AiOutlineFolderOpen,
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
