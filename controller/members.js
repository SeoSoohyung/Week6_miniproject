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
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  updateMember = async (req, res, next) => {
    const { nickname, password, confirm } = req.body;
    const { id } = res.locals.user;
    const UpdateMember = await this.membersService.updateMember(
      id,
      nickname,
      password,
      confirm
    );
    res
      .status(200)
      .json({ data: UpdateMember, message: "수정을 완료하였습니다." });
  };

  deleteMember = async (req, res, next) => {
    const { id } = res.locals.user;
    await this.membersService.deleteMember(id);

    res.status(200).json({ message: "삭제를 완료하였습니다." });
  };
}
module.exports = MembersController;
