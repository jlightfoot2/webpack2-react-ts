export interface BookInterface{
  id: number;
  title: string;
  description: string;
  pages: BookPageInterface[];
}

export interface BookPageInterface{
  id: number;
  title: string;
  content: string;
}

const makeBook = (id:number, title:string, description: string, pages: BookPageInterface[] = []): BookInterface => {
  return {
    id,
    title,
    description,
    pages
  }
}

const makePage = (id:number, title:string, content: string): BookPageInterface => {
  return {
    id,
    title,
    content
  }
}

const familyPage1Content = `
<p>Now that you’re at home, you may feel and act differently than you did before deployments.  Your family and friends may have changed too.  This is common and normal.  You may find it hard to reconnect with loved ones and wonder if things well ever get back to “normal”. </p>
<p>Are any of these common post-deployment issues a problem for you?</p>
<ul><li>I’m less interested in activities I used to enjoy</li>
<li>I’m having a hard time trusting others</li>
<li>I need to be in control of my emotions all the time</li>
<li>I don’t want to talk about what happened in the war zone</li>
<li>I’m having a hard time with face-to-face communications</li>
<li>I have less interest in sexual activity</li>
<li>I’m confused about my role at home</li>
<li>I’m having a hard time talking with my kids</li>
</ul><p> </p>
<p><strong>1.2 Improving Family Relationships</strong></p>
<p>After a long separation, it’s common to have tensions and disagreements as you get reconnected.  A great way to reconnect with the family is to find out what happened while you were away.  Then you can tell them about the positive things that happened during your deployment. </p>
<p>Try these tips for reconnecting with family and friends:</p>
<ul><li>Go to a sporting event, concert or a movie together</li>
<li>Take a walk, hike, or a bike ride together</li>
<li>Talk about your experience living in a different country</li>
<li>Make a scrapbook of photo album of your lives together, with your deployments as one chapter in a larger story</li>
<li>Ask your family what they did while you were gone, you might ask:
<ul><li>“What were the best movies you saw?”</li>
<li>“What music have you been listening to?”</li>
<li>“Anything cool happen at work/school?”</li>
<li>“What funny things have the kids done lately?”</li>
</ul></li>
</ul><p> </p>
<p><strong>1.3 Pay Attention to Positives</strong></p>
<p>As you readjust to life with your family, it’s easy to focus on the bad instead of the good.  Do your best to notice the positive things family members do for you.</p>
<ul ><li>Your partner bringing you a snack while you watch T.V.</li>
<li>Your daughter drawing you a picture.</li>
<li>Your mom offering to watch the kids so you can spend some “alone” time with your partner.</li>
<li>Your son cleaning up his room without being told.</li>
</ul><p> </p>
<p>Noticing the small positives in life helps you feel better and your loved ones feel appreciated.  It’s also good to tell people you appreciate their behavior: "Thanks, I really appreciate how much you've helped me with this chore."</p>
<p> </p>
<p><strong>1.4 Talking About Deployment</strong></p>
<p>Some service members just want to put their deployment experiences behind them.  But talking about those experiences with your family helps everyone.  Keep in mind that talking about your experiences doesn’t mean you have to tell people everything.  Here are suggestions for talking about your deployment without going into too much detail:</p>
<ul><li>“I saw and did some really intense things that are hard for me to talk about.  Thanks for your patience.”</li>
<li>“Sometimes my memories make me space out and I have a hard time concentrating.</li>
<li>"I need you to just listen sometimes, and not interrupt me.”</li>
<li>“I might need a few minutes to calm down—thanks for giving me some space.”</li>
</ul><p> </p>
<p>Your family may need support because they may be worried or upset about what happened to you.</p>
<ul><li>Telling them what deployment was like for you.</li>
<li>Telling them which deployment memories affect you now.</li>
<li>Explaining that reminders of your deployment may make you distracted or tense.</li>
<li>Reminding them how much you care about them.</li>
<li>Enjoying fun activities together.</li>
<li>Listening to them with an open mind, even when you have a different opinion.</li>
<li>Acknowledging their feelings, “I know that this is hard for you too.”</li>
</ul><p> </p>
<p><strong>1.5 Handling Conflict</strong></p>
<p>Arguments can make it hard to talk to your partner about deployments.  It’s important to discuss problems in a way that builds up the relationship instead of tearing it down.  Here are some ideas for handling conflicts with a family member:</p>
<ul><li><strong>Plan ahead. </strong> Schedule time to discuss the problem.  This gives both of you time to think about what to say.  Find a time when you can talk without distractions.</li>
<li><strong>Identify your goal.  </strong>If your goal is to "win" the argument, your relationship will suffer.  Seek an outcome that will satisfy you both.  This usually requires compromises from both partners.</li>
<li><strong>"I" Statements.  </strong>When you bring up an issue, don’t blame the other person.  Blame makes people defensive.  Instead, use “I” statements, telling the other person how you feel.</li>
</ul><p >Instead of saying, "you never listen to me," say, "I feel frustrated when you read the newspaper while I’m talking."</p>
<p >Instead of saying "That's ridiculous!" say, "I don't understand what you mean. Can you explain it again?"</p>
<ul ><li><strong>Stick to one topic.  </strong>Bring up a specific issue that happened.  Tell the other person exactly what happened and why it bothered you.  Focus on resolving the issue, instead of bringing up other things.  Avoid saying "always” or “never”.</li>
</ul><p >Instead of saying "You always nag me!" say, "Sometimes I need a few minutes to unwind after work."</p>
<ul ><li><strong>Stay calm: </strong>When you get upset, you're less likely to think clearly, and you're more likely to say things that don't help the situation.  Stay calm, and you'll be better able to solve the problem.</li>
</ul><p >To stay calm, take breaks during the discussion.  Practice relaxing by counting to 10, breathing slowly, or taking a brief walk to relieve tension.</p>
<p >Be sure to tell your partner if you need a short break from the conversation so it doesn't seem like you're walking away.</p>
<ul><li><strong>No "below the belt"</strong> <strong>shots</strong>.  Shouting, name-calling, foul language, threats, and sarcasm usually make arguments worse and make it harder to find common ground.</li>
</ul><p> </p>
<p><strong>1.6 Approaches That Do “More Harm Than Good”</strong></p>
<p>Avoid <strong>criticizing</strong> and <strong>lashing out</strong> in anger during arguments.  Trying to control a conversation by demanding that others respond in a certain way won’t get you good results.  Finally, don’t expect others to solve problems for you<strong>.</strong>  You need to help find the solution.</p>
<p> </p>
<p><strong>1.7 Your Communication Plan</strong></p>
<ul><li>Develop a "Communication Plan" to talk about deployment with your family. </li>
<li>Decide ahead of time what you want to discuss.</li>
<li>Share a little at a time, and then let the other person respond.</li>
<li>Learn to endure painful feelings so you don't lash out while sharing.</li>
<li>Listen without interrupting or getting defensive.</li>
<li>Ask for feedback.</li>
<li>Ask the other person to share their own feelings, experiences, and ways of coping.</li>
<li>Own up to your feelings and behavior – don't blame others for how you feel.</li>
</ul>
`;

const familyPage2Content = `
<p>After challenging and potentially life changing experiences like deployment, you may find that you want to spend time alone.  It’s natural to want some time to yourself.  If you had an intense combat experience (like being injured or witnessing a death of a friend), it may be difficult to get close to other people right now.  Or you may prefer to spend time only with “battle buddies”, avoiding friends who don’t share your deployment experiences.  These are all normal and common feelings held by many service members returning from deployment.</p>
<p>There’s nothing wrong with spending some time alone, but isolating yourself from others can become a bad habit. To reconnect with your friends and community, we recommend that you work through the following sections in order:</p>
<ol ><li>Overcome isolation</li>
<li>Strengthen your network of relationships</li>
<li>Share your deployment experiences</li>
<li>Manage problem situations</li>
</ol><p> </p>
<p><strong>2.1 Overcoming Isolation</strong></p>
<p>After an intense experience like deployment, you may feel awkward and lonely around others.  You might keep to yourself because it allows you to avoid situations that bring up painful feelings or memories.  But if you cut yourself off from your friends, you won’t get the support you need and deserve.  Avoiding people can actually increase those upsetting thoughts and feelings.</p>
<p> </p>
<p><strong>2.2 Tips For Beating Isolation</strong></p>
<p>You may have to push yourself to spend time with others. Remember that being around others is important for your well-being.</p>
<ul ><li>Be intentional.  Plan to socialize with others.  Stick to your plan even when you’d rather be alone.</li>
<li>Spend time with people you trust, in places where you are comfortable.</li>
<li>Start with short outings, staying a little longer each time.</li>
</ul><p> </p>
<p><strong>2.3 Strengthening Your Network</strong></p>
<p>Returning service members often think they have little in common with their family and friends back home.  After such an intense, life-changing experience, you may think no one understands you.  But connecting with others helps you:</p>
<ul ><li>Improve your mood</li>
<li>Decrease your boredom</li>
<li>Deal with painful thoughts and feelings about your deployment</li>
<li>Find solutions to your problems</li>
<li>Avoid harmful coping methods (like heavy drinking)</li>
<li>REALIZE you are not alone<br type="_moz" /><br /> </li>
</ul><p>It's important to strengthen your social network in the months following a deployment.  Some people like having a large and mixed social network.  Others prefer a smaller circle of friends.  Either way, it helps to have people you can count on when you need them.  Your social network includes:</p>
<ul ><li>Family members and friends</li>
<li>Neighbors</li>
<li>Co-workers</li>
<li>Community members such as members of church or sports league</li>
<li>Professionals such as counselors, therapists and doctors</li>
</ul><p> </p>
<p><strong>2.4 Expanding Your Network</strong></p>
<p>Being with others gives you a sense of belonging and security, lifts your spirits, and eases your worries.  Don’t forget, you may be a source of comfort and friendship for others, too! </p>
<p>Here are some things you can do to be part of your community and increase your social support network:</p>
<ul ><li>Get some exercise.  Join a pick-up game.  Take and exercise class at a local gym or community center. Sports leagues and hiking groups are great ways to meet people while staying fit.  You could also try a new sport of physical activity.</li>
<li>Get a hobby.  Find local people who share your interest in music, motorcycles, professional sports, cooking, and books</li>
<li>Join a place of worship.  Joining a church, synagogue, mosque or temple can give you spiritual directions and help you become part of the community</li>
<li>Join a professional group or neighborhood organization.  Get involved in a Neighborhood Watch group, or a group based on professional interests</li>
<li>Volunteer.  Get involved in community service projects—clean up a local park or volunteer at a hospital</li>
<li>Join a veteran's organization.  Groups such as the VA, the American Legion, and Veterans of Foreign Wars (VFW) are safe places to talk and fit in.  You’re probably eligible to join these groups, even if you’re currently active duty</li>
<li>Join a cause.  Work with others toward a goal you believe in, such as an election or the protection of a natural area</li>
</ul>
`;

const familyPage3Content = `
<p>Talking about your intense deployment experience can ease the impact of it.  Opening up about your deployment can be hard, so choose people who you trust to help and support you.  Friends, family members, chaplains, counselors and therapists can all provide support.</p>
<p><strong>3.1 Sharing Your Deployment Experiences</strong></p>
<p>The excuses listed are common and understandable.  You may need to coach yourself with self-talk. <br /><br />Below are positive ways to deal with these common excuses:</p>
<p><strong>“I don’t want to be a burden.”</strong></p>
<ul ><li>Remember: People who care about you don’t see your problems as a burden.</li>
<li>Ask yourself: “How do <em>I </em>feel when a close friend talks to me about something that bothers them?”</li>
<li>Work through the most upsetting stuff together.<br /> </li>
</ul><p><strong>“I think I should be over it by now.”</strong></p>
<ul ><li>Remember it takes time to heal.</li>
<li>Looking for support can help you recover more quickly.</li>
<li>Judging and criticizing yourself isn’t helpful and may make recovery harder.<br /> </li>
</ul><p><strong>“I don’t want to be teased or made fun of.”</strong></p>
<ul ><li>Talk to someone you trust.</li>
<li>Agree to keep the conversation private.<br /> </li>
</ul><p><strong>“I’m afraid I’ll get so upset that I’ll lose control.”</strong></p>
<ul ><li>Go at your own pace and take breaks when you need to calm down.</li>
<li>Practice your new relaxation skills when you’re upset<strong>.</strong><br /> </li>
</ul><p><strong>“I don’t think it will be helpful.”</strong></p>
<ul ><li>Talk to someone to examine your own feelings.</li>
<li>Facing your fears is healthier than avoiding them.<br /> </li>
</ul><p><strong>“I think asking for help means I’m weak or going crazy.”</strong></p>
<ul ><li>Everyone needs support from time to time.</li>
<li>Getting help shows strength, courage, and self-respect.</li>
<li>Talking about things can be hard, but in the end you’ll feel better and stronger.<br /> </li>
</ul><p><strong>“I don’t think anyone can understand.”</strong></p>
<ul ><li>Only if you <em>never</em> give anyone the chance to understand.</li>
<li>You’re not alone; others have been through similar experiences.</li>
<li>Ask others how they handle stressful experiences in their lives.</li>
<li>Talk to a professional, such as psychologist or support group.<br /> </li>
</ul><p><strong>“I’m worried that talking about it may affect my military career.”</strong></p>
<ul ><li>Talk to other service members with similar experiences.</li>
<li>Agree to keep the conversation private.</li>
<li>Know that in most cases, talking about your problems will help you overcome them.  But be aware that sharing some information could impact your career.  So share with someone you trust.<br /> </li>
</ul><p><strong>“I think people might reject me if they know what I did during deployment.”</strong></p>
<ul ><li>Talk to other service members first, and then share with others you trust.</li>
<li>Ask the other person to listen without judging.<br /> </li>
</ul><p><strong>Remember: </strong>You did the best you could in the situation based on the information you had at the time.</p>
<p> </p>
<p><strong>3.2 How to Talk About Deployment</strong></p>
<p>Not talking about deployment can increase upsetting thoughts and feelings.  It can limit your ability to understand what happened or deal with your feelings.  On the other hand, talking about your deployment all the time can be too much for you and others to handle.  Finding a balance between these extremes is the goal.</p>
<ul ><li>How do you open up to others and strengthen your social ties?  Things you may want to talk about include:</li>
<li>The actual events of your deployment</li>
<li>Thoughts and feelings you have about those events</li>
<li>Ways you’ve coped with your experiences</li>
<li>Ways you’ve grown or changed since your deployment</li>
<li>Practical decisions, such as what to do about your job</li>
<li>Thoughts about your future</li>
<li>Ways you found strength you didn't know you had</li>
<li>Things you’ve learned that might help others to cope with similar experiences<br /> </li>
</ul><p>You should also figure out the best times to talk about what happened.  It’s a good idea to wait to talk about your deployment until:</p>
<ul ><li>You’re well rested</li>
<li>You’re with someone you know and trust</li>
<li>You’ve got enough time to share your thoughts and get feedback</li>
<li>You’re not already feeling upset</li>
<li>You’ve got some privacy<br /> </li>
</ul><p>Other service members worry about getting emotional when talking about deployment.  If that worries you, remember these tips:</p>
<ul ><li>It’s ok to get emotional.  Once you share, your emotions won’t seem as overwhelming</li>
<li>Tell the person you may get emotional, and you’d appreciate their support if you do.</li>
<li>Take a chance.  Talk about painful feelings or thoughts even if it’s hard.</li>
<li>Expect some uncomfortable feelings after talking about hard issues.  Know that these feeling are easier to handle with time and practice.</li>
<li>Inform the other person you may need to take a break to calm down or collect yourself.</li>
</ul><p> </p>
<p>When you finish talking:</p>
<ul ><li>Thank the person for listening.  They should know you value their time and support.</li>
<li>Schedule a cool-down time after talking.  Do something fun and easy to help shift back to the present.</li>
<li>Plan to talk about your deployment with someone you trust.  Schedule your plan once a week or once a month.</li>
<li>Expect the other person to respond in ways that bother or upset you.  If that happens, know that they probably don’t have bad intentions.  Talk with them about what bothered you, or ask someone else for their opinion.<br type="_moz" /><br /> </li>
</ul><p><strong>We strongly encourage you to get help and support from a trained behavioral health professional if you:</strong></p>
<ul ><li>Feel extremely sad or depressed for more than a week.</li>
<li>Have anxious or distressing thoughts you can’t control for more than a week.</li>
<li>Find it difficult to work or meet your daily responsibilities.</li>
<li>Experience relationship problems, or have trouble taking care of your family.</li>
<li>Increase your use of alcohol or drugs to cope.</li>
<li>Overuse of prescription medications.</li>
<li>Have traumatic stress reactions that do NOT get better as time passes.</li>
<li>Think about hurting or killing yourself.</li>
<li>Think about hurting or killing someone else.</li>
<li>Feel extremely angry most of the time.</li>
<li>Have trouble sleeping most of the time.</li>
<li>Have problems eating or lose significant weight without trying.</li>
<li>Know others are concerned about you and think you should talk to someone.</li>
</ul><p> </p>
<p><strong>3.3 Talking to a Professional</strong></p>
<p>Many service members find help in talking to a professional, such as a psychologist, counselor, spiritual advisor, doctor, or nurse.  Others join a support group of people with similar experiences.  The decision to seek professional counseling is a choice.  Remember, some situations require more professional help than others.<br /> </p>
<p><strong>If you are feeling suicidal or homicidal, let someone know. Seek help immediately.  Call 911 or the Suicide Crisis hotline at 1-800-273-TALK.</strong><br /> </p>
<p>It doesn’t have to be an emergency to get help from a professional therapist or counselor.  Experts who work with military personnel can help you:</p>
<ul ><li>Manage your feelings and thoughts more effectively</li>
<li>Feel more comfortable talking to people in your daily life</li>
<li>Pursue goals that are important to you</li>
<li>Focus on your future</li>
<li>Use the Trigger Record <em>as soon as possible</em> each time you are triggered<br /> </li>
</ul><p><strong>Using your Trigger Record:</strong></p>
<p>It is important that you recognize what triggered you.  It is also important to see how the trigger affected your emotions, physical reactions, and behaviors.  You will begin to see how trauma triggers are different from the original traumatic experience.  If you have strong feelings or sensations, you can start from there and work backwards to determine the trigger that set you off.</p>
<p>Use the Trigger Record <em>as soon as possible</em> each time you are triggered.  It is important that you recognize what triggered you.  It is also important to see how the trigger affected your emotions, physical reactions, and behaviors.  You will begin to see how trauma triggers are different from the original traumatic experience.  If you have strong feelings or sensations, you can start from there and work backwards to determine the trigger that set you off.<br /> </p>
<p><strong>Services available to you:</strong></p>
<ul ><li>The VA at <strong><u><a href="http://www.seamlesstransition.va.gov">www.seamlesstransition.va.gov</a></u></strong></li>
<li>Vet Center at <strong><u><a href="http://www.va.gov/rcs/index.htm">www.va.gov/rcs/index.htm</a></u></strong></li>
<li>Military One Source at <strong>1-800-342-9647</strong></li>
<li>Click on the <em>Call </em>or <em>Chat </em>button in the right-hand corner of this website to get <strong>LIVE</strong> help from a trained consultant at the Defense Centers of Excellence Outreach Center.</li>
</ul>
`;

const familyPage4Conent = `
<p>You may face insensitive questions from people or feel that people do not want to listen to your experiences.  There are many helpful responses you can use to manage relationships with your family, friends, and community.<br type="_moz" /><br /> </p>
<p><strong>4.1 Frustrating Questions</strong></p>
<ul ><li>When you come back home someone may ask you, “Did you kill anyone?”, “What did you do over there?“ or “Are you screwed up now?”</li>
<li>Because some questions may upset you, you should think of your response ahead of time.  Planning ahead will keep you from doing or saying anything you may regret.</li>
<li>Let’s look at some responses to awkward questions:</li>
<li>“No offense, but I don’t like to talk about my deployment</li>
<li>“I’m not comfortable answering those questions right now, but I appreciate your interest.”</li>
<li>“Oh, let’s not go there.  Let’s talk about something else.”</li>
<li>“Let’s talk about this another time.”</li>
<li>“I have a lot of strong opinions on that subject.  Do you have time to listen?”</li>
<li>“That’s not a cool thing to say (or ask)”</li>
</ul><p> </p>
<p><strong>4.2 Unhelpful Responses</strong></p>
<p>Sometimes you may get a sense from people that you shouldn’t talk about your deployment.  You may think they want you to just forget about your experiences or keep your feelings to yourself.  You might think they don’t care about your thoughts or feelings. Remember, it is possible that they are struggling with their own thoughts and feelings about what you’re saying. </p>
<p><br />Unhelpful responses from your listener:</p>
<ul ><li>Seems too bus to talk</li>
<li>Acts uncomforable wen you talk to them about your experiences</li>
<li>Doesn't understand what you mean</li>
<li>Complains about their own problems instead of listening to you</li>
<li>Tries to fix the problem instead of listening</li>
<li>Responds by saying "Forget it, it's in the past." or "Just ge over it."</li>
<li>Reacts with shock or judes your behavior</li>
<li>Criicizes your feelings or the ways tha you havbe coping</li>
<li>Criticizes you for what you di while deployed<br /> </li>
</ul><p>Some Ways to Respond to Unhelpful Responses:</p>
<ul ><li>When others don’t respond in a helpful way, take steps to let them know what you need.</li>
<li>Remember they care but may have trouble showing it.</li>
<li>Tell them what they can do to help.</li>
<li>Let them know how you feel when they don’t listen.</li>
<li>Tell them specifically what they’re doing that makes it hard to talk to them.</li>
<li>Remember that most people don’t know much about war and the military.</li>
<li>Walk away.</li>
</ul><p> </p>
<p><strong>4.3 Dealing with Problem Behaviors From Others</strong></p>
<p>Unfortunately, some people in your social network back home may be negative, critical, or more unhelpful than supportive.  These people exhibit “problem behavior” such as:</p>
<ul ><li>Blaming you or telling you it’s your fault</li>
<li>Criticizing you for what happened</li>
<li>Making fun of your reactions</li>
<li>Refusing to listen to feedback about how their behavior affects you</li>
</ul><p> </p>
<p>Warning signs you may be with someone with problem behaviors that could be a problem for you:</p>
<ul ><li>You feel irritable after spending time with this person</li>
<li>You feel pressured by this person to use illegal substances or drink excessively</li>
<li>You notice the person keeps changing the subject or ignoring what’s important</li>
</ul><p> </p>
<p>Learn how to handle people who antagonize you by:</p>
<ul ><li>Reducing the time you spend socializing with them</li>
<li>Bring a supportive person with you when you spend time around them</li>
<li>Avoid discussions that involve upsetting or other private issues</li>
<li>Remember that taking care of yourself is your top priority</li>
<li>Set limits: ask them to stop if they are being rude, prying, or critical</li>
</ul>
`;

const book = makeBook(
  1,
  'Families and Friendships',
  'When you experience deployment and other challenges in life as a service member or veteran that affect your psychological health, they can affect your relationships with family and friends too.  In this chapter, we’ll look at different ways to help you reconnect with your loved ones.'
);
const page1 = makePage(1,'1.0 - Returning Home After a Deployment',familyPage1Content);
const page2 = makePage(2,'2.0 - Improving Your Relationships',familyPage2Content);
const page3 = makePage(3,'3.0 - Talking to Others About Deployment Experiences',familyPage3Content);
const page4 = makePage(4,'4.0 - Managing Relationship Problems',familyPage4Conent);

book.pages.push(page1);
book.pages.push(page2);
book.pages.push(page3);
book.pages.push(page4);

export default book;


