---
layout: project
permalink: /projects/lmpt/
title: "LmPT: Conditional Point Transformer for Anatomical Landmark Detection on 3D Point Clouds"
seo_title: "LmPT"
favicon_emoji: "🦴"
excerpt: "A conditional point transformer for automatic anatomical landmark detection on 3D point clouds, learning across human and dog femurs for translational research."
venue: "ISBI Oral 2026"
venue_url: "https://biomedicalimaging.org/2026/"

authors:
  - name: "Matteo Bastico"
    affiliations: [1]
    equal: true
  - name: "Pierre Onghena"
    affiliations: [2]
    equal: true
    url: "https://pierreoo.github.io/"
  - name: "David Ryckelynck"
    affiliations: [3]
  - name: "Beatriz Marcotegui"
    affiliations: [2]
  - name: "Santiago Velasco-Forero"
    affiliations: [2]
  - name: "Laurent Corté"
    affiliations: [1]
  - name: "Caroline Robine-Decourcelle"
    affiliations: [4]
  - name: "Etienne Decencière"
    affiliations: [2]

affiliations:
  - "Mines Paris – PSL University, Centre for Material Sciences (MAT)"
  - "Mines Paris – PSL University, Centre for Mathematical Morphology (CMM)"
  - "Mines Paris – PSL University, Centre for Material Forming (CEMEF)"
  - "The National Veterinary School of Alfort (EnvA)"

author_note: "* Equal contribution"

links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2602.02808"
    icon: arxiv
  - label: "Code"
    url: "https://github.com/Pierreoo/LandmarkPointTransformer"
    icon: code
  - label: "Data"
    url: "https://drive.google.com/drive/folders/1Vggo3RTWlzEmCd50pi6vApICekawpDeA"
    icon: data
  - label: "Models"
    url: "https://drive.google.com/drive/folders/1IuwTHCS3cPyEMHf0-bHac9gJeQrvvKE8"
    icon: models

teaser:
  image: "/images/lmpt-teaser.webp"
  alt: "Human and dog femurs side by side, each annotated with coloured, labelled anatomical landmarks at the head, trochanters and condyles."
  caption: "Ground truth landmarks for human and dog femurs."

highlights:
  - value: "3.56 mm"
    label: "MRE of experts"
  - value: "2.54 mm"
    label: "MRE of LmPT"
  - value: "2"
    label: "Species, jointly trained"

mathjax: false

bibtex: |
  @inproceedings{bastico2026lmpt,
    author    = {Bastico, Matteo and Onghena, Pierre and Ryckelynck, David and Marcotegui, Beatriz and Velasco-Forero, Santiago and Cort{\'e}, Laurent and Robine-Decourcelle, Caroline and Decenci{\`e}re, Etienne},
    booktitle = {2026 IEEE 23rd International Symposium on Biomedical Imaging (ISBI)},
    title     = {{LmPT}: Conditional Point Transformer for Anatomical Landmark Detection on {3D} Point Clouds},
    year      = {2026},
    pages     = {1--5},
    publisher = {IEEE},
    doi       = {10.1109/ISBI61048.2026.11515617}
  }
---

<section class="pp__abstract" markdown="1">

## Abstract

Accurate identification of anatomical landmarks is crucial for various medical
applications. Traditional manual landmarking is time-consuming and prone to
inter-observer variability, while rule-based methods are often tailored to
specific geometries or limited sets of landmarks. In recent years, anatomical
surfaces have been effectively represented as point clouds, which are
lightweight structures composed of spatial coordinates. Following this strategy
and to overcome the limitations of existing landmarking techniques, we propose
Landmark Point Transformer (LmPT), a method for automatic anatomical landmark
detection on point clouds that can leverage homologous bones from different
species for translational research. The LmPT model incorporates a conditioning
mechanism that enables adaptability to different input types to conduct
cross-species learning. We focus the evaluation of our approach on femoral
landmarking using both human and newly annotated dog femurs, demonstrating its
generalization and effectiveness across species.

</section>

## Method Overview

<figure>
  <img src="{{ '/images/lmpt-pipeline.webp' | relative_url }}" alt="Encoder-decoder pipeline: patch embedding, pooling and point transformer blocks, a FiLM block modulated by a condition input, then unpooling and a keypoint head predicting landmarks on the femur.">
  <figcaption markdown="span">
    Overview of LmPT, outlining a PT encoder-decoder structure with a FiLM
    modulation to condition the model by input.
  </figcaption>
</figure>
