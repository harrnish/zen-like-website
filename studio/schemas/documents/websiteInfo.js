import { GoFile } from "react-icons/go";

export default {
  title: "Website Info", // blog post
  name: "website", // blog
  type: "document",
  icon: GoFile,
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
      title: "Preview",
      name: "preview",
      type: "previewImage",
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
