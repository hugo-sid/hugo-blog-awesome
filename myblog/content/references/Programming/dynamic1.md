+++
title = 'Dynamic Programming- Water Allocation'
date = 2024-06-17T13:12:25+05:45
draft = false
+++

---



### Step 1: Import Libraries and Define Functions

```python
import numpy as np
```
- **numpy**: This library is used to handle array operations efficiently.

#### Define the `print_table_row` Function

```python
def print_table_row(s, x, f, y=None, total_return=None):
    # Print a row of the table with the given values.
    if y is None:
        print(f"{s}\t\t{x}\t\t{f}\t")
    else:
        print(f"{s}\t\t{x}\t\t{f}\t\t{y}\t\t{total_return}")
```
- **print_table_row**: This function prints a row of the table. It adjusts the number of columns based on the current iteration.

#### Define the `table` Function

```python
def table(i):
    # Print the table header based on the current iteration.
    if i == 2:
        print("Available\tAllocated\tReturn")
    else:
        print("Available\tAllocated\tReturn\tRemaining\tTotalReturn")
```
- **table**: This function prints the table header based on the current iteration. If `i` is 2, it prints a header with three columns; otherwise, it prints a header with five columns.

### Step 2: Initialize Variables

```python
user = [[0, 5, 8, 9, 8, 5, 0], [0, 5, 6, 3, -4, -15, -30], [0, 7, 12, 15, 16, 15, 12]]
q = 7
ff = 0
xx = 0
fmat = np.zeros((3, 7))
xmat = np.zeros((3, 7))
allocation = np.zeros(3)
k = 0
```
- **user**: A list of lists containing user data.
- **q**: The total number of units available.
- **ff**: A variable to store the maximum return found so far.
- **xx**: A variable to store the optimal allocation for the current iteration.
- **fmat**: A 3x7 matrix (array) to store the optimized values.
- **xmat**: A 3x7 matrix (array) to store the allocations.
- **allocation**: An array to store the final allocation of units.
- **k**: A counter for tracking the current iteration.

### Step 3: Generate Tables and Optimize Values

```python
for i in range(2, -1, -1):
    table(i)
    ff = 0
    for s in range(q):
        for x in range(s + 1):
            if i == 2:
                f = int(user[i][x])
                print_table_row(s, x, f)
                if ff < f:
                    ff = f
                    xx = x
            else:
                y = s - x
                f = int(user[i][x] + int(fmat[i + 1][y]))
                print_table_row(s, x, int(user[i][x]), y, f)
                if ff < f:
                    ff = f
                    xx = x
        fmat[i][s] = ff
        xmat[i][s] = xx
        print(f"Optimized value from table {k+1}: {ff} at x={xx}, s={s}\n")
        k += 1
```
- **Outer Loop (i)**: Iterates through the levels (2, 1, 0).
  - **Inner Loop (s)**: Iterates through each unit from 0 to `q-1`.
    - **Innermost Loop (x)**: Iterates through each possible allocation from 0 to `s`.
      - **If i == 2**: Calculate the return and print the table row. Update `ff` and `xx` if a higher return is found.
      - **Else**: Calculate the return considering the next level's optimized value and print the table row. Update `ff` and `xx` if a higher return is found.
    - Store the optimized value (`ff`) and the corresponding allocation (`xx`) in `fmat` and `xmat`.
    - Print the optimized value for each table.

### Step 4: Calculate Final Allocation

```python
total_unit = 6
allocation[0] = xx
total_allocated = xx
for i in range(3):
    if i != 0:
        total_available = total_unit - total_allocated
        allocation[i] = xmat[i][total_available]
        if i != 2:
            total_allocated = total_allocated + int(allocation[i])
```
- **total_unit**: The total number of units available for allocation.
- **allocation[0]**: Set the first allocation based on the optimized value.
- **total_allocated**: Track the total allocated units.
- **Loop (i)**: Calculate the remaining allocation for each level and update the total allocated units.

### Step 5: Print Results

```python
# Print the results
print("Maximum Benefit is", ff, "for the allocation", allocation)
print("Optimized table:\n", fmat)
print("Respective allocation:\n", xmat)
```
- Print the maximum benefit and the corresponding allocation.
- Print the optimized tables (`fmat` and `xmat`).

---
# Full Code
```python 
import numpy as np
def print_table_row(s, x, f, y=None, total_return=None):
    # Print a row of the table with the given values.
    if y is None:
        print(f"{s}\t\t{x}\t\t{f}\t")
    else:
        print(f"{s}\t\t{x}\t\t{f}\t\t{y}\t\t{total_return}")

def table(i):
    # Print the table header based on the current iteration.
    if i == 2:
        print("Available\tAllocated\tReturn")
    else:
        print("Available\tAllocated\tReturn\tRemaining\tTotalReturn")
user = [[0, 5, 8, 9, 8, 5, 0], [0, 5, 6, 3, -4, -15, -30], [0, 7, 12, 15,
16, 15, 12]]
q = 7
ff = 0
xx = 0
fmat = np.zeros((3, 7))
xmat = np.zeros((3, 7))
allocation = np.zeros(3)
k = 0

# Generate the tables and optimize the values
for i in range(2, -1, -1):
    table(i)
    ff = 0
    for s in range(q):
        for x in range(s + 1):
            if i == 2:
                f = int(user[i][x])
                print_table_row(s, x, f)
                if ff < f:
                    ff = f
                    xx = x
            else:
                y = s - x
                f = int(user[i][x] + int(fmat[i + 1][y]))
                print_table_row(s, x, int(user[i][x]), y, f)
                if ff < f:
                    ff = f
                    xx = x
        fmat[i][s] = ff
        xmat[i][s] = xx
        print(f"Optimized value from table {k+1}: {ff} at x={xx}, s={s}\n")
        k += 1

# Allocation
total_unit = 6
allocation[0] = xx
total_allocated = xx
for i in range(3):
    if i != 0:
        total_available = total_unit - total_allocated
        allocation[i] = xmat[i][total_available]
        if i != 2:
            total_allocated = total_allocated + int(allocation[i])
# Print the results
print("Maximum Benefit is", ff, "for the allocation", allocation)
print("Optimized table:\n", fmat)
print("Respective allocation:\n", xmat)
``` 