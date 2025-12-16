+++
title = 'HEC HMS Part One Tutorial'
date = 2024-01-21T10:28:59+05:45
draft = false
+++

**Tutorial on HEC-HMS: Hydrologic Engineering Center Hydrologic Modelling System**

**Introduction:**
HEC-HMS, developed by the U.S. Army Corps of Engineers, is a robust software for hydraulic modeling of river and floodplain systems. In this tutorial, we'll cover the step-by-step process of setting up a project, defining basin components, importing GIS data, and performing a simulation run. The primary objective is to equip users with the foundational knowledge needed to analyze river systems and derive critical information for dam break analysis.

{{<youtube pr0MhRaph-k>}}
**Step 1: Setting Up a New Project**
1. Open HEC-HMS and navigate to `File -> New` to initiate a new project.
2. Provide a descriptive name and project details, select metric units, and designate a directory for the project. Confirm by clicking `OK`.  
_In the left side panel, you can see a folder displayed under project name_

**Step 2: Creating Basin Model Components**
1. Goto Components Menu
2. Proceed to `Components -> Create Component -> Basin Model`.
3. Similarly `Components -> Create Component -> Terrain data`
2. Input a name and description for the basin model and terrain data  and click `OK`.
3. Load terrain data by importing a shapefile (GIS raster file) for the Trishuli basin.

**Step 3: Setting Terrain Data Coordinate System**
1. In `Basin Models -> Basin 1 -> Components`, select `Terrain Data -> Terrain 1`.
2. Access `Terrain 1` inside the Terrain Data folder.
3. Specify the coordinate system parameters such as UTM type, UTM Zone (e.g., 45 N for Trishuli basin in Nepal), and datum (WGS 84).  
_You will be seeing  streams and features in map window_


**Step 4: GIS Preprocessing**
1. Execute `GIS -> Preprocess Sinks` for sink preprocessing.
2. Conduct drainage preprocessing by navigating to `GIS -> Preprocess Drainage`.
3. Identify streams through `GIS -> Identify Streams` and define the area to identify streams accurately.  
_The smaller the area, the accurate the results but takes long processing time and inputs for areas_

**Step 5: Map Layers and Stream Identification**
1. View map layers by going to `View -> Map Layers` and selectively display identified streams for clarity.
2. Locate a Hydrological station using GIS and Google Earth.
3. Load the raster file which contains location of station from Add menu in Map Layers.  
*In our case, Export_output will be loaded and we can see square demarcation of the point*

**Step 6: Break Point Creation and Delineation**
1. Zoom in on identified streams, use the Break Point Creation Tool to select a point, and create a break point.
2. Proceed to `GIS -> Delineate Elements Options` to delineate subbasins, reaches, and junctions.  
*To Break the point, we will be selecting a point in the river network, just near the location of station*  
*Remember to give name of Subbasin, Reach, junctions*

**Step 7: Merging Subbasins**
1. Merge subbasins that share the same flow points by selecting them and accessing `GIS -> Merge Elements`.  
*We are merging subbasins so that we have smaller number of sub areas to process data*  

**Step 8: Adding Time Series Data**
1. Introduce precipitation and discharge data by creating components in `Components -> Create Component -> Time Series Data`.
2. Add a Meteorologic Model in a similar manner.  
*Gages are created with proper Data type. In the left pane, access the sub folders named Precipitation/ Discharge Gages. In the components submenu, fill the required information such as Data Source, Units, Time Interval and other information such as start and end date of records.*   

**Step 9: Specifying Hyetograph and Adding Controls**
1. Specify hyetograph using meteorologic models and set observed flow to the gage.  
*After Fixing dates, we can enter data. Go to ` Basin models-> Select Sink -> set observed flow to gage 1`.*
2. Incorporate controls via `Components -> Create Component -> Control Specifications`, defining parameters, start and end dates, and time intervals.

**Step 10: Parameterization and Simulation**
1. Go to `Parameters` and set various parameters like canopy, surface, loss, transform, baseflow, snow, evapotranspiration, and routing.
2. Enter data for each parameter and click `Apply`.
3. Access `Compute -> Create Compute -> Simulation Run`, name the simulation, select basin, meteorologic model, and control, and finish setup.
4. Execute the simulation by right-clicking on the simulation run in `Compute -> Simulation Runs`.

**Step 11: Analyzing Results**
1. After a successful run, explore results in the `Results` section in the left pane.
2. Analyze peak discharge, hydrographs, and other critical information obtained from the simulation results.

**Significance of Results:**
After Processing in Hec HMS, the output results such as discharge over the period of time can be used to model the hydropower generation.