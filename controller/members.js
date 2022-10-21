const MembersService = require("../service/members");

class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    
      const { id, nickname, password, confirm } = req.body;

      await this.membersService.createMember(id, nickname, password, confirm);
      res.status(201).json({ message: "회원가입이 완료되었습니다." });    
      res.status(400).json({ message: e.message });    
  };

  LoginMember = async (req, res, next) => {
    try {
      const { id, password } = req.body;
      const LoginMemberData = await this.membersService.findMember(
        id,
        password
      );
      res.status(200).json({ data: LoginMemberData });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  updateMember = async (req, res, next) => {    
    const { nickname, password, confirm } = req.body;
    const { userId } = res.locals.user;
    const UpdateMember = await this.membersService.updateMember(
      userId,
      nickname,
      password,
      confirm
    );
    res
      .status(200)
      .json({ data: UpdateMember, message: "수정을 완료하였습니다." });
  };

  deleteMember = async (req, res, next) => {
    const { userId } = res.locals.user;
    await this.membersService.deleteMember(userId);

    res.status(200).json({ message: "삭제를 완료하였습니다." });
  };
}
module.exports = MembersController;
