import { KOCDatabaseId } from './id';

// https://stackoverflow.com/a/70307091
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;

export type KOCUserSettings = {
  catch_private_server: '1';
  user_settings_version: '8';
  // Invert Camera Y-Axis
  'control_user_settings_data.vscript.cam_y_axis_inverted': `${Range<0, 1>}`;
  // Controller Camera X Sensitivity
  'control_user_settings_data.vscript.controller_cam_x_sensitivity': `${Range<0, 20>}`;
  // Controller Camera Y Sensitivity
  'control_user_settings_data.vscript.controller_cam_y_sensitivity': `${Range<0, 20>}`;
  // Left Stick Deadzone
  'control_user_settings_data.vscript.left_stick_inner_dead_zone': `${Range<0, 50>}`;
  // Right Stick Deadzone
  'control_user_settings_data.vscript.right_stick_inner_dead_zone': `${Range<0, 50>}`;
  // Trigger Sensitivity
  'control_user_settings_data.vscript.trigger_sensitivity': `${Range<0, 2>}`;
  // Controller Vibration
  'control_user_settings_data.vscript.controller_rumble_enabled': `${Range<0, 1>}`;
  // Ballform Button
  // 0 - Hold
  // 1 - Toggle
  'control_user_settings_data.vscript.ballform_toggle': `${Range<0, 1>}`;
  // Throw Button
  // 0 - Hold
  // 1 - Toggle
  'control_user_settings_data.vscript.throw_toggle': `${Range<0, 1>}`;
  // Pass Button
  // 0 - Hold
  // 1 - Toggle
  'control_user_settings_data.vscript.pass_toggle': `${Range<0, 1>}`;
  // Glide Button
  // 0 - Hold
  // 1 - Toggle
  'control_user_settings_data.vscript.glide_toggle': `${Range<0, 1>}`;
  // Spring Button
  // 0 - Hold
  // 1 - Toggle
  // 2 - Auto
  'control_user_settings_data.vscript.sprint_toggle': `${Range<0, 2>}`;
  // Curve Throw Direction
  // 0 - Manual
  // 1 - Auto
  // 2 - Hybrid
  'control_user_settings_data.vscript.curve_throw_direction': `${Range<0, 2>}`;
  // Sprint Cancel Delay
  'control_user_settings_data.vscript.sprint_throw_cancel_delay': `${Range<0, 8>}`;

  'control_user_settings_data.vscript.hide_spectating_hud_toggle': `${number}`;
  'control_user_settings_data.vscript.initialized': `${number}`;
  'presence_user_settings_data.vscript.appear_offline': `${number}`;
  'presence_user_settings_data.vscript.crossplay_allowed': `${number}`;
  'presence_user_settings_data.vscript.initialized': `${number}`;
  'gameplay_user_settings_data.vscript.respawn_tips_enabled': `${number}`;
  'gameplay_user_settings_data.vscript.drink_xp_display_enabled': `${number}`;
  'gameplay_user_settings_data.vscript.sprint_blur_enabled': `${number}`;
  'gameplay_user_settings_data.vscript.ball_warning_thickness': `${number}`;
  'gameplay_user_settings_data.vscript.net_perf_summary_enabled': `${number}`;
  'gameplay_user_settings_data.vscript.screen_safezone_level': `${number}`;
  'gameplay_user_settings_data.vscript.display_mode': `${number}`;
  'gameplay_user_settings_data.vscript.display_mode_scarlett_ps5': `${number}`;
  'gameplay_user_settings_data.vscript.nic_hash': `${number}`;
  'gameplay_user_settings_data.vscript.initialized': `${number}`;
  'audio_user_settings_data.vscript.master_music_volume': `${number}`;
  'audio_user_settings_data.vscript.match_music_volume': `${number}`;
  'audio_user_settings_data.vscript.sfx_volume': `${number}`;
  'audio_user_settings_data.vscript.dialog_volume': `${number}`;
  'audio_user_settings_data.vscript.announcer_volume': `${number}`;
  'audio_user_settings_data.vscript.crowd_volume': `${number}`;
  'audio_user_settings_data.vscript.chat_output_volume': `${number}`;
  'audio_user_settings_data.vscript.chat_xbox_output_volume': `${number}`;
  'audio_user_settings_data.vscript.chat_input_volume': `${number}`;
  'audio_user_settings_data.vscript.chat_availability': `${number}`;
  'audio_user_settings_data.vscript.push_to_talk_enabled': `${number}`;
  'audio_user_settings_data.vscript.subtitles_enabled': `${number}`;
  'audio_user_settings_data.vscript.speech_to_text_enabled': `${number}`;
  'audio_user_settings_data.vscript.text_to_speech_enabled': `${number}`;
  'audio_user_settings_data.vscript.chat_log_text_size': `${number}`;
  'audio_user_settings_data.vscript.chat_log_background': `${number}`;
  'audio_user_settings_data.vscript.initialized': `${number}`;
  'social_user_settings_data.vscript.notification_duration': `${number}`;
  'social_user_settings_data.vscript.receive_friend_requests': `${number}`;
  'social_user_settings_data.vscript.receive_group_invites': `${number}`;
  'social_user_settings_data.vscript.receive_crew_invites': `${number}`;
  'social_user_settings_data.vscript.receive_crew_invite_requests': `${number}`;
  'social_user_settings_data.vscript.display_notifications': `${number}`;
  'social_user_settings_data.vscript.enable_taunts': `${number}`;
  'social_user_settings_data.vscript.share_usage_data': `${number}`;
  'social_user_settings_data.vscript.initialized': `${number}`;
  respawn_tips_index: `${number}`;
  velan_login_legal_terms_accepted: `${number}`;
  market_backfilled_day: `${number}`;
  market_backfilled_offers_0: KOCDatabaseId | 'NULL_OFFER';
  contracts_viewed_utc_timestamp: `${number}`;
  tracked_contract_def_a: `${number}`;
  tracked_contract_def_b: `${number}`;
  tracked_contract_def_c: `${number}`;
  tracked_contract_def_d: `${number}`;
  tracked_crew: `${number}`;
  contract_viewed_tutrl_0: `${number}`;
  contract_viewed_14_0: `${number}`;
  'audio_user_settings_data.vscript.master_volume': `${number}`;
  s09_accessory_seen_player_icon_1: `${number}`;
  s05_accessory_seen_player_icon_1: `${number}`;
  accessory_seen_player_icon_2: `${number}`;
  s06_accessory_seen_player_icon_1: `${number}`;
  accessory_seen_outfits_2: `${number}`;
  s09_accessory_seen_outfits_1: `${number}`;
  s06_accessory_seen_outfits_1: `${number}`;
  accessory_seen_outfits_1: `${number}`;
  s04_accessory_seen_head_1: `${number}`;
  hint_last_hideout_visit_utc: `${number}`;
  s09_accessory_seen_head_1: `${number}`;
  accessory_seen_head_1: `${number}`;
  s09_accessory_seen_hair_1: `${number}`;
  s08_accessory_seen_hair_1: `${number}`;
  accessory_seen_hair_1: `${number}`;
  s02_accessory_seen_glasses_1: `${number}`;
  accessory_seen_glasses_1: `${number}`;
  s05_accessory_seen_gloves_1: `${number}`;
  accessory_seen_gloves_1: `${number}`;
  s07_accessory_seen_gloves_1: `${number}`;
  s09_accessory_seen_gloves_1: `${number}`;
  s06_accessory_seen_gloves_1: `${number}`;
  s08_accessory_seen_gloves_1: `${number}`;
  s04_accessory_seen_gloves_1: `${number}`;
  s03_accessory_seen_gloves_1: `${number}`;
  s02_accessory_seen_gloves_1: `${number}`;
  accessory_seen_glider_1: `${number}`;
  s09_accessory_seen_glider_1: `${number}`;
  s02_accessory_seen_glider_1: `${number}`;
  s06_accessory_seen_glider_1: `${number}`;
  s03_accessory_seen_glider_1: `${number}`;
  s08_accessory_seen_ult_throw_1: `${number}`;
  s05_accessory_seen_ult_throw_1: `${number}`;
  s07_accessory_seen_ult_throw_1: `${number}`;
  s09_accessory_seen_ult_throw_1: `${number}`;
  s02_accessory_seen_ult_throw_1: `${number}`;
  camera_inverse_setting: `${number}`;
} & Partial<KOCUserSettingsKeymap>;

type KOCUserSettingsKeymapValue =
  // Value other then default
  | `${number},${number}`
  // Reset to default
  | '-';

type KOCUserSettingsKeymapType =
  // Move Forward
  | 'keymap_move_forward_1'
  // Move Backwards
  | 'keymap_move_backward_1'
  // Strafe Left
  | 'keymap_move_left_1'
  // Strafe Right
  | 'keymap_move_right_1'
  // Look Up
  | 'keymap_look_up_1'
  // Look Down
  | 'keymap_look_down_1'
  // Look Left
  | 'keymap_look_left_1'
  // Look Right
  | 'keymap_look_right_1'
  // Throw
  | 'keymap_throw_1'
  // Fake Throw
  | 'keymap_fake_throw_1'
  // Pass
  | 'keymap_pass_1'
  // Drop Ball
  | 'keymap_drop_1'
  // Catch
  | 'keymap_catch_1'
  // Dodge
  | 'keymap_dash_1'
  // Ballform
  | 'keymap_ballform_1'
  // Sprint
  | 'keymap_sprint_1'
  // Jump
  | 'keymap_jump_1'
  // Spin
  | 'keymap_spin_1'
  // Flip
  | 'keymap_flip_1'
  // Taunt
  | 'keymap_taunt_1'
  // Additional Emote
  | 'keymap_ping_1'
  // Interact
  | 'keymap_interact_1'
  // Text-to-Speech
  | 'keymap_text_to_speech_1'
  // Push-to-Talk
  | 'keymap_push_to_talk_1'
  // Match / Contracts Stats
  | 'keymap_mid_match_menu_1';

type KOCUserSettingsKeymap = {
  [key in KOCUserSettingsKeymapType]: KOCUserSettingsKeymapValue;
};
