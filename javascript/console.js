var commands = [
  {
    input: 'Kayla.hometown',
    output: 'Poconos, PA'
  },
  {
    input: 'Kayla.education',
    output: 'Rochester Institute of Technology'
  }
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
    output: "['UI/UX', 'Technical Design', 'Project Management', 'Organization', 'Communication']"
  },
  {
    input: 'Kayla.programming',
    output: "['Ruby', 'Python', 'HTML/CSS', 'JavaScript', 'SQL', 'Java']"
  },
  {
    input: 'Kayla.experience',
    output: "[{'Constant Contact': {'Position': 'Software Engineer Intern', \
    'Location': 'Waltham, MA', 'Duration': 'January 2017 - May 2017'}}, {'General Electric': \
    {'Position': 'Technical Developer Intern', 'Location': 'Feasterville-Trevose, PA', \
    'Duration': 'June 2016 - August 2016'}}]"
  },
  {
    input: 'Kayla.hire_availability',
    output: "['Fall 2017', 'Spring 2018', 'Summer 2019']"
  },
  {
    input: 'Kayla.contact_info',
    output: "{'Email': 'kxn3867@rit.edu', 'Cell': '(803)460-5591'}"
  }
];

function writeInput (str) {
  //simulate typing
  console.log(str);
}

function writeOutput (str) {
  //instant print output
  console.log(str);
}

commands.forEach(function(command) {
  writeInput(command.input);
  writeOutput(command.output);
});
