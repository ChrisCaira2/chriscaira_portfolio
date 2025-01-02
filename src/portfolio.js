const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/ChrisCaira2/chriscaira_portfolio',
    title: 'CC.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Chris Caira',
    role: 'Software Engineer',
    description:
        'Looking for Entry Level Software Engineer opportunites or Internships',
    resume: '/Users/chriscaira/chriscaira_portfolio/resume.png',
    social: {
        linkedin: 'https://www.linkedin.com/in/chris-caira-2ba4a31a9/',
        github: 'https://github.com/ChrisCaira2',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Machine Learning Weather Forecaster',
        description:
            'Web app that uses historical weather data and provides weather predictions for a desired city.',
        stack: ['Python', 'Javascript', 'React'],
        sourceCode: 'https://github.com/ChrisCaira2/weather_predictor'
    },
    {
        name: 'Bet Track',
        description:
            'Web app that pulls in betting odds for NBA, MLB, NFL games and allows user to track their bets for the day.',
        stack: ['Javascript', 'React', 'MongoDB'],
        sourceCode: 'https://github.com/ChrisCaira2/BetTrack',
    },
    {
        name: 'Employee Rolodex',
        description:
            'Internship project where myself and a team of interns created a company rolodex for their internal site. Employees could create a profil and view their coworkers profiles.',
        stack: ['React', 'Javascript', 'MongoDB'],
    },
    {
        name: 'Addy',
        description:
            'A React Native app that allows users to find events to host or find people to attend their events with a swipe interface.',
        stack: ['React Native', 'Javascript', 'Firebase'],
    },
    {
        name: 'Infinite Runner',
        description:
            'Arcade game made using Python and Pygame, user tries to avoid obstacles as they progressively get faster.',
        stack: ['Python', 'Pygame'],
        sourceCode: 'https://github.com/ChrisCaira2/InfiniteRunner',
    },
    {
        name: 'Automated Finance Sheet',
        description:
            'Internship project where myself and a team of interns created an automated finance sheet which pulled directly from an API with all expenses for the company and formatted the companies budget into a Google Sheet.',
        stack: ['Python'],
    }
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'Python',
    'Java',
    'JavaScript',
    'React',
    'SQL',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'ccaira1401@gmail.com',
}

export { header, about, projects, skills, contact }
