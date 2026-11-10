---
title: "Privacy"
permalink: /privacy/
author_profile: false
last_modified_at: 2026-11-10
---

This site sets no cookies and doesn't follow you to other websites.

## Visit statistics

I count visits with two services, [GoatCounter](https://www.goatcounter.com) and [Umami](https://umami.is), to see how many people read the site and which pages. Neither sets cookies. For each visit they record:

- the page you're reading, and the site that linked you here, if any
- your browser, operating system, device type, screen size and language
- your approximate location (country, region or city), worked out from your IP address

Neither keeps your IP address with the statistics, and the dashboards are private to me.

**GoatCounter** keeps only totals. Its servers are in the EU (Finland and Germany), and the statistics are deleted after two years. See [GoatCounter's privacy policy](https://www.goatcounter.com/help/privacy).

**Umami** records each page view with an identifier made from your IP address and browser details. The identifier changes every month, so Umami can link your page views within a month but can't recognise you from one month to the next. The statistics are stored in the EU and deleted after six months. Umami itself is a US company, though, and its providers outside the EU may route and log the request your browser sends. See [how Umami identifies visits](https://docs.umami.is/docs/metric-definitions) and [its privacy policy](https://umami.is/privacy).

## Opting out

Opting out switches off both services, in this browser only, until you clear its browsing data.

<p class="visit-stats__status" hidden></p>
<p><button type="button" class="btn visit-stats__optout" hidden>Opt out</button></p>
<noscript><p>JavaScript is turned off in your browser, so your visits aren’t being counted.</p></noscript>

## Light and dark mode

If you switch between light and dark mode, the site saves your choice in your browser so it can remember it. The choice isn't sent anywhere.

## Hosting

The site is hosted on GitHub Pages. GitHub, a US company, logs every visitor's IP address for security purposes ([GitHub's documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)). I don't have access to these logs.

## Your rights

The legal basis for counting visits is my legitimate interest in knowing what people read here, under Article 6(1)(f) of the GDPR. You can object at any time by [opting out](#opting-out). For any other request or question, email me at [{{ site.author.email }}](mailto:{{ site.author.email }}). You can also complain to a data protection authority, such as the [CNIL](https://www.cnil.fr/fr/plaintes) in France.

<p class="page__updated">Last updated: <time datetime="{{ page.last_modified_at | date: '%Y-%m-%d' }}">{{ page.last_modified_at | date: '%-d %B %Y' }}</time></p>

<script src="{{ '/assets/js/visit-stats.js' | relative_url }}"></script>
