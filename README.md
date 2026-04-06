# DS4200-Project

## How do medical expenses vary across hospitals in the U.S?

Healthcare prices in the US vary across different hospitals and states. For example, an MRI can cost more in one state than another or can even cost different within the same area. This topic is interesting to analyze because healthcare expenses differ from typical costs such as for groceries or commodities. Healthcare costs aren’t transparent and can easily vary regardless of the quality of the actual procedure. Using data analysis, we can compare healthcare costs across the U.S. and visualize whether or not there is correlation between healthcare cost and household income. We may also find correlations between other costs within US states.


## Reference Papers:

Norbeck, Timothy B. “Drivers of health care costs. A Physicians Foundation white paper - second of a three-part series.” Missouri medicine vol. 110,2 (2013): 113-8. https://pmc.ncbi.nlm.nih.gov/articles/PMC6179664/
This paper discusses the primary drivers of healthcare costs such as medical technology, administrative and pharmaceutical costs, mandated insurance benefits, and aging populations. Although our data doesn’t have some of these factors, we can use this information to connect it to our findings.

Cooper, Z., Craig, S. V., Gaynor, M., & Van Reenen, J. (2019). The price ain't right? Hospital prices and health spending on the privately insured. The Quarterly Journal of Economics, 134(1), 51-107. https://doi.org/10.1093/qje/qjy020
This paper looks at how much hospitals charge insurance companies across the entire country and finds that the prices vary based on the state. The huge differences are seen to be also related to competition, where those with less competition can charge more. It also highlights how those in areas where people use more healthcare resources are seen to have different prices. 


## Our Data:

The [Dataset](https://www.kaggle.com/datasets/asaniczka/us-cost-of-living-dataset-3171-counties) we will use focuses on the Cost of Living in the US. This dataset was acquired from Kaggle and the original dataset contains over 30,000 different observations. “The US Family Budget Dataset provides insights into the cost of living in different US counties based on the Family Budget Calculator by the Economic Policy Institute (EPI).” We talk more about the features of this dataset in our Project Plan section.


## Project Plan:

We’ll follow a simple EDA process for this project.

### Phase 1: Data Cleaning
As mentioned previously, our data contains over 30,000 observations. We plan to reduce the amount of observations below 10,000 while retaining an unbiased sampling. We’ll also clear any rows with N/A values or any duplicates.

### Phase 2: Task Abstraction
The key features of our dataset are the state and county names, whether it is a metropolitan area, healthcare and childcare costs, median family income, taxes, and total overall costs. There are several tasks we can fulfill through visualization using these features. For example: We’ll be able to view correlations between annual healthcare cost for families and Median annual income for families. We can use visualization to compare average healthcare costs and total costs in different counties. We can see whether there is correlation between healthcare costs and whether a county is part of a metropolitan area.

### Phase 3: Visualization
As the instructions say, we plan to create both interactive and static visualizations.

### Phase 4: Website
We plan to create a website using HTML, decorating it with CSS and scripting it with JS. The website will be a simple list of our visualizations with brief comments about each of them.

