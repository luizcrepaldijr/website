import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const casesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/cases" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    badges: z.array(z.string()),
    description: z.string(),
    challenge: z.string(),
    solution: z.string(),
    result: z.string(),
    image: image(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    pubDate: z.date().optional(),
    author: z.string().optional(),
    companyName: z.string().optional(),
    location: z.string().optional(),
    segment: z.string().optional(),
    stack: z.string().optional(),
    testimonial: z.object({
      author: z.string(),
      job: z.string(),
      text: z.string(),
      photo: image(),
      companyLogo: image(),
    }).optional(),
    readingTime: z.string().optional(),
    problems: z.array(z.string()).optional(),
    necessities: z.array(z.string()).optional(),
    differential: z.string().optional(),
    introTitle: z.string().optional(),
    introDescription: z.string().optional(),
    solutionData: z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      infrastructure: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.string()),
      }),
      sensors: z.object({
        title: z.string(),
        items: z.array(z.string()),
      }),
      monitoring: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.string()),
        additionalTitle: z.string().optional(),
        additionalItems: z.array(z.string()).optional(),
        callout: z.string(),
      }).optional(),
      intelligence: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.string()),
        callout: z.string(),
      }).optional(),
      callout: z.string(),
    }).optional(),
    resultsData: z.object({
      description: z.string(),
      image: image(),
      impactTitle: z.string(),
      impacts: z.array(z.object({
        title: z.string(),
        icon: z.string(),
      })),
    }).optional(),
    differentialData: z.object({
      title: z.string(),
      description: z.string(),
      subDescription: z.string(),
      items: z.array(z.string()),
      cta: z.object({
        text: z.string(),
        buttonText: z.string(),
        buttonLink: z.string(),
      }),
    }).optional(),
    heroMockup: image().optional(),
  }),
});

export const collections = {
  'cases': casesCollection,
};
