const CommentsRepository = require("../../../repository/comments");

const mockCommentsModel = () => ({
  findAll: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
});

describe("comments Repositories Layer Test", () => {
  let commentsRepository = new CommentsRepository();
  commentsRepository.Comments = mockCommentsModel();
   // commentsRepository.Comments => this.Comments = Comments 를 가르킴
  //원래 this.Comments = Comments를 해서 models의 데이터베이스의 값을 넣어줬는데 그값을 mockCommentsModel()을 할당함 mockCommentsModel()는 가짜 models임
  
  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test("findComment Method Success Case", async () => {
    const findCommentResult = {
      postId: 1,
    };

    const findCommentInsert = {
      postId: 1,
    };

    commentsRepository.Comments.findAll = jest.fn(() => {
      //현재 findAll은 위에 findAll: jest.fn()로 명시되어있다
      return findCommentResult;
    });

    const findComment = await commentsRepository.findComment(findCommentInsert);
    // const findComment = await this.Comments.findAll({ where: { postId } })와 똑같음 다만 findAll()이 mock(가짜)임

    // console.log(commentsRepository.Comments.findAll);
    // findAll이 한번 실행되었는가
    expect(commentsRepository.Comments.findAll).toHaveBeenCalledTimes(1);

    //findAll의 mock으로 실행된 값과 인스턴스findComment클래스의 값과 같은지 확인
    // console.log(findComment, findCommentResult); //둘다 [] [] 으로 찍힘
    expect(findComment).toEqual(findCommentResult);

    // commentsRepository.Comments.findAll을 실행했을 때 내가 생각한 값과 같은지 확인
    expect(commentsRepository.Comments.findAll).toHaveBeenCalledWith({
      where: { postId: findCommentInsert.postId },  // postId에 findCommentInsert의 postId를 넣는다
    });
  });

  test("createComment Method Success Case", async () => {
    const createCommentInsert = {
      postId: 1,
      commentNum: 1,
      userId: 1,
      comment: "hi",
      level: 1,
    };

    const createCommentResult = {
      postId: 1,
      commentNum: 1,
      userId: 1,
      comment: "hi",
      level: 1,
    };

    commentsRepository.Comments.create = jest.fn(() => {
      return createCommentResult;
    });

    const createComment = await commentsRepository.createComment(
      createCommentInsert
    );

    // console.log(createCommentSchema);
    // console.log(createCommentInsert);
    // console.log(createComment);
    expect(commentsRepository.Comments.create)
      .toHaveBeenCalledTimes(1);
    expect(createComment).toEqual(createCommentResult);
    expect(commentsRepository.Comments.create)
      .toHaveBeenCalledWith(createCommentInsert);
  });

  test("updateComment Method Success Case", async () => {
    const updateCommentInsert = {
      commentId: 1,
      userId: 1,
      comment: "hi",
    };

    const updateCommentResult = {
      commentId: 1,
      userId: 1,
      comment: "hi",
    };

    commentsRepository.Comments.update = jest.fn(() => {
      return updateCommentResult;
    });

    const updateComment = await commentsRepository.updateComment(
      updateCommentInsert
    );

    // console.log(updateCommentResult);
    // console.log(updateCommentInsert);
    // console.log(updateComments);

    expect(commentsRepository.Comments.update).toHaveBeenCalledTimes(1);
    expect(updateComment).toEqual(updateCommentResult);
    expect(commentsRepository.Comments.update).toHaveBeenCalledWith(
      { comment: updateCommentInsert.comment },
      {
        where: {
          userId: updateCommentInsert.userId,
          commentId: updateCommentInsert.commentId,
        },
      }
    );
  });

  test("deleteComment Method Success Case", async () => {
    const deleteCommentInsert = {
      commentId: 1,
      userId: 1
    };

    const deleteCommentResult = {};

    commentsRepository.Comments.destroy = jest.fn(() => {
      return deleteCommentResult;
    });

    const deleteComment = await commentsRepository.deleteComment(
      deleteCommentInsert
    );
    
    // console.log(deleteComment)  // {}
    // console.log(deleteCommentResult); // {}
    // console.log(deleteCommentInsert) // {commentId: 1,userId: 1};
    expect(deleteComment).toEqual(deleteCommentResult);
    expect(commentsRepository.Comments.destroy).toHaveBeenCalledTimes(1);
    expect(commentsRepository.Comments.destroy).toHaveBeenCalledWith(
      { where: { commentId: deleteCommentInsert.commentId, userId: deleteCommentInsert.userId } }
    );
  });
});
