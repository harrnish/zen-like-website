import { AiOutlineGlobal } from "react-icons/ai";

export default {
  title: "Website", // blog post
  name: "website", // blog
  type: "document",
  icon: AiOutlineGlobal,
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
        maxlength: 96,
      },
    },
    {
      title: "Published on", // Published At
      name: "publishedOn", // publishedAt
      type: "date",
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: "Preview",
      name: "preview",
      type: "previewImage",
    },
    {
      title: "URL",
      name: "siteUrl",
      type: "url",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      image: "preview",
      title: "title",
      publishedOn: "publishedOn",
    },
    prepare({ image, title, publishedOn }) {
      return {
        title,
        media: image,
        subtitle: publishedOn,
      };
    },
  },
};
