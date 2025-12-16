+++
title = 'Scikit Learn'
date = 2023-07-09T13:05:42+05:45
draft = false
categories = ["PythonLibraries","AI_help"]

+++
Scikit-Learn (also known as sklearn) is a powerful machine learning library in Python. It provides a wide range of algorithms for classification, regression, clustering, and dimensionality reduction. Scikit-Learn is built on top of NumPy, SciPy, and matplotlib, making it easy to use and integrate with other Python libraries.

Some key features of Scikit-Learn include:

1. **Consistent API**: Scikit-Learn provides a consistent and intuitive API, making it easy to switch between different algorithms without changing your code significantly. This consistency simplifies the learning curve and encourages experimentation with various models.

2. **Extensive Algorithm Collection**: Scikit-Learn offers a wide range of machine learning algorithms, including:
   - Supervised learning algorithms: Support Vector Machines (SVM), Decision Trees, Random Forests, K-Nearest Neighbors (KNN), and Gradient Boosting.
   - Unsupervised learning algorithms: K-Means, DBSCAN, and Principal Component Analysis (PCA).
   - Dimensionality reduction techniques: t-SNE and Singular Value Decomposition (SVD).

3. **Data Preprocessing**: Scikit-Learn provides numerous tools for data preprocessing, such as data scaling, feature selection, and handling missing values. These preprocessing techniques are crucial for preparing the data before training machine learning models.

4. **Model Evaluation**: Scikit-Learn includes functions to assess the performance of machine learning models through various metrics like accuracy, precision, recall, F1-score, and more. It also supports cross-validation techniques to obtain reliable estimates of model performance.

Here's a simple example of how to use Scikit-Learn to train a K-Nearest Neighbors (KNN) classifier on the famous Iris dataset:

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# Load the Iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a KNN classifier
knn = KNeighborsClassifier(n_neighbors=5)

# Train the classifier
knn.fit(X_train, y_train)

# Make predictions on the test set
y_pred = knn.predict(X_test)
```

In this example, we load the Iris dataset, split it into training and testing sets, create a KNN classifier, train it on the training data, and then make predictions on the test data.

Scikit-Learn is widely used in various fields, such as healthcare, finance, marketing, and scientific research. It is a valuable tool for both beginners and experienced data scientists looking to build and deploy machine learning models efficiently.

Certainly. Here are 30 important functions and methods from scikit-learn, along with brief examples. Note that for these examples, I'll assume the following imports:

```python
import numpy as np
from sklearn import datasets, model_selection, preprocessing, metrics, decomposition
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.cluster import KMeans
```

1. datasets.load_*(): Load built-in datasets
   ```python
   iris = datasets.load_iris()
   X, y = iris.data, iris.target
   ```

2. model_selection.train_test_split(): Split data into training and test sets
   ```python
   X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size=0.3)
   ```

3. preprocessing.StandardScaler(): Standardize features
   ```python
   scaler = preprocessing.StandardScaler()
   X_scaled = scaler.fit_transform(X)
   ```

4. LogisticRegression(): Create and train a logistic regression model
   ```python
   model = LogisticRegression()
   model.fit(X_train, y_train)
   ```

5. model.predict(): Make predictions with a trained model
   ```python
   y_pred = model.predict(X_test)
   ```

6. metrics.accuracy_score(): Calculate accuracy of predictions
   ```python
   accuracy = metrics.accuracy_score(y_test, y_pred)
   ```

7. metrics.confusion_matrix(): Compute confusion matrix
   ```python
   cm = metrics.confusion_matrix(y_test, y_pred)
   ```

8. metrics.classification_report(): Generate a classification report
   ```python
   report = metrics.classification_report(y_test, y_pred)
   ```

9. model_selection.cross_val_score(): Perform cross-validation
   ```python
   scores = model_selection.cross_val_score(model, X, y, cv=5)
   ```

10. model_selection.GridSearchCV(): Perform grid search for hyperparameter tuning
    ```python
    param_grid = {'C': [0.1, 1, 10], 'kernel': ['rbf', 'linear']}
    grid_search = model_selection.GridSearchCV(SVC(), param_grid, cv=5)
    grid_search.fit(X, y)
    ```

11. preprocessing.OneHotEncoder(): Encode categorical features
    ```python
    encoder = preprocessing.OneHotEncoder()
    X_encoded = encoder.fit_transform(X)
    ```

12. DecisionTreeClassifier(): Create and train a decision tree
    ```python
    dt = DecisionTreeClassifier()
    dt.fit(X_train, y_train)
    ```

13. RandomForestClassifier(): Create and train a random forest
    ```python
    rf = RandomForestClassifier()
    rf.fit(X_train, y_train)
    ```

14. SVC(): Create and train a support vector machine
    ```python
    svm = SVC()
    svm.fit(X_train, y_train)
    ```

15. KNeighborsClassifier(): Create and train a k-nearest neighbors classifier
    ```python
    knn = KNeighborsClassifier()
    knn.fit(X_train, y_train)
    ```

16. KMeans(): Perform K-means clustering
    ```python
    kmeans = KMeans(n_clusters=3)
    kmeans.fit(X)
    ```

17. decomposition.PCA(): Perform principal component analysis
    ```python
    pca = decomposition.PCA(n_components=2)
    X_pca = pca.fit_transform(X)
    ```

18. preprocessing.MinMaxScaler(): Scale features to a given range
    ```python
    scaler = preprocessing.MinMaxScaler()
    X_scaled = scaler.fit_transform(X)
    ```

19. model_selection.StratifiedKFold(): Stratified K-Fold cross-validator
    ```python
    skf = model_selection.StratifiedKFold(n_splits=5)
    for train_index, test_index in skf.split(X, y):
        X_train, X_test = X[train_index], X[test_index]
        y_train, y_test = y[train_index], y[test_index]
    ```

20. metrics.roc_auc_score(): Compute Area Under the Receiver Operating Characteristic Curve
    ```python
    auc = metrics.roc_auc_score(y_test, model.predict_proba(X_test)[:,1])
    ```

21. preprocessing.LabelEncoder(): Encode target labels with value between 0 and n_classes-1
    ```python
    le = preprocessing.LabelEncoder()
    y_encoded = le.fit_transform(y)
    ```

22. model.feature_importances_: Get feature importances (for tree-based models)
    ```python
    importances = rf.feature_importances_
    ```

23. metrics.mean_squared_error(): Compute mean squared error
    ```python
    mse = metrics.mean_squared_error(y_test, y_pred)
    ```

24. metrics.r2_score(): Compute R-squared score
    ```python
    r2 = metrics.r2_score(y_test, y_pred)
    ```

25. model_selection.RandomizedSearchCV(): Randomized search for hyperparameter tuning
    ```python
    param_dist = {'n_estimators': [10, 100, 1000], 'max_depth': [1, 10, 100]}
    random_search = model_selection.RandomizedSearchCV(RandomForestClassifier(), param_dist, cv=5)
    random_search.fit(X, y)
    ```

26. preprocessing.PolynomialFeatures(): Generate polynomial features
    ```python
    poly = preprocessing.PolynomialFeatures(degree=2)
    X_poly = poly.fit_transform(X)
    ```

27. model_selection.learning_curve(): Generate a learning curve
    ```python
    train_sizes, train_scores, test_scores = model_selection.learning_curve(
        LogisticRegression(), X, y, cv=5, n_jobs=-1, train_sizes=np.linspace(.1, 1.0, 5))
    ```

28. metrics.silhouette_score(): Compute the mean Silhouette Coefficient of all samples
    ```python
    silhouette_avg = metrics.silhouette_score(X, kmeans.labels_)
    ```

29. decomposition.TruncatedSVD(): Dimensionality reduction using truncated SVD
    ```python
    svd = decomposition.TruncatedSVD(n_components=2)
    X_svd = svd.fit_transform(X)
    ```

30. metrics.plot_confusion_matrix(): Plot confusion matrix
    ```python
    metrics.plot_confusion_matrix(model, X_test, y_test)
    plt.show()
    ```

These functions and methods cover a wide range of machine learning tasks, including data preprocessing, model training, evaluation, hyperparameter tuning, and dimensionality reduction. They form the core of many machine learning workflows in scikit-learn.

## Bonus: Random Forest

**Understanding Random Forests**

Random Forests are powerful supervised learning algorithms that excel in both classification and regression tasks. They operate by constructing a multitude of decision trees during training, each using a random subset of features and data points. This randomness injects diversity into the forest, preventing overfitting to the training data and enhancing generalization performance on unseen data.

**Key Concepts**

- **Decision Trees:** These are tree-like structures that recursively split data based on feature values to make predictions.
- **Ensemble Learning:** Random Forests combine predictions from multiple decision trees (the forest) through majority voting (classification) or averaging (regression) to enhance accuracy and robustness.
- **Bagging (Bootstrap Aggregation):** This ensemble technique trains each tree on a random sample (with replacement) of the original data, fostering diversity in the forest.

**Initiation (Using Python's scikit-learn library):**

```python
from sklearn.ensemble import RandomForestClassifier  # For classification tasks
# For regression tasks: from sklearn.ensemble import RandomForestRegressor

# Create a Random Forest Classifier object
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)  # Tune hyperparameters as needed

# Train the model on your features (X) and target variable (y)
rf_classifier.fit(X_train, y_train)
```

**Common Functions and Hyperparameters:**

1. **n_estimators (int):** The number of decision trees to create in the forest. More trees generally improve performance, but can increase training time. (Default: 100)
2. **max_depth (int):** The maximum depth allowed for each tree (avoid overfitting with deep trees). (Default: None)
3. **min_samples_split (int):** The minimum number of samples required to split a node in the tree. (Default: 2)
4. **min_samples_leaf (int):** The minimum number of samples allowed in a leaf node. (Default: 1)
5. **max_features (int, 'auto', 'sqrt', 'log2'):** The number of features to consider when splitting a node. 'auto' often works well. (Default: 'auto')
6. **criterion (str):** The function to measure the quality of a split ('gini' for classification, 'mse' for regression). (Default: 'gini')
7. **random_state (int):** Controls the randomness in tree selection. Setting it ensures reproducibility. (Default: None)
8. **bootstrap (bool):** Whether to use bagging (True) or not (False). (Default: True)
9. **oob_score (bool):** Whether to compute the out-of-bag (OOB) score (useful for model evaluation). (Default: False)
10. **class_weight (dict, 'balanced'):** Weights assigned to classes (helpful for imbalanced datasets). (Default: None)

**Applications**

- **Classification:** Fraud detection, spam filtering, image recognition, sentiment analysis, credit risk assessment, etc.
- **Regression:** Stock price prediction, customer churn prediction, real estate pricing, sales forecasting, etc.

**Example (Classification): Predicting Handwritten Digit Recognition**

Imagine you have a dataset of handwritten digits (images) labeled with their corresponding values (0-9). You can use a Random Forest to train a model that can recognize new handwritten digits. Here's a simplified workflow:

1. **Load and Preprocess Data:** Load the image data and convert it into suitable features (e.g., pixel intensities).
2. **Split Data:** Divide your data into training and testing sets.
3. **Train the Random Forest:** Create a RandomForestClassifier object and fit it on the training data.
4. **Make Predictions:** Use the trained model to predict the digits on the testing set.
5. **Evaluate Performance:** Calculate metrics like accuracy, precision, recall, and F1-score to assess the model's effectiveness.

**Advantages**

- **High Accuracy and Robustness:** Random Forests often achieve excellent performance on various problems due to their ensemble nature.
- **Handles Missing Data:** They can handle missing values inherently by considering only available features during splitting.
- **Feature Importance:** They provide insights into feature importance, aiding in feature selection and understanding model behavior.
- **Relatively Easy to Use:** Random Forests require less parameter tuning compared to some other algorithms.

**Disadvantages**

- **Can Be Computationally Expensive:** Training large forests with many trees can be time-consuming.
- **Explainability:** While feature importance offers some insights, individual tree decisions can be complex to interpret.



## Citations:
[1] https://www.linkedin.com/pulse/introduction-scikit-learn-library-python-machine-learning-aritra-pain  
[2] https://zerotomastery.io/blog/how-to-use-scikit-learn/    
[3] https://www.geeksforgeeks.org/learning-model-building-scikit-learn-python-machine-learning-library/  
[4] https://machinelearningmastery.com/a-gentle-introduction-to-scikit-learn-a-python-machine-learning-library/  
[5] https://en.wikipedia.org/wiki/Scikit-learn


* **Scikit-learn documentation on Random Forest:** Pedregosa, F. et al. (2011). Scikit-learn: Machine Learning in Python. JMLR 12, 2825-2830.  ([https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html))
* **Machine Learning Crash Course by Google:** Google Developers. (n.d.). Machine Learning Crash Course. developers.google.com [Chapter 10: Ensemble Learning]
* **Introduction to Statistical Learning with Applications in R** by James, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). Springer New York. (Chapter 15: Ensemble Methods)

