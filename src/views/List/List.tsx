import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../api';
import { Artists, Artist } from '../../types';
import {
  RootState,
  setArtist,
  setSimilar,
  SetArtist,
  SetSimilar,
} from '../../store';
import Search from '../../components/Search';
import Root from './styles';

type Props = {
  artist: Artist | null;
  similar: Artists;
  setArtist: SetArtist;
  setSimilar: SetSimilar;
};

const List: FC<Props> = ({ artist, similar, setArtist, setSimilar }) => {
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

const mapStateToProps = (state: RootState) => ({
  artist: state.list.artist,
  similar: state.list.similar,
});

const mapDispatchToProps = { setArtist, setSimilar };

export default connect(mapStateToProps, mapDispatchToProps)(List);
