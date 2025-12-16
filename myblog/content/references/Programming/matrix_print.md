+++
title = 'Matrix Input and Display Program'
date = 2024-06-18T19:50:27+05:45
draft = false
+++
###  Matrix Input and Display Program

This program takes the number of rows and columns from the user, then accepts matrix elements row-wise, and finally prints the matrix in a formatted way.

#### 1. Input the Number of Rows and Columns
```python
R = int(input("Enter number of rows: "))
C = int(input("Enter number of columns: "))
```
- **`int(input("Enter number of rows: "))`**: Prompts the user to enter the number of rows for the matrix and converts the input to an integer.
- **`int(input("Enter number of columns: "))`**: Prompts the user to enter the number of columns for the matrix and converts the input to an integer.

#### 2. Initialize the Matrix
```python
matrix = []
```
- **`matrix = []`**: Initializes an empty list to hold the rows of the matrix. This will be a list of lists, where each sublist represents a row in the matrix.

#### 3. Input Matrix Elements Row-wise
```python
print("Enter the entries row-wise:\n")

for i in range(R):
    a = []
    for j in range(C):
        a.append(int(input()))
    matrix.append(a)
```
- **`print("Enter the entries row-wise:\n")`**: Prints a message indicating that the user should enter the matrix elements row-wise.
- **`for i in range(R):`**: Iterates over the range of rows (from 0 to R-1).
  - **`a = []`**: Initializes an empty list to hold the elements of the current row.
  - **`for j in range(C):`**: Iterates over the range of columns (from 0 to C-1).
    - **`a.append(int(input()))`**: Prompts the user to input an integer and appends it to the current row list `a`.
  - **`matrix.append(a)`**: Appends the completed row `a` to the matrix.

#### 4. Print the Matrix
```python
for i in range(R):
    for j in range(C):
        print(matrix[i][j], end="\t")
    print()
```
- **`for i in range(R):`**: Iterates over the range of rows.
  - **`for j in range(C):`**: Iterates over the range of columns within each row.
    - **`print(matrix[i][j], end="\t")`**: Prints the element at position `[i][j]` in the matrix, followed by a tab space instead of a new line. This ensures elements in the same row are printed on the same line, separated by tabs.
  - **`print()`**: Prints a new line after each row to move to the next line for the subsequent row.

### Explanation of Python Rules Used
1. **Input Function (`input()`)**: Used to take input from the user. It reads a line from input, converts it to a string, and returns it.
2. **Type Conversion (`int()`)**: Converts a string input to an integer.
3. **Lists**: Python lists are used to store multiple items in a single variable. In this program, a list of lists is used to represent the matrix.
4. **For Loop**: Used to iterate over a sequence (in this case, the range of rows and columns).
5. **Append Method (`append()`)**: Used to add an item to the end of a list.
6. **Print Function (`print()`)**: Used to output data to the console. The `end` parameter in `print()` specifies what to print at the end of the output (default is a newline character).

### Example Usage
- If the user enters `3` for rows and `3` for columns, the program will prompt for 9 integers to fill the matrix.
- The matrix might look like this:
  ```
  Enter number of rows: 3
  Enter number of columns: 3
  Enter the entries row-wise:

  1
  2
  3
  4
  5
  6
  7
  8
  9

  1	2	3	
  4	5	6	
  7	8	9
  ```

### Additional Explanation: Indentation Rules in Python

**Indentation** in Python is crucial for defining the structure and flow of the program. Unlike some other programming languages that use braces `{}` to define code blocks, Python uses indentation to signify a block of code. Here are the key rules regarding indentation:

1. **Consistency**: All lines of code in the same block must be indented by the same amount. Python enforces this strict indentation to ensure that the code is readable and logically grouped.

2. **Indentation Level**: The standard practice is to use 4 spaces for each level of indentation. You can use spaces or tabs, but it's important not to mix them in the same project.

3. **Block Structure**: Indentation is used to define the body of loops, conditionals, functions, and classes. Each new block of code within these constructs should be indented one level deeper than the previous line.

4. **Indentation Errors**: Misaligned indentation will result in an `IndentationError`. For example, if some lines are indented with 4 spaces and others with 2 or 6 spaces within the same block, Python will raise an error.

### Examples of Indentation

#### Example 1: Indentation in Loops and Conditionals
```python
# Correct indentation
for i in range(R):
    for j in range(C):
        print(matrix[i][j], end="\t")
    print()

# Incorrect indentation
for i in range(R):
  for j in range(C):  # This line is indented with 2 spaces
      print(matrix[i][j], end="\t")  # This line is indented with 6 spaces
    print()  # This line is indented with 4 spaces, causing an error
```

#### Example 2: Indentation in Function Definitions
```python
# Correct indentation
def calc(i):
    a[i] = y[i] * B
    p[i] = 2 * y[i] + B
    R[i] = a[i] / p[i]
    v[i] = Q / a[i]
    Sf[i] = (n ** 2 * v[i] ** 2) / R[i] ** (4 / 3)
    fy[i] = (s0 - Sf[i]) / ((1 - v[i] ** 2 / 9.81 / y[i]))

# Incorrect indentation
def calc(i):
a[i] = y[i] * B  # This line is not indented
    p[i] = 2 * y[i] + B
  R[i] = a[i] / p[i]  # This line is indented with 2 spaces
    v[i] = Q / a[i]
Sf[i] = (n ** 2 * v[i] ** 2) / R[i] ** (4 / 3)  # This line is not indented
    fy[i] = (s0 - Sf[i]) / ((1 - v[i] ** 2 / 9.81 / y[i]))
```

Following these rules ensures that your Python code is well-structured and free of indentation errors. Proper indentation not only makes the code functional but also enhances its readability and maintainability.


### Additional Code Explanation: Matrix Addition, Subtraction, and Multiplication

This section allows users to input a second matrix and then performs addition, subtraction, and multiplication on the two matrices. The code also prints the results.

#### Input for Second Matrix
```python
matrix2 = []
print("Let's input the second matrix and multiply it with the matrix inputted earlier\n")
for i in range(R):
    b = []
    for j in range(C):
        b.append(int(input()))
    matrix2.append(b)
```
- **`matrix2`**: Initializes an empty list to hold the rows of the second matrix.
- **`print("Let's input the second matrix and multiply it with the matrix inputted earlier\n")`**: Prints a message to prompt the user to input the second matrix.
- **`for i in range(R):`**: Loops through each row.
  - **`b = []`**: Initializes an empty list for the current row.
  - **`for j in range(C):`**: Loops through each column.
    - **`b.append(int(input()))`**: Appends the user input to the current row list `b`.
  - **`matrix2.append(b)`**: Appends the completed row `b` to `matrix2`.

#### Matrix Addition Function
```python
def matrix_addition(matrix, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            row.append(matrix[i][j] + matrix2[i][j])
        result.append(row)
    return result
```
- **`matrix_addition(matrix, matrix2)`**: A function that takes two matrices and returns their element-wise sum.
- **`result = []`**: Initializes an empty list to hold the result matrix.
- **`for i in range(R):`**: Loops through each row.
  - **`row = []`**: Initializes an empty list for the current row of the result matrix.
  - **`for j in range(C):`**: Loops through each column.
    - **`row.append(matrix[i][j] + matrix2[i][j])`**: Adds corresponding elements of `matrix` and `matrix2` and appends the sum to `row`.
  - **`result.append(row)`**: Appends the completed row to the result matrix.
- **`return result`**: Returns the result matrix.

#### Matrix Subtraction Function
```python
def matrix_subtraction(matrix, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            row.append(matrix[i][j] - matrix2[i][j])
        result.append(row)
    return result
```
- **`matrix_subtraction(matrix, matrix2)`**: A function that takes two matrices and returns their element-wise difference.
- The logic is similar to the addition function, but it subtracts `matrix2` elements from `matrix` elements.

#### Matrix Multiplication Function
```python
def matrix_multiplication(matrix, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            sum = 0
            for k in range(C):
                sum += matrix[i][k] * matrix2[k][j]
            row.append(sum)
        result.append(row)
    return result
```
- **`matrix_multiplication(matrix, matrix2)`**: A function that takes two matrices and returns their product.
- **`result = []`**: Initializes an empty list to hold the result matrix.
- **`for i in range(R):`**: Loops through each row.
  - **`row = []`**: Initializes an empty list for the current row of the result matrix.
  - **`for j in range(C):`**: Loops through each column.
    - **`sum = 0`**: Initializes a variable to hold the sum of the products for the current element.
    - **`for k in range(C):`**: Loops through the columns of the first matrix and rows of the second matrix.
      - **`sum += matrix[i][k] * matrix2[k][j]`**: Multiplies corresponding elements and adds the product to `sum`.
    - **`row.append(sum)`**: Appends the sum to the current row.
  - **`result.append(row)`**: Appends the completed row to the result matrix.
- **`return result`**: Returns the result matrix.

#### Print Function
```python
def print_matrix(matrix):
    for i in range(R):
        for j in range(C):
            print(matrix[i][j], end="\t")
        print()
```
- **`print_matrix(matrix)`**: A helper function that takes a matrix and prints it in a readable format with tab-separated elements.

#### Printing the Matrices and Results
```python
print("Matrix 1:")
print_matrix(matrix)

print("Matrix 2:")
print_matrix(matrix2)

print("\nMatrix Addition:")
result_add = matrix_addition(matrix, matrix2)
print_matrix(result_add)

print("\nMatrix Subtraction:")
result_sub = matrix_subtraction(matrix, matrix2)
print_matrix(result_sub)

print("\nMatrix Multiplication:")
result_mul = matrix_multiplication(matrix, matrix2)
print_matrix(result_mul)
```
- **`print("Matrix 1:")`**: Prints a label for the first matrix.
- **`print_matrix(matrix)`**: Prints the first matrix.
- **`print("Matrix 2:")`**: Prints a label for the second matrix.
- **`print_matrix(matrix2)`**: Prints the second matrix.
- **`print("\nMatrix Addition:")`**: Prints a label for the addition result.
- **`result_add = matrix_addition(matrix, matrix2)`**: Computes the addition result.
- **`print_matrix(result_add)`**: Prints the addition result.
- **`print("\nMatrix Subtraction:")`**: Prints a label for the subtraction result.
- **`result_sub = matrix_subtraction(matrix, matrix2)`**: Computes the subtraction result.
- **`print_matrix(result_sub)`**: Prints the subtraction result.
- **`print("\nMatrix Multiplication:")`**: Prints a label for the multiplication result.
- **`result_mul = matrix_multiplication(matrix, matrix2)`**: Computes the multiplication result.
- **`print_matrix(result_mul)`**: Prints the multiplication result.

### Teaching About Functions and Lists

#### Understanding Functions

Functions are a fundamental aspect of Python programming. They allow you to encapsulate code into reusable blocks that can be called whenever needed. Here’s a brief overview:

1. **Defining a Function**
   - Use the `def` keyword, followed by the function name and parentheses `()`.
   - Inside the parentheses, specify any parameters the function will take.
   - End the function definition line with a colon `:`.

2. **Function Body**
   - Indent the code that belongs to the function. This code will run when the function is called.
   - Use a `return` statement to send back a result (optional).

3. **Calling a Function**
   - Use the function name followed by parentheses, including any arguments.

#### Example: Simple Function

```python
def greet(name):
    print(f"Hello, {name}!")
```

- **`def greet(name):`**: Defines a function named `greet` that takes one parameter `name`.
- **`print(f"Hello, {name}!")`**: Prints a greeting message using the `name` provided.

To call this function:

```python
greet("Alice")  # Output: Hello, Alice!
```

#### Functions in the Matrix Code

In our matrix code, we defined several functions to perform operations like addition, subtraction, and multiplication of matrices. Here’s a breakdown:

1. **Matrix Addition Function**

```python
def matrix_addition(matrix1, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    return result
```

- **`matrix_addition(matrix1, matrix2)`**: Takes two matrices as input and returns their sum.
- **`result = []`**: Initializes an empty list to store the result.
- **Nested loops**: Iterate through each element, add corresponding elements from `matrix1` and `matrix2`, and store the result.
- **`return result`**: Returns the resulting matrix.

#### Understanding Lists

Lists are versatile data structures in Python that allow you to store collections of items. Here’s how you can work with them:

1. **Creating a List**
   - Use square brackets `[]` to create a list.
   - Lists can store items of any data type, including numbers, strings, and even other lists.

2. **Accessing List Elements**
   - Use zero-based indexing to access elements, e.g., `my_list[0]` to access the first element.
   - Negative indices can be used to access elements from the end, e.g., `my_list[-1]` for the last element.

3. **Modifying Lists**
   - Use indexing to change an element, e.g., `my_list[0] = 10`.
   - Use `append()` to add elements, and `remove()` or `pop()` to delete elements.

#### Example: Basic List Operations

```python
# Creating a list
my_list = [1, 2, 3, 4, 5]

# Accessing elements
print(my_list[0])  # Output: 1
print(my_list[-1]) # Output: 5

# Modifying elements
my_list[2] = 10
print(my_list)  # Output: [1, 2, 10, 4, 5]

# Adding elements
my_list.append(6)
print(my_list)  # Output: [1, 2, 10, 4, 5, 6]

# Removing elements
my_list.remove(10)
print(my_list)  # Output: [1, 2, 4, 5, 6]
```

#### Lists in the Matrix Code

In our matrix code, lists are used to represent matrices. Here’s how:

1. **Creating a Matrix**
   - **`matrix1 = []`**: Initializes an empty list to store the first matrix.
   - Nested loops fill this list with user inputs, row by row.

2. **Accessing and Modifying Elements**
   - Use nested loops to access and modify elements of the matrices.
   - **`matrix[i][j]`**: Accesses the element in the `i`-th row and `j`-th column of `matrix`.

3. **Returning Lists from Functions**
   - Functions like `matrix_addition` return lists representing the resulting matrix after an operation.

# Full code
```python
R=int(input("Enter number of rows: "))
C=int(input("Enter number f columns"))

matrix =[]
print("Ënter the entries rowwise:\n")

for i in range(R):
    a=[]
    for j in range(C):
        a.append(int(input()))
    matrix.append(a)

for i in range(R):
    for j in range(C):
        print(matrix[i][j], end = "\t")
    print()

#lets practice matrix addition, subtraction and multiplication
matrix2 = []
print("Lets input second matrix and multiply with the matrix inputted earlier\n")
# \n helps to break line while printing
for i in range(R):
    b=[]
    for j in range(C):
        b.append(int(input()))
    matrix2.append(b)

# Matrix addtion and subtraction
def matrix_addition(matrix, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            row.append(matrix[i][j] + matrix2[i][j])
        result.append(row)
    return result

def matrix_subtraction (matrix, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            row.append(matrix[i][j]-matrix2[i][j])
        result.append(row)
    return result

def matrix_multiplication (matrix,matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            sum  =  0
            for k in range(C):
                sum += matrix[i][k]+matrix2[k][j]
            row.append(sum)
        result.append(row)
    return result

def print_matrix(matrix):
    for i in range(R):
        for j in range(C):
            print(matrix[i][j], end="\t")
        print()
print("Matrix 1:")
print_matrix(matrix)

print("Matrix 2:")
print_matrix(matrix2)

print("\nMatrix Addition:")
result_add = matrix_addition(matrix, matrix2)
print_matrix(result_add)

print("\nMatrix Subtraction:")
result_sub = matrix_subtraction(matrix, matrix2)
print_matrix(result_sub)

print("\nMatrix Multiplication:")
result_mul = matrix_multiplication(matrix, matrix2)
print_matrix(result_mul)

```
### Teaching About Functions and Lists

#### Understanding Functions

Functions are a fundamental aspect of Python programming. They allow us to encapsulate code into reusable blocks that can be called whenever needed. Here’s a brief overview:

1. **Defining a Function**
   - Use the `def` keyword, followed by the function name and parentheses `()`.
   - Inside the parentheses, specify any parameters the function will take.
   - End the function definition line with a colon `:`.

2. **Function Body**
   - Indent the code that belongs to the function. This code will run when the function is called.
   - Use a `return` statement to send back a result (optional).

3. **Calling a Function**
   - Use the function name followed by parentheses, including any arguments.

#### Example: Simple Function

```python
def greet(name):
    print(f"Hello, {name}!")
```

- **`def greet(name):`**: Defines a function named `greet` that takes one parameter `name`.
- **`print(f"Hello, {name}!")`**: Prints a greeting message using the `name` provided.

To call this function:

```python
greet("Alice")  # Output: Hello, Alice!
```

#### Functions in the Matrix Code

In our matrix code, we defined several functions to perform operations like addition, subtraction, and multiplication of matrices. Here’s a breakdown:

1. **Matrix Addition Function**

```python
def matrix_addition(matrix1, matrix2):
    result = []
    for i in range(R):
        row = []
        for j in range(C):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    return result
```

- **`matrix_addition(matrix1, matrix2)`**: Takes two matrices as input and returns their sum.
- **`result = []`**: Initializes an empty list to store the result.
- **Nested loops**: Iterate through each element, add corresponding elements from `matrix1` and `matrix2`, and store the result.
- **`return result`**: Returns the resulting matrix.

#### Understanding Lists

Lists are versatile data structures in Python that allow you to store collections of items. Here’s how you can work with them:

1. **Creating a List**
   - Use square brackets `[]` to create a list.
   - Lists can store items of any data type, including numbers, strings, and even other lists.

2. **Accessing List Elements**
   - Use zero-based indexing to access elements, e.g., `my_list[0]` to access the first element.
   - Negative indices can be used to access elements from the end, e.g., `my_list[-1]` for the last element.

3. **Modifying Lists**
   - Use indexing to change an element, e.g., `my_list[0] = 10`.
   - Use `append()` to add elements, and `remove()` or `pop()` to delete elements.

#### Example: Basic List Operations

```python
# Creating a list
my_list = [1, 2, 3, 4, 5]

# Accessing elements
print(my_list[0])  # Output: 1
print(my_list[-1]) # Output: 5

# Modifying elements
my_list[2] = 10
print(my_list)  # Output: [1, 2, 10, 4, 5]

# Adding elements
my_list.append(6)
print(my_list)  # Output: [1, 2, 10, 4, 5, 6]

# Removing elements
my_list.remove(10)
print(my_list)  # Output: [1, 2, 4, 5, 6]
```

#### Lists in the Matrix Code

In our matrix code, lists are used to represent matrices. Here’s how:

1. **Creating a Matrix**
   - **`matrix1 = []`**: Initializes an empty list to store the first matrix.
   - Nested loops fill this list with user inputs, row by row.

2. **Accessing and Modifying Elements**
   - Use nested loops to access and modify elements of the matrices.
   - **`matrix[i][j]`**: Accesses the element in the `i`-th row and `j`-th column of `matrix`.

3. **Returning Lists from Functions**
   - Functions like `matrix_addition` return lists representing the resulting matrix after an operation.

