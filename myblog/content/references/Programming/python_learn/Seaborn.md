+++
title = 'Seaborn'
date = 2023-06-30T12:48:35+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++

Seaborn is a powerful data visualization library in Python that helps you create attractive and informative statistical graphics. It is built on top of Matplotlib, another popular visualization library, and provides a high-level interface for drawing plots.

Some key features of Seaborn include:

1. **Attractive Plots**: Seaborn offers a range of default themes and color palettes that make your plots look appealing and professional. It also provides tools for customizing the appearance of your plots to suit your preferences.

2. **Integration with Pandas**: Seaborn works seamlessly with Pandas, a popular data manipulation library in Python. You can easily create visualizations from Pandas dataframes using Seaborn functions.

3. **Statistical Visualizations**: Seaborn specializes in creating statistical graphics, such as scatter plots, line plots, bar plots, and heatmaps. It also provides tools for visualizing distributions, relationships between variables, and categorical data.

4. **Facet Grids**: Seaborn allows you to create multi-plot visualizations called facet grids. These grids make it easy to compare multiple subsets of data or variables in a single figure.

5. **Regression Plots**: Seaborn provides functions for visualizing linear regression models, making it easy to explore relationships between variables and identify trends in your data.

To use Seaborn, you first need to install it using a package manager like pip or conda. Once installed, you can import the library into your Python code using the following line:

```python
import seaborn as sns
```

After importing Seaborn, you can access its various functions and modules to create visualizations. For example, you can create a scatter plot using the `scatterplot()` function:

```python
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.scatterplot(x="total_bill", y="tip", data=tips)
plt.show()
```

This code will create a scatter plot of the "total_bill" and "tip" variables from the "tips" dataset.

Seaborn is widely used in fields such as data science, machine learning, and scientific research. By learning how to use Seaborn, you can gain valuable skills for visualizing and communicating insights from data.

Let's start with 30 examples using Seaborn, and then we'll cover 30 examples using SciPy.

Seaborn Examples:

First, let's import the necessary modules:

```python
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
```

1. Line Plot
   ```python
   sns.lineplot(x=[1, 2, 3, 4], y=[1, 4, 9, 16])
   plt.show()
   ```

2. Scatter Plot
   ```python
   sns.scatterplot(x=[1, 2, 3, 4], y=[1, 4, 9, 16])
   plt.show()
   ```

3. Bar Plot
   ```python
   sns.barplot(x=['A', 'B', 'C'], y=[1, 3, 2])
   plt.show()
   ```

4. Box Plot
   ```python
   sns.boxplot(x='species', y='sepal_length', data=sns.load_dataset("iris"))
   plt.show()
   ```

5. Violin Plot
   ```python
   sns.violinplot(x='species', y='sepal_length', data=sns.load_dataset("iris"))
   plt.show()
   ```

6. Swarm Plot
   ```python
   sns.swarmplot(x='species', y='sepal_length', data=sns.load_dataset("iris"))
   plt.show()
   ```

7. Heat Map
   ```python
   sns.heatmap(np.random.rand(10, 10))
   plt.show()
   ```

8. Pair Plot
   ```python
   sns.pairplot(sns.load_dataset("iris"))
   plt.show()
   ```

9. Joint Plot
   ```python
   sns.jointplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"))
   plt.show()
   ```

10. Regression Plot
    ```python
    sns.regplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"))
    plt.show()
    ```

11. Residual Plot
    ```python
    sns.residplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"))
    plt.show()
    ```

12. KDE Plot
    ```python
    sns.kdeplot(data=sns.load_dataset("iris")['sepal_length'])
    plt.show()
    ```

13. Facet Grid
    ```python
    g = sns.FacetGrid(sns.load_dataset("iris"), col="species")
    g.map(sns.histplot, "sepal_length")
    plt.show()
    ```

14. Categorial Plot
    ```python
    sns.catplot(x="species", y="sepal_length", kind="box", data=sns.load_dataset("iris"))
    plt.show()
    ```

15. Count Plot
    ```python
    sns.countplot(x='species', data=sns.load_dataset("iris"))
    plt.show()
    ```

16. Dist Plot
    ```python
    sns.distplot(sns.load_dataset("iris")['sepal_length'])
    plt.show()
    ```

17. Strip Plot
    ```python
    sns.stripplot(x='species', y='sepal_length', data=sns.load_dataset("iris"))
    plt.show()
    ```

18. Cluster Map
    ```python
    sns.clustermap(sns.load_dataset("iris").drop('species', axis=1))
    plt.show()
    ```

19. Lm Plot
    ```python
    sns.lmplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"))
    plt.show()
    ```

20. Rel Plot
    ```python
    sns.relplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"))
    plt.show()
    ```

21. Point Plot
    ```python
    sns.pointplot(x='species', y='sepal_length', data=sns.load_dataset("iris"))
    plt.show()
    ```

22. Rug Plot
    ```python
    sns.rugplot(sns.load_dataset("iris")['sepal_length'])
    plt.show()
    ```

23. Setting Style
    ```python
    sns.set_style("darkgrid")
    sns.lineplot(x=[1, 2, 3, 4], y=[1, 4, 9, 16])
    plt.show()
    ```

24. Color Palette
    ```python
    sns.set_palette("husl")
    sns.scatterplot(x='sepal_length', y='sepal_width', hue='species', data=sns.load_dataset("iris"))
    plt.show()
    ```

25. Figure Size
    ```python
    sns.set(rc={'figure.figsize':(11.7,8.27)})
    sns.lineplot(x=[1, 2, 3, 4], y=[1, 4, 9, 16])
    plt.show()
    ```

26. Despine
    ```python
    sns.lineplot(x=[1, 2, 3, 4], y=[1, 4, 9, 16])
    sns.despine()
    plt.show()
    ```

27. Joint KDE
    ```python
    sns.jointplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"), kind='kde')
    plt.show()
    ```

28. Hex Bin Plot
    ```python
    sns.jointplot(x='sepal_length', y='sepal_width', data=sns.load_dataset("iris"), kind='hex')
    plt.show()
    ```

29. Pair Grid
    ```python
    g = sns.PairGrid(sns.load_dataset("iris"))
    g.map_diag(sns.histplot)
    g.map_offdiag(sns.scatterplot)
    plt.show()
    ```

30. Animated Plot (using FuncAnimation)
    ```python
    import matplotlib.animation as animation

    fig, ax = plt.subplots()
    x = np.linspace(0, 10, 100)
    line, = ax.plot(x, np.sin(x))

    def animate(i):
        line.set_ydata(np.sin(x + i/10))
        return line,

    ani = animation.FuncAnimation(fig, animate, frames=100, interval=50)
    plt.show()
    ```

