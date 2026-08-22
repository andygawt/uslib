#!/bin/bash
# Simple test server for local development

echo "Starting local test server..."
echo "Open your browser to: http://localhost:8000"
echo "Press Ctrl+C to stop"
echo ""

python3 -m http.server 8000
