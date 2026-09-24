# Blog

Notes from the table — what shipped, what changed, and the occasional hand worth talking about.

-   ## [The mock-ups on your landing page are untested claims](https://playpip.io/offline-apps/pip/blog/landing-page-mockups)
    
    17 September 2026
    
    Our home page draws four small pictures of what the game produces. Three were typed out by hand and all three had drifted: a share line missing the address that makes it a loop, a hand permalink six characters long on the card that says there is no server, and an equity read labelled with a phrase the game has never emitted, over a percentage its own caption contradicted. Why the suite stayed green, and the two ways to draw your own output that are true by construction.
    
-   ## [Your Cloudflare Pages site is on Google twice](https://playpip.io/offline-apps/pip/blog/cloudflare-pages-dev-duplicate)
    
    16 September 2026
    
    Cloudflare noindexes preview deployments and says nothing about the production pages.dev alias, which serves your whole site on a second host. Ours did, for five weeks, with a correct canonical tag on every page. The two-line rule that fixed it, why it is not a redirect, and the test that stops the same file deindexing the real domain.
    
-   ## [A route missing from your sitemap is not noindexed](https://playpip.io/offline-apps/pip/blog/sitemap-is-not-noindex)
    
    15 September 2026
    
    Leaving a URL out of the sitemap instructs nobody. Ours never listed the game, Google indexed it anyway under the home page’s title, and the fix we shipped covered one route and missed thirty-two. What replaced it: every route is published, noindex, or written down with a reason.
    
-   ## [How accurate is a poker equity calculator? We checked ours against an answer we could count](https://playpip.io/offline-apps/pip/blog/how-accurate-is-a-poker-equity-calculator)
    
    14 September 2026
    
    Every sampled equity number carries an error bar, and almost nobody prints one or tests it. There is exactly one spot where the true answer is countable. Here is what 100 runs against it say about the band we print.
    
-   ## [August: what shipped](https://playpip.io/offline-apps/pip/blog/august-what-shipped)
    
    2 September 2026
    
    Six written guides, a free odds calculator, a drill that marks your answer, a card at the end of a tournament, and the month we measured our own bots and published our own errors.
    
-   ## [Five things pokersolver does that its README does not mention](https://playpip.io/offline-apps/pip/blog/pokersolver-undocumented)
    
    28 August 2026
    
    Its cards array can hand you seven cards for a five-card hand, an ace playing low comes back with the value 1, and a royal flush is named “Straight Flush”. Each one with the input that produces it.
    
-   ## [Everything we have published that was wrong](https://playpip.io/offline-apps/pip/blog/what-we-got-wrong)
    
    24 August 2026
    
    Every false claim we have shipped: what each one said, how long it served, how we found it, and the test that now fails if it comes back. The newest one is a sentence in this post.
    
-   ## [Verify today’s deal yourself](https://playpip.io/offline-apps/pip/blog/verify-todays-deal)
    
    20 August 2026
    
    Everyone playing the Daily gets the same shuffle. Here are the six steps that produce it, a snippet that runs anywhere, and one day’s deck to check yourself against.
    
-   ## [Two devices, two chip counts](https://playpip.io/offline-apps/pip/blog/two-devices-two-chip-counts)
    
    4 August 2026
    
    Pip now has an optional account that carries your progress to a second device. The interesting part isn’t the sign-in, it’s what happens when both devices have been played.
    
-   ## [Pip, for readers who aren’t people](https://playpip.io/offline-apps/pip/blog/agent-readable)
    
    26 July 2026
    
    Every content page now answers Accept: text/markdown with its plain text version — a free-plan build of what Cloudflare offers as Markdown for Agents, in about ninety lines.
    
-   ## [Launch week: what shipped](https://playpip.io/offline-apps/pip/blog/launch-week)
    
    25 July 2026
    
    A new card back, four more hand nicknames, a quicker freeroll, and three strangers in the credits — everything that changed in Pip’s first days in the open.
    
-   ## [Pip is live, and it’s open source](https://playpip.io/offline-apps/pip/blog/pip-is-live)
    
    25 July 2026
    
    Single-player Texas Hold’em with no account needed, no ads, and no real money — now live at playpip.io, with the whole codebase in the open.
    

Follow along: [RSS](https://playpip.io/rss.xml). No email, no account, no unsubscribe link to hunt for.
