// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];

// Get the current UTC time
const currentTime = currentDate.toISOString().split('T')[1].split('.')[0];
const utcTime = `${currentTime} (UTC)`;

// Update the HTML elements with the data-testid attributes
document.querySelector('[data-testid="slackUserName"]').textContent = 'Samuel Tomisin';
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
document.querySelector('[data-testid="myTrack"]').textContent = 'Frontend Development';
document.querySelector('[data-testid="githubURL"]').href = 'https://github.com/samueltomisin';
