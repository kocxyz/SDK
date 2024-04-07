import { KOCEvent } from '@/types/events/event';

export type KOCReportSubmissionResultServerEvent = KOCEvent & {
  type: '_report_submission_result';
} & ({ success: true } | { success: false; error_code: number });
