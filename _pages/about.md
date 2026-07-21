---
permalink: /
title: ""
seo_title: "Pierre Onghena"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<div class="author-header">
{% include author-profile.html %}
</div>

I am a PhD candidate at the Center for Mathematical Morphology of Mines Paris – PSL, where I focus on deep learning, geometry, and 3D computer vision.
Alongside my research, I teach mathematics and statistics at ESCP Business School, and previously worked as a data engineer at IBM.


<div class="home-section">
  <h2>Publications</h2>
  {% for post in site.publications reversed %}
    {% include publication-row.html %}
  {% endfor %}
</div>

<div class="home-section">
  <h2>Experience</h2>

  <div class="entry entry--compact">
    <h3 class="entry__title">PhD Researcher <span class="entry__years">Oct 2023 – Present</span></h3>
    <p class="entry__meta">Mines Paris – PSL</p>
  </div>

  <div class="entry entry--compact">
    <h3 class="entry__title">Data Engineer <span class="entry__years">May – Sep 2023</span></h3>
    <p class="entry__meta">IBM</p>
  </div>

  <div class="entry entry--compact">
    <h3 class="entry__title">R&amp;D Engineer <span class="entry__years">Jul 2022 – Mar 2023</span></h3>
    <p class="entry__meta">The Cross Product</p>
  </div>
</div>

<div class="home-section">
  <h2>Teaching</h2>

  <div class="entry entry--compact">
    <h3 class="entry__title">ESCP Business School <span class="entry__years">2024 – 2026</span></h3>
    <p class="entry__meta">Fundamentals of Mathematics <span class="entry__role">Teaching Assistant</span></p>
    <p class="entry__meta">Statistics and Probability <span class="entry__role">Teaching Assistant</span></p>
  </div>

  <div class="entry entry--compact">
    <h3 class="entry__title">Mines Paris – PSL <span class="entry__years">2023 – 2026</span></h3>
    <p class="entry__meta">DIMA Research Trimester <span class="entry__role">Internship Supervisor</span></p>
    <p class="entry__meta">Deep Learning for Image Analysis <span class="entry__role">Teaching Assistant</span></p>
  </div>
</div>

<div class="home-section">
  <h2>Education</h2>

  <div class="entry entry--compact">
    <h3 class="entry__title">MSc Artificial Intelligence <span class="entry__years">2020 – 2022</span></h3>
    <p class="entry__meta">Maastricht University</p>
  </div>

  <div class="entry entry--compact">
    <h3 class="entry__title">MSc Artificial Intelligence, Systems and Data <span class="entry__years">Jan – Jun 2022</span></h3>
    <p class="entry__meta">Paris Dauphine – PSL</p>
  </div>
</div>
