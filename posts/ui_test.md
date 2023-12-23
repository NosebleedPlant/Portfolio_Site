---
title: 'UI test'
date: '2020-01-01'
---
# Introduction:
For this project me and my team of 4 were tasked with designing a hypothetical next-generation text-comprehension tool. The project was proposed by  Quillsoft Ltd. located in Toronto, they are a leader in assistive technology software that helps people read and write. We were told to imagine that key AI problems for natural language understanding have been solved, such as concept extraction and  paraphrasing. Our goal was to design a tool that could utilize such advances and incorporate various active reading strategies to help facilitate the reading experience and provide them with a vision to work towards.

# Persona Development:
To better understand our target users we reviewed the work that Quilsoft does and some of the issues that students face with regards to reading and writing comprehension. Based on our review of existing work as well as our own experiences with learning English my team developed three user personae per team member for a total of 15. We then synthesized these into 4 that would represent our users and their needs. The following are the three user personae that I developed.

<div class="accordian">
    <input type="checkbox" id="cb1" checked>
    <label for="cb1" class="accordian__label">Ahmed</label>
    <div class="accordian__content">
      <p>Ahmed is a male highschool student. He can speak English, Farsi and French. Ahmed owns an android phone and a windows laptop both of which he is proficient with. He does not read much outside of the schoolwork assigned to him and occasional social media posts. His struggles with reading comprehension consist primarily of connecting disparate ideas that have been introduced in the text. Ahmed does not suffer from cognitive disabilities and performs decently in class usually scoring average or slightly above average marks. He is hoping to use this application to improve his reading comprehension in an effort to improve his performance at school and score higher.</p>
    </div>
</div>

<div class="accordian">
    <input type="checkbox" id="cb2" unchecked>
    <label for="cb2" class="accordian__label">James</label>
    <div class="accordian__content">
      <p>James is a male trade school student. He speaks English. James is comfortable with using his android phone and laptop but not when asked to do tasks outside his regular usage. He is currently working towards a diploma in metalwork. His schoolwork often requires him to read and outside of that he makes it a point to read the news on his phone in the morning. He suffers from ADHD and has a hard time concentrating on the reading material which negatively impacts his reading comprehension. James scores average marks in class and only occasionally slightly below average. James is hoping to use this application to improve his reading comprehension in an effort to improve his performance at school and score higher.</p>
    </div>
</div>

<div class="accordian">
    <input type="checkbox" id="cb3" unchecked>
    <label for="cb3" class="accordian__label">Isla</label>
    <div class="accordian__content">
      <p>Isla is a female university student. She speaks English and moved to Canada from the UK last year. Isla is a relies on her iPhone to organize her schedule as well as complete various tasks required of her by the university. She is majoring in business and tends to read news articles in the morning when her schedule permits. Aside from that, she is often required to do extensive reading as schoolwork. Isla finds it very difficult to synthesize knowledge from what she reads without significant loss of detail and combats this by re-reading the text after some time to ensure that she is able to glean all the necessary information. She performs well in her classes and hoping to use the application to improve her reading comprehension in an effort to reduce the amount of time she currently spends studying without compromising her performance.</p>
    </div>
</div>

# Wireframe Prototype:
After synthesizing our three user personae and identifying potential ways to solve their problems we developed a rough sketch of what our application would be like. I then went forward with it and developed our wire-frame prototype on Miro which can be accessed below. A full breakdown of the refined wire-frame and reasoning behind the design choices is available here. The team then collectively conducted a discount evaluation using Neilsen’s Heuristics whose results can be found here which helped refine our design.

# User Evaluation:
Discount evaluations require evaluators to make assumptions about the users’ behavior and understanding of a system. What might be obvious to them might not be to the end-user. Therefore to account for that, gain a clearer understanding of how our users develop their mental model of the application as well as to ensure that there are no inconsistencies between the model they develop and the one we wish to impart, we decided it would be productive to conduct user evaluation using concurrent think-alouds and a paper prototype. Our evaluation was broken up into two sessions with a medium  fidelity porotype constructed in between. We used a very unstructured approach to our think-aloud so that we can observe the user as they discover our interface and so we can identify issues that first-time users might face. 

The think-aloud, however, suffers from the issue of users sometimes being unable to articulate their thoughts while in the middle of particular tasks, especially those that involve language input. Therefore we decided to pair it with a small interview after the think-aloud to compensate for this weakness and to gain an insight into users themselves with information such as their experience with similar applications. The interview also aims to glean more general impressions of the users’ experience as we believe those are best asked after the user has finished interacting with the system and has had a moment to process their experience. The interview was semi-structured and allowed the researcher to adjust it by selecting from a pre-made list of questions as they deem appropriate.

The interview and think-aloud, though powerful tools, are focused primarily on the discoverability and overall user experience, to gain more specific feedback we switched to more focused Task-Based Usability Tests in our second evaluation session. The researcher selected a subset of the provided tasks based on the results of the think-aloud and requested the user to complete them.  This allowed us to gain insight into sub-tasks that might have been underrepresented in the think aloud as well as sub-tasks that might have changed after implementing feedback from the think aloud between sessions

# Results of  Session One:
For the first round of evaluation, we discovered that users were having difficulty enabling and disabling the eyetracking in the application. This was primarily due to the users expecting the setting inside the settings menu and confusing the eye-tracking setting with the visual aid setting. Difficulty in forming connections between various icons and their meaning was a recurring issue throughout the evaluation; users were unable to associate the icons for visual aids and summaries with those respective features. Some users were confused by what the Visual Aids meant when they opened the settings and conflated it with the eye tracking functionality. Another issue that came up was the inconsistency between the summary icon used in the text to open up the summary overlay and the icon used to open up the compiled summaries from the top right section of the utility bar. Users also found that it was frustrating to have the related information and links to related documents be in separate pages of the same overlay as it necessitated extra navigation to open a linked document.

# Medium Fidelity Prototype:
A medium fidelity prototype was developed for the task-based tests analysis as we had reached a point where we were fairly satisfied with the overall design. We incorporated solutions to key issues that were identified in our earlier evaluation session such as adding tooltips to toggle switches in hopes of clarifying their function. We also collapsed the two separate pages of the “Related” overlay into one page that contains both the summary of how the documents are related as well as the links to said documents. During the first session, the only way the users could form an association between the Visual Aid and Summary icons with their respective features was by clicking on the icons to see what they do; in an effort to provide an alternative means of forming this association we decided on including the icons in the settings menu with the respective feature. Our rationale was that when a user opened up the settings they would be able to see the Summary and Visual Aid labels along with their associated icons and therefore form a connection between the two based on the proximity principle. We also provided a brief description of the Summary and Visual Aid features as well as the other options in the Settings menu to allow users to more easily identify what these settings are for.

The prototype itself is available here however since it was constructed for the task- based analysis, its functionality is broken off into separate flows that might not be particularly useful without the structure provided by the task prompts

# Results of Session Two:
For the second round, we wanted to continue acquiring information about the users’ mental model but in addition, we also wished to check the effectiveness of the changes we had applied.

To do so, we asked some of our users to open the Summary and Visual Aids before they were told to access the settings menu. We told the rest of our users to access the settings menu before the Summary and Visual Aids.

Our results showed that the changes incorporated were, for the most part, a success. The majority of the users were able to associate the toggles with the correct features thanks to the tooltip. The inability to associate the summary and visual aid icons with their respective features prior to opening the setting menu indicates that there is still difficulty forming that connection but the increase in success after opening the settings indicates that our solution to teaching the users this metaphor would work when the user is allowed to explore the application on their own. The brief summaries of the settings also proved successful in telling users what each setting effects.

# Conclusion:
The project culminated in a final prototype constructed by me using Axure that is available here. Detailed instructions on the usage of the prototype and a thorough breakdown of its functionality is also available using the button below.  I strongly suggest watching this short setup video before interacting with the prototype. Overall this project let me experience the entire UX process from ideation to testing to final prototype and was therefore highly rewarding. The team I was with was also able to provide me wonderful insights and suggestions that I would not have thought of otherwise