//callback for aynchronous js:

console.log("Before");
getUser(1, getRepo);
// console.log('user',user)

// console.log("repo", repo);
//});

//Async  and wait approach:
async function displayCommits (){
  try{
const user = await getUser(1)
const repo = await getRepo(user.gitHubUserName);
const commit = await getCommits(repo[0]);
console.log(commit)
}
catch (err) {
  console.log('Error',err.message)
}
}
displayCommit();
console.log('After')
//solution to callback hell : replace all anonymous function to a named function:
function getRepo(user) {
  getRepo(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
  getCommits(repos, displayCommit);
}

function displayCommit(commits) {
  console.log(commits);
}




function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a db...");
      resolve({ id: id, gitHubUserName: "Deepika" });
    }, 2000);
  });
}


function getRepo(username, callback) {
  setTimeout(() => {
    console.log("returing all repo...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}