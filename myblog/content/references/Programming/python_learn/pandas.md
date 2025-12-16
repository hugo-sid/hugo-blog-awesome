+++
title = 'Pandas'
date = 2023-07-13T13:14:09+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++

Pandas is a powerful open-source Python library for data manipulation and analysis. It provides easy-to-use data structures and data analysis tools for working with structured (tabular, multidimensional, potentially heterogeneous) and time series data. Pandas is built on top of NumPy and provides a high-level interface for working with large datasets efficiently.

Some key features of Pandas include:

1. **Data Structures**: Pandas provides two main data structures: Series and DataFrame.
   - **Series**: A one-dimensional labeled array capable of holding data of any type. It is similar to a column in a table or an Excel spreadsheet.
   - **DataFrame**: A two-dimensional labeled data structure with columns of potentially different types. It is similar to a spreadsheet or a SQL table.

2. **Data Manipulation**: Pandas offers a wide range of functions and methods for manipulating data, such as:
   - Selecting, filtering, and indexing data
   - Handling missing data
   - Grouping and aggregating data
   - Merging and joining datasets

3. **Data Analysis**: Pandas provides tools for performing data analysis, including:
   - Descriptive statistics (mean, median, standard deviation, etc.)
   - Data visualization (using libraries like Matplotlib and Seaborn)
   - Time series analysis

4. **Data I/O**: Pandas supports reading and writing data in various formats, such as CSV, Excel, SQL databases, and more.

Here's a simple example of how to use Pandas to read a CSV file and perform some basic analysis:

```python
import pandas as pd

# Read a CSV file
df = pd.read_csv('data.csv')

# Display the first few rows of the DataFrame
print(df.head())

# Calculate the mean of a column
mean_value = df['column_name'].mean()
print("Mean value:", mean_value)

# Filter the DataFrame based on a condition
filtered_df = df[df['column_name'] > 10]
print("Filtered DataFrame:\n", filtered_df)
```

In this example, we first import the Pandas library using the alias `pd`. We then use the `pd.read_csv()` function to read a CSV file named `data.csv` into a DataFrame called `df`. We display the first few rows of the DataFrame using the `head()` method.

Next, we calculate the mean of a specific column using the `mean()` method. We access the column using the column name in square brackets.

Finally, we filter the DataFrame based on a condition using boolean indexing. We create a new DataFrame called `filtered_df` that contains only the rows where the value in the specified column is greater than 10.

Pandas is widely used in various fields, such as finance, healthcare, e-commerce, and scientific research. It is an essential tool for data scientists and analysts working with Python.


1. pd.read_csv(): Read a CSV file
   ```python
   df = pd.read_csv('data.csv')
   ```

2. pd.DataFrame(): Create a DataFrame
   ```python
   df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
   ```

3. df.head(): View first few rows
   ```python
   df.head(3)
   ```

4. df.tail(): View last few rows
   ```python
   df.tail(3)
   ```

5. df.info(): Get concise summary of DataFrame
   ```python
   df.info()
   ```

6. df.describe(): Generate descriptive statistics
   ```python
   df.describe()
   ```

7. df.shape: Get dimensions of DataFrame
   ```python
   df.shape
   ```

8. df.columns: Get column names
   ```python
   df.columns
   ```

9. df['column']: Select a single column
   ```python
   df['A']
   ```

10. df.loc[]: Access group of rows and columns by label
    ```python
    df.loc[0:2, 'A':'C']
    ```

11. df.iloc[]: Access group of rows and columns by integer position
    ```python
    df.iloc[0:2, 0:3]
    ```

12. df.drop(): Drop specified rows or columns
    ```python
    df.drop('column_name', axis=1)
    ```

13. df.dropna(): Remove rows with missing data
    ```python
    df.dropna()
    ```

14. df.fillna(): Fill missing data
    ```python
    df.fillna(value=0)
    ```

15. df.sort_values(): Sort by values
    ```python
    df.sort_values(by='column_name')
    ```

16. df.groupby(): Group DataFrame by a specified key
    ```python
    df.groupby('column_name').mean()
    ```

17. df.merge(): Merge DataFrames
    ```python
    pd.merge(df1, df2, on='key_column')
    ```

18. df.concat(): Concatenate DataFrames
    ```python
    pd.concat([df1, df2])
    ```

19. df.pivot_table(): Create a spreadsheet-style pivot table
    ```python
    df.pivot_table(values='D', index=['A', 'B'], columns=['C'])
    ```

20. df.apply(): Apply a function to each element
    ```python
    df['A'].apply(lambda x: x*2)
    ```

21. df.isnull(): Detect missing values
    ```python
    df.isnull()
    ```

22. df.duplicated(): Detect duplicate rows
    ```python
    df.duplicated()
    ```

23. df.to_csv(): Write DataFrame to CSV file
    ```python
    df.to_csv('output.csv')
    ```

24. df.value_counts(): Count unique values in a column
    ```python
    df['A'].value_counts()
    ```

25. df.astype(): Cast a pandas object to a specified dtype
    ```python
    df['A'].astype('int64')
    ```

26. df.rename(): Rename axes
    ```python
    df.rename(columns={'old_name': 'new_name'})
    ```

27. df.melt(): Unpivot a DataFrame
    ```python
    pd.melt(df, id_vars=['A'], value_vars=['B', 'C'])
    ```

28. df.nlargest(): Return the n largest values
    ```python
    df.nlargest(3, 'column_name')
    ```

29. df.cut(): Bin values into discrete intervals
    ```python
    pd.cut(df['A'], bins=3)
    ```

30. df.resample(): Resample time-series data
    ```python
    df.resample('D').mean()  # Assuming df has a datetime index
    ```



## Citations:
[1] https://en.wikipedia.org/wiki/Pandas_%28software%29  
[2] https://mode.com/python-tutorial/libraries/pandas/  
[3] https://www.w3schools.com/python/pandas/default.asp  
[4] https://pandas.pydata.org  
[5] https://www.geeksforgeeks.org/introduction-to-pandas-in-python/