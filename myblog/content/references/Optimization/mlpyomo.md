+++
title = 'Solving Mixed Integer Linear Programming (MILP) Problems'
date = 2024-07-04T17:25:03+05:45
draft = false
+++


### Example Problem

In this example, we'll solve a mixed integer linear programming problem using Pyomo:

**Objective:** Minimize \(3x1 + 4x2\)

**Constraints:**
1. \(x1 + 3x2 >= 15\)
2. \(3x1 + 5x2 <= 72\)
3. \(2x1 + x2 = 24\)

**Variable Types:**
- \(x1\) is a continuous variable (\(x1 >= 0\))
- \(x2\) is an integer variable (\(x2 >= 0\))

### Step-by-Step Solution with Pyomo

#### Step 1: Import Pyomo Modules

Import the necessary modules from Pyomo:
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

Define the decision variables `x1` and `x2` with their respective bounds and types:
```python
model.x1 = pyo.Var(bounds=(0, None))
model.x2 = pyo.Var(within=pyo.Integers, bounds=(0, None))
```
*here x2 variable is set as integer using pyo.Integer*

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
model.obj = pyo.Objective(expr=3 * model.x1 + 4 * model.x2, sense=pyo.minimize)
```

#### Step 6: Solve the Model

Select a solver (e.g., GLPK) using `SolverFactory` and solve the model:
```python
opt = SolverFactory('glpk')
results = opt.solve(model)
```

#### Step 7: Retrieve and Print the Solution

Retrieve the optimal values of `x1` and `x2` using `pyo.value()` and print them:
```python
x1_value = pyo.value(model.x1)
x2_value = pyo.value(model.x2)
print(f'Optimal values: x1 = {x1_value}, x2 = {x2_value}')
```

### Complete Code

Here is the complete code with all the steps:

```python
import pyomo.environ as pyo
from pyomo.opt import SolverFactory

# Create the model
model = pyo.ConcreteModel()

# Define the variables with their bounds and types
model.x1 = pyo.Var(bounds=(0, None))
model.x2 = pyo.Var(within=pyo.Integers, bounds=(0, None))

# Add the constraints
model.C1 = pyo.Constraint(expr=model.x1 + 3 * model.x2 >= 15)
model.C2 = pyo.Constraint(expr=3 * model.x1 + 5 * model.x2 <= 72)
model.C3 = pyo.Constraint(expr=2 * model.x1 + model.x2 == 24)

# Set the objective function to minimize
model.obj = pyo.Objective(expr=3 * model.x1 + 4 * model.x2, sense=pyo.minimize)

# Solve the model
opt = SolverFactory('glpk')
results = opt.solve(model)

# Retrieve and print the optimal values of x1 and x2
x1_value = pyo.value(model.x1)
x2_value = pyo.value(model.x2)
print(f'Optimal values: x1 = {x1_value}, x2 = {x2_value}')
```
## Using SCIP

```python
from pyscipopt import Model
model = Model('Vedula_2.2.2')
#Mixed Integer, just add vytpe = 'INTEGER' 
x = model.addVar('x', vtype = 'INTEGER')
y = model.addVar('y',lb=0)

#set objective function

model.setObjective(3*x+4*y, sense = 'maximize')

model.addCons(5*x+y>=40)
model.addCons(3*x+5*y<=70)
model.addCons(2*x+y<=24)

model.optimize()
sol = model.getBestSol()

print(sol)
```