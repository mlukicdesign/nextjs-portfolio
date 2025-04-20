import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerVideo',
      description: 'Hero Video for the home page',
      title: 'Header Video',
      type: 'string',
    }),
    defineField({
      name: 'customLogo',
      description:
        'Upload your custom logo, it will replace your title in the header of your website. Use SVG or PNG with a transparent background.',
      title: 'Custom logo (Optional)',
      type: 'image',
    }),
    defineField({
      name: 'overview',
      description:
        'This text is your description. Used for the introduction paragraph at a Home page and also for the <meta> description tag for SEO.',
      title: 'Introduction text',
      type: 'object',
      fields: [
        {
          title: 'Introduction Heading',
          description: 'Introduction Component Heading',
          name: 'introHeading',
          type: 'text',
        },
        {
          title: 'Display this introduction on Home page?',
          description:
            'If you turn in off it still be used for SEO description',
          name: 'displayText',
          type: 'boolean',
        },
        {
          title: 'Introductory Paragraph',
          description: 'This is the text that will appear on the home page.',
          name: 'introParagraph',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear on your home page. First create your set of projects and then add to the list below. You can rearrange the display order by dragging each project.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
    defineField({
      name: 'sliderTitle',
      title: 'Slider Title',
      description: 'Text above secondary project slider',
      type: 'string',
    }),
    defineField({
      name: 'sliderProjects',
      title: 'Slider Projects',
      description: 'Add images to be displayed within the carousel component',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'secondSliderProjects',
      title: 'Second Slider Projects',
      description:
        'Add images to be displayed within the second row in the carousel component',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'techGrid',
      title: 'Tech Grid',
      type: 'object',
      fields: [
        {
          name: 'designTech',
          title: 'Design Technologies',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility',
                },
              ],
            },
          ],
          description:
            'Logos of technologies related to design (e.g., Adobe, Figma)',
        },
        {
          name: 'devTech',
          title: 'Development Technologies',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility',
                },
              ],
            },
          ],
          description:
            'Logos of technologies related to development (e.g., React, Node.js)',
        },
      ],
    }),
    defineField({
      name: 'explorationCarousel',
      title: 'Exploration Carousel',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
