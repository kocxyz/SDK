import { KOCEvent } from '@/types';

type KOCMapDef =
  | 'spindiner_standard.map_def'
  | 'jailyard_standard.map_def'
  | 'crashsite_standard.map_def'
  | 'construction_6ball.map_def'
  | 'rooftops_standard.map_def'
  | 'holowood_standard.map_def'
  | 'sludge_standard.map_def';
type KOCMatchRule = 'dm_2t1_bo3_notimelimit.match_rules' | 'dm_2t3_bo3_5m_ot.match_rules';
type KOCBallLoadout =
  | 's08_basic_5_all_2.ball_loadout'
  | 's08_basic_2_all_2.ball_loadout'
  | 's08_basic_4_all_2.ball_loadout'
  | 's06_basic_4_all_2.ball_loadout'
  | 'basic_6.ball_loadout'
  | 'basic_5_soda_2.ball_loadout'
  | 'basic-5.ball_loadout'
  | 'basic_4_sniper_2.ball_loadout'
  | 'basic_3_bomb_2.ball_loadout';

export type KOCMatchmakingUpdateGameLoadoutGameServerEvent = KOCEvent & {
  type: '_matchmaking_update_game_loadout';
  map: KOCMapDef;
  game_mode: KOCMatchRule;
  ball_loadout: KOCBallLoadout;
};
