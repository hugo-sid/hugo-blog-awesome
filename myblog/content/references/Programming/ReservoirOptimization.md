+++
title = 'Reservoir Optimization'
date = 2024-07-04T19:46:26+05:45
draft = false
+++

## Imports and Constants
The script starts by importing the necessary libraries: `numpy` and `pandas`. It then defines the following constants:
- `gamma`: Acceleration due to gravity (9.81 m/s²)
- `effi`: Efficiency of the hydropower plant (0.9)
- `env_flow`: Environmental flow in m³/month

## Loading Data
The script then loads data from a CSV file named "inflow_data1.csv". The data includes:
- `inflow_data`: Inflow to the reservoir in m³/s
- `pet_data`: Potential evapotranspiration in mm/day
- `dt_data`: Demand or release from the reservoir in m³/s

## Important Information
The script also defines several important parameters related to the reservoir:
- `catchment_area`: Catchment area of the reservoir in m²
- `active_storage`: Active storage capacity of the reservoir in Mm³
- `gross_capacity`: Gross storage capacity of the reservoir in Mm³
- `initial_storage`: Initial storage of the reservoir in Mm³
- `reserve_live_storage`: Reserve live storage of the reservoir in Mm³
- `dead_storage`: Dead storage of the reservoir in Mm³
- `surface_area_fsl`: Surface area of the reservoir at full supply level in m²
- `surface_area_mol`: Surface area of the reservoir at minimum operating level in m²
- `rated_discharge`: Rated discharge of the hydropower plant in m³/s
- `installed_capacity`: Installed capacity of the hydropower plant in MW

## Conversion
The script converts the inflow, demand, and PET data from their original units to m³/month.

## Constraints
The script defines the minimum and maximum storage capacity of the reservoir:
- `max_capacity`: Gross storage capacity of the reservoir in Mm³
- `min_capacity`: Reserve live storage of the reservoir in Mm³

## Power Generation Function
The script defines a function called `power_generation` that calculates the power generation based on the release (Q) and the head (h) of the reservoir.

## Reservoir Optimization
The main part of the script is the reservoir optimization loop, which iterates over the time period (t) and calculates the storage, spill, and release for each month. The key steps are:

1. Initialize the storage for the first month with the `initial_storage` value.
2. For each month:
   - Calculate the release (R) ensuring that the minimum environmental flow is met.
   - Calculate the spill (O) if the storage plus inflow minus evapotranspiration and release exceeds the maximum capacity.
   - Calculate the new storage (S) for the next month, ensuring it stays within the minimum and maximum capacity.

```python
import numpy as np
import pandas as pd

# Constants
gamma = 9.81
effi = 0.9
env_flow = 0  # Environmental flow in m3/month

# Load data from CSV file
data = pd.read_csv("inflow_data1.csv")
inflow_data = data['inflow'].values  # m3/s
pet_data = data['pet'].values  # mm/day
dt_data = data['dt'].values  # m3/s

# Important information
catchment_area = 5005e5  # m2
active_storage = 2225  # Mm3
gross_capacity = 350  # Mm3
initial_storage = 200  # Mm3
reserve_live_storage = 10  # Mm3
dead_storage = 708  # Mm3
surface_area_fsl = 63 * 1e6  # m2
surface_area_mol = 39 * 1e6  # m2

rated_discharge = 6 * 112  # m3/s
installed_capacity = 6 * 200  # MW

# Conversion
#inflow_data = inflow_data * 3600 * 24 * 30  # Convert inflow to m3/month
#dt_data = dt_data * 3600 * 24 * 30  # Convert dt to m3/month
#pet_data = pet_data * surface_area_fsl / 1e6  # Convert PET to m3/month

# Constraints
max_capacity = gross_capacity  # Mm3
min_capacity = reserve_live_storage  # Mm3

# Objective function to maximize power generation
def power_generation(Q, h):
    power = gamma * Q * h * effi
    return power

# Reservoir optimization
t = len(inflow_data)  # Time period
S = [0] * (t + 1)  # Storage
O = [0] * t  # Spills
R = [0] * t  # Releases
S[0] = initial_storage  # Initial storage

for month in range(t):
    Q = inflow_data[month]
    ET = pet_data[month]
    D = dt_data[month]
    # Calculate release ensuring minimum environmental flow is met
    if S[month] + Q - ET - env_flow > min_capacity+ D:
        R[month] = D
    else:
        R[month] = max(0, S[month] + Q - ET - env_flow )
        #R[month]=S[month]+Q-ET-env_flow
    
    # Calculate spill
    if S[month] + Q - ET - env_flow - R[month] > max_capacity:
        O[month] = S[month] + Q - ET - env_flow - R[month] - max_capacity
    else:
        O[month] = 0
    
    # Calculate new storage ensuring it stays within bounds
    S[month + 1] = max(min_capacity, S[month] + Q - ET - R[month] - O[month] - env_flow)
    #S[month + 1] = S[month]+Q-ET-R[month]-O[month]-env_flow
# Print results with formatted values
for month in range(t):
    print(f"Month {month + 1}: Storage = {S[month]:.2f} Mm3, Spill = {O[month]:.2f}, Release = {R[month]:.2f}, Inflow = {inflow_data[month]:.2f}")
```

```csv
inflow,pet,dt
70.61,10,51.68
412.75,8,127.85
348.4,8,127.85
142.29,8,65.27
103.78,6,27.18
45,6,203.99
19.06,5,203.99
14.27,5,179.47
10.77,6,89.76
8.69,8,0
9.48,8,0
18.19,10,10
100,8,20
```