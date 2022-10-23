const CommentsService = require("../../../service/comments");

const mockCommentsRepository = () => ({
  createComment: jest.fn(),
  updateComment: jest.fn(),
  deleteComment: jest.fn(),
});

describe("comments Services Layer Test", () => {
  let commentsService = new CommentsService();

  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test("createComment Method Success Case", async () => {
    const createCommentInsertByservice = {
      postId: 1,
      commentNum: 1,
      userId: 1,
      comment: "hi",
      level: 1,
    };

    const createCommentResultByservice = {
      postId: 1,
      commentNum: 1,
      userId: 1,
      comment: "hi",
      level: 1,
    };

    commentsService.commentsRepository.createComment = jest.fn(() => {
      return createCommentResultByservice;
    });

    const createComment = await commentsService.createComment(
      createCommentInsertByservice
    );

    expect(createComment).toEqual(createCommentResultByservice);
    expect(
      commentsService.commentsRepository.createComment
    ).toHaveBeenCalledTimes(1);
    expect(
      commentsService.commentsRepository.createComment
    ).toHaveBeenCalledWith(createCommentInsertByservice);

    // console.log(commentsService.commentsRepository);
    // console.log(createCommentSchemaByservice);
  });

  test("updateComment Method Success Case", async () => {
    const updateCommentInsertByservice = {
      commentId: 1,
      userId: 1,
      comment: "hi",
    };

    const updateCommentResultByservice = {
      commentId: 1,
      userId: 1,
      comment: "hi",
    };

    commentsService.commentsRepository.updateComment = jest.fn(() => {
      return updateCommentResultByservice;
    });

    const updateComment =
      await commentsService.updateComment(
        updateCommentInsertByservice
      );

    // console.log(updateCommentInsertByservice.userId);
    console.log(updateCommentInsertByservice.comment);
    expect(updateComment).toEqual(updateCommentResultByservice);
    expect(
      commentsService.commentsRepository.updateComment
    ).toHaveBeenCalledTimes(1);
    expect(
      commentsService.commentsRepository.updateComment
    ).toHaveBeenCalledWith(
      // { comment: updateCommentInsertByservice.comment }
      // {
      //   where: {
      //     userId: updateCommentInsertByservice.userId,
      //     commentId: updateCommentInsertByservice.commentId,
      //   },
      // }
    );
  });

  test("deleteComment Method Success Case", async () => {
    const deleteCommentInsertByservice = {
      commentId: 1,
      userId: 1,
    };

    const deleteCommentResultByservice = {};

    commentsService.commentsRepository.deleteComment = jest.fn(() => {
      return deleteCommentResultByservice;
    });

    const deleteComment =
      await commentsService.deleteComment(
        deleteCommentInsertByservice
      );
    
    expect(deleteComment).toEqual(deleteCommentResultByservice);
    
  });

});
