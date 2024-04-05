import { KOCUserId, UUID5Seg } from '@/types/id';

export type KOCCrew = {
  /**
   * The UUID of the crew.
   */
  uuid: UUID5Seg;
  /**
   * The name of the crew.
   */
  name: string;
  /**
   * Wheather the crew name is visible.
   * If false, the crew name will be replaced with ****.
   */
  name_visible: boolean;
  /**
   * The user Id of the crew's captain.
   */
  captain: KOCUserId;
  /**
   * The user Id of the user that named the crew.
   */
  namer: KOCUserId;
  /**
   * The crew code.
   * Will be displayed as #XXXX after the crew name on certain screens.
   *
   * @exmple 1234
   */
  crew_code: number;
  /**
   * The UUID of the crews banner icon.
   */
  crew_banner: UUID5Seg;
};
