+++
title = 'Program: Calculating Sediment Load'
date = 2023-01-31T14:49:27+05:45
category =["Python","Engineering"]
draft = false
+++

In this program, we'll calculate the sediment load in a river based on user input. The sediment load is the amount of sediment carried by the river, which can be calculated using the sediment concentration and the discharge of the river.

### Concepts Covered:
User Input: Taking input from the user.
Lambda Functions: Small anonymous functions used for simple operations.
Try-Except: Handling potential errors during user input and calculations.  
### Lets Begin
```python
def main():
```
This line defines a function named `main()`. The `main()` function is the entry point of the program.

```python
    try:
```
This line starts a `try` block, which is used for handling exceptions. If any code within the `try` block raises an exception, the program will jump to the corresponding `except` block.

```python
        discharge = float(input("Enter river discharge in cumecs: "))
        concenteration = float(input("Enter sediment concenteration in mg/l: "))
```
These lines prompt the user to enter the river discharge in cumecs (cubic meters per second) and the sediment concentration in mg/l (milligrams per liter). The `input()` function is used to get the user's input, and the `float()` function is used to convert the input to a floating-point number.

```python
        concenteration_2 = concenteration/1e6
```
This line converts the sediment concentration from mg/l to kg/m³ by dividing it by 1,000,000 (1e6). This is done to ensure that the units are consistent with the discharge unit (m³/s).

```python
        sedimentLoad = lambda Q,C:Q*C
```
This line defines a lambda function named `sedimentLoad` that takes two parameters: `Q` (discharge) and `C` (sediment concentration). The lambda function calculates the sediment load by multiplying the discharge and concentration.

```python
        Load = sedimentLoad(discharge,concenteration_2)
```
This line calls the `sedimentLoad` lambda function with the `discharge` and `concenteration_2` values as arguments. The result is stored in the `Load` variable.

```python
        print(f"Sediment Load: {Load: .3f} kg/s")
```
This line prints the calculated sediment load using an f-string. The `{Load: .3f}` part formats the `Load` value to three decimal places.

```python
    except ValueError:
        print("Invalid Input ! Please enter numerical values")
```
This `except` block catches any `ValueError` exceptions that may occur if the user enters non-numerical values for `discharge` or `concenteration`. If a `ValueError` occurs, the program prints an error message.

```python
    except Exception as e:
        print(f"An error occured: {e}")
```
This `except` block catches any other exceptions that may occur during the execution of the code within the `try` block. If an exception occurs, the program prints an error message along with the exception details.

```python
if __name__ == "__main__":
    main()
```
These lines ensure that the `main()` function is only executed when the script is run directly (not imported as a module). The `if __name__ == "__main__":` condition checks if the script is being run as the main program.

### Full Script
```python
def main():
    try:
        #user input for discharge and sediment concenteration
        discharge = float(input("Enter river discharge in cumecs: "))
        concenteration = float(input("Enter sediment concenteration in mg/l: "))
        #convert concenteration in kg/m3
        concenteration_2 = concenteration/1e6

        #Lets calculate sediment load using lambda function
        sedimentLoad = lambda Q,C:Q*C
        #calculate sediment load
        Load = sedimentLoad(discharge,concenteration_2)

        #print results
        print(f"Sediment Load: {Load: .3f} kg/s")
    
    except ValueError:
        print("Invalid Input ! Please enter numerical values")
    except Exception as e:
        print(f"An error occured: {e}")

if __name__ == "__main__":
    main()

```