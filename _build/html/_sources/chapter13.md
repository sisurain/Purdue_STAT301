# Multiple Regression

```{admonition} Textbook reference
:class: seealso
This chapter corresponds to **Chapter 11** of *Introduction to the Practice of Statistics* (Moore, McCabe & Craig, 10th ed.). Note that the course chapter numbers (shown in the sidebar) follow our teaching order, which differs from the textbook order.
```

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Write down the **multiple linear regression model** and identify $n$ (cases), $p$ (explanatory variables), the coefficients $\beta_j$, and $\sigma$.
* Interpret each estimated coefficient $b_j$ as a per-unit effect **holding the other predictors fixed** — and explain why a coefficient changes when the set of predictors changes.
* Explain how leaving a relevant predictor out of the model connects to Chapter 3's **confounding** (omitted-variable bias).
* Read software output in the right order: the overall **ANOVA $F$ test** first, then individual **$t$ tests**, then $R^2$ and the regression standard error $s$.
* Given a study description, decide whether it calls for **simple regression, multiple regression, or ANOVA**.
```

```{admonition} Key concepts at a glance
:class: note
[The model and estimation](ch13-model) · [Inference: $t$ tests, the $F$ test, and $R^2$](ch13-inference) · [Putting it all together](ch13-together)
```

```{admonition} Where are we? A question before we start
:class: bridge
In Chapter 10 we predicted a student's height from shoe size alone. But height surely also depends on parent height, on sex, on nutrition. Leaving real predictors **out** of the model does not make their effects disappear — it dumps them into the error term. And if a left-out variable is **correlated with shoe size**, its effect gets partly credited to shoe size, **biasing** the slope: part of what we called "the shoe-size effect" was really mother's height in disguise. This is Chapter 3's **confounding**, wearing regression clothes. The fix is as direct as it sounds: put the other predictors **in** the model. That is exactly what multiple regression does — and this chapter shows what happens to the coefficients when we do.
```

In Chapters 2 and 10, we studied methods for inference in the setting of a linear relationship between a quantitative response variable $y$ and a *single* explanatory variable $x$. In this chapter, we investigate situations in which *multiple* explanatory variables work together to explain, or predict, the response variable.

Here are some examples. See if you can identify the response and explanatory variables as well as determine whether each explanatory variable is quantitative or categorical.

**Data for Multiple Regression**

The data for a simple linear regression problem consist of $n$ pairs of a response variable $y$ and an explanatory variable $x$. Because there are several explanatory variables in multiple regression, the notation needed to describe the data is more elaborate.

Each observation (or case) consists of a value for the response variable and for each of the explanatory variables. Call $x_{ij}$ the value of the $j$th explanatory variable for the $i$th case. The data are then:

```{math}
\begin{aligned}
\text{Case 1:} & \quad (y_1, x_{11}, x_{12}, \ldots, x_{1p}) \\
\text{Case 2:} & \quad (y_2, x_{21}, x_{22}, \ldots, x_{2p}) \\
& \quad \vdots \\
\text{Case n:} & \quad (y_n, x_{n1}, x_{n2}, \ldots, x_{np})
\end{aligned}
```

Here, $n$ is the number of cases, and $p$ is the number of explanatory variables.

Data are often entered into computer regression programs in this format. Each row is a case, and each column corresponds to a different variable.

**Population Multiple Regression Equation**

The simple linear regression model assumes that the mean of the response variable $y$ depends on the explanatory variable $x$ according to a linear equation:

```{math}
\mu_y = \beta_0 + \beta_1 x
```

For any fixed value of $x$, the response $y$ varies Normally about this mean and has a standard deviation $\sigma$ that is the same for all values of $x$.

In the multiple regression setting, the response variable $y$ depends on $p$ explanatory variables, which we denote by $x_1, x_2, \ldots, x_p$. The mean response depends on these variables according to the linear function:

```{math}
\mu_y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_p x_p
```

This expression is the **population regression equation**, and the observed values $y$ vary about their means given by this equation.

As in simple linear regression, we can also think of this model in terms of subpopulations of responses. Each subpopulation corresponds to a particular set of values for all the explanatory variables $x_1, x_2, \ldots, x_p$.

In each subpopulation, $y$ varies Normally with a mean given by the population regression equation. The regression model assumes that the standard deviation $\sigma$ of the responses is the same in all subpopulations.


(ch13-model)=
## The model and estimation

```{admonition} A question before this section
:class: bridge
With one predictor, the slope had a clean reading: "one more shoe size, about $b_1$ more inches of height." With three predictors in the model at once, **what does $b_1$ even mean now?** The crucial phrase — the one that appears in every correct interpretation in this chapter — is **holding the others fixed**. Watch for it in the model, in the coefficient interpretations, and again in the $t$ tests.
```

``````{tab-set}
`````{tab-item} Multiple Linear Regression Model

Similar to simple linear regression, we combine the population regression equation and the assumptions about how the observed $y$ vary about their means to form the **multiple linear regression model**. The subpopulation means describe the FIT part of our conceptual model:

```{math}
\text{DATA} = \text{FIT} + \text{RESIDUAL}.
```

The RESIDUAL part represents how observed $y$ deviate from their means.

We reuse the notation $\epsilon$ for the deviation of an individual observation from its subpopulation mean. These $\epsilon_i$ are assumed to be Normally distributed with mean 0 and the same standard deviation $\sigma$, regardless of the $x$ values.

````{admonition} MULTIPLE LINEAR REGRESSION MODEL
:class: tip

The **multiple linear regression model** is:
```{math}
y_i 
= \beta_0 
  + \beta_1 x_{i1} 
  + \beta_2 x_{i2} 
  + \cdots 
  + \beta_p x_{ip} 
  + \epsilon_i 
\quad \text{for } i = 1, 2, \ldots, n,
```
where the mean response is
```{math}
\mu_y 
= \beta_0 
  + \beta_1 x_1 
  + \beta_2 x_2 
  + \cdots 
  + \beta_p x_p.
```
This is the **population regression equation**. The errors $\epsilon_i$ are independent, Normal(0, $\sigma$).

The parameters of the model are the regression coefficients $\beta_0, \beta_1, \ldots, \beta_p$ and the model standard deviation $\sigma$.
````
`````

`````{tab-item} Interpretation of Multiple Regression Coefficients

The assumption that
```{math}
\mu_y 
= \beta_0 
  + \beta_1 x_1 
  + \beta_2 x_2 
  + \cdots 
  + \beta_p x_p
```
links each subpopulation mean to the regression coefficients.

**Key points** on interpretation:

- $\beta_0$ is the mean of $y$ when all $x$ variables are 0 (often not of direct interest).
- Each $\beta_j$ (for $j \ge 1$) resembles a slope **only** if the other $x$ variables stay fixed.
- If $x$ variables are correlated, changes in one $x$ may coincide with changes in others, complicating direct interpretation.

`````

`````{tab-item} Estimation of the Multiple Regression Parameters

As in simple linear regression, we apply the **least squares method** to estimate the unknown coefficients. Let
```{math}
b_0,\; b_1,\; b_2,\; \ldots,\; b_p
```
be the estimators for
```{math}
\beta_0,\; \beta_1,\; \beta_2,\; \ldots,\; \beta_p.
```
Then, the predicted response for the $i$th observation is:
```{math}
\hat{y}_i 
= b_0 
  + b_1 x_{i1} 
  + b_2 x_{i2} 
  + \cdots 
  + b_p x_{ip}.
```
The **residual** is:
```{math}
\begin{aligned}
e_i 
&= y_i \;-\; \hat{y}_i \\
&= y_i 
   - b_0 
   - b_1 x_{i1} 
   - b_2 x_{i2} 
   - \cdots 
   - b_p x_{ip}.
\end{aligned}
```
The least squares estimates $(b_0, b_1, \ldots, b_p)$ minimize the **sum of squared residuals**:
```{math}
\sum \Bigl(y_i 
      - b_0 
      - b_1 x_{i1} 
      - \cdots 
      - b_p x_{ip}
\Bigr)^2.
```
`````

`````{tab-item} Estimating the Regression Standard Deviation

The actual formulas for these least-squares estimates are more involved in multiple regression, so we rely on statistical software to solve them.

We measure the variability of $y$ around the regression equation by $\sigma^2$. To estimate $\sigma$, we average the squared residuals:

```{math}
s^2 
= \frac{\sum e_i^2}{\,n - p - 1\,}
= \frac{\sum (y_i - \hat{y}_i)^2}{\,n - p - 1\,},
\quad
s = \sqrt{s^2}.
```

````{admonition} ESTIMATING THE REGRESSION PARAMETERS
:class: tip

In multiple regression, **least squares** is used to estimate the population coefficients.

The model standard deviation $\sigma$ is estimated by the **regression standard error**:
```{math}
s 
= \sqrt{
    \frac{1}{\,n - p - 1\,}
    \sum (y_i - \hat{y}_i)^2
  }.
```
````
`````
``````

::::{dropdown} Example: the height study grows a second predictor
:open:
Ten students report their shoe size ($x_1$), their mother's height ($x_2$, inches), and their own height ($y$, inches):

:::{list-table}
:header-rows: 1
:widths: 25 25 25 25

* - Student
  - Shoe size $x_1$
  - Mother's height $x_2$
  - Height $y$
* - 1
  - 7
  - 61
  - 63
* - 2
  - 7.5
  - 63
  - 66
* - 3
  - 8
  - 62
  - 66
* - 4
  - 8.5
  - 64
  - 68
* - 5
  - 9
  - 63
  - 66
* - 6
  - 9.5
  - 66
  - 70
* - 7
  - 10
  - 64
  - 69
* - 8
  - 11
  - 66
  - 70
* - 9
  - 12
  - 67
  - 73
* - 10
  - 13
  - 68
  - 74
:::

**Fit 1 — simple regression** (Chapter 10 style), height on shoe size alone:

```{math}
\hat{y} = 52.75 + 1.65\,x_1, \qquad r^2 = 0.903 .
```

The slope is strongly significant ($P < 0.0001$): each extra shoe size predicts about 1.65 more inches of height.

**Fit 2 — multiple regression**, adding mother's height:

```{math}
\hat{y} = -2.85 + 0.55\,x_1 + 1.03\,x_2, \qquad R^2 = 0.967 .
```

Look at what happened to the shoe-size coefficient: it collapsed from **1.65** to **0.55**. Nothing about the students changed — only the model did.

**Why?** In these data, shoe size and mother's height are highly correlated ($r = 0.93$): students with bigger feet tend to have taller mothers. In Fit 1, mother's height was an *omitted variable*, so shoe size collected the credit for its own effect **plus** much of the mother's-height effect that traveled along with it — the omitted-variable bias promised in the chapter bridge, now visible in the numbers. Once mother's height enters the model, each coefficient describes only its *own* per-unit contribution, **holding the other predictor fixed**.
::::

::::{dropdown} Example: reading the fitted coefficients — "holding the others fixed"
Using the fitted equation $\hat{y} = -2.85 + 0.55\,x_1 + 1.03\,x_2$:

* $b_1 = 0.55$: comparing two students **whose mothers are the same height**, the one whose shoe size is one size larger is predicted to be about 0.55 inches taller. (Check: shoe 10 and mom 65 gives $\hat{y} \approx 69.36$; shoe 11 and mom 65 gives $\hat{y} \approx 69.90$ — a rise of 0.55.)
* $b_2 = 1.03$: comparing two students **with the same shoe size**, each extra inch of mother's height predicts about 1.03 more inches of student height. (Shoe 10, mom 66: $\hat{y} \approx 70.39$.)
* $b_0 = -2.85$: the predicted height when shoe size = 0 and mother's height = 0 inches — a meaningless extrapolation far outside the data, kept only to anchor the plane. Do not interpret it.

The phrase *holding the others fixed* is not decoration — drop it and the interpretation is simply wrong, because in the raw data shoe size and mother's height move together.
::::

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "A coefficient means the same thing in multiple regression as in simple regression — $b_1$ is just 'the effect of $x_1$ on $y$.'"

**In fact:** in multiple regression, $b_1$ is a per-unit effect **holding all the other predictors in the model fixed** — and its value depends on *which* other predictors those are. The example above just showed it: shoe size's coefficient was 1.65 alone, but 0.55 once mother's height entered. Neither number is "wrong"; they answer different questions.

**Quick check:** if we added *father's* height as a third predictor, should we expect the shoe-size coefficient to stay at 0.55? (No — any new predictor correlated with shoe size can shift it again. A coefficient is only defined relative to its model.)
```

(ch13-inference)=
## Confidence intervals, significant tests and ANOVA

```{admonition} A question before this section
:class: bridge
We now have $p$ coefficients, so it is tempting to run $p$ individual $t$ tests and simply see which predictors "win." But didn't we learn in the ANOVA chapter what's wrong with running many tests at once — each test brings its own chance of a false alarm? The overall **$F$ test** asks one question first: *does this set of predictors, as a group, explain anything at all?* Only after that gate do the individual $t$ tests — each one answering "does this predictor add value, **given** the others?" — earn their turn.
```

``````{tab-set}
`````{tab-item} Confidence Intervals & Significance Tests for Regression Coefficients

We can obtain confidence intervals and perform significance tests for each of the regression coefficients $\beta_j$ as we did in simple linear regression. The standard errors of the $b$’s have more complicated formulas, but all are multiples of the estimated model standard deviation $s$. We again rely on statistical software to do these calculations.

**Confidence Intervals & Tests for $\beta_j$**

A level $C$ **confidence interval** for $\beta_j$ is

```{math}
b_j \;\pm\; t^* \,\text{SE}_{b_j},
```

where $\text{SE}_{b_j}$ is the standard error of $b_j$, and $t^*$ is the critical value from the $t(n - p - 1)$ distribution such that the area under the curve between $-t^*$ and $t^*$ is $C$.

To test the hypothesis $H_0\!: \beta_j = \beta_j^*$, compute the **test statistic**:

```{math}
t \;=\; \frac{b_j - \beta_j^*}{\text{SE}_{b_j}}.
```

Most software packages default to testing $H_0\!: \beta_j = 0$. In that case, the test statistic reduces to:

```{math}
t \;=\; \frac{b_j}{\text{SE}_{b_j}}.
```

If $T$ has a $t(n - p - 1)$ distribution, the $P$-value for

- $H_a\!: \beta_j > 0 \quad\Rightarrow\quad P(T \ge t)$
- $H_a\!: \beta_j < 0 \quad\Rightarrow\quad P(T \le t)$
- $H_a\!: \beta_j \ne 0 \quad\Rightarrow\quad 2\,P(T \ge |t|)$


**Software Tips and Prediction Use**

````{admonition} Important
:class: warning

Be **very careful** interpreting $t$ tests and confidence intervals for individual regression coefficients.
````

In **simple** linear regression, the model $\mu_y = \beta_0 + \beta_1 x$ implies $H_0\!: \beta_1 = 0$ means $x$ adds no predictive value for $y$.

In **multiple** regression,
```{math}
\mu_y 
= \beta_0 
  + \beta_1 x_1 
  + \beta_2 x_2 
  + \dots 
  + \beta_p x_p,
```
the hypothesis $H_0\!: \beta_1 = 0$ means $x_1$ adds no value for predicting $y$, **given** that $x_2, \dots, x_p$ are already in the model.

In most software, the same commands that give confidence and prediction intervals in simple regression also work for multiple regression, with the only difference being that we specify multiple explanatory variables instead of just one.
`````

`````{tab-item} ANOVA Table for Multiple Regression

In multiple regression, the **$F$ test** from the **ANOVA table** checks whether all the regression coefficients (except the intercept) are zero.

**ANOVA Table Format**:

:::{list-table} ANOVA Table
:widths: 15 15 20 20 10
:header-rows: 1

* - Source
  - Degrees of Freedom
  - Sum of Squares
  - Mean Square
  - F
* - Model
  - $p$
  - $\sum (\hat{y}_i - \bar{y})^2$
  - SSM / DFM
  - MSM / MSE
* - Error
  - $n - p - 1$
  - $\sum (y_i - \hat{y}_i)^2$
  - SSE / DFE
  - 
* - Total
  - $n - 1$
  - $\sum (y_i - \bar{y})^2$
  - —
  - 

:::


We have 
```{math}
\text{SST} = \text{SSM} + \text{SSE}, 
\quad
\text{DFT} = \text{DFM} + \text{DFE}.
```

The estimate of $\sigma^2$ is again the **mean square error** (MSE) from the ANOVA table:

```{math}
s^2 = \text{MSE}.
```


**Interpretation of the $F$ Statistic**

The ratio $\text{MSM} / \text{MSE}$ is the **$F$ statistic** for testing:

```{math}
H_0\!: \beta_1 = \beta_2 = \cdots = \beta_p = 0
\quad\text{vs.}\quad
H_a\!: \text{at least one of the } \beta_j \text{ is not } 0.
```

Large $F$ values give evidence **against** $H_0$. When $H_0$ is true, $F$ has the $F(p,\,n - p - 1)$ distribution.


**Analysis of Variance $F$ Test (Multiple Regression)**

```{math}
H_0\!: \beta_1 = \beta_2 = \cdots = \beta_p = 0 
\quad\text{vs.}\quad 
H_a\!: \text{at least one } \beta_j \ne 0.
```

```{math}
F = \frac{\text{MSM}}{\text{MSE}},
```

and the $P$-value is $P\bigl(F(p,\,n - p - 1)\,\ge\,F_{\text{obs}}\bigr)$.



**Common Misinterpretation of the $F$ Test**

```{admonition} Common misunderstanding
:class: warning
**Students often think:** "The overall $F$ test came back significant, so every predictor in the model matters."

**In fact:** a common error in multiple regression is to assume that **all** coefficients are nonzero whenever $F$ has a small $P$-value. A significant $F$ only says that *at least one* $\beta_j$ is nonzero.

**Quick check:** in the two-predictor height example, $F = 103.0$ with $P < 0.0001$ — yet the individual $t$ test for shoe size gives $P = 0.13$. Which predictors matter is a question for the individual $t$ tests (each one *given* the others), not for $F$.
```

The $F$ test provides an **overall** assessment of the regression model in explaining $y$, while the **individual $t$ tests** look at each variable’s importance **given** the others. Especially with correlated explanatory variables, a small $P$-value for $F$ does not guarantee each $\beta_j$ is statistically significant.
`````

`````{tab-item} Squared multiple correlation $R^2$


For simple linear regression, we noted that the square of the sample correlation could be written as the ratio of SSM to SST and could be interpreted as the proportion of variation in $y$ explained by $x$. The ratio of SSM to SST is routinely calculated for multiple regression and still can be interpreted as the proportion of explained variation. The difference is that it relates to the collection of explanatory variables in the model.



**The statistic**
```{math}
R^2 = \frac{\text{SSM}}{\text{SST}} = \frac{\sum (\hat{y}_i - \bar{y})^2}{\sum (y_i - \bar{y})^2}
```

*is the proportion of the variation of the response variable $y$ that is explained by the explanatory variables $x_1, x_2, \ldots, x_p$ in a multiple linear regression.*

We use a capital $R$ here to reinforce the fact that this statistic depends on a collection of explanatory variables. Often, $R^2$ is multiplied by 100 and expressed as a percent. The square root of $R^2$, called the **multiple correlation coefficient**, is the correlation between the observations $y_i$ and the predicted values $\hat{y}_i$. Some software provides a scatterplot of this relationship to help visualize the predictive strength of the model.


`````

`````{tab-item} Tests

```{figure} _image/1206.png
:alt: Textbook box on t confidence intervals and tests for each multiple regression coefficient beta j using t equals bj over SE with n-p-1 df
:align: center
:width: 80%

```
```{figure} _image/1207.png
:alt: Textbook box on the multiple regression ANOVA F test that all beta j equal 0 using F equals MSM over MSE with p and n-p-1 degrees of freedom
:align: center
:width: 80%

```



`````

``````

(ch13-together)=
## Putting It All Together: Which Procedure, and in What Order?

**Part 1 — identify the procedure.** When a problem hands you a quantitative response variable, ask two questions about the explanatory side: *how many* explanatory variables, and are they *quantitative or categorical*?

* **One quantitative predictor** → **simple linear regression** (Chapter 10): one slope, one $t$ test.
* **Two or more quantitative predictors** → **multiple regression** (this chapter): several slopes, an overall $F$ test, then individual $t$ tests.
* **One categorical predictor** (group membership) → **ANOVA**: compare group means with an $F$ test.
* (**Both variables categorical?** Then there are no means to compare at all — that is the next chapter's territory: two-way tables.)

Three quick drills:

1. Predict exam score from hours studied. (*One quantitative predictor → simple regression.*)
2. Predict exam score from hours studied, hours slept, and prior GPA. (*Three quantitative predictors → multiple regression.*)
3. Compare mean exam scores across three lecture sections. (*One categorical predictor with three levels → ANOVA.*)

**Part 2 — the two-predictor height model, start to finish.** Here is the full analysis of the model $\text{height} = \beta_0 + \beta_1\,\text{shoe} + \beta_2\,\text{mom} + \epsilon$ with $n = 10$ and $p = 2$, in the order a statistician reads the output.

**Step 1 — the overall $F$ test first.** From the ANOVA table: $\text{SSM} = 101.07$ with $\text{DFM} = p = 2$, $\text{SSE} = 3.43$ with $\text{DFE} = n - p - 1 = 7$, $\text{SST} = 104.50$ with $\text{DFT} = 9$. So $\text{MSM} = 50.53$, $\text{MSE} = 0.49$, and

```{math}
F = \frac{\text{MSM}}{\text{MSE}} = \frac{50.53}{0.49} = 103.0 ,
```

compared with the $F(2, 7)$ distribution ($P < 0.0001$; the 0.05 critical value is 4.74). We reject $H_0\!: \beta_1 = \beta_2 = 0$: the two predictors, as a group, explain height. The gate is open.

**Step 2 — individual $t$ tests, each "given the other."** With $\text{df} = 7$ (so $t^* = 2.365$ for 95% confidence):

* Mother's height: $b_2 = 1.03$, $\text{SE}_{b_2} = 0.28$, $t = 3.69$, $P = 0.008$ — significant *given shoe size*. A 95% confidence interval is $1.03 \pm 2.365 \times 0.28$, i.e., about $(0.37,\ 1.69)$.
* Shoe size: $b_1 = 0.55$, $\text{SE}_{b_1} = 0.32$, $t = 1.70$, $P = 0.13$ — **not** significant *given mother's height*. Its 95% interval, about $(-0.22,\ 1.31)$, contains 0.

Note carefully what Step 2 does **not** say: shoe size is not "unrelated to height" — the simple regression showed a strong relationship ($P < 0.0001$). It says shoe size adds little *once mother's height is already in the model*, exactly the pattern the correlated-predictors warning anticipated.

**Step 3 — how much is explained.** $R^2 = \text{SSM}/\text{SST} = 101.07/104.50 = 0.967$: the two predictors together explain about 96.7% of the variation in these students' heights. The regression standard error is $s = \sqrt{\text{MSE}} = 0.70$ inches — the typical size of a prediction miss.

The order matters: $F$ first (*is there anything here?*), then the $t$'s (*which predictors, given the others?*), then $R^2$ and $s$ (*how much, and how precisely?*).

## Check Your Understanding

:::{dropdown} 1. In the multiple model, shoe size's $t$ test gives $P = 0.13$. A student concludes "shoe size is unrelated to height." What is wrong?
The $t$ test in multiple regression is conditional: it asks whether shoe size adds predictive value **given that mother's height is already in the model**. In the simple regression, shoe size was strongly related to height ($P < 0.0001$). Because the two predictors are highly correlated ($r = 0.93$), mother's height already carries most of the information shoe size would contribute. "Not significant given the others" is not "unrelated."
:::

:::{dropdown} 2. A model uses $p = 4$ predictors with $n = 30$ cases. What are the degrees of freedom for the individual $t$ tests and for the overall $F$ test?
The error degrees of freedom are $n - p - 1 = 30 - 4 - 1 = 25$. Each $t$ test uses the $t(25)$ distribution; the overall $F$ test uses the $F(4,\ 25)$ distribution ($\text{DFM} = p = 4$, $\text{DFE} = 25$).
:::

:::{dropdown} 3. A friend argues: "$R^2$ rose from 0.903 to 0.967 when we added mother's height, and $R^2$ always rises when you add a variable — so the increase proves nothing." Is the increase meaningful here?
The friend's premise is right: $R^2$ never decreases when a predictor is added, even a useless one, so an increase *by itself* proves nothing. That is exactly why we do not judge a new predictor by $R^2$ alone — we test it. Here the $t$ test for mother's height (given shoe size) gives $t = 3.69$, $P = 0.008$: the improvement is real, not an automatic bookkeeping gain.
:::


