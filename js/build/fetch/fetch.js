"use strict";
const test = fetch("https://api.github.com/users/esteban-rocha/repos");
test.then(response => {
    if (response.ok) {
        return response.json();
    }
    else {
        return Promise.reject({
            status: response.status,
            statusText: response.statusText,
        });
    }
})
    .then(data => {
    console.log(data);
})
    .catch(error => console.log("error is", error));
