const PostsController = require("../../../controller/posts");
const postsModel = require("../../../models/post");
const postsController = new PostsController();
const httpMocks = require("node-mocks-http");
const newPost = require("../../data/new-product.json");
postsModel.create = jest.fn();

describe("postsController", () => {
  test("createPost는 함수이다", () => {
    expect(typeof postsController.createPost).toBe("function");
  });

  test("should call postsController.createPost", () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;
    req.body = newPost;
    postsController.createPost(req, res, next);
    expect(postsModel.create).toBeCalled(newPost);
  });
});
