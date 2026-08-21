# Looking at Data — Distributions

```{admonition} Textbook reference
:class: seealso
This chapter corresponds to **Chapter 1** of *Introduction to the Practice of Statistics* (Moore, McCabe & Craig, 10th ed.). Note that the course chapter numbers (shown in the sidebar) follow our teaching order, which differs from the textbook order.
```

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Classify variables as **categorical** or **quantitative** and choose an appropriate graph (bar graph/pie chart vs. **stemplot**/**histogram**).
* Describe a distribution in words — **shape** (modes, symmetry, skewness), **center**, **spread** — and flag **outliers**.
* Compute and interpret the **mean**, **median**, **quartiles**, **IQR**, **five-number summary**, **standard deviation**, and know which measures are **resistant**.
* Draw and read **boxplots**, and apply the **1.5 × IQR rule** for suspected outliers.
* Explain what a **density curve** is and how a histogram approaches one as data accumulate.
* Use the **Normal distribution**: the **68–95–99.7 rule**, **standardizing** ($z$-scores), the **z-table**, and backwards (inverse) Normal calculations.
* Judge whether data look Normal using a **Normal quantile plot**.
```

```{admonition} Key concepts at a glance
:class: note
[Displaying distributions with graphs](ch4-graphs) · [Describing distributions with numbers](ch4-numbers) · [Density curves and Normal distributions](ch4-density) · [Putting it all together](ch4-together)
```

```{admonition} Where are we? A question before we start
:class: bridge
Your well-designed survey from the last chapter did its job: the data have arrived. Specifically, 60 randomly chosen fifth-grade students took an IQ test, and you are handed a wall of 60 raw numbers (you will meet this exact table shortly). **What is the very first thing a statistician does with fresh data?** Not a hypothesis test, not a fancy model — always the same first move: *look at it.* This chapter is about how to look: with pictures first, then with a few well-chosen numbers.
```

Before examining the distributions of our dataset (usually our sample dataset), we first need to understand what we can do with the dataset. The initial step involves calculating some values or creating graphs to describe our data. We use statistical tools and ideas help us examine data to describe their main features. This examination is called <span class="purdue-text">**exploratory data analysis**</span>. In some textbooks, this is referred to as <span class="purdue-text">**descriptive statistics**</span>. However, statistics goes far beyond simply describing data-this is a statistics class, not a drawing class! 

Beyond description, we can use the data to make generalizations about the population, study the causal effects of variables of interest, and make predictions about future data points. These activities fall under <span class="purdue-text">**inferential statistics**</span>, which we will spend more time on throughout the course. 

For this course, our primary focus will be learning statistical procedures to make generalizations about the population from the sample. However, in this chapter, we will focus on describing our datasets using calculated values (statistics) and visual representations (graphs). Hence the title: *Looking at Data-Distributions*.[^footnote01]

[^footnote01]: In this course, you will create some graphs using SPSS software. If you are familiar with R programming, you can also explore the ``ggplot2`` package in R.

Before we dive into the types of graphs, let's first look at the types of data we can obtain from a particular variable. Broadly, data can be categorized into two main types: **quantitative** and **categorical**.

* **Categorical variables** take categories as values, as the name suggests. Each category is called a **level**:
  * If the levels do not have a natural order, the variable is a **nominal categorical variable** (e.g., fruit categories like "Apple" or "Orange").
  * If the levels have a natural order, the variable is an **ordinal categorical variable** (e.g., academic letter grades like "A," "B," "C").
  
* **Quantitative variables** take numbers as values. The magnitude and differences between numbers have quantitative meanings:
  * If the values can be any number within an interval on the real line (continuous values), it is a **continuous quantitative variable** (e.g., income measured in dollars).
  * If the values have jumps (discrete values), it is a **discrete quantitative variable** (e.g., the number of cars per household).

A dataset typically contains information on a number of **cases**. Cases are the objects or subjects in a study. For each case, we have measurements for different types of variables, such as height, gender, and age. Additionally, there is often a **label**, which is a special variable used to identify cases in the dataset (e.g., a VIN number to identify a specific car).

(ch4-graphs)=
## Displaying Distributions with Graphs

```{admonition} A question before this section
:class: bridge
Stare at a table of 60 IQ scores and try to answer: *What is a typical score? Are the scores tightly packed or widely scattered? Is anyone unusual?* You cannot — the human eye is nearly useless at reading **shape** from a table of digits. But it is superb at reading shape from a **picture**. The whole craft of this section is turning a wall of numbers into a picture whose shape your eye can grasp in one glance.
```

Two frequently used graphs to describe categorical variables are **bar graphs** and **pie charts**. 

* A **bar graph** shows the count for each level of the categorical variable.
* A **pie chart** shows the proportion of each level relative to the total.

Both are easy to understand, and you can refer to Wikipedia or your textbook for examples. For a visual representation, you can explore [this website](https://www.chartjs.org/docs/latest/charts/bar.html).

Now let's turn our focus to graphs for quantitative variables: **stemplots** and **histograms**.

A **stemplot** provides a quick visual representation of the shape of a distribution while also including the actual numerical values. Stemplots work best when the number of observations is small; they are typically used for positive values, though negative values can be handled with negative stems.

:::{dropdown} Example: a stemplot of ten Purdue heights
:open:
You measure 10 Purdue students (heights in inches): 66, 71, 68, 77, 70, 62, 73, 68, 65, 69. Use the tens digit as the **stem** and the units digit as the **leaf**, with leaves ordered outward:

```
6 | 2 5 6 8 8 9
7 | 0 1 3 7
```

Rotate the page 90° counterclockwise and the stemplot *is* a small histogram — yet no information was thrown away: every original data value can be read back off the plot (the leaf "7" on stem 7 is the 77-inch student). That double duty — shape *and* the raw numbers — is why stemplots are the tool of choice for small datasets.
:::


`````{tab-set}
````{tab-item} Making a Stemplot
```{figure} _image/0401.png
:alt: Three-panel demo of building a stemplot with stems 3 to 7, from writing stems to adding leaves to arranging leaves in order
:align: center

```
````

````{tab-item} Step by step guide
```{figure} _image/0402.png
:alt: Definition box with three steps for making a stemplot, splitting each value into stem and leaf and ordering leaves out from each stem
:align: center

```
````

````{tab-item} Back-back Stemplot
```{figure} _image/0403.png
:alt: Back-to-back stemplot comparing calcium absorption under control and SCF conditions, leaves branching left and right from shared stems
:align: center

```
````

````{tab-item} Stemplot with split stems
```{figure} _image/0404.png
:alt: Back-to-back stemplot with each stem split into two rows, showing finer detail of control versus SCF calcium absorption data
:align: center

```
````

````{tab-item} Time tables in Japanese train station
```{figure} _image/0405.jpg
:alt: Japanese train station departure board listing minutes past each hour in rows, a real-life stemplot with hours as stems
:align: center

```
````

`````

For a large number of observations, a **histogram** is often a better choice. A histogram divides the range of values of a variable into **classes** or **bins** and displays the count or percentage of observations that fall into each class. You can choose a convenient number of classes based on your data and the level of detail you wish to represent.

`````{tab-set}
````{tab-item} IQ data
```{figure} _image/0406.png
:alt: Table of IQ test scores for 60 randomly chosen fifth-grade students, the raw data used to build the histogram example
:align: center

```
````

````{tab-item} Histogram Step 1
```{figure} _image/0407.png
:alt: Histogram step 1, divide IQ scores into equal-width classes of 10 points from 75 to 155 so each score falls in exactly one class
:align: center

```
````

````{tab-item} Histogram Step 2
```{figure} _image/0408.png
:alt: Histogram step 2, frequency table counting students in each IQ class, with the 105 to 115 class largest at 16 students
:align: center

```
````

````{tab-item} Histogram Step 3
```{figure} _image/0409.png
:alt: Histogram step 3, bars of student counts for each IQ class from 75 to 155, forming a roughly bell-shaped distribution peaking near 110
:align: center

```
````

````{tab-item} Types of Histograms
```{figure} _image/0410.png
:alt: Table comparing five histogram types by data type, with x axis of values or bins and y axis of frequency, relative frequency, or density
:align: center

```
````

`````

:::{dropdown} How to read this figure (building the IQ histogram, Steps 1–3)
:open:
The three "Histogram Step" tabs show one histogram being *built*, and reading them in order is the best way to understand what a histogram really is:

* **Step 1 (classes):** the number line of possible IQ scores is cut into equal-width **classes** of 10 points — $75 \le \text{IQ} < 85$, $85 \le \text{IQ} < 95$, and so on up to 155. The choice of boundaries guarantees every one of the 60 scores lands in *exactly one* class (a score of 85 goes in the 85–95 class, not the 75–85 class).
* **Step 2 (counting):** the frequency table tallies how many students fall in each class. The largest count is **16 students** in the 105–115 class. At this point the raw values are gone — we have traded individual scores for counts, which is exactly the simplification that makes large datasets readable.
* **Step 3 (drawing):** each class becomes a bar. The **horizontal axis** is the measurement scale (IQ score), the **vertical axis** is the count, and bars touch because the classes tile the whole interval with no gaps. Now the shape leaps out: a single peak near 110, roughly symmetric slopes on either side, tails reaching about 81 on the left and 145 on the right.

**Takeaway:** a histogram is a *count of the data organized by location*. Different class widths would give a slightly different picture of the same data — coarser or finer — which is why the textbook says to choose classes that show the detail you need.
:::

Histograms and bar charts may look similar at first glance, but there are key differences:

* The horizontal axis of a **bar chart** does not require a measurement scale; it simply identifies categories, which is why there are blank spaces between the bars. 
* In contrast, a **histogram** has no spaces between bars, as it represents data over a continuous interval, covering the entire range.

Another observation is the use of a **density curve** or a **density histogram** based on relative frequency. The rationale behind using a smoothed curve is that it can often be parameterized by simple mathematical functions, making it easier to model the distribution mathematically.

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "The height of a histogram bar tells me the probability of that range of values."

**In fact:** it depends on which histogram you drew (see the *Types of Histograms* tab). On a **frequency** histogram, height is a *count*; on a **relative frequency** histogram, height is a *proportion*; only on a **density** histogram does *area* — height $\times$ class width — give the proportion. Height alone is never automatically a probability.

**Quick check:** in the IQ histogram, the 105–115 bar has height 16. Is 16 a probability? (No — it is a count. The *proportion* of students in that class is $16/60 \approx 0.27$, and on a density scale the bar's *height* would be $0.27/10 = 0.027$ per IQ point, with its *area* equal to 0.27.)
```

The purpose of these graphs is to help us better understand our datasets. After graphing, we can examine the **overall pattern** and identify **striking deviations** from that pattern in the graphs or distributions. We describe the overall pattern of a distribution using its **shape**, **center**, and **spread**. 

An important kind of deviation is an **outlier**-an individual value that falls outside the overall pattern and warrants further investigation to uncover its cause. Later, we will learn how to summarize these characteristics with numerical measures to describe the pattern more precisely.

For describing the shape of a distribution, we have the following:

* **Tails of the distribution**: Extreme values are in the tails. High values are in the upper/right tail, and low values are in the lower/left tail.

* **Modes**:
  * A distribution with one major peak is called **unimodal**.
  * A distribution with two major peaks is called **bimodal**.
  * A distribution with three major peaks is called **trimodal**.

* **Symmetry and Skewness**:
  * A distribution is **symmetric** if the patterns of smaller and larger values around the midpoint are mirror images.
  * A distribution is **skewed** if it is not symmetric:
    * **Skewed to the right**: The right tail (larger values) is longer than the left tail.
    * **Skewed to the left**: The left tail (smaller values) is longer than the right tail.

`````{tab-set}
````{tab-item} Skewed Left
```{figure} _image/0411.png
:alt: Left-skewed histogram with peak near 70 and a long lower tail of outliers, dashed line showing the mean pulled toward the tail
:align: center
:width: 70%
```
````

````{tab-item} Skewed Right
```{figure} _image/0412.png
:alt: Right-skewed histogram with peak near 25 and a long upper tail of outliers, dashed line showing the mean pulled toward the tail
:align: center
:width: 70%
```
````

`````

Of course, there are many other types of graphs we can create to visualize datasets. For example, a **time plot** displays each observation against the time at which it was measured, making it easier to observe trends or patterns over time. As the number of data points increases, the utility of such graphs becomes even more apparent for understanding temporal relationships.

(ch4-numbers)=
## Describing Distributions with Numbers

```{admonition} A question before this section
:class: bridge
Your histogram of the 60 IQ scores is beautiful — single peak, symmetric, no stragglers. Then your boss says: *"I don't have time for a picture. Give me ONE number for the typical score, and one more for how spread out they are."* Which numbers do you choose — and does the choice matter? (Spoiler: it matters enormously once the data are skewed or contain an outlier. This section builds the toolbox and, more importantly, the judgment for choosing from it.)
```

When you have a quantitative variable-like the heights of Purdue students-you want to **summarize its distribution**. A distribution can be described by its **shape**, its **center**, and its **spread**. This section focuses on the **numerical ways** to measure center and spread, and how to handle outliers.

`````{tab-set} 
````{tab-item} Measures of Center

1. The Mean $\bar{x}$
  * **Definition**: The **mean** (arithmetic average) is found by summing all the values and then dividing by the number of observations. Mathematically,  

    $$\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}$$
  * **Illustration (Purdue Students' Heights)**: Suppose we sample 5 Purdue students with heights 66, 70, 71, 72, and 75 inches. The mean would be $\bar{x} = (66 + 70 + 71 + 72 + 75)/5 = 70.8$ inches.
  * **Key Points**:
    * The mean is the "balance point" of the distribution.  
    * **Not** a *resistant* (or *robust*) measure: a **very tall** or **very short** outlier in the data can pull the mean up or down.
2. The Median $M$
  * **Definition**: The **median** is the midpoint of the distribution when the data are ordered from smallest to largest. 
    * If $n$ (the number of data points) is **odd**, the median is the single middle value.  
    * If $n$ is **even**, the median is the average of the two middle values.
  * **Illustration (Purdue Students' Heights)**: From the same sample [66, 70, 71, 72, 75], the ordered data are 66, 70, 71, 72, 75. Since $n=5$ is odd, the median is the 3rd value -> **71** inches.
  * **Key Points**:
    * The median is more **resistant** to outliers because it depends on the **order** of the data rather than the actual numeric magnitude of extreme observations.
3. Comparing Mean and Median
  * If the distribution is **symmetric** (like a "bell" shape for heights), the mean and median tend to be close.  
  * If the distribution is **skewed** (long tail on one side), the mean is pulled toward the tail more than the median.  
````

````{tab-item} Measures of Spread
A single measure of center (mean or median) doesn't capture how **spread out** the data are. We also need measures of **variability**.
1. Quartiles and the Interquartile Range (IQR)
  * **Quartiles**: 
    * **First Quartile $Q_1$**: The median of the lower half of the data (25th percentile). 
    * **Third Quartile $Q_3$**: The median of the upper half of the data (75th percentile).
  * **IQR** = $Q_3 - Q_1$
    * **Definition**: The IQR measures the range of the **middle 50%** of the data.  
    * **Resistant** measure of spread because quartiles (like the median) are not heavily influenced by extreme values.
  * **Illustration (Purdue Students' Heights)**: If we have these 8 sorted heights in inches: 60, 62, 66, 70, 71, 72, 75, 77,
    * The median $M$ is between the 4th and 5th values $\rightarrow \frac{70 + 71}{2} = 70.5$. 
    * $Q_1$ is the median of the lower half $[60, 62, 66, 70]$ -> between 62 and 66 -> 64. 
    * $Q_3$ is the median of the upper half $[71, 72, 75, 77]$ -> between 72 and 75 -> 73.5. 
    * **IQR** = $Q_3 - Q_1 = 73.5 - 64 = 9.5$.
2. The Five-Number Summary
  * **Definition**: A quick numerical snapshot of a distribution made up of:

    $$\text{Minimum}, \quad Q_1, \quad M, \quad Q_3, \quad \text{Maximum}$$
3. Boxplots
  * **Definition**: A **boxplot** (sometimes called a "box-and-whisker plot") graphically shows the **five-number summary**. 
    * The "box" covers $Q_1$ to $Q_3$.
    * A line inside the box marks the median $M$. The mean can be represented using either a cross or an asterisk.
    * "Whiskers" extend out to the minimum and maximum (or to the most extreme points that aren't flagged as outliers in a **modified boxplot**).
    * **Use**: Quickly visualize center, spread (the length of the box), and potential outliers.
4. Outliers and the 1.5 $\times$ IQR Rule
  * **Definition**: A value is called a **suspected outlier** if it falls **more than 1.5 $\times$ IQR** above $Q_3$ or below $Q_1$.
    * **Lower Bound** = $Q_1 - 1.5 \times \mathrm{IQR}$.
    * **Upper Bound** = $Q_3 + 1.5 \times \mathrm{IQR}$.
  * **Illustration**: If $Q_1=64$, $Q_3=73.5$, and $\mathrm{IQR}=9.5$,
    * $1.5 \times \mathrm{IQR} = 1.5 \times 9.5 = 14.25$.  
    * **Lower Bound**: $64 - 14.25 = 49.75$.  
    * **Upper Bound**: $73.5 + 14.25 = 87.75$.  
    * Any height below 49.75 or above 87.75 would be a flagged outlier.
````

````{tab-item} $P$th Percentile
In general, we can calculate the $P$th percentile by following these steps:
1. **Find the Position**:
   Use the following formula to determine the position in the sorted dataset:

   $$\text{Position} = \frac{P}{100} \times (n + 1)$$
   where:
   * $P$ is the desired percentile (for example, $25$th percentile for $Q_1$, $50$th percentile for the median).
   * $n$ is the number of data points in the dataset.
2. **Whole Number Position**:
   * If the position is a whole number, use the corresponding data point at that position directly.
3. **Fractional Position**:
   * If the position is a fraction (that is, **not** a whole number), find the two adjacent data points in the **sorted** dataset.
   * Use the values at these adjacent positions and take their average to calculate the percentile[^footnote02].

[^footnote02]: The most common approach is a simple average (the "midpoint" method) between the two adjacent data points in the sorted list. Alternative methods, such as linear interpolation between adjacent ranks, can also be employed.

**Example:**

To find the median (50th percentile) in a dataset with $(n = 8)$ data points, use the formula:

$$\text{Position} = \frac{50}{100} \times (8 + 1) = 4.5$$

Since $4.5$ is a fraction, find the 4th and 5th data points in the sorted dataset and take their average. For this textbook, the median is calculated as:

$$\text{Median} = \frac{x_4 + x_5}{2}$$

This method can be applied to any percentile by changing the value of $P$. For example, to find the 25th percentile, use $(P = 25)$.

````

````{tab-item} Standard Deviation and Variance

While the five-number summary is quite resistant to outliers, many statistical methods rely on the **mean** and **standard deviation**.

1. Variance $s^2$
  * **Definition**: The average of the squared deviations from the mean:
  
    $$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

  * **Intuition**: Each data point's "deviation" from $\bar{x}$ is squared and then averaged (using $n-1$ in the denominator for **degrees of freedom**).
2. Standard Deviation $s$
  * **Definition**: The square root of the variance:
  
    $$s = \sqrt{s^2}$$
  * **Interpretation**: Measures how far (on average) data points lie from their mean. A large $s$ indicates the data are more spread out.
  * **Key Points**:
    * $s$ is always $\ge 0$; $s=0$ only if all data points are identical.  
    * $s$ is **not** resistant to outliers, because outliers can dramatically increase the average squared deviation.  
    * $s$ is most informative when the distribution is reasonably **symmetric** and has no extreme outliers.


````

````{tab-item} Resistant and Choosing a Summary
1. Resistant vs. Non-Resistant Measures
  * **Resistant (Robust)** measures: The **median**, **quartiles**, **IQR**. They are not strongly affected by a few extreme values.  
  * **Non-Resistant** measures: The **mean** and **standard deviation** can shift substantially if there are outliers or skewness.
  * **Example**: If 3 or 4 extremely tall Purdue basketball players (say 7-footers) happen to be in your sample, the mean (and standard deviation) of heights will jump notably. The median or IQR might change only a little.
2. Choosing a Summary: Five-Number Summary vs. $\bar{x}$ and $s$
  * **Five-Number Summary** (Min, $Q_1$, Median, $Q_3$, Max) is best when:
    * The distribution is **skewed** or has **strong outliers**.  
    * You want a quick, robust snapshot of center and spread.
  * **Mean and Standard Deviation** ($\bar{x}$, $s$) are best when:
    * The distribution is **fairly symmetric** with no major outliers.  
    * You plan to use statistical methods that assume normality or revolve around the mean.
  * **Reminder**: Always **plot your data** (histogram, stemplot, or boxplot) to see shape, outliers, or clusters. A single numeric summary never tells the full story (e.g., multiple modes or gaps).


````

`````

:::{dropdown} Example: one 7-footer walks into the sample
:open:
Take the five heights from above — 66, 70, 71, 72, 75 inches — with mean $\bar{x} = 70.8$ and median $M = 71$. Now a 7-foot center from the basketball team (84 inches) joins the sample:

* **Mean:** jumps from $70.8$ to $\bar{x} = (66+70+71+72+75+84)/6 = 73.0$ inches — a shift of over 2 inches from *one* observation.
* **Median:** with the sorted data 66, 70, 71, 72, 75, 84 and $n = 6$ even, $M = (71+72)/2 = 71.5$ — it barely moves.
* **Standard deviation:** nearly doubles, from $s \approx 3.3$ to $s \approx 6.1$, because $s$ *squares* deviations and the 7-footer's deviation is huge.

One extreme value dragged the non-resistant measures ($\bar{x}$, $s$) but hardly touched the resistant one ($M$). Neither behavior is "wrong" — the mean faithfully reports that the total height in the room grew — but they answer different questions, which is the subject of the misconception box below.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "The mean is *the* typical value — for any dataset."

**In fact:** the mean is the *balance point*, and in a skewed distribution the long tail pulls it away from where most observations actually sit. For strongly skewed data, the **median** is usually the honest "typical value," which is why household income is almost always reported as a median: a handful of very high incomes inflate the mean far above what a typical family earns.

**Quick check:** in a small town, 99 households earn about \$60{,}000 and one earns \$6{,}000{,}000. The mean income is about \$119{,}000 — nearly double what 99% of households make — while the median stays near \$60{,}000. Which number would you call "typical"? (Look back at the *Skewed Right* figure: the dashed mean line sits out in the tail, beyond the peak, for exactly this reason.)
```

`````{tab-set}
````{tab-item} Boxplot
```{figure} _image/0413.png
:alt: Boxplot of 60 IQ scores with box from about 104 to 126, median near 114, a plus sign marking the mean, and whiskers from 81 to 145
:align: center
:width: 70%
```
````

````{tab-item} Side by side Boxplot
```{figure} _image/0414.png
:alt: Side-by-side modified boxplots of writers age at death for nonfiction, novels, and poems, poets youngest and one low nonfiction outlier
:align: center
:width: 70%
```
````

`````

:::{dropdown} How to read this figure (the boxplot of the 60 IQ scores)
:open:
This is the five-number summary of our 60 IQ scores drawn as a picture. Read it from the inside out:

* **The vertical axis** is the IQ scale — every feature of the plot is located by its IQ value; the horizontal direction carries no information.
* **The box** runs from $Q_1 = 104$ up to $Q_3 = 125.5$: the middle 50% of students live inside this box, so the box's *length* is the IQR ($21.5$ points).
* **The line inside the box** is the median, $M = 114$. The **plus sign** just above it marks the mean ($\bar{x} \approx 115.0$). Mean and median nearly coincide — the visual signature of a roughly *symmetric* distribution.
* **The whiskers** stretch to the minimum (81) and maximum (145). Neither point is flagged as an outlier: the $1.5 \times \mathrm{IQR}$ fences sit at $104 - 32.25 = 71.75$ and $125.5 + 32.25 = 157.75$, and all 60 scores fall comfortably inside.

**Takeaway:** one small picture encodes center (median line), spread (box length and whisker span), symmetry (median centered in the box, whiskers of similar length), and outliers (none here). What it *hides* is the number of modes — a boxplot cannot show two peaks — which is why we still draw histograms.
:::

:::{dropdown} How to read this figure (side-by-side boxplots: writers' age at death)
The real power of boxplots appears when you park several of them on a **common scale** to compare groups — here, age at death for authors of nonfiction, novels, and poems.

* **The vertical axis** is age at death, shared by all three plots, so heights are directly comparable across groups.
* **Compare medians first:** the poets' median line sits visibly lowest — poets in this dataset tended to die youngest ("poets die young" is the textbook's own summary).
* **Compare boxes next:** the box lengths (IQRs) show which genre's life spans were most variable.
* **The isolated dot** below the nonfiction plot is a *flagged outlier*: this is a **modified boxplot**, so whiskers stop at the most extreme values inside the $1.5 \times \mathrm{IQR}$ fences, and any point beyond a fence is drawn individually to demand investigation.

**Takeaway:** side-by-side boxplots are the standard tool for the question "does this quantitative variable differ across groups?" — compare medians for center, boxes for spread, and dots for unusual individuals. (Caution from the textbook: this is an observational comparison — it does not show that *choosing* poetry shortens your life.)
:::

Sometimes, we change the **units** of our measurements. For example, if your heights are measured in **inches** and you convert them to **centimeters** using the formula, $\text{cm} = 2.54 \times \text{inches}$, the new mean in centimeters becomes $2.54 \times \bar{x}$. This kind of conversion is known as a **linear transformation**, represented by $x_{\text{new}} = a + b \times x$, which **shifts** the data by $a$ and/or **scales** it by $b$. Specifically:
* **Adding** $a$ to each observation shifts measures of center (mean, median) by $a$ but does **not** affect measures of spread (IQR, $s$).
* **Multiplying** each observation by $b$ multiplies measures of center (mean, median) by $b$, but multiplies measures of spread (IQR, $s$) by $|b|$, since spread cannot be negative. Overall, the center transforms to $a + b \times (\text{center})$ and the spread to $|b| \times (\text{spread})$.


(ch4-density)=
## Density Curves and Normal Distributions

```{admonition} A question before this section
:class: bridge
Our histogram of 60 IQ scores is jagged — its exact bumps depend on which 60 students happened to be sampled and on where we cut the classes. Now imagine the sample growing: 600 students, 60,000, the whole **empirical population** from Chapter 0's layers picture. With so much data we can afford ever-narrower classes, and the staircase of bars smooths out toward a fixed curve. **What is that limiting curve?** It is the *density curve* — the theoretical distribution sitting one layer above our data. Chapter 0 promised you would see histograms approach an idealized curve in this chapter; here is where it happens.
```

For **histograms**, the *y*-axis typically shows frequency or relative frequency. If we **divide** the relative frequency by the corresponding bin or class width, we obtain **densities**. Connecting these densities with a smooth line or curve creates what is called a **density curve**.

The main reason for dividing by bin width is to ensure the total area under the density curve is **1**, allowing it to represent the *probability density function* of our random variable. A smooth curve is often easier to **parameterize** with just a few parameters compared to an irregular shape.

This **density curve** describes the overall pattern of a distribution, where the **area** under the curve and **above** any range of values equals the **proportion** of all observations in that range. Consequently, the probability that our random variable falls within a particular range corresponds to this area or proportion.

Mentally, you can consider the density curve to be the **theoretical distribution** of the random variable, whereas the histogram is the **empirical distribution** derived from sample data. As we gather more and more data, our histogram will more closely approximate the density curve.


```{figure} _image/0415.png
:alt: Histograms of Iowa Test vocabulary scores with an overlaid normal density curve, shading scores at or below 6.0 in bars and curve area
:align: center

Histogram and Density Curve
```

`````{tab-set}
````{tab-item} Area under density 01
```{figure} _image/0416.png
:alt: Bell-shaped density curve with the region between about -1.5 and 1.5 shaded, showing probability as area under the curve
:align: center
:width: 50%
```
````

````{tab-item} Area under density 02
```{figure} _image/0417.png
:alt: Density curve with three peaks and the region between about -1 and 2 shaded, showing area gives probability for any density shape
:align: center
:width: 50%
```
````

`````

```{admonition} A question before this section
:class: bridge
Density curves can have any shape — flat, lumpy, three-peaked (you just saw one). Yet one particular bell shape keeps showing up: heights, birthweights, measurement errors, IQ scores. **Of all possible smooth curves, why does the same bell appear everywhere?** Recall the argument from the last chapter: when an outcome is the sum of *many small, independent* contributions — genetics plus nutrition plus environment plus ... — the results tend toward this bell shape (the Central-Limit-Theorem-style reasoning). Nature runs that recipe constantly, so the bell earned itself a name: the *Normal distribution*. The rest of this chapter is about mastering this one curve.
```

One famous type of density curve is the <span class="purdue-text">**normal density curve**</span>. It is used in many real-world applications (such as modeling heights or the birthweights of babies). **Normal distributions** are described by bell-shaped, symmetric, unimodal density curves. This density curve function only has two parameters: the mean $\mu$ and the standard deviation $\sigma$. Depending on their values, the shape of the distribution may vary, but it still retains the aforementioned bell-shaped and symmetric features.


`````{tab-set}
````{tab-item} Normal $\mu=0$ 
```{figure} _image/0418.png
:alt: Five normal density curves all with mean 0 but variances from 0.25 to 4, larger variance giving a flatter, wider bell
:align: center
:width: 70%
```
````

````{tab-item} Normal $\sigma=1$
```{figure} _image/0419.png
:alt: Five normal density curves all with variance 1 but means from -4 to 4, identical bell shapes shifted left or right along the x axis
:align: center
:width: 70%
```
````

````{tab-item} Properties
Here are five properties of normal densities:
* **Symmetry:** The normal distribution is **symmetric** around its mean ($\mu$). The left half of the curve is a mirror image of the right half.
* **Mean, Median, and Mode are Equal:** In a normal distribution, the **mean, median, and mode** are identical and located at the same point ($\mu$).
* **Bell-Shaped Curve:** The graph of the normal distribution is a smooth, **bell-shaped curve**. Most data points are concentrated around the mean, with frequencies decreasing as you move away from the center.
* **Defined by Two Parameters:** The normal distribution is completely determined by:
    * **Mean** ($\mu$): Determines the center of the distribution.
    * **Variance** ($\sigma^2$): Controls the spread of the distribution.
* **Asymptotic Behavior:** The tails of the normal distribution extend infinitely in both directions but never touch the horizontal axis (asymptotic to the $x$-axis).


````

````{tab-item} Standard Normal

We start with the simplest normal distribution, the **standard normal distribution**, because any normal distribution can be obtained from it by **shifting and scaling**. 

A standard normal distribution has a mean of 0 and a variance of 1. We denote a standard normal random variable by $Z \sim \mathcal{N}(0, 1)$.

The PDF (probability density function) of the standard normal distribution is:

$$\varphi(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2 / 2}, \quad -\infty < z < \infty.$$

Let $Z \sim \mathcal{N}(0,1)$ be a standard normal random variable. Then

$$X = \mu + \sigma Z$$
is said to have a **Normal distribution** with mean $\mu$ and variance $\sigma^2$. We denote this by $X \sim \mathcal{N}(\mu, \sigma^2)$. (Note: following the IPS textbook, this course will write $N(\text{mean}, \text{sd})$ — with the **standard deviation** as the second parameter — unless stated otherwise.) To transform $X \sim \mathcal{N}(\mu, \sigma^2)$ to a standard normal distribution, we use:

$$\frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$$
The PDF of $X$ can be expressed as:

$$f(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} \exp \left( - \frac{(x - \mu)^2}{2 \sigma^2} \right)$$

````

`````

:::{dropdown} How to read this figure (the two Normal families: varying $\sigma$, varying $\mu$)
:open:
The first two tabs are a controlled experiment on the Normal's two parameters — each tab freezes one parameter and lets the other vary:

* **Tab "Normal $\mu = 0$":** all five curves share the same center (mean 0) but have variances from 0.25 up to 4. On both axes: the horizontal axis is the value of the variable, the vertical axis is *density* (not probability, not count). Watch what larger $\sigma$ does — the bell gets **shorter and wider**. It *must* get shorter as it widens, because every density curve encloses total area exactly 1: spread the area out and the peak has to come down.
* **Tab "Normal $\sigma = 1$":** now the shape is frozen (variance 1) and the mean slides from $-4$ to $4$. The five bells are *identical rubber stamps* shifted left or right — changing $\mu$ relocates the curve without reshaping it.

**Takeaway:** $\mu$ says *where* the bell sits; $\sigma$ says *how wide* it is — and that is the complete story, because a Normal distribution is fully determined by these two numbers. This is also why one **standard** Normal table suffices: every curve in both tabs is just $\mu + \sigma Z$, a shift and a rescale of the single curve $Z \sim \mathcal{N}(0,1)$.
:::

Remember, **densities** are quite useful because they tell us the probability of statements like $\mathbb{P}(X < x)$ or $\mathbb{P}(\text{Height} < 70).$ If our variable of interest is a **standard Normal** variable (i.e., a variable with a standard Normal density), then probabilities such as $\mathbb{P}(Z < z) \text{ or } \mathbb{P}(Z < 1)$ can be found directly using a **z-table**.

Theoretically, we could create a similar table for **each** Normal distribution to tell us these probabilities, but that’s not practical. Instead, we keep a **single** z-table for the standard Normal distribution. If our variable of interest is Normal (but **not** standard Normal), we can still find probabilities by **standardizing**:

$$Z = \frac{X - \mu}{\sigma}.$$
So, if $X \sim N(\mu, \sigma)$ (where the second parameter $\sigma$ is the standard deviation), then $Z \sim N(0, 1),$ and we can use the z-table for calculations and finding the probabilities.

$$P(X \leq x) = P \left( \frac{X - \mu}{\sigma} \leq \frac{x - \mu}{\sigma} \right) = \Phi \left( \frac{x - \mu}{\sigma} \right)$$
Since we have this relationship, the only thing left is to become **familiar** with the areas under the **standard Normal** density and how to use the **z-table**.  

:::{dropdown} Example: you are 71 inches tall — how unusual is that?
:open:
The answer depends entirely on *which distribution you are standing in*. Suppose Purdue students' heights are roughly $N(68.5, 4)$ and the basketball team's heights are roughly $N(77, 3.5)$ (second parameter = standard deviation). Standardize the **same** 71 inches twice:

* **Among all Purdue students:** $z = \dfrac{71 - 68.5}{4} = 0.625$ — you stand about 0.6 standard deviations *above* the mean; the z-table puts you near the **73rd percentile**. Slightly tall, nothing remarkable.
* **On the basketball team:** $z = \dfrac{71 - 77}{3.5} \approx -1.71$ — the same body is now 1.7 standard deviations *below* the mean, around the **4th percentile**. On that roster, you are strikingly short.

This is the whole point of a $z$-score: it converts a raw value into "how many standard deviations from the mean," a **unit-free** measure of unusualness that makes values comparable *across different distributions* — the identical 71 inches is mildly tall in one population and extreme in another.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "You're only allowed to compute a $z$-score if the data are Normal."

**In fact:** standardizing, $z = (x - \mu)/\sigma$, is pure arithmetic — it is *always* legal, for any distribution with a mean and standard deviation, and it always means "number of standard deviations from the mean." What **requires Normality** is the next step: converting that $z$ into a probability or percentile using the z-table or the 68–95–99.7 rule. Those areas belong to the Normal curve; if your distribution isn't Normal, its areas are different.

**Quick check:** roll two dice; the sum has mean 7 and standard deviation about 2.42, so a sum of 10 has $z = (10-7)/2.42 \approx 1.24$ — a perfectly valid $z$-score. But the z-table would claim $P(\text{sum} \ge 10) \approx 0.11$, while the true probability is $6/36 \approx 0.17$. The $z$ was legal; the *table lookup* was not, because the sum's distribution is triangular, not Normal (see the dice example below).
```

For **any** Normal density, there is the **68–95–99.7** empirical rule that we can use for quick approximations.
 

```{prf:definition} The 68-95-99.7 Rule
:label: empiricalrule-definition

In the Normal distribution with mean $\mu$ and standard deviation $\sigma$:
* Approximately $68\%$ of the observations fall within $\sigma$ of the mean $\mu$.
* Approximately $95\%$ of the observations fall within $2\sigma$ of the mean $\mu$.
* Approximately $99.7\%$ of the observations fall within $3\sigma$ of the mean $\mu$.
```

:::{dropdown} Example: the rule is a *Normal* rule — ask the dice
:open:
The 68–95–99.7 rule belongs to the bell curve, not to distributions in general. Dice make this vivid, because for dice we can compute everything exactly:

* **One fair die** is *flat* (uniform): each face has probability $1/6$, mean $\mu = 3.5$, standard deviation $\sigma \approx 1.71$. Within $1\sigma$ of the mean (faces 2–5) sits $4/6 \approx 66.7\%$ — deceptively close to 68%. But within $2\sigma$ sits **100%** of the outcomes, not 95%: a flat distribution has no tails at all, so the rule's "95" and "99.7" fail completely.
* **The sum of two dice** is *triangular*, not bell-shaped: probabilities climb in a straight line from $P(2) = \frac{1}{36}$ up to $P(7) = \frac{6}{36}$ and back down to $P(12) = \frac{1}{36}$. Same physical dice, different *process* (summing), different shape.

The lesson runs in both directions. **Shape depends on the process that generates the data** — one die gives a flat histogram, a sum gives a triangle, and only summing *many* small contributions produces the Normal bell. And the 68–95–99.7 percentages are trustworthy only when a Normal model fits; check the *68-95-99.7 for $Height$* tab below to see the rule where it genuinely belongs.
:::

`````{tab-set}
````{tab-item} Area under $Z$
```{figure} _image/0420.png
:alt: Two standard normal curves, one shading the small equal tails beyond -2 and 2, the other shading the large central area between them
:align: center
:width: 100%
```
````

````{tab-item} 68-95-99.7 for $Z$
```{figure} _image/0421.png
:alt: Standard normal curve with arrows marking 68, 95, and 99.7 percent of the area within 1, 2, and 3 standard deviations of mean 0
:align: center
:width: 100%
```
````

````{tab-item} 68-95-99.7 for $X$
```{figure} _image/0422.png
:alt: General normal curve with mean mu and sd sigma, arrows marking 68, 95, and 99.7 percent within 1, 2, and 3 sigma of the mean
:align: center
:width: 100%
```
````

````{tab-item} 68-95-99.7 for $Height$
```{figure} _image/0423.png
:alt: Normal curve of young women heights, mean 64.5 inches, with 68, 95, and 99.7 percent ranges at 62 to 67, 59.5 to 69.5, and 57 to 72
:align: center
:width: 100%
```
````

`````

:::{dropdown} How to read this figure (the 68–95–99.7 rule, from $Z$ to $Height$)
:open:
The three rule tabs are the same picture told three times, moving from abstract to concrete:

* **"68-95-99.7 for $Z$":** the horizontal axis is the standard Normal scale, tick-marked at $-3, -2, -1, 0, 1, 2, 3$. Each horizontal arrow spans an interval centered at 0, and the percentage on the arrow is the **area under the curve** over that span: 68% between $-1$ and $1$, 95% between $-2$ and $2$, 99.7% between $-3$ and $3$.
* **"68-95-99.7 for $X$":** identical curve, but the axis is relabeled $\mu - 3\sigma, \dots, \mu, \dots, \mu + 3\sigma$. Nothing else changes — which *is* the point: every Normal distribution is the standard one with its axis re-stretched, so the same three percentages apply with "$1, 2, 3$" replaced by "$1\sigma, 2\sigma, 3\sigma$ from $\mu$."
* **"68-95-99.7 for $Height$":** the axis finally carries real units — young women's heights with $\mu = 64.5$ and $\sigma = 2.5$ inches. Now the arrows read as facts: about 68% of these women are between 62 and 67 inches, 95% between 59.5 and 69.5, and 99.7% between 57 and 72.

**Takeaway:** to use the rule on any Normal problem, do what the tabs do — mark $\mu$, step off $\sigma$ at a time, and label each band. It also gives the mirror facts for free: if 95% are within $2\sigma$, the remaining 5% splits into 2.5% in each tail (that split is exactly what the *Area under $Z$* tab shades).
:::

Now, you should be able to use a **z-table** to handle several types of probability statements, such as:

* **Given** $X \sim \mathcal{N}(4, 1.5)$, where $1.5$ is the standard deviation:  
  * $P(X < 3)$
  * $P(X > 4.5)$  
  * $P\bigl(3 < X < 4.56\bigr)$  
  * and so on.

* **Backwards Normal Problems** (Inverse Normal Calculations): finding $x_0$ such that  
  * $P(X < x_0) = 0.95$
  * $P(X > x_0) = 0.9236$

One last thing to mention is how to use **Normal Quantile Plots** to check Normality for your datasets. Here are the steps to construct such a plot:
* **Definition**: A Normal quantile plot (sometimes called a normal probability plot) is a diagnostic tool. You:
  * Sort the data from smallest to largest. **Rank the data** $(i=1)$ is smallest, $(i = n)$ largest. 
  * Assign each data value a percentile (like 5%, 10%, etc.). **Assign percentiles** via $\frac{i - 0.5}{n}$ (this avoids percentiles of 0% and 100%, whose z-scores are undefined).
  * Find the corresponding z-score for each percentile (from the Standard Normal). **Convert percentiles** to z-scores.
  * Plot each data value vs. its matched z-score. **Plot** (z-score on x axis, data value on y axis).
* **Interpretation**:
  * If the resulting plot is roughly a straight line, then the data follow a Normal pattern.  
  * Systematic curvature in the plot indicates non-Normal data.  
  * Outliers appear as points that deviate noticeably from the pattern.

(ch4-together)=
## Putting It All Together: The 60 IQ Scores, Start to Finish

Let's run the complete descriptive-analysis playbook on the dataset that has threaded through this chapter — the 60 fifth-graders' IQ scores from the *IQ data* tab — exactly the way you would attack any fresh dataset.

**Step 1 — Look at it (graphs first, always).** The raw table answers nothing by eye. Build the histogram as in Steps 1–3: classes of width 10 from 75 to 155, count, draw. The counts per class are 2, 3, 10, 16, 13, 10, 5, 1 — a single peak in the 105–115 class, sloping off on both sides. (With only 60 observations, a stemplot with stems 8–14 would have worked too, and would keep the raw values visible.)

**Step 2 — Describe in words: shape, center, spread, deviations.** Shape: **unimodal** and roughly **symmetric** — no long tail in either direction. Center: the peak sits near 110–115. Spread: scores run from the low 80s to the mid 140s. Deviations: no gaps, no values detached from the pattern.

**Step 3 — Numerical summary.** Because we should summarize *both* ways and compare:
* **Five-number summary:** $\text{Min} = 81$, $Q_1 = 104$, $M = 114$, $Q_3 = 125.5$, $\text{Max} = 145$; so $\mathrm{IQR} = 21.5$. The $1.5 \times \mathrm{IQR}$ fences are $104 - 32.25 = 71.75$ and $125.5 + 32.25 = 157.75$ — **no flagged outliers**, matching the boxplot figure.
* **Mean and standard deviation:** $\bar{x} \approx 115.0$ and $s \approx 14.8$. Note $\bar{x} \approx M$ (115.0 vs. 114) — the numerical echo of the symmetry we *saw* in Step 2. With a symmetric, outlier-free distribution, $\bar{x}$ and $s$ are appropriate summaries; had the data been skewed, we would lead with the five-number summary instead.

**Step 4 — Is a Normal model reasonable?** Three checks agree. The histogram is bell-shaped. The empirical counts track the 68–95–99.7 rule startlingly well: $41/60 = 68.3\%$ of scores fall within $\bar{x} \pm s$ (100.2 to 129.8), $57/60 = 95.0\%$ within $\bar{x} \pm 2s$, and $60/60 = 100\%$ within $\bar{x} \pm 3s$. And a Normal quantile plot of these scores is close to a straight line. Modeling these IQ scores as approximately $N(115, 14.8)$ is defensible.

**Step 5 — Standardize one student.** The top scorer hit 145. How unusual is that? $z = (145 - 115)/14.8 \approx 2.03$ — about two standard deviations above the mean. Under the Normal model, that is roughly the **98th percentile** (the 68–95–99.7 shortcut says: 95% within $2\sigma$, so about 2.5% beyond $+2\sigma$). Step 4 is what *licensed* this table lookup — remember, the $z$-score itself is always legal, but the percentile claim leans on Normality.

**Step 6 — Know what we still CANNOT say.** Everything above describes *these 60 students*. We cannot yet say how far $\bar{x} = 115.0$ might sit from the mean IQ $\mu$ of **all** fifth-graders in the population, cannot attach a margin of error to it, and certainly cannot explain *why* scores differ (no causal claims from observed data — last chapter's lesson stands). Turning "our sample looks like this" into "the population is like this, give or take *this much*" is **statistical inference**, and it begins in the next chapter with the question: what would happen to $\bar{x}$ if we drew a *different* 60 students?

**The descriptive-analysis checklist** (use it on every dataset you ever meet):
1. **Plot first** — histogram or stemplot (boxplots for group comparisons).
2. **Words** — shape, center, spread, outliers.
3. **Numbers** — five-number summary *and* $\bar{x}, s$; let shape decide which leads.
4. **Model check** — bell-shaped histogram? 68–95–99.7 roughly satisfied? straight Normal quantile plot?
5. **Standardize** to locate individuals — and only trust table-based percentiles if step 4 passed.

## Check Your Understanding

:::{dropdown} 1. A report on Purdue graduates' starting salaries gives mean \$78{,}000 and median \$64{,}000. What does the gap tell you about the shape, and which number should the admissions brochure honestly report as "typical"?
The mean sits well *above* the median, the signature of a distribution **skewed to the right**: a minority of very high salaries (say, a few software or finance offers) pulls the mean into the upper tail, while the median stays with the bulk of graduates. The honest "typical graduate" number is the **median** — it is resistant to those extreme offers. (Mirror-image check: if the mean were far *below* the median, you would suspect left skew.)
:::

:::{dropdown} 2. Purdue heights are approximately $N(68.5, 4)$ (sd = 4 inches). Without a z-table, approximately what proportion of students are between 60.5 and 76.5 inches tall? Taller than 72.5 inches?
Both intervals are built for the 68–95–99.7 rule. $60.5 = 68.5 - 2(4)$ and $76.5 = 68.5 + 2(4)$, so the interval is $\mu \pm 2\sigma$: about **95%**. For heights above $72.5 = \mu + 1\sigma$: 68% lie within $\mu \pm \sigma$, so 32% lie outside, and by symmetry half of that is in the upper tail — about **16%**.
:::

:::{dropdown} 3. Your friend computes $z = 1.8$ for one household in a strongly right-skewed income dataset and announces: "the z-table says only about 3.6% of households earn more." Which part of this is valid, and which is not?
Computing $z = (x - \bar{x})/s = 1.8$ is **valid** — standardizing is pure arithmetic and works for any distribution: this household really does sit 1.8 standard deviations above the mean. The **table lookup is not valid**: z-table areas are areas under the *Normal* curve, and income is strongly skewed, so its true upper-tail proportion can differ substantially from the Normal answer. (For right-skewed data the tail is fatter and longer than a Normal tail, so the "3.6%" figure is not trustworthy.) Before quoting any table percentage, check Normality — for instance with a **Normal quantile plot**, which for skewed income data would bend away from a straight line.
:::

