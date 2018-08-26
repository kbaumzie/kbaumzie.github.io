function makeConsole() {
  var commands = [
    {
      input: 'Kayla.hometown',
      output: 'Poconos, PA'
    },
    {
      input: 'Kayla.education',
      output: 'Rochester Institute of Technology'
    },
    {
      input: 'Kayla.graduation',
      output: 'May, 2019'
    },
    {
      input: 'Kayla.degree',
      output: 'B.Sc Software Engineering; Minor: Digital Literature and Comparative Media'
    },
    {
      input: 'Kayla.skills',
      output: "['UI/UX', 'Technical Design', 'Project Management', 'Organization', 'Front-end Development']"
    },
    {
      input: 'Kayla.programming',
      output: "['Ruby', 'Python', 'HTML/CSS', 'JavaScript', 'SQL', 'Java', 'C#']"
    },
    {
      input: 'Kayla.experience',
      output: "[{'Intuit': {'Position': 'Software Engineer Co-op for TurboTax', \
      'Location': 'San Diego, SC', 'Duration': 'January 2018 - July 2018'}}, \
      {'Blackbaud': {'Position': 'Software Engineer Intern', 'Location': 'Charleston, SC', \
      'Duration': 'May 2017 - August 2017'}}, {'Constant Contact': {'Position': 'Software Engineer Co-op', \
      'Location': 'Waltham, MA', 'Duration': 'January 2017 - May 2017'}}, {'General Electric': \
      {'Position': 'Technical Developer Intern', 'Location': 'Feasterville-Trevose, PA', \
      'Duration': 'June 2016 - August 2016'}}]"
    },
    {
      input: 'Kayla.hire_availability',
      output: 'Summer 2019'
    },
    {
      input: 'Kayla.contact_info',
      output: "{'Email': 'kxn3867@rit.edu', 'Cell': '(570)236-8299'}"
    }
  ];

  var terminalbody = document.getElementById('terminalContent');
  var index = 0;

  var interval = setInterval(function() {
    writeInput(commands[index].input);
    writeOutput(commands[index].output);
    index++;

    if (index === commands.length) {
      clearInterval(interval);
    }
  }, 1000);

  function writeInput (str) {
    var d = (new Date()).toTimeString();
    var path = ' - $ ';
    var dateStr = document.createElement('p');
    var pathStr = document.createElement('p');
    var inputStr = document.createElement('p');
    var dateContent = document.createTextNode(d);
    var pathContent = document.createTextNode(path);
    var inputContent = document.createTextNode(str);

    dateStr.style.color = '#b6f97a';
    pathStr.style.color = '#7af6f9';

    dateStr.style.display = "inline";
    pathStr.style.display = "inline";
    inputStr.style.display = "inline";

    dateStr.appendChild(dateContent);
    pathStr.appendChild(pathContent);
    inputStr.appendChild(inputContent);

    terminalbody.appendChild(dateStr);
    terminalbody.appendChild(pathStr);
    terminalbody.appendChild(inputStr);
  }

  function writeOutput (str) {
    var typeOutputString = document.createElement('p');
    var outputString = document.createTextNode(str);
    typeOutputString.appendChild(outputString);
    terminalbody.appendChild(typeOutputString);
  }

}
