const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postId, userId, comment) => {
    try {
      const createComment = await Comments.create({
        postId,
        userId,
        comment,
      });
      return createComment;
    } catch (err) {
      throw new Error("댓글 생성 실패");
    }
  };

  findComment = async (postId) => {
    // try {
    const findAllComment = await Comments.findAll({ where: { postId } });
    return findAllComment;
    // } catch (err) {
    //   throw new Error("댓글 조회 실패");
    // }
  };

  updateComment = async (userId, comment, commentId) => {
    try {
      const updateComment = await Comments.update(
        { comment },
        { where: { userId, commentId } }
      );
      return updateComment;
    } catch (err) {
      throw new Error("댓글 수정 실패");
    }
  };

  deleteComment = async (commentId, userId) => {
    try {
      const deleteComment = await Comments.destroy({
        where: { commentId, userId },
      });
      return deleteComment;
    } catch (err) {
      throw new Error("댓글 삭제 실패");
    }
  };
}

module.exports = CommentsRepository;
