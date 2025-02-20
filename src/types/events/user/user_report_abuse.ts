import type { KOCEvent } from '@/types/events/event';
import type { KOCUserId } from '@/types/id';

export type KOCUserReportAbuseClientEvent =
  | KOCReportCheating
  | KOCReportHarassment
  | KOCReportUnsportsmanlikeBehavior
  | KOCReportInappropriateBehavior
  | KOCReportViolentBehavior
  | KOCReportOffensiveBehavior
  | KOCReportChildSolicitation
  | KOCReportSuicideThreat
  | KOCReportInappropriateUsername
  | KOCReportInappropriateKOCId;

export type KOCUserReportAbuseClientEventBase = KOCEvent & {
  type: '_user_report_abuse';
  target_user_id: KOCUserId;

  subject: string;

  username_type: KOCReportUsernameType;
  report_category: KOCReportCategory;
  report_content_type: KOCReportContentType;

  location: string;
};

export type KOCReportUsernameType =
  // Irrelevant
  | 0
  // KOC ID
  | 1
  // Username
  | 2;

export type KOCReportCategory =
  // Cheating / Unsportsmanlike Behavior
  | 0
  // Harassment
  | 1
  // Child Solicitation
  | 6
  // Suicide Threat
  | 10
  // Inappropriate Username / Inappropriate KOC ID
  | 13
  // Violent Behavior
  | 14
  // Inappropriate Behavior / Offensive Behavior
  | 15;

export type KOCReportContentType =
  // Irrelevant
  | 0
  // Username / KOC ID
  | 11
  // Crew Name
  | 12;

export type KOCReportCheating = KOCUserReportAbuseClientEventBase & {
  subject: 'cheating';
  username_type: 0;
  report_category: 0;
  report_content_type: 0;
};

export type KOCReportHarassment = KOCUserReportAbuseClientEventBase & {
  subject: 'harassment';
  username_type: 0;
  report_category: 1;
  report_content_type: 0;
};

export type KOCReportUnsportsmanlikeBehavior = KOCUserReportAbuseClientEventBase & {
  subject: 'unsportsmanlike_behavior';
  username_type: 0;
  report_category: 0;
  report_content_type: 0;
};

export type KOCReportInappropriateBehavior = KOCUserReportAbuseClientEventBase & {
  subject: 'inappropriate_behavior';
  username_type: 0;
  report_category: 15;
  report_content_type: 0;
};

export type KOCReportViolentBehavior = KOCUserReportAbuseClientEventBase & {
  subject: 'violent_behavior';
  username_type: 0;
  report_category: 14;
  report_content_type: 0;
};

export type KOCReportOffensiveBehavior = KOCUserReportAbuseClientEventBase & {
  subject: 'offensive_behavior';
  username_type: 0;
  report_category: 15;
  report_content_type: 0;
};

export type KOCReportChildSolicitation = KOCUserReportAbuseClientEventBase & {
  subject: 'child_solicitation';
  username_type: 0;
  report_category: 6;
  report_content_type: 0;
};

export type KOCReportSuicideThreat = KOCUserReportAbuseClientEventBase & {
  subject: 'suicide_threat';
  username_type: 0;
  report_category: 10;
  report_content_type: 0;
};

export type KOCReportInappropriateUsername = KOCUserReportAbuseClientEventBase & {
  subject: 'Inappropriate Username';
  username_type: 2;
  report_category: 13;
  report_content_type: 11;
};

export type KOCReportInappropriateKOCId = KOCUserReportAbuseClientEventBase & {
  subject: 'Inappropriate KO City ID';
  username_type: 1;
  report_category: 13;
  report_content_type: 11;
};
