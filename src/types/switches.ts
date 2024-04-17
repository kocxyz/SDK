export type KOCServerSwitches =
  // Game Server
  | 'server_use_anticheat'

  // Commerce
  | 'allow_purchasing_of_contract_completion'
  | 'disable_market_bundles'
  | 'market_backfill_enabled'
  | 'brawlshop_bank_enabled'
  | 'send_offers_to_backend'
  | 'verify_platform_offers'

  // Content Update
  | 'content_update_slow_download'

  // Events
  | 'enable_happy_hours'

  // First time user experience
  | 'ftue_breadcrumb_vo'
  | 'ftue_breadcrumb_quick_training'

  // Gameplay (Droids)
  | 'enable_droids'
  | 'enable_droid_double_jump'
  | 'enable_droid_commit_to_movement'
  | 'enable_droid_edge_recovery'
  | 'enable_droid_run_from_ultimate_throw'
  | 'enable_replacement_droid'
  | 'disable_droid_filling_in_quickplay'
  | 'disguise_new_player_droids'
  | 'force_droids_in_ranked_match'
  | 'matchmaking_droid_a_b_test'
  | 'enable_jip_bots_only_for_europe_a_b_test'

  // Gameplay (General)
  | 'ult_throw_boost'
  | 'allow_late_curve_shot_direction_change'

  // Misc
  | 'deploy'
  | 'allow_debug_netrep_events'
  | 'server_dump_packets'

  // Skill
  | 'disable_loss_forgiveness'
  | 'disable_loss_forgiveness_prints'

  // Telemetry
  | 'stats_upload_to_s3'
  | 'client_error_stats'
  | 'enable_action_handler_telemetry'
  | 'enable_brawl_shop_telemetry'
  | 'enable_popup_telemetry'

  // UI
  | 'allow_leaderboards_ui'
  | 'leaderboard_rewards_enabled'
  | 'manual_region_selection'
  | 'enable_respawn_tip_ui'
  | 'enable_contextual_tips'
  | 'enable_season_rewards'
  | 'show_playlist_labels'
  | 'disable_crossplay_enable_popup'
  | 'client_show_server_warnings'
  | 'network_next_log_level_debug'

  // Velan
  | 'velan_value_transfer_steam'
  | 'velan_code_redemption';
