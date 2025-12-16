+++
title = 'BigM Method, Python Program'
date = 2024-06-17T13:23:35+05:45
draft = false
+++
This is done as per the assignment of System Mathematics in First Semester of Hydropower Engineering by Yogesh Sharma Neupane and Submitted to Prof Dr. Bhola Nath Ghimire.

---

## Linear Programming ~~ Simplex Method

This Python script solves linear programming problems using the Simplex Method. The code handles both maximization and minimization problems and includes error handling to ensure valid user input.

### Step 1: Import Libraries and Define Helper Functions

#### Import Libraries

```python
import numpy as np  # For defining arrays and performing numerical operations
np.set_printoptions(precision=2, floatmode="fixed") 
# For printing only two decimal places
```
- **numpy**: This library is used to handle array operations efficiently.
- **set_printoptions**: Configures the display of numpy arrays to show only two decimal places.

#### Define `wrong_input` Function

```python
def wrong_input():
    # Print an error message for invalid input
    print("Error!!! Invalid Input. Please input the valid data: ")
```
- **wrong_input**: This function prints an error message when the user provides invalid input.

#### Define `find_zj` Function

```python
def find_zj():
    # Calculate Zj value which is the sum of the product of basic values and corresponding xi
    for j in range(total_col):
        sum = 0
        for i in range(m):
            sum = sum + basic_vars[i] * table[i][j]
        zj[j] = sum
        if j < col_index:
            zj_cj[j] = sum - cj[j]
```
- **find_zj**: This function calculates the Zj values, representing the objective function coefficients for the current solution.

### Step 2: Define Functions to Find Pivot Column and Row

#### Define `find_pivot_col` Function

```python
def find_pivot_col():
    # Finds the entering variable (pivot column) for the next iteration
    if opt_type == 'M':
        smallest = np.min(zj_cj)
        if smallest >= 0:
            return None
    else:
        largest = np.max(zj_cj)
        if largest <= 0:
            return None
    pc = np.argmin(zj_cj) if opt_type == 'M' else np.argmax(zj_cj)
    return pc
```
- **find_pivot_col**: This function identifies the pivot column, which determines the entering variable for the next iteration.

#### Define `find_pivot_row` Function

```python
def find_pivot_row():
    # Finds the leaving variable (pivot row) for the next iteration
    min_ratio = float('inf')
    pivot_row = None
    for i in range(m):
        if table[i][pc] > 0 and table[i][col_index] > 0:
            ratio = table[i][col_index] / table[i][pc]
            if ratio < min_ratio:
                min_ratio = ratio
                pivot_row = i
    if min_ratio == float('inf'):
        return None
    basic_vars[pivot_row] = cj[pc]  # Update basic_vars with the leaving variable's coefficient
    print("Basic vars\n", basic_vars)
    return pivot_row
```
- **find_pivot_row**: This function identifies the pivot row, which determines the leaving variable for the next iteration.

### Step 3: Update Rows Based on Pivot Element

```python
def new_rows():
    # Updates the table by performing row operations to find the new pivot row
    pivot_element = table[pr][pc]
    for j in range(total_col):
        table[pr][j] = table[pr][j] / pivot_element
    # To find other rows except pivot row
    for i in range(m):
        if i != pr:
            pivot_coeff = table[i][pc]
            for j in range(total_col):
                table[i][j] -= pivot_coeff * table[pr][j]
```
- **new_rows**: This function updates the table by performing row operations to ensure all rows (except the pivot row) are adjusted correctly.

### Step 4: Print Final Output

```python
def final_output():
    # Prints the final solution and the optimum value
    if opt_type == 'M':
        print("\n********** Maximization Successful!!! ************\n")
    else:
        print("\n********** Minimization Successful!!! ************\n")

    for i in range(m):
        for j in range(n):
            if table[i][j] == 1:
                if np.sum(table[:, j]) == 1:
                    print(f"\t for X{j+1} == {table[i][col_index]:.2f}")
    print(f"\nThe Optimum value is {zj[col_index]:.2f}")
```
- **final_output**: This function prints the final solution and the optimum value.

### Step 5: Get User Input for Equations and Variables

```python
print("************* LINEAR PROGRAMMING ~~ Simplex Method **********************\n")

m = int(input("Enter the number of equations: "))
n = int(input("Enter the number of variables: "))

# Initialize matrix
A = np.zeros((m, n))  # ARRAY
signs = []
b = []
M = 10000000  # Big value for artificial variables

# Ask coefficients, signs, and rhs
for i in range(m):
    print(f"Equation {i+1}")
    for j in range(n):
        while True:
            try:
                A[i, j] = float(input(f"Enter coefficient for X{j+1}: "))
                break
            except ValueError:
                wrong_input()
    sign = input("Enter sign (E for '=', G for '>=', S for '<='): ")
    if sign not in ['G', 'g', 'E', 'e', 'S', 's']:
        sign = 'S'
    signs.append(sign)
    while True:
        try:
            rhs = float(input("Enter RHS Value: "))
            break
        except ValueError:
            wrong_input()
    b.append(rhs)

# Get coefficients of the objective function
c = np.zeros(n)
for j in range(n):
    while True:
        try:
            c[j] = float(input(f"Enter coefficient for Z function, X{j+1}: "))
            break
        except ValueError:
            wrong_input()

# Ask for type of optimization (max or min)
while True:
    opt_type = input("Enter optimization type M for max and m for min: ")
    if opt_type in ['M', 'm']:
        break
    else:
        wrong_input()
```
- **User Input**: This section collects the number of equations, variables, coefficients, signs, RHS values, and the type of optimization from the user.

### Step 6: Initialize and Set Up Matrices

```python
count_a = 0
for i in range(m):
    if signs[i] in ['G', 'g', 'E', 'e']:
        count_a += 1

artificial_var = np.zeros((m, m))
s_var = np.zeros((m, m))
for i in range(m):
    if signs[i] in ['G', 'g']:
        for j in range(m):
            s_var[i][j] = -1 if i == j else 0
            artificial_var[i][j] = 1 if i == j else 0
    elif signs[i] in ['S', 's']:
        for j in range(m):
            s_var[i][j] = 1 if i == j else 0
            artificial_var[i][j] = 0 if i == j else 0
    elif signs[i] in ['E', 'e']:
        for j in range(m):
            s_var[i][j] = 0
            artificial_var[i][j] = 1 if i == j else 0

combined_table = np.hstack((A, s_var, artificial_var))
combined_table = combined_table[:, ~np.all(combined_table == 0, axis=0)]
b = np.reshape(b, (m, 1))
table = np.hstack((combined_table, b))
col_index = combined_table.shape[1]
total_col = table.shape[1]
cj = np.zeros(col_index)
for i in range(col_index - count_a, col_index):
    cj[i] = -M if opt_type == 'M' else M
for i in range(n):
    cj[i] = c[i]

print("Total number of artificial variable introduced is ", count_a)
print("\n cj: ", cj)

print(table)
```
- **Initialize Matrices**: This section sets up the initial matrices, including slack and artificial variables, and combines them into the final tableau.

### Step 7: Define Basic Variables and Perform Simplex Iterations

```python
basic_vars = np.zeros(m)
for i in range(m):
    for j in range(n + 1, col_index):
        if combined_table[i][j] == 1:
            basic_vars[i] = cj[j]
print("Initial Basic values are: ", basic_vars)
zj = np.zeros(total_col)
zj_cj = np.zeros(col_index)
counter = 1

while True:
    find_zj()
    pc = find_pivot_col()
    if pc is None:
        print("Solution is found")
        message = 1
        break
    print("\nPivot column: ", pc)
    pr = find_pivot_row()
    if pr is None:
        print("No solution is found")
        message = 0
        break
    print("\nPivot row: ", pr)
    new_rows()
    print("\nIteration ", counter)
    print(table.round(

2))
    counter += 1

if message == 1:
    final_output()
else:
    print("The problem has no feasible solution")
```
- **Define Basic Variables**: This section initializes the basic variables and performs the Simplex iterations until the optimal solution is found or the problem is determined to be infeasible.

---

# Full Code
```
import numpy as np #for defining array
np.set_printoptions(precision=2, floatmode="fixed") 
#for printing only two points after decimals

def wrong_input():
     #print Error message for invalid input
     print("Error!!! Invalid Input. Please input the valid data: ")

def find_zj():
     # calculate Zj value which is basically the sum of product of basicvalues and corresponding xi
     for j in range(total_col):
          sum = 0
          for i in range(m):
               sum = sum + basic_vars[i]*table[i][j]
          zj[j] = sum
          if j < col_index:
               zj_cj[j]=sum - cj[j]

def find_pivot_col():
     """
     finds the entering variable( pivot column) for the next iteration
     """
     if opt_type == 'M':
          smallest = np.min(zj_cj)
          if smallest >= 0:
               return None
     else:
          largest = np.max(zj_cj)
          if largest <= 0:
               return None
     pc = np.argmin(zj_cj) if opt_type == 'M' else np.argmax(zj_cj)
     return pc


def find_pivot_row():
     """
     Finds the leaving variable (pivot row) for the next iteration.
     """
     min_ratio =float('inf')
     pivot_row =None
     for i in range(m):
          if(table[i][pc]>0 and table[i][col_index] > 0):
               ratio = table[i][col_index]/table[i][pc]
               if ratio < min_ratio:
                    min_ratio = ratio
                    pivot_row = i
     if(min_ratio == float('inf')):
          return None
     basic_vars[pivot_row] = cj[pc]  # Update basic_vars with leaving variable's coefficient
     print("basic var \n", basic_vars)
     return pivot_row


def new_rows():
     """
     Updates the table by performing row operations to find the new pivot row.
     """
     pivot_element = table[pr][pc]
     for j in range(total_col):
          table[pr][j]=table[pr][j]/pivot_element
     #to find other rows except pivot row
     for i in range(m):
          if i != pr:
               pivot_coeff = table[i][pc]
               for j in range(total_col):
                    table[i][j] -=pivot_coeff*table[pr][j]

def final_output():
    """
    Prints the final solution and the optimum value.
    """
    if(opt_type== 'M'):
         print ("\n **********   Maximization Successful!!!************\n")
    else:
         print ("\n **********   Minimization Successful!!!************\n")

    for i in range(m):
        for j in range(n):
            if table[i][j]==1:
                if np.sum(table[:, j]) == 1:
                    print(f"\t for X{j+1} == {table[i][col_index]:.2f}")
    print(f"\n The Optimum value is { zj[col_index]:.2f}")


#Ask for equations and variables
print("*************   LINEAR PROGRAMMING ~~ Simplex Method **********************\n")

m = int(input("Enter the number of equations: "))
n = int(input("Enter the number of variables: "))

#Initialize matrix
A=np.zeros((m,n)) #ARRAY
signs = []
b=[]
M = 10000000 # Putting big value

#ask coefficients, signs and rhs
for i in range(m):
    print(f"Equation {i+1}")
    for j in range(n):
         #Error handling using try and except, to make sure user input only numbers as coefficients
         while True:
            try:
                A[i, j] = float(input(f"Enter coefficient for X{j+1}: "))
                break  # Break out of the loop if valid input is entered
            except ValueError:
                wrong_input()
    sign=input("Enter sign (E for '=', G for'>=' , S for '<='): ")
    if sign not in ['G', 'g', 'E', 'e', 'S', 's']:
         sign = 'S'
    signs.append(sign)
    while True:
         try:
              rhs=float(input("Enter RHS Value: "))
              break #for valid input
         except ValueError:
              wrong_input()
    b.append(rhs)

# Get coefficient of the objective function
c=np.zeros(n)
for j in range(n):
          while True:
               try:
                    c[j] = float(input(f"Enter coefficient for Z function, X{j+1}: "))
                    break
               except ValueError:
                    wrong_input()

#Ask for type of optimization (mac or min)
while True:
     opt_type = input("Enter optimization type M for max and m for min: ")
     if(opt_type in ['M','m']):
          break
     else:
          wrong_input()

#Count number of greater or equal to function
count_a=0
for i in range(m):
    if signs[i] in ['G', 'g', 'E', 'e']:
        count_a = count_a +1
#adding slack/surplus and artificial 
artificial_var =np.zeros((m,m))
s_var=np.zeros((m,m))
for i in range(m):
    if signs[i] in ['G','g']:
            for j in range(m):
                 s_var[i][j] = -1 if i==j else 0
                 artificial_var[i][j] = 1 if i==j else 0
    elif signs[i] in ['S','s']:
            for j in range(m):
                 s_var[i][j] = 1 if i==j else 0
                 artificial_var[i][j] = 0 if i==j else 0
    elif signs[i] in ['E','e']:
            for j in range(m):
                 s_var[i][j] = 0
                 artificial_var[i][j] = 1  if i == j else 0

#print(s_var, artificial_var)
# Combine matrices A, s_var, artificial_var by excluding columns with all zeros
combined_table = np.hstack((A, s_var, artificial_var))
combined_table = combined_table[:, ~np.all(combined_table == 0, axis=0)]
#reshape b to column vector
b=np.reshape(b,(m,1))
#combine table
table = np.hstack((combined_table,b))
col_index = combined_table.shape[1]
total_col = table.shape[1]
cj = np.zeros(col_index)
for i in range(col_index-count_a,col_index):
     cj[i]= -M if opt_type == 'M' else M
for i in range(n):
     cj[i]=c[i]
print("Total number of artificial variable introduced is ", count_a)
print("\n cj: ",cj)

print(table)

# define basic variables
basic_vars = np.zeros(m)
for i in range(m):
     for j in range(n+1,col_index):
          if combined_table[i][j] == 1:
               basic_vars[i] = cj[j]
print("Initial Basic values are : ", basic_vars)
zj=np.zeros(total_col)
zj_cj = np.zeros(col_index)
counter = 1

while True:
     find_zj()
     pc = find_pivot_col()
     if pc == None:
          print("Solution is found")
          message = 1
          break
     print("\nPivot column: ",pc)
     pr = find_pivot_row()
     if pr == None:
          print(" No solution is found")
          message = 0
          break
     print("\nPivot row: ",pr)
     new_rows()
     print("\n Iteration ", counter )
     print(table.round(2))
     counter +=1 

if message == 1:
     final_output()
else:
     print("Unbounded solution, Please try again")
```