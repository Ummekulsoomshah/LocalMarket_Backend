


// // // Required libraries
// // const express = require('express');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const crypto = require('crypto');
// // const { URLSearchParams } = require('url');
// // require('dotenv').config();

// // // Environment variables (ensure these are set in your .env file)
// // const {
// //   MERCHANT_ID,
// //   MERCHANT_KEY,
// //   RETURN_URL,
// //   CANCEL_URL,
// //   NOTIFY_URL,
// //   PASS_PHRASE, // Optional
// //   PORT = 3000,
// // } = process.env;

// // // Check if essential environment variables are set
// // if (!MERCHANT_ID || !MERCHANT_KEY || !RETURN_URL || !CANCEL_URL || !NOTIFY_URL) {
// //   console.error('Missing one or more essential environment variables. Please check your .env file.');
// //   process.exit(1);
// // }

// // // Create Express app
// // const app = express();

// // // Middleware setup
// // app.use(cors()); // Allow CORS from frontend
// // app.use(bodyParser.json());

// // // Utility function to generate PayFast signature
// // function generateSignature(params, passphrase = '') {
// //   let output = '';

// //   // Ensure parameters are sorted alphabetically
// //   Object.keys(params).sort().forEach((key) => {
// //     const value = params[key];

// //     // Skip undefined, null, or empty string values
// //     if (value !== undefined && value !== null && value !== '') {
// //       output += `${key}=${encodeURIComponent(String(value).trim()).replace(/%20/g, '+')}&`;
// //     }
// //   });

// //   output = output.slice(0, -1); // Remove the trailing '&' character

// //   // Add passphrase if provided (for added security)
// //   if (passphrase && String(passphrase).trim() !== '') {
// //     output += `&passphrase=${encodeURIComponent(String(passphrase).trim()).replace(/%20/g, '+')}`;
// //   }

// //   // Debugging: Log the generated string for signature
// //   console.log('Generated string for signature:', output);

// //   // Return MD5 hash of the query string
// //   return crypto.createHash('md5').update(output).digest('hex');
// // }

// // // PayFast payment link route
// // app.post('/api/payfast', (req, res) => {
// //   try {
// //     const { amount, email, firstName, lastName } = req.body;

// //     // Validate required fields in the request body
// //     if (!amount || !email || !firstName || !lastName) {
// //       return res.status(400).json({ error: 'Missing required fields' });
// //     }

// //     // Data to be sent to PayFast
// //     const data = {
// //       merchant_id: MERCHANT_ID,
// //       merchant_key: MERCHANT_KEY,
// //       return_url: RETURN_URL,
// //       cancel_url: CANCEL_URL,
// //       notify_url: NOTIFY_URL,
// //       amount: amount,
// //       item_name: `Payment from ${firstName} ${lastName}`,
// //       name_first: firstName,
// //       name_last: lastName,
// //       email_address: email,
// //     };

// //     // Generate signature
// //     const signature = generateSignature(data, PASS_PHRASE || '');

// //     // Prepare query string with signature
// //     const queryString = new URLSearchParams({ ...data, signature }).toString();

// //     // PayFast sandbox URL for payment processing
// //     const payfastUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;

// //     console.log('Generated PayFast URL:', payfastUrl);

// //     // Send the generated URL as a response
// //     res.json({ url: payfastUrl });
// //   } catch (error) {
// //     console.error('Server error:', error.message);
// //     res.status(500).json({ error: 'Server error occurred' });
// //   }
// // });

// // // Default route (optional)
// // app.get('/', (req, res) => {
// //   res.send('PayFast Payment Server is running.');
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });



// // Required libraries
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const crypto = require('crypto');
// const { URLSearchParams } = require('url');
// require('dotenv').config();

// // Environment variables (ensure these are set in your .env file)
// const {
//   MERCHANT_ID,
//   MERCHANT_KEY,
//   RETURN_URL,
//   CANCEL_URL,
//   NOTIFY_URL,
//   PASS_PHRASE, // Optional passphrase
//   PORT = 3001,
// } = process.env;

// // Check if essential environment variables are set
// if (!MERCHANT_ID || !MERCHANT_KEY || !RETURN_URL || !CANCEL_URL || !NOTIFY_URL) {
//   console.error('Missing one or more essential environment variables. Please check your .env file.');
//   process.exit(1);
// }

// // Create Express app
// const app = express();

// // Middleware setup
// app.use(cors()); // Allow CORS from frontend
// app.use(bodyParser.json());

// // Utility function to generate PayFast signature
// function generateSignature(params, passphrase = '') {
//   let output = '';

//   // Ensure parameters are sorted alphabetically
//   Object.keys(params).sort().forEach((key) => {
//     const value = params[key];

//     // Skip undefined, null, or empty string values
//     if (value !== undefined && value !== null && value !== '') {
//       output += `${key}=${encodeURIComponent(String(value).trim()).replace(/%20/g, '+')}&`;
//     }
//   });

//   output = output.slice(0, -1); // Remove the trailing '&' character

//   // Add passphrase if provided (for added security)
//   if (passphrase && String(passphrase).trim() !== '') {
//     output += `&passphrase=${encodeURIComponent(String(passphrase).trim()).replace(/%20/g, '+')}`;
//   }

//   // Debugging: Log the generated string for signature
//   console.log('Generated string for signature:', output);

//   // Return MD5 hash of the query string
//   return crypto.createHash('md5').update(output).digest('hex');
// }

// // PayFast payment link route
// app.post('/api/payfast', (req, res) => {
//   try {
//     const { amount, email, firstName, lastName } = req.body;

//     // Validate required fields in the request body
//     if (!amount || !email || !firstName || !lastName) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Data to be sent to PayFast
//     const data = {
//       merchant_id: MERCHANT_ID,
//       merchant_key: MERCHANT_KEY,
//       return_url: RETURN_URL,
//       cancel_url: CANCEL_URL,
//       notify_url: NOTIFY_URL,
//       amount: amount,
//       item_name: `Payment from ${firstName} ${lastName}`,
//       name_first: firstName,
//       name_last: lastName,
//       email_address: email,
//     };

//     // Generate signature
//     const signature = generateSignature(data, PASS_PHRASE || '');

//     // Prepare query string with signature
//     const queryString = new URLSearchParams({ ...data, signature }).toString();

//     // PayFast sandbox URL for payment processing
//     const payfastUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;

//     console.log('Generated PayFast URL:', payfastUrl);

//     // Send the generated URL as a response
//     res.json({ url: payfastUrl });
//   } catch (error) {
//     console.error('Server error:', error.message);
//     res.status(500).json({ error: 'Server error occurred' });
//   }
// });

// // Default route (optional)
// app.get('/', (req, res) => {
//   res.send('PayFast Payment Server is running.');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// Required libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { URLSearchParams } = require('url');
require('dotenv').config();

// Environment variables (ensure these are set in your .env file)
const {
  MERCHANT_ID,
  MERCHANT_KEY,
  RETURN_URL,
  CANCEL_URL,
  NOTIFY_URL,
  PASS_PHRASE, // Optional passphrase
  PORT = 3001,
} = process.env;

// Check if essential environment variables are set
if (!MERCHANT_ID || !MERCHANT_KEY || !RETURN_URL || !CANCEL_URL || !NOTIFY_URL) {
  console.error('Missing one or more essential environment variables. Please check your .env file.');
  process.exit(1);
}

// Create Express app
const app = express();

// Middleware setup
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from frontend running on port 3000
app.use(bodyParser.json());

// Utility function to generate PayFast signature
function generateSignature(params, passphrase = '') {
  let output = '';

  // Ensure parameters are sorted alphabetically
  Object.keys(params).sort().forEach((key) => {
    const value = params[key];

    // Skip undefined, null, or empty string values
    if (value !== undefined && value !== null && value !== '') {
      output += `${key}=${encodeURIComponent(String(value).trim()).replace(/%20/g, '+')}&`;
    }
  });

  output = output.slice(0, -1); // Remove the trailing '&' character

  // Add passphrase if provided (for added security)
  if (passphrase && String(passphrase).trim() !== '') {
    output += `&passphrase=${encodeURIComponent(String(passphrase).trim()).replace(/%20/g, '+')}`;
  }

  // Debugging: Log the generated string for signature
  console.log('Generated string for signature:', output);

  // Return MD5 hash of the query string
  return crypto.createHash('md5').update(output).digest('hex');
}

// PayFast payment link route
app.post('/api/payfast', (req, res) => {
  try {
    const { amount, email, firstName, lastName } = req.body;

    // Validate required fields in the request body
    if (!amount || !email || !firstName || !lastName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Data to be sent to PayFast
    const data = {
      merchant_id: MERCHANT_ID,
      merchant_key: MERCHANT_KEY,
      return_url: RETURN_URL,
      cancel_url: CANCEL_URL,
      notify_url: NOTIFY_URL,
      amount: amount,
      item_name: `Payment from ${firstName} ${lastName}`,
      name_first: firstName,
      name_last: lastName,
      email_address: email,
    };

    // Generate signature
    const signature = generateSignature(data, PASS_PHRASE || '');

    // Prepare query string with signature
    const queryString = new URLSearchParams({ ...data, signature }).toString();

    // PayFast sandbox URL for payment processing
    const payfastUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;

    console.log('Generated PayFast URL:', payfastUrl);

    // Send the generated URL as a response
    res.json({ url: payfastUrl });
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).json({ error: 'Server error occurred' });
  }
});

// Default route (optional)
app.get('/', (req, res) => {
  res.send('PayFast Payment Server is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
