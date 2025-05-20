"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComplianceData = getComplianceData;
async function getComplianceData() {
    return {
        status: "OK",
        lastChecked: new Date().toISOString(),
        rules: [
            { id: "rule1", description: "Must have valid license", passed: true },
            { id: "rule2", description: "Data encryption in transit", passed: false },
        ],
    };
}
