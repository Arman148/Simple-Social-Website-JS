function $ (id) {
    return document.getElementById(id)
}

const log = $('log');

function createData () {
    const email = $('email');
    const id = $('id');
    return {
        email: email.value,
        id: id.value,
    }
}

log.onclick = function () {
    console.log('clicked')
    const form = createData();    
    fetch('https://it-blog-posts.herokuapp.com/api/people')
        .then(response => response.json())
        .then(data => {
            console.log('data:',data );
            data.map(user => {
                const userEmail = user.email;
                const userId = user.id;
                if(form.email === userEmail && form.id === userId){
                    window.location = '../workspace/Workspace.html';
                }
                else{
                    console.log('no');
                }
            })
        })
        .catch(error => console.log('error:', error))
}