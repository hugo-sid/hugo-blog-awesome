+++
title = 'Scipy'
date = 2023-07-05T12:45:03+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++


SciPy (Scientific Python) is a collection of mathematical algorithms and convenience functions built on the NumPy extension of Python. It adds significant power to the interactive Python session by providing user-friendly and efficient numerical routines, such as routines for numerical integration, interpolation, optimization, linear algebra, and statistics.

SciPy is open-source software, which means that it is free to use and modify. It is also well-supported, with a large community of users and developers contributing to its growth and improvement.

Some of the key areas where SciPy is used include:

1. **Numerical Integration**: SciPy can help you solve problems involving integrals, differential equations, and initial value problems.

2. **Interpolation**: SciPy can help you estimate values between data points, which is useful for creating smooth curves or surfaces from discrete data.

3. **Optimization**: SciPy can help you find the best solution to a problem, such as minimizing a function or finding the roots of an equation.

4. **Linear Algebra**: SciPy can help you solve systems of linear equations, compute eigenvalues and eigenvectors, and perform other matrix operations.

5. **Statistics**: SciPy provides a wide range of statistical functions, such as probability distributions, hypothesis tests, and correlation coefficients.

To use SciPy, you need to have Python installed on your computer. You can then install SciPy using a package manager like pip or conda. Once you have SciPy installed, you can import it into your Python code using the following line:

```python
import scipy
```

After importing SciPy, you can access its various functions and modules by specifying the appropriate submodule, such as `scipy.integrate` for numerical integration or `scipy.stats` for statistics.

SciPy is a powerful tool for scientific computing, and it is widely used in fields such as physics, engineering, biology, and finance. By learning how to use SciPy, you can gain valuable skills for working with data and solving complex problems.

## Some Important Functions of SciPy

Importing scipy ...

```python
import scipy as sp
from scipy import stats, optimize, interpolate, integrate, signal, linalg
import numpy as np
```

1. T-Test
   ```python
   t_statistic, p_value = stats.ttest_ind(np.random.normal(0, 1, 100), np.random.normal(0, 1, 100))
   ```

2. Chi-Square Test
   ```python
   chi2_statistic, p_value = stats.chisquare([16, 18, 16, 14, 12, 12])
   ```

3. ANOVA
   ```python
   f_statistic, p_value = stats.f_oneway(np.random.normal(0, 1, 100), np.random.normal(0, 1, 100), np.random.normal(0, 1, 100))
   ```

4. Pearson Correlation
   ```python
   r, p_value = stats.pearsonr(np.random.normal(0, 1, 100), np.random.normal(0, 1, 100))
   ```

5. Spearman Correlation
   ```python
   rho, p_value = stats.spearmanr(np.random.normal(0, 1, 100), np.random.normal(0, 1, 100))
   ```

6. Minimize Function
   ```python
   def f(x):
       return x**2 + 10*np.sin(x)
   result = optimize.minimize(f, x0=0)
   ```

7. Root Finding
   ```python
   def f(x):
       return x**3 - 1
   root = optimize.root(f, x0=0.5)
   ```

8. Curve Fitting
   ```python
   def f(x, a, b):
       return a * np.exp(-b * x)
   xdata = np.linspace(0, 4, 50)
   y = f(xdata, 2.5, 1.3) + 0.2 * np.random.normal(size=xdata.size)
   popt, _ = optimize.curve_fit(f, xdata, y)
   ```

9. Interpolation
   ```python
   x = np.arange(0, 10)
   y = np.exp(-x/3.0)
   f = interpolate.interp1d(x, y)
   ```

10. Integration
    ```python
    def f(x):
        return np.exp(-x**2)
    result, _ = integrate.quad(f, -np.inf, np.inf)
    ```

11. Ordinary Differential Equation Solver
    ```python
    def model(y, t, k):
        dydt = -k * y
    solution = integrate.odeint(model, y0=1, t=np.linspace(0, 10), args=(0.2,))
    ```

12. Fast Fourier Transform
    ```python
    t = np.linspace(0, 1, 1000)
    y = np.sin(2 * np.pi * 10 * t) + 0.5 * np.sin(2 * np.pi * 20 * t)
    yf = sp.fft.fft(y)
    ```

13. Signal Filtering
    ```python
    t = np.linspace(0, 1, 1000, False)
    sig = np.sin(2*np.pi*10*t) + np.sin(2*np.pi*20*t)
    sig_noise = sig + 2.5*np.random.randn(len(t))
    sig_filt = signal.medfilt(sig_noise, 21)
    ```

14. Linear Algebra - Eigenvalues
    ```python
    A = np.array([[1, 2], [3, 4]])
    eigenvalues, eigenvectors = linalg.eig(A)
    ```

15. Linear Algebra - Solve Linear System
    ```python
    A = np.array([[1, 2], [3, 4]])
    b = np.array([5, 6])
    x = linalg.solve(A, b)
    ```

16. Sparse Matrix
    ```python
    from scipy import sparse
    A = sparse.csr_matrix([[1, 2, 0], [0, 0, 3], [4, 0, 5]])
    ```

17. Distance Computation
    ```python
    from scipy.spatial import distance
    dist = distance.euclidean([1, 0, 0], [0, 1, 0])
    ```

18. Clustering
    ```python
    from scipy.cluster.hierarchy import dendrogram, linkage
    X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
    Z = linkage(X, 'ward')
    ```

19. Optimization - Linear Programming
    ```python
    from scipy.optimize import linprog
    c = [-1, 4]
    A = [[-3, 1], [1, 2]]
    b = [6, 4]
    res = linprog(c, A_ub=A, b_ub=b)
    ```

20. Convolution
    ```python
    from scipy import signal
    x = np.array([1, 2, 3])
    h = np.array([0, 1, 0.5])
    y = signal.convolve(x, h)
    ```

21. Image Processing
    ```python
    from scipy import ndimage
    im = np.zeros((256, 256))
    im[64:-64, 64:-64] = 1
    im = ndimage.rotate(im, 15, mode='constant')
    ```

22. Wavelet Transform
    ```python
    from scipy import signal
    t = np.linspace(-1, 1, 200, endpoint=False)
    sig = np.cos(2 * np.pi * 7 * t) + signal.gausspulse(t - 0.4, fc=2)
    widths = np.arange(1, 31)
    cwtmatr = signal.cwt(sig, signal.ricker, widths)
    ```

23. Special Functions
    ```python
    from scipy import special
    x = np.linspace(0, 10, 1000)
    y = special.jv(0, x)  # Bessel function of the first kind of order 0
    ```

24. Numerical Differentiation
    ```python
    def f(x):
        return x**2
    df = sp.misc.derivative(f, 1.0, dx=1e-6)
    ```

25. Probability Distributions
    ```python
    from scipy import stats
    x = np.linspace(-5, 5, 100)
    y = stats.norm.pdf(x, 0, 1)
    ```

26. Kernel Density Estimation
    ```python
    from scipy import stats
    data = np.random.normal(0, 1, 1000)
    kde = stats.gaussian_kde(data)
    x = np.linspace(-4, 4, 100)
    y = kde(x)
    ```

27. Hypothesis Testing
    ```python
    from scipy import stats
    data = np.random.normal(0, 1, 1000)
    statistic, p_value = stats.normaltest(data)
    ```

28. Sparse Eigenvalue Problem
    ```python
    from scipy import sparse
    from scipy.sparse.linalg import eigs
    A = sparse.rand(1000, 1000, density=0.01, format='csr')
    eigenvalues, eigenvectors = eigs(A, k=5)
    ```

29. Savitzky-Golay Filter
    ```python
    from scipy.signal import savgol_filter
    x = np.linspace(0, 2*np.pi, 100)
    y = np.sin(x) + np.random.random(100) * 0.2
    yhat = savgol_filter(y, 51, 3)
    ```

30. Delaunay Triangulation
    ```python
    from scipy.spatial import Delaunay
    points = np.random.rand(30, 2)
    tri = Delaunay(points)
    ```

