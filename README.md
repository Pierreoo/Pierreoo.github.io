# Pierreoo.github.io

Personal academic website of Pierre Onghena — PhD researcher in deep learning
and 3D computer vision at the Center for Mathematical Morphology, Mines Paris – PSL.

Live at [pierreoo.github.io](https://pierreoo.github.io). Built with
[Jekyll](https://jekyllrb.com) on a stripped-down fork of the
[Academic Pages](https://github.com/academicpages/academicpages.github.io) template.

## Structure

- [_pages/about.md](_pages/about.md) — the single home page (bio, publications, experience, teaching, education)
- [_publications/](_publications/) — one front-matter file per paper; rendered by [_includes/publication-row.html](_includes/publication-row.html)
- [_data/navigation.yml](_data/navigation.yml) — header links (CV)
- [files/](files/) — hosted documents (CV)
- [_config.yml](_config.yml) — site configuration

## Local development

```bash
bundle install
bundle exec jekyll serve
```

or with Docker: `docker compose up` (see [docker-compose.yaml](docker-compose.yaml)).

The JavaScript bundle `assets/js/main.min.js` is committed; rebuild it with
`npm install && npm run build:js` after changing anything in `assets/js/`.
