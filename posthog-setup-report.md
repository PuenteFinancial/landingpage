<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Puente Financial landing page. The integration covers client-side event tracking across key user interactions, server-side tracking for the waitlist signup API route, user identification on both the client and server, and cross-domain session correlation via `X-POSTHOG-DISTINCT-ID` / `X-POSTHOG-SESSION-ID` headers. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), and all requests are proxied through `/ingest` to improve ad-blocker resilience.

| Event | Description | File |
|---|---|---|
| `waitlist_form_submitted` | User submits the waitlist form; includes `destination_country`, `monthly_send_amount`, and `language`. Triggers `posthog.identify()` using the user's WhatsApp number as the distinct ID. | `components/WaitlistForm.tsx` |
| `waitlist_signup_completed` | Server-side confirmation that the waitlist entry was written to Supabase. Includes UTM attribution and session correlation. | `app/api/waitlist/route.ts` |
| `waitlist_signup_failed` | Server-side error when the Supabase insert fails. Includes the error message for debugging. | `app/api/waitlist/route.ts` |
| `faq_item_opened` | User expands a FAQ item; includes the question text and index for content analysis. | `components/FAQ.tsx` |
| `language_switched` | User toggles between EN and ES; includes `from` and `to` values. | `components/LanguageToggle.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1646138)
- [Waitlist signups over time](/insights/5TcstIkC)
- [Waitlist conversion funnel](/insights/JvUumY8H)
- [Signups by destination country](/insights/CfVZ6rcF)
- [FAQ engagement](/insights/Lo4m6tw9)
- [Language preference](/insights/zq6z6V1R)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
