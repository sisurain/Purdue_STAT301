# Special Topic: Simple Least Squares Regression in Matrix Form

We have a data set consisting of $n$ paired observations of the predictor/explanatory variable $X$ and the response variable $Y$, i.e., $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$. We wish to fit the model with a regression line:

```{math}
y_n = \beta_0 + \beta_1 \, x_n + \epsilon_n
```

where we have the assumptions: 
- $\mathbb{E}[\epsilon_n \mid x_1, \dots, x_n] = 0$, 
- $\text{Var}[\epsilon_n \mid x_1, \dots, x_n] = \sigma^2$, and 
- $\epsilon_n$ is uncorrelated across measurements.

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
\hat{\beta} = (\mathbf{x}^\top \mathbf{x})^{-1}\,\mathbf{x}^\top \mathbf{y}.
```

A very compact result!


```{figure} _image/1601.png
:alt: two-way table software outputs
:align: center
:width: 100%

```
