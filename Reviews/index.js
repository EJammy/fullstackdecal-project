const express = require('express')
const port = 3002
const cors = require('cors');


const post1 = {
  id: 1,
  comments: [],
}
/*
const post2 = {
  id: 2,
  comments: [],
}

const post3 = {
  id: 3,
  comments: [],
}
*/

let data= {1:post1}


const app = express();
app.use(cors());
app.use(express.json());

app.get('/posts', (req, res) => {
  res.send(Object.values(data))
})

app.post('/post', (req, res) => {
  if (data[req.body.id]) {
    throw new Error("Post exists!")
  }
  const newPost = {id:parseInt(req.body.id, 10), title: req.body.title, body: req.body.body, comments: []}
  data[req.body.id] = newPost
  res.send(newPost)
})

app.post('/post/:postId/comment', (req, res) => {
  const post = data[req.params.postId]
  post.comments = [...post.comments, req.body.newComment]
  res.send(post)
})

app.listen(port, () => {
  console.log(`Block Server listening at http://localhost:${port}`)
})
