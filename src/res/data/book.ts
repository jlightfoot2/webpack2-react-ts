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
<ul style="margin-left: 240px;"><li>I’m less interested in activities I used to enjoy</li>
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
<ul style="margin-left: 40px;"><li>Go to a sporting event, concert or a movie together</li>
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
<ul style="margin-left: 40px;"><li>Your partner bringing you a snack while you watch T.V.</li>
<li>Your daughter drawing you a picture.</li>
<li>Your mom offering to watch the kids so you can spend some “alone” time with your partner.</li>
<li>Your son cleaning up his room without being told.</li>
</ul><p> </p>
<p>Noticing the small positives in life helps you feel better and your loved ones feel appreciated.  It’s also good to tell people you appreciate their behavior: "Thanks, I really appreciate how much you've helped me with this chore."</p>
<p> </p>
<p><strong>1.4 Talking About Deployment</strong></p>
<p>Some service members just want to put their deployment experiences behind them.  But talking about those experiences with your family helps everyone.  Keep in mind that talking about your experiences doesn’t mean you have to tell people everything.  Here are suggestions for talking about your deployment without going into too much detail:</p>
<ul style="margin-left: 40px;"><li>“I saw and did some really intense things that are hard for me to talk about.  Thanks for your patience.”</li>
<li>“Sometimes my memories make me space out and I have a hard time concentrating.</li>
<li>"I need you to just listen sometimes, and not interrupt me.”</li>
<li>“I might need a few minutes to calm down—thanks for giving me some space.”</li>
</ul><p> </p>
<p>Your family may need support because they may be worried or upset about what happened to you.</p>
<ul style="margin-left: 40px;"><li>Telling them what deployment was like for you.</li>
<li>Telling them which deployment memories affect you now.</li>
<li>Explaining that reminders of your deployment may make you distracted or tense.</li>
<li>Reminding them how much you care about them.</li>
<li>Enjoying fun activities together.</li>
<li>Listening to them with an open mind, even when you have a different opinion.</li>
<li>Acknowledging their feelings, “I know that this is hard for you too.”</li>
</ul><p> </p>
<p><strong>1.5 Handling Conflict</strong></p>
<p>Arguments can make it hard to talk to your partner about deployments.  It’s important to discuss problems in a way that builds up the relationship instead of tearing it down.  Here are some ideas for handling conflicts with a family member:</p>
<ul style="margin-left: 40px;"><li><strong>Plan ahead. </strong> Schedule time to discuss the problem.  This gives both of you time to think about what to say.  Find a time when you can talk without distractions.</li>
<li><strong>Identify your goal.  </strong>If your goal is to "win" the argument, your relationship will suffer.  Seek an outcome that will satisfy you both.  This usually requires compromises from both partners.</li>
<li><strong>"I" Statements.  </strong>When you bring up an issue, don’t blame the other person.  Blame makes people defensive.  Instead, use “I” statements, telling the other person how you feel.</li>
</ul><p style="margin-left: 120px;">Instead of saying, "you never listen to me," say, "I feel frustrated when you read the newspaper while I’m talking."</p>
<p style="margin-left: 120px;">Instead of saying "That's ridiculous!" say, "I don't understand what you mean. Can you explain it again?"</p>
<ul style="margin-left: 40px;"><li><strong>Stick to one topic.  </strong>Bring up a specific issue that happened.  Tell the other person exactly what happened and why it bothered you.  Focus on resolving the issue, instead of bringing up other things.  Avoid saying "always” or “never”.</li>
</ul><p style="margin-left: 120px;">Instead of saying "You always nag me!" say, "Sometimes I need a few minutes to unwind after work."</p>
<ul style="margin-left: 40px;"><li><strong>Stay calm: </strong>When you get upset, you're less likely to think clearly, and you're more likely to say things that don't help the situation.  Stay calm, and you'll be better able to solve the problem.</li>
</ul><p style="margin-left: 120px;">To stay calm, take breaks during the discussion.  Practice relaxing by counting to 10, breathing slowly, or taking a brief walk to relieve tension.</p>
<p style="margin-left: 120px;">Be sure to tell your partner if you need a short break from the conversation so it doesn't seem like you're walking away.</p>
<ul style="margin-left: 40px;"><li><strong>No "below the belt"</strong> <strong>shots</strong>.  Shouting, name-calling, foul language, threats, and sarcasm usually make arguments worse and make it harder to find common ground.</li>
</ul><p> </p>
<p><strong>1.6 Approaches That Do “More Harm Than Good”</strong></p>
<p>Avoid <strong>criticizing</strong> and <strong>lashing out</strong> in anger during arguments.  Trying to control a conversation by demanding that others respond in a certain way won’t get you good results.  Finally, don’t expect others to solve problems for you<strong>.</strong>  You need to help find the solution.</p>
<p> </p>
<p><strong>1.7 Your Communication Plan</strong></p>
<ul style="margin-left: 40px;"><li>Develop a "Communication Plan" to talk about deployment with your family. </li>
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
<ol style="margin-left: 40px;"><li>Overcome isolation</li>
<li>Strengthen your network of relationships</li>
<li>Share your deployment experiences</li>
<li>Manage problem situations</li>
</ol><p> </p>
<p><strong>2.1 Overcoming Isolation</strong></p>
<p>After an intense experience like deployment, you may feel awkward and lonely around others.  You might keep to yourself because it allows you to avoid situations that bring up painful feelings or memories.  But if you cut yourself off from your friends, you won’t get the support you need and deserve.  Avoiding people can actually increase those upsetting thoughts and feelings.</p>
<p> </p>
<p><strong>2.2 Tips For Beating Isolation</strong></p>
<p>You may have to push yourself to spend time with others. Remember that being around others is important for your well-being.</p>
<ul style="margin-left: 40px;"><li>Be intentional.  Plan to socialize with others.  Stick to your plan even when you’d rather be alone.</li>
<li>Spend time with people you trust, in places where you are comfortable.</li>
<li>Start with short outings, staying a little longer each time.</li>
</ul><p> </p>
<p><strong>2.3 Strengthening Your Network</strong></p>
<p>Returning service members often think they have little in common with their family and friends back home.  After such an intense, life-changing experience, you may think no one understands you.  But connecting with others helps you:</p>
<ul style="margin-left: 40px;"><li>Improve your mood</li>
<li>Decrease your boredom</li>
<li>Deal with painful thoughts and feelings about your deployment</li>
<li>Find solutions to your problems</li>
<li>Avoid harmful coping methods (like heavy drinking)</li>
<li>REALIZE you are not alone<br type="_moz" /><br /> </li>
</ul><p>It's important to strengthen your social network in the months following a deployment.  Some people like having a large and mixed social network.  Others prefer a smaller circle of friends.  Either way, it helps to have people you can count on when you need them.  Your social network includes:</p>
<ul style="margin-left: 40px;"><li>Family members and friends</li>
<li>Neighbors</li>
<li>Co-workers</li>
<li>Community members such as members of church or sports league</li>
<li>Professionals such as counselors, therapists and doctors</li>
</ul><p> </p>
<p><strong>2.4 Expanding Your Network</strong></p>
<p>Being with others gives you a sense of belonging and security, lifts your spirits, and eases your worries.  Don’t forget, you may be a source of comfort and friendship for others, too! </p>
<p>Here are some things you can do to be part of your community and increase your social support network:</p>
<ul style="margin-left: 40px;"><li>Get some exercise.  Join a pick-up game.  Take and exercise class at a local gym or community center. Sports leagues and hiking groups are great ways to meet people while staying fit.  You could also try a new sport of physical activity.</li>
<li>Get a hobby.  Find local people who share your interest in music, motorcycles, professional sports, cooking, and books</li>
<li>Join a place of worship.  Joining a church, synagogue, mosque or temple can give you spiritual directions and help you become part of the community</li>
<li>Join a professional group or neighborhood organization.  Get involved in a Neighborhood Watch group, or a group based on professional interests</li>
<li>Volunteer.  Get involved in community service projects—clean up a local park or volunteer at a hospital</li>
<li>Join a veteran's organization.  Groups such as the VA, the American Legion, and Veterans of Foreign Wars (VFW) are safe places to talk and fit in.  You’re probably eligible to join these groups, even if you’re currently active duty</li>
<li>Join a cause.  Work with others toward a goal you believe in, such as an election or the protection of a natural area</li>
</ul>
`;

const book = makeBook(
  1,
  'Families and Friendships',
  'When you experience deployment and other challenges in life as a service member or veteran that affect your psychological health, they can affect your relationships with family and friends too.  In this chapter, we’ll look at different ways to help you reconnect with your loved ones.'
);
const page1 = makePage(1,'Returning Home After a Deployment',familyPage1Content);
const page2 = makePage(2,'Improving Your Relationships',familyPage2Content);
book.pages.push(page1);
book.pages.push(page2);

export default book;


