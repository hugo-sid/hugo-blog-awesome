+++
title = 'Solving Linear Problems Using Pulp'
date = 2024-07-04T16:55:10+05:45
draft = false
+++

This guide explains how to use Pulp, a Python library for linear programming, to solve optimization problems. Pulp is particularly suitable for linear programming (LP) problems and provides an easy-to-use interface for defining variables, constraints, and objective functions.

### Installation

Before using Pulp, make sure you have Cython installed, then install Pulp itself:

1. **Install Cython**: If you haven't installed Cython yet, run:
   ```bash
   pip install cython
   ```

2. **Install Pulp**: Install Pulp using pip:
   ```bash
   pip install pulp
   ```

### Example Problem

In this example, we'll solve a linear programming problem from S. Vedula's book (Problem 2.2.6) using Pulp.

**Objective:** Maximize 7x + 5y

**Constraints:**
1. 2x + 3y <= 12
2. 3x + y >= 6
3. 5x + 3y <=> 15

### Step-by-Step Explanation

#### Step 1: Import Pulp

Import the Pulp module using the alias `pl`:
```python
import pulp as pl
```

#### Step 2: Create a Linear Programming Problem

Create an LP problem named 'Example' to maximize the objective function:
```python
model = pl.LpProblem('Example', pl.LpMaximize)
```

#### Step 3: Define Decision Variables

Define the decision variables `x` and `y` with lower bounds of 0 and upper bounds of 100:
```python
x = pl.LpVariable('x', 0, 100)
y = pl.LpVariable('y', 0, 100)
```

#### Step 4: Add Constraints

Add the constraints to the model using the `+=` operator:
```python
model += 2*x + 3*y <= 12
model += 3*x + y >= 6
model += 5*x + 3*y <= 15
```

#### Step 5: Set the Objective Function

Set the objective function to maximize \(7x + 5y\). Notice that you don't need to explicitly specify `model +=` for the objective function; Pulp recognizes it based on the lack of bounds:
```python
model += 7*x + 5*y  # Pulp recognizes this as the objective function to maximize
```

#### Step 6: Solve the Model

Solve the LP problem using the `solve()` method:
```python
status = model.solve()
```
![](https://images2.imgbox.com/f5/63/ir1fmUIy_o.png)

#### Step 7: Retrieve and Print the Solution

Retrieve the optimal values of `x` and `y` using `pl.value()` and print them:
```python
x_value = pl.value(x)
y_value = pl.value(y)
print(f'Optimal values: x = {x_value}, y = {y_value}')
```

### Complete Code

Here is the complete code with all the steps:

```python
import pulp as pl

# Create an LP problem named 'Example' to maximize
model = pl.LpProblem('Example', pl.LpMaximize)

# Define decision variables with bounds
x = pl.LpVariable('x', 0, 100)
y = pl.LpVariable('y', 0, 100)

# Add constraints
model += 2*x + 3*y <= 12
model += 3*x + y >= 6
model += 5*x + 3*y <= 15

# Set the objective function to maximize (implicitly)
model += 7*x + 5*y  # Pulp recognizes this as the objective function to maximize

# Solve the model
status = model.solve()

# Retrieve and print the optimal values of x and y
x_value = pl.value(x)
y_value = pl.value(y)
print(f'Optimal values: x = {x_value}, y = {y_value}')
```

### Summary

This script demonstrates how to use Pulp to define and solve a linear programming problem. Pulp simplifies the process of modeling LP problems by providing an intuitive syntax for defining variables, constraints, and objectives, making it a valuable tool for optimization tasks in various domains.