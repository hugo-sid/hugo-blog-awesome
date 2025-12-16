+++
title = 'Linear Programming with OR-Tools in Python'
date = 2024-07-04T16:45:57+05:45
draft = false
+++

This guide will help you understand how to solve a simple linear programming problem using the OR-Tools library in Python. Linear programming helps us find the best outcome (such as maximum profit or lowest cost) under a given set of constraints.

#### Step-by-Step Explanation

1. **Install OR-Tools Library**
   First, you need to install the OR-Tools library. This library contains tools for optimization, including linear programming.
   ```bash
   pip install ortools
   ```

2. **Import the OR-Tools Linear Solver**
   We import the necessary module from OR-Tools:
   ```python
   from ortools.linear_solver import pywraplp
   ```

3. **Create a Solver**
   We create a solver object using the `pywraplp.Solver.CreateSolver` method. Here, we use "GLOP", which stands for Google's Linear Optimization Package.
   ```python
   solver = pywraplp.Solver.CreateSolver("GLOP")
   ```

4. **Define Variables**
   We define the variables we want to solve for. In this case, we have two variables, `x` and `y`. We also set their lower and upper bounds (0 to 100).
   ```python
   x = solver.NumVar(0, 100, 'x')
   y = solver.NumVar(0, 100, 'y')
   ```

5. **Add Constraints**
   We add the constraints to our problem. Constraints are conditions that our solution must satisfy.
   ```python
   solver.Add(2*x + 3*y >= 15)  # First constraint
   solver.Add(3*x + 5*y <= 60)  # Second constraint
   solver.Add(x + y == 18)      # Third constraint
   ```

6. **Define the Objective Function**
   We define our objective function, which is what we want to maximize (or minimize). Here, we aim to maximize the expression `5*x + 8*y`.
   ```python
   solver.Maximize(5*x + 8*y)
   ```

7. **Solve the Problem**
   We call the `Solve` method to find the optimal solution.
   ```python
   results = solver.Solve()
   ```

8. **Print the Results**
   We print the values of `x` and `y` that give the optimal solution.
   ```python
   print(f"x: {x.solution_value()}")
   print(f"y: {y.solution_value()}")
   ```
![](https://images2.imgbox.com/77/7a/0g1o3VeX_o.png)
9. **Check for Optimal Solution**
   We check if the solver found an optimal solution and print a confirmation message.
   ```python
   if results == pywraplp.Solver.OPTIMAL:
       print("Optimal Found")
   ```

### Complete Code

Here is the complete code with all the steps explained:
```python
# First: pip install ortools
from ortools.linear_solver import pywraplp

# Create the solver
solver = pywraplp.Solver.CreateSolver("GLOP")

# Define the variables with their bounds
x = solver.NumVar(0, 100, 'x')
y = solver.NumVar(0, 100, 'y')

# Add the constraints
solver.Add(2 * x + 3 * y >= 15)  # First constraint
solver.Add(3 * x + 5 * y <= 60)  # Second constraint
solver.Add(x + y == 18)          # Third constraint

# Define the objective function to maximize
solver.Maximize(5 * x + 8 * y)

# Solve the problem
results = solver.Solve()

# Print the results
print(f"x: {x.solution_value()}")
print(f"y: {y.solution_value()}")

# Check if an optimal solution was found
if results == pywraplp.Solver.OPTIMAL:
    print("Optimal Found")
```

