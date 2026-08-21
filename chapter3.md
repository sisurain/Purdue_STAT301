# Producing Data

```{admonition} Textbook reference
:class: seealso
This chapter corresponds to **Chapter 3** of *Introduction to the Practice of Statistics* (Moore, McCabe & Craig, 10th ed.). Note that the course chapter numbers (shown in the sidebar) follow our teaching order, which differs from the textbook order.
```

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Distinguish **anecdotal**, **available**, **observational**, and **experimental** sources of data.
* Explain why association does not imply causation, and identify **lurking variables**, **common response**, and **confounding** in a study.
* Recognize and compare the main **sampling designs** (SRS, stratified, multistage) and name the common **sources of bias**.
* Identify the parts of an experiment (**units, factors, levels, treatments, response**) and the main **experimental designs** (completely randomized, matched pairs, blocks).
* Given a study description, decide **which design was used and whether a causal conclusion is justified**.
```

```{admonition} Key concepts at a glance
:class: note
[Sources of data](ch3-sources) · [Association vs. causation, confounding](ch3-causality) · [Sampling design and bias](ch3-sampling) · [Design of experiments](ch3-experiments) · [Cautions](ch3-cautions) · [Putting it all together](ch3-together)
```

```{admonition} Where are we? A question before we start
:class: bridge
In Chapter 2 we agreed that the average height of **all** Purdue students, $\mu$, is what we really want — and that we will never measure all ~40,000 students. Suppose you simply asked your 300 Instagram followers for their heights. You would get data, no doubt. But your followers are mostly your own major, your own dorm, your own friend group. **Would you trust their average as a stand-in for all of Purdue?** If something about that makes you uneasy, you already understand why this chapter exists: *how* data is produced decides *what* the data can tell us.
```

Since we have learned the concepts of **population** and **sample**, you might wonder how data is obtained for the population and sample. In the height example, we **randomly drew** a specific number of students from all Purdue students to form a sample. This gives us an abstract idea of the process of forming a sample. The concept of **randomly drawing** will be discussed in more detail shortly. However, let's first focus on the population.


We can model the real-world measurements-the heights of all Purdue students-as a normal random variable, $Height$, with **parameters** mean $\mu$ and standard deviation $\sigma$. This serves as a mathematical abstraction of the real-world phenomenon. This powerful abstraction allows us to **quantify uncertainty, derive probabilities for outcomes, and perform statistical inference**.

The randomness in height/$Height$ may arise from many **small factors**, such as genetics, nutrition, environment, and other influences in biological or physical systems. Each observed height value is a realized outcome, or **realization**, of this process at the **macro level**. Modeling this process with a normal distribution is a **modeling assumption**, loosely motivated by an argument in the style of the <a href="https://en.wikipedia.org/wiki/Central_limit_theorem" target="_blank">**Central Limit Theorem (CLT)**</a>: when many small, independent factors contribute additively, the resulting outcomes tend to be approximately normal. Other processes and phenomena, however, may be modeled by different types of random variables.

Now, let's turn our focus to sample data. The term **parameter** is associated with the population and is usually unknown. Once we have the sample data, we can follow a statistical procedure to calculate a <span class="purdue-text">**STATISTIC**</span>, which is a number that describes the sample-for example, the sample mean.

```{prf:definition} Statistic
:label: statistic-definition

A **numerical summary** of a sample is called a statistic. The value of a statistic is known once we have taken a sample, but it can vary from sample to sample. Statistics are often used to estimate unknown parameters.
```

:::{dropdown} Example: the same statistic, two different values
:open:
You randomly select 25 students and compute the average height: $\bar{x} = 67.1$ inches. Your classmate randomly selects a *different* 25 students: $\bar{x} = 66.4$ inches. Both numbers are the *same statistic* (the sample mean), computed by the same recipe — yet they disagree, and neither equals the unknown parameter $\mu$. This "varies from sample to sample" behavior is not a flaw; it is the central fact of statistics, and Chapter 5 is devoted entirely to it.
:::

The entire process can be generalized as follows: First, we have a phenomenon that generates data. We model it as a random process with parameters. Next, we **randomly draw** or **obtain** data from the population to form our sample. From the sample, we calculate statistics, which we use to infer the parameters and thereby gain a better understanding of the random process and the real-world phenomenon. 

This process can also be viewed as a **generalization**-using information from the sample to draw conclusions about the phenomenon.

(ch3-sources)=
## Sources of Data

```{admonition} A question before this section
:class: bridge
A tweet goes viral: *"My grandpa smoked a pack a day and lived to 95!"* It is a true story, and it is data — one real observation. **Should it change your belief about smoking and health?** By the end of this section you will have precise names for what kind of "data" this is, and why it deserves very little weight.
```

Let's explore the gap between the population and the sample. In the textbook, this leads to the question of **sources of data**. Whether we are interested in estimating the parameters of our population or making a conclusion about it, our questions of interest are inherently related to the population. However, we can only collect data from the sample. 

This raises a fundamental question: **Is our sample a good representation of the population of interest?** If the sample is not representative, what we observe in the sample might not reflect the reality of the population. This is why the process of how we **randomly draw** or **obtain** the sample is critical to the entire process. 

The term "sources of data" refers to the methods or origins of obtaining our sample data.

**ANECDOTAL DATA** and **AVAILABLE DATA** are two sources of data that we do not intentionally collect. These data sources might include only a few data points in the sample, and we usually lack full knowledge of how they were obtained. Therefore, we should be very cautious when drawing conclusions from these types of data.

* **Anecdotal data** represent individual cases that often catch our attention because they are striking or unusual in some way. These cases are not necessarily representative of any larger group.
* **Available data** are data produced for purposes other than our current question of interest but may still provide some insights or help answer the question.

:::{dropdown} Example: anecdotal vs. available, in the height study
Suppose you want to estimate the average height of Purdue students.

* *Anecdotal*: "The three tallest people I know are all on the basketball team — Purdue students must be really tall." Striking cases stick in memory precisely **because** they are unusual — the opposite of representative.
* *Available*: the athletics department has height rosters for every varsity team. This is real, carefully measured data — but it was collected for a different purpose, and athletes are not representative of all students. Available data can still be useful, but only with caution about *who* is in it.
:::

To answer our questions of interest or draw conclusions about the population, it is usually better to create new data and form our sample **intentionally**. This critical step is often controlled by researchers to ensure the sample is representative and suitable for analysis.

There are two main approaches to obtaining data: one is through <span class="purdue-text">**observational studies**</span>, often conducted via **sample surveys**[^footnote01], and the other is through <span class="purdue-text">**experimental studies**</span>, conducted via **experiments**[^footnote02].

[^footnote01]: We can also use past survey data, such as existing databases. In this case, we are using available data, which is common in certain fields like economics. However, analyzing such data often requires more advanced statistical and econometric techniques.  
[^footnote02]: In many fields, conducting experiments may not be feasible due to ethical concerns or practical limitations. 

```{prf:definition} Observational Study
:label: ob-definition

In an observational study, we observe individuals and measure variables of interest but **do not attempt to influence** the responses. Measure variables as they naturally occur (**no intervention**).
```

```{prf:definition} Experiment
:label: exp-definition

In an experiment, we **deliberately impose some condition** or  **treatment** (called an **intervention**) on individuals and we observe their responses.
```

:::{dropdown} Example: the same question, asked both ways
:open:
Question: *does caffeine affect exam performance?*

* **Observational version:** survey 200 students about how much coffee they drink, and record their exam scores. Nobody's behavior is changed — we watch the world as it is.
* **Experimental version:** recruit 200 students, and **we decide** — by coin flip — who drinks coffee before the exam and who drinks decaf. The deciding is the intervention.

Same question, completely different strength of conclusion — the next section explains why the second version is so much more powerful.
:::

(ch3-causality)=
## Causality and Confounding

```{admonition} A question before this section
:class: bridge
Countries that eat more chocolate win more Nobel Prizes — the correlation across countries is remarkably strong. So: **should Purdue hand out chocolate bars before exams to raise its Nobel count?** If your instinct says "obviously something else is going on — rich countries afford both chocolate and research labs," congratulations: you have just discovered the *lurking variable*, and you already understand the problem this section makes precise.
```

When our goal is to understand <span class="purdue-text">**cause and effect (causality)**</span>, experiments are the only source of fully convincing data. The invention of randomized experiments was a stroke of genius; even today, they remain the gold standard for large pharmaceutical companies testing the effectiveness of new drugs. 

This is because an observational study, even one based on a carefully chosen sample, is a poor way to determine what will happen if we change something. The best way to observe the effects of a change is through an **intervention**-where we actively impose the change.

The reason observational studies are a poor method for establishing causality is because of **confounding**. To establish a causal relationship, we typically aim to understand the relationship between an **explanatory variable** (or several) and a **response variable**. 

For example, if we are investigating whether A causes B, A is the explanatory variable, and B is the response variable.

```{prf:definition} Explanatory Variable
:label: expvar-definition

An **explanatory variable** (sometimes called an **independent variable**, **predictor**, or **factor**) is the variable we think might explain or influence changes in another variable (the **response variable**).

In simpler terms, it's the variable you suspect **causes** or **predicts** changes in the **response variable** (sometimes called the **outcome** or **dependent variable**).
```

**Confounding** occurs when an explanatory variable is related to one or more other variables (might be unobserved, hidden or lurking so you don't have data for them) that also influence the response variable. These _other variables_ are called confounding variables (or confounders). When confounding exists:

* You may see an association between the explanatory variable and the response variable.
* But some or all of that association might be due to a confounder that is linked to both. 

Confounding can lead us to overstate or even mistakenly conclude that the explanatory variable **caused** the change in the response, when in reality, a confounding variable plays a partial or even dominant role in explaining that change. 

For example, another variable, C, might cause both A and B. In the figure at the end of this section, this particular mechanism is labeled **common response** (panel b): a lurking variable $z$ causes both $x$ and $y$. **Confounding** in the strict sense (panel c) is slightly different: the effects of $x$ and $z$ on $y$ are mixed together and cannot be separated. Either way, both mechanisms produce an association between $x$ and $y$ without $x$ causing $y$, so based on the observed data, you might incorrectly conclude that A causes B.

In an experiment, researchers actively impose an intervention (treatment) and use random assignment to decide who receives it. That way, any other factors that might affect the outcome (so-called lurking variables or confounders) should, on average, balance out across the different treatment groups. In an observational study, you do not assign which subjects are exposed to the _treatment_, which can lead to confounding. 

Two real life examples of confounding issues are:

* The tobacco industry argued that a genetic variable, which could not be measured in the past, caused both smoking and lung cancer.
* The chocolate–Nobel correlation from the opening question: national wealth plausibly drives both chocolate consumption and research funding.

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "The data clearly show A and B move together, so A must cause B — or at least *probably* causes B."

**In fact:** an observed association is equally consistent with (a) A causes B, (b) B causes A, (c) a lurking variable drives both, or some mixture. The data *alone* cannot distinguish these.

**Quick check:** students who ate breakfast score higher on morning exams. Does breakfast cause better scores? (Or... do students who go to bed on time *both* eat breakfast *and* perform better? Could you name other candidate lurking variables? That ease is exactly the point.)
```

```{figure} _image/0301.png
:alt: Three arrow diagrams explaining an observed x and y association as direct causation, common response to lurking variable z, or confounding with z
:align: center

Association and Causation
```

:::{dropdown} How to read this figure (three panels, three stories)
:open:
The figure shows the three mechanisms that can produce an observed association between $x$ and $y$. Solid arrows mean "causes"; dashed lines mean "associated with." Attach one concrete story to each panel and you will never mix them up:

* **Panel (a) — Causation** ($x \rightarrow y$): hours of studying ($x$) genuinely improve exam scores ($y$). The association is real *and* causal.
* **Panel (b) — Common response** ($z \rightarrow x$ and $z \rightarrow y$): ice cream sales ($x$) and drownings ($y$) rise together. Neither causes the other — summer heat ($z$) drives both. Remove the arrow between $x$ and $y$ entirely: they respond in common to $z$.
* **Panel (c) — Confounding** ($x$ and $z$ tangled, both affecting $y$): seniors take a test-prep course ($x$) and also have more coursework experience ($z$); both influence their scores ($y$), and because course-takers *are* mostly seniors, the data cannot separate the course's effect from the experience effect. The two influences are **mixed** — that mixing is what "confounded" literally means.

When you read any such diagram: first find which variables are *observed* (we have data) versus *lurking* (we do not), then trace which arrows could produce the association we see.
:::

(ch3-sampling)=
## Sampling Design

```{admonition} A question before this section
:class: bridge
In 1936, the *Literary Digest* magazine polled **2.4 million** Americans and confidently predicted Landon would defeat Roosevelt in a landslide. George Gallup polled only about **50,000** people — and called the election correctly: Roosevelt won 46 of 48 states. The Digest's sample came from telephone directories and car registrations (in 1936, markers of wealth) and from volunteers who mailed back a card. **How did 50,000 beat 2.4 million?** This section answers that: *how* you select matters far more than *how many* you select.
```

Now that we have addressed the obstacles of confounding and understand why creating new data through experiments is sometimes necessary, we can revisit the critical step of _getting_ our samples. Both **observational studies** and **experimental studies** require a well-thought-out <span class="purdue-text">**sampling design**</span>. This is because we need to intentionally select elements or observations from the population to form a sample-a subset of the population-so that we maintain control over this step.

Unlike experimental studies, observational studies do not involve **experimental design**, which will be discussed in a later section. In observational studies, no treatments or interventions are deliberately imposed on the subjects. Instead, these studies rely entirely on **sampling design** to collect data. We will begin with a discussion of **Sample Surveys**, a classical form of observational study.


```{prf:definition} Sample Survey
:label: samsur-definition

A **sample survey** is an **observational study**-we simply observe, measure, or ask questions of a subset without imposing a treatment (as in an experiment).

The **design** of a sample survey refers to **how we select** the sample from the population.
```

The primary goal of sampling design is to ensure that the sample is selected in a way that guarantees it is **representative** of the entire population. If the sampling scheme favors certain parts of the population over others, it introduces **bias**, or **systematic error**. 

One example of such a scheme is a **voluntary response sample**, where people who take the effort to respond to an open invitation are not representative of the entire population. This introduces a form of **selection bias**.

* A **voluntary response sample** consists of people who choose themselves by responding to a general appeal. Voluntary response samples are biased because people with strong opinions, especially negative opinions, are most likely to respond.

**Random selection** of a sample eliminates bias by giving all individuals an equal chance to be chosen. This leads to **Simple Random Sample (SRS)** which is the most basic form of **probability sampling**. A probability sampling design uses a known chance (not necessarily equal) to select the sample.

```{prf:definition} Simple Random Sample SRS
:label: simransam-definition

**Definition**: Every set of $n$ individuals in the population has an equal chance to be chosen.

**Example**: _Names in a hat_ or using random digits/software to pick which individuals appear in the sample.
```

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "If every individual has the same chance of being selected, it's an SRS."

**In fact:** the SRS definition requires every **set** of $n$ individuals to have the same chance — a strictly stronger condition.

**Quick check:** split our 100-student class into two rows of 50 and flip one coin: heads, the front row is the sample; tails, the back row. Every *individual* has exactly a 1/2 chance of selection — but a sample mixing front-row and back-row students is *impossible*. Only 2 of the billions of possible 50-student sets can ever occur, so this is **not** an SRS.
```

Here are two more complex sampling methods:

* **Stratified Random Sample:** First, **divide** the population into **strata** (groups of similar individuals-e.g., by region, gender, or age). Then choose an SRS **within each stratum** and **combine** these SRSs into one overall sample.
  * Why? If individuals within each stratum are more alike, sampling each stratum separately can give more precise estimates (less variability).
  * It’s like _blocking_ in experiments: grouping by an important characteristic before randomizing.
* **Multistage Random Sample (Including Clusters):** Select the sample in **stages**. Common in large-scale national surveys:
  1. Divide the population into **primary sampling units** (PSUs) (e.g., regions). Randomly select some PSUs.
  2. Within each chosen PSU, randomly select smaller sub-units (e.g., city blocks).
  3. Within each block, randomly select households or individuals (clusters).
  * Why? More practical (less travel and cost); large populations are spread out; a simple SRS of all households in the country would be logistically expensive.

:::{dropdown} Example: why stratify? The height study again
:open:
Heights differ systematically by sex: women's heights center near 64.5 inches and men's near 69.5 inches. An SRS of 100 students might, by luck, draw 60 women and 40 men — and its average would land low for reasons that have nothing to do with sampling "going wrong."

A **stratified** design removes that luck: split the population by sex, draw an SRS of 50 from each stratum, and combine. Every sample now automatically has the right sex balance, so the estimate varies less from sample to sample. The general principle: **stratify on a variable that is related to what you are measuring** — the more alike individuals are within each stratum, the bigger the precision gain.

A **multistage** design answers a different problem — cost: to survey students in person, first randomly choose 5 residence halls, then random floors within those halls, then interview every student on the chosen floors (clusters). Less representative per observation than an SRS, but vastly cheaper to collect.
:::

Even with well-designed sampling methods, we cannot entirely eliminate **bias**. Below is a list of common sources of bias and errors.

* **Undercoverage**: Some groups in the population are left out of the process (e.g., homeless, dorm students in telephone polls).
* **Nonresponse**: Individuals chosen for the sample can't be contacted or refuse to cooperate (often 50%+ in phone polls).
* **Response Bias**: Behaviors of interviewer or respondent can influence answers (e.g., lying about sensitive topics, interviewer's tone, memory errors).
* **Wording of Questions**: Minor changes in phrasing can drastically change results. Leading or confusing questions create strong bias.
* **Measurement Bias**: When your measurement process systematically mismeasures the target, consistently favoring one direction (e.g., a scale that overestimates weight).

:::{dropdown} Example: five ways the height survey can go wrong
One survey, five distinct failure modes — match each to the list above:

1. You recruit at the Co-Rec (gym) — students who don't exercise there are never reachable. (*Undercoverage.*)
2. You email 500 randomly chosen students; 380 never reply — and maybe the shy non-repliers differ in height from the confident repliers. (*Nonresponse.*)
3. You ask students to *state* their height: people round up — self-reported heights run about an inch taller than measured ones. (*Response bias.*)
4. You ask, "As one of Purdue's taller-than-average students, how tall are you?" (*Wording.*)
5. Your tape measure's first inch broke off, so every reading is one inch too tall. (*Measurement bias.*)

Note which of these are fixed by taking a *bigger* sample: **none of them.** Bias is systematic — it survives any sample size, which is exactly the Literary Digest's lesson.
:::

One last thing I want to mention in this section is that our goal is to calculate a _statistic_[^footnote03] from our sample to estimate the parameter associated with the population. If the sampling design contains **bias**, you can imagine that this statistic will not be of high quality. However, bias is just one dimension when assessing quality. Another critical dimension is the **variance**, or **variation**, of a statistic during the sampling process, even if the sampling design is unbiased. Below are two common sources of variation.

* **Sampling Variability**: If the sample is drawn from the population with some amount of randomness, the sampling variability describes the variability from one sample to the next.
* **Measurement Variability**: When we take multiple measurements on the same object and we get variations in measurements from one measurement to the next.

[^footnote03]: I will discuss the term _statistic_ in more detail in later chapters.

:::{dropdown} Example: bias and variability are different diseases
Two ways to estimate the average height of Purdue students:

* **Method A:** always survey the men's basketball team. The answers barely change from year to year (*low variability*) — but they are always far too tall (*large bias*).
* **Method B:** take an SRS of just $n = 5$ students. On average this hits the truth (*no bias*) — but any single sample of 5 can swing wildly (*high variability*).

A good design needs to defeat **both** diseases: random selection kills bias; a larger sample size tames variability. Chapter 5 turns this picture into formulas (and its bullseye figure makes the two dimensions visual).
:::

(ch3-experiments)=
## Design of Experiments

```{admonition} A question before this section
:class: bridge
An energy-drink company claims its product improves exam scores, citing a survey: students who drink it score higher. By now you can name the problem — maybe ambitious students *both* buy energy drinks *and* study more (a lurking variable). Observation cannot untangle this. **So what would it take to actually settle the question?** Answer: stop watching who chooses to drink it, and start *deciding* who drinks it. That decision — and how to make it well — is experimental design.
```

Before diving into the design aspect, we first need to understand the definition of an <span class="purdue-text">**experiment**</span> and familiarize ourselves with some terminologies associated with it.

```{note}

**Experiment**: A study in which **researchers impose treatments** (or interventions) on experimental units (which can be people, animals, or objects) in order to observe their responses (outcomes).

**Why We Do Experiments**: They're our best shot at establishing **cause-and-effect** because by randomly assigning treatments and controlling conditions, we can reduce or eliminate **confounding** influences that otherwise might bias our conclusions.
```

* **Experimental units**: The individuals in an experiment (called **subjects** if they are human). The smallest unit to which a treatment is independently assigned. 
* **Factors**: The explanatory variables in an experiment.
  * Example: A factor could be "Type of Class" (small vs. regular) in an education experiment, or "Ad Length" in an advertising study.
* **Outcomes (Response variables)**: The measured results (what we compare across treatments).
  * Example: students' grades in the education experiment. 
* **Levels of a Factor**: Different values that a factor can take (e.g., 30-second vs. 90-second ad).
* **Treatments**: Specific experimental conditions imposed on the subjects. Often formed by combining specific levels of one or more factors.
  * Example: If Factor $A = \text{Ad Length}$ (30s or 90s) and Factor $B = \text{Repetitions}$ (1, 3, or 5 times), you have 2 $\times$ 3 $=$ 6 possible treatments.

:::{dropdown} Example: label the parts of the caffeine experiment
:open:
*Design:* 120 students are randomly assigned to drink 0 mg, 100 mg, or 200 mg of caffeine, in the morning or in the evening, before taking a reaction-time test.

* **Experimental units (subjects):** the 120 students.
* **Factors (two):** caffeine dose and time of day.
* **Levels:** dose has 3 levels (0/100/200 mg); time of day has 2 levels.
* **Treatments:** $3 \times 2 = 6$ combinations (e.g., "100 mg in the evening" is one treatment) — with 120 students, that is 20 subjects per treatment.
* **Response variable:** reaction time.

Being able to produce this labeled list from a plain-English description is exactly what exam questions ask for.
:::

**Placebo effect, Control, Control Group, and Treatment Group**

Before we move on to how to design an experiment, we first need to clearly understand why we design experiments. In the previous sections, we learned that confounding is a significant issue when attempting to establish causality. The best way to avoid confounding is by conducting a **comparative experiment**. The basic idea is to **assign** (according to a specific experimental design) the experimental units into different groups after selecting them to form our sample. Each group receives a different treatment, and the results are then compared.

There are many potential variables or factors that could explain or affect the causal relationship between the variables of interest and the response variable. Often, confounders—hidden or lurking variables—cannot be measured, or they are not our primary focus. Experimental design aims to mitigate or eliminate the effects of these variables. This is the core idea behind experimental design: we need to <span class="purdue-text">**Control**</span> these effects.

```{prf:definition} Control
:label: control-definition

**Control** is about managing **lurking variables** or **extraneous** factors (variables not of primary interest) that could influence the response variable.

If these factors differ between treatment groups, they may **confound the results**, making it unclear whether the observed differences are due to the treatments or the lurking variables.

The goal of control is to **keep these variables constant** or **balanced across treatment groups**, so any observed differences in outcomes can be confidently attributed to the treatments.
```

We will discuss how to achieve **Control** later when we explore experimental design. Since experiments involve two or more groups, we need a group to serve as a benchmark so that the results of other groups can be compared against it. This group is usually called the **Control Group** and is often given a **Placebo** to account for the <span class="purdue-text">**Placebo Effect**</span>.

```{prf:definition} Placebo Effect
:label: plaeff-definition

The **placebo effect** occurs when individuals experience a change in their behavior, symptoms, or outcomes simply because they believe they are receiving a treatment, even if the treatment has no active ingredient or direct therapeutic effect. 

This psychological or physiological response is not due to the treatment itself but rather to the individual's **expectation of improvement** or **belief** that they are being helped.

**Baseline for Comparison**: The placebo effect can confound the results of an experiment. To accurately measure the effect of a real treatment, researchers need to isolate the treatment's effect from the placebo effect. This is why placebos are often used as a benchmark or baseline in experiments.
```

By including a placebo group, researchers can control for the impact of participants' expectations or beliefs about the treatment, ensuring that any observed effects in the treatment group are due to the treatment itself and not psychological factors. The placebo control group can be thought of as a treatment group that receives no active treatment (an inert treatment). The remaining groups are referred to as treatment groups, each receiving a specific treatment.

:::{dropdown} How Placebos Work in Experiments:
:open:
1. **Participants are Divided**:
  * Some participants receive the actual treatment (e.g., a drug with an active ingredient).
  * Others receive a placebo (e.g., a sugar pill, saline injection, or inert substance) that looks identical to the actual treatment but has no active effect.
2. **Blind or Double-Blind Designs**:
  * Single-Blind: Participants don't know if they are receiving the real treatment or the placebo.
  * Double-Blind: Neither the participants nor the experimenters know which group is receiving the real treatment or placebo. This eliminates biases from both sides.
3. **Comparison**:
  * After the experiment, researchers compare the outcomes in the treatment group to those in the placebo group. If the treatment group shows a significantly better outcome than the placebo group, the effect can likely be attributed to the treatment itself.
:::

:::{dropdown} Types of Experimental Designs
:open: 
* **Completely Randomized Design (CRD)**
  * All experimental units are **randomly allocated** among all treatments.
  * Can handle any number of treatments.
  * Example: The advertising example with 6 treatments (two factors, each at multiple levels) and 150 subjects, randomly assigning 25 subjects to each treatment.
* **Matched Pairs Design**
  * Often used to compare just **two** treatments.
  * Subjects are arranged in pairs (e.g., same age, same gender) that are alike in ways that might affect the response. Then one subject in each pair gets treatment A, the other gets treatment B; which member of the pair receives which treatment is assigned at random (e.g., by a coin flip).
  * Variation is reduced because each pair is more similar than randomly chosen individuals.
  * Alternatively, the same subject can receive both treatments in random order (the subject is "paired with themselves"). This experiment is called a **cross-over** experiment.
  * Example: to compare caffeine vs. decaf on reaction time, have **each** student tested twice — once with each drink, on different days, in a random order. Each student serves as their own perfectly-matched pair.
* **Block Designs**
  * A generalization of "matching" when we have larger groups of subjects who share certain characteristics.
  * We divide subjects into **blocks** (groups) based on some confounding factor, then randomly assign treatments within each block.
  * Example: If men and women might respond differently, we block by gender, then randomize within each gender block.
:::

For all designs, random assignment is essential at some stage. To implement randomization, we can use tools such as computer software, a table of random digits, or other similar methods. 

One important strategy to note is that we can first block certain factors and then randomly assign treatments to groups within each block to control for lurking variables. This approach follows the principle: **control what you can, block what you cannot control (i.e., form blocks), and randomize to create comparable groups**-provided you have the luxury of a relatively large sample size. 

We block these factors because they are not the focus of the study and can be observed by the researchers.

:::{dropdown} Core Principles of Experimental Design
:open: 
* **Comparison**: Use at least two treatments (or a treatment vs. control) to prevent confounding influences. Control: Keep outside variables (lurking or extraneous factors) the same or accounted for, so differences in outcome can be attributed to the treatments rather than confounding.
* **Randomization**: Assign subjects to treatments purely by chance so the groups are (on average) similar in all respects except for the treatment imposed.
* **Repetition (Replication)**: Use enough subjects (or replicate the procedure multiple times) to reduce chance variation in the results.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "Randomization makes the two groups identical, so any difference must be caused by the treatment."

**In fact:** randomization makes the groups similar **on average** — in any *one* experiment, the groups still differ by chance (flip a fair coin 20 times; you rarely get exactly 10 heads). This is why we still need statistical inference (Chapters 5–9): to judge whether an observed difference is *larger than chance assignment alone would produce*. And when a lurking variable is known in advance (like sex, for a height-related response), **blocking** handles it deliberately rather than leaving it to luck.

**Quick check:** with only 6 subjects — 3 varsity athletes and 3 non-athletes — could a coin-flip assignment put all 3 athletes in the caffeine group? (Yes, with probability $\frac{1}{20}$ per group. Small experiments get unlucky easily; blocking by athlete status prevents exactly this.)
```

(ch3-cautions)=
## Cautions about Experimentation

Though **randomized comparative experiments** (when done carefully and repeated in different contexts) provide the strongest evidence for causation and are often regarded as the gold standard, there are still important considerations to keep in mind when conducting experiments and interpreting the results.

* **Lack of Realism**: The experimental setting might not reflect real-world conditions, limiting generalizability.
* **Ethical/Practical Constraints**: Some random assignments may be unethical (e.g., harmful interventions) or logistically impossible.
  * Approval of an **institutional review board** is required for studies that involve humans or animals as subjects.
  * Human subjects must give **informed consent** if they are to participate in experiments.
  * Data on human subjects must be kept **confidential**.
* **External Validity**: Even a well-designed experiment in one setting might not hold for different populations or environments.
* **Bias and Confounding**: If not carefully controlled, design flaws can still let lurking variables confound results.

(ch3-together)=
## Putting It All Together: The Energy-Drink Question

Let's run the entire chapter through one problem, exactly the way an exam (or real life) hands it to you.

> *"BoilerFuel" energy drink claims to improve exam performance. Design a study to evaluate the claim.*

**Step 1 — What kind of evidence do we have so far?** Testimonials on the company website ("I drank it and aced my final!") are **anecdotal data** — striking individual cases, worthless as evidence. A survey finding that BoilerFuel drinkers score higher is an **observational study**: real data, but the association is contaminated by lurking variables (ambition, study habits, sleep...). Panel (b)/(c) of the association figure applies: we cannot conclude causation.

**Step 2 — Decide: observational study or experiment?** Ask the one diagnostic question: *will we impose the explanatory variable, or just record it?* The claim is causal ("improves performance"), so we need to **impose** it — an experiment. (If imposing were unethical or impossible — as with smoking — we would be stuck with careful observational methods.)

**Step 3 — Identify the parts.**
* **Subjects:** 200 volunteer students (note: volunteers → external validity caution).
* **Factor:** drink type. **Levels:** BoilerFuel vs. placebo (identical-tasting, caffeine-free drink). So **2 treatments**.
* **Response variable:** score on a standardized test taken one hour after drinking.
* **Placebo & blinding:** the placebo controls for the *belief* of being boosted; **double-blind** administration (neither student nor grader knows the assignment) controls both expectation effects.

**Step 4 — Choose the design.**
* *Completely randomized:* flip a fair coin (software) for each student: 100 get BoilerFuel, 100 get placebo. Fine as a default.
* *Better — block what you can predict:* GPA surely affects test scores. Form blocks by GPA bracket (e.g., quartiles), then randomize within each block — this removes GPA from the chance variation, just as stratifying by sex sharpened the height survey.
* *Best for this question — matched pairs (cross-over):* every student takes two comparable tests on two mornings — once after BoilerFuel, once after the placebo, in **random order**. Each student is their own control, eliminating all person-to-person differences at once.

**Step 5 — Know what you may conclude.** If the BoilerFuel scores beat placebo scores by more than chance variation would explain (Chapter 7 makes "more than chance" precise), the randomized design lets us say the drink **caused** the improvement — *for students like our volunteers, in test conditions like ours*. The cautions section is the fine print: realism, external validity, and ethics all still apply.

**The identification checklist** (use this on every study you ever read):
1. Was the explanatory variable **imposed** (experiment) or just **recorded** (observational)?
2. If observational: what lurking variables could produce the association? (→ no causal claim.)
3. If experimental: was assignment **randomized**? Is there a **control/placebo**? **Blinding**? **Blocking** on known factors?
4. How were the subjects **selected** in the first place (SRS? volunteers?) — and whom do the results generalize to?

## Check Your Understanding

:::{dropdown} 1. A dining-court survey asks students leaving the gym to rate campus fitness facilities. Name the design problem.
The sample is not random — students at the gym are systematically more engaged with fitness facilities than the general student population (**undercoverage** of non-gym-goers / a form of **selection bias**). No sample size fixes it.
:::

:::{dropdown} 2. Students who take Latin score higher on verbal SATs. A headline concludes "Latin boosts verbal skill." What panel of the association figure is the skeptic's alternative?
Panel (b)/(c): students with strong prior verbal interest and strong academic backgrounds are the ones who *choose* Latin — a lurking variable driving both the choice and the score. Only a randomized experiment (randomly assign students to take Latin!) could settle it.
:::

:::{dropdown} 3. In the caffeine cross-over experiment, why must the order (caffeine first vs. decaf first) be randomized?
If everyone drank caffeine on day 1 and decaf on day 2, "day" would be confounded with "drink": practice effects, fatigue, or a harder second test would be indistinguishable from the caffeine effect. Random order breaks that link.
:::
