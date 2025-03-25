import { defineType } from "sanity";

export const stackType = defineType({
    name: "stack",
    title: "Stacks",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Technology Name",
            type: "string"
        },
        {
            name: "desc",
            title: "Description",
            type: "string"
        },
        {
            name: "icon",
            title: "Icon URL",
            type: "url"
        }
    ]
});
