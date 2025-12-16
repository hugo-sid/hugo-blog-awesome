+++
title = 'Python Tutorial: Using random and numpy Libraries'
date = 2024-05-31T09:16:04+05:45
categories = ["Engineering","Python"]
draft = false
+++
# Python Tutorial: Using `random` and `numpy` Libraries

In this tutorial, we'll learn how to use the `random` and `numpy` libraries in Python. These libraries are powerful tools for generating random numbers and performing numerical operations. We'll cover everything step-by-step so it's easy to understand.

## Importing Libraries

```python
import random
import numpy as np
```

- `import random`: This imports the `random` module, which allows us to generate random numbers and make random choices.
- `import numpy as np`: This imports the `numpy` library, a powerful tool for numerical operations, and we use the alias `np` for convenience.

## Using the `random` Module

### Generating Random Numbers

```python
print("Random Integer between 1 and 10:", random.randint(1, 10))
```
- `random.randint(1, 10)`: Generates a random integer between 1 and 10 (inclusive).

```python
print("Random float between 0 and 1: {:.3f}".format(random.random()))
```
- `random.random()`: Generates a random float between 0.0 and 1.0.
- `"{:.3f}".format(value)`: Formats the float to three decimal places.

### Choosing a Random Element from a List

```python
print("Random choice from list:", random.choice([
    'Nepal', 'India', 'China', 'Bhutan', 'Bangladesh', 'Pakistan', 'Afghanistan', 'Iran', 'Iraq', 'Turkey', 
    'Greece', 'Italy', 'France', 'Spain', 'Portugal', 'United Kingdom', 'Ireland', 'Iceland', 'Canada', 'United States'
]))
```
- `random.choice(list)`: Selects a random element from the provided list.

### Shuffling a List

```python
print(f"Random shuffled list: {random.sample(range(8), 7)}")
```
- `random.sample(range(8), 7)`: Returns a list of 7 unique elements randomly chosen from the range 0 to 7 (essentially a shuffled list).

### Setting a Seed for Reproducibility

```python
random.seed(42)
print("Random Integer with seed 42:", random.randint(1, 10))
```
- `random.seed(42)`: Sets the seed for the random number generator to 42, ensuring that the sequence of random numbers can be reproduced.
- `random.randint(1, 10)`: Generates a random integer between 1 and 10, which will be the same every time the seed is set to 42.

## Using `numpy` for Numerical Operations

### Generating Random Numbers with `numpy`

```python
random_int_array = np.random.randint(1, 10, size=(3, 3))
print("\nRandom Integer Array:\n", random_int_array)
```
- `np.random.randint(1, 10, size=(3, 3))`: Creates a 3x3 array with random integers between 1 and 9.

```python
random_float_array = np.random.rand(3, 3)
print("\nRandom Float Array:\n", random_float_array)
```
- `np.random.rand(3, 3)`: Creates a 3x3 array with random floats between 0.0 and 1.0.

### Generating Numbers from a Normal Distribution

```python
normal_dist_array = np.random.normal(0, 1, size=(3, 3))
print("\nNormal Distribution Array:\n", normal_dist_array)
```
- `np.random.normal(0, 1, size=(3, 3))`: Creates a 3x3 array with random numbers from a normal (Gaussian) distribution with mean 0 and standard deviation 1.

### Setting a Seed for Reproducibility in `numpy`

```python
np.random.seed(42)
print("\nRandom Float with seed 42:\n", np.random.rand(3, 3))
```
- `np.random.seed(42)`: Sets the seed for NumPy's random number generator to 42.
- `np.random.rand(3, 3)`: Creates a 3x3 array with random floats between 0.0 and 1.0, which will be the same every time the seed is set to 42.

## Array Operations with `numpy`

### Basic Array Operations

```python
array1 = np.array([1, 2, 3])
array2 = np.array([4, 5, 6])
print("\nArray1:", array1)
print("Array2:", array2)
```
- `np.array([1, 2, 3])`: Creates a NumPy array from the list `[1, 2, 3]`.
- `np.array([4, 5, 6])`: Creates a NumPy array from the list `[4, 5, 6]`.

```python
print("Sum of Arrays:", np.add(array1, array2))
```
- `np.add(array1, array2)`: Adds `array1` and `array2` element-wise.

```python
print("Element-wise Multiplication:", np.multiply(array1, array2))
```
- `np.multiply(array1, array2)`: Multiplies `array1` and `array2` element-wise.

```python
print("Dot Product:", np.dot(array1, array2))
```
- `np.dot(array1, array2)`: Computes the dot product of `array1` and `array2`.

### Statistical Operations

```python
data = np.random.rand(1000)
print(f"\nData Mean: {np.mean(data):.3f}")
print(f"\nData Standard Deviation: {np.std(data):.3f}")
print(f"\nData Variance: {np.var(data):.3f}")
```
- `np.random.rand(1000)`: Creates an array of 1000 random floats between 0.0 and 1.0.
- `np.mean(data)`: Calculates the mean (average) of the data.
- `np.std(data)`: Calculates the standard deviation of the data.
- `np.var(data)`: Calculates the variance of the data.

### Reshaping Arrays

```python
reshaped_array = np.arange(12).reshape((3, 4))
print("\nReshaped Array:\n", reshaped_array)
```
- `np.arange(12)`: Creates an array with values from 0 to 11.
- `reshape((3, 4))`: Reshapes the array into a 3x4 array.

### Slicing Arrays

```python
print("\nSliced Array:\n", reshaped_array[:, 1:3])
```
- `reshaped_array[:, 1:3]`: Slices the array to extract all rows and columns 1 and 2 (excluding column 3).

This tutorial covers the basics of using the `random` and `numpy` libraries in Python. By following these examples, you'll gain a solid understanding of how to generate random numbers, perform numerical operations, and manipulate arrays. Happy coding!