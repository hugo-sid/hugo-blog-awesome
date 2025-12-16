+++
title = 'Power Generation and Load Balancing Problem'
date = 2024-07-04T17:33:22+05:45
draft = true
+++

#### Problem Description

We have a set of power generation units with specific limits and costs per unit of generation. Our goal is to optimize the generation from these units to meet the electricity demand while minimizing the total generation cost.

#### Data

The data for power generation units (`data_gen`) and electricity demand (`data_load`) are as follows:

**Generation Data (`data_gen`):**

| id | limit | cost |
|----|-------|------|
| 0  | 20    | 0.10 |
| 1  | 10    | 0.05 |
| 2  | 40    | 0.30 |
| 3  | 50    | 0.40 |
| 4  | 5     | 0.01 |

**Load Data (`data_load`):**

| id | value |
|----|-------|
| 0  | 50    |
| 1  | 20    |
| 2  | 30    |

### Python Code Using Pyomo

Here's the Python code using Pyomo to solve this optimization problem:

```python
import pyomo.environ as pyo
from pyomo.environ import *
from pyomo.opt import SolverFactory
import pandas as pd

# Read data from Excel sheets
data_gen = pd.read_excel('data.xlsx', sheet_name='gen')
data_load = pd.read_excel('data.xlsx', sheet_name='load')

Ng = len(data_gen)

# Create a concrete model
model = pyo.ConcreteModel()

# Define decision variables for power generation from each unit
model.Pg = pyo.Var(range(Ng), bounds=(0, None))
Pg = model.Pg

# Define constraints
# Constraint 1: Total generation equals total demand
pg_sum = sum(Pg[g] for g in range(Ng))
model.balance = pyo.Constraint(expr=pg_sum == sum(data_load['value']))

# Constraint 2: Minimum generation constraint (example using specific generators)
model.cond = pyo.Constraint(expr=Pg[0] + Pg[3] >= data_load['value'][0])

# Constraint 3: Generation limits for each generator
model.limits = pyo.ConstraintList()
for g in range(Ng):
    model.limits.add(expr=Pg[g] <= data_gen['limit'][g])

# Objective function: Minimize the total generation cost
sum_of_cost = sum(Pg[g] * data_gen['cost'][g] for g in range(Ng))
model.obj = pyo.Objective(expr=sum_of_cost)

# Solve the model
opt = SolverFactory('glpk')
results = opt.solve(model)

# Print solver results
print(results)

# Print optimal generation values for each generator
data_gen['Pg'] = [pyo.value(Pg[g]) for g in range(Ng)]
print(data_gen)
```

### Explanation of the Code

1. **Model Initialization and Variables**: 
   - `model.Pg`: Decision variables representing the power generation from each generator.

2. **Constraints**:
   - `model.balance`: Ensures total generation meets total demand.
   - `model.cond`: Specific constraint example ensuring minimum generation from selected generators.
   - `model.limits`: Constraints on each generator's maximum capacity.

3. **Objective Function**:
   - `model.obj`: Minimizes the total cost of generation based on generator costs.

4. **Solver and Results**:
   - `SolverFactory('glpk')`: Selects GLPK solver.
   - `opt.solve(model)`: Solves the optimization model.

5. **Output**:
   - The results provide the optimal generation (`Pg`) from each generator.
   - The solver's status and other details are printed (`print(results)`).

### Data in Table Format

#### Generation Data (`data_gen`)

| id | limit | cost | Pg (Optimal) |
|----|-------|------|--------------|
| 0  | 20    | 0.10 | 20 |
| 1  | 10    | 0.05 | 10 |
| 2  | 40    | 0.30 | 35|
| 3  | 50    | 0.40 | 30 |
| 4  | 5     | 0.01 | 5 |


## solution 
![](https://images2.imgbox.com/ff/c1/56nXHQys_o.png)