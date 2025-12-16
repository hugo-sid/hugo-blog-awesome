+++
title = 'Solving Linear Programs with OR-Tools Chance Constrained'
date = 2024-07-04T17:51:00+05:45
draft = false
+++ 


### Introduction to Linear Programming

Linear programming is a mathematical optimization technique used to find the best solution to a problem with a linear objective function and linear constraints. The goal is to maximize or minimize the objective function while satisfying the given constraints.

A typical LP problem has the following components:

1. **Decision Variables**: The unknown quantities that we want to determine, represented as `x`, `y`, `z`, etc.
2. **Objective Function**: A linear expression involving the decision variables that we want to maximize or minimize.
3. **Constraints**: Linear inequalities or equalities that the decision variables must satisfy.

### Solving an LP Problem with OR-Tools

Let's consider the following LP problem:

```
Maximize: 2x + 2y + 2z
Subject to:
  2x + 7y + 3z <= 25
  3x + 5y + 7z <= 45
  5x + 2y - 6z <= 37
  x, y, z >= 0
```

We can solve this problem using the OR-Tools library in Python:

```python
from ortools.sat.python import cp_model

# Define the model
model = cp_model.CpModel()

# Define variables with upper bounds for CP
x = model.NewIntVar(0, 1000, 'x')
y = model.NewIntVar(0, 1000, 'y')
z = model.NewIntVar(0, 1000, 'z')

# Add constraints
model.Add(2 * x + 7 * y + 3 * z <= 25)
model.Add(3 * x + 5 * y + 7 * z <= 45)
model.Add(5 * x + 2 * y - 6 * z <= 37)

# Define the objective function
model.Maximize(2 * x + 2 * y + 2 * z)

# Solve the model
solver = cp_model.CpSolver()
status = solver.Solve(model)

# Print the results
print(f"Status: {solver.StatusName(status)}")
print(f"Optimized Value = {solver.ObjectiveValue()}")
print(f"x = {solver.Value(x)}")
print(f"y = {solver.Value(y)}")
print(f"z = {solver.Value(z)}")
```

Let's break down the code:

1. **Import the necessary module**: We import the `cp_model` module from the `ortools.sat.python` package.
2. **Define the model**: We create a `CpModel` object, which represents the linear programming problem.
3. **Define the variables**: We create three integer variables `x`, `y`, and `z` using the `NewIntVar` method, with a lower bound of 0 and an upper bound of 1000.
4. **Add constraints**: We add the three constraints to the model using the `Add` method.
5. **Define the objective function**: We define the objective function to be maximized using the `Maximize` method.
6. **Solve the model**: We create a `CpSolver` object and use the `Solve` method to find the optimal solution.
7. **Print the results**: We print the status of the solver, the optimized value, and the values of the decision variables.



