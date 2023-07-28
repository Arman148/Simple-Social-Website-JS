//fetch of users

/*
fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  */

// fetch of postblog

/*
fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
*/

const userURL = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users';
const postblogURL = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog';

const FRequestUsers = (url) => {

    fetch(url)
    .then((response) => {
      return response.json();
  })
    .then((data) => {
        data.map(item => {
            // avatar
            let picUrl = `url(${item.avatar})`;
            let profPic = document.createElement('profPic');
            profPic.style.backgroundImage = picUrl;
            document.getElementById('aside').append(profPic)
            // name
            let name = item.name;
            let username = document.createElement('username');
            username.innerHTML = name;
            document.getElementById('aside').append(username);

        })
  });
}


const FRequestpostBlog = (url) => {

    fetch(url)
    .then((response) => {
      return response.json();
  })
    .then((data) => {
        data.map(item => {      
            
            console.log(' :',item );
            //create post
            let post = document.createElement('post');

            //author            
            let name = item.author;
            let author = document.createElement('author');
            author.innerHTML = name;
            post.append(author);

            //description
            let desc = item.description;
            let description = document.createElement('description');
            description.innerHTML = desc;
            post.append(description);
            document.getElementById('posts').append(post);

        })
  });
}


FRequestpostBlog(postblogURL);
FRequestUsers(userURL);
