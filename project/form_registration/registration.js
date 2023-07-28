const $ = (id) => {
   return document.getElementById(id)
}

function createData () {
    const lastname = $('lastname');
    const username = $('username');
    const email = $('email');
    const password = $('password');    
    return {
        lastname: lastname.value,
        username: username.value,
        email: email.value,
        password: password.value
    }
}

function get(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        lastUserNumber = data.length - 1;
        alert(`your id is ${data[lastUserNumber].id}`)
    });
}

function post(url, data) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('success')
        return response.json
    })
    .catch(error => console.log('error:', error))
}

const reg = $('reg');

reg.onclick = function () {
    const data = createData();
    for(const property in data) {
        if(data[property] !== ''){
            post('https://it-blog-posts.herokuapp.com/api/people',data);
            alert('You are registered'); 
            get('https://it-blog-posts.herokuapp.com/api/people')
            setTimeout(function(){window.open('../login_page/login.html')}, 3000)
            break           
        }
        else{
            alert('please fill form');
            break;
        }
    }
}