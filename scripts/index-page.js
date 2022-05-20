
    // get request for the comments
    const commentAPI = "https://project-1-api.herokuapp.com/comments?api_key=3ba3523720-3fda-45d5-a98e-eef63b9854fa";
    
    const headers = {
        'Content-Type': "application/json"
    }

    axios.get(commentAPI).then(response => {
   
        // declared response.data as commentSection
        const commentSection = response.data;

        commentSection.sort((a, b) => {
            return b.timestamp - a.timestamp;
        });

        console.log(commentSection)
        commentSection.forEach((comment) => {
            displayComment(comment);
        });

    }).catch(error => {
        console.error("cannot get comments");
    });

    // selecting the class .form__comments
    const container = document.querySelector('.form__comments');

    // created displayComment function
    let displayComment = function(comment){

        //creating the elements and adding class names to each.
        const commentContainer = document.createElement("section");
        commentContainer.classList.add("form__container");

        const commentNameDate = document.createElement("section"); 
        commentNameDate.classList.add("form__name-date");

        const commentPicture = document.createElement('article');
        commentPicture.classList.add("form__picture");

        const commentInfo = document.createElement('section');
        commentInfo.classList.add("form__comment-info");

        const commentText = document.createElement('p');
        commentText.classList.add("form__paragraph");

        const commentName = document.createElement('p');
        commentName.classList.add("form__name");
        
        const commentDate = document.createElement('p');
        commentDate.classList.add("form__date");

        // converted the timestamp into real date for comments
        let time = comment.timestamp;
        let date = new Date(time);
        let month = date.getMonth()+1;
        let day = date.getDate();
        let year = date.getFullYear();
        let fullDate = (month + "/" + day + "/" + year);

        //adding Text to the elements
        commentName.innerText = comment.name;
        commentDate.innerText = fullDate;
        commentText.innerText = comment.comment;
        
        //appending the elements into the html
        commentNameDate.appendChild(commentName);
        commentNameDate.appendChild(commentDate);
        commentContainer.appendChild(commentPicture);
        commentContainer.appendChild(commentInfo);
        commentInfo.appendChild(commentNameDate);
        commentInfo.appendChild(commentText);
        container.appendChild(commentContainer); 
    };

    // selected the forms class
    const form = document.querySelector(".form");

   // event listener for my comment button
   form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const name = document.querySelector("#name");
        const comments = document.querySelector("#comment");
        newComment = {name: name.value, comment: comments.value};
        name.value = "";
        comments.value = "";

        axios.post(commentAPI, newComment, headers)
        .then(response => {
            
            container.innerText = null;

            axios.get(commentAPI).then(response => {

                const commentSection = response.data;

                commentSection.sort((a, b) => {
                    return b.timestamp - a.timestamp;
                });

                commentSection.forEach((comment) => {
                    displayComment(comment);
                });
           
            }).catch(error => {
                console.error("cannot get comments");
            });
        }).catch(error => {
            console.error("cannot post comments");
        });

    });