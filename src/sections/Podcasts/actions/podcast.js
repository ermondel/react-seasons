import { PODCASTS_ITEM_SELECTED } from '../../../types';

export const selectPodcast = (podcast) => ({
  type: PODCASTS_ITEM_SELECTED,
  payload: podcast,
});
