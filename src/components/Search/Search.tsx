import React, { FC, ChangeEvent, useState, useMemo, useEffect } from 'react';

import api from '../../api';
import { Artist, Artists } from '../../types';

import { Input,  Item } from './styles';

type Props = { onSelect: (artist: Artist) => void };

const Search: FC<Props> = ({ onSelect }) => {
  // Hooks
  const [searchValue, setSearchValue] = useState<string>('');
  const [artists, setArtists] = useState<Artists>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const defaultMessage = useMemo(
    () =>
      loading
        ? 'Loading...'
        : searchValue
        ? 'No artists were found'
        : 'Search for your favorite artist',
    [searchValue, loading]
  );

  useEffect(() => {}, []);

  // Handlers
  const handleChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(ev.target.value);
    fetchSuggestions(ev.target.value);
  };

  const handleSelect = (artist: Artist) => {
    setSearchValue('');
    setArtists([]);

    onSelect(artist);
  };

  const fetchSuggestions = async (search: string) => {
    if (search) {
      setLoading(true);

      const artists = await api.artists.search(search);

      setArtists(artists);
      setLoading(false);
    } else {
      setArtists([]);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />

      <ul>
        {artists.length ? (
          artists.map((s, i) => (
            <Item key={s.id + i} onClick={() => handleSelect(s)}>
              {s.name}
            </Item>
          ))
        ) : (
          <Item disabled>{defaultMessage}</Item>
        )}
      </ul>
    </div>
  );
};

export default Search;
