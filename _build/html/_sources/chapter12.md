# Chapter 10: Inference for Regression

In this chapter, we will study the <span style="color:#cfb991">**inference for regression**</span>. In the previous chapter, when we had one sample—one dataset—we could plot a regression line in that scatterplot. But what if we have a different sample, a different dataset from the population? We might end up with a different regression line. 

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

## Simple Linear Regression

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
- Residuals: Differences between observed and predicted $y$ values.
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
:alt: population regression line
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

In reality, we cannot observe all the data points for each subpopulation; we only have a sample of data points for them. Thus, we can only obtain the estimates, $b_0$ and $b_1$, for the true parameters, $\beta_0$ and $\beta_1$, respectively.




