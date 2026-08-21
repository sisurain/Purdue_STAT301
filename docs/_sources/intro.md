# STAT 301 Introduction

These materials accompany the teaching of STAT 301, _Elementary Statistical Methods_, at Purdue University. STAT 301 is a university-wide undergraduate course that serves a large and diverse student body. It is offered throughout the year across all semesters, with both online and in-person versions, taught by multiple instructors.

This short book provides comprehensive materials to meet the needs of different kinds of students. Different students come to this course with different goals — and that is perfectly fine. I find it useful to describe them as <span class="purdue-text">**three progressive levels of achievement**</span>. Read all three, find yourself, and know what the next level up would ask of you.

To make the levels concrete, I will use one running example. Suppose a study claims that a **supplement lowers blood pressure**: 40 volunteers had their blood pressure measured before and after taking it for a month.

## The Three Levels of Achievement

````{admonition} Level 1 — Pass the course: "draw a ladle by copying a gourd"
:class: note
_"Draw a ladle by copying a gourd"_ is an old Chinese idiom: follow the worked example step by step and you will produce a correct result. The assignments and exams in this course are deliberately designed this way — in lecture and lab you are shown an example problem and exactly how to solve it; in the homework and exams you meet a **similar** question and apply the **same** procedure.

**What this level looks like in the running example:** in lab, your TA walked you through a "before vs. after" test in SPSS, click by click. On the exam you see the supplement study — different numbers, same shape — and you recognize it matches the lab template, follow the same steps, and reach the right answer.

**What it takes:** honestly, mostly <span class="purdue-text">**time**</span>.[^footnote01] Attend class, complete every homework, lab, and project task by following the instructions and examples. Most students who fail do so not because the material defeated them, but because their time investment was too small. If you do the work, the course is designed to be passable — the tests are not tricky.
````

[^footnote01]: Productivity is always a function of time and technology, with some sort of resource constraints. In our case, and in this country, we are fortunate that study resources are not usually a constraint. The learning materials and in-class or video lectures are opportunities for you to learn technologies from your instructor. However, time is a crucial element, and it is primarily controlled by the student. Most students who fail the course do so because their time investment is insufficient, resulting in minimal productivity. You must spend enough time outside the classroom to understand and master the technologies taught in class.

````{admonition} Level 2 — Build a solid foundation: handle new situations without a template
:class: important
This is the level I hope **most of you** aim for. Here you understand *why* each procedure works, so you can face a situation that does **not** exactly match a worked example and still choose correctly.

**What this level looks like in the running example:** nobody tells you which test to use. You notice the 40 "before" and "after" numbers come from the **same** people — so this is a *matched pairs* design, not a two-sample comparison, and analyzing it the wrong way would be a real mistake. You run the right test, and when the software reports a small p-value you can interpret it honestly: "if the supplement did nothing, data like ours would be very unlikely" — and you can explain to your roommate why *statistically significant* does not automatically mean *big or important*. When you later see a news headline — "poll finds 54% support, margin of error ±3 points" — you know exactly where that ±3 comes from.

**What it takes:** the extra effort to read and digest the materials on this site — the motivations, the examples, and the common-misunderstanding boxes — not just the recipes. The payoff is practical even if you never take another statistics course: you will finish assignments and exams *faster* (understanding beats memorizing seven templates), earn better grades, and read every future study or news claim with sharper eyes. And if this course sparks an interest, you are prepared to continue toward more advanced courses — or a [Minor in Statistics](https://www.stat.purdue.edu/).
````

````{admonition} Level 3 — Full mastery: see the roadmap and the connections
:class: tip
At this level you see the course as one connected structure rather than a sequence of separate procedures.

**What this level looks like in the running example:** you recognize that the paired t-test you ran is a one-sample t-test in disguise (on the differences); that comparing more than two groups would lead to ANOVA, whose $F$ statistic satisfies $F = t^2$ in the two-group case; and that ANOVA and regression are secretly the same linear model — so what you learned about the supplement study will reappear, wearing different clothes, in the regression chapters. You could even predict what a follow-up course would teach next.

**What it takes / what to expect:** you will find some materials aimed at this level here (for a taste, see the special-topic chapter on regression in matrix form), but deliberately not many — the assignments and exams are **not** designed to test this level, which is a relief for most students. If this is you, talk to me: this is where statistics starts to become genuinely beautiful.
````

The three levels are progressive: Level 2 contains Level 1, and Level 3 contains both. My honest recommendation for nearly everyone is to aim for **Level 2** — it is the best ratio of effort to reward, in this course and in life after it.

## What This Course Is About

Introductory statistics has two major components: the <span class="purdue-text">**probability**</span> part (probabilistic reasoning: given a model, what data will it generate?) and the <span class="purdue-text">**statistics**</span> part (statistical reasoning: given data, what model is believable?). STAT 301 focuses on the **statistics** part — which is why we begin with the data side. [Chapter 0](bigpicture) draws the complete picture of how these two directions fit together, using my favorite dice-rolling example; I strongly encourage you to read it first.

## Table of Contents

Below is the table of contents for this book.

```{tableofcontents}
```
