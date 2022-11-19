function makeConsole() {
  var commands = [
    {
      input: 'Kayla.hometown',
      output: 'Poconos, PA'
    },
    {
      input: 'Kayla.education',
      output: "['Stanford University (2022)', 'Rochester Institute of Technology (2014)']"
    },
    {
      input: 'Kayla.degree',
      output: 'B.Sc Software Engineering; Minor: Digital Literature and Comparative Media'
    },
    {
      input: 'Kayla.skills',
      output: "['UI/UX', 'Technical Design', 'Product Management', 'Front-end Development']"
    },
    {
      input: 'Kayla.programming',
      output: "['JavaScript/React', 'Ruby', 'Python', 'HTML/CSS', 'SQL', 'Java', 'C#']"
    },
    {
      input: 'Kayla.experience',
      output: "[{'Intuit': [{'Position': 'Product Manager 2 for Intuit Developer Experiences', \
      'Location': 'Mountain View, CA', 'Duration': 'June 2021 - current'], \
      [{'Position': 'Software Engineer 1 & 2 for Intuit Platform', \
      'Location': 'Mountain View, CA', 'Duration': 'August 2019 - June 2021'], \
      [{'Position': 'Software Engineer Co-op for TurboTax', \
      'Location': 'San Diego, CA', 'Duration': 'January 2018 - July 2018'}]}, \
      {'Blackbaud': {'Position': 'Software Engineer Intern', 'Location': 'Charleston, SC', \
      'Duration': 'May 2017 - August 2017'}}, {'Constant Contact': {'Position': 'Software Engineer Co-op', \
      'Location': 'Waltham, MA', 'Duration': 'January 2017 - May 2017'}}, {'General Electric': \
      {'Position': 'Technical Developer Intern', 'Location': 'Feasterville-Trevose, PA', \
      'Duration': 'June 2016 - August 2016'}}]"
    },
    {
      input: 'Kayla.contact_info',
      output: "{'Email': 'kayla.ann.nussbaum@gmail.com'}"
    }
  ];

  var terminalbody = document.getElementById('terminalContent');

  async function runCommands() {
    for (let i = 0; i < commands.length; i++) {
      writePrompt();
      await waitBetweenCommands();
      await writeInput(commands[i].input);
      await waitBeforePrintingOutput();
      writeOutput(commands[i].output);
    }
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  async function waitBetweenCommands() {
    return new Promise((resolve) => {
      setTimeout(resolve, randomInt(1000, 2200));
    });
  }

  async function waitBeforePrintingOutput() {
    return new Promise((resolve) => {
      setTimeout(resolve, randomInt(150, 400));
    });
  }

  function writePrompt() {
    var d = (new Date()).toTimeString();
    var path = ' $ ';
    var dateStr = document.createElement('p');
    var pathStr = document.createElement('p');
    var inputStr = document.createElement('p');
    var dateContent = document.createTextNode(d);
    var pathContent = document.createTextNode(path);

    dateStr.style.color = '#b6f97a';
    pathStr.style.color = '#7af6f9';

    dateStr.style.display = "inline";
    pathStr.style.display = "inline";

    dateStr.appendChild(dateContent);
    pathStr.appendChild(pathContent);

    terminalbody.appendChild(dateStr);
    terminalbody.appendChild(pathStr);
  }

  async function writeInput (str) {
    var inputStr = document.createElement('p');
    inputStr.style.display = "inline";
    terminalbody.appendChild(inputStr);

    await typeStringInElement(str, inputStr);
  }

  function writeOutput (str) {
    var typeOutputString = document.createElement('p');
    var outputString = document.createTextNode(str);
    typeOutputString.appendChild(outputString);
    terminalbody.appendChild(typeOutputString);
  }

  async function typeStringInElement(str, element) {
    for (let i = 0; i < str.length; i++) {
      await typeCharacterInElement(str[i], element);
    }
  }

  async function typeCharacterInElement(character, element) {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.innerText = element.innerText + character;
        resolve();
      }, 100);
    });
  }

  runCommands();
}
