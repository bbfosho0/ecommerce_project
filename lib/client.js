import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'b2lx9qty',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: !process.env.SANITY_API_TOKEN,
  token: process.env.SANITY_API_TOKEN,
});
