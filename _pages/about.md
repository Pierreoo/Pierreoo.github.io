---
permalink: /
title: ""
seo_title: "Pierre Onghena"
author_profile: false
author_header: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-intro" markdown="1">

<div class="author-header">
{% include author-profile.html %}
</div>

I am a PhD candidate at the [Centre for Statistics and Images](https://www.stim.minesparis.psl.eu/) of Mines Paris – PSL, where I focus on deep learning, geometry, and 3D computer vision.
Alongside my research, I taught mathematics and statistics at ESCP Business School, and previously worked as a data engineer at IBM.
{: .home-bio}

<p class="availability"><span class="availability__text"><strong>I will complete my PhD by the end of 2026</strong> and am open to exploring future opportunities.<br>Please feel free to <a href="mailto:{{ site.author.email }}">get in touch</a>.</span><a class="availability__cv" href="{{ '/Pierre_Onghena_CV.pdf' | relative_url }}" target="_blank" rel="noopener">{% include icons/file.svg %}<span>CV</span></a></p>

</div>

<div class="home-section" id="publications">
  <h2>Publications</h2>
  {% for post in site.publications reversed %}
    {% include publication-row.html %}
  {% endfor %}
</div>

<div class="home-section" id="experience">
  <h2>Experience</h2>

  <div class="entry">
    <div class="entry__logo entry__logo--mono"><img src="{{ '/images/logos/mines-psl.webp' | relative_url }}" alt=""></div>
    <div class="entry__body">
    <h3 class="entry__title">PhD Researcher <span class="entry__years">Oct 2023 – Present</span></h3>
    <p class="entry__meta">Mines Paris – PSL</p>
    </div>
  </div>

  <div class="entry">
    <div class="entry__logo entry__logo--sm entry__logo--mono"><img src="{{ '/images/logos/ibm.webp' | relative_url }}?v=2" alt="IBM"></div>
    <div class="entry__body">
    <h3 class="entry__title">Data Engineer <span class="entry__years">May – Sep 2023</span></h3>
    <p class="entry__meta">IBM</p>
    </div>
  </div>

  <div class="entry">
    <div class="entry__logo entry__logo--badge entry__logo--mono"><img src="{{ '/images/logos/tcp.webp' | relative_url }}?v=3" alt="TheCrossProduct"></div>
    <div class="entry__body">
    <h3 class="entry__title">R&amp;D Engineer <span class="entry__years">Jul 2022 – Mar 2023</span></h3>
    <p class="entry__meta"><a href="https://www.thecrossproduct.com/">TheCrossProduct</a></p>
    </div>
  </div>
</div>

<div class="home-section" id="teaching">
  <h2>Teaching</h2>

  <div class="entry">
    <div class="entry__logo entry__logo--mono"><img src="{{ '/images/logos/escp.webp' | relative_url }}" alt="ESCP Business School"></div>
    <div class="entry__body">
    <h3 class="entry__title">ESCP Business School <span class="entry__years">2024 – 2026</span></h3>
    <p class="entry__meta"><a href="https://escp.eu/programmes/bachelor-in-management-BSc">Fundamentals of Mathematics</a> <span class="entry__role">Lecturer</span></p>
    <p class="entry__meta"><a href="https://escp.eu/programmes/bachelor-in-management-BSc">Statistics and Probability</a> <span class="entry__role">Lecturer</span></p>
    </div>
  </div>

  <div class="entry">
    <div class="entry__logo entry__logo--mono"><img src="{{ '/images/logos/mines-psl.webp' | relative_url }}" alt=""></div>
    <div class="entry__body">
    <h3 class="entry__title">Mines Paris – PSL <span class="entry__years">2023 – 2026</span></h3>
    <p class="entry__meta">DIMA Research Trimester <span class="entry__role">Internship Supervisor</span></p>
    <p class="entry__meta"><a href="https://dauphine.psl.eu/formations/masters/informatique/m2-intelligence-artificielle-systemes-donnees/programme">Deep Learning for Image Analysis</a> <span class="entry__role">Teaching Assistant</span></p>
    </div>
  </div>
</div>

<div class="home-section" id="education">
  <h2>Education</h2>

  <div class="entry">
    <div class="entry__logo entry__logo--mono"><img src="{{ '/images/logos/maastricht.webp' | relative_url }}?v=2" alt="Maastricht University"></div>
    <div class="entry__body">
    <h3 class="entry__title"><a href="https://www.maastrichtuniversity.nl/education/master/programmes/artificial-intelligence">MSc Artificial Intelligence</a> <span class="entry__years">2020 – 2022</span></h3>
    <p class="entry__meta">Maastricht University</p>
    </div>
  </div>

  <div class="entry">
    <div class="entry__logo entry__logo--mono"><img src="{{ '/images/logos/dauphine.webp' | relative_url }}?v=2" alt="Paris Dauphine – PSL"></div>
    <div class="entry__body">
    <h3 class="entry__title"><a href="https://dauphine.psl.eu/en/training/masters-degrees/computer-science/m2-artificial-intelligence-systems-data">MSc Artificial Intelligence, Systems and Data</a> <span class="entry__years">Jan – Jun 2022</span></h3>
    <p class="entry__meta">Paris Dauphine – PSL</p>
    </div>
  </div>
</div>
