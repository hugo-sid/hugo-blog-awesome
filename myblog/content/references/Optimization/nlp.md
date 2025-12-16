+++
title = 'Solving Nonlinear Programs'
date = 2024-07-04T17:42:45+05:45
draft = false
+++



### Nonlinear Programming (NLP)

Nonlinear programming refers to optimization problems where the objective function or constraints (or both) are nonlinear functions of the decision variables. This is in contrast to linear programming, where both the objective and constraints are linear.

Some key characteristics of NLP problems:

- Objective function is a nonlinear function of the decision variables
- Constraints can be linear or nonlinear
- Variables can be continuous, integer, or a mix (mixed-integer nonlinear programming)
- Solutions may have multiple local optima, requiring specialized algorithms to find the global optimum

NLP problems arise in many real-world applications where the underlying relationships are inherently nonlinear, such as chemical process optimization, portfolio management, structural design, and more.

### Solving NLP Problems with Pyomo

Pyomo provides a flexible interface for modeling and solving NLP problems. Let's walk through an example:

```python
import pyomo.environ as pyo
from pyomo.environ import *
from pyomo.opt import SolverFactory

# Create model
model = pyo.ConcreteModel()

# Create variables
model.x1 = pyo.Var(bounds=(0,None))
model.x2 = pyo.Var(bounds=(0,None))

x1 = model.x1
x2 = model.x2

# Constraints
model.C1 = pyo.Constraint(expr=4*x1+x2-4>=0)
model.C2 = pyo.Constraint(expr=2*x1+x2>=3)

# Objective Function
model.obj = pyo.Objective(expr=5*x1**2+x2**2+4, sense=minimize)

# Solve the model using IPOPT
optimum = SolverFactory('ipopt', executable ='C:\\ipopt\\bin\\ipopt.exe') #path of ipopt in my pc
results = optimum.solve(model)

x1_value = pyo.value(x1)
x2_value = pyo.value(x2)
print(f'Optimal values: x1 = {x1_value:.3f}, x2 = {x2_value:.3f}')
```
![](https://images2.imgbox.com/0c/dc/ku5gBGVO_o.png)
Key steps:

1. Import necessary Pyomo packages
2. Create a concrete model instance
3. Define continuous variables `x1` and `x2` with bounds
4. Add nonlinear constraints using the `expr` argument of `Constraint`
5. Define the nonlinear objective function using `Objective`
6. Specify the solver (here we use IPOPT for nonlinear problems)
7. Solve the model and extract optimal variable values

In this example, the objective function is quadratic, and the constraints are linear, so it is a convex NLP that can be solved to global optimality.

### Solving Nonlinear Programs with SCIP

SCIP is another popular solver that can handle nonlinear programs. Here's an example:

```python
from pyscipopt import Model

model = Model('NON-LINEAR')

x = model.addVar('x')
y = model.addVar('y')
z = model.addVar('z')

# Set objective function
model.setObjective(z, sense = 'maximize')

model.addCons(z == -x**2-y**2+4*x+6*y)
model.addCons(x+y <=2)
model.addCons(-2*x+12-3*y>=0)

model.optimize()
sol = model.getBestSol()

print(sol[x], sol[y])
```

![](https://thumbs2.imgbox.com/d9/df/jXQCr1yw_t.png)
Key differences:

- Use the `pyscipopt` package instead of `pyomo.environ`
- Create variables using `addVar` instead of `Var`
- Add constraints using `addCons` 
- Set objective using `setObjective`
- Solve with `optimize` and get solution with `getBestSol`

Both Pyomo and PySCIPOpt provide powerful interfaces to state-of-the-art optimization solvers to tackle complex NLP problems. The choice depends on personal preference and the specific problem structure.

Nonlinear programming is a broad and challenging field of optimization, but Pyomo and other Python-based tools make it accessible to a wide range of users. By understanding the key concepts and using the appropriate modeling and solving techniques, you can tackle a wide variety of real-world nonlinear optimization problems.

Citations:
[1] https://web.mit.edu/15.053/www/AMP-Chapter-13.pdf
[2] https://jckantor.github.io/CBE30338/06.99-Pyomo-Examples.html
[3] https://or.stackexchange.com/questions/5565/doesnt-pyscipopt-handle-nonlinear-objective-functions
[4] https://www.youtube.com/watch?v=y2SLfg2gE4k
[5] https://link.springer.com/chapter/10.1007/978-3-319-58821-6_7
[6] https://stackoverflow.com/questions/55435302/pyscipopt-nonlinear-system-of-equations-code-is-working-but-slow-doesnt-scale
[7] https://www.youtube.com/watch?v=JRWfph5PD7E
[8] https://pyomo.readthedocs.io/en/stable/contributed_packages/mindtpy.html
[9] https://github.com/SCIP-Interfaces/PySCIPOpt/issues/168
[10] https://www.mathworks.com/discovery/nonlinear-programming.html
[11] https://link.springer.com/content/pdf/10.1007/978-3-030-68928-5_7.pdf
[12] https://opus4.kobv.de/opus4-zib/frontdoor/deliver/index/docId/6134/file/PySCIPOpt.pdf
[13] https://en.wikipedia.org/wiki/Nonlinear_programming
[14] https://github.com/groupoasys/Comparison_non_linear_solvers
[15] https://github.com/scipopt/PySCIPOpt/blob/master/examples/unfinished/flp_nonlinear.py