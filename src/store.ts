import { createStore, combineReducers } from 'redux';

import { Artist, Artists } from './types';
// ACTIONS
// Actions types
const SET_ARTIST = 'SET_ARTIST';
const SET_SIMILAR = 'SET_SIMILAR';
type ActionTypes = typeof SET_ARTIST | typeof SET_SIMILAR;

// Actions
type ArtistAction = { type: typeof SET_ARTIST; payload: Artist };
type SimilarAction = { type: typeof SET_SIMILAR; payload: Artists };
type Action = ArtistAction | SimilarAction;

// Action creators
export const setArtist = (artist: Artist) => ({
  type: SET_ARTIST,
  payload: artist,
});
export type SetArtist = typeof setArtist;
export const setSimilar = (similar: Artists) => ({
  type: SET_SIMILAR,
  payload: similar,
});
export type SetSimilar = typeof setSimilar;

// REDUCER
const initialState: State = { artist: null, similar: [] };
type State = { artist: Artist | null; similar: Artists };

const listReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ARTIST:
      return { ...state, artist: action.payload };
    case SET_SIMILAR:
      return { ...state, similar: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ list: listReducer });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
