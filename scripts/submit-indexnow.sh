#!/bin/bash
# Submit new URLs to IndexNow (Bing/Yandex instant indexing) — coinday
# Usage: bash scripts/submit-indexnow.sh https://www.coindaynow.com/blog/new-post-slug

SITE_URL="$1"
KEY="f761e6053616a0ec289c5a590750d0c8"
HOST="www.coindaynow.com"

if [ -z "$SITE_URL" ]; then
  echo "Usage: bash scripts/submit-indexnow.sh <full-url>"
  echo "Example: bash scripts/submit-indexnow.sh https://www.coindaynow.com/blog/example-post"
  exit 1
fi

curl -s -X POST "https://yandex.com/indexnow" \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[\"$SITE_URL\"]}"

echo ""
echo "Submitted to IndexNow: $SITE_URL"
