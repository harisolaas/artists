import { BuildArtist, BuildArtistDetails } from './types';

export const buildArtist: BuildArtist = ({ name, mbid }) => ({
  name,
  id: mbid,
});

export const buildArtistDetails: BuildArtistDetails = (artistDetails) => {
  const image = artistDetails.image?.find((img: any) => img.size === 'large');
  return {
    name: artistDetails.name,
    bio: artistDetails.bio?.content || '',
    url: artistDetails.url,
    image: (image && image['#text']) || '',
    similar: artistDetails.similar?.artist,
    stats: artistDetails.stats,
    tags: artistDetails.tags.tag,
  };
};
