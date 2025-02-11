// lose scenario
const loseStep = {
    id: 999,
    text: "You’re late and Grey fails you. You lose!!!<br><br>",
    autoNext: "end" // triggers the end screen
  };
  
// story steps
  const storySteps = [
    {
      id: 0,
      text: `
        <strong>In another universe, far far away...<br>
        </strong>
      `,
      autoNext: 1
    },
    {
      id: 1,
      text: `
        It’s 9:00am.
      `,
      autoNext: 2
    },
    {
      id: 2,
      text: `
        It's 10:00am.
      `,
      autoNext: 3
    },
    {
      id: 3,
      text: `
        It’s 11:00am.
      `,
      autoNext: 4
    },
    {
      id: 4,
      text: `
        It’s 11:30am. ring!!! ring!! ring!!
      `,
      choices: [
        { label: "turn it off", scoreChange: 0, nextId: 5 },
      ]
    },
    {
      id: 5,
      text: `
        It’s 11:45am.
      `,
      autoNext: 6
    },
    {
      id: 6,
      text: `
        It’s 12:00pm.
      `,
      autoNext: 7
    },
    {
      id: 7,
      text: `
        You’re late to class!<br>
      `,
      choices: [
        { label: "check the time", scoreChange: 0, nextId: 8 },
      ]
    },
    {
      id: 8,
      text: `
        It’s 12:05pm. Art of the Web class starts at 12pm.<br>
        If you are past 30 minutes late, you fail the course.
      `,
      choices: [
        { label: "get ready!!", scoreChange: 0, nextId: 9 },
      ]
    },
    {
      id: 9,
      text: `
        It’s 12:15pm. You’re running out the door.<br>
        Turn off the lamp?
      `,
      choices: [
        // Yes => save energy (scoreChange=0) => next=3
        { label: "Yes (+1 minute)", scoreChange: 0, minuteChange: 1, nextId: 10 },
        // No => waste energy (scoreChange=1) => next=4
        { label: "No (0 minutes)", scoreChange: 1, minuteChange: 0, nextId: 11 }
      ]
    },
    {
      id: 10,
      text: "It’s {time} pm now.",
      autoNext: 12
    },
    {
      id: 11,
      text: "It’s still {time} pm.",
      autoNext: 12
    },
    {
      id: 12,
      text: `
        Turn off the bedroom light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, minuteChange: 1, nextId: 13 },
        { label: "No (0 minutes)", scoreChange: 1, minuteChange: 0, nextId: 14 }
      ]
    },
    {
      id: 13,
      text: "It’s {time} pm now.",
      autoNext: 15
    },
    {
      id: 14,
      text: "It’s still {time} pm.",
      autoNext: 15
    },
    {
      id: 15,
      text: `
        Turn off the bathroom light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, minuteChange: 1, nextId: 16 },
        { label: "No (0 minutes)", scoreChange: 1, minuteChange: 0, nextId: 17 }
      ]
    },
    {
      id: 16,
      text: "It’s {time} pm now.",
      autoNext: 18
    },
    {
      id: 17,
      text: "It’s still {time} pm.",
      autoNext: 18
    },
    {
      id: 18,
      text: `
        Turn off the living room light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, minuteChange: 1, nextId: 19 },
        { label: "No (0 minutes)", scoreChange: 1, minuteChange: 0, nextId: 20 }
      ]
    },
    {
      id: 19,
      text: "It’s {time} pm now.",
      autoNext: 21
    },
    {
      id: 20,
      text: "It’s still {time} pm.",
      autoNext: 21
    },
    {
      id: 21,
      text: `
        Turn off the kitchen room light?
      `,
      choices: [
        { label: "Yes (+1 minute)", scoreChange: 0, minuteChange: 1, nextId: 22 },
        { label: "No (0 minute)", scoreChange: 1, minuteChange: 0, nextId: 23 }
      ]
    },
    {
      id: 22,
      text: "It’s {time} pm now.",
      autoNext: 24
    },
    {
      id: 23,
      text: "It’s still {time} pm.",
      autoNext: 24
    },
    {
      id: 24,
      text: `
        You head on your way to class in a rush.
      `,
      autoNext: 25
    },
    {
      id: 25,
      text: `
        How will you get to class?<br>
      `,
      choices: [
        // walk => user is late => immediate lose
        { label: "Walk (20 mins)", scoreChange: 0, nextId: 999 },
        // run => on time
        { label: "Run (10 mins)", scoreChange: 0, nextId: 26 },
        // bus => on time (adds to score, uses more energy)
        { label: "Bus (7 mins)", scoreChange: 1, nextId: 27 },
        // uber => on time (adds more to score)
        { label: "Uber (2 mins)", scoreChange: 2, nextId: 28 },
      ]
    },
    // The lose step (id=999) is appended after the array (see loseStep).
    {
      id: 26,
      text: `
        You make it to class barely on time. 
        You need a second to catch your breath because you're dying. 
        Grey is looking at you weirdly.
      `,
      autoNext: 29
    },
    {
      id: 27,
      text: `
        You make it to class stressed but on time.
      `,
      autoNext: 29
    },
    {
      id: 28,
      text: `
        You leisurely make your way into class. Too easy.
      `,
      autoNext: 29
    },
    {
      id: 29,
      text: `
        You open your computer.<br>
      `,
      choices: [
        { label: "check email", scoreChange: 0, nextId: 30 },
      ]
    },
    {
      id: 30,
      text: `
        You have to respond to 10 different emails.<br>
        You're feeling tired and don't want to draft them manually. Use ChatGPT?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 800 }, // uses more energy
        { label: "No", scoreChange: 0, nextId: 801 }
      ]
    },
    {
      id: 800,
      text: `
        nice, all the emails are done. you're feeling pretty good about yourself.
      `,
      autoNext: 31
    },
    {
      id: 801,
      text: `
       oh man, typing emails is hard. how do u even spell sincerly anyway? 
       you give up on the emails.
      `,
      autoNext: 31
    },
    {
      id: 31,
      text: `
        Your phone is 78%. Charge it?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 32 }, 
        { label: "No", scoreChange: 0, nextId: 32 }
      ]
    },
    {
      id: 32,
      text: `
        Your iPad is 62%. Charge it?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 33 },
        { label: "No", scoreChange: 0, nextId: 33 }
      ]
    },
    {
      id: 33,
      text: `
        Your AirPods are 53%. Charge them?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 34 },
        { label: "No", scoreChange: 0, nextId: 34 }
      ]
    },
    {
      id: 34,
      text: `
        Your computer is 86%. Charge it?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 803 },
        { label: "No", scoreChange: 0, nextId: 803 }
      ]
    },
    {
      id: 803,
      text: `
        Okay, time to lock into class. You're listening intently. Some time passes.
      `,
      autoNext: 35
    },
    {
      id: 35,
      text: `
        Your phone is 100% now. Unplug it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 36 }, 
        { label: "No", scoreChange: 1, nextId: 37 }
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
        Your AirPods are 100% now. Unplug them?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 38 },
        { label: "No", scoreChange: 1, nextId: 39 }
      ]
    },
    {
      id: 38,
      text: `
        Hey, pay attention to class.
      `,
      autoNext: 39
    },
    {
      id: 39,
      text: `
        Your computer is 100% now. Unplug it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 40 },
        { label: "No", scoreChange: 1, nextId: 41 }
      ]
    },
    {
      id: 40,
      text: `
        Grey is judging you for fiddling with all those wires. 
        You don't want to fail this class, do you?
      `,
      autoNext: 41
    },
    {
      id: 41,
      text: `
        Your iPad is 100% now. Unplug it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 42 },
        { label: "No", scoreChange: 1, nextId: 43 }
      ]
    },
    {
      id: 42,
      text: `
        PAY ATTENTION!!!
      `,
      autoNext: 43
    },
    {
      id: 43,
      text: `
        It's 1:00pm.
      `,
      autoNext: 44
    },
    {
      id: 44,
      text: `
        It's 2:00pm.
      `,
      autoNext: 45
    },
    {
      id: 45,
      text: `
        It's 3:00pm.
      `,
      autoNext: 46
    },
    {
      id: 46,
      text: `
        Class is let out! You are overly dependent on coffee. 
        You must get your daily coffee.
      `,
      choices: [
        { label: "Get Coffee", scoreChange: 0, nextId: 47 },
        { label: "Don’t Get Coffee", scoreChange: 0, nextId: 48 }
      ]
    },
    {
      id: 47,
      text: "you proceed to get coffee.",
      autoNext: 49
    },
    {
      id: 48,
      text: "lol no, you don’t have a choice. you must get your coffee.",
      autoNext: 49
    },
    {
      id: 49,
      text: `
        Where to?
      `,
      choices: [
        { label: "Starbucks", scoreChange: 0, nextId: 50 },
        { label: "Saxby's", scoreChange: 0, nextId: 50 },
        { label: "Dunkin", scoreChange: 0, nextId: 50 }
      ]
    },
    {
      id: 50,
      text: `
        What do you want to order?<br>
      `,
      choices: [
        { label: "iced vanilla latte", scoreChange: 0, nextId: 51 },
        { label: "hot white chocolate mocha", scoreChange: 0, nextId: 51 },
        { label: "oatmilk matcha latte", scoreChange: 0, nextId: 51 },
        {label: "pure black coffee (heinous)", scoreChange: 0, nextId: 51 }
      ]
    },
    {
      id: 51,
      text: `
        hmmm, interesting choice.<br>
        wow, those tumblrs they're selling are pretty cute. 
        The barista says they can make your drink in the tumblr for you. Buy it?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 52 },
        { label: "No", scoreChange: 1, nextId: 53 }
      ]
    },
    {
      id: 52,
      text: `
        You buy it. The barista is making your drink in the tumblr. 
        Nice. You're also $20 more broke.<br>
      `,
      choices: [
        { label: "pick up your coffee", scoreChange: 0, nextId: 54 }
      ]
    },
    {
      id: 53,
      text: `
        Nah, it was kind of ugly anyway.<br>
      `,
      choices: [
        { label: "pick up your coffee", scoreChange: 0, nextId: 54 }
      ]
    },
    {
      id: 54,
      text: `
        You head down Locust to study at Van Pelt.
      `,
      autoNext: 55
    },
    {
      id: 55,
      text: `
        Which GSR looks the most inviting?<br>
        [G101.1] [G101.3] [G101.8] [G101.10]
      `,
      choices: [
        { label: "G101.1", scoreChange: 0, nextId: 56 },
        { label: "G101.3", scoreChange: 0, nextId: 56},
        { label: "G101.8", scoreChange: 0, nextId: 56 },
        { label: "G101.10", scoreChange: 0, nextId: 56}
      ]
    },
    {
      id: 56,
      text: `
        Nice choice. You put your stuff down and get ready to study.
      `,
      choices: [
        { label: "lock in", scoreChange: 0, nextId: 57 },
        { label: "watch youtube", scoreChange: 1, nextId: 57}
      ]
    },
    {
      id: 57,
      text: `
        It’s 3:30pm.
      `,
      autoNext: 58
    },
    {
      id: 58,
      text: `
        It’s 3:45pm.
      `,
      autoNext: 59
    },
    {
      id: 59,
      text: `
        It’s 4:00 pm.
      `,
      autoNext: 60
    },
    {
      id: 60,
      text: `
        (If you didn't buy the tumblr, you have a disposable cup.)<br>
        Hey look, you finished your coffee. Throw it away?
      `,
      choices: [
        { label: "Yes (trash)", scoreChange: 0, nextId: 61 },
        { label: "No (leave it?)", scoreChange: 1, nextId: 61 }
      ]
    },
    {
      id: 61,
      text: `
        Okay, time to actually lock in now.<br>
        [lock in]
      `,
      choices: [
        { label: "lock in", scoreChange: 0, nextId: 62 },
      ]
    },
    {
      id: 62,
      text: `
        It’s 4:30pm.
      `,
      autoNext: 63
    },
    {
      id: 63,
      text: `
        It’s 5:00pm.
      `,
      autoNext: 64
    },
    {
      id: 64,
      text: `
        It’s 6:00pm.
      `,
      autoNext: 65
    },
    {
      id: 65,
      text: `
        Ahh, you’re tired of studying. 
        It’s time to head out; no one else is in the library anymore.
      `,
      choices: [
        { label: "leave library", scoreChange: 0, nextId: 66 },
      ]
    },
    {
      id: 66,
      text: `
        Turn off the GSR lights before you leave?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 67 },
        { label: "No", scoreChange: 1, nextId: 69 },
      ]
    },
    {
      id: 67,
      text: `
        Hey, be honest. When have you ever turned off GSR lights after you left?
      `,
      autoNext: 68,
    },
    {
      id: 68,
      text: `
        Turn off the GSR lights before you leave?
      `,
      choices: [
        { label: "Yes", scoreChange: 0, nextId: 69 },
        { label: "No", scoreChange: 1, nextId: 69 },
      ]
    },
    {
      id: 69,
      text: `
        You’re starving because you’re a big back. Where to go for dinner?
      `,
      choices: [
        { label: "Commons", scoreChange: 0, nextId: 70 },
        { label: "Hill", scoreChange: 0, nextId: 70 },
        { label: "Mclelland", scoreChange: 0, nextId: 70 },
        { label: "Lauder", scoreChange: 0, nextId: 70 },
        { label: "Quaker Kitchen", scoreChange: 0, nextId: 70 },
        { label: "Hillel", scoreChange: 0, nextId: 70 },
      ]
    },
    {
      id: 70,
      text: `
        It’s 6:30pm.
      `,
      autoNext: 71
    },
    {
      id: 71,
      text: `
        It’s 7:00pm.
      `,
      autoNext: 72
    },
    {
      id: 72,
      text: `
        It’s 7:30pm.
      `,
      autoNext: 73
    },
    {
      id: 73,
      text: `
        It’s 8:00pm.
      `,
      autoNext: 74
    },
    {
      id: 74,
      text: `
        Wow, you ate for 1.5 hours. The dining hall workers are concerned for you. 
        But nevertheless, that was a good meal.
      `,
      autoNext: 75
    },
    {
      id: 75,
      text: `
        It seems like you’ve accumulated a lot of trash. Water bottles, etc."
      `,
      autoNext: 76
    },
    {
      id: 76,
      text: `
        You have a water bottle with the cap screwed on it. Where will you put it?
      `,
      choices: [
        // Soiled paper can't go in typical recycling => "Trash" is correct => 0
        { label: "Trash", scoreChange: 1, nextId: 77 },
        // If user tries to recycle => +1 (wrong)
        { label: "Recycle", scoreChange: 0, nextId: 77 }
      ]
    },
    {
      id: 77,
      text: `
        You have a paper plate with some food on it. Where will you put it?
      `,
      choices: [
        // Soiled paper can't go in typical recycling => "Trash" is correct => 0
        { label: "Trash", scoreChange: 0, nextId: 79 },
        // If user tries to recycle => +1 (wrong)
        { label: "Recycle", scoreChange: 1, nextId: 79 }
      ]
    },
    {
      id: 79,
      text: `
        You get ready to head home after a long day of hard work.
      `,
      choices: [
        { label: "Walk (20 mins)", scoreChange: 0, nextId: 80 },
        { label: "Run (10 mins)", scoreChange: 0, nextId: 80 },
        { label: "Bus (7 mins)", scoreChange: 1, nextId: 80 },
        { label: "Uber (2 mins)", scoreChange: 2, nextId: 80 },
      ]
    },
    {
      id: 80,
      text: `
        You get back home. Home sweet home!
      `,
      autoNext: 81
    },
    {
      id: 81,
      text: `
        The living room light is still on. 
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 82 },
        { label: "Turn off", scoreChange: 0, nextId: 82 },
      ]
    },
    {
      id: 82,
      text: `
        The kitchen light is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 83 },
        { label: "Turn off", scoreChange: 0, nextId: 83 },
      ]
    },
    {
      id: 83,
      text: `
        The bathroom light is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 84 },
        { label: "Turn off", scoreChange: 0, nextId: 84 },
      ]
    },
    {
      id: 84,
      text: `
        The bedroom light is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 85 },
        { label: "Turn off", scoreChange: 0, nextId: 85 },
      ]
    },
    {
      id: 85,
      text: `
        The lamp is still on.
        Leave it on or turn off?
      `,
      choices: [
        { label: "Leave it on", scoreChange: 1, nextId: 86 },
        { label: "Turn off", scoreChange: 0, nextId: 86 },
      ]
    },
    {
      id: 86,
      text: `
        Okay, it’s about time to sleep. You get ready for bed.<br>
        Charge your phone for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 87 },
        { label: "No", scoreChange: 0, nextId: 87 }
      ]
    },
    {
      id: 87,
      text: `
        Charge your computer for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 88 },
        { label: "No", scoreChange: 0, nextId: 88 }
      ]
    },
    {
      id: 88,
      text: `
        Charge your iPad for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 89 },
        { label: "No", scoreChange: 0, nextId: 89 }
      ]
    },
    {
      id: 89,
      text: `
        Charge your AirPods for tomorrow?
      `,
      choices: [
        { label: "Yes", scoreChange: 1, nextId: 90 },
        { label: "No", scoreChange: 0, nextId: 90 }
      ]
    },
    {
      id: 92,
      text: `
        You finally get into bed.
      `,
      choices: [
        { label: "Watch Tiktok", scoreChange: 1, nextId: 93 },
        { label: "Close eyes", scoreChange: 0, nextId: 93 }
      ]
    },
    {
      id: 93,
      text: `
        Goodnight.
      `,
      autoNext: "end"
    }
  ];

  // Add the loseStep at the end
storySteps.push(loseStep);
