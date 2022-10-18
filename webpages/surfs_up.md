[Back](https://dosanity.github.io/){: .btn}

# Surf Up!

![luis-santiago-y8LhzOXTi1c-unsplash1](https://user-images.githubusercontent.com/29410712/189554237-083bea85-cec3-41a3-8fa8-edf58ea3899c.jpg)

## Project Overview

We are tasked to analyze and examine weather trends for the months of June and December in Oahu, Hawaii in order to deterimine if a surf and ice cream shop business is sustainable on the island. We will be using Python and SQLAlchemy to do basic climate analysis and data exploration of the meteorological data in a SQLite database. From there we will write queries to examine the temperature data for the months of June and December. 

## Resources

+ Data Source: hawaii.sqlite
+ Software: Python 3.10, Jupyter Notebook 6.4.12, VS Code 1.71.0
+ Dependencies: SQLAlchemy

## Results

### Exploratory Climate Analysis

First we looked at yearly precipitation and temperature frequency on the island of Oahu.

![precipitation](https://user-images.githubusercontent.com/29410712/192974538-6f65bb3c-7ded-4cb4-b7d7-e2e0f9d360da.png)

![temperature](https://user-images.githubusercontent.com/29410712/192974611-86b1279b-ecaa-4e0e-b07d-d8f886b2b47b.png)

Based on these results, we can see that the average rainfall happens year-round and most of the temperature obsersvations ranged between 70 to 80 degrees. These are ideal conditions for having an ice cream shop business year-round on the island.

### Summer vs Winter Analysis

![Screenshot (333)](https://user-images.githubusercontent.com/29410712/192974729-32080fd5-8f4e-482e-8dc5-d923722c5d19.png){: .size}

![Screenshot (334)](https://user-images.githubusercontent.com/29410712/192974813-cdf57d58-ca57-4cd5-9295-bcb11a65ee5c.png){: .size}

The summer and winter average temperatures differ by around 3.9. The average temperature in June is 74.94 degrees Fahrenheit while the average temperature in December is 71.04 degrees Fahrenheit. As a result, the average temperature doesn't fluctuate as much.

Further analysis indicates that the average rainfall in June is 0.136 inches and the average rainfall in December is 0.216 inches. Average rainfall is fairly light in June and December.

![june_temps](https://user-images.githubusercontent.com/29410712/189558190-93c9982c-704b-4af6-9064-482fb42f7ff2.png)

![dec_temps](https://user-images.githubusercontent.com/29410712/189558202-befe4b08-7378-43e8-853c-c354bac5c6a0.png)

The two histograms show the frequency of temperatures for the months of June and December in Oahu. Most of the temperatures for June fall between 70 to 80 degrees Fahrenheit while most of the temperatures for December fall between 65 to 75 degrees Fahrenheit. Additionally, the temperature frequencies for December is more normally distributed than the the temperature frequencies for June.

## Summary

The main concerns with opening a year-round ice cream shop in Oahu is rainfall. While there is rain year-round and the average rainfalls are similar for the months of June and December, the average rainfall is fairly light based on the results. Furthermore, the average temperatures year-round support opening an ice cream shop in Oahu with the average temperatures for June and December being 74.94 and 71.04 degrees Fahrenheit respectively. Additionally, the temperature frequencies are mostly between 65 degrees to 80 degrees with temperatures in December being on the lower end and temperatures in June being closer to the higher end of the spectrum. Overall,  the data supports opening a surf and ice cream shop year-round on the island of Oahu.

Expanding on this analysis, some additional queries could further the results: 

+ Average hours of sunlight/overcast per day
+ Ideal wave conditions and wind speeds for surfing
