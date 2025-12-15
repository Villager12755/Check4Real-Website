import { BankInfo, VerificationResult } from "@/types/routing";

/**
 * Validates the format of a routing number (must be 9 digits)
 */
export function validateRoutingNumberFormat(routingNumber: string): boolean {
  return /^\d{9}$/.test(routingNumber);
}

/**
 * Validates the check digit of a routing number using MOD 10 algorithm
 * The weights are: 3, 7, 1, 3, 7, 1, 3, 7, 1
 */
export function validateCheckDigit(routingNumber: string): boolean {
  if (!validateRoutingNumberFormat(routingNumber)) {
    return false;
  }

  const digits = routingNumber.split("").map(Number);
  const weights = [3, 7, 1, 3, 7, 1, 3, 7, 1];
  
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += digits[i] * weights[i];
  }
  
  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === digits[8];
}

/**
 * Fetches bank information from API
 */
export async function fetchBankInfoFromAPI(routingNumber: string): Promise<BankInfo | null> {
  try {
    const response = await fetch(`/api/verify?routingNumber=${routingNumber}`);
    const data = await response.json();

    // Handle rate limiting
    if (response.status === 429) {
      throw new Error('Rate limit exceeded');
    }

    if (data.found && data.bankInfo) {
      return data.bankInfo;
    }
    return null;
  } catch (error) {
    // Re-throw rate limit errors
    if (error instanceof Error && error.message.includes('rate limit')) {
      throw error;
    }
    console.error('Error fetching bank info:', error);
    return null;
  }
}

/**
 * Complete verification of a routing number
 * Now uses API for bank information lookup
 */
export async function verifyRoutingNumber(routingNumber: string): Promise<VerificationResult> {
  // Remove any non-digit characters
  const cleaned = routingNumber.replace(/\D/g, "");

  // Validate format
  const isValidFormat = validateRoutingNumberFormat(cleaned);
  if (!isValidFormat) {
    return {
      isValid: false,
      isValidFormat: false,
      isValidCheckDigit: false,
      isInDatabase: false,
      error: "Routing number must be exactly 9 digits",
    };
  }

  // Validate check digit
  const isValidCheckDigit = validateCheckDigit(cleaned);
  if (!isValidCheckDigit) {
    return {
      isValid: false,
      isValidFormat: true,
      isValidCheckDigit: false,
      isInDatabase: false,
      error: "Invalid algorithm verification. Please exercise caution and verify again.",
    };
  }

  // Fetch bank info from API
  const bankInfo = await fetchBankInfoFromAPI(cleaned);
  const isInDatabase = bankInfo !== null;

  if (!isInDatabase) {
    return {
      isValid: false,
      isValidFormat: true,
      isValidCheckDigit: true,
      isInDatabase: false,
      error: "Routing number not found in Federal Reserve database",
    };
  }

  return {
    isValid: true,
    isValidFormat: true,
    isValidCheckDigit: true,
    isInDatabase: true,
    bankInfo,
  };
}

