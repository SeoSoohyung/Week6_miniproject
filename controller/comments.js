const CommentsService = require("../service/comments");

class CommentsController {
  commentsService = new CommentsService();
  createComment = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { userId } = res.locals.user;
      const { comment } = req.body;
      const createComment = await this.commentsService.createComment(
        postId,
        userId,
        comment
      );

      res.status(201).send(createComment);
    } catch (error) {
      res.status(400).json({ message: "댓글 생성 실패 cont" });
    }
  };

  updateComment = async (req, res, next) => {
    try {
      const { commentId } = req.params;
      const { comment, postId } = req.body;
      const { userId } = res.locals.user;
      const updateComment = await this.commentsService.updateComment(
        userId,
        comment,
        commentId,
        postId
      );
      res.status(201).send(updateComment);
    } catch (error) {
      res.status(400).json({ message: "댓글 수정 실패" });
    }
  };

  deleteComment = async (req, res, next) => {
    // try {
    const { userId } = res.locals.user;
    const { commentId } = req.params;
    const { postId } = req.body;
    const deleteComment = await this.commentsService.deleteComment(
      commentId,
      userId,
      postId
    );
    res.status(201).send(deleteComment);
    // } catch (error) {
    //   res.status(400).json({ message: "댓글 삭제 실패" });
    // }
  };
}

module.exports = CommentsController;
