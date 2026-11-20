export const wtr5 = {
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
                goal: 'Improve my rate of problem-solving',
                result: `For this goal, I focused on improving my problem-solving speed and increasing the efficiency and consistency with which I complete tasks, resolve issues, and close tickets. 

                This goal, overall, was a success. I focused on ensuring that I completed each task faster. While I did work on a lot of tasks this term, they seemed to be relatively smaller than they were before, meaning either I improved my speed or I was getting smaller tasks. I think it was the first option, as I kept a rigid routine, had well-thought-out action plans that I could execute. I always tried to make sure I had enough information before truly beginning any task, and when I didn't, I was always able to fill in the gaps quickly. I feel that this goal was properly met, as I completed more tasks and finished them faster the more time went on.`
                },
                {
                type: 'learning-goal',
                goal: 'Expand knowledge of existing code frameworks being used',
                result: `For this goal, I focused on improving my understanding of the existing development frameworks used by Creyos, including AWS, Snyk, Cloudflare, and expanding on my knowledge of Sonarqube. By developing my understanding of their frameworks, I can become a more well-rounded and consistent developer.
                
                I definitely achieved this goal throughout the term. I worked in many different elements of the Creyos application, most specifically in the AWS and Cloudflare areas. I worked on tickets that specifically handled elements of those frameworks and their integration with the application. I spent time in the Cloudflare documentation and Discord, finding more information related to my tasks, and learned more about how to work within them. I continued to work with Snyk and Sonarqube, in lesser but still important tasks, allowing me to have a strong and wide-spanning understanding of the frameworks used by Creyos.`
                },
                {
                type: 'learning-goal',
                goal: 'finish my co-op terms with new skills and independence',
                result: `For this goal, I focused on developing new skills related to independence, and ensuring that my success from my previous co-op terms cemented itself into something that could be applied not just in my future coursework and career, but in my broader life. Being able to complete tasks without having to resort to assistance from experienced developers is a worthwhile skill.

                I feel that I at least partially completed this task. I definitely became more independent as the co-op term and all my other terms went on, but it is hard to define something as a "new skill." I improved a lot as a developer and refined many of my skills, but nothing specifically "new" comes to mind. However, my need to constantly request assistance and consistent calls with senior developers did go down as time went on. I do think that overall, throughout all my co-op terms, I managed to learn new things and skills, like time management, increased understanding of varying languages, improved problem-solving, and more. However, skills are something hard to quantify, so I can not confidently say that anything specific was gained in just this term. However, my experience in co-op has been an enlightening one, and I have definitely learned new things throughout my time in the program!`
                },
                {
                type: 'heading',
                level: 3,
                content: 'My Position and Responsibilities'
                },
                {
                type: 'text',
                content: `I continued to work as a developer on the OpSec Squad. We managed and updated the application, removing security risks and improving our code coverage/testing suites. OpSec did not have so many development tickets this term, so I was given tasks from many different teams, including DevOps, Upstream, and more. My daily work was still given to me at the OpSec weekly commitment meeting, even though they weren't directly related. Here are some of the tasks that I completed.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Cloudflare inject script'
                },
                {
                type: 'image',
                src: 'reports/summer-2025/cloudflare.png',
                alt: 'Cloudflare Logo',
                },
                {
                type: 'text',
                content: `One of my major tasks this term was to remove a Cloudflare Inject script from appearing on every page of the Creyos application. The script had an important function, tracking website traffic, but the organization desired for the script to be invisible. I was tasked to research and resolve this issue. I spent most of my time researching Cloudflare on their documentation website and asking questions on their Discord. I eventually did discover a way to hide the inject script, and passed on this information to another developer so I could continue working on my Content Security Policy task, which remained from last term.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Continued CSP header issues'
                },
                {
                type: 'image',
                src: 'reports/summer-2025/csp-header.png',
                alt: 'CSP Header Issues',
                },
                {
                type: 'text',
                content: `As mentioned in the last term and above, the content security policy issue was the one that lingered from my previous term. There seemed to be some sort of endpoint of the application that was causing a content security policy issue, indicating that at some point, there was a JavaScript injection that was not being properly handled. It seemed to be placed in odd locations throughout the application. Eventually, I found the location of the script. There were older embedded Ruby pages that were being accessed in a redirect, causing the error. I implemented a proper call to the Content Security Policy into each of those scripts to resolve some of the errors. Other pages were outdated, so they were removed entirely.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Update application settings class'
                },
                {
                type: 'image',
                src: 'reports/summer-2025/settings.png',
                alt: 'Application Settings Configuration',
                },
                {
                type: 'text',
                content: `One of my later tasks was to update the application settings calls within the program. The application used an older method, which was outdated and a slight security risk. I was tasked with finding all of the older setting class calls and replacing them with the new version. This was fairly monotonous, but it was a necessary update to ensure that the settings were properly implemented and secure going forward. This was my final Programming task at Creyos.`
                },
                {
                type: 'heading',
                level: 4,
                content: 'Minor bug finding and resolution tasks'
                },
                {
                type: 'image',
                src: 'reports/summer-2025/bug-finding.png',
                alt: 'Bug Finding and Resolution',
                },
                {
                type: 'text',
                content: `A smaller part of my time at Creyos was occupied by assisting the Testing team in reproducing and finding software bugs that were reported as occurring from the clients of the software. This consisted of following the descriptions of how the bugs were first spotted and attempting to recreate them. Then, I write up how I can reproduce it so that a developer, whether that be me or someone else, can attempt to fix it at some point in hopefully the near future.`
                },
                
                {
                type: 'heading',
                level: 3,
                content: 'Conclusions and Going Forward'
                },
                {
                type: 'text',
                content: `I was given such a great opportunity at Creyos, and being able to develop my skills outside of just one avenue of development has been great. Creyos has provided me with a longer Co-op position, which allowed me to grow and develop my skillset in a different language and a new aspect of software engineering. Being a member of the OpSec team and the wider Tech Team has been an important and amazing experience for me, and I am glad I was able to finish my Co-Op terms on such a high note. I am proud of my work at Creyos and thankful for the opportunity!

                I also want to thank everyone involved in the Co-op program at Guelph. This has been such a formative and important experience for me, not just in this term but in all previous terms. It has been an honour for me to have taken part in this program, and I look forward to using my skills that I gained here in other parts of my life and career going forward!`
                },
                {
                type: 'heading',
                level: 3,
                content: 'Acknowledgements'
                },
                {
                type: 'text',
                content: `I would like to thank Lucas Moulin, my supervisor, who helped me with all my work every week for the past three months. I would also like to thank Zaki Khan, my other supervisor, who helped get me set up and started at Creyos and guided me to my success here. Finally, I would like to thank Connor Ferguson, who was such an immense help whenever I needed it.

                I would also like to thank Alfonso Diaz, the head of the OpSec team, whose constant encouragement and positive attitude have been extremely helpful these past 4 months. Finally, I would like to thank Marc Lipton, without whom none of this would be possible.`
                }
        ]
};