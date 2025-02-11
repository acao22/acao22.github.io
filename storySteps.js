// lose scenario
const loseStep = {
    id: 999,
    text: "You’re late and Grey fails you. You lose!!!<br><br>",
    autoNext: "end"
  };
  
// story steps
  const storySteps = [
    {
      id: 0,
      text: `
        <strong>In another universe, far far away,<br>
        the land of University of Pennsylvania…</strong><br><br>
        Just a clock blinking:<br>
        It’s 9am.<br>
        It’s 10am.<br>
        It’s 11am.<br>
        It’s 11:30am. ring!!! ring!! ring!! [turn it off]<br>
        It’s 11:45am.<br>
        It’s 12:00pm.
      `,
      autoNext: 1
    },
    {
      id: 1,
      text: `
        You’re late to class!<br>
        [check the time]<br>
        It’s 12:05pm. Art of the Web class starts at 12pm.<br>
        If you are past 30 minutes late, you fail the course.
      `,
      autoNext: 2
    },
    {
      id: 2,
      text: `
        [get ready!]<br>
        It’s 12:15pm. You’re running out the door.<br>
        Turn off the lamp?
      `,
      choices: [
        // Yes => save energy (scoreChange=0) => next=3
        { label: "Yes (+1 minute)", scoreChange: 0, nextId: 3 },
        // No => waste energy (scoreChange=1) => next=4
        { label: "No (0 minute)", scoreChange: 1, nextId: 4 }
      ]
    },
    {
      id: 3,
      text: "It’s 12:16 pm now.",
      autoNext: 5
    },
    {
      id: 4,
      text: "It’s still 12:15 pm.",
      autoNext: 5
    },
    {
      id: 5,
      text: `
        Turn off the bedroom light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, nextId: 6 },
        { label: "No (0 minute)", scoreChange: 1, nextId: 7 }
      ]
    },
    {
      id: 6,
      text: "It’s 12:17 pm now.",
      autoNext: 8
    },
    {
      id: 7,
      text: "It’s still 12:15 pm.",
      autoNext: 8
    },
    {
      id: 8,
      text: `
        Turn off the bathroom light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, nextId: 9 },
        { label: "No (0 minute)", scoreChange: 1, nextId: 10 }
      ]
    },
    {
      id: 9,
      text: "It’s 12:18 pm now.",
      autoNext: 11
    },
    {
      id: 10,
      text: "It’s still 12:15 pm.",
      autoNext: 11
    },
    {
      id: 11,
      text: `
        Turn off the living room light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, nextId: 12 },
        { label: "No (0 minute)", scoreChange: 1, nextId: 13 }
      ]
    },
    {
      id: 12,
      text: "It’s 12:19 pm now.",
      autoNext: 14
    },
    {
      id: 13,
      text: "It’s still 12:15 pm.",
      autoNext: 14
    },
    {
      id: 14,
      text: `
        Turn off the kitchen room light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, nextId: 15 },
        { label: "No (0 minute)", scoreChange: 1, nextId: 16 }
      ]
    },
    {
      id: 15,
      text: "It’s 12:20 pm now.",
      autoNext: 17
    },
    {
      id: 16,
      text: "It’s still 12:15 pm.",
      autoNext: 17
    },
    {
      id: 17,
      text: `
        You head on your way to class in a rush.
      `,
      autoNext: 18
    },
    {
      id: 18,
      text: `
        How will you get to class?<br>
        [walk: 20 min] [run: 10 min] [bus: 7 min] [uber: 2 min]
      `,
      choices: [
        // walk => user is late => immediate lose
        { label: "Walk (20 mins)", scoreChange: 0, nextId: 999 },
        // run => on time
        { label: "Run (10 mins)", scoreChange: 0, nextId: 20 },
        // bus => on time (adds to score, uses more energy)
        { label: "Bus (7 mins)", scoreChange: 1, nextId: 21 },
        // uber => on time (adds more to score)
        { label: "Uber (2 mins)", scoreChange: 2, nextId: 22 },
      ]
    },
    // The lose step (id=999) is appended after the array (see loseStep).
    {
      id: 20,
      text: `
        You make it to class barely on time. 
        You need a second to catch your breath because you're dying. 
        Grey is looking at you weirdly.
      `,
      autoNext: 23
    },
    {
      id: 21,
      text: `
        You make it to class stressed but on time.
      `,
      autoNext: 23
    },
    {
      id: 22,
      text: `
        You leisurely make your way into class. Too easy.
      `,
      autoNext: 23
    },
    {
      id: 23,
      text: `
        You open your computer.<br>
        [check email]
      `,
      autoNext: 24
    },
    {
      id: 24,
      text: `
        You have to respond to 10 different emails.<br>
        You're feeling tired and don't want to draft them manually. Use ChatGPT?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 25 }, // uses more energy
        { label: "No", scoreChange: 0, nextId: 25 }
      ]
    },
    {
      id: 25,
      text: `
        Your phone is 78%. Charge it?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 26 }, 
        { label: "No", scoreChange: 0, nextId: 26 }
      ]
    },
    {
      id: 26,
      text: `
        Your iPad is 62%. Charge it?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 27 },
        { label: "No", scoreChange: 0, nextId: 27 }
      ]
    },
    {
      id: 27,
      text: `
        Your AirPods are 53%. Charge them?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 28 },
        { label: "No", scoreChange: 0, nextId: 28 }
      ]
    },
    {
      id: 28,
      text: `
        Your computer is 86%. Charge it?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 29 },
        { label: "No", scoreChange: 0, nextId: 29 }
      ]
    },
    {
      id: 29,
      text: `
        Your phone is 100% now. Unplug it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 30 }, 
        { label: "No", scoreChange: 1, nextId: 30 }
      ]
    },
    {
      id: 30,
      text: `
        You should probably pay attention to class.
      `,
      autoNext: 31
    },
    {
      id: 31,
      text: `
        Your AirPods are 100% now. Unplug them?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 32 },
        { label: "No", scoreChange: 1, nextId: 32 }
      ]
    },
    {
      id: 32,
      text: `
        You should probably pay attention to class.
      `,
      autoNext: 33
    },
    {
      id: 33,
      text: `
        Your computer is 100% now. Unplug it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 34 },
        { label: "No", scoreChange: 1, nextId: 34 }
      ]
    },
    {
      id: 34,
      text: `
        You should probably pay attention to class.
      `,
      autoNext: 35
    },
    {
      id: 35,
      text: `
        Your iPad is 100% now. Unplug it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 36 },
        { label: "No", scoreChange: 1, nextId: 36 }
      ]
    },
    {
      id: 36,
      text: `
        You should probably pay attention to class.
      `,
      autoNext: 37
    },
    {
      id: 37,
      text: `
        It's 1:00pm.<br>
        It's 2:00pm.<br>
        It's 3:00pm.
      `,
      autoNext: 38
    },
    {
      id: 38,
      text: `
        Class is let out! You are overly dependent on coffee. 
        You must get your daily coffee.
      `,
      autoNext: 39
    },
    {
      id: 39,
      text: `
        [get coffee] [don’t get coffee]<br>
        (But you don’t really have a choice…)
      `,
      choices: [
        { label: "Get Coffee", scoreChange: 0, nextId: 40 },
        { label: "Don’t Get Coffee", scoreChange: 0, nextId: 41 }
      ]
    },
    {
      id: 40,
      text: "You proceed to get coffee.",
      autoNext: 42
    },
    {
      id: 41,
      text: "No, you don’t have a choice. You must get coffee anyway.",
      autoNext: 42
    },
    {
      id: 42,
      text: `
        Where to? [starbucks] [saxby’s] [dunkin]
      `,
      autoNext: 43
    },
    {
      id: 43,
      text: `
        What do you want to order?<br>
        [iced vanilla latte] [hot white chocolate mocha] [oatmilk matcha latte] [pure black coffee (heinous)]
      `,
      autoNext: 44
    },
    {
      id: 44,
      text: `
        Wow, those tumblrs they're selling are pretty cute. 
        The barista says they can make your drink in the tumblr for you. Buy it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 45 },
        { label: "No", scoreChange: 0, nextId: 46 }
      ]
    },
    {
      id: 45,
      text: `
        You buy it. The barista is making your drink in the tumblr. 
        Nice. You're also $20 more broke.<br>
        [pick up your coffee]
      `,
      autoNext: 47
    },
    {
      id: 46,
      text: `
        Nah, it was kind of ugly anyway.<br>
        [pick up your coffee]
      `,
      autoNext: 47
    },
    {
      id: 47,
      text: `
        You head down Locust to study at Van Pelt.
      `,
      autoNext: 48
    },
    {
      id: 48,
      text: `
        Which GSR looks the most inviting?<br>
        [G101.1] [G101.3] [G101.8] [G101.10]
      `,
      autoNext: 49
    },
    {
      id: 49,
      text: `
        Nice choice. You put your stuff down and get ready to study.
      `,
      autoNext: 50
    },
    {
      id: 50,
      text: `
        [lock in] [watch youtube]
      `,
      autoNext: 51
    },
    {
      id: 51,
      text: `
        It’s 3:30pm.<br>
        It’s 3:45pm.<br>
        It’s 4:00 pm.
      `,
      autoNext: 52
    },
    {
      id: 52,
      text: `
        (If you didn't buy the tumblr, you have a disposable cup.)<br>
        Hey look, you finished your coffee. Throw it away?
      `,
      choices: [
        { label: "Yes (trash)", scoreChange: 0, nextId: 53 },
        { label: "No (leave it?)", scoreChange: 1, nextId: 53 }
      ]
    },
    {
      id: 53,
      text: `
        Okay, time to actually lock in now.<br>
        [lock in]
      `,
      autoNext: 54
    },
    {
      id: 54,
      text: `
        It’s 4:30pm.<br>
        It’s 5:00pm.<br>
        It’s 6:00pm.
      `,
      autoNext: 55
    },
    {
      id: 55,
      text: `
        Ahh, you’re tired of studying. 
        It’s time to head out; no one else is in the library anymore.
      `,
      autoNext: 56
    },
    {
      id: 56,
      text: `
        [leave]
      `,
      autoNext: 57
    },
    {
      id: 57,
      text: `
        Turn off the GSR lights before you leave?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 58 },
        { label: "No", scoreChange: 1, nextId: 58 },
      ]
    },
    {
      id: 58,
      text: `
        (1) Hey, be honest. When have you ever turned off GSR lights after you left?<br><br>
        Turn off the GSR lights before you leave <em>(again?)</em>
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 59 },
        { label: "No", scoreChange: 1, nextId: 59 },
      ]
    },
    {
      id: 59,
      text: `
        You’re starving because you’re a big back. Where to go for dinner?<br>
        [commons] [hill] [mclelland] [lauder] [quaker kitchen]
      `,
      autoNext: 60
    },
    {
      id: 60,
      text: `
        It’s 6:30pm.<br>
        It’s 7:00pm.<br>
        It’s 7:30pm.<br>
        It’s 8:00pm.<br><br>
        Wow, you ate for 1.5 hours. The dining hall workers are concerned for you. 
        But nevertheless, that was a good meal.
      `,
      autoNext: 61
    },
    {
      id: 61,
      text: `
        It seems like you’ve accumulated a lot of trash. Water bottles, etc.<br><br>
        You have a water bottle with the cap screwed on it. Where will you put it?
      `,
      choices: [
        // If user puts it in trash => +1 (should've recycled)
        { label: "Trash", scoreChange: 1, nextId: 62 },
        // Recycle => good => 0
        { label: "Recycle", scoreChange: 0, nextId: 62 }
      ]
    },
    {
      id: 62,
      text: `
        You have a paper plate with some food on it. Where will you put it?
      `,
      choices: [
        // Soiled paper can't go in typical recycling => "Trash" is correct => 0
        { label: "Trash", scoreChange: 0, nextId: 63 },
        // If user tries to recycle => +1 (wrong)
        { label: "Recycle", scoreChange: 1, nextId: 63 }
      ]
    },
    {
      id: 63,
      text: `
        You get ready to head home after a long day of hard work.<br>
        [walk: 20 min] [run: 10 min] [take the bus: 7 min] [uber: 2 min]<br><br>
        (1) adds nothing<br>(2) adds nothing<br>(3) adds to the score<br>(4) adds more to the score
      `,
      choices: [
        { label: "Walk (20 mins)", scoreChange: 0, nextId: 64 },
        { label: "Run (10 mins)", scoreChange: 0, nextId: 64 },
        { label: "Bus (7 mins)", scoreChange: 1, nextId: 64 },
        { label: "Uber (2 mins)", scoreChange: 2, nextId: 64 },
      ]
    },
    {
      id: 64,
      text: `
        You get back home.<br>
        The living room light is still on. 
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 65 },
        { label: "Turn off", scoreChange: 0, nextId: 65 },
      ]
    },
    {
      id: 65,
      text: `
        The kitchen light is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 66 },
        { label: "Turn off", scoreChange: 0, nextId: 66 },
      ]
    },
    {
      id: 66,
      text: `
        The bathroom light is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 67 },
        { label: "Turn off", scoreChange: 0, nextId: 67 },
      ]
    },
    {
      id: 67,
      text: `
        The bedroom light is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 68 },
        { label: "Turn off", scoreChange: 0, nextId: 68 },
      ]
    },
    {
      id: 68,
      text: `
        The lamp is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 69 },
        { label: "Turn off", scoreChange: 0, nextId: 69 },
      ]
    },
    {
      id: 69,
      text: `
        Okay, it’s about time to sleep. You get ready for bed.<br>
        Charge your phone for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 70 },
        { label: "No", scoreChange: 0, nextId: 70 }
      ]
    },
    {
      id: 70,
      text: `
        Charge your computer for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 71 },
        { label: "No", scoreChange: 0, nextId: 71 }
      ]
    },
    {
      id: 71,
      text: `
        Charge your iPad for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 72 },
        { label: "No", scoreChange: 0, nextId: 72 }
      ]
    },
    {
      id: 72,
      text: `
        Charge your AirPods for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 73 },
        { label: "No", scoreChange: 0, nextId: 73 }
      ]
    },
    {
      id: 73,
      text: `
        You finally get into bed.<br>
        [watch tiktok before bed] [close your eyes]<br>
        (watch tiktok adds to score)
      `,
      choices: [
        { label: "Watch Tiktok", scoreChange: 1, nextId: 74 },
        { label: "Close eyes", scoreChange: 0, nextId: 74 }
      ]
    },
    {
      id: 74,
      text: `
        Goodnight.
      `,
      autoNext: "end"
    }
  ];

storySteps.push(loseStep);
