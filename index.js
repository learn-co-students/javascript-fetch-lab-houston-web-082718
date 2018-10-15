// fetch and display a list of all issues associated with your repository on the page. 
function getIssues() {
  const repo = 'kapham2/javascript-fetch-lab';
  const token = getToken();
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

// Append them to a div with an id of "issues". Read more about creating issues via 
// API calls in the GitHub Issues API documentation.
function showIssues(json) {
  console.log(json);
  resultsDiv = document.getElementById('issues');
  json.forEach((element) => resultsDiv.innerHTML += `<a href = ${element.html_url}>${element.title}</a><br>`);
}

// Create a new issue for your forked repository with the createIssue function. 
// Use the title and body values from the provided form. After the issue is created, 
function createIssue() {
  const repo = 'kapham2/javascript-fetch-lab';
  const token = getToken();

  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
   
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => getIssues())
}

// Display the JSON result in the results div by calling showResults.
// In showForkedRepo, display the repo information in the browser by 
// appending html with a link to the repository url to the DOM.
function showResults(json) {
  console.log(json);
  resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<a href = ${json.html_url}>${json.html_url}</a>`;
}

// Fork this repository in the forkRepo function.
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  const token = getToken();

  const postData = {
    organization: ''
  };
   
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}