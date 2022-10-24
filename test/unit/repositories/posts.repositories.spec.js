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

describe("Posts Repository Create", () => {
  beforeEach(() => {
    req.body = newPost;
  });

  it("create가 함수인지 확인", () => {
    expect(typeof postsRepository.createPost).toBe("function");
  });

  it("create가 정상적으로 호출되는지 확인", async () => {
    await postsRepository.createPost(req, res, next);
    expect(postsModel.create).toBeCalledWith(newPost);
  });

  it("sholud return 201 reponse code", async () => {
    await postsRepository.createPost(req, res, next);
    expect(res.statusCode).toBe(201);
  });

  it("sholud return json body in response", async () => {
    postsModel.create.mockReturnValue(newPost);
    await postsRepository.createPost(req, res, next);
    expect(res._getJSONData()).tostrictEqual(newPost);
  });

  it("slhoud handle errors", async () => {
    const errorMessage = { message: "description property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    postsModel.create.mockReturnValue(rejectedPromise);
    await postsRepository.createPost(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
