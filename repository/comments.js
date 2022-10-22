const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postId, commentNum, userId, comment, level) => {
  try {
    await Comments.create({ postId, commentNum, userId, comment, level });
    return;
  } catch (err) {
    throw new Error("repository : 댓글을 생성 할 수 없습니다.");
  }
  
  };

  findComment = async (postId) => {
  try {
    const findComment = await Comments.findAll({ where: { postId } });
    return findComment;
  } catch (err) {
    throw new Error("repository : 해당 게시글의 댓글을 찾지 못 했습니다.");
  }
    
  };

  updateComment = async (userId, comment, commentId) => {
  try {
    await Comments.update({ comment }, { where: { userId, commentId } });
    return;
  } catch (err) {
    throw new Error("repository : 댓글이 없거나 업데이트 할 수 없습니다.");
  }
  };

  deleteComment = async (commentId, userId) => {
  try {
    await Comments.destroy({ where: { commentId, userId } });
    return;
  } catch (err) {
    throw new Error("repository : 해당 댓글이 없거나 삭제 할 수 없습니다.");
  }
  };
}

module.exports = CommentsRepository;
