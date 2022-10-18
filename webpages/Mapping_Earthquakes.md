[Back to Portfolio](https://dosanity.github.io/){: .backbutton}

---

# Mapping Earthquakes

## Project Overview

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days. We used JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON earthquake data linked to the USGS website. To display our data, we used the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

## Resources
+ Software: VS Code 1.71.0
+ Data Source: [U.S. Geological Survey Data](https://www.usgs.gov/programs/earthquake-hazards/earthquakes)
+ Programming Languages: JavaScript, CSS, HTML

## Website Results

The earthquakes are categorized by size and color. The spectrum of color ranges from yellow (low magnitude earthquakes) to red (high magnitude earthquakes). Additionally, low magnitude earthquakes have a small diameter and high magnitude earthquakes are illustrated with a larger diameter.

The viewer can interact with the map to show three different views and filter between three layers: 

| View Options       | Filter Options      |
| ------------------ | ------------------- |
| - Street View      | - All Earthquakes   |
| - Satellite View   | - Tectonic Plates   |
| - Dark View        | - Major Earthquakes |

![streets](https://user-images.githubusercontent.com/29410712/194958569-4a5aa285-6f91-4ef4-8846-583fc51121db.png)

![satellite](https://user-images.githubusercontent.com/29410712/194958581-8e88f0c2-870a-4344-8922-a3e6e5f2ec1b.png)

![dark](https://user-images.githubusercontent.com/29410712/194958587-09becb86-65d9-4830-9e47-baf13baa7ac7.png)