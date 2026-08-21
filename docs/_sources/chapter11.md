# Least-Squares Regression

```{admonition} Textbook reference
:class: seealso
This chapter corresponds to **Chapter 2** of *Introduction to the Practice of Statistics* (Moore, McCabe & Craig, 10th ed.). Note that the course chapter numbers (shown in the sidebar) follow our teaching order, which differs from the textbook order.
```

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Explain what a **regression line** is and state the **least-squares criterion** that singles out *the* line among all candidates.
* Compute the slope $b_1 = r\,s_y/s_x$ and intercept $b_0 = \bar{y} - b_1\bar{x}$ from summary statistics, and **interpret both in context**.
* Use the fitted line to **predict** $\hat{y}$, compute and interpret a **residual** $e = y - \hat{y}$, and recognize the danger of **extrapolation**.
* State the key facts of least-squares regression: the slope–correlation link, that the line passes through $(\bar{x}, \bar{y})$, and that swapping $x$ and $y$ changes the line.
* Interpret $r^2$ as the **fraction of the variation in $y$ explained** by the regression on $x$.
```

```{admonition} Key concepts at a glance
:class: note
[Fitting a line](ch11-fitting) · [Zooming into scatterplots](ch11-zooming) · [The least-squares line](ch11-lsline) · [Facts about least-squares regression](ch11-facts) · [r-squared](ch11-r2) · [Putting it all together](ch11-together)
```

```{admonition} Where are we? A question before we start
:class: bridge
Last chapter ended with the detergent data: price and rating, $r = 0.7$, say. That number answers "how strong, which direction?" — positive, fairly strong. Now your boss asks a different kind of question: *"So if we charge 10 cents more per load, what rating do we predict?"* Stare at $r = 0.7$ as long as you like — no prediction comes out of it. Correlation grades the relationship but names no line; prediction needs an actual equation, $\hat{y} = b_0 + b_1 x$, with numbers in it. Finding the **best-fitting line** — and saying precisely what "best" means — is this chapter.
```

In the last chapter, we have seen that we can use a straight line to study the strength of the linear relationship between two quantitative variables in the scatterplots. This line is called a <span class="purdue-text">**regression line**</span> when one of the variables helps explain or predict the other. That is, regression describes a relationship between a response variable and an explanatory variable. It also allows us to make another type of claim about our dataset (unseen dataset), which is <span class="purdue-text">**prediction**</span>. Because for every value on the $x$-axis—even if we don't have a corresponding $x$ value in the dataset—this regression line can still provide a corresponding $y$ value that can be used as the prediction for the unseen $x$ value. Keep in mind, however, that such predictions are reliable only within the range of $x$-values used to fit the line. Predicting far outside that range—called **extrapolation**—is often inaccurate, because we have no data there to tell us whether the linear pattern still holds. Prediction is a hot topic nowadays in the era of AI and Machine Learning.


```{admonition} **Regression Line**  
:class: note  
Regression, unlike correlation, requires that we have an **explanatory variable** and a **response variable**.  

A **regression line** is a straight line that describes how a response variable $y$ changes as an explanatory variable $x$ changes.  

We often use a regression line to **predict** the value of $y$ for a given value of $x$.
```

(ch11-fitting)=
## Fitting a Line to Data

- A **scatterplot** displays a **linear pattern**, which can be summarized using a **regression line**.
- **Fitting a line** means *drawing* a line that is as close as possible to the data points.
- The fitted line provides a **numerical summary** of the relationship between:
  - **Response variable** $y$
  - **Explanatory variable** $x$

```{admonition} **Straight Lines**  
:class: note  
- A straight-line relationship between $y$ and $x$ is given by:

  $$
  y = b_0 + b_1x
  $$

- **Interpretation of coefficients**:
  - $b_1$ (**slope**): Change in $y$ for a one-unit increase in $x$.
  - $b_0$ (**intercept**): Value of $y$ when $x = 0$.
- **Software** is used to compute $b_0$ and $b_1$ for a given dataset.
```

There are of course many methods to *draw* a line across the data points in a scatterplot. You can randomly draw a line, but one observation is that no line can pass exactly through all the data points. There are also many methods to determine the closeness between the line and the data points. Different methods will give us different pairs of values $(b_0, b_1)$. Once we obtain these parameter values, we can use the regression line as the **prediction** of our response variable $y$ because we can use a particular unknown explanatory $x$ value as the input, and it will give us the output prediction. We call this prediction **$\hat{y}$**. Before we discuss the interpretation of the prediction, let's dive a little deeper into the scatterplot to see behind the scenes how we can start from the scatterplot and obtain a **Least Squares Regression Line**.


```{figure} _image/1101.png
:alt: Scatterplot of Y vs X with three nearly identical fitted lines, OLS least squares, robust, and LAD regression, all showing a strong positive trend
:align: center
:width: 100%

```

(ch11-zooming)=
## Zooming into Scatterplots

Here we have a scatterplot (top left corner) showing many data points of the two component scores, Verbal and Math, for 200 students. The $x$-axis represents their Verbal scores and the $y$-axis represents their Math scores. As the number of data points increases, it becomes challenging to discern relationships clearly. However, we can see that for some of the data points, they share the same $x$-value. In these cases, the Verbal scores are identical while the Math scores differ among the students. We can focus on these data points with the same $x$-value, treating them as a **subpopulation**. By calculating the means of these points, we can better understand the relationship. We can do this for all subpopulations; these means are called the *conditional means* because they are conditioned on the same $x$-value. Then the scatterplot simplifies to the second plot, which is at the top right corner. For each $x$-value in this plot, we only have one $y$-value representing the conditional mean or average. We can interpret this as the **average value** of the Math score for a collection of cases at a given Verbal score.

In the third plot (bottom right corner), we fit a straight line through these conditional means, summarizing these means with a line. Finally, the last plot (bottom left corner) shows the original data points along with the regression line fit to the original data, which nearly coincides with the line through the conditional means.


> One thing to notice is that the regression line cannot pass through every data point and conditional mean exactly. For each data point, we can calculate the **residual** $e = y - \hat{y}$, which is the *signed* vertical deviation between the point and the line: positive when the point lies above the line and negative when it lies below. Its absolute value gives the vertical distance from the point to the line.

```{figure} _image/1102.png
:alt: Four panels of SAT Math vs Verbal scores, moving from raw scatterplot to conditional means to regression lines summarizing the upward trend
:align: center
:width: 100%

```

:::{dropdown} How to read this figure (four panels, one idea: the line is a summary of averages)
:open:
Read the panels **counterclockwise from the top left** — each one performs a step of the simplification described in the text:

* **Top left — the raw cloud.** 200 students, one dot each: Verbal score on $x$, Math score on $y$. The upward drift is visible but drowning in scatter. Pick one $x$-value and run your eye up the vertical strip above it: those are the students who share that Verbal score — a **subpopulation** — and their Math scores vary.
* **Top right — each strip collapsed to its average.** Every vertical strip has been replaced by a single point: its **conditional mean**, the average Math score *given* that Verbal score. Two hundred points have become a short chain of averages, and suddenly the trend is clean.
* **Bottom right — a line through the chain.** The conditional means march upward in a nearly straight path, so a straight line summarizes them well. This is what the regression line *means*: for each $x$, its height estimates the **average** $y$ in that subpopulation.
* **Bottom left — back to reality.** The line fitted to the *original* 200 points is overlaid on the raw cloud — and it nearly coincides with the line through the conditional means. The regression line was the averages-line all along; the raw-data fit just computes it without you having to bin anything.

The payoff sentence to remember: $\hat{y}$ at a given $x$ is our estimate of the **average response** for cases with that $x$ — and no point is obligated to sit on the line, which is why residuals exist (next figure).
:::

`````{tab-set}
````{tab-item} Example: IDI and Median Income

```{figure} _image/1103.png
:alt: Scatterplot of Inclusive Development Index vs median per capita daily income for 15 countries with an upward-sloping regression line
:align: center
:width: 70%

```



````

````{tab-item} Example: Prediction of IDI

```{figure} _image/1104.png
:alt: Regression line of IDI vs median daily income with dashed arrows showing the predicted IDI of about 5.2 for an income of 40 dollars
:align: center
:width: 70%

```



````

````{tab-item} Example: The Least-Squares Idea

```{figure} _image/1105.png
:alt: Zoomed regression plot marking observed y, predicted y, and the vertical distances whose squared sum the least-squares line minimizes
:align: center
:width: 70%

```

:::{dropdown} How to read this figure (observed, predicted, and what gets squared)
:open:
This is a zoomed-in view of a few data points and the fitted line — the picture that *defines* least squares. For each marked point, identify three objects:

* **Observed $y$:** the data point itself — where reality put the response.
* **Predicted $\hat{y}$:** the point on the line directly **above or below** it — the line's answer at that same $x$.
* **The vertical segment between them:** its signed length is the **residual** $e = y - \hat{y}$ — positive for points above the line, negative below. The figure suggests attaching a *square* to each segment: a literal square with area $e^2$.

Two things to notice about the geometry. First, the segments are strictly **vertical** — never perpendicular to the line, never horizontal — because regression cares only about errors in predicting $y$; this is exactly why swapping $x$ and $y$ produces a different line (Fact 3 below). Second, the line drawn is the one making the **total area of all the squares as small as possible**. Wiggle the line mentally: tilt or shift it, and some squares shrink while others grow — the least-squares line is the unique position where the sum of the areas bottoms out. Squaring also explains regression's Achilles' heel: a point far from the line contributes area quadratically, so a single outlier can drag the whole line toward itself.
:::

````

`````

(ch11-lsline)=
## Least-Squares Regression Line

```{admonition} A question before this section
:class: bridge
Print the shoe-size scatterplot and hand rulers to three classmates: each draws a line that looks "pretty good," and the three lines all disagree — slightly different slopes, different predictions for a size-10 student. Eyeballing cannot break the tie, and science cannot run on "my line looks better than yours." **What exact rule picks THE line?** We need a criterion: a single number that scores *any* candidate line against the data, so that "best" means "lowest score." The least-squares criterion — the total area of the squares in the figure you just read — is that rule, and it crowns a unique winner.
```

We can use a **regression line** to make a **prediction** of the response $y$ for a specific value of the explanatory variable $x$.  

- The prediction can be interpreted as:  
  - The **average value** of $y$ for a collection of cases at a given $x$.  
  - The **best guess** of $y$ for an individual case at that particular $x$.

```{admonition} **Least-Squares Regression Line**  
:class: note  
The **least-squares regression line of $y$ on $x$** is the line that minimizes the **sum of the squared vertical distances** between the data points and the line.  

- We frequently use the terms **regression line** or **least-squares line** to describe this.
```

```{admonition} **Equation of the Least-Squares Regression Line**  
:class: note  
We have data on an **explanatory variable** $x$ and a **response variable** $y$ for $n$ individuals.  
- The **means** and **standard deviations** of the sample data:  
  - $\bar{x}$ and $s_x$ for $x$.  
  - $\bar{y}$ and $s_y$ for $y$.  
- The **correlation coefficient** between $x$ and $y$ is $r$.  

The **equation of the least-squares regression line** of $y$ on $x$ is:  

$$
\hat{y} = b_0 + b_1 x
$$

- **Slope**  

  $$
  b_1 = r \frac{s_y}{s_x}
  $$

- **Intercept** 

  $$
  b_0 = \bar{y} - b_1 \bar{x}
  $$

$b_0$ and $b_1$ are the **regression coefficients** of the least-squares equation.
```

:::{dropdown} Example: fitting the line to the 8 students
:open:
Everything the formulas need, we already computed in the correlation chapter for the 8-student shoe-size ($x$) and height ($y$) data:

$$
\bar{x} = 8.94, \quad s_x \approx 2.01, \quad \bar{y} = 68.5, \quad s_y \approx 3.46, \quad r \approx 0.95.
$$

**Slope:**

$$
b_1 = r\,\frac{s_y}{s_x} \approx 0.95 \times \frac{3.46}{2.01} \approx 1.64
$$

**Intercept:**

$$
b_0 = \bar{y} - b_1\bar{x} \approx 68.5 - 1.64 \times 8.94 \approx 53.85
$$

**The least-squares line:**

$$
\hat{\text{height}} = 53.85 + 1.64 \times \text{shoe size}
$$

Now put each coefficient into words — this is where exam points live:

* **Slope in context:** each additional shoe size **predicts** about $1.64$ additional inches of height. ("Predicts," not "causes" — the line inherits every causal caution from the correlation.)
* **Intercept in context:** $b_0 = 53.85$ is the predicted height at shoe size $0$ — an $x$-value no human has. Here the intercept is just the mathematical anchor of the line, not a statement about real students. Interpret the intercept only when $x = 0$ is meaningful and inside the range of the data.

**Prediction and residual for one student.** Student 5 wears size $9$ and stands $70$ inches. The line predicts

$$
\hat{y} = 53.85 + 1.64 \times 9 \approx 68.60 \text{ inches},
$$

so the residual is $e = y - \hat{y} = 70 - 68.60 = +1.40$ inches: this student is about $1.4$ inches **taller** than the line predicts (positive residual — the point sits above the line). Check Fact 2 while we are here: at $\bar{x} = 8.94$, the line gives $53.85 + 1.64 \times 8.94 \approx 68.5 = \bar{y}$ — it passes through the point of means, exactly as promised.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "The regression line is the line that passes through the most data points."

**In fact:** the least-squares line minimizes the **sum of squared vertical distances to all points at once** — and it may pass through *none* of them. For our 8 students, every residual is nonzero: the fitted line threads *between* the points and touches not a single one, yet no other line achieves a smaller sum of squared residuals. A line chasing points exactly (like a jagged connect-the-dots path) would fit *these* data perfectly and predict new cases terribly; the line is a **summary of the average pattern**, not a collector of points.

**Quick check:** your classmate fits the line the other way around — shoe size on $y$, height on $x$ — and expects the same line, "since it's the same 8 points." Same points, yes; same line, no. Least squares measures distances **only in the $y$-direction**, so changing which variable plays $y$ changes what is being minimized (Fact 3 below makes this official). Correlation is symmetric in $x$ and $y$; regression is not.
```

(ch11-facts)=
## Facts about Least-Squares Regression

The use of regression to describe the relationship between a **response variable** and an **explanatory variable** is one of the most commonly encountered statistical methods. Least-squares regression is the most commonly used technique for fitting a regression line to data. Here are some key facts about least-squares regression lines.

- **Fact 1**: Connection Between Correlation and Slope  

  There is a close connection between **correlation** and the **slope** of the least-squares line.  
  The slope is given by:

  $$
  b_1 = r \frac{s_y}{s_x}
  $$

  - This equation states that **a change of 1 standard deviation in $x$ corresponds to a change of $r$ standard deviations in $y$**.
  - If $r = 1$ or $r = -1$, the **change in $\hat{y}$** is the same (in standard deviation units) as in $x$.
  - If $-1 < r < 1$ (that is, $|r| < 1$), the change in $\hat{y}$ (in standard-deviation units) is **less** than the change in $x$.
  - As **correlation weakens**, the predicted $\hat{y}$ moves **less** in response to changes in $x$.
  - If **correlation is zero**, the slope of the regression line is **zero**.

- **Fact 2**: The Least-Squares Regression Line Passes Through $(\bar{x}, \bar{y})$  

  - The **least-squares regression line always passes through** the point $(\bar{x}, \bar{y})$ on the graph of $y$ against $x$.
  - This means the regression line of $y$ on $x$ is:
    - A line with **slope** $r \frac{s_y}{s_x}$ that **passes through $(\bar{x}, \bar{y})$**.
  - Regression can be **fully described** in terms of the basic measures: $\bar{x}, s_x, \bar{y}, s_y, r$.

- **Fact 3**: Explanatory and Response Variable Roles Matter  

  - **Regression considers distances from the line only in the $y$-direction**.
  - If we **switch the roles** of $x$ and $y$, we obtain **a different regression line**.

(ch11-r2)=
## Coefficient of Determination ($R^2$) and Square of Correlation Coefficient ($r^2$)

```{admonition} A question before this section
:class: bridge
The line makes predictions — but *any* method makes predictions, including the laziest one imaginable: ignore $x$ entirely and predict $\bar{y} = 68.5$ inches for every student, big feet or small. Your regression only earns its keep if it beats that baseline. **How much better are the line's predictions than just guessing $\bar{y}$?** The answer — comparing the prediction errors with and without $x$ — is a single number between 0 and 1, and it is the most-quoted statistic in all of regression: $r^2$.
```

In the one-way ANOVA chapter, we have studied the coefficient of determination, $R^2$, which represents the proportion of variance in the dependent variable $y$ that is explained by the independent variable $x$ in the regression model. For a simple linear regression model, where we have only one independent variable, this $R^2$ is equal to the square of the correlation coefficient, $r^2$, and it is also a measure of **how well the regression explains the response**.


- **Correlation** $r$ ignores the distinction between **explanatory** and **response variables**.
- There is a **strong connection** between correlation and regression.
- The **slope** of the **least-squares regression line** involves $r$.
- The **numerical value of** $r$ measures the **strength of a linear relationship**.

```{admonition} **$R^2$ in Regression**  
:class: note  
- The **square of the correlation** $r^2$ represents the fraction of the variation in $y$ **explained** by the least-squares regression of $y$ on $x$.
- Thus, $r^2$ is a measure of **how well the regression explains the response**.
```

> For simple linear regression, 
```{math}
\begin{aligned}
R^2 &\longleftrightarrow \text{Proportion of variance in } Y \text{ explained by } X \\
&\longleftrightarrow [\mathrm{corr}(Y,\hat{Y})]^2 \\
&\longleftrightarrow [\mathrm{corr}(Y,b_0 + b_1 X)]^2 \;=\; [\pm\,\mathrm{corr}(X,Y)]^2 \;=\; [\mathrm{corr}(X,Y)]^2 \\
&\longleftrightarrow r^2.
\end{aligned}
```



```{admonition} **Interpretation of $r^2$**  
:class: note 


The **square of the correlation** $r^2$ describes the **variation explained** by the least-squares regression.  

- Suppose we want to **predict** a new value of $y$.  
- Without additional information, the **best estimate** is the sample mean $\bar{y}$.
- If an **explanatory variable** $x$ is available, we use the **regression equation**:

  $$
  \hat{y} = b_0 + b_1 x
  $$

This prediction **accounts for** the value of $x$.

- Comparing Prediction Methods

  - Without $x$:  
    - We predict using $\bar{y}$.  
    - The difference between observed and predicted values is $y - \bar{y}$.  

  - With $x$:  
    - We predict using $\hat{y}$.  
    - The difference is $y - \hat{y}$.  

  - The use of $x$ **changes the error** from $y - \bar{y}$ to $y - \hat{y}$.  
  - We compare the **sums of squares** of these differences:

    $$
    r^2 = \frac{\sum (\hat{y} - \bar{y})^2}{\sum (y - \bar{y})^2}
    $$

  - The **numerator** represents the **variation in $y$ explained by $x$**.  
  - The **denominator** represents the **total variation in $y$**.  

> In **Chapter 11 of the textbook**, where $\hat{y}$ is based on **multiple explanatory variables**, we use $R^2$ to denote the **coefficient of determination**.


```

:::{dropdown} Example: interpreting r-squared for the 8 students
:open:
For the shoe-size data, $r \approx 0.95$, so

$$
r^2 \approx (0.95)^2 \approx 0.90.
$$

You can verify this the long way with the sums-of-squares definition: computing $\hat{y}$ for all 8 students gives $\sum(\hat{y} - \bar{y})^2 / \sum(y - \bar{y})^2 = 0.9024$ — the same number, as the identity promises.

The interpretation, in one careful sentence: **about 90% of the variation in these students' heights is explained by the linear regression on shoe size; the remaining 10% is variation the line leaves unexplained** (student 4 sitting low, student 5 sitting high — the residuals). Concretely: heights vary from 64 to 74 inches. If you had to predict with no shoe information, your best guess is $\bar{y} = 68.5$ for everyone, and you eat the full spread of $y - \bar{y}$ errors. Knowing shoe size shrinks those squared errors by 90%.

Note what dies in the squaring: the **sign**. Our legroom-comfort example from last chapter had $r \approx -0.98$, so $r^2 \approx 0.96$ — a *negative* association with a *higher* $r^2$ than our positive one. Report $r^2$ for explanatory power, but look to $r$ (or the slope) for direction.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "$r^2 = 0.64$ means 64% of the data points lie on the regression line."

**In fact:** $r^2$ counts **variation, not points**. It says that 64% of the **variation in $y$** — measured by sums of squares, $\sum(\hat{y}-\bar{y})^2 \big/ \sum(y-\bar{y})^2$ — is explained by the regression on $x$. The line may pass through *zero* of the points (ours does exactly that, with $r^2 = 0.90$). Nor does it mean "predictions are 64% accurate" or "the line is 64% correct."

**Quick check:** our 8-student fit has $r^2 \approx 0.90$. How many of the 8 points lie exactly on the line? (None — every residual is nonzero. Ninety percent of the *variation* explained, zero percent of the *points* touched. If those two facts can coexist, you understand $r^2$.)
```

(ch11-together)=
## Putting It All Together: The Full Descriptive Regression Walkthrough

One dataset, every tool from the last two chapters, in the order a statistician actually uses them. The 8 students, shoe size $x$ and height $y$:

| Student | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Shoe size $x$ | 6 | 7 | 8 | 8.5 | 9 | 10 | 11 | 12 |
| Height $y$ | 64 | 65 | 68 | 66 | 70 | 69 | 72 | 74 |

**Step 1 — Scatterplot first.** Shoe size (explanatory) on $x$, height (response) on $y$. Overall pattern: **linear form, positive direction, fairly strong**, no outliers alarming enough to drag the line (remember the squares: an outlier's influence grows quadratically).

**Step 2 — Quantify the strength.** $r \approx 0.95$. Strong positive linear association — a line is a sensible summary, so fitting one is justified. (Had the plot shown a U-shape, we would stop here or transform, no matter what $r$ said.)

**Step 3 — Fit the least-squares line.** From the five summary numbers $\bar{x} = 8.94$, $s_x \approx 2.01$, $\bar{y} = 68.5$, $s_y \approx 3.46$, $r \approx 0.95$ (Fact 2: they fully determine the line):

$$
b_1 = 0.95 \times \frac{3.46}{2.01} \approx 1.64, \qquad b_0 = 68.5 - 1.64 \times 8.94 \approx 53.85
$$

$$
\hat{\text{height}} = 53.85 + 1.64 \times \text{shoe size}
$$

**Step 4 — Interpret the slope in words.** Each extra shoe size predicts about **1.64 additional inches** of height. Direction of the sentence matters: we predict height *from* shoe size; the reversed regression would be a different line (Fact 3).

**Step 5 — Predict, then face the residual.** For a size-9 student: $\hat{y} = 53.85 + 1.64 \times 9 \approx 68.6$ inches. Our actual size-9 student is 70 inches: residual $= 70 - 68.6 = +1.4$ inches, a point above the line. The prediction is the *average* height we would expect among size-9 students, not a promise about any individual.

**Step 6 — Grade the regression.** $r^2 \approx 0.90$: the regression on shoe size explains about 90% of the variation in these heights. Excellent by most standards — and still 10% of the variation belongs to everything shoe size cannot see.

**Step 7 — Respect the range.** A visitor wears size 20. The equation cheerfully outputs $53.85 + 1.64 \times 20 \approx 86.6$ inches — over 7 feet 2. Our data live between sizes 6 and 12; at size 20 we have *no evidence the linear pattern still holds*. That is **extrapolation**, and the polite refusal — "our line was fit for sizes 6–12; I won't predict at 20" — is the correct professional answer.

**The regression checklist** (run it on every bivariate analysis you ever do):
1. Plot. Form linear? Outliers?
2. $r$: direction and strength. Line justified?
3. Fit: $b_1 = r\,s_y/s_x$, $b_0 = \bar{y} - b_1\bar{x}$.
4. Interpret slope (and intercept only if $x=0$ makes sense) **in context**.
5. Predict within range; examine residuals.
6. Report $r^2$ as variation explained.
7. Never extrapolate; never let "predicts" slide into "causes."

## Check Your Understanding

:::{dropdown} 1. Predict the height of student 6 (shoe size 10, actual height 69 inches), and compute and interpret the residual.
$\hat{y} = 53.85 + 1.64 \times 10 \approx 70.2$ inches. Residual: $e = y - \hat{y} = 69 - 70.2 = -1.2$ inches. The sign carries meaning: this student is about $1.2$ inches **shorter** than the line predicts for a size-10 shoe — the point sits *below* the line. (Reporting "1.2 inches off" without the sign discards half the information a residual holds.)
:::

:::{dropdown} 2. A study of study-hours (x) and exam score (y) reports r = -0.8. Your friend concludes: "r² = 0.64, so 64% of students' scores fall on the regression line, and more hours lower scores for sure." Find all the errors.
Three of them. (1) $r^2 = (-0.8)^2 = 0.64$ means 64% of the **variation in scores** is explained by the linear regression on hours — not that any points lie on the line. (2) The regression describes association; "lower scores *for sure*" smuggles in causation, which no descriptive fit can establish (lurking variables: perhaps struggling students both study longer *and* score lower). (3) Nothing is wrong with the arithmetic $r^2 = 0.64$ itself — note it quietly forgot the negative direction, which must be reported from $r$ or the slope, not from $r^2$.
:::

:::{dropdown} 3. Using the five summary statistics of the shoe-size data, your classmate regresses shoe size on height and gets slope 0.55. Why isn't this just 1/1.64, and what principle is at work?
Fact 3: least squares minimizes vertical distances **in the response direction**, so swapping the roles of $x$ and $y$ poses a genuinely different minimization and yields a genuinely different line. The reversed slope is $r\,s_x/s_y \approx 0.95 \times 2.01/3.46 \approx 0.55$, whereas inverting our slope would give $1/1.64 \approx 0.61$. The two lines agree only when $|r| = 1$ (indeed $0.55 \times 1.64 \approx 0.90 = r^2$, which equals 1 exactly when the points are perfectly linear). Moral: decide which variable is the response *before* fitting — the regression line, unlike the correlation, is not symmetric.
:::

