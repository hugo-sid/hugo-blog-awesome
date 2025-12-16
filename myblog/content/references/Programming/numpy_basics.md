+++
title = 'Numpy Basics'
date = 2024-06-19T15:07:54+05:45
draft = false
+++
The following program is sourced from [Bao Nguyen](https://github.com/btn6364/Numpy-Tutorial/blob/main/numpy_tutorial.ipynb)  


#### Installing NumPy
Before using NumPy, ensure it is installed on your system. Run the following command in the terminal or command prompt:
```bash
pip install numPy
```

#### Importing NumPy
First, import the NumPy library. This allows us to use its functionality in your code.
```python
import numpy as np
```

#### Basics of NumPy Arrays
1. **Creating an Array**
   ```python
   a = np.array([1, 2, 3])
   print(f"Array = {a}")
   ```
   - **`np.array([1, 2, 3])`**: Creates a one-dimensional NumPy array with elements 1, 2, and 3.
   - **`print(f"Array = {a}")`**: Prints the array.

2. **Array Attributes**
   ```python
   print(f"Number of dimensions = {a.ndim}")
   print(f"Shape = {a.shape}")
   print(f"Data type = {a.dtype}")
   print(f"Item size in bytes = {a.itemsize}")
   ```
   - **`a.ndim`**: Returns the number of dimensions of the array.
   - **`a.shape`**: Returns the shape of the array (number of rows and columns).
   - **`a.dtype`**: Returns the data type of the elements in the array.
   - **`a.itemsize`**: Returns the size of each element in the array in bytes.

3. **Creating Arrays with Different Data Types**
   ```python
   a = np.array([[1, 2, 3], [3.2, 4, 5], [1, 3, 5.2]])
   print(a)
   print(f"Data type = {a.dtype}")
   ```
   - **`np.array([[1, 2, 3], [3.2, 4, 5], [1, 3, 5.2]])`**: Creates a two-dimensional array with mixed data types (integers and floats).
   - **`a.dtype`**: NumPy automatically determines the best data type to accommodate all elements.

#### Indexing and Slicing
1. **Indexing Specific Elements**
   ```python
   a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
   print(a)
   print(a[0, 2])
   print(a[1, 2])
   ```
   - **`a[0, 2]`**: Accesses the element at the first row and third column.
   - **`a[1, 2]`**: Accesses the element at the second row and third column.

2. **Accessing Rows and Columns**
   ```python
   print(f"Numbers from 1st row = {a[0, :]}")
   print(f"Numbers from 2nd column = {a[:, 1]}")
   ```
   - **`a[0, :]`**: Accesses all elements from the first row.
   - **`a[:, 1]`**: Accesses all elements from the second column.

3. **Slicing Sub-matrices**
   ```python
   b = a[1:3, 1:3]
   print(b)
   ```
   - **`a[1:3, 1:3]`**: Extracts a sub-matrix from the second to third rows and second to third columns.

4. **Selecting Random Rows or Columns**
   ```python
   c = a[:, [0, 2]]
   print(c)
   ```
   - **`a[:, [0, 2]]`**: Extracts the first and third columns.

#### Boolean Masking
1. **Filtering Based on Conditions**
   ```python
   d = a[a > 4]
   print(d)
   e = a[(a > 3) & (a < 10)]
   print(e)
   ```
   - **`a[a > 4]`**: Extracts all elements greater than 4.
   - **`a[(a > 3) & (a < 10)]`**: Extracts all elements greater than 3 and less than 10.

#### Initializing Different Arrays
1. **Creating Arrays with Specific Values**
   ```python
   f = np.zeros((3, 2))
   g = np.ones((3, 2))
   h = np.full((3, 3), 2)
   i = np.identity(4)
   ```
   - **`np.zeros((3, 2))`**: Creates a 3x2 array filled with zeros.
   - **`np.ones((3, 2))`**: Creates a 3x2 array filled with ones.
   - **`np.full((3, 3), 2)`**: Creates a 3x3 array filled with the value 2.
   - **`np.identity(4)`**: Creates a 4x4 identity matrix.

2. **Printing Arrays**
   ```python
   print(f'\nf=\n  {f} \n g=\n  {g} \n h=\n  {h} \n i=\n  {i}')
   ```
   - **`print(f'\nf=\n  {f} \n g=\n  {g} \n h=\n  {h} \n i=\n  {i}')`**: Prints the initialized arrays in a readable format.

### Additional Notes on Indentation
Indentation is critical in Python as it defines the scope of loops, conditionals, functions, and other block structures. Proper indentation ensures that the code executes in the intended order and maintains readability.

- **Standard Indentation**: Use 4 spaces per indentation level.
- **Consistency**: Be consistent with the use of spaces or tabs. Do not mix them within the same code block.
- **Nested Structures**: Each nested structure (like loops within loops, or functions within classes) should be indented one level further than its parent.




#### Creating Random Matrices
1. **Creating a Random 3x2 Matrix**
   ```python
   random_3x2_matrix = np.random.rand(3, 2)
   print("Random 3x2 matrix")
   print(random_3x2_matrix)
   ```
   - **`np.random.rand(3, 2)`**: Generates a 3x2 matrix with random values between 0 and 1.
   - **`print("Random 3x2 matrix")`**: Prints a label for the matrix.
   - **`print(random_3x2_matrix)`**: Prints the generated random matrix.

2. **Creating a Random 3x2x2 Matrix**
   ```python
   random_3x2x2_matrix = np.random.rand(3, 2, 2)
   print("\nRandom 3x2x2 matrix")
   print(random_3x2x2_matrix)
   ```
   - **`np.random.rand(3, 2, 2)`**: Generates a 3x2x2 matrix with random values between 0 and 1. This is a 3D matrix.
   - **`\n`**: Adds a newline for better readability when printing.
   - **`print(random_3x2x2_matrix)`**: Prints the generated random 3D matrix.

#### Creating Evenly-Spaced Arrays
1. **Using `linspace` to Create an Evenly-Spaced Array**
   ```python
   a = np.linspace(start=1, stop=10, num=15)
   print(a)
   ```
   - **`np.linspace(start=1, stop=10, num=15)`**: Creates an array of 15 evenly spaced values starting from 1 and ending at 10.
   - **`print(a)`**: Prints the created array.

2. **Using `arange` to Create an Array with Specific Start, Stop, and Step**
   ```python
   b = np.arange(start=2, stop=10, step=2)
   print(b)
   ```
   - **`np.arange(start=2, stop=10, step=2)`**: Creates an array starting at 2, stopping before 10, with steps of 2.
   - **`print(b)`**: Prints the created array.

#### Reshaping Arrays
1. **Reshaping an Array**
   ```python
   a = np.array([[1, 2, 3], [3, 1, 2]])
   print(a)
   print(f"Shape = {a.shape}")

   b = a.reshape((3, 2))
   print(b)
   ```
   - **`np.array([[1, 2, 3], [3, 1, 2]])`**: Creates a 2x3 array.
   - **`a.shape`**: Prints the shape of the array, which is (2, 3).
   - **`a.reshape((3, 2))`**: Reshapes the array to 3x2.
   - **`print(b)`**: Prints the reshaped array.

#### Stacking Arrays
1. **Vertical Stacking**
   ```python
   aa = np.array([[1, 2, 3], [3, 4, 5]])
   bb = np.array([[2, 3, 4], [2, 8, 6]])
   vertical_stack = np.vstack((aa, bb))
   print(vertical_stack)
   ```
   - **`np.vstack((aa, bb))`**: Vertically stacks arrays `aa` and `bb`.
   - **`print(vertical_stack)`**: Prints the vertically stacked array.

2. **Horizontal Stacking**
   ```python
   horizontal_stack = np.hstack((aa, bb))
   print(horizontal_stack)
   ```
   - **`np.hstack((aa, bb))`**: Horizontally stacks arrays `aa` and `bb`.
   - **`print(horizontal_stack)`**: Prints the horizontally stacked array.

#### Statistical Operations
1. **Basic Statistical Operations**
   ```python
   a = np.array([[1, 2, 3], [5, 3, 2]])
   print(f"Min = {np.min(a)}")
   print(f"Max = {np.max(a)}")
   print(f"Sum = {np.sum(a)}")
   print(f"Mean = {np.mean(a)}")
   print(f"Variance = {np.var(a)}")
   print(f"Standard deviation = {np.std(a)}")
   ```
   - **`np.min(a)`**: Finds the minimum value in the array.
   - **`np.max(a)`**: Finds the maximum value in the array.
   - **`np.sum(a)`**: Calculates the sum of all elements in the array.
   - **`np.mean(a)`**: Calculates the mean (average) of the elements in the array.
   - **`np.var(a)`**: Calculates the variance of the elements in the array.
   - **`np.std(a)`**: Calculates the standard deviation of the elements in the array.


### Advanced NumPy : Broadcasting, Matrix Operations, and More

#### Broadcasting
Broadcasting allows NumPy to perform arithmetic operations on arrays of different shapes in a way that makes sense. This is a powerful feature that makes your code more concise and readable.

1. **Add 2 to All Elements in an Array**
   ```python
   a = np.array([[1, 2, 3], [5, 3, 1]])
   b = a + 2
   print(f"Add 2 to all elements in a")
   print(b)
   ```
   - **`np.array([[1, 2, 3], [5, 3, 1]])`**: Creates a 2x3 array `a`.
   - **`a + 2`**: Adds 2 to each element of the array `a`.
   - **`print(b)`**: Displays the new array where each element has been increased by 2.

2. **Subtract 3 from All Elements in an Array**
   ```python
   b = a - 3
   print(f"Subtract 3 from all elements in a")
   print(b)
   ```
   - **`a - 3`**: Subtracts 3 from each element of the array `a`.
   - **`print(b)`**: Displays the new array where each element has been decreased by 3.

3. **Multiply All Elements in an Array by 4**
   ```python
   b = a * 4
   print(f"Multiply 4 to all elements in a")
   print(b)
   ```
   - **`a * 4`**: Multiplies each element of the array `a` by 4.
   - **`print(b)`**: Displays the new array where each element has been multiplied by 4.

4. **Broadcasting with Arrays of Different Shapes**
   ```python
   a = np.array([[1, 2, 3], [2, 3, 1], [4, 2, 3]])  # 3x3 array
   b = np.array([[2, 3, 4]])  # 1x3 array
   a + b
   ```
   - **`np.array([[2, 3, 4]])`**: Creates a 1x3 array `b`.
   - **`a + b`**: Adds array `b` to each row of array `a` due to broadcasting.

#### Matrix Multiplication and Dot Product
1. **Element-wise Multiplication**
   ```python
   a = np.array([1, 2, 3])
   b = np.array([3, 4, 2])
   a * b
   ```
   - **`a * b`**: Multiplies corresponding elements of arrays `a` and `b`.

2. **Dot Product**
   ```python
   print(f"a.b = {a.dot(b)}")
   ```
   - **`a.dot(b)`**: Calculates the dot product of arrays `a` and `b`.

#### Cross Product
1. **Matrix Multiplication Using `matmul`**
   ```python
   a = np.array([[1, 2, 3], [4, 1, 2], [1, 2, 3]])  # 3x3 array
   b = np.array([[3, 4], [2, 1], [5, 1]])  # 3x2 array

   # Note: the column of a = the row of b
   print(f"axb =")
   print(np.matmul(a, b))
   ```
   - **`np.matmul(a, b)`**: Performs matrix multiplication of `a` and `b`.

#### Determinant
1. **Calculating the Determinant of a Matrix**
   ```python
   a = np.array([[1, 2], [3, 4]])
   determinant = np.linalg.det(a)
   determinant
   ```
   - **`np.linalg.det(a)`**: Calculates the determinant of matrix `a`.

#### Inverse Matrix
1. **Finding the Inverse of a Matrix**
   ```python
   a = np.array([[1, 2], [3, 4]])
   b = np.linalg.inv(a)
   print("b = ")
   print(b)
   print("axb=")
   print(np.matmul(a, b))
   ```
   - **`np.linalg.inv(a)`**: Finds the inverse of matrix `a`.
   - **`np.matmul(a, b)`**: Multiplies matrix `a` with its inverse `b` to get the identity matrix.

#### Diagonal Matrix
1. **Extracting Diagonals from a Matrix**
   ```python
   x = np.arange(9).reshape((3, 3))
   x

   print(f"0th diagonal = {np.diag(x)}")
   print(f"1st diagonal = {np.diag(x, k=1)}")
   print(f"-1th diagonal = {np.diag(x, k=-1)}")
   ```
   - **`np.arange(9).reshape((3, 3))`**: Creates a 3x3 matrix with values from 0 to 8.
   - **`np.diag(x)`**: Extracts the main diagonal of matrix `x`.
   - **`np.diag(x, k=1)`**: Extracts the diagonal one position above the main diagonal.
   - **`np.diag(x, k=-1)`**: Extracts the diagonal one position below the main diagonal.

