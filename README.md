# ZeroOrigin Lab — profesjonalny projekt strony

Technologia: Next.js + TypeScript + Tailwind CSS.

## Co zawiera
- wielojęzyczność: EN / PL / FR / ES / 中文 / AR
- gotowa strona główna
- czarny minimalistyczny design premium
- sekcje: misja, token, automotive vision, roadmap, built in public, collaborate
- struktura gotowa pod dalsze podstrony

## Jak uruchomić lokalnie
1. Zainstaluj Node.js LTS
2. W terminalu wejdź do folderu projektu
3. Uruchom:

```bash
npm install
npm run dev
```

Strona będzie pod adresem: http://localhost:3000

## Jak edytować treści
Treści są w pliku:

```bash
lib/i18n.ts
```

## Jak dodać podstronę
Tworzysz nowy folder w `app/[locale]/`, np.:

```bash
app/[locale]/updates/page.tsx
```

## Jak wdrożyć
Najprościej przez Vercel:
1. Wrzuć projekt na GitHub
2. Wejdź na vercel.com
3. Import Project
4. Wybierz repozytorium
5. Deploy
6. Podepnij domenę ZeroOriginLab.com w Settings → Domains
