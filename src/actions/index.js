var data = [
      {
        title: "JavaScript The Good Parts",
        description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having  been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language.",
        author: "douglas.crockford@gmail.com",
        rating: 4,
        image: "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg",
        comments: [
          { content: "This is a very nice book, I like the fact that author has explained every topic with nice examples", author: "Nelson"},
          { content: "Author has explaine this book in a way that even a beginner like me can also understand it very well. Thanks to this author who enabled me to write professional code for web apps", author: "Jon"}
        ]
      },{
        title: "React: Up & Running",
        description: "Hit the ground running with React, the open-source technology from Facebook for building rich web applications fast. With this practical guide, Yahoo! web developer Stoyan Stefanov teaches you how to build components—React’s basic building blocks—and organize them into maintainable, large-scale apps. If you’re familiar with basic JavaScript syntax, you’re ready to get started.Once you understand how React works, you’ll build a complete custom Whinepad app that helps users rate wines and keep notes.",
        author: "stoyan.stefanov@gmail.com",
        rating: 4.2,
        image: "https://covers.oreillystatic.com/images/0636920042266/lrg.jpg",
        comments: [
          { content: "This is a very nice book", author: "Nelson"},
          { content: "Nice way of explaining everything", author: "Jon"}
        ] 
      },{
        title: "AngularJS",
        description: "Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps. Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging.",
        author: "shyam.seshadri@gmail.com",
        rating: 3.9,
        image: "https://covers.oreillystatic.com/images/0636920028055/lrg.jpg",
        comments: [
          { content: "This is a very nice book", author: "Nelson"},
          { content: "Nice way of explaining everything", author: "Jon"}
        ]
      },{
        title: "Learning Node",
        description: "Take your web development skills from browser to server with Node—and learn how to write fast, highly scalable network applications on this JavaScript-based platform. Updated for the latest Node Long Term Support (LTS) and Node Current (6.0) releases, this hands-on edition helps you master Node’s core fundamentals and gain experience with several built-in and contributed modules.Get up to speed on Node’s event-driven, asynchronous I/O model for developing data-intensive applications that are frequently accessed but computationally simple.",
        author: "shelley.powers@gmail.com",
        rating: 4.4,
        image: "https://covers.oreillystatic.com/images/0636920046936/lrg.jpg",
        comments: [
          { content: "This is a very nice book", author: "Nelson"},
          { content: "Nice way of explaining everything", author: "Jon"}
        ]
      }
  ];

export function fetchBooks(){
  return {
    type: "fetch_books",
    payload: data
  }
}

export function showBook(id){
  return {
    type: "show_book",
    payload: data
  }
}

export function addComment(obj){

  var newdata = data;
  newdata[obj.id].comments = data[obj.id].comments.concat({content: obj.content, author: obj.author}); 

  return {
    type: "add_comment",
    payload: data,
    comment: obj,
    item: newdata[obj.id]
  }
}