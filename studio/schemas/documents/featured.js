import { AiOutlineStar } from "react-icons/ai";

export default {
  title: "Featured",
  name: "featured",
  type: "document",
  icon: AiOutlineStar,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Featured websites",
      name: "websites",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "website" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every item should be unique!").unique(),
        Rule.required().error("You would need select at least one!"),
      ],
    },
    {
      title: "Featured tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every item should be unique!").unique(),
        Rule.required().error("You would need select at least one!"),
      ],
    },
  ],
};
