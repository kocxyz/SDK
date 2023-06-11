import { KOCEvent } from '../event';

export type KOCNewsServerEvent = KOCEvent & {
  type: '_news';
  news: {
    new_news: unknown[];
    triggers: KOCNewsTrigger;
  };
};

type KOCNewsTrigger = {
  actions: KOCNewsActionsTrigger[];
};

type KOCNewsActionsTrigger = {
  render: [KOCNewsActionRenderTitle, KOCNewsActionRenderText, KOCNewsActionRenderImageIndex];
};

type KOCNewsActionRender = {
  name: 'title' | 'text' | 'image_index';
  value: string | null;
};

type KOCNewsActionRenderTitle = KOCNewsActionRender & {
  name: 'title';
  value: null;
};

type KOCNewsActionRenderText = KOCNewsActionRender & {
  name: 'text';
  value: null;
};

type KOCNewsActionRenderImageIndex = KOCNewsActionRender & {
  name: 'image_index';
  value: '0';
};
