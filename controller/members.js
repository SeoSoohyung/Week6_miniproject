const MembersService = require("../service/members");

class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    const { userId, nickname, password, confirm } = req.body;

    await this.membersService.createMember(userId, nickname, password, confirm);
    res.status(201).json({ message: "회원가입이 완료되었습니다." });
  };

  LoginMember = async (req, res, next) => {
    try {
      const { userId, password } = req.body;

      const LoginMemberData = await this.membersService.findMember(
        userId,
        password
      );
      res.status(200).json({ data: LoginMemberData });
    } catch (e) {res.status(400).json({message: e.message})
  };
}
}
module.exports = MembersController;
