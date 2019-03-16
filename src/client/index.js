fetch('/api/getUsername')
    .then(res => res.json())
    .then(user => updateData(user));

function updateData(user) {
    console.log(user)
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';
    document.getElementById('user-display').innerHTML = 'user: "'+user.username + '", age: ' + user.age;
}

document.getElementById('submit').onclick = function(){

    const userData = {
        username: document.getElementById('username').value,
        age: document.getElementById('age').value
    };

    fetch('/api/updateUser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(res => res.json())
    .then(user => updateData(user));
}