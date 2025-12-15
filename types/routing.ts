export interface BankInfo {
  routingNumber: string;
  bankName: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  recordType?: string;
  changeDate?: string;
  newRoutingNumber?: string;
}

export interface VerificationResult {
  isValid: boolean;
  isValidFormat: boolean;
  isValidCheckDigit: boolean;
  isInDatabase: boolean;
  bankInfo?: BankInfo;
  error?: string;
}

