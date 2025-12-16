+++
title = 'RESCON2 '
date = 2024-03-12T13:03:29+05:45
draft = true

+++
RESCON 2
--------

The RESCON 2 model is a computer program designed to use in pre-feasibility
studies to rank the economic performance of a selection of sediment management
techniques. The Reservoir Conservation Model RESCON 2 Beta tool presents the
most advanced economic and engineering evaluation of alternative sediment
management strategies. It builds on the Reservoir Conservation Model (RESCON)
Approach published in 2003 which helps hydropower developers to carry out a
preliminary screening analysis of viable sediment management alternatives. The
upgrade to the RESCON 2 beta tool takes into consideration sustainability
factors and hydrological uncertainties associated with climate change. The
RESCON 2 approach aims to identify a sediment management strategy that is both
technically feasible and economically beneficial for reservoir operation. The
process involves several key steps:

1.  **Input of site-specific technical and economic data**: This includes data
    on the reservoir's geometry, hydrology, sediment transport, as well as
    economic factors such as revenues and costs associated with reservoir
    operation. This input is used to assess the "No Action" scenario.

2.  **Input of sediment management technical data**: Parameters defining the
    efficiency of sediment management techniques, such as water level drawdown
    during sluicing and flushing discharge, are inputted. Technical constraints
    related to each sediment management method, such as maximum allowable
    storage capacity loss, are also specified.

3.  **Testing the technical feasibility of sediment management techniques**: The
    selected techniques are tested to ensure they meet user-specified
    constraints and are technically feasible.

4.  **Evaluation of reservoir storage development and economic returns**: If the
    techniques pass the feasibility test, the temporal and spatial development
    of reservoir storage, as well as their economic returns, are computed. This
    assessment determines whether the reservoir is sustainable or
    non-sustainable based on economic criteria.

5.  **Calculation of economic performance throughout the reservoir's lifetime**:
    The economic performance of the reservoir is calculated over its entire
    operational lifetime, considering factors such as revenues, costs, and
    sustainability.
    ![](https://thumbs2.imgbox.com/d7/c6/7sN99HQQ_t.png)

**Data Collection and Inputs**

Running the RESCON model requires comprehensive data inputs covering reservoir geometry, hydrological data, sediment characteristics, sediment management parameters, economic parameters, climate change considerations, and safeguards. Reservoir geometry data is gathered through analysis from Google Earth and GIS, while hydrological data is obtained from the Department of Hydrology and Meteorology (DHM). Sediment characteristics are derived from studies conducted by Butwal Power Company, offering valuable input for processing. However, economic data is somewhat unreliable and is based on assumptions due to constraints in time and resources, although references from similar studies and online sources are used to inform economic parameters. Given the study's scope and resource limitations, climate effects and safeguards are not explicitly modeled.

**Reservoir Geometry:**

Reservoir geometry parameters in RESCON 2 encompass various aspects related to storage capacity, geometry, and operational considerations. For this study, the Gross Storage Capacity is derived from an Elevation Area capacity Curve. Initially, the catchment area is delineated, and the area and capacity for every 10 meters of elevation difference are calculated. This data is then plotted to determine the dam height, with the corresponding volume representing the Gross Storage Capacity.

![](https://thumbs2.imgbox.com/25/6e/zDpASkdj_t.png)
**Data Collection and Inputs**
To effectively utilize the RESCON model, a comprehensive set of data inputs is required, covering various aspects such as reservoir geometry, hydrological data, sediment characteristics, sediment management parameters, economic factors, climate change considerations, and safeguards. Here's an overview of the key inputs and their sources:
![](https://thumbs2.imgbox.com/29/e4/sgM0UnHh_t.png)

**Hydrological Data:**
Hydrological data for the Jhimruk River is obtained from two stations: Chernata and Kalimatighat. Mean annual reservoir water inflow is determined to be 851 million cubic meters (MCM) based on 25 years of daily discharge data (1971-1995). The coefficient of variation of annual runoff volume (Cv) is calculated to be 0.32. The representative water temperature of the reservoir and river is set at 14.5°C. The distribution of annual inflows is assumed to follow a log-normal distribution.
![](https://images2.imgbox.com/fd/31/UWYjzq69_o.png)

**Sediment Characteristics:**
Sediment characteristics play a crucial role in sediment transport and deposition dynamics. The specific weight of in-situ reservoir sediment is estimated based on grain size distribution, with a value of 1.9 MT/m3 used for analysis. Mean annual total sediment inflow mass is determined to be 1.3 million tons/year, with additional estimation conducted using the BQART model. The sediment load concentration is categorized as medium, with 20% of suspended load assumed to be bedload. The duration of bedload transport is set at 15%.
![](https://thumbs2.imgbox.com/ca/d5/vktH5HWX_t.png)
| **Particle**                         | **Specific Weight** |
|--------------------------------------|---------------------|
| **Quartz**                           | 2.65                |
| **Feldspar Upper Sedimentary layer** | 2.56 1.66           |
| **More Compact Sandy Sediments**     | 1-2                 |
| **Softer muddier sediments**         | 0.2-1.5             |
| **Dry sand**                         | 1.6                 |
| **Packed sand**                      | 1.68                |

![](https://thumbs2.imgbox.com/14/1a/6f3oZsLW_t.png)
The mineralogical studies found that around 80% of sediment is composed of two
hard minerals; quartz and feldspar, so specific weight was taken to 2.5 MT/m3.
During modelling RESCONN generates error message if specific weight is greater
than 1.9 MT/m3. Therefore 1.9 MT/m3 is used for the analysis. Moreover, the
recommended value is 0.7 to 1.5 MT/m3

-   **Mean annual total sediment inflow mass (MAs)**: This parameter represents
    the average annual amount of sediment carried by the river at the reservoir
    location. If sediment yield is unknown, the BQART equation can be used for a
    preliminary assessment.  
      
    During the construction of Jhimruk Hydropower Plant (JHP), Butwal Power
    Company has carried out regular sediment monitoring in monsoon from the
    initiation of power plant execution. From the recorded data, sediment
    concentration, discharge and stage are taken. Sediment load SSL is
    calculated from average method as discussed in lecture 5 of Sediment
    Engineering Class. Annual Sediment Yield calculated from the available data
    computed to 1.3 million tons/year.

    Further BQART equation is also used find sediment load. For estimating
    sediment yield, the RESCON 2 model incorporates the BQART model as an
    integrated tool. The BQART model serves as a rapid assessment tool,
    particularly useful when data is limited. This model takes into account
    various factors including basin properties, lithology, area, relief,
    temperature, runoff, and ice cover.


    For using BQART equation following additional parameters are inputted in
    RESCON2.

-   Drainage Area A = 605 km2 (From GIS)

-   Maximum Basin Relief R = 2.8 km (Maximum elevation- minimum elevation of
    catchment)

-   Temperature T = 14.5°C

-   Ice Cover as Percentage of Basin Area = 0%, Since maximum elevation is 3580m
    and no ice contributes to flow.

>   The BQART Model estimates the annual sediment inflow to the AKSP Catchment
>   as equal to 0. 47 million tons per year.

**Partitioning Bedload and Suspended Load:**
The concentration of suspended load is categorized as medium (1000 - 7500 p.p.m.), with a texture similar to bed material. The percentage of bedload in terms of measured suspended load is estimated to be 20%.
By incorporating these inputs into the RESCON model, a comprehensive analysis of sustainable sediment management strategies for the proposed Jhimruk Reservoir can be conducted, aiding in informed decision-making and planning.

| Concentration of Suspended Load (p.p.m.) | Type of Bed Material Forming the Channel of the Stream | Texture of Suspended Material | Percent Bedload in Terms of Measured Suspended Load |
|------------------------------------------|--------------------------------------------------------|-------------------------------|-----------------------------------------------------|
| Low                                      | Sand                                                   | similar to bed material       | 25%–150%                                            |
| Low                                      | Gravel, rock or consolidated clay                      | Small amount of sand          | 5%–12%                                              |
| Medium                                   | Sand similar to bed material                           | similar to bed material       | 10%–35%                                             |
| Medium                                   | Gravel, rock or consolidated clay                      | 25% sand or less              | 5%–12%                                              |
| High                                     | Sand similar to bed material                           | Similar to bed material       | 5%–15%                                              |
| High                                     | Gravel, rock or consolidated clay                      | 25% sand or less              | 2%–8%                                               |


Sediment Management Methods
===========================

 No Action
----------

Under this method, no specific plan is implemented to manage sediment in the
reservoir. As a result, sediment accumulates over the time, gradually reducing
the storage capacity. Eventually one of the two outcomes is expected.

-   Decommissioning: When the gross reservoir storage is fully eliminated due to
    sedimentation, the dam is removed and salvage value of the reservoir is
    eliminated. Annual retirement fund is calculated based on the salvage value,
    timing of dam removal and under specific discount rate

-   Run of river Operation: If the reservoir entire capacity is depleted by
    sedimentation before decommissioning occurs, the facility is transformed
    into run of river operation. In this case, no annual retirement fund is
    calculated as the facility is maintained indefinitely under run of river
    operations.

Catchment Management Method:
----------------------------

In order to reduce sediment flow to the reservoir, catchment management is used
as strategic approach to extend operational lifetimes, which encompasses two
primary groups of techniques.

-   Watershed management: By using improved agricultural practices,
    reforestation efforts and de-intensification of land use practices, this
    helps to reduce surface soil erosion, thus effectively reducing sediment
    from the source. It is necessary to take caution, as it may take several
    years to manifest due to lower sediment delivery ratios, especially in
    larger catchments

-   Check Structures: It involves constructing check structures such as small
    dams or retention basins. This method is particularly useful in mountainous
    countries like Nepal, where streams flow downstream of hill. These
    structures primarily impact coarse-grained bedload transport rather than
    suspended load. However, they have limited storage capacity and low trap
    efficiency for suspended particles due to being constructed in steep
    regions. Regular maintenance is necessary to ensure their capacity for
    trapping incoming bedload.

-   Combination of method is used for the analysis.

>   RESCON 2 incorporates screening method to assess the potential effectiveness
>   of catchment management in reducing storage loss rate of reservoir.

>   **Parameters**

-   **MAsb reduction [%]**: Expected reduction of bedload inflow in the
    reservoir due to catchment management measures. This reduction is typically
    achieved by constructing check structures upstream of the reservoir in
    mountainous tributaries with torrential character. A value of 0% means no
    reduction, while 100% means complete retention of bedload in the check
    structures. All of the bed loads cannot be reduced but should be flushed
    from dam. **Joshi et al. 2022** assumed that only 5 percent of the time will
    the bed load be transported into the reservoir in their Sediment Management
    Measures for Andhikhola Storage Project. Adopting 95% reduction in bed
    inflow, the analysis is done. At intake level, it is necessary to control
    most of the bed load and flowing debris.

-   **MAss reduction [%]**: Expected reduction of suspended load inflow in the
    reservoir due to catchment management measures. This reduction is usually
    achieved through watershed management measures like improved agricultural
    practices or reforestation. A value of 0% implies no effect on suspended
    load transport, while 100% means no suspended load enters the reservoir,
    though this is not realistic. Adopted 30%.

Table 7: Reduction in Bedload and Sediment Load

| **Catchment Management Method**  | **Reduction of Bedload** | **Reduction of Suspended Load** | **Timing of Impact**            |
|----------------------------------|--------------------------|---------------------------------|---------------------------------|
| Check Dams                       | Up to 100%               | 0%                              | Immediate                       |
| Reforestation                    | 10%                      | 30%                             | \> 3 years after implementation |
| Improved Agricultural Management | 10%                      | 30%                             | \> 3 years after implementation |
| De-intensification of Land Use   | 10%                      | 30%                             | \> 3 years after implementation |
| Combination of Methods           | 50%                      | 30%                             | Immediate                       |

Source: RESCON2 MANUAL

-   **Year MAs reduction start [Years]**: Time lag between the implementation of
    catchment management measures and their effect on sediment inflows in the
    reservoir. This parameter indicates how many years it takes for the effects
    of catchment management to be realized. It is adopted 1 year.

-   **C_CM [Us\$]**: Costs for the implementation of catchment management
    measures. This represents the capital investment required for the
    application of catchment management, and the cost is incurred in the
    implementation year. The default value \$20000 is used

-   **oMC_CM [Us\$/a]**: Annual operation and maintenance costs of catchment
    management. These costs cover the yearly expenses for operating and
    maintaining catchment management measures, which depend strongly on the
    selected technique. \$200 is used for initial analysis.

-   **Shall the implementation year of catchment management be determined
    through economic optimization?**: If the option selected is "Yes," it means
    that the economic performance of the reservoir will be assessed for various
    implementation years. The goal is to find the timing that maximizes economic
    performance while considering technical constraints set by the user. In
    other words, the implementation year will be chosen based on economic
    considerations to ensure the most cost-effective approach.On the other hand,
    if the option is "No," it means that the user will explicitly specify the
    implementation year for catchment management measures. In this case,
    economic optimization is not considered, and the user has full control over
    determining when the measures will be implemented, irrespective of economic
    considerations. YES is choosen.

-   **Year CM start [years]**: Implementation year of catchment management,
    representing the first year of catchment management activities, such as the
    completion of necessary structures or changes. It is supposed that 2 years
    is needed.

-   **CL_CM [%]**: Maximum allowable storage loss before the implementation of
    catchment management. For an existing reservoir, this value must be greater
    than the percentage of capacity already lost. Catchment management is
    implemented before this percent of the reservoir is filled completely.
    Choosing 100% would imply that catchment management measures are implemented
    only after the reservoir is completely filled, which may not be practical or
    effective in preventing sedimentation, For now It is set to 50%.



![](https://thumbs2.imgbox.com/f8/5b/hbWsIntl_t.png)

Sediment Removing
-----------------

Sediment accumulation is a common challenge faced by reservoir managers, often
requiring intervention to maintain reservoir capacity and functionality. While
sediment removal is a viable solution, it presents various economic,
environmental, and logistical challenges. In this study, three methods;
flushing, dredging and trucking are employed to remove sediments.

1.  Flushing

    Emptying the reservoir and allowing the river to flush out sediment is
    another sediment removal method. Downstream release of muddy water can have
    adverse effects on aquatic biota and riverbed habitats, rendering river
    gravels unsuitable for spawning. Proper management is crucial to mitigate
    large downstream environmental impacts, including erosion, habitat
    degradation, and water quality degradation. Emptying and flushing can only
    remove a limited volume of sediment, making it impractical for large-scale
    sediment removal operations.

    This process is typically carried out by lowering the water in the reservoir
    through carefully designed oulets, allowing the sediments to discharge
    downstream through low level outlets. Two approaches are used to flushing.

-   Complete drawdown: The reservoir is completely emptied, allowing for the
    formation of river channel through the sediment deposits. This scoured
    channel typically resembles original channel width and slope, before
    reservoir impoundment. Periodic complete flushing helps to maintain original
    regime conditions.

-   Partial drawdown: It is also known as pressure flushing, where only a
    portion of the reservoir is emptied, resulting in localized effects, aimed
    at protecting hydraulic structures neat the outlet. A funnel shaped crater
    formed in this case as discussed in lectures (Reservoir sedimentation).

>   **Parameters:**

-   **Y [-] Indicator of deposits type:** This parameter categorizes the type of
    sediment present in the reservoir. It is possible to choose from options
    based on the sediment characteristics:  
    1600 for fine loess sediments  
    650 for other sediments with a median size finer than 0.1 mm  
    300 for sediments with a median size larger than 0.1 mm, or 180 for flushing
    with Qf \< 50 m³/s with any grain size. Initially 300 is taken for the
    analysis.

-   **Ans: Sediment removal difficulty:** Ans can be set as "3" if reservoir
    sediments are significantly larger than the median grain size (d50) of 0.1
    mm or if the reservoir has been impounded for more than 10 years without
    sediment removal; otherwise, set as "1".

-   **Qf [m³/s]: Representative flushing discharge:** It is calculated with
    reference to actual inflows and flushing gate capacities. It represents the
    discharge rate during flushing operations. It was taken as 15m3/s, but doing
    so minimum allowable storage capacity for flushing (which also determine
    CLF) becomes larger than long term storage capacity which can be maintained
    by flushing. But RESCON restricts this case and hence Qf was later increased
    to 30 m3/s. There is no concrete reasoning to use this value, but it is
    assumed that this discharge can be maintained during flushing. Further
    analysis, and study should be done to incorporate its significance.

-   **Tf [days]: Duration of flushing after complete drawdown:** Determines the
    duration of flushing operation. Together with other parameters, it
    influences the number of deposits that can be removed from the reservoir. It
    is taken 1 day.

-   **Cal_ssfl [-]: Calibration parameter for Mignot equation:** This helps to
    Adjust Mignot's equation, which tends to overestimate side slopes. It is
    recommended to divide the calculated side slope of incised flushing channel
    by this calibration parameter for a more reasonable result. Suggested value
    10 is adopted.

-   **CLF [%]: Maximum percent of capacity loss allowable:** It indicates the
    maximum allowable loss of capacity before implementing flushing. For
    existing reservoirs, this value must be greater than the percentage of
    capacity already lost. It is taken as 90%.

-   **s1 [%]: Fraction of run-of-river benefits:** It represents the fraction of
    run-of-river benefits available in the year flushing occurs. It accounts for
    the reduction in water yield due to flushing operations.

-   **s2 [%]: Fraction of storage benefits:** It indicates the fraction of
    storage benefits available in the year flushing occurs. It accounts for the
    reduction in water yield due to reservoir storage effects.

    **Both s1 and s2 are taken 20% by default.**

-   **FI [Us\$]: Cost of capital investment:** It represents the capital
    investment required for implementing flushing measures. It is incurred when
    flushing is first practiced. Allocate \$100000.

-   **elfl_dam [masl]: Water elevation at dam during flushing:** It is
    determined by the gate capacity and reservoir inflow sequence. Lower
    elevation results in a more successful flushing operation. It is taken 755m

    1.  Dredging

>   It involves mechanical excavation of sediment from reservoir beds, such as
>   pumping water entrained with sediment from reservoir bed. The feasibility of
>   dredging depends on various factors such as reservoir specific parameters
>   and dredging equipment. One of the primary challenges associated with
>   dredging is the disposal of the vast quantities of dredged sediment, often
>   posing logistical hurdles for large-scale operations. Furthermore, dredging
>   operations can have adverse environmental impacts, such as disrupting
>   aquatic habitats, disturbing sediment layers, and releasing suspended
>   sediment into the water column, thereby affecting water quality and aquatic
>   ecosystems.

>   **Parameters**

-   **Concentration by Weight of Sediment Removed to Water Removed by
    Traditional Dredging (Cw)**: Maximum allowable concentration is 30%, unless
    specific studies for the reservoir suggest otherwise.

-   **Maximum Percent of Capacity Loss Allowable at Any Time in Reservoir for
    Dredging (CLD)**: It represents the maximum allowable capacity loss in the
    reservoir before dredging must be implemented.

-   **Maximum Allowable Percent of Accumulated Sediment Removed per Dredging
    Event (AsD)**: It is used to limit the frequency of dredging operations to
    maintain sustainability and it specifies the maximum allowable percentage of
    sediment removal per dredging event.

-   **Maximum Amount of Sediment Removed per Dredging Event (MD)**: It specifies
    the maximum volume of sediment that can be removed during each dredging
    event. It helps to ensure that dredging operations do not lead to
    non-sustainable solutions.

-   **Unit Value of Water Used in Dredging Operations (PD)**: Represents the
    value of water used in dredging operations, which may be zero or calculated
    based on settled dredging slurry water.

-   **Unit Cost of Dredging (CD)**: It is user-defined or determined
    automatically. It specifies the cost per cubic meter of dredging, used in
    economic appraisals if not determined automatically.

>   Prakash Dredging and Marine Services, operating in Nepal and India for
>   dredging ponds and lakes, typically charges \$3 per cubic meter (m3).
>   However, due to the larger scale of our project, considering a reduced rate
>   of \$2 per cubic meter (m3) should be reasonable.

-   **Implementation Strategy of Dredging**: It determines whether the
    implementation strategy of dredging should be optimized economically. Yes is
    chosen.

-   **Cycle Lengths for Dredging Phases**: It specifies the duration of phases
    with and without dredging, as well as the frequency of dredging operations.
    It is used to plan the timing and frequency of dredging activities for
    sustainable reservoir management.

Table 8: Dredging Parameters

| Concentration by weight of sediment removed to water removed by traditional dredging     | 30%       |
|------------------------------------------------------------------------------------------|-----------|
| Maximum percent of capacity loss that is allowable at any time in reservoir for dredging | 80%       |
| Maximum percent of reservoir storage that can be restored during each dredging event     | 30%       |
| Amount of sediment removed per dredging event (\$)                                       | 3,000,000 |
| Unit value of water used in dredging operations                                          | 0.00      |
| Unit cost of dredging (\$)                                                               | 2         |

### 3.3.3 Trucking: 

It involves removal of accumulated sediment from drained reservoir, using heavy
equipment like excavators. Unlike traditional dredging, which can occur without
emptying the reservoir, trucking necessitates the reservoir to be emptied during
sediment removal operations. Consequently, during the year when trucking takes
place, the sediment yield and associated benefits are assumed to be zero. This
key distinction in operational approach between trucking and traditional
dredging impacts the scheduling and execution of sediment management activities,
as well as their associated costs and benefits. Trucking operations play a
crucial role in sediment management strategies for reservoirs. The following
parameters are essential considerations when determining the trucking amount for
sediment removal:

-   **Shall a Sustainable Solution be Determined Automatically?** This parameter
    determines whether the system will automatically calculate a sustainable
    solution based on predefined constraints. Yes, is chosen

-   **MT (Maximum Amount of Sediment Removed per Trucking Event)**: Specifies
    the maximum volume of sediment that can be removed in a single trucking
    operation, usually measured in cubic meters (m³).

-   **Where do You Want to Perform Trucking?** Indicates whether trucking
    operations will occur in the active storage area only or in both active and
    inactive storage areas.

-   **CT (Unit Cost of Trucking)**: Represents the cost per cubic meter of
    sediment removal through trucking, expressed in currency (\$/m³). \$5 is
    used for initial analysis.

-   **sTR (Fraction of Reservoir Water Yield the Year Trucking Occurs)**:
    Defines the percentage of reservoir water yield available during trucking
    operations.

-   **CLT (Maximum Percent of Capacity Loss Allowable at Any Time in Reservoir
    for Trucking)**: Sets the maximum allowable percentage of capacity loss due
    to sediment accumulation in the reservoir for trucking.

-   **AsT (Maximum Allowable Percent of Accumulated Sediment Removed per
    Trucking Event)**: Specifies the maximum allowable percentage of accumulated
    sediment to be removed in each trucking event. 100% is used.

-   **Shall the Implementation Strategy of Trucking be Determined through
    Economic Optimization?** Determines whether the implementation strategy for
    trucking will be optimized economically. Yes, is chosen

-   **Cycle1TR (Duration of Phase 1 - No Trucking)**: Indicates the duration of
    the initial phase without trucking operations, typically in years.

-   **Cycle2TR (Cycle Length in Phase 2 - Frequency of Trucking Operation)**:
    Specifies the cycle length or frequency of trucking operations in the second
    phase.

Most of the default values are used for the analysis.

Sediment Routing
----------------

It involves altering hydraulic conditions in or upstream of reservoir to
minimize sediment deposition and extend reservoir lifetime. Sluicing involves
maximizing flow velocity through the reservoir during flood events to minimize
sediment deposition. Similarly, sediment laden water can be by passed through
channels or bypass tunnels.

### Sluicing:

In order to reduce sediments deposits the volume of reservoir is partially
decreased during the flood season. It is because the sediment transport is most
active in this time. The drawdown of the pool level increases the velocity and
reduces retention time. This in result reduces trap efficiency of reservoir.
With the increase in velocity significant portion of sediment inflow can be
passed from reservoir and can be discharged downstream. Morris & Fan (1998)
suggest several water level drawdown strategies such as seasonal drawdown, flood
drawdown by hydrograph prediction, flood drawdown by rule curve and venting of
turbid density currents.  

![](media/3936c55eb5e880f6637c01cf423ca7f1.png)

Figure 14: Sluicing Operation

Source: Rescon 2 User Manual

**Parameters**

-   **Reservoir Pool Elevation During Sluicing (eL)**: This parameter indicates
    the elevation of the reservoir pool during sluicing operations, typically
    measured in meters above sea level (masl). It is taken 770m for initial
    analysis.

-   **Duration of Sluicing Operation (TsL)**: It represents the length of time
    for which sluicing operations will be conducted, usually measured in months.
    It is taken 3 months.

-   **CsL (Cost for Implementation of Sluicing Structure)**: This refers to the
    initial cost required for constructing the sluicing infrastructure,
    expressed in US dollars (Us\$). It is taken about 1 crore.

-   **oMCsL (Annual Operation and Maintenance Costs of Sluicing Structures)**:
    These are the recurring annual costs associated with the operation and
    maintenance of the sluicing structures, also in US dollars per annum
    (Us\$/a). It is taken 5% of implementation cost

-   **Shall the Duration and Implementation Year be Defined through Economic
    Optimization?** This parameter determines whether the duration and
    implementation year of sluicing operations should be optimized economically.
    Options include "Yes" or "No."

-   **Year of Sluicing Start (sL start)**: Indicates the implementation year of
    sluicing operations, defining when the sluicing process will commence. 10
    years is adopted.

-   **CLsL (Maximum Allowable Storage Loss Before Implementation of Sluicing)**:
    Specifies the maximum allowable percentage of storage loss before initiating
    sluicing operations.

-   **TsLmax (Maximum Allowable Duration of Sluicing)**: Sets the maximum
    duration permitted for sluicing operations to prevent excessive depletion of
    reservoir storage.

    1.  Sediment Bypass

>   It involves redirecting sediment-laden flows away from the reservoir before
>   the sediment settles with the reservoir. It involves constructing a weir to
>   divert flood flows and a bypass tunnel or open channel with necessary inlet
>   and outlet portals. These structures are designed to divert flows to
>   predetermined location downstream of the reservoir.



![](media/090ad1c595cfb4433b6713499c4c23b4.png)





The coarse part of total sediment load is diverted downstream of the reservoir
thus environmental impact of sediment can be minimized. The parameters are set
by default.

Table 9: Sediment Bypass Parameters

| CB-P                                                                                 | [US\$]   | Cost for implementation of by-pass structure                             | 1,000,000 |
|--------------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------|-----------|
| OMCB-P                                                                               | [US\$/a] | Annual operation and maintenance Costs of by-pass structures             | 10,000    |
| Shall the duration and implementation year be defined through economic optimization? | Yes      |                                                                          |           |
| YearBP Start                                                                         | [years]  | Implementation year of by-pass                                           | 4         |
| TBP                                                                                  | [months] | Duration of sediment by-pass                                             | 6.0       |
| CLB-P                                                                                | [%]      | Maximum allowable storage loss before implementation of sediment by-pass | 100%      |
| TB-P max                                                                             | [months] | Maximum allowable duration of by-pass operation                          | 4         |
| BP_Efficiency                                                                        | [%]      | Water by-pass efficiency                                                 | 80%       |
| BPbedload_Efficiency                                                                 | [%]      | Bedload by-pass efficiency                                               | 100%      |
| BPsuspendedload_Efficiency                                                           | [%]      | Suspended load by-pass efficiency                                        | 60%       |
| BPlimit                                                                              | [m]      | Length limit for feasiblity of by-pass structure                         | 5,000     |
