interface RevisedDrg {
  code: number;
  weight: number;
}

export interface worksheetModel {
  dx_code: string;
  description: string;
  primary_diagnosis: boolean;
  poa: boolean;
  affects_drg: boolean;
  mcc_cc_hac: any; // null or specific type if needed
  revised_drg: RevisedDrg;
}
