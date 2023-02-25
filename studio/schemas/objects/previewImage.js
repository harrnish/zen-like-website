import { GoDeviceCamera } from "react-icons/go";

export default {
  title: "Preview Image",
  name: "previewImage",
  type: "image",
  icon: GoDeviceCamera,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alt Text",
      name: "alt",
      type: "string",
      validation: (Rule) => Rule.error("Can't leave empty!").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
