<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

# MNIST Handwritten Digits

The MNIST handwritten digit dataset consists of images of handwritten digits, together with labels indicating which digit is in each image. We can see that images are just matrices with scalar values so we can apply the different classification algorithms on them.

Because both the features and the labels are present in this dataset (and labels for large datasets are generally difficult/expensive to obtain), this dataset is frequently used as a benchmark to compare various classification methods. For example, [this webpage](http://yann.lecun.com/exdb/mnist/) gives a comparison of a variety of different classification methods on MNIST.

Our goal is to use scikit-learn machine learning to compare classification methods on the MNIST dataset. 

There are several versions of the MNIST dataset. We used the one that is built-into scikit-learn, described [here](http://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_digits.html). 

* Classes: 10 (one for each digit)
* Samples total: 1797
* Samples per class: $\approx$ 180
* Dimensionality: 64 (8 pixels by 8 pixels)
* Features: integers 0-16 (grayscale value; 0 is white, 16 is black)

Here are some examples of the images. Note that the digits have been size-normalized and centered in a fixed-size ($8\times8$ pixels) image.

<img src="http://scikit-learn.org/stable/_images/sphx_glr_plot_digits_classification_001.png" width="500">

Note that we will scale the data before running them through our algorithms. [This website](http://scikit-learn.org/stable/modules/preprocessing.html#standardization-or-mean-removal-and-variance-scaling) explains why scaling is important.

## Exploratory Data Analysis

```
Number of Digits: 10
Number of Samples: 1797
Number of Features: 64
```

![ExampleNumbers](https://user-images.githubusercontent.com/29410712/180262496-99c8c1a6-9e38-4d39-83fd-16ba2bbe3e2e.png)

## Classification Tools

### Classification with Support Vector Machines (SVM)

We develop a support-vector machine classification model for the data. In machine learning, support-vector machines (SVMs, also support-vector networks) are supervised learning models with associated learning algorithms that analyze data for classification and regression analysis. It uses the support-vector classifier which splits the data with a soft margin (the distance between the observations and the threshold) and some misclassifications.

1. Using Train Test Split validation procedure, we split the data into a training and test set. 
2. We use SVM to build a classifier using the *training dataset*.
3. We will find the misclassified digits.
3. Using the 'cross_val_score' function, we evaluate the accuracy of the SVM for 100 different values of the parameter C between 1 and 500.
4. We will train and test the algorithm on the raw (non-scaled) data.

First we splitting data into training and test set and then we use SVM with C = 100 to calculate the accuracy of the model.
```
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1, test_size=0.8)
clf = svm.SVC(kernel='rbf', C=100)
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)
accuracy = metrics.accuracy_score(y_true=y_test, y_pred=y_pred)
confusionmatrix = metrics.confusion_matrix(y_true=y_test, y_pred=y_pred)
print("Accuracy of Model:", accuracy)
```
```
Accuracy of Model: 0.9534075104311543
```

Since we are looking at the accuracy of the model predicting the digits, we will need to look at the misclassified digits. Using the code below, we find the index of each misclassified digit and then generate an image.
```
index = 0
misclassified_images = []
for label, predict in zip(y_test, y_pred):
    if label != predict: 
        misclassified_images.append(index)
    index +=1
    
plt.figure(figsize=(10,10))
plt.suptitle('SVM Misclassified Digits');
for plot_index, bad_index in enumerate(misclassified_images[0:]):
    p = plt.subplot(8, 9, plot_index+1)
    
    p.imshow(X_test[bad_index].reshape(8,8), cmap='Greys',
            interpolation='nearest')
    p.set_xticks(()); p.set_yticks(())
```

![Misclassified-Digits-SVM](https://user-images.githubusercontent.com/29410712/180263582-78a19b05-9fb4-4153-b639-9c56a732b522.png)

Using Cross Validation to find the accuracy of SVM we get: 

```
[0.93888889, 0.99444444, 0.98333333, 0.95, 0.98888889, 0.97777778, 0.97222222, 0.94972067, 0.96648045, 0.96089385]
```
Thus, the highest accuracy using Cross Validation is 0.99.

Now we look at the raw data and calculate the best C value for the SVM classification model.

![SVM-Accuracy](https://user-images.githubusercontent.com/29410712/180265137-b223cfd3-dc44-47c5-9351-9ec87b5b5320.png)

Using this code we calculate the accuracy of the raw data.

```
Xraw = digits.data
yraw = digits.target
Xraw_train, Xraw_test, yraw_train, yraw_test = train_test_split(Xraw, yraw, random_state=1, test_size=0.8)
clfraw = svm.SVC(kernel='rbf', C=10)
clfraw.fit(Xraw_train, yraw_train)

yraw_pred = clfraw.predict(Xraw_test)
accuracyraw = metrics.accuracy_score(y_true=yraw_test, y_pred=yraw_pred)
print("Accuracy of Raw Model:", accuracyraw)
```
```
Accuracy of Raw Model: 0.9756606397774688
```

### Results
Using the SVM classifier with C = 100, the accuracy score is 0.95 with the scaled training data. The most common mistake that the SVM classifier makes is in cases where the number of features for each data point exceeds the number of training data samples, the SVM will underperform. The SVM classifier does not perform very well when the data set has more noise such that the target classes are overlapping. The best score from the 'cross_val_score' function is the score of 0.99. With the raw or unscaled data, the accuracy score is 0.975. Additionally based on the chart, the best C value is 5.



### Prediction with K-Nearest Neighbors (K-NN)

The K-nearest neighbors (K-NN) algorithm is a simple, easy-to-implement supervised machine learning algorithm that can be used to solve both classification and regression problems. It categories unknown variables into different clusters. In our study, we will try out different values to choose the value of K. Low values of K can be noisy and subject the effects of outliers. Large values of K smooth over things, but you don't want K to be so large that a category with only a few samples in it will always be out voted by other categories. We will be using training data, data used for initial clustering (data where we know the categories in advance) to calculate the accuracy of the data.

We develop a K-NN classification model for the data and use cross validation to choose the best value of K. First we will look at K = 10 and like before, we split the data into test and training sets.

```
k = 10
X_traink, X_testk, y_traink, y_testk = train_test_split(X, y, random_state=1, test_size=0.8)
clfk = KNeighborsClassifier(n_neighbors=k)
clfk.fit(X_traink, y_traink)

y_predk = clfk.predict(X_testk)
accuracyk = metrics.accuracy_score(y_true=y_testk, y_pred=y_predk)
confusionmatrix = metrics.confusion_matrix(y_true=y_testk, y_pred=y_predk)
print("Accuracy of Model:", accuracyk)
```
```
Accuracy of Model: 0.9123783031988874
```

Since we are looking at the accuracy of the model predicting the digits, we will need to look at the misclassified digits. Using the code below, we find the index of each misclassified digit and then generate an image.
```
index = 0
misclassified_imagesk = []
for label, predict in zip(y_testk, y_predk):
    if label != predict: 
        misclassified_imagesk.append(index)
    index +=1
    
plt.figure(figsize=(10,10))
plt.suptitle('K-NN Misclassified Digits');
for plot_indexk, bad_indexk in enumerate(misclassified_imagesk[0:]):
    p = plt.subplot(9, 14, plot_indexk+1)
    
    p.imshow(X_test[bad_indexk].reshape(8,8), cmap='Greys',
            interpolation='nearest')
    p.set_xticks(()); p.set_yticks(())
```

![Misclassified-Digits-KNN](https://user-images.githubusercontent.com/29410712/180266882-8fdc8b31-31f0-4db3-b311-369bce66b113.png)

Using Cross Validation to find the accuracy of K-NN we get: 

```
[0.91666667, 0.96111111, 0.96666667, 0.9, 0.95, 0.96666667, 0.97222222, 0.95530726, 0.95530726, 0.93854749]
```
Thus, the highest accuracy using Cross Validation is 0.97.

Now we look at the raw data and calculate the best K value for the K-NN classification model.

![K-NN-Accuracy](https://user-images.githubusercontent.com/29410712/180267282-5355c9b0-03a7-4664-bd68-4c4fa85c95e2.png)

Using this code we calculate the accuracy of the raw data.

```
lfk = KNeighborsClassifier(n_neighbors=1)
clfk.fit(X_traink, y_traink)

y_predk = clfk.predict(X_testk)
accuracyk = metrics.accuracy_score(y_true=y_testk, y_pred=y_predk)
print("Accuracy of Raw Model:", accuracyk)
```
```
Accuracy of Raw Model: 0.9666203059805285
```

### Results
Using the K-NN We would need to manually remove missing values and outliers. The K-NN classifier could potentially generate wrong predictions because of the lack of scaling. The best score from the 'cross_val_score' function is the score of 0.97 of the test accuracy. With the raw or unscaled data, the best accuracy score is achieved with K = 1 and it is 0.967.