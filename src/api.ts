import axios, { AxiosResponse } from 'axios';
import config from './config';
import { Api } from './types';
import { buildArtist, buildArtistDetails } from './helpers';

const instance = axios.create({ baseURL: config.API_BASE });

const api: Api = {
  artists: {
    search: async (search) => {
      try {
        const response: AxiosResponse = await instance.get(
          `?method=artist.search&artist=${search}&api_key=${config.API_KEY}&format=json&limit=10`
        );

        return response.data.results.artistmatches.artist.map(buildArtist);
      } catch (error) {
        console.warn(error);
        return [];
      }
    },
    getSimilar: async (id) => {
      try {
        const response: AxiosResponse = await instance.get(
          `?method=artist.getSimilar&mbid=${id}&api_key=${config.API_KEY}&format=json&limit=10`
        );

        return response.data.similarartists.artist.map(buildArtist);
      } catch (error) {
        console.warn(error);
        return [];
      }
    },
    getTopArtists: async () => {
      try {
        const response: AxiosResponse = await instance.get(
          `?method=artist.getTopArtists&&api_key=${config.API_KEY}&format=json`
        );

        return response.data.similarartists.artist.map(buildArtist);
      } catch (error) {
        console.warn(error);
        return [];
      }
    },
    getInfo: async (id) => {
      try {
        const response: AxiosResponse = await instance.get(
          `?method=artist.getinfo&mbid=${id}&api_key=${config.API_KEY}&format=json`
        );

        return buildArtistDetails(response.data.artist);
      } catch (error) {
        console.warn(error);
        return null;
      }
    },
  },
};
export default api;
