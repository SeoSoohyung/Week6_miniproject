const { Comments } = require("../models");

class CommentsRepository {
  constructor() {
    this.Comments = Comments;
  }
  createComment = async ({ postId, commentNum, userId, comment, level }) => {
    try {
      const createComment = await this.Comments.create({
        postId,
        commentNum,
        userId,
        comment,
        level,
      });
      return createComment;
    } catch (err) {
      throw new Error("repository : 댓글을 생성 할 수 없습니다.");
    }
  };

  findComment = async (postId) => {
    try {
      const findAllComment = await this.Comments.findAll({ where: { postId } });
      return findAllComment;
    } catch (err) {
      throw new Error("repository : 해당 게시글의 댓글을 찾지 못 했습니다.");
    }
  };

  updateComment = async ({ userId, comment, commentId }) => {
    try {
      const updateComment = await this.Comments.update(
        { comment },
        { where: { userId, commentId } }
      );
      return updateComment;
    } catch (err) {
      throw new Error("repository : 댓글이 없거나 업데이트 할 수 없습니다.");
    }
  };

  deleteComment = async ({ commentId, userId }) => {
    try {
      const deleteComment = await this.Comments.destroy({
        where: { commentId, userId },
      });
      return deleteComment;
    } catch (err) {
      throw new Error("repository : 해당 댓글이 없거나 삭제 할 수 없습니다.");
    }
  };
}

module.exports = CommentsRepository;
