+++
title = 'Solving Mixed Integer Nonlinear Programs using Genetic Algorithms'
date = 2024-07-04T18:02:42+05:45
draft = false
+++


### Setting up the Environment

1. **Install the `geneticalgorithm` library**: You can install the `geneticalgorithm` library using pip:
   ```
   pip install geneticalgorithm
   ```

2. **Install NumPy**: The `geneticalgorithm` library relies on NumPy for numerical operations. You can install NumPy using pip:
   ```
   pip install numpy
   ```

Now that your environment is set up, let's solve an MINLP problem using genetic algorithms.

### Solving an MINLP Problem

Consider the following MINLP problem:

```
Maximize: x1 + x2*x1
Subject to:
  -x1 + 2*x2*x1 <= 8
  2*x1 + x2 <= 14
  2*x1 - x2 <= 10
  x1 >= 0, integer
  x2 >= 0
```

We can model and solve this problem using the `geneticalgorithm` library:

```python
import numpy as np
from geneticalgorithm import geneticalgorithm as ga
import time

def main():
    varbounds = np.array([[0, 10], [0, 10]])
    vartype = np.array([['int'], ['real']])
    start = time.time()
    model = ga(function=f, dimension=2, variable_type_mixed=vartype, variable_boundaries=varbounds)
    model.run()
    end = time.time()
    print(f"The time taken to run is {end - start}")

def f(x):
    pen = 0
    if not -x[0] + 2 * x[1] * x[0] <= 8:
        pen = np.inf
    if not 2 * x[0] + x[1] <= 14:
        pen = np.inf
    if not 2 * x[0] - x[1] <= 10:
        pen = np.inf
    return -(x[0] + x[1] * x[0]) + pen  # pen is penalization
    # since GA minimize function

if __name__ == "__main__":
    main()
```

Here's what's happening in the code:

1. We define the variable bounds (`varbounds`) as a NumPy array, specifying the lower and upper bounds for each variable.
2. We define the variable types (`vartype`) as a NumPy array, specifying the type of each variable ('int' for integer and 'real' for continuous).
3. We create a `ga` object by passing the objective function (`f`), the dimension of the problem (2 in this case), the variable types (`variable_type_mixed`), and the variable boundaries (`variable_boundaries`).
4. We run the genetic algorithm using the `run` method of the `ga` object.
5. We calculate the time taken to run the algorithm using the `time` module.
6. We define the objective function (`f`) that takes the decision variables `x` as input and returns the objective value. We also handle the constraints by adding a penalty term (`pen`) to the objective function if any constraint is violated.

When you run this code, it will output the time taken to run the algorithm and the optimal solution.

![](https://images2.imgbox.com/57/03/tpaMwAsU_o.png)

In this tutorial, you learned how to solve a mixed integer nonlinear programming problem using genetic algorithms with the `geneticalgorithm` library in Python. Genetic algorithms are a metaheuristic optimization technique inspired by the process of natural selection. They are particularly useful for solving complex optimization problems with nonlinear objective functions and constraints.
