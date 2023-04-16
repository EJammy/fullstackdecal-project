import Comments from './Comments'// ___________________ import statement

const Post = ({comments, id }) => {

  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    
    <Comments postId = {id} comments = {comments} />
  </div>
}

export default Post;
