import { PODCAST_SELECTED } from './types';

export const selectPodcast = (podcast) => ({
  type: PODCAST_SELECTED,
  payload: podcast,
});
