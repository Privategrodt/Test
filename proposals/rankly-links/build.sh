#!/usr/bin/env bash
# Сборка КП rankly.links: proposal.src.html -> proposal.html (превью) + rankly-links-kp.pdf
# Требуется: chromium/chrome, python3, установленные системно шрифты Unbounded и Inter.
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-$(command -v chromium || command -v google-chrome || echo /opt/pw-browsers/chromium-1194/chrome-linux/chrome)}"
TMP="$(mktemp -d)"

# 1. Превью для браузера — со встроенными в base64 шрифтами (открывается где угодно).
if [ -f "$DIR/fonts-embedded.css" ]; then
  python3 - "$DIR" <<'PY'
import sys
d = sys.argv[1]
src = open(f'{d}/proposal.src.html').read()
fonts = open(f'{d}/fonts-embedded.css').read()
open(f'{d}/proposal.html', 'w').write(src.replace('/*FONTS*/', fonts))
PY
fi

# 2. Версия для печати — без @font-face, использует системные шрифты:
#    так Chromium встраивает в PDF нормальные Type0-сабсеты вместо Type3.
sed 's|/\*FONTS\*/||' "$DIR/proposal.src.html" > "$TMP/print.html"

"$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --font-render-hinting=none --virtual-time-budget=15000 --no-pdf-header-footer \
  --print-to-pdf="$DIR/rankly-links-kp.pdf" "file://$TMP/print.html"

rm -rf "$TMP"
echo "готово: $DIR/rankly-links-kp.pdf"
