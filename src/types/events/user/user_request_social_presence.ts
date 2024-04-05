import { KOCEvent } from '@/types/events/event';

export type KOCUserRequestSocialPresenceClientEvent = KOCEvent & {
  type: '_user_request_social_presence';
  velan_friends: true;
};
