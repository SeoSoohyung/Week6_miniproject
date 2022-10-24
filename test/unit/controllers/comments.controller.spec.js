const CommentsController = require('../../../controller/comments');

const mockCommentsService = () => ({
  createComment: jest.fn(),
  updateComment: jest.fn(),
  deleteComment: jest.fn()
});

let mockRequest = {
  body: jest.fn()
};

let mockResponse = {
  status: jest.fn(),
  json: jest.fn()
};


describe('comments Controllers Layer Test', () => {
  let commentsController = new CommentsController();
  commentsController.commentsService = mockCommentsService();

  beforeEach(() => {
    // 모든 Mock을 초기화합니다.
    jest.resetAllMocks();
  });

  test('createComment Method Success Case', async () => {
    mockRequest.body = {
      userId: 1,
      comment: "hi",
      level: 1
    };

    mockRequest.params = {
      postId: 1,
      commentNum: 1
    };

    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    await commentsController.createComment(mockRequest, mockResponse);

    expect(commentsController.commentsService.createComment)
      .toHaveBeenCalledTimes(1);
    expect(commentsController.commentsService.createComment)
      .toHaveBeenCalledWith(mockRequest.body);

    try {
      expect(mockResponse.status)
        .toHaveBeenCalledWith(201);
      expect(mockResponse.json)
        .toHaveBeenCalledWith(" message: 댓글 생성에 성공했습니다. ");
    } catch (error) {
      expect(mockResponse.status)
        .toHaveBeenCalledWith(400);
      expcet(mockResponse.json)
        .toHaveBeenCalledWith("message : error");
    }
    
  });

  test('updateComment Method Success Case', async () => {
    mockRequest.body = {
      comment: "hi",
      userId: 1
    };

    mockRequest.params = {
      commentId: 1
    };

    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    await commentsController.updateComment(mockRequest, mockResponse);
    expect(commentsController.commentsService.updateComment)
      .toHaveBeenCalledTimes(1);

    try {
      expect(mockResponse.status)
        .toHaveBeenCalledWith(201);
      expect(mockResponse.json)
        .toHaveBeenCalledWith("message : 댓글이 수정되었습니다.");
    } catch (error) {
      expect(mockResponse.status)
        .toHaveBeenCalledWith(400);
      expcet(mockResponse.json)
        .toHaveBeenCalledWith("message : error");
    }

  });

  test('deleteComment Method Success Case', async () => {

    mockRequest.params = {
      commentId: 1,
      userId: 1
    };

    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });

    await commentsController.deleteComment(mockRequest, mockResponse);

    try {
      expect(mockResponse.status)
        .toHaveBeenCalledWith(201);
      expect(mockResponse.json)
        .toHaveBeenCalledWith("message : 댓글이 삭제되었습니다.");
    } catch (error) {
      expect(mockResponse.status)
        .toHaveBeenCalledWith(400);
      expcet(mockResponse.json)
        .toHaveBeenCalledWith("message : error");
    }
  });


});