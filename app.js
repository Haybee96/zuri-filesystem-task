const axios = require('axios');
const fs = require('fs');

// Asynchronous function to get all the posts
async function getPosts() {

    // Fetch results
    const results = await axios.get('http://jsonplaceholder.typicode.com/posts');

    // Convert to JSON
    const posts = JSON.stringify(results.data, null, 2)

    // Write to file
    fs.writeFile(`${__dirname}/result/posts.json`, posts, err => {
        if (err) throw err;
        console.log('Posts successfully written to file');
    });
}

// Call the function
getPosts();



