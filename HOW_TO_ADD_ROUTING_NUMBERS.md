# How to Add Routing Numbers to the Database

Since the current database only contains a sample set of routing numbers, you'll need to add more as you encounter them. Here's how:

## Quick Method: Using the Script

### Step 1: Get Bank Information

When you have a routing number that passes validation but isn't in the database:

1. **Use ABA's Official Lookup Tool**:
   - Go to: https://routingnumber.aba.com/
   - Enter the routing number
   - Copy the bank name, address, city, state, ZIP, and phone

2. **Or check the check itself**:
   - The bank name is usually printed on the check
   - You can also call the bank to confirm details

### Step 2: Add to Database

Run the script with the information:

```bash
node scripts/add-routing-number.js [routingNumber] "[Bank Name]" "[Address]" "[City]" "[State]" "[ZIP]" "[Phone]"
```

**Example:**
```bash
node scripts/add-routing-number.js 123456789 "FIRST NATIONAL BANK" "123 Main Street" "New York" "NY" "10001" "1-800-123-4567"
```

### Step 3: Test It

1. Restart your dev server if it's running
2. Go to http://localhost:3000
3. Enter the routing number you just added
4. It should now show as valid with bank information!

## Manual Method: Edit JSON Directly

You can also manually edit `data/routingNumbers.json`:

1. Open `data/routingNumbers.json`
2. Add a new entry following this format:

```json
"123456789": {
  "routingNumber": "123456789",
  "bankName": "BANK NAME",
  "address": "STREET ADDRESS",
  "city": "CITY",
  "state": "STATE",
  "zipCode": "ZIPCODE",
  "phone": "PHONE NUMBER",
  "recordType": "1",
  "changeDate": "121424"
}
```

3. Make sure:
   - The key (first line) matches the routing number
   - All routing numbers are 9 digits
   - JSON syntax is correct (commas, quotes, etc.)

## Getting the Complete Database

For production use, you'll want the complete Federal Reserve routing number database:

1. **Contact Federal Reserve** or check their website for the official dataset
2. **Parse the data** (usually CSV or fixed-width format)
3. **Convert to JSON** format matching our structure
4. **Merge** with existing `routingNumbers.json`

The complete database contains thousands of routing numbers, so this is best done programmatically with a conversion script.

## Tips

- **Routing numbers are unique**: Each 9-digit number corresponds to one bank/location
- **Format matters**: Always use uppercase for bank names and addresses
- **Keep it updated**: Add routing numbers as you encounter them
- **Test after adding**: Always verify the routing number works in the app after adding it

## Current Database Size

The current database contains **10 sample routing numbers** from major banks. As you add more, the database will grow and become more useful for verification.

