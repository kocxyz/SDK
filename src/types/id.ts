export type UUID4Seg = `${string}-${string}-${string}-${string}`;
export type UUID5Seg = `${string}-${string}-${string}-${string}-${string}`;

export type KOCUserId = {
  velan: number;
};

export type KOCUserIdNone = {
  invalid: 0;
};

export type KOCPersonaId = {
  privsrv: 0;
};
