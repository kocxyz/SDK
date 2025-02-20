import type { KOCEvent } from '@/types';

export type KOCScriptEventServerEvent = KOCEvent & {
  type: '_script_event';
  /**
   * The name of the vscript event function to trigger on the server.
   */
  event: string;
  /**
   * The arguments to pass to the vscript event function.
   */
  args?: ScriptEventArg[];
};

export type ScriptEventIntArg = {
  int: number;
};

export type ScriptEventArg = ScriptEventIntArg;
