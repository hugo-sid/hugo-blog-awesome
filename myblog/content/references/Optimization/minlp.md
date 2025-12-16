+++
title = 'Solving Mixed Integer Nonlinear Programs Pyomo-Couenne and SCIP'
date = 2024-07-04T17:53:39+05:45
draft = false
+++


### Setting up the Environment

1. **Download and Install Couenne**: Couenne is an open-source solver for MINLP problems, developed as part of the COIN-OR project. You can download the latest version of Couenne from the [COIN-OR download page](https://www.coin-or.org/downloading/). Make sure to download the binary package that matches your operating system.

2. **Add Couenne to your System Path**: After downloading and extracting the Couenne package, you need to add the location of the `couenne.exe` executable to your system's `PATH` environment variable. This will allow Pyomo to find and use the Couenne solver.

   - On Windows, you can do this by right-clicking on "This PC" (or "Computer"), selecting "Properties", then "Advanced system settings", and finally the "Environment Variables" button. In the system variables, find the `PATH` variable and add the path to the Couenne `bin` directory (e.g., `C:\path\to\Couenne\bin`).
   - On Linux or macOS, you can add the Couenne `bin` directory to your `PATH` by editing your shell configuration file (e.g., `.bashrc`, `.bash_profile`, or `.zshrc`) and adding the following line: `export PATH="/path/to/Couenne/bin:$PATH"`.

3. **Install Pyomo**: If you haven't already, install the Pyomo optimization modeling language. You can do this using pip: `pip install pyomo`.

Now that your environment is set up, let's solve a MINLP problem using Pyomo and Couenne.

### Solving a MINLP Problem

Consider the following MINLP problem:

```
Minimize: (x - 2)^2 + (y - 2)^2
Subject to:
  x + 2y <= 3
  8x + 5y >= 10
  x, y >= 0
  x is integer
```

We can model and solve this problem using Pyomo:

```python
import pyomo.environ as pyo
from pyomo.environ import *
from pyomo.opt import SolverFactory

# Create model
model = pyo.ConcreteModel()

# Create variables
model.x = pyo.Var(within=Integers, bounds=(0, None))
model.y = pyo.Var(bounds=(0, None))

x = model.x
y = model.y

# Constraints
model.C1 = pyo.Constraint(expr=x + 2 * y <= 3)
model.C2 = pyo.Constraint(expr=8 * x + 5 * y >= 10)

# Objective Function
model.obj = pyo.Objective(expr=(x - 2) ** 2 + (y - 2) ** 2, sense=minimize)

# Solve the model using Couenne
optimum = SolverFactory('couenne', executable='C:\\path\\to\\couenne.exe')
results = optimum.solve(model)

x_value = pyo.value(x)
y_value = pyo.value(y)
print(f'Optimal values: x = {x_value:.3f}, y = {y_value:.3f}')
```

Here's what's happening in the code:

1. We import the necessary Pyomo modules.
2. We create a `ConcreteModel` instance to hold our problem definition.
3. We define the decision variables `x` and `y`, with `x` being an integer variable and `y` being a continuous variable.
4. We add the constraints to the model using the `Constraint` class.
5. We define the objective function using the `Objective` class.
6. We create a Couenne solver instance using `SolverFactory('couenne', executable='...')` and provide the path to the `couenne.exe` executable.
7. We solve the model using the `solve` method and print the optimal values of `x` and `y`.

When you run this code, it will output the optimal solution:

```
Optimal values: x = 1.000, y = 1.000
```
![](https://images2.imgbox.com/51/92/ggItWhio_o.png)
### Conclusion

In this tutorial, you learned how to solve a mixed integer nonlinear programming problem using Pyomo and the Couenne solver. By setting up your environment correctly and using the appropriate Pyomo constructs, you can leverage the power of Couenne to tackle a wide range of MINLP problems. Remember to update the path to the `couenne.exe` executable in your code to match the location on your system.



## Solving Mixed Integer Nonlinear Programs with PySCIPOpt

In addition to Couenne solver, lets use SCIP. we will solve a mixed integer nonlinear programming (MINLP) problem using the PySCIPOpt library, which provides a Python interface to the SCIP optimization suite.

### Setting up the Environment

1. **Install PySCIPOpt**: You can install PySCIPOpt using pip:
   ```
   pip install pyscipopt
   ```

2. **Install SCIP**: PySCIPOpt requires the SCIP optimization suite to be installed on your system. You can download and install SCIP from the [SCIP Optimization Suite website](https://www.scipopt.org/index.php#download).

Now that your environment is set up, let's solve a MINLP problem using PySCIPOpt.

### Solving a MINLP Problem

Consider the following MINLP problem:

```
Maximize: z
Subject to:
  z = -x^2 - y^2 + 4x + 6y
  x + y <= 2
  -2x + 12 - 3y >= 0
  x, z >= 0
  y is integer
```

We can model and solve this problem using PySCIPOpt:

```python
from pyscipopt import Model

model = Model('NON-LINEAR')

x = model.addVar('x')
y = model.addVar('y', vtype="INTEGER")
z = model.addVar('z')

# Set objective function
model.setObjective(z, sense='maximize')

model.addCons(z == -x**2 - y**2 + 4*x + 6*y)
model.addCons(x + y <= 2)
model.addCons(-2*x + 12 - 3*y >= 0)

model.optimize()
sol = model.getBestSol()

print(sol[x], sol[y])
```

Here's what's happening in the code:

1. We import the `Model` class from the `pyscipopt` module.
2. We create a `Model` instance with the name 'NON-LINEAR'.
3. We define the decision variables `x`, `y`, and `z` using the `addVar` method. We specify `y` as an integer variable using the `vtype` parameter.
4. We set the objective function using the `setObjective` method, specifying `z` as the objective variable and the maximization sense.
5. We add the constraints to the model using the `addCons` method.
6. We optimize the model using the `optimize` method.
7. We retrieve the optimal solution using the `getBestSol` method and print the values of `x` and `y`.

When you run this code, it will output the optimal solution:

```
0, 2
```
![](https://images2.imgbox.com/0d/e2/UcbmdF5m_o.png)
### Conclusion

In this tutorial, you learned how to solve a mixed integer nonlinear programming problem using PySCIPOpt. By leveraging the power of the SCIP optimization suite through the PySCIPOpt library, you can tackle a wide range of MINLP problems in Python. PySCIPOpt provides a user-friendly interface for defining variables, constraints, and objective functions, making it easy to model and solve optimization problems.

Remember to install both PySCIPOpt and the SCIP optimization suite to ensure that your environment is properly set up for solving MINLP problems.

Citations:
[1] https://www.coin-or.org/downloading/
[2] https://www.coin-or.org/Couenne/
[3] https://ampl.com/products/solvers/all-solvers-for-ampl/
[4] https://en.wikipedia.org/wiki/Couenne
[5] https://github.com/coin-or/Couenne
[6] https://github.com/coin-or/Couenne/blob/master/src/couenne.opt
[7] https://stackoverflow.com/questions/48055852/installing-couenne-solver-on-pythons-pymo-extension
[8] https://stackoverflow.com/questions/78186211/pyomo-not-loading-solvers-couenne-bonmin-from-ampl
[9] https://discourse.julialang.org/t/couenne-with-julia/43216
[10] https://coin-or.github.io/user_introduction.html
[11] https://www.youtube.com/watch?v=f0uwyRaXmcw
[12] https://www.coin-or.org/Couenne/couenne-user-manual.pdf
[13] https://groups.google.com/g/pyomo-forum/c/X84xr2RXMuc
[14] http://www.jdhp.org/docs/notebook/python_pyomo_getting_started_0_installation_instructions_pyomo_and_solvers.html