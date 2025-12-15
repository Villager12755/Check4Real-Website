# Routing Number Database

This directory contains the routing number database used for verification.

## Current Status

The `routingNumbers.json` file currently contains a sample set of routing numbers from major banks. To expand this database with the complete Federal Reserve routing number list:

## How to Expand the Database

1. **Download Federal Reserve Data**: 
   - Visit the Federal Reserve's routing number database website
   - Download the latest routing number data file (typically in CSV or fixed-width format)

2. **Parse and Convert to JSON**:
   - The database should follow this structure:
   ```json
   {
     "021000021": {
       "routingNumber": "021000021",
       "bankName": "BANK NAME",
       "address": "STREET ADDRESS",
       "city": "CITY",
       "state": "STATE",
       "zipCode": "ZIPCODE",
       "recordType": "1",
       "changeDate": "MMDDYY",
       "phone": "PHONE NUMBER"
     }
   }
   ```

3. **Update routingNumbers.json**:
   - Merge new data into the existing JSON file
   - Ensure all routing numbers are properly formatted (9 digits)
   - Maintain the key-value structure where the key is the routing number

## Database Format

Each entry should contain:
- `routingNumber`: The 9-digit routing number (required)
- `bankName`: Full name of the bank (required)
- `address`: Street address (optional)
- `city`: City name (optional)
- `state`: State abbreviation (optional)
- `zipCode`: ZIP code (optional)
- `phone`: Phone number (optional)
- `recordType`: Record type code (optional)
- `changeDate`: Date of last change in MMDDYY format (optional)

## Notes

- The database is loaded as a JSON file for fast client-side lookups
- All data is processed client-side for privacy
- The file is included in the build, so large databases will increase bundle size
- Consider using an API or database for production deployments with full datasets

