# Special Topic: Simple Least Squares Regression in Matrix Form

```{admonition} Note
:class: seealso
This is an optional special topic beyond the required course material, for students who want to see how regression is actually computed by software.
```

```{admonition} Learning objectives
:class: tip
After this chapter, you will be able to:
* Write the simple linear regression model in **matrix form** $\mathbf{y} = \mathbf{x}\beta + \boldsymbol{\epsilon}$, and explain the role of the column of 1's in the **design matrix**.
* Express the least-squares criterion as $\frac{1}{n}\mathbf{e}^\top\mathbf{e}$ and follow the gradient derivation of the **normal equations**.
* Compute $\hat{\beta} = (\mathbf{x}^\top\mathbf{x})^{-1}\mathbf{x}^\top\mathbf{y}$ by hand for a small dataset, and verify it matches the familiar formulas $b_1 = r\,s_y/s_x$ and $b_0 = \bar{y} - b_1\bar{x}$.
* Explain why the matrix formula is the one **software actually uses**, and why it generalizes to multiple predictors while the $r\,s_y/s_x$ formula does not.
```

```{admonition} Where are we? Same regression, one line of linear algebra
:class: bridge
Everything in this chapter ends in a single line: $\hat{\beta} = (\mathbf{x}^\top\mathbf{x})^{-1}\mathbf{x}^\top\mathbf{y}$. Why bother, when we already have $b_1 = r\,s_y/s_x$? Two reasons. First, this is **literally how software computes it** — when you call a regression routine, a matrix expression like this (or a numerically safer cousin) is what runs. Second, unlike the $r\,s_y/s_x$ formula, the matrix formula **generalizes untouched to any number of predictors**: add more columns to $\mathbf{x}$ and the same line still delivers every coefficient. This chapter is the doorway from STAT 301 to real statistical computing.
```

We have a data set consisting of $n$ paired observations of the predictor/explanatory variable $X$ and the response variable $Y$, i.e., $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$. We wish to fit the model with a regression line:

```{math}
y_i = \beta_0 + \beta_1 \, x_i + \epsilon_i, \qquad i = 1, \dots, n,
```

where we have the assumptions, for each $\epsilon_i$: 
- $\mathbb{E}[\epsilon_i \mid x_1, \dots, x_n] = 0$, 
- $\text{Var}[\epsilon_i \mid x_1, \dots, x_n] = \sigma^2$, and 
- the $\epsilon_i$ are uncorrelated across measurements.

The parameters are $\beta_0,\ \beta_1,$ and $\sigma$.


## The Matrix Representation

Group all of the observations of the response into a single $n\times 1$ column vector $\mathbf{y}$:

```{math}
\mathbf{y} =
\begin{bmatrix}
y_1 \\
y_2 \\
\vdots \\
y_n
\end{bmatrix}
```

Similarly, group the two coefficients into a single $2 \times 1$ vector:

```{math}
\beta =
\begin{bmatrix}
\beta_0 \\
\beta_1
\end{bmatrix}
```

We also group the observations of the predictor variable:

```{math}
\mathbf{x} =
\begin{bmatrix}
1 & x_1 \\
1 & x_2 \\
\vdots & \vdots \\
1 & x_n
\end{bmatrix}
```

This is an $n \times 2$ matrix, where the first column is all 1’s (for the intercept) and the second column holds the actual $X$ values. Then:

```{math}
\mathbf{x}\beta =
\begin{bmatrix}
\beta_0 + \beta_1 x_1 \\
\beta_0 + \beta_1 x_2 \\
\vdots \\
\beta_0 + \beta_1 x_n
\end{bmatrix}
```

i.e., $\mathbf{x}\beta$ is the $n \times 1$ vector of fitted predictions. The matrix $\mathbf{x}$ is often called the **design matrix**. Thus:

```{math}
\mathbf{y} = \mathbf{x}\,\beta + \boldsymbol{\epsilon}.
```


## Mean Squared Error in Matrix Form

At each data point, using the coefficients $\hat{\beta}$ results in some error of prediction, so we have $n$ such errors forming the vector:

```{math}
\mathbf{e}(\hat{\beta}) = \mathbf{y} - \mathbf{x}\,\hat{\beta}.
```

When deriving the least squares estimator, we want to find $\hat{\beta}$ that minimizes the **mean squared error** (MSE):

```{math}
MSE(\hat{\beta}) = \frac{1}{n}\,\sum_{i=1}^{n} e_i^2(\hat{\beta}).
```

(Note: here "MSE" is the average squared error used as the objective for minimization; it is not the same quantity as the MSE $= SSE/(n-2)$ used in regression inference. The two differ only by a constant factor, so the minimizing $\hat{\beta}$ is unchanged.)

In matrix form:

```{math}
MSE(\hat{\beta}) = \frac{1}{n} \,\mathbf{e}^\top \mathbf{e}.
```

To see this clearly,

```{math}
\mathbf{e}^\top \mathbf{e}
= [\,e_1,\ e_2,\ \dots,\ e_n\,]
\begin{bmatrix}
e_1 \\ 
e_2 \\ 
\vdots \\
e_n
\end{bmatrix}
= \sum_{i=1}^n e_i^2.
```



## Expanding the MSE Matrix

```{math}
\begin{aligned}
MSE(\hat{\beta})
&= \frac{1}{n}\,\mathbf{e}^\top \mathbf{e}\\
&= \frac{1}{n}\,(\mathbf{y} - \mathbf{x}\,\hat{\beta})^\top (\mathbf{y} - \mathbf{x}\,\hat{\beta})\\
&= \frac{1}{n}\,\bigl(\mathbf{y}^\top - \hat{\beta}^\top \mathbf{x}^\top\bigr)\,\bigl(\mathbf{y} - \mathbf{x}\,\hat{\beta}\bigr)\\
&= \frac{1}{n}\,\bigl(\mathbf{y}^\top \mathbf{y}
   \;-\;\mathbf{y}^\top \mathbf{x}\,\hat{\beta}
   \;-\;\hat{\beta}^\top \mathbf{x}^\top \mathbf{y}
   \;+\;\hat{\beta}^\top \mathbf{x}^\top \mathbf{x}\,\hat{\beta}\bigr).
\end{aligned}
```

Since $\bigl(\mathbf{y}^\top \mathbf{x}\,\hat{\beta}\bigr)$ is a scalar, we have $\mathbf{y}^\top \mathbf{x}\,\hat{\beta} = \hat{\beta}^\top \mathbf{x}^\top \mathbf{y}$. Thus:

```{math}
MSE(\hat{\beta})
= \frac{1}{n}\,\Bigl(\mathbf{y}^\top \mathbf{y}
  \;-\;2\,\hat{\beta}^\top \mathbf{x}^\top \mathbf{y}
  \;+\;\hat{\beta}^\top \mathbf{x}^\top \mathbf{x}\,\hat{\beta}\Bigr).
```



## Minimizing the MSE

We first compute the gradient of $MSE(\hat{\beta})$ w.r.t. $\hat{\beta}$:

```{math}
\nabla\,MSE(\hat{\beta})
= \frac{1}{n}\,\bigl(\nabla\,\mathbf{y}^\top \mathbf{y}
   \;-\;2\,\nabla\,\hat{\beta}^\top \mathbf{x}^\top \mathbf{y}
   \;+\;\nabla\,\hat{\beta}^\top \mathbf{x}^\top \mathbf{x}\,\hat{\beta}\bigr).
```

But $\nabla\,\mathbf{y}^\top \mathbf{y} = \mathbf{0}$ (it’s constant in $\hat{\beta}$), so:

```{math}
\nabla\,MSE(\hat{\beta})
= \frac{1}{n}\,\bigl(\mathbf{0}
   \;-\;2\,\mathbf{x}^\top \mathbf{y}
   \;+\;2\,\mathbf{x}^\top \mathbf{x}\,\hat{\beta}\bigr)
= \frac{2}{n}\,\bigl(\mathbf{x}^\top \mathbf{x}\,\hat{\beta} - \mathbf{x}^\top \mathbf{y}\bigr).
```

Setting this to zero:

```{math}
\mathbf{x}^\top \mathbf{x}\,\hat{\beta} \;-\;\mathbf{x}^\top \mathbf{y}
= \mathbf{0}.
```

Hence,

```{math}
\hat{\beta} = (\mathbf{x}^\top \mathbf{x})^{-1}\,\mathbf{x}^\top \mathbf{y},
```

where $\mathbf{x}^\top \mathbf{x}$ is invertible provided the $x_i$ are not all equal.

A very compact result!

:::{dropdown} Example: the formula by hand, on three points
:open:
Take the tiniest interesting dataset: $x = (1, 2, 3)$ and $y = (2, 3, 5)$.

**Step 1 — Build the design matrix** (a column of 1's, then the $x$ values):

```{math}
\mathbf{x} =
\begin{bmatrix}
1 & 1 \\
1 & 2 \\
1 & 3
\end{bmatrix},
\qquad
\mathbf{y} =
\begin{bmatrix}
2 \\ 3 \\ 5
\end{bmatrix}.
```

**Step 2 — Compute $\mathbf{x}^\top\mathbf{x}$ and $\mathbf{x}^\top\mathbf{y}$.** Each entry is a simple sum: $n = 3$, $\sum x_i = 6$, $\sum x_i^2 = 1 + 4 + 9 = 14$, $\sum y_i = 10$, $\sum x_i y_i = 2 + 6 + 15 = 23$:

```{math}
\mathbf{x}^\top\mathbf{x} =
\begin{bmatrix}
3 & 6 \\
6 & 14
\end{bmatrix},
\qquad
\mathbf{x}^\top\mathbf{y} =
\begin{bmatrix}
10 \\ 23
\end{bmatrix}.
```

**Step 3 — Invert the $2\times 2$ matrix.** The determinant is $3 \cdot 14 - 6 \cdot 6 = 6$, so

```{math}
(\mathbf{x}^\top\mathbf{x})^{-1} = \frac{1}{6}
\begin{bmatrix}
14 & -6 \\
-6 & 3
\end{bmatrix}.
```

**Step 4 — Multiply:**

```{math}
\hat{\beta} = \frac{1}{6}
\begin{bmatrix}
14 & -6 \\
-6 & 3
\end{bmatrix}
\begin{bmatrix}
10 \\ 23
\end{bmatrix}
= \frac{1}{6}
\begin{bmatrix}
140 - 138 \\
-60 + 69
\end{bmatrix}
= \frac{1}{6}
\begin{bmatrix}
2 \\ 9
\end{bmatrix}
=
\begin{bmatrix}
1/3 \\ 3/2
\end{bmatrix}.
```

So $b_0 = 1/3$ and $b_1 = 1.5$: the fitted line is $\hat{y} = \tfrac{1}{3} + 1.5\,x$.

**Step 5 — Confirm against the familiar formulas.** With $\bar{x} = 2$, $\bar{y} = 10/3$, $s_x = 1$, $s_y \approx 1.528$, and $r \approx 0.982$:

```{math}
b_1 = r\,\frac{s_y}{s_x} \approx 0.982 \times \frac{1.528}{1} = 1.5,
\qquad
b_0 = \bar{y} - b_1\bar{x} = \frac{10}{3} - 1.5 \times 2 = \frac{1}{3}.
```

Identical. The matrix route and the summary-statistics route are the same estimator wearing different clothes — but only the matrix route survives when you add a second predictor column to $\mathbf{x}$.
:::


```{figure} _image/1601.png
:alt: Least-squares regression line y hat equals b0 plus b1 x, with slope b1 equals r times sy over sx and intercept b0 equals y bar minus b1 x bar
:align: center
:width: 100%

```

## Check Your Understanding

:::{dropdown} Suppose we add a second predictor, so the model becomes $y_i = \beta_0 + \beta_1 x_{i1} + \beta_2 x_{i2} + \epsilon_i$. What changes in the matrix solution $\hat{\beta} = (\mathbf{x}^\top\mathbf{x})^{-1}\mathbf{x}^\top\mathbf{y}$ — and what would we need for it to still exist?
Remarkably little changes: the design matrix $\mathbf{x}$ gains one column (it becomes $n \times 3$: a column of 1's, then the $x_{i1}$'s, then the $x_{i2}$'s), $\beta$ becomes $3 \times 1$, and the *same formula* $\hat{\beta} = (\mathbf{x}^\top\mathbf{x})^{-1}\mathbf{x}^\top\mathbf{y}$ delivers all three coefficients at once — now inverting a $3 \times 3$ matrix instead of a $2 \times 2$. The formula $b_1 = r\,s_y/s_x$ has no such extension; this is exactly why software works in matrix form. For the solution to exist, $\mathbf{x}^\top\mathbf{x}$ must be invertible, which requires the columns of $\mathbf{x}$ to be linearly independent — no predictor may be constant or an exact linear combination of the others (in the simple-regression case, this reduces to "the $x_i$ are not all equal").
:::
