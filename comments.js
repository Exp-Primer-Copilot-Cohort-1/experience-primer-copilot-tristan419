// Create web server
const express = require('express');
const app = express();

// Get the comments from the database
const comments = require('./comments');

// Serve static files
app.use(express.static('public'));

// Create a route for the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Path: comments.js
// Comments data
const comments = [
    {
        id: 1,
        name: 'John Doe',
        comment: 'This is a comment'
    },
    {
        id: 2,
        name: 'Jane Doe',
        comment: 'This is another comment'
    }
];

module.exports = comments;

// Path: public/index.html
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <script src="app.js"></script>
</body>
</html>

// Path: public/app.js
// Get the comments from the server
fetch('/comments')
    .then(response => response.json())
    .then(comments => {
        const commentsList = document.getElementById('comments');
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = `${comment.name}: ${comment.comment}`;
            commentsList.appendChild(li);
        });
    });

// Path: package.json
{
  "name": "comments",
  "version": "1.0.0",
  "description": "A simple comments app",
  "main": "comments.js",
  "scripts": {
    "start": "node comments.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

// Install the dependencies
npm install

// Start the server
npm start

// Open the browser and go to http://localhost:3000

