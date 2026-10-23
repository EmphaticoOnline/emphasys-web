This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

## Medición propia de la evaluación

La persistencia es opcional y está aislada del ERP. Ejecuta, en orden, las migraciones `db/migrations/001_evaluation_analytics.sql`, `db/migrations/002_aggregate_evaluation_measurement.sql` y `db/migrations/003_site_aggregate_measurement.sql` en la base PostgreSQL existente. No se ejecutan automáticamente ni deben ejecutarse desde la aplicación.

Variables necesarias:

```text
EVALUATION_ANALYTICS_DATABASE_URL=postgresql://usuario:password@host:5432/base
EVALUATION_ANALYTICS_HMAC_SECRET=secreto-largo-y-aleatorio
EVALUATION_ANALYTICS_REQUIRE_CONSENT=true
EVALUATION_ANALYTICS_DETAILED_ENABLED=false
```

La medición operativa agregada no depende de GA4 ni usa cookies o identificadores persistentes. Incluye visitas por página, clics de intento a canales de contacto, formularios enviados y CTA comerciales. Un clic no confirma que WhatsApp, teléfono o correo hayan producido contacto efectivo. El seguimiento detallado y `email_requests` (HMAC del correo) requieren consentimiento y además permanecen desactivados mientras `EVALUATION_ANALYTICS_DETAILED_ENABLED` no sea `true`. Los eventos no almacenan IP, fingerprint ni respuestas completas. La deduplicación agregada expira en 15 minutos y las solicitudes de correo tienen retención lógica de 90 días; la purga debe ejecutarse como tarea operativa independiente. Si falta la URL, la aplicación conserva su funcionamiento actual y no persiste datos.

Verificación local: `npm run lint`, `npx tsc --noEmit` y `npm test`.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
