import { KOCUserId } from '../../user';
import { KOCEvent } from '../event';

/**
 * An event to promote a User to the group leader.
 */
export type KOCGroupPromoteLeaderClientEvent = KOCEvent & {
  type: '_group_promote_leader';
  /**
   * The Id of the User to promote to leader.
   */
  user_id: KOCUserId;
};
