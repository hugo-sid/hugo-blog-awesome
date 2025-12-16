+++
title = 'How Matplotlib and Pandas are used? The Basics'
date = 2024-05-28T16:46:11+05:45
categories = ["Engineering","Python"]
draft = false
+++
In this tutorial, we will be working with streamflow data and using the pandas and matplotlib libraries to analyze and visualize the data.
### Streamflow Data
We will start by generating random streamflow data using the numpy library. We will create an array of 365 random numbers between 5 and 15, representing the streamflow for each day of the year.

```python
num_days = 365
streamflow = np.random.uniform(low=5,high=15,size=num_days)
```

### Creating a Date Range
Next, we will create a date range for the data using the pandas library. We will create a date range from January 26, 2000 to December 31, 2000, with 365 days.

```python
dates = pd.date_range(start='2000-01-26', periods=num_days)
```

### Creating a DataFrame

We will then create a DataFrame using the pandas library. The DataFrame will have two columns: 'Date' and 'flow'. The 'Date' column will contain the date range we created earlier, and the 'flow' column will contain the streamflow data.

```python
df = pd.DataFrame({'Date':dates,'flow':streamflow})
```
### Printing the DataFrame

We can print the first few rows of the DataFrame using the `head()` function.

```python
print(df.head())
```

### Basic Statistics

We can calculate basic statistics of the streamflow data using the `describe()` function.

```python
print(df['flow'].describe())
```

### Plotting the Data

Finally, we will plot the streamflow data using the matplotlib library. We will create a line plot with the date on the x-axis and the streamflow on the y-axis.

```python
plt.figure(figsize=(12,8))
plt.plot(df['Date'],df['flow'],marker='o',linestyle ='-',color='grey',label='Streamflow')
plt.title('Daily Streamflow')
plt.xlabel('Date')
plt.ylabel('flow m3/s')
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()
```

### Understanding 

Pandas provides data structures and functions to efficiently handle structured data, including tabular data such as spreadsheets and SQL tables.

Matplotlib is a plotting library for Python. It provides a wide range of tools for creating high-quality 2D and 3D plots, charts, and graphs. It is often used in conjunction with pandas to visualize data.

### Exploring Matplotlib in detail
1. `plt.figure(figsize=(12,8))`:
   - This function creates a new figure for the plot.
   - The `figsize` parameter sets the size of the figure to 12 inches wide and 8 inches tall.

2. `plt.plot(df['Date'],df['flow'],marker='o',linestyle ='-',color='grey',label='Streamflow')`:
   - This function creates a line plot.
   - The first argument, `df['Date']`, specifies the x-axis data (dates).
   - The second argument, `df['flow']`, specifies the y-axis data (streamflow).
   - The `marker='o'` parameter sets the marker style to a circle for each data point.
   - The `linestyle ='-'` parameter sets the line style to a solid line.
   - The `color='grey'` parameter sets the color of the line and markers to grey.
   - The `label='Streamflow'` parameter sets the label for the line, which will be used in the legend.

3. `plt.title('Daily Streamflow')`:
   - This function sets the title of the plot to "Daily Streamflow".

4. `plt.xlabel('Date')`:
   - This function sets the label for the x-axis to "Date".

5. `plt.ylabel('flow m3/s')`:
   - This function sets the label for the y-axis to "flow m3/s".

6. `plt.grid(True)`:
   - This function adds a grid to the plot.
   - The `True` parameter turns on the grid.

7. `plt.legend()`:
   - This function adds a legend to the plot.
   - The legend shows the label for each line in the plot.

8. `plt.tight_layout()`:
   - This function adjusts the spacing between the subplots and the figure edge to make the plot look neat and tidy.

9. `plt.show()`:
   - This function displays the plot.

## Script
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

#Streamflow data
#Lets generate random streamflow data
num_days = 365
#streamflow = np.random.randint(low=5,high=15,size=num_days)
streamflow = np.random.uniform(low=5,high=15,size=num_days)

#print(streamflow)

#create date range for data
dates =pd.date_range(start='2000-01-26',periods=num_days)
#print(dates)

#create dataframa
df = pd.DataFrame({'Date':dates,'flow':streamflow})
#print(type(streamflow),type(dates),type(df))
#print(df)

#to print first few data, we can use head function 
print(df.head())

#Basic Statistics of streamflow data
print(df['flow'].describe())

#Lets plot the data now
plt.figure(figsize=(12,8))
plt.plot(df['Date'],df['flow'],marker='o',linestyle ='-',color='grey',label='Streamflow')
plt.title('Daily Streamflow')
plt.xlabel('Date')
plt.ylabel('flow m3/s')
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()
```