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

  deleteComment = async (level, comment) => {
    await Comments.destroy({ where: {level, comment} });
    return;
  };
}

module.exports = CommentsRepository;
