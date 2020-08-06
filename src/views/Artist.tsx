import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api';
import { ArtistDetails } from '../types';

type Props = {};

const Artist: FC<Props> = () => {
  // Hooks
  const { id } = useParams();

  const [artist, setArtist] = useState<ArtistDetails | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchArtist = async () => {
      setLoading(true);
      const artist = await api.artists.getInfo(id);
      setArtist(artist);
      setLoading(false);
    };
    fetchArtist();
  }, [id]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    artist && (
      <div>
        <img src={artist.image} alt="" />
        <h1>{artist.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: artist.bio }} />
      </div>
    )
  );
};

export default Artist;
