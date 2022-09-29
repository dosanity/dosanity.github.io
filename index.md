---
layout: default
---

# Projects

---

## [Webscrape GitHub Repositories](/webscraping-github-analysis.md){: .und}

[Source Code](https://github.com/dosanity/webscraping-github-analysis/blob/main/webscraping-github-analysis.py){: .btn}

There are many GitHub repostories and some are more popular than others. A Git repository tracks and saves the history of all changes made to the files in a Git project. It saves this data in a directory called . git, also known as the repository folder. Git uses a version control system to track all changes made to the project and save them in the repository. In this project, we will be scraping GitHub repositories and organize the information in a Pandas dataframe. After that, we will use linear regressions to gain meaningful insights on the data we collected. Our goal is to identify properties that make a repository popular which will give insights on future uses of repositories.

## [Salt Lake City Real Estate](/slc-real-estate-analysis.md){: .und}

[Source Code](https://github.com/dosanity/SLC-real-estate-analysis/blob/main/SLC-real-estate.ipynb){: .btn}

We analyzed the SLC real estate data. The dataset contains multiple listing service (MLS) real estate transactions for houses sold in 2015-16 in zip code 84103 (SLC avenues neighborhood). We were primarily interested in regressing the SoldPrice on the house attributes (property size, house size, number of bedrooms, etc...).

## [US Crime Analysis](/us-crime-analysis.md){: .und}

[Source Code](https://github.com/dosanity/us-crime-analysis/blob/main/US-crime-analysis.ipynb){: .btn}

There are many crimes that happen in the United States. Some believe that bigger cities and more populated states have more crime rates. In this project, we will be analyzing a dataset describing 1973 violent crime rates by US State. The crimes considered are assault, murder, and rape. Also included is the percent of the population living in urban areas. Our goal is to use unsupervised machine learning methods such as Cluster Heat Maps, Principle Component Analysis, K-Means Clustering, Hierarchical Clustering, and DBSCAN to understand how violent crimes differ between states.

## [Online News Popularity](/online-news-analysis.md){: .und} 

[Source Code](https://github.com/dosanity/online-news-analysis/blob/main/online-news-popularity.ipynb){: .btn}

We compared different classification tools such as K-NN, SVM, and Decision Trees to predict the popularity of online news based on attributes such as the length of the article, the number of images, the day of the week that the article was published, and some variables related to the content of the article.

## [MNIST Handwritten Digits](/MNIST-digits-analysis.md){: .und}

[Source Code](https://github.com/dosanity/MNIST-digits-analysis/blob/main/MNIST-digits.ipynb){: .btn}

The MNIST handwritten digit dataset consists of images of handwritten digits, together with labels indicating which digit is in each image. We can see that images are just matrices with scalar values so we can apply the different classification algorithms on them. Because both the features and the labels are present in this dataset (and labels for large datasets are generally difficult/expensive to obtain), this dataset is frequently used as a benchmark to compare various classification methods. For example, this webpage gives a comparison of a variety of different classification methods on MNIST. Our goal is to use scikit-learn machine learning to compare classification methods on the MNIST dataset.