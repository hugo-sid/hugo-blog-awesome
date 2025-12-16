+++
title = 'Solving Optimization Problems Using Pyomo'
date = 2024-07-04T16:52:25+05:45
draft = false
+++


This guide explains how to use Pyomo, a Python-based open-source optimization modeling language, to solve optimization problems. Pyomo allows you to define optimization models, set constraints, and specify objective functions easily.

### Example Problem Using Pyomo

In this example, we will use Pyomo to solve a linear programming problem with the following characteristics:

**Objective:** Minimize 3x1 + 4x2

**Constraints:**
1. x1 + 3x2 >= 15
2. 3x1 + 5x2 <= 72
3. 2x1 + x2 = 24

### Step-by-Step Solution with Pyomo

#### Step 1: Import Pyomo Modules

First, import the necessary modules from Pyomo:
```python
import pyomo.environ as pyo
from pyomo.opt import SolverFactory
```

#### Step 2: Create a Concrete Model

Create a concrete model instance using `pyo.ConcreteModel()`:
```python
model = pyo.ConcreteModel()
```

#### Step 3: Define Variables

Define the decision variables `x1` and `x2` with their bounds:
```python
model.x1 = pyo.Var(bounds=(0, 100))
model.x2 = pyo.Var(bounds=(0, 100))
```

#### Step 4: Add Constraints

Add the constraints to the model using `pyo.Constraint(expr=...)`:
```python
model.C1 = pyo.Constraint(expr=model.x1 + 3 * model.x2 >= 15)
model.C2 = pyo.Constraint(expr=3 * model.x1 + 5 * model.x2 <= 72)
model.C3 = pyo.Constraint(expr=2 * model.x1 + model.x2 == 24)
```

#### Step 5: Set the Objective Function

Set the objective function that we want to minimize using `pyo.Objective(expr=..., sense=minimize)`:
```python
model.obj = pyo.Objective(expr=3 * model.x1 + 4 * model.x2, sense=minimize)
```

#### Step 6: Solve the Model

Select a solver (e.g., GLPK) using `SolverFactory` and solve the model:
```python
opt = SolverFactory('glpk')
results = opt.solve(model)
```

#### Step 7: Check and Print the Results

Check the solver status and print the optimal values of `x1` and `x2`:
```python
if results.solver.status == pyo.SolverStatus.ok and results.solver.termination_condition == pyo.TerminationCondition.optimal:
    x1_value = pyo.value(model.x1)
    x2_value = pyo.value(model.x2)
    print(f'Optimal values: x1 = {x1_value}, x2 = {x2_value}')
else:
    print('No feasible solution found.')
    print(f'Solver Status: {results.solver.status}')
    print(f'Termination Condition: {results.solver.termination_condition}')
```

#### Step 8: Print the Model Details

Print the detailed structure of the model using `model.pprint()` to inspect variable bounds, constraints, and the objective function setup:
```python
model.pprint()
```

![](https://images2.imgbox.com/bb/67/R7hF8aIb_o.png)
### Complete Code

Here is the complete code with all the steps:

```python
import pyomo.environ as pyo
from pyomo.opt import SolverFactory

# Create the model
model = pyo.ConcreteModel()

# Define the variables with their bounds
model.x1 = pyo.Var(bounds=(0, 100))
model.x2 = pyo.Var(bounds=(0, 100))

# Add the constraints
model.C1 = pyo.Constraint(expr=model.x1 + 3 * model.x2 >= 15)
model.C2 = pyo.Constraint(expr=3 * model.x1 + 5 * model.x2 <= 72)
model.C3 = pyo.Constraint(expr=2 * model.x1 + model.x2 == 24)

# Set the objective function to minimize
model.obj = pyo.Objective(expr=3 * model.x1 + 4 * model.x2, sense=pyo.minimize)

# Solve the model
opt = SolverFactory('glpk')
results = opt.solve(model)

# Check solver status and print the results
if results.solver.status == pyo.SolverStatus.ok and results.solver.termination_condition == pyo.TerminationCondition.optimal:
    x1_value = pyo.value(model.x1)
    x2_value = pyo.value(model.x2)
    print(f'Optimal values: x1 = {x1_value}, x2 = {x2_value}')
else:
    print('No feasible solution found.')
    print(f'Solver Status: {results.solver.status}')
    print(f'Termination Condition: {results.solver.termination_condition}')

# Print the model details
model.pprint()
```


## Example 2
```python
import pyomo.environ as pyo
from pyomo.environ import * 
from pyomo.opt import SolverFactory
import time

# Create model
model = pyo.ConcreteModel()

# Create variables
model.x = pyo.Var(bounds=(-100,3))
model.y = pyo.Var(bounds=(0,100))

x = model.x
y = model.y

# Constraints
model.C1 = pyo.Constraint(expr=x+y<=8)
model.C2 = pyo.Constraint(expr=8*x+3*y>=-24)
model.C3 = pyo.Constraint(expr=-6*x+8*y<=48)
model.C4 = pyo.Constraint(expr=3*x+5*y<=15)


# Objective Function
model.obj = pyo.Objective(expr=-4*x-2*y, sense=minimize)

# Solve the model
optimum = SolverFactory('glpk')
start = time.time()
results = optimum.solve(model)
end = time.time()

print(f"The time required is {end-start}")
# Check solver status
if results.solver.status == pyo.SolverStatus.ok and results.solver.termination_condition == pyo.TerminationCondition.optimal:
    # Fetch and print the values
    x_value = pyo.value(x)
    y_value = pyo.value(y)
    print(f'Optimal values: x = {x_value}, y = {y_value}')
    
else:
    print('No feasible solution found.')
    print(f'Solver Status: {results.solver.status}')
    print(f'Termination Condition: {results.solver.termination_condition}')

# Print the model
model.pprint()
```

