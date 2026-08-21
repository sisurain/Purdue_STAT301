# Some Important Concepts

% ```{contents}
% :depth: 2
% ```

The textbook we will reference is **Introduction to the Practice of Statistics by Moore, McCabe, and Craig**. Past editions are fine; the major difference in the latest edition is the inclusion of new examples and scenarios to illustrate the concepts and ideas. However, the core material remains the same.

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Define **population** and **sample**, and explain why we almost always work with a sample instead of the whole population.
* Explain precisely what a **random variable** is — a *function* from the sample space to the real line — and read probability statements such as $\mathbb{P}(X < x)$.
* Distinguish a **variable** in a dataset from a **random variable** in a model, and build new random variables from old ones (like the sum of two dice).
* Distinguish the **empirical distribution** of observed data from the **theoretical distribution** of a random variable.
* Define a **parameter**, explain why it is fixed but unknown, and tell it apart from a number computed from a sample.
* Place every one of these concepts onto the Big Picture diagram from [Chapter 0](bigpicture).
```

```{admonition} Key concepts at a glance
:class: note
[Population and sample](ch2-popsample) · [Variable and random variable](ch2-randomvar) · [Distribution](ch2-distribution) · [Population parameters](ch2-parameters) · [Putting it all together](ch2-together) · [Revisiting the Big Picture](ch2-bigpicture)
```

```{admonition} Where are we? A question before we start
:class: bridge
A news article reports: *"A new poll finds 54% of Americans support the policy, with a margin of error of ±3 percentage points."* One ordinary sentence — yet nobody asked *you*, and nobody asked 330 million people either. About a thousand phone calls somehow became a claim about an entire country. **What is "54%" actually a measurement of? And 54% of *whom*?** To answer, you need four ideas this chapter builds: who "Americans" refers to (a *population*), who actually picked up the phone (a *sample*), the true level of support nobody knows (a *parameter*), and the number the pollster computed (a *statistic*). At the end of the chapter we will come back and dissect this sentence word by word.
```

Before we dive into data, there are some important concepts I would like to discuss. You can regard these as foundational knowledge for this course. To understand the materials more clearly, it is essential to have a precise and clear understanding of these concepts. That's why I have placed this discussion at the beginning of the course.

(ch2-popsample)=
## Population and Sample

```{admonition} A question before this section
:class: bridge
Suppose your job is to report the average height of Purdue students by Friday. There are roughly 40,000 of them — measuring everyone is out of the question, so you measure 1,000 and average those. But notice what just happened: the number you *wanted* describes all 40,000 students; the number you *computed* describes only your 1,000. **Are those the same number? If not, what is the relationship between them?** This section gives the two sides of that gap their official names — and that gap is, honestly, what the entire course is about.
```

Let's use a simple scenario to facilitate our discussion. Suppose we want to determine the **average height** of all Purdue students. One way to find this out is by measuring the height of every student at Purdue, recording the data, and then calculating the average. However, this method might be time-consuming, costly, or even infeasible because the total number of students might be too large or constantly changing while we're conducting the measurements.

An alternative approach is to **randomly select** a specific number of students from the entire Purdue student body to form a <span class="purdue-text">**SAMPLE**</span>. For instance, let's say we select 1,000 students. Once we have the height measurements for these 1,000 students, we can calculate the **sample average**. 

For now, let's not worry about the new terminologies and focus on the big picture. In this setting, we are curious about something related to all Purdue students. This group of all Purdue students is referred to as the <span class="purdue-text">**POPULATION**</span>. Since it is impractical to gather measurements for the entire **population**, we instead draw a **sample** from the population to make our observations and calculations.

When you encounter a scenario or question in this course, always remember that the concept of a population is present in the background, whether it is mentioned explicitly or implicitly. In most cases, we do not, or cannot, have all the measurements for the population. If we did, there would be no need to learn most of the statistical techniques introduced later in this course. Instead, we typically form a **sample** from the population and use the information and measurements (data) obtained from the sample to infer or make statements about what we are interested in within the population.

(ch2-randomvar)=
## Variable and Random Variable

```{admonition} A question before this section
:class: bridge
You are about to roll a die, and a friend says: "Let $X$ be the number the die will show." Now pause *before* the roll and ask: **what is $X$?** It is not 1. It is not 6. It has no value yet — and yet we can already compute with it exactly, e.g. $\mathbb{P}(X \leq 3) = \frac{1}{2}$ for a fair die. What kind of mathematical object has *no value* but supports *exact calculations*? Whatever $X$ is, it cannot simply be a number. This section reveals what it actually is — and the answer (a *function*) is the single most clarifying idea in the early part of this course.
```

We use these terms so often that we may not have a precise definition of them. The term <span class="purdue-text">**variable**</span> will appear as early as the first week of this course. The term <span class="purdue-text">**random variable**</span>, on the other hand, is central to probability. Often, we simply refer to it as a **variable** for short. Because these two terms are closely related, students often find them confusing.

Using the Purdue students' height example, once we have the measurements from the sample, we have our data or dataset. Let's assume that in addition to **height**, we also collect **age** measurements. Each student in the sample is described by this dataset. In the textbook, the term **cases** is used to refer to the objects described by a set of data. You can think of cases as individual units of observation in the dataset. From this, we can derive a definition for **variable**.

```{prf:definition} Variable
:label: variable-definition

A **variable** is a characteristic or feature of a case.
```

In our example, **height** can be regarded as a variable, and **age** is another. The recorded measurements for these two variables may vary from case to case. This variability is why they are called variables. However, this sometimes causes confusion with the concept of a **random variable**.

Throughout the course, you will frequently encounter the concept of a **random variable**, especially in probability statements such as $\mathbb{P}(X < x)$ or simply $\mathrm{P}(X < x)$. While this course skips the probability part, we still hope students gain a precise understanding of this concept and the associated notations.

A naive definition of a **random variable** might be "a variable that takes on random values." However, this definition can lead to confusion and fails to capture the essence of the concept. Before we delve into the meaning of a **random variable**, we need to first understand two foundational concepts: one familiar, **function**, and the other from probability, **sample space**.

In simple terms, a <a href="https://en.wikipedia.org/wiki/Function_(mathematics)" target="_blank">**function**</a> is a rule that takes an input and produces an output. You can also click the term to view a more detailed explanation on Wikipedia.

```{prf:definition} Function
:label: function-definition

A **function** $f: A \longrightarrow B$ means that for every element $a$ in set $A$, there is exactly one element $b$ in set $B$ such that $f(a) = b$.
```

A <a href="https://en.wikipedia.org/wiki/Sample_space" target="_blank">**sample space**</a> $\Omega$ is the set of all possible outcomes in a random experiment. Using the Purdue students' height example, we define a random variable $X$ (or $Height$) that takes a randomly chosen Purdue student as input and produces an output, which is the height of that student-a real number. 

In this random process or experiment, $\Omega$ represents all Purdue students who could potentially be chosen. The outcome, $\omega$, is a specific individual student in $\Omega$. Often, we simply write $X$ instead of $X(\omega)$ for simplicity.

```{prf:definition} Random Variable
:label: rv-definition

A **random variable** $X$ is a function that maps the sample space $\Omega$ to the real line $\mathbb{R}$:

$$X : \Omega \longrightarrow \mathbb{R}$$
```

:::{dropdown} Example: the die as a function
:open:
Roll a fair die once. The sample space is the set of **physical outcomes** — the six faces of the die that can end up on top:

$$\Omega = \{\text{face with 1 dot}, \ \text{face with 2 dots}, \ \dots, \ \text{face with 6 dots}\}.$$

Note that these are *physical objects* (plastic faces with dots), not numbers. The random variable $X$ is the **function** that maps each physical face to a number: $X(\text{face with 3 dots}) = 3$, and so on.

Here is the key insight: the *randomness* lives entirely in **which outcome $\omega$ occurs** when you roll. The function $X$ itself is a fixed, perfectly deterministic rule — "count the dots on the upturned face." Same face in, same number out, every time. A "random variable" is thus a deterministic function applied to a random outcome. If the die is fair, each face — and hence each of the values $1$ through $6$ — has probability $\frac{1}{6}$.
:::

:::{dropdown} Example: building a new random variable — the sum of two dice
Now roll **two** fair dice. The sample space is the set of ordered pairs $\Omega = \{(1,1), (1,2), \dots, (6,6)\}$ — all $36$ outcomes, each equally likely with probability $\frac{1}{36}$. Define a new function on this sample space:

$$S(\omega) = S\big((a, b)\big) = a + b.$$

$S$ is a brand-new random variable — the **sum** — built from the same random experiment. Its possible values are $2, 3, \dots, 12$. But here is the striking part: even though the $36$ *outcomes* in $\Omega$ are equally likely, the *values* of $S$ are **not**:

* $S = 7$ can happen six ways — $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ — so $\mathbb{P}(S = 7) = \frac{6}{36} = \frac{1}{6} \approx 0.167$;
* $S = 2$ can happen only one way — $(1,1)$ — so $\mathbb{P}(S = 2) = \frac{1}{36} \approx 0.028$.

Rolling a 7 is six times as likely as rolling a 2 (ask anyone who plays board games). Two lessons: **new random variables can be built from old ones** (here $S = X_1 + X_2$, the sum of the two individual dice) — we will do this constantly later, most importantly with the sample average $\bar{x}$ — and **the function decides how probability on $\Omega$ gets transferred to the values**, so equally likely outcomes do not mean equally likely values.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "A random variable is a number — just one whose value happens to be random. If I rolled a 4, then $X$ is 4."

**In fact:** a random variable is a **function** (a rule attached to a random process), not a number. A number like 4 is one **realization** — the output produced on one particular run of the experiment. Before the roll, $X$ has no value at all; what it has is a *distribution* of possible values. After the roll, what you hold is a realization, while $X$ itself is unchanged and ready to produce a different realization tomorrow.

**Quick check:** you roll a die and see 5. Which one is the random variable and which is the realization — $X$ or $5$? ($X$ is the function "report the number on the upturned face"; $5$ is today's realization. Roll again and $X$ stays the same while the realization may not.)
```

When you see a random variable or a probability statement, you need to consider the sample space context in the background. Now, let's break down the meaning of $\mathbb{P}(X < x)$:

* $\mathbb{P}(\cdot)$: This denotes _the probability of_.
* $X$: This is a **random variable**, meaning it can take on different values based on some random process or experiment.
* $x$: This is a **specific value** (a number) you are comparing $X$ to.
* $X < x$: This is the **event** (or condition) that the random variable $X$ takes on a value **less than** $x$. An event can be thought of as a subset of the sample space.

```{prf:definition} $\mathbb{P}(X < x)$
:label: ps-definition

$\mathbb{P}(X < x)$: The probability that the random variable $X$ takes on a value less than $x$.
```

For example, $\mathbb{P}(X < 65)$ or $\mathbb{P}(Height < 65)$ represents the probability that, if you pick a student at random, their height will be under 65 inches. While we have not yet defined the meaning of _at random_ mathematically, we can assume that every Purdue student has an equal chance of being selected.

:::{dropdown} Example: the die vs. $Height$ — discrete and continuous random variables
Both the die's $X$ and $Height$ fit the same definition — a function from a sample space to the real line — but they differ in the *kind* of values they produce.

* **The die is discrete:** $X$ can land on exactly six separate values, $\{1, 2, \dots, 6\}$, and nothing in between. It makes sense to ask $\mathbb{P}(X = 3)$, and the answer is a positive number ($\frac{1}{6}$ for a fair die).
* **$Height$ is continuous:** it maps a randomly chosen student to a value on a continuous scale — $67$ inches, $67.2$, $67.24601\ldots$ — with no gaps. For continuous random variables, the natural questions are about **ranges**, like $\mathbb{P}(Height < 65)$ or $\mathbb{P}(64 < Height < 70)$; the probability of hitting any *single exact* value (a student measuring $67.000000\ldots$ inches exactly) is essentially zero.

Same definition, two flavors. Keep both mental prototypes handy: **the die** for discrete, **Purdue heights** for continuous — nearly every random variable in this course will resemble one of the two.
:::

(ch2-distribution)=
## Distribution

```{admonition} A question before this section
:class: bridge
In [Chapter 0](bigpicture) you met a fair die and a loaded die that favors six. Both have *exactly* the same faces — the values $1$ through $6$ are stamped into the plastic of each. So if I hand you a die and tell you only its possible values, I have told you **nothing** about which die you are holding. **What is the missing piece of information that separates the fair die from the loaded one?** That missing piece — *how probability is spread over the possible values* — is precisely what this section names: the **distribution**.
```

In the previous section, we learned about **variables** and **random variables**. For both concepts, we can also discuss their **distribution**. In simple terms, a <span class="purdue-text">**distribution**</span> describes **how values are spread out** (or how likely different values are) for a given variable or random variable. It defines the **probabilities** associated with different ranges of values that the variable or random variable can take.

* If we have a dataset containing observed values, a **variable** (typically a column in the dataset) has an **empirical distribution** (the frequencies of the observed values).
* If we have a **random variable**, in probability theory it has a **theoretical probability distribution** (theoretical probabilities of values). In this course, we will also encounter some famous probability distributions.

:::{dropdown} Example: same values, different distributions — the fair and the loaded die
:open:
Recall the loaded die from [Chapter 0](bigpicture), which favors six: say $\mathbb{P}(X = 6) = \frac{1}{3}$, with the remaining probability $\frac{2}{3}$ split equally among the other five faces ($\frac{2}{15} \approx 0.133$ each).

| value | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| fair die | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ | $\frac{1}{6}$ |
| loaded die | $\frac{2}{15}$ | $\frac{2}{15}$ | $\frac{2}{15}$ | $\frac{2}{15}$ | $\frac{2}{15}$ | $\frac{1}{3}$ |

The two dice have **identical possible values** but **different distributions** — and the distribution is what actually distinguishes them. Listing the possible values is only half of specifying a random variable; the distribution is the other, decisive half. (This is Chapter 0's "two ingredients" idea wearing its official name.) The sum of two dice from the previous section is another case in point: its distribution — heavy at $7$, thin at $2$ and $12$ — is what made it interesting.
:::

In our height example, once we have a sample of 1,000 students, we have 1,000 height measurements for the students in the sample. These values form an **empirical distribution**. Meanwhile, if we consider the aforementioned $Height$ random variable, we can assume it follows a <a href="https://en.wikipedia.org/wiki/Normal_distribution" target="_blank">**Normal (Gaussian) distribution**</a>. Thus, the **theoretical distribution** of $Height$ is a normal distribution[^footnote01].

[^footnote01]: You can also visit [this website](https://www.math.wm.edu/~leemis/chart/UDR/UDR.html) to explore the basic distributions developed to model real-world phenomena and how they are interconnected. Yes, things are connected!

:::{dropdown} Example: empirical vs. theoretical — roll a fair die 60 times
:open:
The die makes the empirical/theoretical pair concrete. The **theoretical** distribution of a fair die is the flat line: probability exactly $\frac{1}{6} \approx 0.167$ for each face. Now actually roll a fair die 60 times (we simulated this on a computer) and tally:

| face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| count (out of 60) | 12 | 8 | 9 | 10 | 10 | 11 |
| observed proportion | $0.200$ | $0.133$ | $0.150$ | $0.167$ | $0.167$ | $0.183$ |
| theoretical probability | $0.167$ | $0.167$ | $0.167$ | $0.167$ | $0.167$ | $0.167$ |

The middle rows are the **empirical distribution** of this dataset of 60 rolls: observed frequencies, which wobble around the flat line ($0.133$ here, $0.200$ there) — a perfectly fair die does *not* produce a perfectly flat table in 60 rolls. The bottom row is the **theoretical distribution** of the random variable $X$: exact, flat, and untouched by any particular set of rolls.

The connection between them: as the number of rolls grows, the empirical proportions settle toward the theoretical ones. When we continued the simulation to $6{,}000$ rolls, every face's proportion landed between $0.161$ and $0.171$ — the histogram was nearly flat. The same story holds for heights: the histogram of 1,000 measured heights is empirical and a bit lumpy; the smooth normal curve of $Height$ is theoretical; and with more and more data, the histogram traces out the curve. This "empirical approaches theoretical" idea is exactly the link between the middle circle and the model world in [Chapter 0's Big Picture](bigpicture).
:::

(ch2-parameters)=
## Population Parameters

```{admonition} A question before this section
:class: bridge
Someone asks you, plainly: "So how tall *are* Purdue students?" You cannot answer by reciting 40,000 numbers — what they want is **one number** that summarizes the whole population, something like *the* average height, $\mu$. Here is the strange part: that number genuinely **exists** (the 40,000 students are out there, each with a height), yet **nobody knows it** — not you, not the registrar, not anyone. **What do we call a number that is perfectly well-defined, completely fixed, and completely unknown?** This section gives it a name — *parameter* — and that name marks the exact spot where statistics gets its mission.
```

Once we have learned the concept of a **distribution** and assume that the $Height$ random variable follows a normal distribution, we can use a mathematical function to define the shape of the normal distribution. This function has two **parameters**: the mean $\mu$ and the standard deviation $\sigma$[^footnote02].

Our population consists of all Purdue students, each with a height value. These height values in the population are considered **realizations** of the random variable $Height$.

[^footnote02]: We can also use the variance, $\sigma^2$, as an alternative parameter.

In the textbook and this course, the mean $\mu$ and standard deviation $\sigma$ are referred to as the <span class="purdue-text">**parameters**</span> associated with the **population**.

```{prf:definition} Parameter
:label: parameter-definition

A **parameter** is a number that describes the **population**. 

While it is a fixed value, its true value is typically unknown in practice.
```

:::{dropdown} Example: parameters you know, parameters you don't
* **The die:** if you *assume* the die is fair, the parameter is handed to you — each face has probability $\frac{1}{6}$. But pick up a stranger's die, and the honest model is "each face $i$ has some probability $p_i$" — six parameters, values unknown. Fair vs. loaded is now a question **about the parameters**: is every $p_i$ equal to $\frac{1}{6}$, or is $p_6$ larger?
* **Heights:** modeling $Height$ as normal hands us the *shape family*, but the two parameters $\mu$ and $\sigma$ that pin down *which* normal curve are unknown — and $\mu$ is exactly the "average height of all Purdue students" we set out to find in the first section.

Textbook problems often say "suppose $\mu = 67$ and $\sigma = 3$" — that is the *probability* direction from [Chapter 0](bigpicture), where parameters are given so you can practice. In the real world, and in the second half of this course, the parameters are the unknowns we chase.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "I took a new sample and got a different average — so the parameter $\mu$ must have changed."

**In fact:** the parameter never moved. $\mu$ is a fixed property of the **population** (all ~40,000 heights have one single average, whether or not anyone knows it). What changes from sample to sample is the **sample average** — a quantity computed from data, called a *statistic* (formally defined next chapter). New sample, new statistic value; same population, same parameter.

**Quick check:** two project teams each measure 100 randomly chosen Purdue students. Team A reports an average of $66.8$ inches; Team B reports $67.3$. How many values of $\mu$ are there in this story? (Exactly **one** — unknown, fixed, and merely *estimated* twice, a little differently each time.)
```

Since these parameters are unknown, except in cases where the question explicitly provides a fixed value, we need to use our **sample** to estimate the unknown parameter or make inferences about it.

There is one subtle gap to bridge. In the first section, we mentioned the _**average height** of all Purdue students_ and treated it as unknown, linking it to the population. We can think of this as the **empirical population parameter**. When the population size $N$ is very large, this **empirical population parameter** should be very close to the **theoretical population parameter**, $\mu$. The textbook does not distinguish between these two perspectives.

(ch2-together)=
## Putting It All Together: One Sentence from the News

Let's return to the sentence from the start of the chapter and dissect it with our new vocabulary:

> *"A new poll finds 54% of Americans support the policy, with a margin of error of ±3 percentage points."*

**Step 1 — Find the population.** "Americans" is the **population**: all U.S. adults, roughly 260 million people. As always, it sits in the background — never fully measured, yet it is who the sentence claims to be about.

**Step 2 — Find the sample.** The pollster called roughly 1,000 people. Those 1,000 respondents are the **sample** — the only humans who actually generated data. (Whether 1,000 can fairly stand in for 260 million depends on *how* they were chosen — that is the next chapter's subject.)

**Step 3 — Find the random variable.** Pick one adult at random and ask the question. Define

$$X(\omega) = \begin{cases} 1 & \text{if person } \omega \text{ supports the policy}, \\ 0 & \text{if not.} \end{cases}$$

This is a genuine random variable in exactly our formal sense: a **function** from the sample space $\Omega$ (all American adults — the people, not numbers) to the real line. It is the yes/no cousin of $Height$ — discrete like the die, with just two values instead of six.

**Step 4 — Find the theoretical distribution and its parameter.** The two ingredients: the possible values are $\{0, 1\}$, and the probabilities are $\mathbb{P}(X = 1) = p$ and $\mathbb{P}(X = 0) = 1 - p$, where $p$ is the true proportion of all American adults who support the policy. That $p$ is the **parameter**: one fixed number, perfectly well-defined, known to nobody. It plays the exact role $\mu$ plays in the height story.

**Step 5 — Find the statistic.** The pollster's dataset is 1,000 recorded 0's and 1's — 540 ones and 460 zeros. Its **empirical distribution** is "54% ones, 46% zeros." The number $\hat{p} = 0.54$ (read "p-hat," the sample proportion) is computed from the sample: a **statistic**. Call a *different* 1,000 people and you would get a different $\hat{p}$ — maybe $0.52$, maybe $0.56$ — while $p$ itself sits unmoved.

**Step 6 — Decode the fine print.** "Margin of error ±3" is the pollster admitting exactly that: $\hat{p}$ varies from sample to sample, so $0.54$ is an *estimate* of $p$, not $p$ itself — and the ±3 quantifies how far off it is likely to be. Where that number comes from is Goal 2 of the course ([Chapter 0](bigpicture)), delivered in Chapters 5 and beyond.

So one news sentence, fully translated: *a statistic ($\hat{p} = 0.54$), computed from the empirical distribution of a sample ($n = 1{,}000$), estimating the unknown parameter ($p$) of the theoretical distribution of a random variable ($X$) defined on a population (U.S. adults) — with an honest confession of sampling uncertainty (±3).* Every concept in this chapter, in one line of newsprint.

## Check Your Understanding

:::{dropdown} 1. Your roommate says: "The sum of two fair dice is a random variable, so every value from 2 to 12 is equally likely." What's wrong?
Being a random variable says nothing about values being equally likely — a random variable is just a function from the sample space to the real line, and the function shapes the probabilities. Here the 36 *outcomes* $(a,b)$ are equally likely, but the *values* of the sum are not: $\mathbb{P}(S = 7) = \frac{6}{36} = \frac{1}{6}$ while $\mathbb{P}(S = 2) = \frac{1}{36}$ — a 7 is six times as likely as a 2. "Equally likely" lives on $\Omega$, not automatically on the values.
:::

:::{dropdown} 2. In the height study, classify each item: (a) all Purdue students; (b) the 1,000 students measured; (c) $\mu$; (d) the computed average of the 1,000 measurements, say 67.1 inches. Which of these are fixed, and which would change if we redid the study?
(a) The **population**. (b) The **sample**. (c) The **parameter** — a fixed, unknown number describing the population. (d) A **statistic's value** (a realization of the sample average) — known once we have data, but it *varies*: redo the study with a fresh random sample and (b) and (d) both change, while (a) and (c) stay exactly the same. Fixed: population and parameter. Changing: sample and statistic.
:::

:::{dropdown} 3. You roll a fair die 60 times and record the results. What is the difference between the empirical distribution of your recorded rolls and the theoretical distribution of $X$? What happens as 60 rolls become 6,000?
The **empirical distribution** is the table of observed frequencies from *your* 60 rolls — it wobbles (perhaps face 1 appeared 12 times but face 2 only 8) and would come out differently for a classmate. The **theoretical distribution** is the model's exact flat assignment of $\frac{1}{6}$ to each face — the same for everyone and untouched by any actual rolls. As the number of rolls grows to 6,000 and beyond, the empirical proportions settle toward $\frac{1}{6}$: the empirical histogram approaches the theoretical shape. That convergence is what lets data (the inner circles of the Big Picture) tell us about the model (the right side).
:::

(ch2-bigpicture)=
## Revisiting the Big Picture

You have now met this chapter's concepts twice: informally in [Chapter 0](bigpicture) — through dice, heights, and pictures — and formally here, with definitions. Go back to the Big Picture diagram one more time; every formal name in this chapter labels one specific piece of it.

* The dashed outer circle — the **true population world** — is what our formal <span class="purdue-text">population</span> refers to: all Purdue students, never fully observed.
* The **model world** on the right is the formal <span class="purdue-text">random variable</span> $X$ (a function from outcomes to numbers) together with its <span class="purdue-text">theoretical distribution</span> — the smooth pdf that infinitely many draws would form.
* The middle circle — the **empirical population** — is where the <span class="purdue-text">empirical distribution</span> of a very large dataset lives; its histogram nearly matches the theoretical curve when $N$ is large.
* The **theoretical population parameter** ($\mu$, $\sigma$) belongs to the model world; the **empirical population parameter** (the actual average of all ~40,000 students) belongs to the middle circle. When $N$ is large the two nearly coincide — that is exactly why the textbook does not bother to distinguish them.
* The innermost circle is our <span class="purdue-text">sample</span>, and any number we compute from it (such as $\bar{x}$) is a **statistic** — our only usable handle on all the layers outside it.

If you can place each of this chapter's definitions onto the picture from memory, you have genuinely understood this chapter — and you are ready for the rest of the course.

