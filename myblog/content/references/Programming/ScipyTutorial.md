+++
title = 'Introduction to SciPy and Linear Programming'
date = 2024-02-10T07:28:44+05:45
categories = ["Engineering","Python"]
draft = false
+++


**SciPy** is an open-source Python library that provides various mathematical algorithms and functions for tasks such as numerical integration, optimization, interpolation, and linear algebra. One of its key modules, `scipy.optimize`, offers optimization routines including linear programming.

**Linear programming** (LP) is a mathematical method used to determine the best possible outcome, typically defined by an objective function, given a set of linear constraints. It has applications in various fields such as economics, engineering, and operations research.

## Installing and Importing SciPy

Before we can use SciPy, we need to install it. we can install SciPy using pip, Python's package manager, by executing the following command in our terminal or command prompt:

```bash
pip install scipy
```

Once installed, we can import SciPy in our Python script using:

```python
from scipy.optimize import linprog
```

## Solving Linear Programming Problems with SciPy

Now, let's dive into solving a linear programming problem using SciPy. We'll go through a step-by-step tutorial using an example problem.

### Example Problem:

**Maximize Z = x + 2y**
Subject to:
- \(2x + y <= 20\)
- \(-4x + 5y <= 10\)
- \(-x + 2y <= -2\)
- \(-x + 5y = 15\)  

_We will convert this maximization problem into a minimization problem as SciPy doesn’t allow us to define maximization problems directly; we must convert them to minimization problems._

**Minimize Z = -x - 2y**

With the same constraints.
### Step 1: Define the Objective Function and Constraints

We'll start by defining the coefficients of the objective function and constraints:

```python
obj = [-1, -2]  # Coefficients of x and y in the objective function (minimize Z)
lhs_ineq = [
    [2, 1],     # Coefficients of x and y in the first inequality constraint
    [-4, 5],    # Coefficients of x and y in the second inequality constraint
    [-1, 2]     # Coefficients of x and y in the third inequality constraint (note the sign change for >= constraint)
]
rhs_ineq = [20, 10, -2]  # Right-hand side values of the inequality constraints
lhs_eq = [[-1, 5]]  # Coefficients of x and y in the equality constraint
rhs_eq = [15]       # Right-hand side value of the equality constraint
```

### Step 2: Define Variable Bounds

Next, we define the bounds for each variable:

```python
bnd = [(0, float("inf")),   # Bounds for x (0 to positive infinity)
       (0, float("inf"))]   # Bounds for y (0 to positive infinity)
```
_Note:This statement is redundant because linprog() takes these bounds(zero to positive infinity) by default_

### Step 3: Solve the Linear Programming Problem

We'll use the `linprog()` function to solve the linear programming problem:

```python
opt = linprog(c=obj, A_ub=lhs_ineq, b_ub=rhs_ineq, A_eq=lhs_eq, b_eq=rhs_eq, bounds=bnd, method="highs")
```
_There are different methods such as highs(prescribed), interior-point(default), simplex and revised simplex (which are outdated in latest scipy version)_
### Step 4: Print the Results

Finally, we print the optimized solution and the optimal value of the objective function:

```python
print(opt)
print(f'The solution is {opt.x} and optimized value is {-1 * opt.fun}')  # Multiplying by -1 since we converted a maximization problem to minimization
```
## Incorporating Results and Explanation

After solving the linear programming problem using both the **Highs** method and the **Simplex** method, let's examine the results.

### Results from Highs Method

```python
message: Optimization terminated successfully. (HiGHS Status 7: Optimal)
        success: True
         status: 0
            fun: -16.818181818181817
              x: [ 7.727e+00  4.545e+00]
            nit: 0
          lower:  residual: [ 7.727e+00  4.545e+00]
                 marginals: [ 0.000e+00  0.000e+00]
          upper:  residual: [       inf        inf]
                 marginals: [ 0.000e+00  0.000e+00]
          eqlin:  residual: [ 0.000e+00]
                 marginals: [-2.727e-01]
        ineqlin:  residual: [ 0.000e+00  1.818e+01  3.364e+00]
                 marginals: [-6.364e-01 -0.000e+00 -0.000e+00]
 mip_node_count: 0
 mip_dual_bound: 0.0
        mip_gap: 0.0
```

- **Success**: The optimization terminated successfully.
- **Status**: Status code 0 indicates that the optimization was successful.
- **Optimal Value (fun)**: The maximum value of the objective function Z is approximately -16.818.
- **Optimal Solution (x)**: The optimal values for variables \(x\) and \(y\) are approximately 7.727 and 4.545, respectively.
- **Iterations (nit)**: The number of iterations performed to reach the optimal solution is 0.
- **Residuals and Marginals**: These values indicate the residuals and marginals for lower and upper bounds, equality constraints, and inequality constraints.
- **MIP Node Count, Dual Bound, Gap**: These values are related to mixed-integer programming (MIP) and are not relevant for this problem.

### Results from Simplex Method

```python
message: Optimization terminated successfully.
 success: True
  status: 0
     fun: -16.818181818181817
       x: [ 7.727e+00  4.545e+00]
     nit: 5
```

- **Success**: The optimization terminated successfully.
- **Status**: Status code 0 indicates that the optimization was successful.
- **Optimal Value (fun)**: The maximum value of the objective function Z is approximately -16.818 (same as Highs method).
- **Optimal Solution (x)**: The optimal values for variables \(x\) and \(y\) are approximately 7.727 and 4.545, respectively (same as Highs method).
- **Iterations (nit)**: The number of iterations performed to reach the optimal solution is 5.


## Limitations of SciPy for Linear Programming

While SciPy provides a convenient interface for solving linear programming problems, it has some limitations:

1. **External Solvers**: SciPy cannot run various external solvers.
2. **Integer Decision Variables**: It cannot work with integer decision variables.
3. **Model Building**: SciPy doesn’t provide classes or functions that facilitate model building, requiring users to define arrays and matrices manually.
4. **Maximization Problems**: SciPy doesn’t allow us to define maximization problems directly; We must convert them to minimization problems.
5. **Constraint Definition**: SciPy doesn’t allow us to define constraints using the greater-than-or-equal-to sign directly; we must use the less-than-or-equal-to sign instead.

Understanding these limitations can help us determine whether SciPy is suitable for our specific linear programming problem or if us need to explore other libraries or approaches. In next tutorial we will dive into other python plugins for optimization problems. 

### References

- [Real Python: Linear Programming in Python](https://realpython.com/linear-programming-python/)
- [SciPy Documentation: Optimization and Root Finding](https://docs.scipy.org/doc/scipy/reference/optimize.html)
- [Wikipedia: Linear programming](https://en.wikipedia.org/wiki/Linear_programming)