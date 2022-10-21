const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, userId, comment, level) => {
    await this.commentsRepository.createComment(postId, userId, comment, level);
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
