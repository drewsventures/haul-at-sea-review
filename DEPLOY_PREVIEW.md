# HAUL at Sea — review-only deployment

This folder is linked to the isolated Vercel project `haul-at-sea-review` owned by team `drew-austins-projects`. **Never use `--prod` and never assign haulatsea.com.**

Run from this folder:

```bash
vercel login
vercel deploy --yes --scope drew-austins-projects
```

If the Vercel CLI asks to link a project, select **existing** `haul-at-sea-review`, not `haul-website`.

Copy the resulting https://...vercel.app deployment URL, open it on a phone and desktop, and send it to the other reviewer. Verify all assets load and navigation works.

IMPORTANT: This site is for **visual review only**; the forms must remain in preview mode and **do not submit to the production CRM**. All event images are illustrative concepts, not necessarily photos of the Norwegian Viva. The site is noindexed. This project does not modify haulatsea.com.

Vercel account setup: this team is on the Hobby plan; preview access may be unrestricted via a shareable URL, not password protected. Do not distribute widely. If access is blocked by Vercel Authentication, adjust protection for only the review project in Project Settings (not the live project) or use a Vercel shareable link if available.
