const MembersService = require("../service/members");


class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    try {
      const { userId, nickname, password, confirm } = req.body;

      await this.membersService.createMember(
        userId,
        nickname,
        password,
        confirm
      );
      res.status(201).json({ message: "회원가입이 완료되었습니다." });
    } catch (e) {
      return res.status(400).json({ code: 400, message: e.message });
    }
  };
}

module.exports = MembersController;