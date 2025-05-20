export interface ComplianceData {
  status: string;
  lastChecked: string;
  rules: {
    id: string;
    description: string;
    passed: boolean;
  }[];
}

export async function getComplianceData(): Promise<ComplianceData> {

  return {
    status: "OK",
    lastChecked: new Date().toISOString(),
    rules: [
      { id: "rule1", description: "Must have valid license", passed: true },
      { id: "rule2", description: "Data encryption in transit", passed: false },
    ],
  };
}
