import { PODCASTS_ITEM_SELECTED } from '@redux/types';

export const selectPodcast = (podcast) => ({
  type: PODCASTS_ITEM_SELECTED,
  payload: podcast,
});
