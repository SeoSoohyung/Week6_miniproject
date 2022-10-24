const CommentsService = require("../service/comments");

class CommentsController {
  constructor() {
    this.commentsService = new CommentsService();
  };
  
  createComment = async (req, res, next) => {
    try {
      // const { postId, commentNum } = req.params;
      // const { userId } = res.locals.user;
      // const { comment, level } = req.body;
      const { postId, commentNum, userId, comment, level} = req.body;
      await this.commentsService.createComment({
        postId,
        commentNum,
        userId,
        comment,
        level
      });
      res.status(201).json(" message: 댓글 생성에 성공했습니다. ");
    } catch (error) {
      res.status(400).json("message : error");
    }
  };

  updateComment = async (req, res, next) => {
    try {
      // const { comment } = req.body;
      // const { userId } = res.locals.user;
      // const { commentId } = req.params;
      const { comment, commentId, userId } = req.body;
      await this.commentsService.updateComment( { userId, comment, commentId } );
      res.status(201).json("message : 댓글이 수정되었습니다.");
    } catch (error) {
      res.status(400).json("message : error");
    }
  };

  deleteComment = async (req, res, next) => {
    try {
      // const { userId } = res.locals.user;
      // const { commentId } = req.params;
      const { commentId, userId } = req.params;
      await this.commentsService.deleteComment({commentId, userId});
      res.status(201).json("message : 댓글이 삭제되었습니다.");
    } catch (error) {
      res.status(400).json("message : error");
    }
  };
}

module.exports = CommentsController;
