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
  }),
});

export const collections = {
  'cases': casesCollection,
};
