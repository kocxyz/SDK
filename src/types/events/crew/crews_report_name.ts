import type { KOCEvent } from '@/types/events/event';
import type { UUID5Seg } from '@/types/id';

export type KOCCrewsReportNameClientEvent = KOCEvent & {
  type: '_crews_report_name';
  crew_guid: UUID5Seg;

  subject: string;

  report_category: 13;
  report_content_type: 12;

  location: string;
};
