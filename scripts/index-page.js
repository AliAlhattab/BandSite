// array of comments
// let commentSection = [
//     {
//         name: 'Connor Walton',
//         date: '02/17/2021',
//         comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
//     },
//     {
//         name: 'Emilie Beach',
//         date: '01/09/2021',
//         comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
//     },
//     {
//         name: 'Miles Acosta',
//         date: '12/20/2020',
//         comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     }
// ]

    // get request for the comments
    const commentAPI = "https://project-1-api.herokuapp.com/comments?api_key=3ba35720-3fda-45d5-a98e-eef63b9854fa";
    axios.get(commentAPI).then(response => {
   
        // declared response.data as commentSection
        const commentSection = response.data;

        commentSection.forEach((comment) => {
            displayComment(comment);
        
        });
        

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

    // created comment date
    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();
    let fullDate = (month + "/" + day + "/" + year);

    // selected the forms class
    const form = document.querySelector(".form");

   // event listener for my comment button
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const name = document.querySelector("#name");
        const comments = document.querySelector("#comment");
        commentSection.unshift({name: name.value, timestamp: fullDate, comment: comments.value});
        displayComment(commentSection[0]);
        name.value = "";
        comments.value = "";
    });