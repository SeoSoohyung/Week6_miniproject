const httpMocks = require("node-mocks-http");
const PostsRepository = require("../../../repository/posts");
const postsModel = require("../../../models/post");
const newPost = require("../../data/new-product.json");
const postsRepository = new PostsRepository();

postsModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});
describe("posts의 postsRepository 테스트", () => {
  // createPost가 함수인지 확인
  test("createPost가 함수인지 확인", () => {
    expect(typeof postsRepository.createPost).toBe("function");
  });

  // posts모델의 create가 정삭적으로 작동되는지 확인
  test("Posts모델의 create가 정삭적으로 작동되는지 확인", async () => {
    await postsRepository.createPost(req, res, next);
    expect(postsModel.create).toBeCalledWith(newPost);
  });
});
