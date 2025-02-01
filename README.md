# Express.js 413 Payload Too Large Error

This repository demonstrates a common issue in Express.js applications where handling large JSON payloads in POST requests can lead to a `413 Payload Too Large` error or server crashes.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution.

## Problem

When a client sends a large JSON payload to a POST endpoint, Express.js might not have enough buffer space to process the request completely, resulting in an error.  This problem is exacerbated when the `body-parser` middleware isn't properly configured to handle large requests.

## Solution

The solution involves setting the `limit` option in the `express.json()` middleware to increase the maximum request body size.  You can specify this limit in bytes or using human-readable formats (like '10mb').