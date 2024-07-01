export type KOCServerTunables =
  // AB-Testing
  | 'ab_experiment_upsell_freq_behavior'
  | 'ab_experiment_no_new_player_matchmaking_behavior'
  | 'ab_experiment_linear_ftue_behavior'
  | 'ab_experiment_breadcrumbs_no_ftue_behavior'
  | 'ab_experiment_breadcrumbs_ftue_behavior'
  | 'ab_experiment_daily_hideout_bonus_behavior'
  | 'ab_experiment_new_news_screen_behavior'
  | 'ab_experiment_ps4_sim_step_slow_behavior'
  | 'ab_experiment_xb1_sim_step_slow_behavior'

  // Client
  | 'client_reconnect_interval_ms'
  | 'client_reconnect_attempt_limit'
  | 'client_display_crossplay_enable_popup'

  // Commerce
  | 'periodic_upsell_rate_for_1st_visit_seconds'
  | 'periodic_upsell_rate_for_2nd_visit_seconds'
  | 'confirm_platform_purchase_rate_limit_ms'

  // Cohort
  | 'active_cohort_set'
  | 'cohort_override'

  // Droids
  | 'droid_skill_offset'
  | 'droid_human_vs_human_skill_offset'

  // Emoting and Taunting
  | 'emote_cooldown_seconds'
  | 'emote_cooldown_stock'
  | 'emote_cooldown_stock_replenish_seconds'
  | 'taunt_cooldown_seconds'
  | 'taunt_cooldown_stock'
  | 'taunt_cooldown_stock_replenish_seconds'

  // Gameplay
  | 'min_games_played_to_unlock_all_quickplay'
  | 'min_wins_to_unlock_ranked'

  // Inactivity
  | 'solo_inactivity_seconds'
  | 'group_inactivity_seconds'
  | 'public_gameplay_inactivity_seconds'
  | 'commerce_and_credits_inactivity_seconds'
  | 'matchmaking_inactivity_seconds'

  // Misc
  | 'debug_loadtest_current_season'
  | 'debug_utc_set_at'
  | 'catch_data_collection_max_distance'
  | 'daily_hideout_bonus_max_days'
  | 'match_score_blowout_percentage'
  | 'use_legacy_player_connection_logic'

  // Network
  | 'server_simulated_lag_settings_override'
  | 'netrep_packet_max_high_bandwidth'
  | 'netrep_packet_max_low_bandwidth'
  | 'client_token_expiration_ms'
  | 'game_server_configure_ttl_seconds'

  // Penalty
  | 'quit_penalty_marks_per_quickplay'
  | 'quit_penalty_marks_per_ranked'
  | 'max_quit_penalty_mark_count'
  | 'quit_penalty_marks_removed_per_match'
  | 'quit_penalty_marks_removed_per_day'

  // Skill
  | 'mmr_loss_on_quit'
  | 'new_player_mmr_discount_wins_count'
  | 'new_player_raw_street_level'
  | 'default_skill_rating_change_on_win'
  | 'default_skill_rating_change_on_loss'
  | 'skill_rating_multiplier_on_win_with_high_mmr'
  | 'skill_rating_multiplier_on_loss_with_high_mmr'
  | 'skill_rating_multiplier_on_win_with_low_mmr'
  | 'skill_rating_multiplier_on_loss_with_low_mmr'
  | 'skill_rating_change_adjustment_1'
  | 'skill_rating_change_adjustment_1_threshold'
  | 'skill_rating_change_adjustment_2'
  | 'skill_rating_change_adjustment_2_threshold'
  | 'skill_rating_change_adjustment_3'
  | 'skill_rating_change_adjustment_3_threshold'
  | 'skill_rating_mmr_difference_adjustment_threshold'
  | 'skill_decay_threshold'
  | 'skill_decay_amount'
  | 'missing_teammate_loss_forgiveness_match_percentage'
  | 'loss_forgiveness_skill_rating_bonus_percentage'
  | 'max_tier_that_allows_for_loss_forgiveness'
  | 'max_tier_that_allows_for_loss_forgiveness_bonus_point'

  // Street Rank
  | 'match_xp_multiplier'
  | 'matchmaking_multiplier'
  | 'respawn_tips_max_street_rank'

  // Thresholds and Limits
  | 'server_reconnect_attempt_limit'
  | 'client_reconnect_attempt_limit'
  | 'playable_ping_max'
  | 'crew_lookups_max'
  | 'eaten_throw_threshold_ms'
  | 'ping_alert_threshold'
  | 'loss_alert_threshold'
  | 'jitter_alert_threshold'

  // Timeouts
  | 'ping_timeout_ms'
  | 'present_match_timeout_seconds'
  | 'client_matchmaking_request_timeout_ms'
  | 'load_hideout_cosmetics_timeout_seconds'
  | 'load_hideout_timeout_seconds'
  | 'load_match_jip_cosmetics_timeout_seconds'
  | 'load_match_jip_timeout_seconds'
  | 'load_match_cosmetics_timeout_seconds'
  | 'load_match_timeout_seconds'

  // UI
  | 'leaderboard_page_size_max'
  | 'training_reminder_popup_interval_minutes'
  | 'client_display_crossplay_enable_popup'
  | 'cooldown_hud_display_seconds'
  | 'contract_hud_widget_display_time_seconds'
  | 'fun_survey_appearance_rate';
