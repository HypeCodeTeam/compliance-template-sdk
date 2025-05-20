export interface ComplianceData {
    status: string;
    lastChecked: string;
    rules: {
        id: string;
        description: string;
        passed: boolean;
    }[];
}
export declare function getComplianceData(): Promise<ComplianceData>;
