import type { KOCEvent } from '@/types/events/event';

export type KOCUserRequestPresenceByPartialNameClientEvent = KOCEvent & {
  type: '_user_request_presence_by_partial_name';
  partial_name: string;
  restrict_to_persona_namespace: null;
};
