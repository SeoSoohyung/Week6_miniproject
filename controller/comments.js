const CommentsService = require("../service/comments");

class CommentsController {
  commentsService = new CommentsService();

  createComment = async (req, res, next) => {
  // try {
    const { comment, level } = req.body;
    const { userId } = res.locals.user;
    const { postId, commentNum, categoryId } =req.params;
    await this.commentsService.createComment({
      postId, commentNum, userId, comment, level, categoryId
    });

    res.status(201).send("message : 댓글이 수정되었습니다.")
  // } catch (error) {
  //   res.status(400).send("message : error");
  // }
  }

  updateComment = async (req, res, next) => {
    try {
      const { comment, level } = req.body;
      const { userId } = res.locals.user;
      const { postId, commentNum } =req.params;
      await this.commentsService.updateComment({
        postId, commentNum, userId, comment, level
      });
      res.status(201).send("message : 댓글이 수정되었습니다.")
    } catch (error) {
      res.status(400).send("message : error");
    }
  }

  deleteComment = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { postId, commentNum, categoryId } =req.params;

      await this.commentsService.deleteComment({
        postId, commentId, userId, level, categoryId
      });
      res.status(201).send("message : 댓글이 삭제되었습니다.");
    } catch (error) {
      res.status(400).send("message : error");
    }
  }
}


module.exports = CommentsController;
