const { Comments } = require("../models");

class CommentsRepository {
  createComment = async ( categoryId, postId, commentId, userId, level, comment) => {
    const createComment = await Comments.create({
      categoryId,
      postId, 
      commentId, 
      userId, 
      level, 
      comment, 
    });
    return createComment;
  };

  updateComment = async ( level, comment ) => {
    await Comments.update( { level, comment }, { where : { level, comment } } );
    return;
  };

  deleteComment = async (commentId) => {
    await Comments.destroy({ where: { commentId } });
    return;
  };
}

module.exports = CommentsRepository;
