[Back to Portfolio](https://dosanity.github.io/){: .backbutton}

---

# PyBer Analysis

## Project Overview

PyBer is a python-based ride-sharing app. We are tasked to perform performing an exploratory analysis and creating visualizations using rideshare data to help improve access to rideshare services and determine affordability for underserved areas. In this analysis we will showcase the relationship between the type of city (Urban, Suburban, and Rural), and the number of drivers and riders. Additionally, we will calculate the percentage of total fares, riders, and drivers by type of city. 

## Resources

+ Data Source 1: [city_data.csv](https://github.com/dosanity/PyBer_Analysis/files/9334216/city_data.csv)

+ Data Source 2: [ride_data.csv](https://github.com/dosanity/PyBer_Analysis/files/9334217/ride_data.csv)

+ Software: Python 3.10, Jupyter Lab 3.4.4

+ Dependencies: Matplotlib, Pandas

## Results

The PyBer Summary Data Frame provides an overview comparison of PyBer's ridesharing services in three types of cities: rural, suburban, and urban cities. As we can see from the scatterplot, there seems to be a negative correlation between the average fares and the total number of rides per city. As the total number of rides increase, the average fares decrease. Additionally, the total number of rides decrease as the population size decreases. As a result, we can interpret that urban city types have the highest total number of rides and rural city types have the lowest total number of rides. 

![Fig1](https://user-images.githubusercontent.com/29410712/184557227-feb52048-a434-47c6-88e2-61048f7f059e.png)

With further analysis, we can see that the range of the number of rides, fares, and driver count by city types. As stated before, urban city types have the highest total number of rides on average and rural city types have the lowest total number of rides on average. Furthermore, the number of fares increase as the population decreases. Thus, urban city types have the lowest cost for fares and rural city types of the highest cost for fares. Finally, there are less drivers for rural than suburban and urban city types. As a result, this follows the idea of supply and demand. With rural city types having less drivers, the fare prices are higher since there is less competition. Urban city types have more drivers; thus the fare prices are lower. These results are shown in the figures below.

![Fig2](https://user-images.githubusercontent.com/29410712/184557455-661ba7bb-c7a9-471a-a939-9f4685c7b94b.png)

![Fig3](https://user-images.githubusercontent.com/29410712/184557517-e9c84bb8-1536-4f86-8f78-8cf45e6e927b.png)

![Fig4](https://user-images.githubusercontent.com/29410712/184557530-600b6235-b2ee-44d5-a468-8e5d2fff55bf.png)

The summary demonstrates that there is a larger demand for PyBer among riders in urban cities compared to suburban and rural cities. Between January 2019 and May 2019, there were 1,625 rides in urban cities, 625 rides in suburban cities, and 125 rides in rural cities. The figure below highlights how rides in Urban cities contributed the most to PyBer's overall rides during this five-month period.

![Fig5](https://user-images.githubusercontent.com/29410712/184557727-126f17d5-8a97-410b-b8f0-bd8e30e9b67f.png)

On a similar pattern, there was also a larger volume of drivers in urban cities compared to suburban and rural cities. There were 2,405 drivers in urban cities, 490 drivers in suburban cities, and 78 drivers in rural cities. Again, the figure below depicts the significance of drivers in urban cities during this time period.

![Fig6](https://user-images.githubusercontent.com/29410712/184557743-1219c275-d9db-42a0-ae43-7f195a2bcc19.png)

As stated before, since the demand for PyBer is higher in urban cities, the total fares are consequently also higher than suburban and rural cities. PyBer transactions in urban cities totaled nearly $40,000 whereas transactions in urban cities and rural cities totaled at least $19,000 and $4,000, respectively. The figure below demonstrates where the majority of PyBer's revenue occurred during this time period.

![Fig7](https://user-images.githubusercontent.com/29410712/184557767-f88fd1ed-f11c-4550-88c5-ce8bfa6683fe.png)

In terms of cost, we can see that the average fare per ride for rural cities is $10.09 more than urban cities and $3.65 more than suburban cities. Additionally, the average fare per driver for rural cities is $38.92 more than urban cities and $15.99 more than suburban cities. The summary of the PyBer analysis is shown below.

![image](https://user-images.githubusercontent.com/29410712/184557916-48667254-02a4-4116-a4a1-9b17efad946d.png)

The multiple-line chart "Total Fare by City Type" further supports the PyBer Summary Data Frame by providing trends of total fares in rural, suburban, and urban cities between January 2019 and April 2019. As we can see, the total fares for urban is higher than those of suburban and rural cities. The range of total fares in urban cities is between $1600 to $2500 while the range of total fares in suburban cities is between $700 to $1400. Additionally, the range of total fares in rural cities is between $100 to $500. From the trends, we can see that there is a peak for total fares around the end of February for all city types. 

![PyBer_fare_summary](https://user-images.githubusercontent.com/29410712/184557886-086327d9-c17f-4cd2-bea4-335167630c77.png)

## Summary

Based on these results, here are three business recommendations to address disparities among the city types:

+ Increasing the number of drivers in rural and suburban areas to ensure there are enough drivers to meet ride demand. 
+ Decreasing the amount of drivers in urban areas to decrease cost and increase efficiency since the percent of total rides in urban areas is less than the number of drivers. 
+ Since there is more demand in urban cities, we could potentially increase the fares to capture more value.
