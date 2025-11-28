#!/usr/bin/env bash

# Absolute path to this directory (martinique-startups)
BASE_DIR="$(cd "$(dirname "$0")" && pwd)"

# Function to start a Vite app on a specific port
start_app() {
  local dir="$1"
  local port="$2"
  echo "🚀 Starting $(basename "$dir") on http://localhost:${port}..."
  (cd "$dir" && npm run dev -- --port "$port" &)
}

# Launch each app (background processes)
start_app "$BASE_DIR/immo-alert" 5173
start_app "$BASE_DIR/btp-confiance" 5174
start_app "$BASE_DIR/trajet-pro" 5175
start_app "$BASE_DIR/sargasses-plages" 5176
start_app "$BASE_DIR/job-chrono" 5177
start_app "$BASE_DIR/prix-mada" 5178

# Wait a moment so the servers can start
sleep 2

echo "✅ All startups are launching. Open index.html and click the \"Lancer l'App\" buttons."
