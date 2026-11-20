export const wtr4 = {
        logo: 'logos/creyos.svg',
        title: "Creyos - Software Engineering Intern",
        sections: [
                {
                type: 'text',
                content: `Creyos, formerly known as Cambridge Brain Sciences, is a healthcare technology company focused on providing hospitals and clinicians with scientifically validated tools to assess and manage patient brain health. Founded in 2015 by neuroscientist Dr. Adrian Owen and businessman Marc Lipton, Creyos supports over 10,000 healthcare providers worldwide, offering a solution that is flexible, engaging, and accurate.

                My position at Creyos is that of a Software Engineering Intern. I worked on multiple projects and specifically focused on resolving CI/CD and security issues for the platform. I mainly used Ruby and Ruby on Rails this term, although I worked in YAML as well. I worked throughout many different aspects of the organization, but my main team was entitled OpSec, which was focused on identifying, mitigating, and preventing security risks by protecting sensitive information, monitoring threats, and enforcing policies to safeguard the organization's assets.`
                },
                {
                type: 'image',
                src: 'reports/winter-2025/creyos-header.png',
                alt: 'Creyos Team',
                },
                {
                type: 'heading',
                level: 3,
                content: 'Learning Goals'
                },
                {
                type: 'text',
                content: `For this term, I tailored my goals to the position as there were many aspects of this role I had yet to do in a work placement, so I wanted to ensure that I was able to develop my skills for this specific position. As a result my goals were focused on improvement of related skills and refining my abilities both technologically and organizationally.`
                },
                {
                type: 'learning-goal',
                goal: 'Improve my skills in Ruby on Rails in a professional setting',
                result: `For this goal, I focused specifically on improving the main technical skill I would need for this position - improving my Ruby On Rails. Having worked mainly in languages like Javascript, C and Python, jumping headfirst into a language for a work term was an important goal for me. I wanted to ensure that I was able to provide benefit and show my skills as quickly as possible, and that meant becoming comfortable with a new language as quickly as possible.

                This goal, overall, was a success. I can mainly attribute this success to the assistance I got from my supervisors. Lucas Moulin and Zaki Khan provided me with ample time to learn the new language, and allowed for multiple meetings to go over what I had learned. The company provided me with the Ruby on Rails Tutorial textbook, which I went through over the course of two weeks. After that, and a few sessions with Zaki and Lucas, I felt far more comfortable working in Ruby on Rails. While I often still have to remind myself of some things while working, I am far more comfortable working in Ruby now than I was 4 months ago. This gave me experience in jumping into a new skill headfirst, which is often needed in a new position. Being able to tackle a new coding language at a new job right away is a skill that many people need and is very useful to have.`
                },
                {
                type: 'learning-goal',
                goal: 'Create a rigid work routine for working-from-home',
                result: `For this goal, I focused on guiding myself during my workweek, as being a remote worker allows for distractions to become readily available at any turn. I wanted to maintain a proper routine and "work-esque" environment, even when at home. I have grown accustom to working in person, and as a result self motivation, without the external factor of the work-environment, was an important goal to achieve.

                This goal was the one I chose to see my own personal growth. In one of my first work terms I did a similar goal, and I wanted to see how I have changed since that first learning goal session. This time around, instead of having a specific goal each day, I would attempt to create a work like environment from home. My daily agenda was easy to manage as that was a skill I had learned when working at OMAFRA. It was more important now to create an environment where I could maintain a productive composure throughout the day. To do this, I created a makeshift office in my house, away from easy distractions. I also ensured that I set strict deadlines for specific tasks, even when not required. This helped me to ensure that all tasks were completed in a timely fashion and I could maintain a pace that I was happy with. By having a dedicated workspace and rigid timetable I was able to continue to improve my own personal productivity and work routine efficiency.`
                },
                {
                type: 'learning-goal',
                goal: 'Expand my knowledge of cyber security in a professional environment',
                result: `For this goal, I focused on improving my own security knowledge on different vulnerabilities (SQL and XSS injections) by working with the security teams to review and update documentation, and ensure that the program meets SOC2 guidelines. I wanted to expand my computer science knowledge into an avenue that I am interested in and have not had the opportunity to work in as much.

                This goal, overall, was a partial success. When I first joined Creyos the tech team structure was far different. By March, there was a large reshuffling, and as a result I joined the OpSec team, which specifically targets security risks and manages them. I am one of the only developers on the team, so my main role is to deal with any coding security risks that are found in the code. I also have done other tasks for this squad such as CI/CD improvement and more. Being a member of the OpSec squad has provided me with many chances to improve my understanding of cyber security and the security needs of any professional environment, and I hope to continue to expand my knowledge on that going forward.`
                },
                {
                type: 'heading',
                level: 3,
                content: 'My Position and Responsibilities'
                },
                {
                type: 'text',
                content: `I worked as a developer on the OpSec Squad. We mostly managed and update the application to remove security risks or improve our code coverage/testing suites. I handled many tickets in many different avenues working at Creyos. Some were adding dev tools for the team, while others were resolving security risks that had appeared in testing or elsewhere. My daily work is usually assigned each week at my teams weekly commitment meeting, where I am given a ticket to work on. Here are some of the major tasks that I completed so far.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Session Timeout'
                },
                {
                type: 'image',
                src: 'reports/winter-2025/session-timeout.png',
                alt: 'Session Timeout Implementation',
                },
                {
                type: 'text',
                content: `The first major task that I worked on at Creyos was an issue related to a long session timeout. The session cookies for the website had an extremely long (1 week) TTL, and I was told to find a way to change that to 8 hours. This was my first task after learning the language so I took my time on it, but the fix was fairly simple. I found the document which handled the cookies, and found that the TTL was set as whatever the default value was. Instead, I set the TTL to be 8 hours from whenever the session had started, as to ensure that the cookies did not exist for too long, exposing the website to any security vulnerabilities. To test this I needed to test the API call and see what the cookies response would be, and decode the body of the response to see what time the TTL was set to. This task was a great starter task as it was interesting, easy to understand, and fun to solve!`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Dev /version Endpoint'
                },
                {
                type: 'image',
                src: 'reports/winter-2025/version-endpoint.png',
                alt: 'Version Endpoint',
                },
                {
                type: 'text',
                content: `Another task that I completed was creating an easy to access endpoint for the Creyos developers to see what build of the application they were currently working on. This task required me to create an endpoint to the dev site, and not the rest of the application. I had to tie an existing environment variable that had the build name and code, and had to display to the developers when requested. This task was fairly simple as implementing an endpoint is something that I have become accustom to, however learning to do this in Ruby was extremely interesting and useful. Plus, I had the opportunity to work with the environment variables and that was a positive experience for me, learning what each variable did and how I could use them.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Adding Coveralls to CircleCI'
                },
                {
                type: 'image',
                src: 'reports/winter-2025/coveralls.png',
                alt: 'Coveralls Configuration',
                },
                {
                type: 'text',
                content: `My largest task that I have worked on so far was implementing the Coveralls API to the applications CI/CD platform, hosted on CircleCI. This task was the most foreign I had received so far, as I had very little experience with CI/CD. However, the slow incrementation of progress as I learned how to add Coveralls to CircleCI, and then see how the application showed the coverage of each and every branch in the application was really interesting. This taught me a lot about YAML, as it was primarily the language the configurations for CircleCI were written in, which was something new that I had never done before. Regardless, this task was a success and I was able to add this major improvement to the continuous development of the application!`
                },
                {
                type: 'heading',
                level: 4,
                content: 'SNYK Investigation'
                },
                {
                type: 'image',
                src: 'reports/winter-2025/snyk.png',
                alt: 'SNYK Security Analysis',
                },
                {
                type: 'text',
                content: `My most recent completed task was a more research oriented one, where I combed through the documentation of the program Snyk, which is used to find security risks and vulnerabilities in a software's codebase. I was tasked to find out why only certain files were being scanned by Snyk, even though the expectations were that more files, if not most of them, should be evaluated. After reading all the documentation, I proposed that the Snyk application we were using was their IoT application, which only scans Dockerfile and .tf files, whereas the Snyk Code application is more wide spanning and encompassing. After realizing this, I was assigned a task to set up the Snyk Code application so that it is properly reviewing not just the IoT vulnerabilities but all possible issues in the codebase. This will be my next upcoming project.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Missing Security Headers'
                },
                {
                type: 'image',
                src: 'reports/winter-2025/security-headers.png',
                alt: 'Security Headers Configuration',                },
                {
                type: 'text',
                content: `My current main task as of the creation of this report is to find out why a certain page of the website is missing the content-security-policy header. Sophos, another security evaluation software, flagged that this header was missing from a certain page, and as a result I am currently tasked to work on resolving this missing header. Currently, the code that manages this policy seems to account for this page, however, it still does not seem to have this header on the Production site. This task continues to be a work-in-progress but I am excited to continue working on it and expanding my understanding of the security headers at Creyos!`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Skills Required and Learned'
                },
                {
                type: 'text',
                content: `I have learned so many things at Creyos so far, all of them new and exciting. This job is the most different from anything I have done before. The skills that I have used so far in this position have both been learned on the job and in prior work experiences/classes. The class that has been most beneficial to my work here was CIS*3760 - Software Engineering. This course has a full discussion of Agile principles so that was a major benefit to my work at Creyos, who take Agile development very seriously. Also, it was my first exposure to CI/CD and working on a pipeline. These are skills that have carried over well into this term. Classes like CIS*3120 - Computer Networking, have also helped in this position, as it has given me tools to understand what I am supposed to do in specific tasks, related to session cookies and other security tasks.

                Finally, my work at Kenna helped to prepare me for this position. Having worked in a development team before, even in a different workspace, has given me a lot of insight into how best to work in a development environment. That, and the skills imparted on me related to web development have become the vital backbone to everything I do now, regardless of its direct connection to my current work.`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Conclusions and Going Forward'
                },
                {
                type: 'text',
                content: `I am so glad I have had this opportunity to work at Creyos. Working in a completely new environment, with new challenges and different avenues for success has been very exciting. Doing more security and less front-end tasks has been a breath of fresh air for me. Being a member of the OpSec team and the wider Tech Team has been a great and enriching experience and I cant wait to do and learn more! I hope that this report helps to show my excitement and interest in my new position here at Creyos and I am excited to continue to grow and develop within the organization!

                I am proud of my work at Creyos, and hope that I can continue to improve in my summer work term!`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Acknowledgements'
                },
                {
                type: 'text',
                content: `I would like to thank Lucas Moulin, my supervisor, who helped me with all my work, every week for the past three months. I would also like to thank Zaki Khan, my other supervisor, who helped get me set up and started at Creyos, and guided me to my success here.

                I would also like to thank Alfonso Diaz, the head of the OpSec team, whose constant encouragement and positive attitude has been extremely helpful these past 4 months. Finally, I would like to thank Marc Lipton, without whom none of this would be possible.`
                }
        ]
};