+++
title = 'Data handling - Monthly Flow'
date = 2024-06-02T10:08:33+05:45
categories = ["Engineering","Python", "AI_help"]
draft = false
+++
*Note: The explanation of the code is generated with the assistance of AI* 

### Importing Libraries
```python
import pandas as pd
import matplotlib.pyplot as plt
```
- **pandas** (pd): A powerful Python library for data manipulation and analysis. It provides data structures and functions to efficiently handle structured data, including tabular data such as spreadsheets and SQL tables.
- **matplotlib.pyplot** (plt): A Python plotting library that provides a MATLAB-like interface for creating a variety of charts, including line plots, scatter plots, histograms, and more.

### Loading the CSV File
```python
file_path = 'discharge_ai.csv'  # Replace with the path to your CSV file
df = pd.read_csv(file_path)
```
- **pd.read_csv(file_path)**: This function reads a CSV file into a DataFrame. The DataFrame is a two-dimensional labeled data structure with columns of potentially different types. It is similar to an Excel spreadsheet or SQL table, or a dictionary of Series objects.

### Displaying the First Few Rows of the DataFrame
```python
print(df.head())
```
- **df.head()**: This method returns the first n rows for the object based on position. It is useful for quickly testing if your object has the right type of data in it. By default, it returns the first 5 rows.

### Converting the 'Date' Column to Datetime Format
```python
df['Date'] = pd.to_datetime(df['Date'])
```
- **pd.to_datetime()**: This method converts various types of date formats into a standardized datetime format. It is useful for handling date and time data in a consistent manner.

### Setting the 'Date' Column as the Index
```python
df.set_index('Date', inplace=True)
```
- **df.set_index('Date', inplace=True)**: This method sets the 'Date' column as the index of the DataFrame. This allows for efficient data manipulation and analysis based on the date.

### Checking for Missing Values
```python
print(df.isna().sum())
```
- **df.isna()**: This method returns a boolean DataFrame showing whether each element is missing (NaN) or not.
- **.sum()**: This method returns the sum of the boolean values, effectively counting the number of missing values.

### Handling Missing Values (Forward Fill)
```python
df.fillna(method='ffill', inplace=True)
```
- **df.fillna()**: This method fills missing values in the DataFrame. It can be used to fill missing values with a specific value or to forward fill missing values.
- **method='ffill'**: This method fills missing values by propagating the last valid observation forward.
- **inplace=True**: This parameter modifies the DataFrame in place, meaning it changes the original DataFrame.

### Resampling the Data to Calculate Monthly Averages
```python
monthly_avg = df.resample('M').mean()
```
- **df.resample('M')**: This method resamples the DataFrame by grouping it by a specified period. In this case, it groups the data by months.
- **.mean()**: This method calculates the mean of the resampled data.

### Displaying the Monthly Averages
```python
print(monthly_avg.head())
```
- **monthly_avg.head()**: This method returns the first n rows for the object based on position. It is useful for quickly testing if your object has the right type of data in it. By default, it returns the first 5 rows.

### Plotting the Monthly Averages
```python
plt.figure(figsize=(10, 6))
plt.plot(monthly_avg.index, monthly_avg['Discharge'], marker='o', linestyle='-')
plt.title('Monthly Average River Discharge')
plt.xlabel('Date')
plt.ylabel('Discharge (cubic meters per second)')
plt.grid(True)
plt.show()
```
- **plt.figure(figsize=(10, 6))**: This method creates a new figure with the specified size.
- **plt.plot()**: This method creates a line plot of the data.
- **plt.title()**: This method sets the title of the plot.
- **plt.xlabel()** and **plt.ylabel()**: These methods set the labels for the x and y axes.
- **plt.grid(True)**: This method adds a grid to the plot.
- **plt.show()**: This method displays the plot.

## Full Script 
``` Python
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

# Load the CSV file
file_path = 'discharge_ai.csv'
df = pd.read_csv(file_path)

# Define a function to convert the 'Date' column to datetime format
def convert_date(df):
    df['Date'] = pd.to_datetime(df['Date'])
    return df

# Define a function to set the 'Date' column as the index
def set_index(df):
    df.set_index('Date', inplace=True)
    return df

# Define a function to check for missing values
def check_missing(df):
    print(df.isna().sum())
    return df

# Define a function to handle missing values
def handle_missing(df):
    df.fillna(method='ffill', inplace=True)
    return df

# Define a function to resample the data to calculate monthly averages
def resample_data(df):
    monthly_avg = df.resample('M').mean()
    return monthly_avg

# Define a function to plot the monthly averages
def plot_data(monthly_avg):
    plt.figure(figsize=(10, 6))
    plt.plot(monthly_avg.index, monthly_avg['Discharge'], marker='o', linestyle='-')
    plt.title('Monthly Average River Discharge')
    plt.xlabel('Date')
    plt.ylabel('Discharge (cubic meters per second)')
    plt.grid(True)
    plt.show()

# Load the CSV file
df = pd.read_csv(file_path)

# Convert the 'Date' column to datetime format
df = convert_date(df)

# Set the 'Date' column as the index
df = set_index(df)

# Check for missing values
df = check_missing(df)

# Handle missing values
df = handle_missing(df)

# Resample the data to calculate monthly averages
monthly_avg = resample_data(df)

# Plot the monthly averages
plot_data(monthly_avg)
```
[*Download CSV File*](https://drive.google.com/file/d/1R-m_-2s2f5VWKrCXQIwZ3iiiRBaF8aHR/view?usp=sharing)

## Citations  
[1] https://www.programiz.com/python-programming/pandas/methods/to_datetime
[2] https://www.programiz.com/python-programming/pandas/methods/set_index
[3] https://www.studytonight.com/pandas/pandas-dataframe-head-method
[4] https://pyimagesearch.com/2024/04/30/pandas-to_datetime-pd-to_datetime/
[5] https://www.geeksforgeeks.org/python-pandas-dataframe-set_index/
[6] https://www.codecademy.com/resources/docs/pandas/built-in-functions/to-datetime
[7] https://www.w3schools.com/python/pandas/ref_df_set_index.asp
[8] https://www.geeksforgeeks.org/python-pandas-dataframe-series-head-method/
[9] https://www.geeksforgeeks.org/python-pandas-to_datetime/
[10] https://favtutor.com/articles/pandas-isna/
