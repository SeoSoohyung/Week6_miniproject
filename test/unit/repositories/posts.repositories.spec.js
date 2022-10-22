//게시글
const jest = require("jest");
const PostsRepository = require("../../../repository/posts");

const mockPostModel = () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  delete: jest.fn(),
});
describe("posts Repository Layer Test", () => {
  let postsRepository = new PostsRepository();
  postsRepository.Posts = mockPostModel();

  beforeEach(() => {
    jest.resetAllMock();
  });

  test("Posts Repository Method findAllPost", async () => {
    const posts = await postsRepository.findAllPost({});
    expect(posts).toBeUndefinde();
    console.log("Posts", posts);
  });
});
