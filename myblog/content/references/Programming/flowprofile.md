+++
title = 'Flow profile using different methods'
date = 2024-06-18T19:27:25+05:45
draft = true
+++
### Python Program for Calculating Water Profile in a Rectangular Channel

This program calculates the water profile for a rectangular channel using different numerical methods. It demonstrates the Euler Method, Improved Euler Method, Modified Euler Method, and Runge-Kutta Method.

#### Import Libraries
```python
import numpy as np
import matplotlib.pyplot as plt
```
- **`numpy`**: Used for numerical operations and array handling.
- **`matplotlib.pyplot`**: Used for plotting graphs.

#### Define Functions
```python
def calc(i):
    a[i] = y[i] * B
    p[i] = 2 * y[i] + B
    R[i] = a[i] / p[i]
    v[i] = Q / a[i]
    Sf[i] = (n ** 2 * (v[i]) ** 2) / (R[i]) ** (4 / 3)
    fy[i] = (s0 - Sf[i]) / ((1 - v[i] ** 2) / 9.81 / y[i])
```
- **`calc(i)`**: Calculates the cross-sectional area, wetted perimeter, hydraulic radius, velocity, friction slope, and fy value for the current station `i`.

```python
def euler(i, segment):
    calc(i)
    y[i + 1] = y[i] + fy[i] * segment
```
- **`euler(i, segment)`**: Applies the Euler Method to update the water depth at the next station.

```python
def euler_improved(i, segment):
    ys = y[i]
    calc(i)
    y[i] = ys + fy[i] * segment
    calc(i)
    y[i + 1] = ys + fy[i] * segment
```
- **`euler_improved(i, segment)`**: Applies the Improved Euler Method.

```python
def euler_modified(i, segment):
    ys = y[i]
    calc(i)
    y[i] = ys + fy[i] * segment / 2
    calc(i)
    y[i + 1] = ys + fy[i] * segment
```
- **`euler_modified(i, segment)`**: Applies the Modified Euler Method.

```python
def RungeKutta(i, segment):
    ys = y[i]
    calc(i)
    K1 = fy[i]
    y[i] = ys + 0.5 * K1 * segment
    calc(i)
    K2 = fy[i]
    y[i] = ys + 0.5 * K2 * segment
    calc(i)
    K3 = fy[i]
    y[i] = ys + K3 * segment
    calc(i)
    K4 = fy[i]
    K = (K1 + 2 * K2 + 2 * K3 + K4) * segment / 6
    y[i + 1] = ys + K
```
- **`RungeKutta(i, segment)`**: Applies the Runge-Kutta Method.

#### Main Program
```python
print("This Program Calculates water profile for a rectangular channel\n")
print("Input following data \n")
length = float(input("Enter total length of channel: "))
station = int(input("Enter number of stations: "))
segment = length / (station - 1)
Q = float(input("Enter discharge at initial station: "))
y_initial = float(input("Enter depth at initial station: "))
B = float(input("Enter width of channel: "))
n = float(input("Enter Manning's coefficient of channel: "))
s0 = float(input("Enter bed slope in Degrees: "))
s0 = s0 * 22 / 7 / 180
```
- Prompts the user for the input values needed for the calculations, including channel length, number of stations, discharge, initial depth, channel width, Manning's coefficient, and bed slope.

#### Initialize Arrays
```python
a = np.zeros(station)
p = np.zeros(station)
R = np.zeros(station)
v = np.zeros(station)
Sf = np.zeros(station)
fy = np.zeros(station)
s = np.zeros(station)
s[0] = 0
```
- Initializes arrays to store values of cross-sectional area (`a`), wetted perimeter (`p`), hydraulic radius (`R`), velocity (`v`), friction slope (`Sf`), and fy values (`fy`). Also initializes the distance array (`s`) with the starting point set to 0.

#### Calculate Flow Profile Using Different Methods
```python
methods = [euler, euler_improved, euler_modified, RungeKutta]
method_names = ["Euler Method", "Improved Euler Method", "Modified Euler Method", "Runge-Kutta Method"]
results = []

for method in methods:
    y = np.zeros(station)  # Reset y to initial values for each method
    y[0] = y_initial
    for i in range(station - 1):
        s[i + 1] = s[i] + segment
        method(i, segment)
    results.append(y.copy())
```
- Defines a list of methods and their names. Iterates over each method to calculate the water depth profile, resetting `y` for each method and storing the results.

#### Print Results
```python
for method_name, result in zip(method_names, results):
    print(f'\nResults for {method_name}:')
    for i, value in enumerate(result):
        print(f'for i = {i} --> {value}')
```
- Prints the calculated water depth profile for each method.

#### Plot Results
```python
plt.figure(figsize=(10, 6))
for method_name, result in zip(method_names, results):
    plt.plot(s, result, marker='o', linestyle='-', label=method_name)
plt.xlabel('Chainage (m)')
plt.ylabel('Water Depth (m)')
plt.title('Flow Profile for a Rectangular Channel')
plt.legend()
plt.grid(True)
plt.show()
```
- Plots the water depth profiles for all methods on the same graph, with chainage (distance) on the x-axis and water depth on the y-axis.

