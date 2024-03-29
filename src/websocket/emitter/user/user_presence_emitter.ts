import type { PresenceState, RichPresenceState } from '@/types';
import type { KOCClientEmitter } from '@/websocket/emitter/emitter';

type EmitterUserPresenceParameters = {
  presenceState: PresenceState;
  richPresenceState: RichPresenceState;
};

export const emitUserPresence: KOCClientEmitter<EmitterUserPresenceParameters> = (client, params) =>
  client.emit({
    type: '_user_set_presence',
    presence_state: params.presenceState,
    rich_presence_state: params.richPresenceState,
  });
