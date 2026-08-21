# Inference for Regression

```{admonition} Textbook reference
:class: seealso
This chapter corresponds to **Chapter 10** of *Introduction to the Practice of Statistics* (Moore, McCabe & Craig, 10th ed.). Note that the course chapter numbers (shown in the sidebar) follow our teaching order, which differs from the textbook order.
```

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Write down the **simple linear regression model** $y_i = \beta_0 + \beta_1 x_i + \epsilon_i$ and state the **conditions** required for inference (linearity, constant $\sigma$, Normal model deviations, SRS).
* Estimate $\beta_0$, $\beta_1$, and $\sigma$ from data using $b_0$, $b_1$, and the **regression standard error** $s$, and explain the difference between the model deviations $\epsilon_i$ and the residuals $e_i$.
* Construct a **confidence interval** and carry out a **$t$ test** for the slope $\beta_1$ using $\text{SE}_{b_1}$ and the $t(n-2)$ distribution.
* Read and complete the **ANOVA table** for regression, carry out the **$F$ test**, and explain why $F = t^2$ in simple linear regression.
* Distinguish a **confidence interval for the mean response** at $x^*$ from a **prediction interval for a single future observation** at $x^*$, and explain why the prediction interval is wider.
* Test $H_0\!: \rho = 0$ for a population correlation and connect this test to the slope test.
```

```{admonition} Key concepts at a glance
:class: note
[The regression model](ch12-model) · [Estimating the parameters](ch12-estimation) · [Inference for the slope](ch12-inference) · [ANOVA for regression](ch12-anova) · [Standard errors, CI vs. PI, and correlation](ch12-se) · [Derivations for the curious](ch12-appendix) · [Putting it all together](ch12-together)
```

```{admonition} Where are we? A question before we start
:class: bridge
You measure the shoe sizes and heights of 8 classmates and fit the least-squares line $\hat{y} = 52.67 + 1.67x$ to **your** sample. A classmate repeats the survey with 8 *different* students — and gets a different line. So which line is "the" relationship between shoe size and height? **Is the true slope even nonzero, or did we just fit a line through noise?** This is exactly the move we made in Chapter 5 for $\bar{x}$: treat the slope $b_1$ as a *statistic with a sampling distribution*, attach a standard error to it, and use $t$ procedures to test hypotheses and build confidence intervals for the *parameter* $\beta_1$.
```

In this chapter, we will study the <span class="purdue-text">**inference for regression**</span>. In the previous chapter, when we had one sample—one dataset—we could plot a regression line in that scatterplot. But what if we have a different sample, a different dataset from the population? We might end up with a different regression line. 

The values $b_0$ and $b_1$ are our estimates of the true population parameters of the linear model, which are $\beta_0$ and $\beta_1$. Just as we use $\bar{x}$ to estimate $\mu$, we need to calculate the standard errors of our estimates to quantify the sampling variability of our estimates and to conduct similar statistical inference procedures.


:::{dropdown} Understanding Uncertainty in Regression Estimates
:open:

For one scatterplot, we can have a single line given by:

$$
\hat{y} = b_0 + b_1 x
$$

We use $b_0$ to denote $\hat{\beta}_0$, and $b_1$ to denote $\hat{\beta}_1$. This fitted line is fixed for that particular dataset. However, if we obtain a different dataset, which produces a different scatterplot, the pair of estimates $b_0$ and $b_1$ is likely to change.

The **standard errors** associated with $\hat{\beta}_0$ and $\hat{\beta}_1$ quantify the uncertainty in these estimates. They measure how much the estimates would vary if we repeated the sampling process and refitted the model each time.

- For one scatterplot, you have one fixed line with estimates $\hat{\beta}_0$ and $\hat{\beta}_1$.
- With a different dataset, these estimates would likely change due to sampling variability.
- The standard errors for $\hat{\beta}_0$ and $\hat{\beta}_1$ reflect this uncertainty and help quantify the variability of the estimated regression line across different samples.

> Statistical inference is fundamentally about quantifying the uncertainty in our estimates due to sampling variability. When we draw a sample from a population, our estimates (like $\hat{\beta}_0$ and $\hat{\beta}_1$ in a regression model) can vary from one sample to another. Statistical inference provides tools—such as standard errors, confidence intervals, and hypothesis tests—to measure and account for this variability, allowing us to make probabilistic statements about the true population parameters despite the uncertainty inherent in any single sample. [^footnote01]

[^footnote01]: In frequentist inference, we consider the parameters as fixed (but unknown) quantities, and the data as random due to sampling variability. In Bayesian inference, we treat the parameters as random variables with their own distributions (priors), and once the data is observed, it is considered fixed while we update our beliefs about the parameters through the posterior distribution.
:::

(ch12-model)=
## Simple Linear Regression

```{admonition} A question before this section
:class: bridge
Before we can do any inference, we have to ask: **what exactly do we assume the world looks like** for "the true slope" to even be a meaningful phrase? Back in Chapter 0 we wrote the data-generating story $y = ax + b + \epsilon$ — a deterministic line plus random noise. The simple linear regression model below is precisely that story with official statistical notation: $\beta_0 + \beta_1 x$ is the line built into the *population*, and $\epsilon \sim \mathcal{N}(0, \sigma^2)$ is the noise. Every inference procedure in this chapter lives *inside* this model — which is why checking its conditions is not optional fine print.
```

Having this sampling variability in mind, we can imagine observing all the data points—that is, every pair of $x$ and $y$ values—in the population. We also assume that $x$ and $y$ share a linear relationship, which can be expressed by the simple linear regression model (called "simple" because it includes only one independent variable):

```{admonition} **Simple Linear Regression Model**  
:class: note  
- Given $N$ observations of $(x, y)$ pairs:  

  $$
  (x_1, y_1), (x_2, y_2), ..., (x_N, y_N)
  $$

- The response variable follows:  

  $$
  y_i = \beta_0 + \beta_1x_i + \epsilon_i
  $$

- $\beta_0$: **Intercept**, $\beta_1$: **Slope**, $\sigma$: **Regression standard deviation**.
- Error term, $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$
- Equation: Data = Fit + Residual
- $\epsilon_i$: **Model deviations** (error terms). Their sample counterparts are the residuals $e_i = y_i - \hat{y}_i$, the differences between observed and predicted $y$ values.
```

Again, we assume that $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$ because not all data points lie exactly on the line; this term represents the deviation from the line. Additionally, this implies that if we condition on each $x_i$ (as illustrated by the vertical blue dashed lines in the scatterplot from the last chapter), then by taking the average of the corresponding $y$ values, we obtain:

$$
\mu_{y_i} = \mathbb{E}(y_i \mid x_i) = \mathbb{E}(\beta_0 + \beta_1x_i + \epsilon_i \mid x_i) = \beta_0 + \beta_1x_i + \mathbb{E}(\epsilon_i)  = \beta_0 + \beta_1x_i
$$

or,

$$
\mu_{y} = \beta_0 + \beta_1x
$$


We can visualize this **population regression line** with the figure below:

```{figure} _image/1201.png
:alt: Diagram of the regression model with identical Normal curves of blood pressure decrease centered on the line mu y equals beta0 plus beta1 x
:align: center
:width: 100%

```
- The **explanatory variable** $x$ can have multiple values (e.g., different doses of calcium supplement).
- Each value of $x$ defines a **subpopulation**, assumed to have a **Normally distributed** response $y$.
- The **population regression line** describes the mean response $\mu_y$ as a function of $x$.
- All subpopulations have the **same spread**, measured by **standard deviation** $\sigma$.
- **Key Assumptions:**
  - The mean response **$\mu_y$ changes** as $x$ changes, forming a **straight-line pattern**.
  - Individual responses $y$ vary **Normally** within each subpopulation.
  - Standard deviation $\sigma$ is **constant** for all values of $x$.

:::{dropdown} How to read this figure (the single most important picture in this chapter)
:open:
This figure *is* the simple linear regression model — every assumption in the bullet list above is drawn somewhere in it. Read it in three passes:

1. **Find the straight line first.** That is the *population* regression line $\mu_y = \beta_0 + \beta_1 x$. It is not a fitted line through data points — there are no data points in this picture at all. It is the "truth" that our $\hat{y} = b_0 + b_1 x$ tries to estimate.
2. **Now look at one Normal curve.** Each curve sits at one particular value of $x$ and is drawn *sideways*: it shows the distribution of the response $y$ within that **subpopulation** (e.g., all subjects receiving that particular calcium dose, or all students with that shoe size). The peak of each curve sits exactly *on* the line — the subpopulation mean is $\beta_0 + \beta_1 x$. An individual $y$ lands somewhere under its curve; its vertical distance from the line is its personal $\epsilon$.
3. **Compare the curves to each other.** They are deliberately drawn *identical* in shape and spread — only their centers slide along the line. That is the constant-$\sigma$ assumption: same scatter at every $x$.

What the figure does **not** claim is just as important: it says nothing about the distribution of $x$, and it does *not* say the $y$ values as a whole are Normal. Only $y$ *within each vertical slice* is Normal — a distinction the next section's "common misunderstanding" box returns to.
:::

In reality, we cannot observe all the data points for each subpopulation; we only have a sample of data points for them. Thus, we can only obtain the estimates, $b_0$ and $b_1$, for the true parameters, $\beta_0$ and $\beta_1$, respectively.

(ch12-estimation)=
## Estimating the regression parameters

``````{tab-set}
````{tab-item} Estimating the Regression Parameters

The method of least squares presented in Chapter 2 fits a line to summarize a relationship between the observed values of an explanatory variable and a response variable. Now we want to use the least-squares regression line as a basis for inference about a population from which our observations are a sample. In that setting, the slope $b_1$ and intercept $b_0$ of the least-squares line

```{math}
\hat{y} = b_0 + b_1\,x
```

estimate the slope $\beta_1$ and the intercept $\beta_0$ of the **population regression line**.

```{admonition} Important
:class: warning

_This inference should only be done when the linear regression model conditions are reasonably met._
```

Various checks are needed, and some judgment is required. Because additional methods to check these conditions rely on first fitting the model to the data, let’s briefly review the estimation methods of Chapter&nbsp;2.

Using the formulas from Chapter&nbsp;2, the slope of the least-squares line is:

```{math}
b_1 = r \,\frac{s_y}{s_x}
```

and the intercept is:

```{math}
b_0 = \bar{y} \;-\; b_1\,\bar{x}.
```

Here, $r$ is the correlation between the observed values of $y$ and $x$, $s_y$ is the standard deviation of the sample $y$’s, and $s_x$ is the standard deviation of the sample $x$’s.

The **residuals** $e_i$ correspond to the linear regression model deviations $\varepsilon_i$. The $e_i$ sum to 0, and the $\varepsilon_i$ come from a population with mean 0. Because we do not observe the $\varepsilon_i$, we use the residuals to estimate $\sigma$ and check the model conditions of the $\varepsilon_i$.

```{math}
e_i = \text{observed response} - \text{predicted response}
     = y_i - \hat{y}_i
     = y_i - b_0 - b_1\,x_i.
```

Recall also that the least-squares regression line always passes through the point $(\bar{x}, \bar{y})$. Note that if the slope $b_1$ is 0, so is the correlation $r$, and vice versa.

````


`````{tab-item} Regression Standard Error and Model Standard Deviation

To estimate $\sigma$, which measures the variation of $y$ about the population regression line, we look at the **average squared residual** (in simple linear regression). The sample of deviations is formed by the residuals $e_i$, which stand in for the unobserved $\varepsilon_i$.

We define:

```{math}
s^2 = \frac{\sum e_i^2}{n - 2} 
     = \frac{\sum (y_i - \hat{y}_i)^2}{n - 2},
```

where $n - 2$ is the **degrees of freedom** for this estimate. Taking the square root of $s^2$ gives us:

```{math}
s = \sqrt{s^2},
```

the **regression standard error**. It is our estimate of the model standard deviation $\sigma$.

````{admonition} Estimating the Regression Parameters
:class: tip

In the simple linear regression setting, we use the slope $b_1$ and intercept $b_0$ of the least-squares regression line to estimate the slope $\beta_1$ and intercept $\beta_0$ of the population regression line, respectively.

The standard deviation $\sigma$ in the model is estimated by the **regression standard error**:

```{math}
s = \sqrt{ \frac{1}{n - 2} \,\sum (y_i - \hat{y}_i)^2 }.
```
````

`````


````{tab-item} Linear Regression Model Conditions

```{admonition} Model Conditions vs. $y$ and $x$ Distributions
:class: note

_It is a common mistake to assess the Normality of $y$ when checking model conditions. Even though examining the distributions of $x$ and $y$ can help identify outliers or influential observations, the key requirement is that the **model deviations** (the residuals) are approximately Normal, not necessarily $x$ or $y$ individually._
```

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "To check the Normality condition, make a histogram or Normal quantile plot of the $y$ values and see whether it looks Normal."

**In fact:** as the note above emphasizes, the model requires the **deviations** $\epsilon_i$ — checked in practice through the **residuals** $e_i$ — to be approximately Normal. The raw $y$ values mix together many subpopulations with *different* means $\beta_0 + \beta_1 x_i$, so the histogram of $y$ can look skewed or even bimodal while the model holds perfectly.

**Quick check:** suppose height truly follows the model, and your sample happens to contain one clump of small shoe sizes and one clump of large ones. What would the histogram of the raw heights look like? (Two clumps — one per group — even though every single residual is perfectly Normal. Plot the residuals, not $y$.)
```

```{admonition} Linear Regression Model Conditions
:class: important

To use the least-squares regression line as a basis for inference about a population, each of the following conditions should be **approximately met**:

- The sample is an SRS from the population.
- There is a linear relationship between $x$ and $y$.
- The standard deviation of the responses $y$ about the population regression line is the same for all $x$.
- The model deviations are Normally distributed.
```

In settings where the choices of $x$ are controlled — for example, assigning subjects different milligrams of a calcium supplement — we consider the subjects to be an SRS from the population, and that they are randomly assigned to the different choices of $x$. In other words, the $y$’s for each value of $x$ are an SRS from its subpopulation.

Provided our check of conditions gives no reason to question the use of the simple linear regression model, we can proceed to inference about:

- The slope $\beta_1$ and the intercept $\beta_0$ of the population regression line.
- The mean response $\mu_y$ for a given value of $x$.
- An individual future response $y$ for a given value of $x$.

````
``````

:::{dropdown} Example: heights and shoe sizes — meet the dataset for this chapter
:open:
We will carry one small dataset through the entire chapter, so that every formula gets a number attached to it. Eight randomly chosen students report their shoe size $x$ and height $y$ (in inches):

| Student | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Shoe size $x$ | 8 | 9 | 9 | 10 | 10 | 11 | 12 | 13 |
| Height $y$ | 66 | 69 | 66 | 71 | 68 | 72 | 71 | 75 |

The summary statistics are $\bar{x} = 10.25$, $\bar{y} = 69.75$, $s_x = 1.669$, $s_y = 3.105$, $r = 0.896$, and $\sum (x_i - \bar{x})^2 = 19.5$. Using the Chapter 2 formulas:

$$
b_1 = r\,\frac{s_y}{s_x} = 0.896 \times \frac{3.105}{1.669} \approx 1.667,
\qquad
b_0 = \bar{y} - b_1\,\bar{x} = 69.75 - 1.667 \times 10.25 \approx 52.667.
$$

So the fitted line is $\hat{y} = 52.67 + 1.67x$: each additional shoe size predicts about $1.67$ additional inches of height. (This line is the one from the chapter-opening question — *your* sample's line.)

Next we estimate $\sigma$. The residuals $e_i = y_i - \hat{y}_i$ are $0,\ 1.33,\ -1.67,\ 1.67,\ -1.33,\ 1.00,\ -1.67,\ 0.67$ — they sum to $0$, as they must — and their sum of squares is $\sum e_i^2 = 13.333$. With $n - 2 = 6$ degrees of freedom,

$$
s^2 = \frac{\sum e_i^2}{n-2} = \frac{13.333}{6} = 2.222,
\qquad
s = \sqrt{2.222} = 1.491 \text{ inches}.
$$

This **regression standard error** $s = 1.491$ estimates $\sigma$: the typical vertical scatter of individual heights around the population line. Keep $s$, $\sum (x_i - \bar{x})^2 = 19.5$, and the fitted line in view — the rest of the chapter reuses them constantly.
:::

(ch12-inference)=
## Confidence intervals and significance tests

``````{tab-set}
````{tab-item} Confidence Intervals and Significance Tests

Chapter 7 presented confidence intervals and significance tests for means and differences in means. In each case, inference rested on the standard errors of estimates and on $t$ distributions. Inference in simple linear regression is similar in principle. For example, the confidence intervals have the form:

```{math}
\text{estimate} \;\pm\; t^* \cdot \text{SE}_{\text{estimate}},
```

where $t^*$ is a critical point of a $t$ distribution. It is only the formulas for the estimate and standard error that are different.

As a consequence of the model assumptions about the deviations $\varepsilon_i$, the sampling distributions of $b_0$ and $b_1$ are Normally distributed with means $\beta_0$ and $\beta_1$ and standard deviations that are multiples of $\sigma$, the model parameter that describes the variability about the true regression line. In fact, even if the $\varepsilon_i$ are not Normally distributed, a general form of the central limit theorem tells us that the distributions of $b_0$ and $b_1$ will be approximately Normal.

Because we do not know $\sigma$, we use the estimated model standard deviation $s$, which measures the variability of the data about the least-squares line. When we do this, we again move from the Normal distribution to $t$ distributions but now with degrees of freedom $n - 2$, the degrees of freedom of $s$. We give formulas for the standard errors $\text{SE}_{b_1}$ and $\text{SE}_{b_0}$ in Section 10.2 of the textbook.
````

`````{tab-item} Inference for the Regression Slope

````{admonition} INFERENCE FOR THE REGRESSION SLOPE
:class: tip

A level $C$ **confidence interval for the slope** $\beta_1$ is:
```{math}
b_1 \;\pm\; t^* \cdot \text{SE}_{b_1},
```
where $t^*$ is the value for the $t(n - 2)$ density curve with area $C$ between $-t^*$ and $t^*$. The margin of error is $m = t^* \cdot \text{SE}_{b_1}$.

To test the hypothesis $H_0\!: \beta_1 = \beta_1^*$, we use the **test statistic**:
```{math}
t = \frac{b_1 - \beta_1^*}{\text{SE}_{b_1}}.
```

If $H_0\!: \beta_1 = 0$, then the test statistic reduces to:
```{math}
t = \frac{b_1}{\text{SE}_{b_1}}.
```

With degrees of freedom $n - 2$, the $P$-value for the hypothesis depends on the alternative:

```{math}
\begin{aligned}
H_a: \beta_1 > \beta_1^* & \;\Rightarrow\; P(T \ge t), \\
H_a: \beta_1 < \beta_1^* & \;\Rightarrow\; P(T \le t), \\
H_a: \beta_1 \ne \beta_1^* & \;\Rightarrow\; 2\,P(T \ge |t|).
\end{aligned}
```
````

```{figure} _image/1202.png
:alt: Textbook box on slope inference with interval b1 plus or minus t star SE and t curves shading one and two sided P-value tail areas
:align: center
:width: 80%

```
`````

````{tab-item} Testing the Intercept and the Slope

Formulas for confidence intervals and significance tests for the intercept $\beta_0$ are exactly the same, replacing $b_1$ and $\text{SE}_{b_1}$ by $b_0$ and its standard error $\text{SE}_{b_0}$.

Although computer outputs often include a test of $H_0: \beta_0 = 0$, this usually has little practical value. From the equation $\mu_y = \beta_0 + \beta_1 x$, we see that $\beta_0$ is the mean response when $x = 0$, which is often not meaningful.

The test of $H_0: \beta_1 = 0$ is more useful. When $\beta_1 = 0$, the model becomes:
```{math}
\mu_y = \beta_0.
```
This implies that the mean of $y$ does not vary with $x$. All $y$ values come from a population with mean $\beta_0$ (estimated by $\bar{y}$), and there is _no straight-line relationship_ between $x$ and $y$.


Interpreting P-values:

Note that a large $t$ value (small $P$-value) is evidence of *some* linear relationship; however, this is not the same as concluding that the relationship is **strong**. As seen in Figure 10.3 in the textbook, there can be substantial scatter.

```{admonition} Important
:class: note

A very small $P$-value for the significance test for a zero slope does **not** necessarily imply that we have found a strong relationship.
```

A confidence interval provides more information. In software, these intervals may be optional and must be requested. They can also be constructed by hand.
````

`````{tab-item} Confidence Intervals for Mean Response

Besides slope and intercept, we may want to use the regression line to estimate the mean response $y$ at a specific $x = x^*$. The mean of the response is:
```{math}
\mu_y = \beta_0 + \beta_1\,x^*.
```

The estimate is:
```{math}
\hat{\mu}_y = b_0 + b_1\,x^*.
```

````{admonition} CONFIDENCE INTERVAL FOR A MEAN RESPONSE
:class: tip

```{math}
\hat{\mu}_y \;\pm\; t^* \cdot \text{SE}_{\hat{\mu}_y},
```
where $t^*$ is from the $t(n - 2)$ distribution and $m = t^* \cdot \text{SE}_{\hat{\mu}_y}$.
````
`````


`````{tab-item} Prediction Intervals

To predict an _individual_ observation $y$ for $x = x^*$, we again use:
```{math}
\hat{y} = b_0 + b_1\,x^*.
```

This looks like the same formula as for $\hat{\mu}_y$, but here it predicts a single future value. We use different notation to emphasize:

- $\hat{y}$ for **future value**, 
- $\hat{\mu}_y$ for **population mean**.

For example, in the IPS physical activity and BMI example, $\hat{y} = 29.578 - 0.655x$ with $x^* = 9$ (thousand steps per day) gives a predicted BMI $= 23.7\ \text{kg/m}^2$. But a useful prediction also needs a margin of error.

A **prediction interval** is used to estimate where a future observation will fall. It is wider than the confidence interval because it includes both:
- the sampling uncertainty in the estimated regression line (the confidence interval component),
- the scatter of an individual new observation around its subpopulation mean (the extra MSE term).

Repeat:
- Sample $n$ points $(x_i, y_i)$ and one more $(x^*, y)$.
- Construct a 95% prediction interval for $y$ using $x^*$.

Prediction Interval for a Future Observation:

````{admonition} PREDICTION INTERVAL FOR A FUTURE OBSERVATION
:class: tip

A level $C$ **prediction interval** for a future observation $y$ from the subpopulation corresponding to $x^*$ is:

```{math}
\hat{y} \;\pm\; t^* \cdot \text{SE}_{\hat{y}},
```

where $t^*$ comes from $t(n - 2)$ with area $C$ between $-t^*$ and $t^*$.  
The margin of error is $m = t^* \cdot \text{SE}_{\hat{y}}$.


Then, $C$% (e.g., 95%) of such intervals will capture the true $y$ for a future observation. The formula for $\text{SE}_{\hat{y}}$ includes both the uncertainty of estimating the line and variability around the mean.
````
`````
``````

:::{dropdown} Example continued: is the shoe-size slope real? A test and a confidence interval
:open:
For our 8 students we found $b_1 = 1.667$, $s = 1.491$, and $\sum (x_i - \bar{x})^2 = 19.5$. The standard error of the slope (formula in the Standard Errors section below) is

$$
\text{SE}_{b_1} = \frac{s}{\sqrt{\sum (x_i - \bar{x})^2}} = \frac{1.491}{\sqrt{19.5}} = \frac{1.491}{4.416} = 0.338.
$$

**Test** $H_0\!: \beta_1 = 0$ against $H_a\!: \beta_1 \ne 0$:

$$
t = \frac{b_1}{\text{SE}_{b_1}} = \frac{1.667}{0.338} = 4.94,
\qquad \text{df} = n - 2 = 6,
\qquad P\text{-value} = 2\,P(T \ge 4.94) = 0.0026.
$$

Because $0.0026 < 0.05$, we reject $H_0$: even with only 8 students, the data give strong evidence of a linear relationship between shoe size and height.

**Confidence interval:** for 95% confidence with 6 degrees of freedom, $t^* = 2.447$, so

$$
b_1 \pm t^* \cdot \text{SE}_{b_1} = 1.667 \pm 2.447 \times 0.338 = 1.667 \pm 0.83
\;\Longrightarrow\; (0.84,\ 2.49).
$$

We are 95% confident that in the population, each additional shoe size corresponds to between $0.84$ and $2.49$ additional inches of mean height. Notice the interval excludes $0$ — the same verdict as the test — but it says much more than "nonzero": it quantifies *how large* the slope plausibly is.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "The $P$-value for the slope is tiny, so $x$ and $y$ must have a *strong* relationship."

**In fact:** the test only weighs evidence that $\beta_1 \ne 0$ — that there is *some* linear relationship. **Significance measures evidence; $r^2$ measures strength.** In large samples, a microscopic $P$-value can coexist with a relationship too weak to matter, because $t = r\sqrt{n-2}\big/\sqrt{1-r^2}$ grows with $n$ even when $r$ stays small.

**Quick check:** with $n = 10{,}000$ students and $r = 0.1$ (so $r^2 = 0.01$: $x$ explains 1% of the variation in $y$), how big is $t$? (About $t = 0.1\sqrt{9998}/\sqrt{0.99} \approx 10$, giving a $P$-value around $10^{-23}$ — overwhelming evidence of an almost useless relationship. Always report $r^2$ or a confidence interval alongside the $P$-value.)
```

(ch12-anova)=
## More detail about simple linear regression

```{admonition} A question before this section
:class: bridge
We just tested $H_0\!: \beta_1 = 0$ with a $t$ statistic. But software output always includes a second, seemingly different test of the *very same hypothesis*: an **ANOVA $F$ test**, built not by standardizing a slope but by splitting the total variation in $y$ into an "explained" piece and a "leftover" piece. **Why would statisticians keep two tests for one question?** Work through this section and you will find the punchline: they are the *same* test in disguise — $F = t^2$. In our shoe-size example, $t = 4.94$ and the ANOVA table will report $F = 24.375 = (4.937)^2$, with an identical $P$-value of $0.0026$.
```

``````{tab-set}
`````{tab-item} Analysis of Variance for Regression

The usual computer output for regression includes an additional block of calculations labeled **“ANOVA”** or **“Analysis of Variance.”**  
**Analysis of variance** (often abbreviated ANOVA) refers to statistical methods that break down the total variation in the data into pieces that correspond to different sources of variation. It aligns with the conceptual framework:

```{math}
\text{DATA = FIT + RESIDUAL.}
```

The total variation in the response $y$ is expressed by the deviations $y_i - \bar{y}$. If these deviations were all zero, then all observations would be the same, implying no variation in $y$. When there is variation (i.e., $y_i$ are not all equal to $\bar{y}$), the linear regression model identifies two sources for this variation:

1. **As the explanatory variable $x$ changes**, the mean response changes with it along the regression line. The fitted value $\hat{y}_i$ estimates the mean response for each $x_i$. The differences $\hat{y}_i - \bar{y}$ reflect the variation in mean response due to differences in the $x_i$.

2. **Individual observations vary** about their subpopulation mean, captured by the residuals $y_i - \hat{y}_i$ that record how much the actual observations scatter about the fitted line.

Hence, each deviation $y_i - \bar{y}$ can be split into:

```{math}
(y_i - \bar{y}) 
= (\hat{y}_i - \bar{y}) \;+\; (y_i - \hat{y}_i),
```

conveying the idea **DATA = FIT + RESIDUAL**.


Several Ways to Measure Variation:

We often measure variation by taking an average of squared deviations. By squaring each of the three deviations (data, fit, residual) and summing across $n$ observations, we get:

```{math}
\sum (y_i - \bar{y})^2 \;=\; \sum (\hat{y}_i - \bar{y})^2 \;+\; \sum (y_i - \hat{y}_i)^2.
```

We rewrite it as:

```{math}
\text{SST} \;=\; \text{SSM} \;+\; \text{SSE},
```

where

```{math}
\text{SST} = \sum (y_i - \bar{y})^2, \quad
\text{SSM} = \sum (\hat{y}_i - \bar{y})^2, \quad
\text{SSE} = \sum (y_i - \hat{y}_i)^2.
```

- **SST** (Total Sum of Squares) is the total variation in $y$.  
- **SSM** (Model Sum of Squares) measures the variation along the regression line (explained by $x$).  
- **SSE** (Error Sum of Squares) is the residual or unexplained variation.

If $b_1 = 0$, then **SSM** $= 0$ and **SST** $=$ **SSE**.

When $H_0\!: \beta_1 = 0$ holds, there is no subpopulation structure and all $y_i$ come from a single population with mean $\mu_y$ (no linear dependence on $x$).

Sums of Squares, Degrees of Freedom, and Mean Squares:

````{admonition} SUMS OF SQUARES, DEGREES OF FREEDOM, AND MEAN SQUARES
:class: tip

Sums of squares represent the total variation present in the responses. We have:

```{math}
\text{SST = SSM + SSE}
```

with corresponding degrees of freedom:

```{math}
\text{DFT = DFM + DFE}.
```

To calculate mean squares:
```{math}
\text{MS} = \frac{\text{sum of squares}}{\text{degrees of freedom}}.
```

From Section 2.4, recall that $r^2$ is the fraction of the variation in $y$ explained by the least-squares regression:

```{math}
r^2 
= \frac{\text{SSM}}{\text{SST}}
= \frac{\sum (\hat{y}_i - \bar{y})^2}{\sum (y_i - \bar{y})^2}.
```

Hence, $r^2$ is the **proportion of explained variation** in $y$.

Mean Squares and MSE:

Recall that the sample variance for $y$ is:

```{math}
s_y^2 = \frac{\sum (y_i - \bar{y})^2}{n - 1},
```

which uses **SST** in the numerator and total degrees of freedom $\text{DFT} = n - 1$. Meanwhile, the degrees of freedom break down as:

```{math}
\text{DFT} = \text{DFM} + \text{DFE}.
```

For regression with one explanatory variable, $\text{DFM} = 1$, so $\text{DFE} = n - 2$. In general:

```{math}
\text{MS} 
= \frac{\text{sum of squares}}{\text{degrees of freedom}}
\quad\text{and}\quad
\text{MSE} = s^2 
= \frac{\sum (y_i - \hat{y}_i)^2}{n - 2}.
```
````
`````

`````{tab-item} The ANOVA $F$ Test

The null hypothesis $H_0\!: \beta_1 = 0$ can be tested using the **$F$ statistic**:

```{math}
F = \frac{\text{MSM}}{\text{MSE}}.
```

If $H_0$ is true, $F$ follows an $F$ distribution with 1 numerator df and $n - 2$ denominator df. $F$ distributions are right-skewed, indexed by $F(j, k)$ where $j$ is numerator df and $k$ is denominator df. Under $H_0$, values of $F$ cluster around 1; the mean of the distribution is near 1 when the denominator df is large.


Critical Values and Tables:

**Figure 10.14** illustrates the density curve for $F(9, 10)$.  

```{figure} _image/1203.png
:alt: Density curve of the F distribution with 9 and 10 degrees of freedom, peaking near 1 and skewed right with a long upper tail
:align: center
:width: 80%

```

:::{dropdown} How to read this figure (an $F$ density curve)
:open:
This curve looks different from every $t$ curve you have seen, and each difference carries meaning:

* **It starts at $0$ and lives only on the right.** $F$ is a ratio of two sums of squares, so it can never be negative. There is no "left tail" and no two-sided version: *all* evidence against $H_0$ lands in the upper tail, which is why the $P$-value is always $P(F \ge F_{\text{obs}})$.
* **It peaks near $1$.** When $H_0\!: \beta_1 = 0$ is true, MSM and MSE both estimate the same $\sigma^2$, so their ratio hovers around $1$. An $F$ far above $1$ means the model is explaining far more variation than chance scatter would — evidence against $H_0$.
* **It is right-skewed with a long upper tail.** Ratios of variances occasionally come out large by chance, so moderate $F$ values (say, $2$ or $3$) are not automatically convincing; the $P$-value calibrates how far into the tail you actually are.
* **It carries *two* degrees-of-freedom labels.** The curve shown is $F(9, 10)$: $9$ for the numerator, $10$ for the denominator. In simple linear regression ours is always $F(1,\ n-2)$ — numerator df $= 1$ because a single predictor contributes one model degree of freedom.
:::

If software does not provide $P$-values, you can consult tables of critical $F$ values (for example, $p = 0.100, 0.050, 0.025, 0.010, 0.001$). In simple linear regression, the numerator degrees of freedom = 1, and denominator df = $n - 2$.


ANOVA Table Structure:

:::{list-table} Analysis of Variance
:widths: 15 20 20 20 10
:header-rows: 1

* - Source
  - Degrees of Freedom
  - Sum of Squares
  - Mean Square
  - $F$
* - Model
  - 1
  - $\sum (\hat{y}_i - \bar{y})^2$
  - SSM / DFM
  - MSM / MSE
* - Error
  - $n - 2$
  - $\sum (y_i - \hat{y}_i)^2$
  - SSE / DFE
  - 
* - Total
  - $n - 1$
  - $\sum (y_i - \bar{y})^2$
  - SST / DFT
  - 

:::


```{figure} _image/1204.png
:alt: Textbook box on the regression ANOVA F test of beta1 equals 0 using F equals MSM over MSE, with an F curve shading the upper tail P-value
:align: center
:width: 80%

```

````{admonition} ANALYSIS OF VARIANCE $F$ TEST
:class: tip

In regression, the hypotheses
```{math}
H_0: \beta_1 = 0 \quad \text{vs.}\quad H_a: \beta_1 \ne 0
```
are tested with the **ANOVA $F$ statistic**:
```{math}
F = \frac{\text{MSM}}{\text{MSE}}.
```
The $P$-value is $P(F(1, n - 2) \ge F_{\text{obs}})$.

The $F$ statistic tests the same null as the $t$ statistic. In fact, $t^2 = F$. We often prefer the $t$-form in single-predictor regression for simplicity, especially for one-sided tests and confidence intervals.
````
`````
``````

:::{dropdown} Example continued: the ANOVA table for heights vs. shoe sizes
:open:
For our 8 students, the three sums of squares are

$$
\text{SST} = \sum (y_i - \bar{y})^2 = 67.500,
\qquad
\text{SSM} = \sum (\hat{y}_i - \bar{y})^2 = 54.167,
\qquad
\text{SSE} = \sum (y_i - \hat{y}_i)^2 = 13.333,
$$

and indeed $54.167 + 13.333 = 67.500$: **DATA = FIT + RESIDUAL** in squared form. The full table:

| Source | Degrees of Freedom | Sum of Squares | Mean Square | $F$ |
|---|---|---|---|---|
| Model | 1 | 54.167 | 54.167 | 24.375 |
| Error | 6 | 13.333 | 2.222 | |
| Total | 7 | 67.500 | | |

Reading it off:

* $\text{MSE} = 13.333/6 = 2.222 = s^2$ — the same $s = 1.491$ we computed earlier, now living in the ANOVA table.
* $F = \text{MSM}/\text{MSE} = 54.167/2.222 = 24.375$, and the $P$-value is $P\big(F(1, 6) \ge 24.375\big) = 0.0026$ — *exactly* the $P$-value of the slope $t$ test, because $t^2 = (4.937)^2 = 24.375 = F$. (We quoted $t = 4.94$ rounded; the identity is exact in full precision.)
* $r^2 = \text{SSM}/\text{SST} = 54.167/67.500 = 0.802$: shoe size explains about $80\%$ of the variation in height in this sample — here, a relationship that is both *significant* and *strong*. The misconception box above shows those two properties need not travel together.
:::

(ch12-se)=
## Standard Errors

```{admonition} A question before this section
:class: bridge
Two questions about size-10 students sound almost identical but are fundamentally different. (1) *"What is the **average** height of all students who wear size 10?"* (2) *"My friend wears size 10 — how tall is **she**?"* Both answers start from the same fitted value $\hat{y} = 52.67 + 1.67 \times 10 \approx 69.3$ inches, yet the uncertainties differ enormously: an average is far easier to pin down than a single person, who carries her own personal deviation $\epsilon$ *on top of* our uncertainty about where the line is. As you read the formulas below, watch for a lone extra "$1$" inside a square root — that inconspicuous term is the entire difference between a **confidence interval** for a mean response and a **prediction interval** for an individual.
```

``````{tab-set}
`````{tab-item} Inference for Slope and Intercept

Confidence intervals and significance tests for the slope $\beta_1$ and intercept $\beta_0$ of the population regression line use the estimates $b_1$ and $b_0$ and their standard errors. Some algebra and variance rules show that the standard deviation of $b_1$ is:

```{math}
\sigma_{b_1} = \frac{\sigma}{\sqrt{\sum (x_i - \bar{x})^2}}.
```

Similarly, the standard deviation of $b_0$ is:

```{math}
\sigma_{b_0} 
= \sigma \,\sqrt{\,\frac{1}{n} \;+\; \frac{\bar{x}^2}{\sum (x_i - \bar{x})^2}\,}.
```

We estimate these by replacing $\sigma$ with $s$.

````{admonition} STANDARD ERRORS FOR ESTIMATED REGRESSION COEFFICIENTS
:class: tip

The **standard error of the slope** $b_1$ of the least-squares regression line is:
```{math}
\text{SE}_{b_1} 
= \frac{s}{\sqrt{\sum (x_i - \bar{x})^2}}.
```

The **standard error of the intercept** $b_0$ is:
```{math}
\text{SE}_{b_0} 
= s \,\sqrt{\,\frac{1}{n} \;+\; \frac{\bar{x}^2}{\sum (x_i - \bar{x})^2}\,}.
```
````
`````


`````{tab-item} Confidence Intervals and Prediction Intervals

When we substitute a particular value $x^*$ of the explanatory variable into the regression equation and obtain $\hat{y}$, there are two interpretations:

1. **Estimate the mean response** $\mu_y$ at $x = x^*$.
2. **Predict a future observation** $y$ at $x = x^*$.

Prediction intervals are broader than confidence intervals for a mean. Both depend on $s$, the standard deviation about the fitted line.

````{admonition} STANDARD ERRORS FOR $\hat{\mu}$ AND $\hat{y}$
:class: tip

The **standard error of $\hat{\mu}$** is:
```{math}
\text{SE}_{\hat{\mu}}
= s \,\sqrt{\,\frac{1}{n} \;+\; \frac{(x^* - \bar{x})^2}{\sum (x_i - \bar{x})^2}\,}.
```

The **standard error for predicting an individual response** $\hat{y}$ is:
```{math}
\text{SE}_{\hat{y}}
= s \,\sqrt{\,1 \;+\; \frac{1}{n} \;+\; \frac{(x^* - \bar{x})^2}{\sum (x_i - \bar{x})^2}\,}.
```
````

The only difference is the extra “1” inside the square root for the prediction standard error, which accounts for the additional variation of individual responses around the mean.
`````

`````{tab-item} Inference for Correlation

The correlation coefficient measures the strength and direction of **linear** association between two variables. We estimate the population correlation $\rho$ using the sample correlation $r$.

- If $\rho = 0$, there is no linear association.
- If $x$ and $y$ are **jointly Normal**, $\rho = 0$ also implies $x$ and $y$ are independent.


Test for a Zero Population Correlation:

To test $H_0: \rho = 0$, compute the $t$ statistic:

```{math}
t = \frac{r \,\sqrt{\,n - 2\,}}{\sqrt{\,1 - r^2\,}},
```
where $n$ is the sample size. The $P$-value depends on the alternative:

```{math}
\begin{aligned}
H_a\!: \rho > 0 & \quad\Rightarrow\quad P(T \ge t), \\
H_a\!: \rho < 0 & \quad\Rightarrow\quad P(T \le t), \\
H_a\!: \rho \ne 0 & \quad\Rightarrow\quad 2\,P(T \ge |t|).
\end{aligned}
```

````{admonition} TEST FOR ZERO CORRELATION
:class: tip

If $T$ has a $t(n - 2)$ distribution, then for the two-sided alternative the $P$-value is found by comparing $|t|$ to that distribution; one-sided tests use the signed $t$.  
````
```{figure} _image/1205.png
:alt: Textbook box on testing rho equals 0 with t equals r root n minus 2 over root 1 minus r squared and t curves shading P-value tail areas
:align: center
:width: 80%

```

`````
``````

:::{dropdown} Example continued: a confidence interval and a prediction interval at shoe size $x^* = 10$
:open:
The fitted value at $x^* = 10$ is

$$
\hat{\mu}_y = \hat{y} = 52.667 + 1.667 \times 10 = 69.33 \text{ inches}.
$$

**Confidence interval for the mean response** (the *average* height of all size-10 students). With $n = 8$, $\bar{x} = 10.25$, and $\sum (x_i - \bar{x})^2 = 19.5$:

$$
\text{SE}_{\hat{\mu}} = s \sqrt{\frac{1}{n} + \frac{(x^* - \bar{x})^2}{\sum (x_i - \bar{x})^2}}
= 1.491 \sqrt{\frac{1}{8} + \frac{(10 - 10.25)^2}{19.5}}
= 1.491 \times 0.358 = 0.534,
$$

$$
69.33 \pm 2.447 \times 0.534 = 69.33 \pm 1.31
\;\Longrightarrow\; (68.03,\ 70.64).
$$

**Prediction interval for one future observation** (the height of *one particular* size-10 student). The only change is the extra "$1$" under the square root:

$$
\text{SE}_{\hat{y}} = s \sqrt{1 + \frac{1}{8} + \frac{(10 - 10.25)^2}{19.5}}
= 1.491 \times 1.062 = 1.583,
$$

$$
69.33 \pm 2.447 \times 1.583 = 69.33 \pm 3.87
\;\Longrightarrow\; (65.46,\ 73.21).
$$

The prediction interval is almost **three times as wide** ($7.75$ inches versus $2.61$ inches). Both are centered at $69.33$; they differ only in *which question they answer*.
:::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "A confidence interval and a prediction interval at $x^*$ are basically interchangeable — both tell me where $y$ will be for a size-10 student."

**In fact:** they answer different questions. In our example, the CI $(68.03,\ 70.64)$ locates the **average** height of *all* size-10 students; the PI $(65.46,\ 73.21)$ says where **one new** size-10 student's height will land — and it is nearly three times as wide. The gap is structural, not cosmetic: $\text{SE}_{\hat{\mu}}$ contains only line-estimation uncertainty and shrinks toward $0$ as $n$ grows, while $\text{SE}_{\hat{y}}$ also contains the individual's own scatter and can never fall below $s \approx 1.49$.

**Quick check:** if we surveyed $800$ students instead of $8$, which interval would collapse to essentially a single point, and which would remain wide? (The CI collapses onto the population line; the PI settles at roughly $\hat{y} \pm t^* s$ — an individual's personal $\epsilon$ never averages away.)
```

(ch12-appendix)=
## More details on standard errors of mean response and prediction

```{admonition} A question before this section
:class: bridge
For the curious: **where do formulas like $\text{SE}_{b_1} = s\big/\sqrt{\sum (x_i - \bar{x})^2}$ actually come from?** Everything below is the algebra behind the standard errors — the variance rules for random variables, applied to $\hat{\beta}_0 + \hat{\beta}_1 x_0$, reproduce both the CI formula and (after adding the new observation's own $\sigma^2$) the wider PI formula. This appendix is optional for the exam, but it is the shortest honest answer to "why is there an extra $1$ under the prediction-interval square root?"
```

```{math}
:label: eq-linear-model
y_i = \beta_0 + \beta_1 x_i + \varepsilon_i 
\quad\text{where}\quad 
\varepsilon_i \sim \mathcal{N}(0,\sigma^2).
```

Under OLS estimates, $\hat{\beta}_0$ and $\hat{\beta}_1$ have the following properties in **simple** linear regression (one predictor):

- $ \mathrm{Var}(\hat{\beta}_1) = \dfrac{\sigma^2}{\sum_{i=1}^n (x_i - \overline{x})^2},$  
- $ \mathrm{Var}(\hat{\beta}_0) = \sigma^2 \left[\dfrac{1}{n} + \dfrac{\overline{x}^2}{\sum_{i=1}^n (x_i - \overline{x})^2}\right],$ 
- $ \mathrm{Cov}(\hat{\beta}_0,\hat{\beta}_1) = -\,\overline{x}\,\dfrac{\sigma^2}{\sum_{i=1}^n (x_i - \overline{x})^2}.$

For any new point $x_0$, the fitted **mean response** is

```{math}
:label: eq-mean-response
\hat{\mu}_{y_0} \;=\; \hat{\beta}_0 \;+\; \hat{\beta}_1 \, x_0.
```

### Deriving $ \mathrm{Var}(\hat{\mu}_{y_0}) $

```{math}
:label: eq-var-mean-derivation
\begin{aligned}
\mathrm{Var}(\hat{\mu}_{y_0})
&= \mathrm{Var}(\hat{\beta}_0 + x_0\,\hat{\beta}_1) \\
&= \mathrm{Var}(\hat{\beta}_0)
 + x_0^2\,\mathrm{Var}(\hat{\beta}_1)
 + 2\,x_0\,\mathrm{Cov}(\hat{\beta}_0,\hat{\beta}_1).
\end{aligned}
```

Plugging in the standard results from above:

```{math}
:label: eq-var-mean-expand
\begin{aligned}
\mathrm{Var}(\hat{\mu}_{y_0})
&= \sigma^2
\left[\frac{1}{n} + \frac{\overline{x}^2}{\sum (x_i - \overline{x})^2}\right]
\;+\;
x_0^2\; \sigma^2\!\biggl/\!\sum (x_i - \overline{x})^2
\;+\;
2\,x_0 \Bigl(-\,\overline{x}\,\dfrac{\sigma^2}{\sum (x_i - \overline{x})^2}\Bigr) \\
&= \sigma^2 \left[
  \frac{1}{n}
  \;+\;
  \frac{(x_0 - \overline{x})^2}{\sum (x_i - \overline{x})^2}
\right].
\end{aligned}
```

Typically, we do **not** know $\sigma^2$; we replace it by $\mathrm{MSE}$, the mean squared error estimate from the regression. Thus,

```{math}
:label: eq-var-mean-response
\mathrm{Var}(\hat{\mu}_{y_0})
\;=\;
\mathrm{MSE}
\left[
\frac{1}{n}
\;+\;
\frac{(x_0 - \overline{x})^2}{\sum_{i=1}^n (x_i - \overline{x})^2}
\right].
```

Hence, the **standard error** of the estimated mean response at $x_0$ is

```{math}
:label: eq-se-mean-response
\mathrm{SE}_{\hat{\mu}_y}
\;=\;
\sqrt{
   \mathrm{Var}(\hat{\mu}_{y_0})
}
\;=\;
\sqrt{
   \mathrm{MSE}
   \left[
      \frac{1}{n}
      \;+\;
      \frac{(x_0 - \overline{x})^2}{\sum_{i=1}^n (x_i - \overline{x})^2}
   \right]
}.
```


### Future Observation (Prediction Interval)

When predicting a **future** $y$ at $x_0$ — call it $\hat{y}_0$ — we add in the irreducible noise $\sigma^2$ from the new observation itself. The relevant variance is that of the **prediction error** $y_{\text{new}} - \hat{y}_0$:

```{math}
:label: eq-var-prediction
\mathrm{Var}(y_{\text{new}} - \hat{y}_0)
\;=\;
\sigma^2
\Bigl[
  1
  \;+\;
  \frac{1}{n}
  \;+\;
  \frac{(x_0 - \overline{x})^2}{\sum_{i=1}^n (x_i - \overline{x})^2}
\Bigr].
```

Estimating $\sigma^2$ by plugging in $\mathrm{MSE}$, the **standard error** for a future observation (used in a prediction interval) is

```{math}
:label: eq-se-prediction
\mathrm{SE}_{\hat{y}}
\;=\;
\sqrt{\widehat{\mathrm{Var}}(y_{\text{new}} - \hat{y}_0)}
\;=\;
\sqrt{
   \mathrm{MSE}
   \left[
      1
      \;+\;
      \frac{1}{n}
      \;+\;
      \frac{(x_0 - \overline{x})^2}{\sum_{i=1}^n (x_i - \overline{x})^2}
   \right]
}.
```

(ch12-together)=
## Putting It All Together: One Dataset, Three Tests, Two Intervals

Let's close the chapter the way an exam (or a real consulting question) opens it: with a plain-English question and the job of picking — and then executing — the right procedure.

**Part 1 — Which procedure is being asked for?** Match the phrasing of the question to the tool:

* *"Is there a linear relationship between shoe size and height?"* → a test of $H_0\!: \beta_1 = 0$ — and in simple linear regression you have **three equivalent phrasings** of this same null hypothesis:
  * the **slope $t$ test** ($t = b_1/\text{SE}_{b_1} = 4.94$) — natural when the *line* is the object of interest, and the only version that handles one-sided alternatives ($H_a\!: \beta_1 > 0$) and pairs with a confidence interval for $\beta_1$;
  * the **ANOVA $F$ test** ($F = 24.375 = t^2$) — natural when you think in terms of *explained versus unexplained variation*, and the form that generalizes to regression with several predictors;
  * the **correlation test** ($t = r\sqrt{n-2}\big/\sqrt{1-r^2} = 0.896\sqrt{6}\big/\sqrt{1 - 0.802} = 4.94$) — natural when *neither* variable plays the role of explanatory variable and you only care about association, not the line itself.

  All three give $P = 0.0026$ on our data. They are one test wearing three outfits — do not report them as if they were independent pieces of evidence.
* *"**How much** taller, on average, per shoe size?"* → the **confidence interval for $\beta_1$**: $(0.84,\ 2.49)$ inches per size.
* *"How **strong** is the relationship?"* → $r^2 = 0.802$, the proportion of variation in height explained by shoe size — not the $P$-value.
* *"Estimate the **average** height of size-10 students."* → the **CI for the mean response**: $(68.03,\ 70.64)$.
* *"**Predict** the height of my friend, who wears size 10."* → the **prediction interval**: $(65.46,\ 73.21)$.

**Part 2 — The complete four-step slope test**, written out once, exam-style, on the shoe-size data:

1. **State.** $H_0\!: \beta_1 = 0$ versus $H_a\!: \beta_1 \ne 0$, at significance level $\alpha = 0.05$. (In words: mean height does not change with shoe size, versus it does.)
2. **Check.** The 8 students are an SRS; the scatterplot is roughly linear with no outliers; the residuals $0, 1.33, -1.67, 1.67, -1.33, 1.00, -1.67, 0.67$ show no pattern against $x$, roughly constant spread, and no strong departure from Normality. (Remember: we check the *residuals*, never the raw $y$'s.) With $n = 8$ these checks are necessarily rough — proceed, but with appropriate humility.
3. **Compute.** $b_1 = 1.667$, $\text{SE}_{b_1} = 1.491/\sqrt{19.5} = 0.338$, so $t = 1.667/0.338 = 4.94$ with $\text{df} = n - 2 = 6$, giving $P = 2\,P(T \ge 4.94) = 0.0026$.
4. **Conclude.** Since $0.0026 < 0.05$, reject $H_0$. The data give strong evidence of a linear relationship between shoe size and mean height. Better yet, quantify it: we are 95% confident the population slope lies in $(0.84,\ 2.49)$ inches per shoe size, and shoe size explains about $80\%$ of the height variation in this sample.

## Check Your Understanding

:::{dropdown} 1. Software reports $t = 4.94$ for the slope but the ANOVA block got cut off. What is $F$, and what is its $P$-value relative to the $t$ test's?
No new computation needed: in simple linear regression $F = t^2 = (4.94)^2 \approx 24.4$ (exactly $24.375$ in full precision), with degrees of freedom $(1,\ n-2)$. Its $P$-value is *identical* to the two-sided $t$ test's, $0.0026$ — the two are the same test of $H_0\!: \beta_1 = 0$.
:::

:::{dropdown} 2. A friend concludes: "We are 95% confident that a new size-10 student's height is between 68.03 and 70.64 inches." What went wrong?
They used the wrong interval. $(68.03,\ 70.64)$ is the **confidence interval for the mean response** — it locates the *average* height of all size-10 students. A statement about one *new individual* requires the **prediction interval**, $(65.46,\ 73.21)$, which adds the individual's own deviation $\epsilon$ (the extra "$1$" in $\text{SE}_{\hat{y}}$) and is nearly three times as wide.
:::

:::{dropdown} 3. To check the Normality condition, your roommate makes a histogram of the 8 heights and worries that it doesn't look bell-shaped. What should they have plotted, and why?
The **residuals** $e_i = y_i - \hat{y}_i$, not the raw heights. The model assumes the *deviations* $\epsilon_i$ are Normal within each subpopulation; the raw $y$ values mix subpopulations with different means $\beta_0 + \beta_1 x_i$, so their histogram can look non-Normal even when the model is exactly right. (With $n = 8$, any histogram is rough anyway — a Normal quantile plot of the residuals is the better tool.)
:::

