export type Api = {
  artists: {
    search: (search: string) => Promise<Artists>;
    getSimilar: (id: string) => Promise<Artists>;
    getTopArtists: () => Promise<Artists>;
    getInfo: (id: string) => Promise<ArtistDetails | null>;
  };
};

export type BuildArtist = (apiItem: any) => Artist;
export type BuildArtistDetails = (apiItem: any) => ArtistDetails;
export type ArtistDetails = {
  name: string;
  bio: string;
  url: string;
  image: string;
  similar: Artists;
  stats: { listeners: string; playcount: string };
  tags: { name: string; url: string }[];
};
export type Artist = { name: string; id: string };
export type Artists = Artist[];
