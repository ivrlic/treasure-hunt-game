
// ***************
// ***************
// RANDOM START
// ***************
// ***************

export const startLocationListEn = [
    {
        img: "",
        imgDesc: "",
        story: `<p> A friend brought you an old book. He says he found it in a secret place. </p>
                <p< You ask him what that secret place is. He said nothing, but just ran away. </p>
                <p> You look at the hard brown leather cover. Something is written on them, but in some unknown language. </p>
                <p> You open the book and flip through the pages. Lots of unknown letters and some strange pictures. You wonder why your friend gave it to you in the first place. </p>
                <p> At that moment, a piece of paper falls out of the book. Some kind of map was drawn on it. It is written there: </p>
                <p> "The treasure could be true." </p>
                <p> "Investigate the clue." </p>
                <p> "Interesting," you think. </p>
                <p class="action"> Look at the clue. </p>`,
        type: ""
    },
    {
        img: "",
        imgDesc: "",
        story: `<p> The old fisherman took you fishing. The sea is calm and crystal clear. A white wooden ship sails through the sea and reaches the open sea.  </p>
                <p> And while taking out the seventh fish in a row, the old fisherman teaches you fishing tricks.  With all your effort, seemingly all the fish are running away from your hook. You don't manage to catch any.  </p>
                <p> And after who knows how many attempts you finaly feel the weight at the end of your fishing rod. You have caught something. You start to pull. You pull and you pull. The unknown catch is getting closer and closer. At the end, you pull hard and a bottle flies into the boat. You caught the bottle! </p>
                <p> The old man just laughed. Your first fish was a glass one. </p>
                <p> You look inside the bottle. Some kind of roll of crumpled paper remained dry under the cork. You open the bottle and take the roll. While unfolding the half-torn paper a map appears in front of you - A TREASURE MAP. </p>
                <p> The old man said, "I will take you to the shore. A real adventure awaits you." </p>
                <p> In the corner of the paper you see the first clue. </p>
                <p class="action"> Look at the clue. </p>`,
        type: ""
    },
    {
        img: "",
        imgDesc: "",
        story: `<p> You are sitting on the couch. There is no one to play with you. So you are bored and figuring out what to do. After a short thought, you decide on - EXPLORATION GAME. </p>
                <p> You will explore all the rooms to see if there is anything interesting to play. So you look in one room, you look in another room, under the bed, on the shelves, on the tables... </p>
                <p> Then you open a closet, and inside is a chest. An unusual dusty wooden chest with gold engravings of various animals. In the middle of it is a small padlock in the shape of a golden horse. </p>
                <p> You feel sad that you won't be able to see what's inside. So you look a little closer - the padlock is open! </p>
                <p> You excitedly open the lid with a creaking sound and you have a lot to see: lots of black and white photos, yellowed letters, old jewelry in all colors - silver, blue, red... There are photos of grandfather and grandmother when they were young. There are other relatives too. There are also some other people you don't know. This chest looks like a real treasure trove of old family memories. </p>
                <p> You rummage through the chest a little more and find a piece of paper. Then you take it and read: </p>
                <p> "Follow the clues and discover where the treasure is." </p>
                <p> "Interesting," you think. "Well, isn't this a treasure?" </p>
                <p> You look again and the chest is gone. What kind of magic is that? Ok, let's see what the clues are. </p>
                <p class="action"> Look at the clue. </p>`,
        type: ""
    }
]





// ***************
// ***************
//  RANDOM EVENTS
// ***************
// ***************

export const eventListEn = [
    {
        num: 1,
        img: "../images/random-events/volcano.png",
        imgDesc: "A gray volcano emitting red lava and thick smoke",
        title: "Volcano Eruption",
        story: `<p> You are approaching the location. Suddenly, the earth began to shake. Slowly, then stronger and stronger. </p>
                <p class="action"> Everything is shaking. Shake yourself! </p>
                <p> And then - BOOOOM! </p>
                <p class="action"> Cover your ears. </p>
                <p> Rock fragments fall around. </p>
                <p class="action"> Cover your head and hide somewhere. </p>
                <p> Earthquake again. </p>
                <p class="action"> Shake yourself! </p>
                <p> A gust of wind blows a huge cloud of ash. </p>
                <p class="action"> Take a deep breath and hold it as long as you can. Cover your mouth and nose with a cloth. Breathe slowly. Squint so the ash doesn't get in your eyes. </p>
                <p> What is happening? </p>
                <p class="action"> Be patient and wait. </p>
                <p> After the dust has settled, you step out into the clearing and look up. A large mountain rises up in front of you. Something red and yellow pours down from the top and thick gray smoke billows into the sky. </p>
                <p> It's a volcano! And the explosion that was heard a moment ago was the eruption of a volcano. The volcano has exploded and is now spewing hot lava. Ugh, it looks really scary. </p>
                <p> Quick, you need to find a clue before the hot lava arrives. But where could it be? </p>
                <p> You see a cave. Maybe there is something in there. You climb the mountain. And enter the cave. </p>
                <p class="action"> Bend to avoid hitting your head. Walk slowly and look around carefully. </p>
                <p> You notice something carved on one wall in the corner. This could be it! </p>
                <p class="action"> Look what it says. </p>`,
        question: "What comes out of a volcano during an eruption?",
        wrongAnswers: ["Birds", "Mole", "Ants"],
        correctAnswer: "Hot lava and thick smoke",
        type: ""
    },
    {
        num: 2,
        img: "../images/random-events/brown-bear.png",
        imgDesc: "Brown bear on hind legs",
        title: "The Bear in Winter Sleep",
        story: `<p> You look at the map and it seems to you that you are arriving at the exact location. At that moment, a young brown bear appears in front of you. It opened its jaws and raised its paws high up with claws spread. </p>
                <p> Being so scared you turned white as a snow. You can't even move. </p>
                <p class="action"> Stiff your legs. Freeze yourself. Fall on your backside. </p>
                <p> You look a little closer and notice the bear didn't want to attack you. It looks confused. And tired. </p>
                <p class="action"> Approach it and ask if you can help it. </p>
                <p> The bear replies that it woke up from his winter sleep. It is hungry, but currently not able to look for food. Can you find some food for the bear? </p>
                <p> It likes to eat young grass, different plants, forest berries (strawberries, raspberries, blackberries, blueberries). It likes fruit very much. And hazelnuts and chestnuts and acorns and pomegranates. And it also likes to eat meat. </p>
                <p class="action"> Find some food for the bear. </p>
                <p> The bear thanks you and asks for another favor. Can you help it fix its den? You need to collect leaves, grass or something similar to make its den soft and warm. </p>
                <p class="action"> Find something to warm the bear up while having winter sleep. </p>
                <p> The bear thanks you again. It says you've helped it a lot. </p>
                <p> While arranging the den you notice a piece of wood with something written on it. </p>
                <p> "Next clue!", you think excitedly. </p>
                <p> "Before you go on, could you do just one more thing?" the bear asked. </p>
                <p> "Can you sing a lullaby to help me fall asleep?" </p>
                <p class="action"> Sing a song, then see what the next clue is. </p>`,
        question: "What does the bear eat?",
        wrongAnswers: ["Only plants", "Only meat", "Only honey"],
        correctAnswer: "And plants and meat and honey",
        type: ""
    },
    {
        num: 3,
        img: "../images/random-events/ryder.png",
        imgDesc: "The boy Ryder sits on a rock and pensively holds a tree in his hands",
        title: "Ryder and the Lost Puppies",
        story: `<p> A boy is sitting on a stone by the road. He looks worried. You approach him. </p>
                <p class="action"> Greet the boy and introduce yourself. </p>
                <p> "Hello!" the boy replies. "My name is Ryder. I have six good puppies and each one of them is special. Together we help everyone who is in need. Unfortunately, I lost my puppies. Can you help me find them?" </p>
                <p> "Chase is a police pup and wears a blue outfit." </p>
                <p class="action"> Find something blue and imitate the sound of a police siren. </p>
                <p> "Woof-woof!" Chase came running. </p>
                <p> "Rubble is a construction pup and wears a yellow outfit." </p>
                <p class="action"> Find something yellow and imitate the sound of an excavator. </p>
                <p> "Woof-woof!" Rubble came running. </p>
                <p> "Marshall is a fire pup and wears a red outfit." </p>
                <p class="action"> Find something red and imitate the sound of a fire siren. </p>
                <p> "Woof-woof!" Marshall came running. </p>
                <p> "Sky is a pilot pup and wears a pink outfit." </p>
                <p class="action"> Find something pink and imitate the sound of a plane or helicopter. </p>
                <p> "Woof-woof!" Sky came running. </p>
                <p> "Zuma is a water rescue pup and wears an orange outfit." </p>
                <p class="action"> Find something orange and imitate the sound of any sea vehicle. </p>
                <p> "Woof-woof!" Zuma came running. </p>
                <p> "Rocky is an Recycling pup and wears a green outfit." </p>
                <p class="action"> Find something green and imitate the sound of a truck. </p>
                <p> "Woof-woof!" Rocky came running. </p>
                <p> "All the puppies are here. Thank you!" Ryder exclaimed. </p>
                <p> "In return I am giving you a paper that will help you in your treasure hunt." </p>
                <p class="action"> Say thank you, take the paper and look at the clue. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    },
    {
        num: 4,
        img: "../images/random-events/triceratops.png",
        imgDesc: "An olive green triceratops with dark spots on its back",
        title: "Injured Triceratops",
        story: `<p> A giant creature lies in a ditch a little further from you. Two horns stick out from his forehead, and one from his muzzle. Above his head is a spiky armor that protects his neck. His skin looks very hard. The creature lies down and rests. </p>
                <p class="action"> Approach him slowly. </p>
                <p> You can see a bite on his back. The creature appears to be wounded. </p>
                <p> The creature noticed you. It turns its head towards you and says: </p>
                <p> "Good day! I'm a triceratops, one of the biggest and most famous dinosaurs. I'm a herbivore. I eat plants. You don't have to be afraid, I won't eat you." </p>
                <p class="action"> Ask what happened to it. </p>
                <p> "Another dinosaur, a T. rex, attacked and injured me. That's why I ran away and hid here. A T. rex is very frightful with its huge jaws and sharp teeth, with a powerful tail, strong legs and tiny arms." </p>
                <p class="action"> Ask if it is in pain. </p>
                <p> "Yes, it hurts quite a bit. Next to trees over there are herbs that could help me. Can you pick them?" </p>
                <p class="action"> Go pick plants. </p>
                <p> "Can you clean my wound with water now? And rub the herbs on the wound?" the triceratops asked. </p>
                <p class="action"> Clean its wound with water. Then spread on herbs. </p>
                <p> Triceratops is already feeling much better. It thanked you. </p>
                <p> At that moment you could heard a terrible growl. </p>
                <p> "Grrrrrrrr!!!" </p>
                <p> You look up and see the T. rex. It set his sights on you. It wants to eat you. </p>
                <p class="action"> Run! Run as fast as you can. Hide somewhere where the T. rex can't see you. </p>
                <p> The T. rex is looking for you. It is looking all around. Found you. </p>
                <p class="action"> Run again. Hide again. </p>
                <p> The T. rex is looking for you. It is smelling your scent. Found you again. </p>
                <p class="action"> Run! </p>
                <p> The T. rex knocked you down. </p>
                <p class="action"> Fall to the floor. </p>
                <p> Looks like it caught you. You're done... Suddenly your triceratops friend appeared. It swooped in and attacked the T. rex with its horns. It hurt it badly. The T. rex ran away. You are safe. </p>
                <p class="action"> Thank the triceratops. </p>
                <p> "You helped me too." triceratops answers. "I have something else for you." </p>
                <p> Triceratops gives you the next clue. </p>
                <p class="action"> Thank it again, greet it and look at the clue. </p>`,
        question: "What is the name of the big and famous dinosaur that has three horns on its head?",
        wrongAnswers: ["T. rex", "Rhino", "Bull"],
        correctAnswer: "Triceratops",
        type: ""
    },
    {
        num: 5,
        img: "../images/random-events/village.png",
        imgDesc: "Six rural white houses with a brownish red roof",
        title: "Feeding the Livestock",
        story: `<p> You arrive in a small modest village. Hard-working farmers cultivate the fields and take care of the livestock. One approaches you. </p>
                <p> "Greetings to you, stranger. What brings you to this place?" </p>
                <p class="action"> Answer the farmer. </p>
                <p> "So you're looking for a treasure? Help me feed the cattle, and I'll help you on your quest. Do we have a deal?" </p>
                <p class="action"> Answer the farmer. </p>
                <p> "Let's go then." the farmer calls you. </p>
                <p> "I have chickens, ducks, sheep, cows and a rabbit. In the north there is a meadow full of fresh grass. Who needs to be taken there to graze." </p>
                <p class="action"> Answer: sheep and cows. </p>
                <p> "Excellent!" </p>
                <p class="action"> Take the sheep and cows to the meadow in the north, then return to the farmer. </p>
                <p> "In the south there is a small lake abundant with tiny fish, frogs, insects and various plants. Which animals would you take there?" </p>
                <p class="action"> Answer: ducks. </p>
                <p> "Excellent!" said the farmer. </p>
                <p class="action"> Take the ducks to the lake in the south and return to the farmer. </p>
                <p> "I have carrots planted in the eastern part of the garden. Which animal would like to eat carrots?" </p>
                <p class="action"> Answer: rabbit. </p>
                <p> "Excellent!" </p>
                <p class="action"> Go to the eastern part of the garden, pick some carrots and take them to the rabbit. Then return to the farmer again. </p>
                <p> "There are two buckets five steps to the west from here. There are earthworms and corn in one. And sweets in the other. What should we feed the chickens?" </p>
                <p class="action"> Answer: earthworms and corn. </p>
                <p> "Excellent!" the farmer praises you. </p>
                <p class="action"> Take the bucket, feed the chickens, then return to the farmer. </p>
                <p> "One bag of potatoes was left with me. Who are we going to feed with it?" </p>
                <p class="action"> Answer what you think. </p>
                <p> "It is better not to give raw potatoes to the livestock," the farmer spoke and continued, "but we will prepare it with meat and vegetables for a good lunch! Stay for lunch, stranger." </p>
                <p> After a delicious and plentiful lunch you licked your fingers and the farmer said: </p>
                <p> "You did a good job today. Here's the next clue." </p>
                <p class="action"> Say thank you, greet the farmer and see what the next clue is. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    },
    {
        num: 6,
        img: "../images/random-events/sphinx.png",
        imgDesc: "Yellow brown sphinx",
        title: "Riddles of the Sphinx",
        story: `<p> You arrived in front of a grandiose stone statue. It is a statue of a sphinx, a creature with the body of a lion and the head of a man. You hear a deep voice: </p>
                <p> "I am the sphinx. I am the guardian of this passage. Anyone who wants to pass must answer my riddles. Do you want to try?" </p>
                <p class="action"> Reply to the sphinx. </p>
                <p> "So, if you are ready, here is the first puzzle: </p>
                <br>
                <p> It is something in the sky </p>
                <p> That seems to shine at night. </p>
                <p> However, it's not a star </p>
                <p> It is Earth's satellite. </p>
                <p> What is it?" </p>
                <p class="action"> Try to guess. </p>
                <p> (The correct answer is the moon) </p>
                <br>
                <p> "If you have answered correctly, here is the next puzzle: </p>
                <p> Sometimes it is a gentle breeze </p>
                <p> And other times it's a strong gust. </p>
                <p> On water it blows sailing ships </p>
                <p> And in the desert it blows dust. </p>
                <p> What is it?" </p>
                <p class="action"> Try to guess. </p>
                <p> (The correct answer is wind) </p>
                <br>
                <p> "The last puzzle remains: </p>
                <p> It carries lots of people </p>
                <p> As it's a mode of transport. </p>
                <p> You can see a lot of these, </p>
                <p> If you go to an airport." </p>
                <p class="action"> Try to guess. </p>
                <p> (The correct answer is a airplane) </p>
                <br>
                <p> "Congratulations!" spoke the sphinx. "You have answered all three riddles correctly." </p>
                <p> "You can pass on. Here's also a clue for you." </p>
                <p class="action"> Say goodbye to the sphinx, then look at the clue. </p>`,
        question: "What is the name of a creature with the body of a lion and the head of a man?",
        wrongAnswers: ["Pyramid", "Dragon", "Pharaoh"],
        correctAnswer: "Sphinx",
        type: ""
    },
    {
        number: 7,
        img: "../images/random-events/elephant.png",
        imgDesc: "Gray elephant",
        title: "The Lost Elephant",
        story: `<p> An elephant appears in front of you. A big elephant. He has rough skin, wide ears, two white tusks and a long trunk. </p>
                <p> "Have you seen my mom? Have you seen my herd?" it asked you. </p>
                <p class="action"> Answer that you haven't seen them. </p>
                <p> "I'm lost," says the elephant, "I need to find my herd. There are 12 of us. And my mother is the leader of the herd." </p>
                <p> "You know, the mother elephant is the best mother. She takes great care of her children and teaches them everything. My mother takes care of everyone in the herd." </p>
                <p> "You know, we elephants have a great memory. I remember the whole way I went with my herd. I just... I lost my herd. Will you help me find them?" </p>
                <p class="action"> Say you want to help it. </p>
                <p> "Fantastic!" said the elephant enthusiastically, "Then let's go back to the place where I last saw them. In order to get there you'll need to follow my instructions very carefully. I'll tell you once. You need to remember and do it. Ready?" </p>
                <p class="action"> "One step forward." </p>
                <p class="action"> "Two steps left, one step forward." </p>
                <p class="action"> "Three steps forward, one step back." </p>
                <p class="action"> "One step forward, one step right, one step forward." </p>
                <p> "Now climb to the highest peak you can and see if you can see my herd." </p>
                <p class="action"> Climb up and say you see noone. </p>
                <p> "Okay, let's move on," says the elephant. </p>
                <p class="action"> "Two steps back." </p>
                <p class="action"> "Six steps forward." </p>
                <p class="action"> "Three steps to the left, four steps to the right." </p>
                <p class="action"> "One step forward, two steps to the right, three steps forward." </p>
                <p> "Climb again to the highest peak and see if you can see my herd." </p>
                <p class="action"> Climb up and say you see noone. </p>
                <p> "Okay, let's move on," says the elephant. </p>
                <p class="action"> "Two steps to the right, two steps back." </p>
                <p class="action"> "Four steps left, three steps forward." </p>
                <p class="action"> "One step back, one step right, one step forward." </p>
                <p class="action"> "Three steps to the right, two steps to the left, two steps forward." </p>
                <p> "We have arrived!" the elephant says excitedly. </p>
                <p> "Climb to the highest peak again and see if you can see my herd now." </p>
                <p class="action"> Climb up and take a good look around. On your left you can see a herd of elephants. Shout to the elephant you see them. </p>
                <p> "We found them, we found them!" exclaims the elephant while happily running in a cicrle. "Thank you my friend." </p>
                <p> "Before we split up, I have something for you." </p>
                <p> He stretches out his long trunk, hands you the next clue and runs towards his mother. </p>
                <p class="action"> Say goodbye to the elephant and look at the clue. </p>`,
        question: "Which animal has a good memory?",
        wrongAnswers: ["Giraffe", "Bee", "Hamster"],
        correctAnswer: "Elephant",
        type: ""
    },
    {
        num: 8,
        img: "../images/random-events/enchanted-forest.png",
        imgDesc: "Bright green forest",
        title: "The Enchanted Forest and the Magic Potion",
        story: `<p> You arrive in the enchanted forest. It looks like a completely ordinary forest: plenty trees with branching green crowns and cheerful birdsong. But still, it seems something is different. The scents are more scenced. The colors are more colorful. You feel somehow better... and like someone is watching you. </p>
                <p> You look behind yourself. And see a young woman in a pale green dress with a red scarf over her head. She is sitting on a tree stirring something in a purple pot. </p>
                <p class="action"> Greet her and ask what she is doing. </p>
                <p> She doesn't greet you back or even answer your question. She takes a wooden spoon out of the pot, looks at it and says, "I'm missing a few ingredients. You'll need to gather them for me." </p>
                <p class="action"> Tell her that it is polite to say hello when you meet someone. </p>
                <p class="action"> Tell her that she needs to ask you nicely if she wants your help. </p>
                <p> The woman gets angry. Her face contorted. She grows as big as a tree. Then looks at you with her wicked eyes and says in a shrill voice: </p>
                <p> "Do you know who am I? I am Aradia, a dreadful witch. I can turn you into a mouse." </p>
                <p class="action"> Tell her it's nice that she introduced herself. </p>
                <p class="action"> Tell her that the mouse will not help her gather the ingredients. </p>
                <p> "You're right," the witch says. </p>
                <p> Then she turns back into a young beautiful girl. </p>
                <p> "Forgive me. I'm nervous. I don't have much time and I have to make a magic potion. Will you help me, please?" </p>
                <p class="action"> Say you will. </p>
                <p> "Thank you," Aradia says gratefully, "I need a few ingredients. The first ingredient is a dandelion leaf." </p>
                <p class="action"> Find something that is small, green and soft. </p>
                <p> "Next thing I need is a turtle shell." </p>
                <p class="action"> Find something hollow. </p>
                <p> "I need rose petals." </p>
                <p class="action"> Find something that smells. </p>
                <p> "I need an apple branch." </p>
                <p class="action"> Find something wooden. </p>
                <p> "I need a tiger's whiskers." </p>
                <p class="action"> Find something long and thin. </p>
                <p> "Now I need a snake's tooth." </p>
                <p class="action"> Find something smooth and sharp. </p>
                <p> I still need parrot feathers. </p>
                <p class="action"> Find something that has three different colors. </p>
                <p> Finally, I need one special magical ingredient. An ingredient that has to do with you. </p>
                <p class="action"> Find something that starts with the first letter of your name. </p>
                <p> "Perfect!" Aradia said happily. </p>
                <p> She puts all the ingredients in a pot. She stirs a little more then shakes. She says some indistinct magic words then keep mixing. Thick white smoke forms above the pot and the witch brings out: </p>
                <p> "The magic potion is ready!" </p>
                <p> Beautiful Araida thanks you and says: "I have something for you." </p>
                <p> She gives you a stone plate with the next clue. Then she rushes off somewhere further into the enchanted forest. </p>
                <p class="action"> Say goodbye to her. Then look at the clue. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    },
    {
        num: 9,
        img: "../images/random-events/forest.png",
        imgDesc: "Dark green forest",
        title: "Exploring the Forest",
        story: `<p> You reach the forest. You think where the next clue might be. You step slowly forward and explore. Sturdy trees rise to the sky. Forest vegetation is greening up all around. You smell flowers. </p>
                <p class="action"> Bend down and smell the flowers. </p>
                <p> What flowers are those? You don't know, but it smells nice. You step on. There are mushrooms on a tree. </p>
                <p class="action"> Take a closer look at the mushrooms. </p>
                <p> You are hungry. Should you pick and eat them? They would please you very well. Maybe it's better not to touch them. Not sure if they are poisonous. Then you hear a hoot: </p>
                <p> "Whoo-whoo!" </p>
                <p> "Whoo-whoo!" </p>
                <p class="action"> Guess which animal could it be. </p>
                <p> It was an owl. Then you hear howling: </p>
                <p> "Ou ou ouooooo!" </p>
                <p> "Ou ou ouooooo!" </p>
                <p class="action"> Guess which animal it could be. </p>
                <p> It was a wolf. In the distance among the trees you see a large brown animal grumbling and growling: </p>
                <p> "Roaaaar... Grrr... Grrrrrrrrrrr!" </p>
                <p> "Roaaaar... Grrr... Grrrrrrrrrrr!" </p>
                <p class="action"> Guess which animal it could be. </p>
                <p> It's a bear. He seems to be hungry and looking for food. Better hide somewhere until he leaves. </p>
                <p class="action"> Hide. </p>
                <p> The bear is gone. A little further on, you notice something crawling and hissing: </p>
                <p> "Ssssssssss..." </p>
                <p> "Ssssssssss..." </p>
                <p class="action"> Guess which animal it could be. </p>
                <p> It's a snake. The snake crawls away and you continue your search. You step on over the green vegetation. One animal with a flamboyant tail climbs up a tree and carries an acorn into its burrow. </p>
                <p class="action"> Guess which animal it could be. </p>
                <p> It's a squirrel. You approach the tree. You notice something engraved on it. A clue! You found the next clue! </p>
                <p class="action"> Look at the clue. </p>`,
        question: "Which animal hoots: whoo-whoo, whoo-whoo?",
        wrongAnswers: ["Wolf", "Bear", "Snake"],
        correctAnswer: "Owl",
        type: ""
    },
    {
        num: 10,
        img: "../images/random-events/sad-girl.png",
        imgDesc: "A pensive little girl sitting on a wooden bench without a backrest",
        title: "A Sad Girl",
        story: `<p> A little girl is sitting on a wooden bench. She is sad and crying. You approach her. </p>
                <p class="action"> Sit next to the girl. </p>
                <p class="action"> Introduce yourself. </p>
                <p class="action"> Tell her how you can see that she is sad. </p>
                <p> The little girl is ashamed. She doesn't say anything. </p>
                <p class="action"> Offer her a candy. </p>
                <p> She looked at you and says: </p>
                <p> "Thanks, I don't want to." </p>
                <p> You remain sitting next to her in silence. The little girl spoke: </p>
                <p> "The teacher asked me something, but I didn't know how to answer. She yelled at me a lot. That's why I'm sad." </p>
                <p class="action"> Tell the little girl that it's not nice that the teacher yelled at her. </p>
                <p> "Yeah, it's not nice." confirmed the girl. "I was very scared. Can you help me learn so I can be ready for the next time?" </p>
                <p class="action"> Say that you will be very happy to help her. </p>
                <p> "Can you teach me to count to 10?" </p>
                <p class="action"> Count to 10. </p>
                <p> "And how does that count down?" </p>
                <p class="action"> Count down from 10 to 0. </p>
                <p> "What are the days of the week?" </p>
                <p class="action"> List the days of the week. </p>
                <p> "Which is the left hand, which is the right?" </p>
                <p class="action"> Show your left hand and your right hand. </p>
                <p> "Where is the hip, where is the sole?" </p>
                <p class="action"> Show your hip and your sole. </p>
                <p> "What is winter?" </p>
                <p class="action"> Explain what winter is. </p>
                <p> "And what is a carrot?" </p>
                <p class="action"> Explain what a carrot is. </p>
                <p> "And what does it mean to swim?" </p>
                <p class="action"> Explain what does it mean to swim. </p>
                <p> "And what does it mean to grow?" </p>
                <p class="action"> Explain what does it mean to grow. </p>
                <p> "I have one more question: What does an ant look like?" </p>
                <p class="action"> Describe what an ant looks like. </p>
                <p> "I'm not sad anymore. I think I know everything now. Thank you." </p>
                <p> Little girl hugs you. Then she gets up and bounces happily. Then she pauses as if she has forgotten something. She runs back to you and hands you a piece of paper. </p>
                <p> "This is for you." </p>
                <p> She said and bounced off again. </p>
                <p> You look at the piece of paper. A new clue is written on it. </p>
                <p class="action"> Say goodbye to the little girl and look at the clue. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    }

]



// ***************
// ***************
// RANDOM TRAVELING
// ***************
// ***************

export const travelListEn = [
    {
        num: 1,
        title: "Knee Injury",
        story: "<p> You are moving towards the next location in a good mood. Suddenly you trip over a branch and fall. Your right knee hurts. It is bruised. </p>",
        task: `<p class="action"> Limp. You'll feel better when you get to the next location. </p>`,
    },
    {
        num: 2,
        title: "Calling a Friend",
        story: "<p> You feel so good that you decide to share your joy. While walking to the next location you talk to a friend. </p>",
        task: `<p class="action"> Call a friend or someone you know and talk to him or her. </p>`,
    },
    {
        num: 3,
        title: "Giant Bees",
        story: "<p> In front of you is a giant meadow. Everything is very big in the giant meadow. The flowers are big, the animals are big. Now is the pollination time and the meadow is full of giant yellow-brown bees. They fly from flower to flower and collect sweet nectar. Be careful not to collide with a bee. </p>",
        task: `<p class="action"> When you see something yellow, duck down. </p>`,
    },
    {
        num: 4,
        title: "Train Trip",
        story: "<p> There is a train going to the next location. You get on the train and you go. </p>",
        task: `<p class="action"> Pretend you are riding a train. </p>`,
    },
    {
        num: 5,
        title: "Tall Grass",
        story: "<p> It was raining heavily. The thick grass grew well. You will need to make your way to cross this tall grass. </p>",
        task: `<p class="action"> Raise your legs high as you go to the next location. </p>`,
    },
    {
        num: 6,
        title: "Narrow Bridge",
        story: "<p> In front of you is a wetland area. A very narrow wooden bridge crosses it. You carefully walk across the bridge while maintaining your balance. </p>",
        task: `<p class="action"> Put one foot in front of the other and keep your arms open until you reach the next location. </p>`,
    },
    {
        number: 7,
        title: "Singing a Song",
        story: "<p> You feel really happy, so you sing a song. </p>",
        task: `<p class="action"> Sing a song. </p>`,
    },
    {
        num: 8,
        title: "Hurry",
        story: "<p> It's getting dark. You need to reach the next location before dark. The sun will shine there again. </p>",
        task: `<p class="action"> Run. </p>`,
    },
    {
        num: 9,
        title: "Turning into a Kangaroo",
        story: "<p> Some kind of magic has hit you. You feel yourself changing. You turn into an animal. Your ears grow. Your nose disappears and a snout appears. Your arms shrink. There is a tail growing from your back, long and muscular. Your legs become stronger and the soles of your feet lengthened. A quiver formed on your stomach. You became a kangaroo. Fortunately, this spell only lasts until the next location. </p>",
        task: `<p class="action"> Jump like a kangaroo. </p>`,
    },
    {
        num: 10,
        title: "The Lost Ball",
        story: "<p> You meet a boy who asks you if you saw his ball. He lost it. He looks for it everywhere, but can't find it. You decide to help the boy. </p>",
        task: `<p class="action"> Find something round along the way. </p>`,
    },
]



// ***************
// ***************
// RANDOM ENDING
// ***************
// ***************

export const endLocationListEn = [
    {
        img: "",
        imgDesc: "",
        title: "The Desert X",
        story1: `<p> You have arrived at the location. That should be somewhere here. You look around, but there is nothing anywhere. Only dry sand and heat in the air. Where is the treasure? The idea hits you, maybe it's under the sand. </p>
                <p> You start digging a hole with your hands. </p>
                <p class="action"> Dig a hole with your hands. </p>
                <p> You dig deeper and deeper. Your fingers are starting to hurt, but you you don't give up. You are getting tired, but you still don't give up. You can't give up now. You're so close. </p>
                <p> Then you feel something hard under your fingers. What is that? You pull out an unusual blue stone. Suddenly you feel tingling on the hand. The stone is moving. And changing. You get scared and throw it away. </p>
                <p> The stone slowly turns into a small blue monster. The monster jumps up to you and says: </p>
                <p> "Good day, nice to meet you. I'm Hop-Hop and I like to jump." </p>
                <p class="action"> Say hello to Hop-Hop. </p>
                <p> "I see you've made it all the way here. Excellent! I have the following task for you. Listen carefully because you will have to perform exactly everything I tell you. Ready?" </p>
                <p> "Let's go then:" </p>
                <p class="action"> Three steps forward, three steps back, jump high, now crouch, put your hands on the floor and raise feet in the air, jump three times into the distance. </p>
                <p> "Okay. Let's move on:" </p>
                <p class="action"> Jump back once, jump again into the distance, jump as high as you can. Jump again. Bring your knee up to your chin. Scratch your head. </p>
                <p class="action"> Now say it out loud: "I like to eat chard and broccoli." </p>
                <p class="action"> Say quietly: "Brush your teeth everyday." </p>
                <p class="action"> Repeat after me: "keke reke", "buku laka", "miki baka", "caka saka". </p>
                <p class="action"> Repeat after me: "the mouse ate my turnip", "the cat drank my milk". </p>
                <p class="action"> Repeat after me: "Irish wrist watch", "bailiwick", "bafflegab", "balderdash", "puree without potatoes". </p>
                <p class="action"> Now spread your arms and legs as wide as you can. Hold like that for ten seconds. </p>
                <p> "Excellent! I am satisfied. You did what I asked of you. You can pass on." </p>`,
        story2: `<p> You move on proudly. Surely the treasure is somewhere here. At that moment a ghost appeared in front of you. A funny kind of ghost. It is covered by a white sheet with one larger hole. His nose peeks throughout the hole. A bright red nose with three pimples on it. What a funny spirit. </p>
                <p> The spirit speaks: </p>
                <p> "The treasure in front of you. But you can only get to it if you answer my question correctly. Remember everything you've been through so far. The question is:" </p>`,
        winMessage: "WELL DONE!! YOU DID IT! YOU FINISHED ALL THE CHALLENGES AND FINALLY DISCOVERED THE TREASURE! YOU DESERVED IT.",
        conclusion: "It's always a good feeling when you manage to do something good. I congratulate you on that success. Share your happiness with others. And see you another time in a new adventure.",
        type: ""
    }, 
    {
        img: "",
        imgDesc: "",
        title: "The Pirate Treasure",
        story1: `<p> You have arrived at the place. A ship appears in front of you. You look at it and admire. War sailing ship with 40 cannons and a black flag fluttering at the top of the mast. Oh, it looks like Queen Anne's Revenge, the ship of the most famous pirate - Blackbeard. Be careful. </p>
                <p> The captain suddenly orders his pirates to point their cannons at you. Quick, you need to dodge the cannonballs. </p>
                <p class="action"> Bend down. Jump to the left. Spread your legs. Jump up and spread your legs. Roll to the right. Crouch. Roll to the right. </p>
                <p class="action"> Jump forward. Bend again. Jump left. Crouch again. Jump back. Now run quickly to the left. Stop. Run quickly to the right. Stop. Crouch. Lie down and be still. </p>
                <p> You stay calm for a while. Nothing seems to be happening. You look up, and in front of you... Captain Blackbeard himself! A worn-out black cap covers his head, a gun and a knife around his waist and a sharp saber in his hand. He has a thick black beard and thick black hair. There is a smoke coming out of his ears. He looks at you with his wild dark eyes and asks: </p>
                <p> "You want to take the treasure I hid? How brave of you." </p>
                <p> The silence lasted for several long seconds after which he said: </p>
                <p> "Alright. If you can beat me in a saber fight, you can take my treasure." </p>
                <p> One of the pirates throws you a saber. You pick it up and boldly go into battle. </p>
                <p class="action"> Take the saber and fight for 10 seconds. </p>
                <p> The captain knocks the saber out of your hand. He's giving you another chance. </p>
                <p class="action"> Fight for 20 seconds. </p>
                <p> Blackbeard corners you. "Oh, the fight took twice as long. Come on again!" he said. </p>
                <p class="action"> Fight for 10 seconds. </p>
                <p> "Are you afraid, coward?" he challenged you. </p>
                <p class="action"> Fight for 5 seconds. </p>
                <p> The captain knocks out your saber again. "Do you give up, coward?" he provoked. </p>
                <p> It looks like the captain is too strong. You won't be able to beat him this way. At that moment an idea comes to you. Maybe a nice way might work... </p>
                <p class="action"> Tell Blackbeard about your past endeavors and your efforts. </p>
                <p class="action"> Then nicely ask him for the treasure. </p>
                <p class="action"> And then hug him tightly. </p>`,
        story2: `<p> Blackbeard is touched by your story. While his face takes on a gentle expression, and one tear slides down his cheek, he tells you: </p>
                <p> "Victory is yours. But... you will reach the treasure only if you answer the following question correctly:" </p>`,
        winMessage: "YOU HAVE WON ALL THE CHALLENGES AND FOUND THE TREASURE! YOU ARE REALLY ONE STRONG FIGHTER!",
        conclusion: "You fought different enemies and completed many challenges. You must be proud of yourself. It was nice being with you on this adventure. I hope to see you again.",
        type: ""
    }
]


