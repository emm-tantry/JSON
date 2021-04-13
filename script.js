let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
  "name" : "Aggretsuko",
  "character": "aggretsuko.png",
  "traits": [
    "intense",
    "relatable",
    "metal?"
    ],
    "color": "#dbba32"
  },
  {
  "name" : "Yoshi",
  "character": "yoshi.png",
  "traits": [
    "naive",
    "adventurous",
    "playful"
    ],
    "color": "#45852e"
  },
  {
  "name" : "Mushu",
  "character": "mushu.png",
  "traits": [
    "expressive",
    "bold",
    "blunt"
    ],
    "color": "#852e2e"
  },
  {
  "name" : "Tetsuya 2",
  "character": "tetsuya2.png",
  "traits": [
    "typical",
    "intelligent",
    "loyal"
    ],
    "color": "#636361"
  },
  {
  "name" : "Sid",
  "character": "sid.png",
  "traits": [
    "kind-hearted",
    "funny",
    "oblivious"
    ],
    "color": "#9c967b"
  },
  {
  "name" : "Happy",
  "character": "happy.png",
  "traits": [
    "cheeky",
    "witty",
    "dislikes dogs"
    ],
    "color": "#387bb5"
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {

  //creating div, adding background color, giving a class
  let contentBox = document.createElement("div");
  contentBox.style.backgroundColor = incomingJSON["color"];
  contentBox.classList.add("characterBox");

  // creating character name, inputting the text, giving a class, adding to content box
  let title = document.createElement("h2");
  title.innerText = incomingJSON["name"];
  title.classList.add("characterName");
  contentBox.appendChild(title);

  // creating image, inputting photos, giving class, adding to content box
  let picture = document.createElement("img");
  picture.src = incomingJSON["character"];
  picture.classList.add("images");
  contentBox.appendChild(picture);

  // creating text for "traits subhead"
  let traits = document.createElement("h3");
  traits.innerText = "Traits";
  contentBox.appendChild(traits);

  // creating list of traits
  let traitsList = document.createElement("ul");
  contentBox.appendChild(traitsList);
  traitsList.classList.add("list");

  // for loop
  for (var i = 0; i < incomingJSON["traits"].length; i++) {
    var traitsString = incomingJSON["traits"][i];
    var traitsItem = document.createElement("li");
    traitsItem.innerText = traitsString;
    traitsList.appendChild(traitsItem);
  }

  // Add the item to the page
  contentGridElement.appendChild(contentBox);

}
