
export const wtr1 = {
        logo: 'logos/OMAFRA.svg',
        title: "OMAFRA - Data Visualization and modelling Co-op",
        sections: [
                {
                type: 'text',
                content: `OMAFRA, also known as the Ontario Ministry of Agriculture, Food & Rural Affairs, is an Ontario Ministry focused on Ontario based growing, farming, and farm life. This is a massive ministry, as farms and growing manage a massive part of Ontario's economy. I specifically worked with multiple Horticulture researchers, who focused on helping farmers across southwestern Ontario with pests, pathogens and production issues. Located mainly in Guelph and Ridgetown, OMAFRA, or its earlier iterations, date back to 1888, making it one of the older governmental bodies dedicated to agricultural affairs in Canada. OMAFRA collects extensive agricultural data for the province, helping to inform policy decisions, research efforts, and industry strategies. OMAFRA plays a pivotal role in maintaining the health and success of Ontario's agriculture and rural communities, providing a breadth of services and initiatives that touch on numerous aspects of life in the province.

        My job was to help many OMAFRA researchers manage, simplify, and modify their data to create graphs, dashboards, and tables. I helped to export and set up data from Government Weather Stations, and helped improve the efficiency and quality of their data collection. I also assisted them throughout many field trips and assignments throughout Ontario whenever they needed it.`
                },
                {
                type: 'image',
                src: 'reports/summer-2023/image1.jpg',
                alt: 'Field Trip',
                caption: 'One of the many field trips taken during my time at OMAFRA'
                },
                {
                type: 'text',
                content: `While I did have previous work experience in the Software Development industry, this was my first foray into computer science in a non-computer science-based company. I have helped develop sites and apps, but I had never, up until April 2023, been a part of a group that is not software/Com-Sci focused. This was an extremely new experience for me and helped me grow accustomed to what many jobs are truly like.`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Learning Goals'
                },
                {
                type: 'text',
                content: `Many of my goals for this Work Term were Focused on solving technical problems I had found with the Code Base I had been given. My first two Goals were:`
                },
                {
                type: 'learning-goal',
                goal: 'Solve the bugs related to publishing and creating the Power BI Dashboard',
                result: `For this goal, my focus was on two things. First, there were bugs in some of the code I was given, which created errors related to the Excel sheet that the Dashboard used as a reference for Power BI. As it turned out, the R code used to compile the scraped data was attempting to use a function that expected the highest value in a sequence. However, the data provided was not in the form of a sequence. Solving this bug was straightforward: I had the program restart from zero when run, instead of picking up from where it left off. The code was not functioning as expected, and had it done so, it would have caused errors in Power BI when attempting to reference data based on the organization of the table. The second issue I solved involved publishing the data publicly. After many hours of discussion with the IT department, I discovered a form that would allow specific users' computers to publish data publicly and created embedded references for a Power BI Dashboard. After coordinating with my supervisor and creating a shortcut to run the data collection code, he was then able to press a single button to collect all the necessary data for the dashboard. He could then go to the published dashboard to access the embedded reference.`
                },
                {
                type: 'learning-goal',
                goal: 'Create a program that automatically creates all the graphs required each week',
                result: `For this goal, I originally was forced to manually update three Excel graphs and create Pivot Charts for them every week, as I had to create a post with the data and graphs every Thursday. Originally, my predecessor in the role created a series of Excel graphs that referenced each other to create a final document with a sheet for each table that had all the relevant data. However, I was only provided with the source files, and not the final file. With help from my predecessor, I was able to create a makeshift solution, but quickly realized I needed to improve, and hopefully automate this process going forward. Using my experience in Matplotlib, I created two programs that automatically created each of the graphs needed automatically from the source files I was given at the beginning of the term. Each program creates a set of graphs based on a specific topic for each County. There was one set for GDD (Growing Degree Days) and another for precipitation. After much tinkering, I was even able to get the data to look exactly how it looked for the Pivot Chart versions of the same graphs, with the same colour scheme and design. I put these commands into a Batch file so that my successor in this role will have an even easier time creating these graphs.`
                },
                {
                type: 'text',
                content: `My next three goals are related to learning more skills, improving systems, and growing as an employee. Those goals were:`
                },
                {
                type: 'learning-goal',
                goal: 'Update and integrate OMAFRA\'s and public weather stations',
                result: `Both the Government and many farmers and growers have access to private and public weather stations. I was given the task of learning how to connect the government's trial stations to my computer to gather the data and connect it to the VCR Dashboard that I had updated and improved. However, I quickly learned that the data-sharing site I was told to use, Weather Underground, was quite rigid in its requirements for publicly accessible data. The weather stations needed to be active with no drops in data retrieval for a long period of time before they could be publicly accessed. The problem was that the stations we used were not reliable enough to maintain data for a long enough time to be public, and many farmers have a similar issue. The data and stations were there but were not publicly accessible in the desired way. Changing the layout of the data to match the dashboard data was not an issue, and it was easy to create an R program that merged the datasets, but without public access to other stations, the point of this goal was lost.`
                },
                {
                type: 'learning-goal',
                goal: 'learn to properly divide my time and create a routine',
                result: `This goal was the one I made the most personal progress. To help manage my time, I made sure to have specific goals and plan for each day. If I was focused on continuing to create my graph creation codes, I would set a time limit for that task, as after a while, I would usually either get burnt out or I would hit a block. Then, by switching tasks, I would maintain motivation throughout the day without overexerting myself. I made sure to always clock in at a specific time (9:00) each day so that I would gain a sense of routine throughout the week. Even with that well-divided routine and timetable, I still have the chance for breaks, as I would occasionally be asked to go on IPM Scouting trips. By having a strict routine and a well-structured weekly schedule, I was able to improve my productivity and efficiency.`
                },
                {
                type: 'learning-goal',
                goal: 'learn skills beyond programming languages',
                result: `The IPM Scouting trips were key to this goal's success. Being able to go and scout farms and fields helped me gain an understanding of what the data I was parsing meant and was related to. Going to the fields and counting and managing the data physically was much different, yet equally interesting. I was able to learn about not only the same data as I managed online but also facts and information that otherwise I would not have learned. I became more familiar with crop pests, insects, diseases, how to spot them, and what they would affect. The IPM trips along with the IPM training at the beginning of the year helped to give me a more well-rounded understanding of the crops that I was researching throughout the term.`
                },
                {
                type: 'heading',
                level: 3,
                content: 'My Responsibilities'
                },
                {
                type: 'text',
                content: `I had many responsibilities in my time at OMAFRA. My main responsibility was managing and creating the weekly Vegetable Crop Reports on the OnVegtables website. This was managed on WordPress, which is a website management software. Each week, I would prepare the posts on WordPress and create all the graphs and tables for said reports. To do that, I originally had to fill in data manually in Excel sheets before transitioning to an Excel command-based solution. After that, however, I used Python and Matplotlib, a graph plotting library, to create programs to automatically create the data instead of having to manually create them. I also updated code created by my predecessors in the role that scrapes data and converts Excel graphs into HTML. Now, with the help of two Batch type files, all of the code needed to create the graphs for the weekly report can be completed after pressing two buttons.`
                },
                {
                type: 'image',
                src: 'reports/summer-2023/image2.png',
                alt: 'Website Weekly Report',
                caption: 'One example of the title screen of the weekly VCR Reports'  
                },
                {
                type: 'text',
                content: `The second main responsibility was to debug and manage the Power BI Dashboard for the VCR on the OnVegetables Website. I ran the program twice weekly to update the data more regularly. After I managed to create the Batch file, the program was able to run the required data more consistently throughout and week, and I even set up the code on my supervisor's devices so that he could be given access to the dashboard and post it when needed. At that point, he was in charge of updating the VCR Dashboard. I also consulted with other teams in OMAFRA, such as the Apple Team, to help them set up a dashboard of their own, providing my own unique coding experience, and helping them set up their codebases to start their dashboards. to see both the dashboard and the backlog of weekly reports, go to https://onvegetables.com. They have not only all the published work I completed but many interesting articles about growing vegetables in Ontario.`
                },
                {
                type: 'image',
                src: 'reports/summer-2023/image3.png',
                alt: 'PowerBI Dashboard',
                caption: 'The Power BI VCR Dashboard I managed for most of the summer'  
                },
                {
                type: 'text',
                content: `I also worked on managing and establishing the ministry's test weather stations. While my project did not end as desired, I learned a lot about managing and exporting data from external stations and sites. I also had the opportunity to go on IPM scouting trips and learn about crops and pesticides firsthand, and not just from the graphs I made. Overall, my work at OMAFRA was very intresting. Many of the skills, like Python and Matplotlib, were ones I had learned in class, however others, like R and Power BI, I learned as a work. I had no expectations of the technological requirements that I would use during my time, however, I did learn new things and aspects of technology. I managed and exported weather station data from HoboLink, created Excel graphs and sheets using only commands and functions, and consolidated code using Batch files. All of these things are elements of the tech industry that are important to know, and I am glad I had the opportunity to learn them at OMAFRA.`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Conclusion'
                },
                {
                type: 'text',
                content: `OMAFRA was a great place to have my first work term experience for Co-op. In many ways it pushed me ahead for my learning at the University of Guelph, teaching me things like R before I had to academically. Not only was there functional success, but OMAFRA taught me to manage my time, expand my horizons, and enjoy many things I might have originally disliked based on the topic or general concept. I had no interest in OMAFRA or vegetables beforehand, and now I can say I have learned more and become more interested in farming and horticulture more than ever before. While not every task or goal was a success, I was able to grow from each project, and my skills expanded no matter the result. Being the only "Technical Person" on a team before, I will say that this experience has changed my perspective on what I would prefer in a work term. While I loved my time at OMAFRA, having someone with experience to oversee me would be extremely helpful and would allow me to grow more than ever before.
        I am proud of my success at OMAFRA, and going forward, I hope to continue to succeed and enjoy each work term as much as I did this one!`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Acknowledgements'
                },
                {
                type: 'text',
                content: `I would like to thank Dennis Van Dyk, Travis Cranmer, and Josh Mosiondz for hiring me and supporting me throughout this entire work term. Without them I do not know where I would be now, and I sincerely appreciate their assistance and mentorship this summer.
        I would also like to thank Dan Stein and Joe Roy, the fellow co-op students on the team, who helped to acclimate me to the OMAFRA team and helped me whenever I came out on trips!`
                }
        ]
};