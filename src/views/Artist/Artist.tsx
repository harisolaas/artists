import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';
import { ArtistDetails } from '../../types';
import { HeadingRoot, Bio, ExtendButton, SimilarRoot } from './styles';

type Props = {};

const Artist: FC<Props> = () => {
  // Hooks
  const { id } = useParams();

  const [artist, setArtist] = useState<ArtistDetails | null>(null);
  const [extend, setExtend] = useState<boolean>();
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

  // Handlers
  const handleExtendBio = () => setExtend(!extend);

  return loading ? (
    <div>Loading...</div>
  ) : (
    artist && (
      <div>
        <HeadingRoot>
          <img src={artist.image} alt="" />
          <div>
            <h1>
              <a href={artist.url} target="_blank" rel="noopener noreferrer">
                {artist.name}
              </a>
            </h1>
            <div>
              Listeners: <strong>{artist.stats.listeners}</strong>
            </div>{' '}
            <div>
              Played: <strong>{artist.stats.playcount} times</strong>
            </div>
          </div>
        </HeadingRoot>
        <Bio extend={extend} dangerouslySetInnerHTML={{ __html: artist.bio }} />
        <ExtendButton onClick={handleExtendBio}>
          {extend ? 'Less' : 'More'}
        </ExtendButton>
        <h2>Similar</h2>
        <SimilarRoot>
          {artist.similar.map((s) => (
            <div key={s.name}>
              <img src={s.image[0]['#text']} alt="" />
              <h3>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </h3>
            </div>
          ))}
        </SimilarRoot>
      </div>
    )
  );
};

export default Artist;
