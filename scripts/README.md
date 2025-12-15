# Scripts for Managing Routing Number Database

## Adding a Single Routing Number

Use the `add-routing-number.js` script to manually add routing numbers to the database.

### Usage

```bash
node scripts/add-routing-number.js <routingNumber> <bankName> [address] [city] [state] [zipCode] [phone]
```

### Example

```bash
node scripts/add-routing-number.js 123456789 "FIRST NATIONAL BANK" "123 Main Street" "New York" "NY" "10001" "1-800-123-4567"
```

### Finding Bank Information

If you have a routing number but don't know the bank information:

1. **ABA Routing Number Lookup** (Official):
   - Visit: https://routingnumber.aba.com/
   - Enter the routing number
   - Get the bank name and details

2. **Bank Website**:
   - Contact the bank directly
   - Most banks list their routing numbers on their website

3. **Check the Check**:
   - The bank name is usually printed on the check
   - Use that information along with the routing number

### Quick Add Workflow

1. Get the routing number from the check
2. Look up the bank information using ABA's tool or bank website
3. Run the script with the information:
   ```bash
   node scripts/add-routing-number.js [routingNumber] "[Bank Name]" "[Address]" "[City]" "[State]" "[ZIP]" "[Phone]"
   ```
4. Test it in the app by entering the routing number

## Bulk Import

For importing many routing numbers at once, you'll need to:

1. Get the Federal Reserve routing number database (CSV or fixed-width format)
2. Create a conversion script to parse and convert to JSON
3. Merge with existing `data/routingNumbers.json`

The complete Federal Reserve database contains thousands of routing numbers, so bulk import is recommended for production use.

