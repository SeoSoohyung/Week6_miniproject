const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();

  createComment = async () => {
    const updateMember = await this.commentsRepository.updateMember();
    return updateMember;
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