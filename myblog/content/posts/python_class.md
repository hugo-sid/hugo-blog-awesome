+++
title = 'Exploring the Use of self in Python with Reservoir Planning'
date = 2024-05-31T08:02:36+05:45
categories = ["Engineering","Python"]
draft = false
+++
# Exploring the Use of `self` in Python with Reservoir Planning

In this blog, we will explore how to use the `self` function in Python by taking an example from reservoir planning. By the end of this post, we will learn to  create a class, define its behavior, and operate it using simple Python code.

### What is a Class in Python?

A class in Python helps us create complex data structures that can contain both data and functions (also called methods) that work on that data. Think of a class as a blueprint for creating objects. Learn more on [**w3schools**](https://www.w3schools.com/python/python_classes.asp)

### Example: Reservoir Planning

We'll create a class called `Reservoir` that models a reservoir's characteristics and operations. This example will help us understand how reservoirs manage water inflow and outflow.

### Step-by-Step Guide

#### Step 1: Define the Class

First, we need to define our `Reservoir` class. This class will have some important properties like name, capacity, inflow rate, outflow rate, and current storage.

```python
class Reservoir:
    def __init__(self, name, capacity, inflow, outflow):
        self.name = name
        self.capacity = capacity  # Total capacity in cubic meters (m³)
        self.inflow = inflow      # Inflow rate in cubic meters per second (m³/s)
        self.outflow = outflow    # Outflow rate in cubic meters per second (m³/s)
        self.storage = 0          # Initial storage is 0 cubic meters (m³)
```

- `__init__`: This is a special method called the constructor. It initializes the properties of the reservoir when we create a new instance of the class.
- `self`: This is a reference to the current instance of the class. It's used to access the class's properties and methods.

#### Step 2: Update the Storage

Next, we need a method to update the reservoir's storage based on the inflow and outflow over a given time period.

```python
    def updateStorage(self, time_s):
        inflow_vol = self.inflow * time_s
        outflow_vol = self.outflow * time_s
        self.storage += inflow_vol - outflow_vol

        if self.storage > self.capacity:
            self.storage = self.capacity
        elif self.storage < 0:
            self.storage = 0
        return self.storage
```

- `updateStorage`: This method calculates the volume of water entering and leaving the reservoir and updates the current storage. 
  - `time_s`: Time period in seconds.
  - `inflow_vol`: Volume of water entering the reservoir.
  - `outflow_vol`: Volume of water leaving the reservoir.
  - The storage is adjusted to ensure it doesn't exceed the capacity or fall below zero.

#### Step 3: Output the Status

We need a method to print the current status of the reservoir, including its name and current storage.

```python
    def output(self):
        return f"{self.name} Reservoir: Current Storage = {self.storage / 1000000} MCM"
```

- `output`: This method returns a string showing the reservoir's name and current storage in million cubic meters (MCM).

### Putting It All Together

Now, let's create an instance of the `Reservoir` class and simulate a time period to see how it works.

```python
reservoir = Reservoir(name="Tamor", capacity=1200000000, inflow=300, outflow=120)

time_period = 3600  # 1 hour in seconds
newStorage = reservoir.updateStorage(time_period)
print(reservoir.output())
```

- We create a `Reservoir` object named "Tamor" with a capacity of 1.2 billion cubic meters, an inflow rate of 300 cubic meters per second, and an outflow rate of 120 cubic meters per second.
- We simulate the reservoir operation for one hour (3600 seconds).
- Finally, we print the current storage of the reservoir.

### Output

When you run this code, you should see an output like this:

```
Tamor Reservoir: Current Storage = 0.648 MCM
```

This means that after one hour, the Tamor Reservoir has 0.648 million cubic meters of water stored.

Lets see how much time it required to fill the reservoir
```
hours = reservoir.capacity/reservoir.storage
print(f"The total time required to fill the reservoir is {hours:.2f} hours")
```
Result  
```
The total time required to fill the reservoir is 1851.85 hours
```



### Conclusion

By using this simple class example, we have demonstrated how to model and operate a reservoir in Python. Understanding how to use the `self` function and create classes can help you manage and simulate real-world systems effectively. Keep experimenting and exploring more complex scenarios to deepen your understanding!

### Full Script
```python
# Lets explore use of self function in python
# We are taking example of reservoir planning
# first we should define class, which helps to create complex data structures and define behaviour

class Reservoir:
    def __init__(self,name,capacity,inflow,outflow):
        self.name = name
        self.capacity = capacity
        self.inflow = inflow
        self.outflow = outflow
        self.storage =0
    
    def updateStorage(self,time_s):
        inflow_vol = self.inflow*time_s
        outflow_vol = self.outflow*time_s
        self.storage += inflow_vol-outflow_vol
    
        if self.storage > self.capacity:
            self.storage = self.capacity
        elif self.storage < 0:
            self.storage = 0
        return self.storage
    
    def output(self):
        return f"{self.name} Reservoir : Current Storage = {self.storage/1000000} MCM"
    
reservoir = Reservoir(name="Tamor",capacity= 1200000000,inflow = 300, outflow = 120)

time_period = 3600
newStorage = reservoir.updateStorage(time_period)
print(reservoir.output())
hours = reservoir.capacity/reservoir.storage
print(f"The total time required to fill the reservoir is {hours:.2f} hours")
```