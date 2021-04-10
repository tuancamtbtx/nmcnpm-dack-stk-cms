export interface IJob {
  key: string;
  name: string;
  revisionId: string,
  modelVersion: string,
  status: "Running" | "Pending" | "Failed" | "Success";
  blockDef: string,
  createdBy?: string;
  createdTime?: string;
}
