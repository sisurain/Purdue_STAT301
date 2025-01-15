# Some Important Concepts

% ```{contents}
% :depth: 2
% ```

The textbook we will reference is **Introduction to the Practice of Statistics by Moore, McCabe, and Craig**. Past editions are fine; the major difference in the latest edition is the inclusion of new examples and scenarios to illustrate the concepts and ideas. However, the core material remains the same.

Before we dive into data, there are some important concepts I would like to discuss. You can regard these as foundational knowledge for this course. To understand the materials more clearly, it is essential to have a precise and clear understanding of these concepts. That’s why I have placed this discussion at the beginning of the course.

## Population and Sample

Let’s use a simple scenario to facilitate our discussion. Suppose we want to determine the **average height** of all Purdue students. One way to find this out is by measuring the height of every student at Purdue, recording the data, and then calculating the average. However, this method might be time-consuming, costly, or even infeasible because the total number of students might be too large or constantly changing while we’re conducting the measurements.

An alternative approach is to **randomly select** a specific number of students from the entire Purdue student body to form a <span style="color:#cfb991">**SAMPLE**</span>. For instance, let’s say we select 1,000 students. Once we have the height measurements for these 1,000 students, we can calculate the **sample average**. 

For now, let’s not worry about the new terminologies and focus on the big picture. In this setting, we are curious about something related to all Purdue students. This group of all Purdue students is referred to as the <span style="color:#cfb991">**POPULATION**</span>. Since it is impractical to gather measurements for the entire **population**, we instead draw a **sample** from the population to make our observations and calculations.

When you encounter a scenario or question in this course, always remember that the concept of a population is present in the background, whether it is mentioned explicitly or implicitly. In most cases, we do not, or cannot, have all the measurements for the population. If we did, there would be no need to learn most of the statistical techniques introduced later in this course. Instead, we typically form a **sample** from the population and use the information and measurements (data) obtained from the sample to infer or make statements about what we are interested in within the population.

## Variable and Random Variable

We use these terms so often that we may not have a precise definition of them. The term <span style="color:#cfb991">**variable**</span> will appear as early as the first week of this course. The term <span style="color:#cfb991">**random variable**</span>, on the other hand, is central to probability. Often, we simply refer to it as a **variable** for short. Because these two terms are closely related, students often find them confusing.

Using the Purdue students' height example, once we have the measurements from the sample, we have our data or dataset. Let’s assume that in addition to **height**, we also collect **age** measurements. Each student in the sample is described by this dataset. In the textbook, the term **cases** is used to refer to the objects described by a set of data. You can think of cases as individual units of observation in the dataset. From this, we can derive a definition for **variable**.

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

A <a href="https://en.wikipedia.org/wiki/Sample_space" target="_blank">**sample space**</a> $\Omega$ is the set of all possible outcomes in a random experiment. Using the Purdue students' height example, we define a random variable $X$ (or $Height$) that takes a randomly chosen Purdue student as input and produces an output, which is the height of that student—a real number. 

In this random process or experiment, $\Omega$ represents all Purdue students who could potentially be chosen. The outcome, $\omega$, is a specific individual student in $\Omega$. Often, we simply write $X$ instead of $X(\omega)$ for simplicity.

```{prf:definition} Random Variable
:label: rv-definition

A **random variable** $X$ is a function that maps the sample space $\Omega$ to the real line $\mathbb{R}$:

$$X : \Omega \longrightarrow \mathbb{R}$$
```

When you see a random variable or a probability statement, you need to consider the sample space context in the background. Now, let’s break down the meaning of $\mathbb{P}(X < x)$:

* $\mathbb{P}(\cdot)$: This denotes _the probability of_.
* $X$: This is a **random variable**, meaning it can take on different values based on some random process or experiment.
* $x$: This is a **specific value** (a number) you are comparing $X$ to.
* $X < x$: This is the **event** (or condition) that the random variable $X$ takes on a value **less than** $x$. An event can be thought of as a subset of the sample space.

```{prf:definition} $\mathbb{P}(X < x)$
:label: ps-definition

$\mathbb{P}(X < x)$: The probability that the random variable $X$ takes on a value less than $x$.
```

For example, $\mathbb{P}(X < 65)$ or $\mathbb{P}(Height < 65)$ represents the probability that, if you pick a student at random, their height will be under 65 inches. While we have not yet defined the meaning of _at random_ mathematically, we can assume that every Purdue student has an equal chance of being selected.

## Distribution

In the previous section, we learned about **variables** and **random variables**. For both concepts, we can also discuss their **distribution**. In simple terms, a <span style="color:#cfb991">**distribution**</span> describes **how values are spread out** (or how likely different values are) for a given variable or random variable. It defines the **probabilities** associated with different ranges of values that the variable or random variable can take.

* If we have a dataset containing observed values, a **variable** (typically a column in the dataset) has an **empirical distribution** (the frequencies of the observed values).
* If we have a **random variable**, in probability theory it has a **theoretical probability distribution** (theoretical probabilities of values). In this course, we will also encounter some famous probability distributions.

In our height example, once we have a dataset of 1,000 samples, we have 1,000 height measurements for the students in the sample. These values form an **empirical distribution**. Meanwhile, if we consider the aforementioned $Height$ random variable, we can assume it follows a <a href="https://en.wikipedia.org/wiki/Normal_distribution" target="_blank">**Normal (Gaussian) distribution**</a>. Thus, the **theoretical distribution** of $Height$ is a normal distribution[^footnote01].

[^footnote01]: You can also visit [this website](https://www.math.wm.edu/~leemis/chart/UDR/UDR.html) to explore the basic distributions developed to model real-world phenomena and how they are interconnected. Yes, things are connected!

## Population Parameters

Once we have learned the concept of a **distribution** and assume that the $Height$ random variable follows a normal distribution, we can use a mathematical function to define the shape of the normal distribution. This function has two **parameters**: the mean $\mu$ and the standard deviation $\sigma$[^footnote02].

Our population consists of all Purdue students, each with a height value. These height values in the population are considered **realizations** of the random variable $Height$.

[^footnote02]: We can also use the variance, $\sigma^2$, as an alternative parameter.

In the textbook and this course, the mean $\mu$ and standard deviation $\sigma$ are referred to as the <span style="color:#cfb991">**parameters**</span> associated with the **population**.

```{prf:definition} Parameter
:label: parameter-definition

A **parameter** is a number that describes the **population**. 

While it is a fixed value, its true value is typically unknown in practice.
```

Since these parameters are unknown, except in cases where the question explicitly provides a fixed value, we need to use our **sample** to estimate the unknown parameter or make inferences about it.

There is one subtle gap to bridge. In the first section, we mentioned the _**average height** of all Purdue students_ and treated it as unknown, linking it to the population. We can think of this as the **empirical population parameter**. When the population size $N$ is very large, this **empirical population parameter** should be very close to the **theoretical population parameter**, $\mu$. The textbook does not distinguish between these two perspectives.

