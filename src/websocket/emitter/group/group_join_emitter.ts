import { KOCEmitter } from "../emitter";

type EmitterGroupJoinParameters = {
  /**
   * The Id of the user who's lobby to join.
   */
  userId: number,
  /**
   * If the join happend through an invite
   */
  joinViaInvite: boolean,
  /**
   * Wheather or not the groups should be
   * merged.
   * 
   * **Hint**: No clue how what it does yet.
   */
  mergeGroup: boolean
}

export const emitGroupJoin: KOCEmitter<EmitterGroupJoinParameters> = (client, params) => client.emit({
  type: '_group_join',
  user_id: {
    velan: params.userId
  },
  join_via_invite: params.joinViaInvite,
  merge_group: params.mergeGroup
})