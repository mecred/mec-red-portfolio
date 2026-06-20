#!/usr/bin/env node
/**
 * Test local du site Diastema Dental Clinic
 * Exécution: node test-local.js
 */

const http = require('http');

const API_URL = 'http://localhost:3000';
const tests = [];

function log(prefix, msg) {
  console.log(`${prefix} ${msg}`);
}

function success(msg) {
  log('✓', msg);
}

function error(msg) {
  log('✗', msg);
}

function info(msg) {
  log('ℹ', msg);
}

// Test 1: Health check
tests.push({
  name: 'GET /api/health',
  run: async () => {
    return fetch(`${API_URL}/api/health`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'OK') {
          success('API is responding');
          return true;
        }
        error('API responded but status is not OK');
        return false;
      })
      .catch(err => {
        error(`API not responding: ${err.message}`);
        return false;
      });
  }
});

// Test 2: Contact form submission
tests.push({
  name: 'POST /api/contact',
  run: async () => {
    const payload = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+213 5 XX XX XX XX',
      message: 'Ceci est un message de test'
    };

    return fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          success(`Contact submitted (ID: ${data.id})`);
          return true;
        }
        error(`Contact submission failed: ${data.error}`);
        return false;
      })
      .catch(err => {
        error(`Contact submission error: ${err.message}`);
        return false;
      });
  }
});

// Test 3: Frontend availability
tests.push({
  name: 'GET / (Frontend)',
  run: async () => {
    return fetch(`${API_URL}/`)
      .then(r => {
        if (r.status === 200) {
          success('Frontend is serving');
          return true;
        }
        error(`Frontend returned status ${r.status}`);
        return false;
      })
      .catch(err => {
        error(`Frontend not available: ${err.message}`);
        return false;
      });
  }
});

// Run all tests
async function runTests() {
  console.log('');
  console.log('🦷 Tests Diastema Dental Clinic Backend');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    info(`Running: ${test.name}`);
    try {
      const result = await test.run();
      if (result) {
        passed++;
      } else {
        failed++;
      }
    } catch (err) {
      error(`Test failed: ${err.message}`);
      failed++;
    }
    console.log('');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log('');

  if (failed === 0) {
    success('All tests passed! 🎉');
    success('Frontend: http://localhost:3000');
    success('API: http://localhost:3000/api/health');
  } else {
    error(`${failed} test(s) failed`);
    error('Make sure the server is running: npm start');
  }

  console.log('');
}

// Check if server is running
info('Checking if server is running on http://localhost:3000...');
setTimeout(() => {
  runTests().catch(err => {
    error(`Test suite error: ${err.message}`);
    process.exit(1);
  });
}, 500);
