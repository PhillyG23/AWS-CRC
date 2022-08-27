const countUrl = 'https://8deh0sgenj.execute-api.us-east-1.amazonaws.com/dev1'
const countElement = document.getElementById("Count");

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.value;
    });
}

