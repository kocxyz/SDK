import { KOCEvent } from '@/types/events/event';

export type KOCNewsServerEvent = KOCEvent & {
  type: '_news';
  news: {
    new_news: unknown[];
    triggers: KOCNewsTrigger[];
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
  value: string;
};

type KOCNewsActionRenderTitle = KOCNewsActionRender & {
  name: 'title';
  value: string;
};

type KOCNewsActionRenderText = KOCNewsActionRender & {
  name: 'text';
  value: string;
};

type KOCNewsActionRenderImageIndex = KOCNewsActionRender & {
  name: 'image_index';
  value: string;
};
