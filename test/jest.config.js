module.exports = {
  testPathIngorePatterns: [
    "/node_modules/(?!my-package)(.*)",
    "/test/fixtures/",
    "/test/jest-grammars/",
  ],
  // 테스트 실행 시 각 TestCase에 대한 출력을 해줍니다.
  // jest --verbose와 동일한 역활을 함
  verbose: true,
};
