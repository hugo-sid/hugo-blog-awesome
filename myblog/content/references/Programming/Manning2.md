+++
title = 'Hydraulic Simulation using Manning Equation'
date = 2024-06-19T15:31:30+05:45
draft = false
+++


The program begins by importing the necessary libraries, NumPy and Matplotlib, which will be used for numerical computations and data visualization, respectively.

Next, we define the constants for this problem:
- `B`: the width of the channel in meters
- `n`: Manning's roughness coefficient, which is a measure of the channel's resistance to flow
- `S`: the slope of the energy grade line, which represents the energy loss per unit length of the channel

The `calculate_parameters` function is the core of this program. It takes an array of water depths as input and calculates the following hydraulic parameters:
1. **Cross-sectional Area (A)**: The area of the channel occupied by the water.
2. **Wetted Perimeter (P)**: The length of the channel's boundary in contact with the water.
3. **Hydraulic Radius (R)**: The ratio of the cross-sectional area to the wetted perimeter, which is a measure of the channel's efficiency in conveying flow.
4. **Velocity (V)**: The average velocity of the water flow, calculated using Manning's equation.
5. **Discharge (Q)**: The volumetric flow rate, which is the product of the cross-sectional area and the velocity.

The program then creates an array of water depths ranging from 0.1 to 3 meters and calls the `calculate_parameters` function to compute the corresponding hydraulic parameters.

Finally, the program uses Matplotlib to create four subplots, each displaying one of the calculated parameters (cross-sectional area, hydraulic radius, velocity, and discharge) as a function of the water depth. These visualizations help students understand the relationships between the different hydraulic parameters and how they change with varying water depths.

### Code and Explanation
```python
import numpy as np
import matplotlib.pyplot as plt

# Constants
B = 5.0  # Width of the channel in meters
n = 0.015  # Manning's roughness coefficient
S = 0.001  # Slope of the energy grade line

# Function to calculate hydraulic parameters
def calculate_parameters(depths):
    A = B * depths  # Cross-sectional area
    P = B + 2 * depths  # Wetted perimeter
    R = A / P  # Hydraulic radius
    V = (1 / n) * (R ** (2 / 3)) * (S ** 0.5)  # Velocity using Manning's equation
    Q = A * V  # Discharge
    return A, P, R, V, Q

# Depths ranging from 0.1 to 3 meters
depths = np.linspace(0.1, 3, 100)

# Calculate parameters
A, P, R, V, Q = calculate_parameters(depths)

# Plot results
plt.figure(figsize=(10, 6))

plt.subplot(2, 2, 1)
plt.plot(depths, A)
plt.title('Cross-sectional Area vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Area (m²)')
plt.grid(True)

plt.subplot(2, 2, 2)
plt.plot(depths, R)
plt.title('Hydraulic Radius vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Hydraulic Radius (m)')
plt.grid(True)

plt.subplot(2, 2, 3)
plt.plot(depths, V)
plt.title('Velocity vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Velocity (m/s)')
plt.grid(True)

plt.subplot(2, 2, 4)
plt.plot(depths, Q)
plt.title('Discharge vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Discharge (m³/s)')
plt.grid(True)

plt.tight_layout()
plt.show()

```
#### Importing Libraries
```python
import numpy as np
import matplotlib.pyplot as plt
```
- **NumPy (`np`)**: A powerful numerical computing library in Python used for working with arrays and performing mathematical operations.
- **Matplotlib (`plt`)**: A plotting library in Python used to create static, interactive, and animated visualizations.

#### Constants
```python
B = 5.0  # Width of the channel in meters
n = 0.015  # Manning's roughness coefficient
S = 0.001  # Slope of the energy grade line
```
- `B`: Width of the rectangular channel (meters).
- `n`: Manning's roughness coefficient, a measure of the roughness of the channel surface.
- `S`: Slope of the energy grade line, representing the steepness of the channel.

#### Function to Calculate Hydraulic Parameters
```python
def calculate_parameters(depths):
    A = B * depths  # Cross-sectional area
    P = B + 2 * depths  # Wetted perimeter
    R = A / P  # Hydraulic radius
    V = (1 / n) * (R ** (2 / 3)) * (S ** 0.5)  # Velocity using Manning's equation
    Q = A * V  # Discharge
    return A, P, R, V, Q
```
- **`depths`**: An array of flow depths (m).
- **`A = B * depths`**: Calculates the cross-sectional area of the flow.
- **`P = B + 2 * depths`**: Calculates the wetted perimeter.
- **`R = A / P`**: Calculates the hydraulic radius.
- **`V = (1 / n) * (R ** (2 / 3)) * (S ** 0.5)`**: Calculates the velocity using Manning's equation.
- **`Q = A * V`**: Calculates the discharge.
- **`return A, P, R, V, Q`**: Returns the calculated parameters.

#### Generating Depths
```python
depths = np.linspace(0.1, 3, 100)
```
- **`np.linspace(0.1, 3, 100)`**: Generates 100 equally spaced depths between 0.1 and 3 meters.

#### Calculating Parameters
```python
A, P, R, V, Q = calculate_parameters(depths)
```
- Calls the `calculate_parameters` function with the generated depths to compute the hydraulic parameters.

#### Plotting Results
```python
plt.figure(figsize=(10, 6))
```
- **`plt.figure(figsize=(10, 6))`**: Creates a new figure with a specified size (10 inches wide by 6 inches tall).

#### Plot Cross-sectional Area vs Depth
```python
plt.subplot(2, 2, 1)
plt.plot(depths, A)
plt.title('Cross-sectional Area vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Area (m²)')
plt.grid(True)
```
- **`plt.subplot(2, 2, 1)`**: Creates a subplot in a 2x2 grid (this is the first subplot).
- **`plt.plot(depths, A)`**: Plots the cross-sectional area against depth.
- **`plt.title('Cross-sectional Area vs Depth')`**: Sets the title of the subplot.
- **`plt.xlabel('Depth (m)')`**: Sets the label for the x-axis.
- **`plt.ylabel('Area (m²)')`**: Sets the label for the y-axis.
- **`plt.grid(True)`**: Adds a grid to the plot for better readability.

#### Plot Hydraulic Radius vs Depth
```python
plt.subplot(2, 2, 2)
plt.plot(depths, R)
plt.title('Hydraulic Radius vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Hydraulic Radius (m)')
plt.grid(True)
```
- Similar to the previous subplot, but this one plots the hydraulic radius against depth.

#### Plot Velocity vs Depth
```python
plt.subplot(2, 2, 3)
plt.plot(depths, V)
plt.title('Velocity vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Velocity (m/s)')
plt.grid(True)
```
- This subplot plots the velocity against depth.

#### Plot Discharge vs Depth
```python
plt.subplot(2, 2, 4)
plt.plot(depths, Q)
plt.title('Discharge vs Depth')
plt.xlabel('Depth (m)')
plt.ylabel('Discharge (m³/s)')
plt.grid(True)
```
- This subplot plots the discharge against depth.

#### Adjust Layout and Show Plot
```python
plt.tight_layout()
plt.show()
```
- **`plt.tight_layout()`**: Adjusts the subplots to fit into the figure area neatly.
- **`plt.show()`**: Displays the plot.

### Detailed Explanation of Matplotlib
- **Matplotlib** is a comprehensive library for creating static, animated, and interactive visualizations in Python. Here are some key concepts:
  - **Figure**: The entire window or page the plot appears on. `plt.figure()` creates a new figure.
  - **Subplot**: A smaller plot within the figure. `plt.subplot(2, 2, 1)` specifies a 2x2 grid and refers to the first subplot.
  - **Plotting Functions**: `plt.plot()` creates a line plot. There are many other functions like `plt.bar()`, `plt.hist()`, `plt.scatter()`, etc., for different types of plots.
  - **Labels and Titles**: `plt.xlabel()`, `plt.ylabel()`, and `plt.title()` are used to set the labels and title of the plot.
  - **Grid**: `plt.grid(True)` adds a grid to the plot for better readability.
  - **Layout Adjustment**: `plt.tight_layout()` adjusts subplots to fit into the figure area neatly.
  - **Display**: `plt.show()` displays the plot on the screen.
  
![](https://images2.imgbox.com/83/3c/8GokBgul_o.jpeg)
  
