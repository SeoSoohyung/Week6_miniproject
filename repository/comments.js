const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postId, commentNum, userId, comment, level) => {
    await Comments.create( { postId, commentNum, userId, comment, level } );
    return;
  };

  updateComment = async ( userId, comment, commentId ) => {
    console.log(userId, comment, commentId)
    await Comments.update( { comment }, { where: { userId, commentId } } );
    return;
  };

  deleteComment = async ( commentId, userId ) => {
    console.log(commentId, userId )
    await Comments.destroy( { where: { commentId, userId } } );
    return;
  };
}

module.exports = CommentsRepository;
