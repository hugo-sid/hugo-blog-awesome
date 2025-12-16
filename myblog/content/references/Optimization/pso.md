+++
title = 'Solving Mixed Integer Nonlinear Programs using Particle Swarm Optimization'
date = 2024-07-04T18:07:50+05:45
draft = false
+++

### Setting up the Environment

1. **Install the `pyswarm` library**: You can install the `pyswarm` library using pip:
   ```
   pip install pyswarm
   ```

2. **Install NumPy**: The `pyswarm` library relies on NumPy for numerical operations. You can install NumPy using pip:
   ```
   pip install Numpy
   ```

Now that your environment is set up, let's solve an MINLP problem using particle swarm optimization.

### Solving an MINLP Problem

Consider the same MINLP problem from the previous example:

```
Maximize: x1 + x2*x1
Subject to:
  -x1 + 2*x2*x1 <= 8
  2*x1 + x2 <= 14
  2*x1 - x2 <= 10
  x1 >= 0, integer
  x2 >= 0
```

We can model and solve this problem using the `pyswarm` library:

```python
import numpy as np
from pyswarm import pso

def model_obj(x):
    pen = 0
    # Round x[0] to the nearest integer
    x[0] = np.round(x[0], 0)
    if not -x[0] + 2 * x[1] * x[0] <= 8:
        pen = np.inf
    if not 2 * x[0] + x[1] <= 14:
        pen = np.inf
    if not 2 * x[0] - x[1] <= 10:
        pen = np.inf
    return -(x[0] + x[1] * x[0]) + pen

def cons(x):
    return []

lb = [0, 0]
ub = [10, 10]

x0 = [0, 0]

xopt, fopt = pso(model_obj, lb, ub, x0, cons)
print("x =", xopt[0])
print(f"y = {xopt[1]}")
```

Here's what's happening in the code:

1. We define the objective function (`model_obj`) that takes the decision variables `x` as input and returns the objective value. We round `x` to the nearest integer to handle the integer constraint. We also handle the constraints by adding a penalty term (`pen`) to the objective function if any constraint is violated.
2. We define the constraint function (`cons`) as an empty function since there are no additional constraints.
3. We define the lower and upper bounds (`lb` and `ub`) for the decision variables.
4. We define the initial guess (`x0`) for the decision variables.
5. We call the `pso` function from the `pyswarm` library, passing the objective function (`model_obj`), the lower and upper bounds (`lb` and `ub`), the initial guess (`x0`), and the constraint function (`cons`).
6. The `pso` function returns the optimal solution (`xopt`) and the optimal objective value (`fopt`).
7. We print the optimal values of `x` and `y`.

When you run this code, it will output the optimal solution:
![](https://images2.imgbox.com/30/70/DavX2Apn_o.png)
```
x = 5.0
y = 1.29999
```

This indicates that the optimal solution is `x = 5` and `y = 1.3`.

### Conclusion

In this tutorial, you learned how to solve a mixed integer nonlinear programming problem using particle swarm optimization with the `pyswarm` library in Python. Particle swarm optimization is a metaheuristic optimization technique inspired by the social behavior of bird flocking or fish schooling.

The `pyswarm` library provides a convenient way to define the objective function, constraints, and bounds for the decision variables. It automatically handles the optimization process and returns the optimal solution.

Remember to handle the integer constraint by rounding the appropriate variables to the nearest integer. Also, ensure that the constraints are properly defined in the objective function by adding penalty terms when necessary.