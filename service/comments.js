const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();

  createComment = async (postId, commentNum, userId, comment, level) => {
    console.log(postId, commentNum, userId, comment, level);
    await this.commentsRepository.createComment(postId, commentNum, userId, comment, level);
    return;
  };

  updateComment = async () => {
    const updateMember = await this.commentsRepository.updateMember();
    return;
  };

  deleteComment = async () => {
    await this.commentsRepository.deleteMember();
    return;
  };
}

module.exports = CommentsService;