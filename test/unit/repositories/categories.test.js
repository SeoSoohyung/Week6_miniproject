const CategoriesRepository = require("../../../repository/categories");
const CategoriesModel = require("../../../models/category");
const httpMocks = require("node-mocks-http");
const newCategories = { name: "코드" };
const categoriesRepository = new CategoriesRepository();
const CategoriesController = require("../../../controller/categories");
const categoriesController = new CategoriesController();
CategoriesModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("CREATE categories", () => {
  beforeEach(() => {
    req.body = newCategories;
  });

  it("Repo의 createCategories가 함수인지 확인", () => {
    expect(typeof categoriesRepository.createCategory).toBe("function");
  });

  it("Repo의 createPost가 정상적으로 호출되는지 확인", async () => {
    await categoriesRepository.createCategory(req, res, next);
    expect(CategoriesModel.create).toBeCalledWith(newCategories);
  });

  it("createCategories의 statusCode가 200으로 뜨는지 확인", async () => {
    await categoriesController.createCategories(req, res, next);
    expect(res.statusCode).toBe(200);
  });

  it("createCategories의 body가 json의 형태로 리턴되는지 확인", async () => {
    await categoriesController.createCategories(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newCategories);
  });

  it("createPost의 에러 핸들링이 정상적으로 작동되는지 확인", async () => {
    const errorMessage = { message: "에러 메세지" };
    const rejectedPromise = Promise.reject(errorMessage);
    CategoriesModel.create.mockReturnValue(rejectedPromise);
    await categoriesController.createCategories(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
