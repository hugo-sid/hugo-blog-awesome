+++
title = 'Basic- Manning Equation'
date = 2024-06-17T12:48:03+05:45
draft = false
+++

## Solving the Manning Equation for Open Channel Flow

In this tutorial, we'll walk through how to solve the Manning equation for open channel flow using Python. The Manning equation is widely used in hydraulic engineering to calculate the flow rate in open channels. We'll prompt the user for the necessary inputs, perform the calculations, and output the discharge capacity of the channel.

### Code Explanation

```python
# Solving the Manning Equation for open channel flow

# Prompt the user for the width of the channel
b = float(input("Enter the width of the channel (meters): "))

# Prompt the user for the depth of the channel
y = float(input("Enter the depth of the channel (meters): "))

# Assume the slope of the channel is 1 in 1000
s = 1 / 1000

# Assume the Manning coefficient n = 0.015 (This value can vary based on the channel material)
n = 0.015

# Calculate the cross-sectional area of flow (A = width * depth)
A = b * y
print("Cross-sectional area A is:", A, "square meters")

# Calculate the wetted perimeter (P = width + 2 * depth)
P = b + 2 * y
print("Wetted perimeter P is:", P, "meters")

# Calculate the hydraulic radius (R = A / P)
R = A / P
print("Hydraulic radius R is:", R, "meters")

# Calculate the discharge capacity (Q) using the Manning equation
# Q = (A * R^(2/3) * s^(1/2)) / n
Q = (A * (R ** (2/3)) * (s ** 0.5)) / n

# Print the discharge capacity, formatted to 3 decimal places
print("Discharge Q is {:.3f} cubic meters per second".format(Q))
```

### Step-by-Step Breakdown

1. **Inputs:**
   - The width (`b`) and depth (`y`) of the channel are input by the user.
   - The slope of the channel (`s`) is assumed to be 1 in 1000.
   - The Manning coefficient (`n`) is assumed to be 0.015, which depends on the material of the channel bed (e.g., concrete, earth, etc.).

2. **Calculations:**
   - **Cross-Sectional Area (`A`)**: This is the area through which water flows, calculated by multiplying the width and depth of the channel.
     ```python
     A = b * y
     ```
   - **Wetted Perimeter (`P`)**: This is the perimeter of the cross-section that is in contact with water, calculated as the width plus twice the depth.
     ```python
     P = b + 2 * y
     ```
   - **Hydraulic Radius (`R`)**: This is the ratio of the cross-sectional area to the wetted perimeter, giving an idea of the flow efficiency.
     ```python
     R = A / P
     ```
   - **Discharge Capacity (`Q`)**: This is the amount of water flowing through the channel per second, calculated using the Manning equation:
     ```python
     Q = (A * (R ** (2/3)) * (s ** 0.5)) / n
     ```

3. **Output:**
   - The calculated discharge (`Q`) is formatted to three decimal places for clarity and precision.
     ```python
     print("Discharge Q is {:.3f} cubic meters per second".format(Q))
     ```

### Example Usage

Let's run through an example to see how this code works in practice.

1. **User Input:**
   - Width of the channel: `5` meters
   - Depth of the channel: `2` meters

2. **Outputs:**
   - Cross-sectional area `A`: `10.0` square meters
   - Wetted perimeter `P`: `9.0` meters
   - Hydraulic radius `R`: `1.11111` meters
   - Discharge `Q`: `22.616` cubic meters per second

