+++
title = 'Plotly'
date = 2023-07-03T12:55:08+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++

Plotly is an open-source library for creating interactive and visually appealing data visualizations in Python. It provides a wide range of chart types, including scatter plots, line charts, bar charts, histograms, box plots, pie charts, and more.

Some key features of Plotly include:

1. **Interactive Plots**: Plotly generates interactive plots that allow users to zoom, pan, hover over data points, and even export data. This makes it easy to explore and understand complex datasets.

2. **Customization**: Plotly offers extensive customization options, allowing you to change the colors, labels, legends, and other aspects of your plots to suit your needs.

3. **Animations**: Plotly supports creating animated plots, which can be useful for visualizing changes over time or highlighting specific data points.

4. **Offline Plotting**: Plotly plots can be saved as HTML files, allowing you to share them with others without requiring an internet connection.

Here's a simple example of how to create a scatter plot using Plotly:

```python
import plotly.graph_objects as go

x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]

fig = go.Figure(data=go.Scatter(x=x, y=y))
fig.show()
```

In this example, we first import the `go` module from `plotly.graph_objects`. We then define the x and y coordinates for our scatter plot. Next, we create a `Figure` object using `go.Figure()` and pass our data to `go.Scatter()`. Finally, we call the `show()` method to display the plot.

Plotly also provides a higher-level interface called Plotly Express, which allows you to create entire figures with a single function call. Here's an example using Plotly Express:

```python
import plotly.express as px

df = px.data.tips()
fig = px.scatter(df, x="total_bill", y="tip", color="sex")
fig.show()
```

In this example, we import the `px` module from `plotly.express`. We then load a built-in dataset called `tips` using `px.data.tips()`. We create a scatter plot using `px.scatter()`, specifying the x and y variables and coloring the points by the "sex" variable. Finally, we call `show()` to display the plot.

Plotly is widely used in various fields, such as data science, machine learning, and business analytics. It is a powerful tool for creating interactive and informative visualizations that can help you gain insights from your data.


 First, let's import the necessary modules:

```python
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import numpy as np
```



1. Basic Line Plot
   ```python
   fig = px.line(x=[0, 1, 2, 3, 4], y=[0, 1, 4, 9, 16])
   fig.show()
   ```

2. Scatter Plot
   ```python
   fig = px.scatter(x=[0, 1, 2, 3, 4], y=[0, 1, 4, 9, 16])
   fig.show()
   ```

3. Bar Chart
   ```python
   fig = px.bar(x=['A', 'B', 'C'], y=[1, 3, 2])
   fig.show()
   ```

4. Histogram
   ```python
   fig = px.histogram(x=np.random.randn(1000))
   fig.show()
   ```

5. Box Plot
   ```python
   fig = px.box(y=np.random.randn(100))
   fig.show()
   ```

6. Violin Plot
   ```python
   fig = px.violin(y=np.random.randn(100))
   fig.show()
   ```

7. Heatmap
   ```python
   fig = px.imshow(np.random.randn(20, 20))
   fig.show()
   ```

8. 3D Scatter Plot
   ```python
   fig = px.scatter_3d(x=np.random.randn(100), y=np.random.randn(100), z=np.random.randn(100))
   fig.show()
   ```

9. Bubble Chart
   ```python
   fig = px.scatter(x=[1, 2, 3, 4], y=[1, 2, 3, 4], size=[10, 20, 30, 40])
   fig.show()
   ```

10. Pie Chart
    ```python
    fig = px.pie(values=[1, 2, 3, 4], names=['A', 'B', 'C', 'D'])
    fig.show()
    ```

11. Sunburst Chart
    ```python
    fig = px.sunburst(
        names=['A', 'B', 'C', 'D', 'E', 'F'],
        parents=['', 'A', 'A', 'B', 'B', 'C']
    )
    fig.show()
    ```

12. Treemap
    ```python
    fig = px.treemap(
        names=['A', 'B', 'C', 'D', 'E', 'F'],
        parents=['', 'A', 'A', 'B', 'B', 'C']
    )
    fig.show()
    ```

13. Contour Plot
    ```python
    fig = px.density_contour(x=np.random.randn(1000), y=np.random.randn(1000))
    fig.show()
    ```

14. Polar Chart
    ```python
    fig = px.line_polar(r=[0, 1, 2, 3, 4], theta=[0, 45, 90, 135, 180])
    fig.show()
    ```

15. Radar Chart
    ```python
    fig = px.line_polar(r=[1, 2, 3, 4, 1], theta=['A', 'B', 'C', 'D', 'E'], line_close=True)
    fig.show()
    ```

16. Candlestick Chart
    ```python
    fig = go.Figure(data=[go.Candlestick(x=['2021-01-01', '2021-01-02', '2021-01-03'],
                open=[33.0, 33.3, 33.5],
                high=[33.1, 33.8, 34.0],
                low=[32.7, 32.9, 33.2],
                close=[33.3, 33.5, 33.7])])
    fig.show()
    ```

17. OHLC Chart
    ```python
    fig = go.Figure(data=[go.Ohlc(x=['2021-01-01', '2021-01-02', '2021-01-03'],
                open=[33.0, 33.3, 33.5],
                high=[33.1, 33.8, 34.0],
                low=[32.7, 32.9, 33.2],
                close=[33.3, 33.5, 33.7])])
    fig.show()
    ```

18. Funnel Chart
    ```python
    fig = px.funnel(y=['Website visit', 'Downloads', 'Potential customers', 'Requested price', 'invoice sent'],
                    x=[39, 27.4, 20.6, 11, 2])
    fig.show()
    ```

19. Waterfall Chart
    ```python
    fig = go.Figure(go.Waterfall(
        name = "20", orientation = "v",
        measure = ["relative", "relative", "total", "relative", "total"],
        x = ["Sales", "Consulting", "Net revenue", "Purchases", "Profit"],
        textposition = "outside",
        text = ["+60", "+80", "", "-40", "Total"],
        y = [60, 80, 0, -40, 0],
        connector = {"line":{"color":"rgb(63, 63, 63)"}},
    ))
    fig.show()
    ```

20. Gantt Chart
    ```python
    df = pd.DataFrame([
        dict(Task="Job A", Start='2009-01-01', Finish='2009-02-28'),
        dict(Task="Job B", Start='2009-03-05', Finish='2009-04-15'),
        dict(Task="Job C", Start='2009-02-20', Finish='2009-05-30')
    ])
    fig = px.timeline(df, x_start="Start", x_end="Finish", y="Task")
    fig.show()
    ```

21. Choropleth Map
    ```python
    fig = px.choropleth(locations=["USA", "CAN", "MEX"], color=[1, 2, 3], scope="north america")
    fig.show()
    ```

22. Animated Scatter Plot
    ```python
    df = px.data.gapminder()
    fig = px.scatter(df, x="gdpPercap", y="lifeExp", animation_frame="year", size="pop", color="continent", 
                     hover_name="country", log_x=True, size_max=55, range_x=[100,100000], range_y=[25,90])
    fig.show()
    ```

23. Density Heatmap
    ```python
    fig = px.density_heatmap(x=np.random.randn(1000), y=np.random.randn(1000))
    fig.show()
    ```

24. Parallel Coordinates Plot
    ```python
    df = px.data.iris()
    fig = px.parallel_coordinates(df, color="species_id", labels={"species_id": "Species",
                  "sepal_width": "Sepal Width", "sepal_length": "Sepal Length",
                  "petal_width": "Petal Width", "petal_length": "Petal Length", },
                    color_continuous_scale=px.colors.diverging.Tealrose)
    fig.show()
    ```

25. Parallel Categories Diagram
    ```python
    df = px.data.tips()
    fig = px.parallel_categories(df, dimensions=['day', 'sex', 'smoker', 'time'])
    fig.show()
    ```

26. Ternary Plot
    ```python
    fig = px.scatter_ternary(a=[1, 2, 3, 4], b=[4, 3, 2, 1], c=[2, 2, 2, 2])
    fig.show()
    ```

27. Indicator
    ```python
    fig = go.Figure(go.Indicator(
        mode = "gauge+number",
        value = 270,
        domain = {'x': [0, 1], 'y': [0, 1]},
        title = {'text': "Speed"}))
    fig.show()
    ```

28. Carpet Plot
    ```python
    fig = go.Figure(go.Carpet(
        a = [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
        b = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
        y = [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10]
    ))
    fig.show()
    ```

29. Facet Plot
    ```python
    df = px.data.tips()
    fig = px.scatter(df, x="total_bill", y="tip", color="smoker", facet_col="sex")
    fig.show()
    ```

30. Custom Layout
    ```python
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=[1, 2, 3], y=[4, 5, 6], mode='lines+markers', name='Data'))
    fig.update_layout(title='Custom Plot', xaxis_title='X Axis', yaxis_title='Y Axis')
    fig.show()
    ```

### Citations:
[1] https://www.geeksforgeeks.org/python-plotly-tutorial/  
[2] https://github.com/plotly/plotly.py  
[3] Open AI  
[4] https://www.geeksforgeeks.org/getting-started-with-plotly-python/  
[5] https://plotly.com/python/plotly-express/  