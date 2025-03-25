import { defineType, defineField, defineArrayMember } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),

    defineField({
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .split(' ')[0] // Take only the first word
            .toLowerCase()
            .replace(/[^a-z0-9]/g, ''), // Remove special characters
      },
    }),

    defineField({ name: 'description', title: 'Description', type: 'text' }),

    // ✅ Both Image Upload & URL Option for Main Image
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',  
      options: { hotspot: true },
    }),
    

    defineField({
      name: 'gallery',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
            defineField({ name: 'description', title: 'Feature Description', type: 'text' }),
          ],
        }),
      ],
    }),

    // ✅ Allowing both Upload & URL for Technology Icons
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Technology Name', type: 'string' }),
            defineField({
              name: 'icon',
              title: 'Technology Icon',
              type: 'object',
              fields: [
                defineField({
                  name: 'upload',
                  title: 'Upload Icon',
                  type: 'image',
                }),
                defineField({
                  name: 'url',
                  title: 'Icon URL',
                  type: 'url',
                }),
              ],
            }),
            defineField({ name: 'link', title: 'Technology Link', type: 'url' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'github',
      title: 'GitHub Repository',
      type: 'url',
    }),
    defineField({
      name: 'liveDemo',
      title: 'Live Demo Link',
      type: 'url',
    }),
  ],
});