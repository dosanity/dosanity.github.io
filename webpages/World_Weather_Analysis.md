[Back to Portfolio](https://dosanity.github.io/){: .backbutton}

---

# World Weather Analysis

## Project Overview

We will be analyzing, visualizing, and using statistical skills on weather data and google maps data retrieved through API. An application programming interface is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software. An API call is very similar to navigating to a website. An API points to a URL and collects some data from the webpage or server. We will be using API to analyze data to supoport the hotel and lodging industry. We are tasked to collect and present data for customers via the search, which they will then filter based on their preferred travel criteria in order to find their ideal hotel anywhere in the world. 

## Resources

+ Data Source 1: [WeatherPy_Database.csv](https://github.com/dosanity/World_Weather_Analysis/files/9390011/WeatherPy_Database.csv)

+ Data Source 2: [WeatherPy_vacation.csv](https://github.com/dosanity/World_Weather_Analysis/files/9390013/WeatherPy_vacation.csv)

+ API Sources: Google Maps API, Open Weather API

+ Software: Python 3.10, Jupyter Lab 3.4.4

+ Dependencies: Matplotlib, Pandas, JSON

## Visualizations

Using randomly generated latitudes and longitudes, we did a preliminary analysis of the cities along those locations. We researched temperature, humidity, cloudiness, and windspeeds.

![Fig1](https://user-images.githubusercontent.com/29410712/185812788-87ddedff-efd1-48e4-8097-542d8549557d.png)

![Fig2](https://user-images.githubusercontent.com/29410712/185812792-9b7b27fe-a5c8-4280-945c-dab2b6617bd5.png)

![Fig3](https://user-images.githubusercontent.com/29410712/185812794-1c06e9ab-2aff-4e2c-90b8-2849385bf210.png)

![Fig4](https://user-images.githubusercontent.com/29410712/185812795-41c90cd7-fb95-4118-b7ae-dcd6fff82530.png)

## Results

From the list of potential travel destinations, we tested our application with beta testers. These testers will choose four cities to createa travel itinerary. Finally, using the Google Maps Directions API, we created a travel route between the four cities as well as a marker layer map. 

In our test, we chose Albany, Broome, Palmer, and Bethel. All of these cities reside in the United States in the state of New York. 

![WeatherPy_vacation_map](https://user-images.githubusercontent.com/29410712/185812739-3cd32fef-de31-4867-8e68-c48e3233fc28.png)

![WeatherPy_travel_map](https://user-images.githubusercontent.com/29410712/185812751-1cfda855-0f83-4824-af48-52e96a3f2e1c.png)

![WeatherPy_travel_map_markers](https://user-images.githubusercontent.com/29410712/185812755-a8c8abc0-3183-4ece-a62a-eddd00802007.png)