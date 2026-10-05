---
layout: project
permalink: /projects/morphoskel3d/
title: "MorphoSkel3D: Morphological Skeletonization of 3D Point Clouds for Informed Sampling in Object Classification and Retrieval"
seo_title: "MorphoSkel3D"
favicon_emoji: "🌿"
excerpt: "A rule-based morphological skeletonization of 3D point clouds that needs no training, and guides learned sampling for object classification and retrieval."
venue: "3DV 2025"
venue_url: "https://3dvconf.github.io/2025/"

authors:
  - name: "Pierre Onghena"
    url: "https://pierreoo.github.io/"
  - name: "Santiago Velasco-Forero"
  - name: "Beatriz Marcotegui"

affiliations:
  - "Mines Paris – PSL University"
  - "Centre for Mathematical Morphology (CMM)"

links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2501.12974"
    icon: arxiv
  - label: "Code"
    url: "https://github.com/Pierreoo/MorphoSkel3D"
    icon: code
  # The two Drive folders the repo README links: pre-processed skeletons, and
  # the pre-trained models for the four sampling ratios.
  - label: "Data"
    url: "https://drive.google.com/drive/folders/1YAVtLBOUctmh3xajZWAL-yXDgAx0G_vV"
    icon: data
  - label: "Models"
    url: "https://drive.google.com/drive/folders/1qjg_GsQ6P_Ibm8T-oxujnOctc_CuqJHA"
    icon: models

teaser:
  image: "/images/ms3d-spheres.webp"
  alt: "Four point clouds in grey with their skeletal spheres colour-coded by radius: an earphone, a desk lamp, a piano and a human figure."
  # The paper's Figure 7 and Figure 8 captions, condensed into one sentence.
  caption: "The skeletal spheres of MS3D together with its surface points, for examples of the ShapeNet and ModelNet datasets."

highlights:
  - value: "0"
    label: "Training required"
  - value: "Lowest"
    label: "Chamfer distance"
  # Sampling ratio 64 reduces the 1024-point cloud to 16 (Tab. 3).
  - value: "85.5%"
    label: "Classification at 64x sampling ratio"

# The only symbol here is upright "SE", set as plain text.
mathjax: false

# IEEE Xplore's export, verbatim -- the authoritative record. Do not hand-edit:
# it is what Xplore, Scholar and reference managers all produce, and any local
# tidy-up risks introducing an error the publisher's version cannot have.
bibtex: |
  @INPROCEEDINGS{11125643,
    author={Onghena, Pierre and Velasco-Forero, Santiago and Marcotegui, Beatriz},
    booktitle={2025 International Conference on 3D Vision (3DV)},
    title={MorphoSkel3D: Morphological Skeletonization of 3D Point Clouds for Informed Sampling in Object Classification and Retrieval},
    year={2025},
    volume={},
    number={},
    pages={1350-1359},
    keywords={Point cloud compression;Geometry;Training;Solid modeling;Three-dimensional displays;Shape;Surface morphology;Sampling methods;Skeleton;Surface treatment},
    doi={10.1109/3DV66043.2025.00128}}
---

<section class="pp__abstract" markdown="1">

## Abstract

Point clouds are a set of data points in space to represent the 3D geometry of
objects. A fundamental step in the processing is to identify a subset of points
to represent the shape. While traditional sampling methods often ignore to
incorporate geometrical information, recent developments in learning-based
sampling models have achieved significant levels of performance. With the
integration of geometrical priors, the ability to learn and preserve the
underlying structure can be enhanced when sampling. To shed light into the
shape, a qualitative skeleton serves as an effective descriptor to guide
sampling for both local and global geometries. In this paper, we introduce
MorphoSkel3D as a new technique based on morphology to facilitate an efficient
skeletonization of shapes. With its low computational cost, MorphoSkel3D is a
unique, rule-based algorithm to benchmark its quality and performance on two
large datasets, ModelNet and ShapeNet, under different sampling ratios. The
results show that training with MorphoSkel3D leads to an informed and more
accurate sampling in the practical application of object classification and
point cloud retrieval.

</section>

## Method Overview

<figure>
  <img src="{{ '/images/ms3d-pipeline.webp' | relative_url }}" alt="Three-stage pipeline: surface reconstruction to a watertight mesh, the MorphoSkel3D dilation of the unsigned distance function, and the resulting skeleton used for informed sampling.">
  {%- comment -%}
    Verbatim from the paper's Figure 1 caption (sec/1_introduction.tex).
  {%- endcomment -%}
  <figcaption>
    Overview of the shape-agnostic skeletonization pipeline. In the MorphoSkel3D
    module, the local maxima on the unsigned distance function of inner points
    reveal the set of maximal balls.
  </figcaption>
</figure>
