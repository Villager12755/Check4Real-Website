/**
 * Script to add a routing number to the database
 * Usage: node scripts/add-routing-number.js <routingNumber> <bankName> [address] [city] [state] [zipCode] [phone]
 * 
 * Example:
 * node scripts/add-routing-number.js 123456789 "BANK NAME" "123 Main St" "City" "ST" "12345" "1-800-123-4567"
 */

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: node scripts/add-routing-number.js <routingNumber> <bankName> [address] [city] [state] [zipCode] [phone]');
  console.log('\nExample:');
  console.log('node scripts/add-routing-number.js 123456789 "BANK NAME" "123 Main St" "City" "ST" "12345" "1-800-123-4567"');
  process.exit(1);
}

const routingNumber = args[0].replace(/\D/g, ''); // Remove non-digits
const bankName = args[1];
const address = args[2] || '';
const city = args[3] || '';
const state = args[4] || '';
const zipCode = args[5] || '';
const phone = args[6] || '';

// Validate routing number format
if (!/^\d{9}$/.test(routingNumber)) {
  console.error('Error: Routing number must be exactly 9 digits');
  process.exit(1);
}

// Load existing database
const dbPath = path.join(__dirname, '..', 'data', 'routingNumbers.json');
let database = {};

try {
  const data = fs.readFileSync(dbPath, 'utf8');
  database = JSON.parse(data);
} catch (error) {
  console.error('Error reading database file:', error.message);
  process.exit(1);
}

// Check if routing number already exists
if (database[routingNumber]) {
  console.log(`Routing number ${routingNumber} already exists in database:`);
  console.log(JSON.stringify(database[routingNumber], null, 2));
  console.log('\nDo you want to update it? (This will overwrite existing data)');
  // For now, just update it
}

// Add/update routing number
database[routingNumber] = {
  routingNumber: routingNumber,
  bankName: bankName.toUpperCase(),
  address: address.toUpperCase() || undefined,
  city: city.toUpperCase() || undefined,
  state: state.toUpperCase() || undefined,
  zipCode: zipCode || undefined,
  phone: phone || undefined,
  recordType: "1",
  changeDate: new Date().toLocaleDateString('en-US', { 
    month: '2-digit', 
    day: '2-digit', 
    year: '2-digit' 
  }).replace(/\//g, '')
};

// Remove undefined fields
Object.keys(database[routingNumber]).forEach(key => {
  if (database[routingNumber][key] === undefined) {
    delete database[routingNumber][key];
  }
});

// Write back to file
try {
  fs.writeFileSync(dbPath, JSON.stringify(database, null, 2) + '\n', 'utf8');
  console.log(`\n✅ Successfully added routing number ${routingNumber} to database!`);
  console.log('\nBank Information:');
  console.log(JSON.stringify(database[routingNumber], null, 2));
} catch (error) {
  console.error('Error writing to database file:', error.message);
  process.exit(1);
}

