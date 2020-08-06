import React, { FC, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../api';
import { Artists, Artist } from '../../types';
import Search from '../../components/Search';
import Root from './styles';

const List: FC = () => {
  const [artist, setArtist] = useState<Artist>();
  const [similar, setSimilar] = useState<Artists>([]);
  const [loading, setLoading] = useState(false);

  const handleSelect = async (artist: Artist) => {
    setLoading(true);
    const similar = await api.artists.getSimilar(artist.id);
    setArtist(artist);
    setSimilar(similar);
    setLoading(false);
  };

  return (
    <Root>
      <Search onSelect={handleSelect} />
      {loading && <div>Loading...</div>}{' '}
      {!loading && artist && (
        <>
          <Link to={`/artist/${artist?.id}`}>
            <h1>{artist?.name}</h1>
          </Link>
        </>
      )}
      {!loading && !!similar.length && (
        <>
          <h2>Similar</h2>
          <ul>
            {similar.map((a, i) => (
              <li key={a.id + i}>
                <Link to={`/artist/${a.id}`}>{a.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Root>
  );
};

export default List;
