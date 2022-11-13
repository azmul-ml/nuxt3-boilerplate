/** Api response Type */
export type ApiResponseType = {
  data: any;
  pending: any;
  refresh: (opts?: { dedupe?: boolean }) => Promise<void>;
  execute: () => Promise<void>;
  error: Error | boolean;
};
