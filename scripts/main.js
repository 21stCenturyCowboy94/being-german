const questions = [
// The following questions are about Germany's history.
{
    question: "What were the lands that make up Germany today called from the 11th Century until 1806?",
    options:["German Confederation", "Holy Roman Empire", "German Empire", "German Confederation"],
    answer: "Holy Roman Empire",
},
{
    question: "When did Germany unify?",
    options: ["1855", "1871", "1885", "1891"],
    answer: "1871",
},
{
    question: "What was the name of the country that led the campaign to unite Germany in the 1860s and 1870s?",
    options: ["Saxony", "Prussia", "Bavaria", "All of the above"],
    answer: "Prussia",
},
{
    question: "What two countries did Prussia defeat to unify Germany?",
    options: ["France and Italy", "Austria and France", "Italy and Russia", "Russia and Austria"],
    answer: "Austria and France",
},
{
    question: "Why did France hold a lot of animosity towards Germany between 1871 and 1914?",
    options: ["France lost the Franco-Prussian War and had to pay reparations", "Germany annexed Alsace-Lorraine", "Germany gained significant power", "France and its society were severely damaged", "All of the above"],
    answer: "All of the above",
},
{
    question: "Who was the first Chancellor of Germany?",
    options: ["Frank Walter Steinmeir", "Helmut Schmidt", "Otto von Bismarck",]                                     ,
    answer: "Otto von Bismarck",
},
{
    question:"Why did Kaiser Wilhelm II fire Otto von Bismarck?",
    options: ["He wanted to pursue a more aggressive foreign policy", "He wanted to expand Germany's colonies", "He wanted to modernize the military", "He wanted to improve relations with France"],
    answer: "He wanted to pursue a more aggressive foreign policy",
},
{
    question: "Despite the fact that the United States did not want to join World War I at first, what did Germany do that made the United States declare war against them?",
    options: ["Germany resumed unrestricted submarine warfare", "Germany sank the Lusitania", "Germany sent the Zimmermann Telegram to Mexico", "All of the above"],
    answer: "All of the above",
},
{
    question: "What was the name of the treaty than ended World War I?",
    options: ["Treaty of Trianon", "Treaty of Saint-Germain", "Treaty of Versailles",  "Treaty of Sèvres"],
    answer: "Treaty of Versailles",
},
{
    question: "In 1923, what did Adolf Hitler do that got him arrested?",
    options: ["He attempted to assassinate the German Chancellor", "He led a failed coup d'état known as the Beer Hall Putsch", "He started a riot in Berlin", "He declared himself the Führer of Germany"],
    answer: "He led a failed coup d'état known as the Beer Hall Putsch",
},
{
    question: "What did Hitler do that made him popular in Germany, and what factors contributed to his rise to power?",
    options: ["He promised to restore Germany's economy and national pride after the humiliation of World War I", "He was a charismatic speaker", "He used propaganda to gain support", "All of the above"],
    answer: "All of the above",
},
{
    question: "Which two countries did Germany ally with during World War II?",
    options: ["Italy and Spain", "Japan and Russia", "Spain and France", "Italy and Japan"],
    answer: "Italy and Japan",
},
{
    question: "What was the name of the German Army and Air Force during World War II?",
    options: ["Wehrmacht and Luftwaffe", "Bundeswehr and Luftwaffe", "Kriegsmarine and Luftwaffe", "Reichswehr and Luftwaffe"],
    answer: "Wehrmacht and Luftwaffe",
},
{
    question: "Which country did Germany invade in 1941, that led to the circumstances that guaranteed their defeat?",
    options: ["France", "Poland", "Soviet Union", "United Kingdom"],
    answer: "Soviet Union",
},
{
    question: "How many people died in the Holocaust? Which was perpetrated by the government of Nazi Germany.",
    options: ["Approximately 6 million", "Approximately 11 million", "Approximately 20 million", "Approximately 30 million"],
    answer: "Approximately 11 million",
},
{
    question: "Which four countries occupied Germany after World War II?",
    options: ["Italy, France, United Kingdom, and Soviet Union", "United States, United Kingdom, France, and Soviet Union", "United States, Italy, France, and Soviet Union", "United Kingdom, France, Italy, and Japan"],
    answer: "United States, United Kingdom, France, and Soviet Union",
},
{
    question: "When were West and East Germany offically created?",
    options: ["1945", "1947", "1949", "1951"],
    answer: "1949",
},
{
    question: "Which two German cities hosted the Summer Olympics?",
    options: ["Cologne and Dusseldorf", "Hamburg and Frankfurt", "Berlin and Munich", "Bonn and Stuttgart"],
    answer: "Berlin and Munich",
},
{
    question: "True or false: The areas Germany lost to Poland after World War II were originally part of Poland during the Middle Ages whe Poland was first founded?",
    options: ["True", "False"],
    answer: "True",
},
{
    question: "Who was the first Chancellor of West Germany?",
    options: ["Erich Honecker", "Konrad Adenauer", "Willy Brandt", "Helmut Kohl"],
    answer: "Konrad Adenauer",
},
{
    question: "What was the currency of Germany before the Euro?",
    options: ["Reichsmark", "Westmark", "Schilling", "Deutsche Mark"],
    answer: "Deutsche Mark",
},
{
    question: "During the Cold War, which part of Germany was democratic-capitalist?",
    options: ["East Germany", "West Germany",],
    answer: "West Germany",
},
{
    question: "What was the official name of West Germany?",
    options: ["German Empire", "Federal Republic of Germany", "German Democratic Republic", "Weimar Republic"],
    answer: "Federal Republic of Germany",
},
{
    question: "What was the official name of East Germany?",
    options: ["German Empire", "Federal Republic of Germany", "German Democratic Republic", "Weimar Republic"],
    answer: "German Democratic Republic",
},
{
    question: "What city was the capital of West Germany?",
    options: ["Dusseldorf", "Frankfurt", "Berlin", "Bonn"],
    answer: "Bonn",
},
// The following questions are about Germany's famous people.
{
    question: "Where was Albert Einstein born?",
    options: ["Berlin", "Ulm", "Munich", "Frankfurt"],
    answer: "Ulm",
},
{
    question: "What was Werner von Siemens known for?",
    options: ["He was a famous physicist", "He was a famous chemist", "He was an inventor and industrialist", "He was a famous artist"],
    answer: "He was an inventor and industrialist",
},
{
    question: "What was the name of the chorus in Ludwig van Beethoven's 9th Symphony?",
    options: ["Rondo Alla Turca", "Ode to Joy", "Water Music", "Minuet"],
    answer: "Ode to Joy",
},
{
    question: "Catherine The Great, who was born in Stettin, Prussia (now Szczecin, Poland), was the Empress of which country?",
    options: ["Sweden", "Austria", "Denmark", "Russia"],
    answer: "Russia",
},
// The following questions are about Germany's geography, culture, and society.
{
    question: "What is Germany's capital (and largest city)?",
    options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
    answer: "Berlin",
},
{
    question: "How many states (Bundesländer) does Germany have?",
    options: ["10", "12", "14", "16"],
    answer: "16",
},
{
    question: "What is the name of Germany's national anthem?",
    options: ["Das Lied der Deutschen", "Die Gedanken sind frei", "Die Wacht am Rhein", "Das Deutschlandlied"],
    answer: "Das Lied der Deutschen",
},
{
    question: "What is the name of the German parliament?",
    options: ["Bundesrat", "Bundestag", "Reichstag", "Landtag"],
    answer: "Bundestag",
},
{
    question: "What is the official language of Germany?",
    options: ["German", "English", "French", "Dutch"],
    answer: "German",
},
{
    question: "What are the largest immigrant groups in Germany?",
    options: ["French, Italian, and Greek", "Turkish, Polish, Italian, and Russian", "Greek, Portuguese, and Dutch", "British, American, and Canadian"],
    answer: "Turkish, Polish, Italian, and Russian",
},
{
    question: "What is the name of the famous German festival held in Munich?",
    options: ["Oktoberfest", "Karneval", "Weihnachtsmarkt", "Fasching"],
    answer: "Oktoberfest",
},
{
    question: "How many Americans have German ancestry?",
    options: ["Approximately 10 million", "Approximately 20 million", "Approximately 30 million", "Approximately 50 million"],
    answer: "Approximately 50 million",
},
// The following questions are about Germany's companies.
{
    question: "German company STIHL is known for what?",
    options: ["Manufacturing power tools", "Manufacturing automobiles", "Manufacturing electronics", "Manufacturing furniture"],
    answer: "Manufacturing power tools",
},
{
    question: "What everyday machine was invented by German engineer Karl Friedrich Benz?",
    options: ["The washing machine", "The refrigerator", "The vacuum cleaner", "The automobile (car)"],
    answer: "The automobile (car)",
},
{
    question: "What did the German car manufacturer BMW originally manufacture?",
    options: ["Bicycles", "Motorcycles", "Aircraft engines", "All of the above"],
    answer: "Aircraft engines",         
},
{
    question: "What is the name of the famous German car manufacturer known for its 'people's car'?",
    options: ["Volkswagen", "BMW", "Mercedes-Benz", "Audi"],
    answer: "Volkswagen",
},
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer is ${currentQuestion.answer}.`);
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
  }
});

// Load the first question
loadQuestion();