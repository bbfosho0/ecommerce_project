import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const imageClient = sanityClient({
  projectId: 'b2lx9qty',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
});

const builder = imageUrlBuilder(imageClient);

export const urlFor = (source) => builder.image(source);
