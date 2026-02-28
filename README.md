# Login App — React + TypeScript + Tailwind CSS

## Tech Stack
- **React 18** + **TypeScript**
- **Tailwind CSS v3** (utility-first styling)
- **Vite** (dev server & build tool)

---

## Struktur File

```
login-app/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts          # TabType, ToastState, dll.
    ├── hooks/
    │   └── useToast.ts       # Toast state hook
    └── components/
        ├── LoginPage.tsx     # Root layout (full screen)
        ├── LeftPanel.tsx     # Panel kiri + tab desktop
        ├── MobileTabs.tsx    # Tab bar untuk mobile
        ├── LoginForm.tsx     # Form login
        ├── RegisterForm.tsx  # Form registrasi
        ├── FieldInput.tsx    # Reusable input field
        ├── SocialButtons.tsx # Tombol Google & Facebook
        ├── Toast.tsx         # Notifikasi toast
        └── icons/
            └── index.tsx     # Semua SVG icons
```

---

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka di browser
# http://localhost:5173
```

## Build Production

```bash
npm run build
npm run preview   # preview hasil build
```

---

## Responsif
| Breakpoint | Layout |
|---|---|
| Mobile (< 768px) | Kolom vertikal — header bar merah muda di atas, tab horizontal |
| Tablet (768px–1024px) | Baris — panel kiri sempit |
| Desktop (> 1024px) | Baris — panel kiri lebar + tab vertikal |

## Fitur
- ✅ Tab LOGIN / SIGN IN fungsional (sinkron desktop & mobile)
- ✅ Validasi form registrasi (min 6 karakter, konfirmasi password)
- ✅ Loading state tombol
- ✅ Toast notifikasi
- ✅ Setelah register → otomatis kembali ke LOGIN
- ✅ Full-screen (100vw × 100dvh)
- ✅ Responsive semua device
