const MembersService = require("../service/members");
const Joi = require("joi");

const schema = Joi.object({
  id: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{7,20}$")),
  nickname: Joi.string().min(4).max(20),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,30}$")),
  confirm: Joi.ref("password"),
});

class MembersController {
  membersService = new MembersService();

  SignupMember = async (req, res, next) => {
    try {
      const { id, nickname, password, confirm } = req.body;
      await schema.validateAsync(req.body);
      await this.membersService.createMember(id, nickname, password, confirm);
      res.status(201).json({ message: "회원가입이 완료되었습니다." });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  LoginMember = async (req, res, next) => {
    try {
      const { id, password } = req.body;
      const LoginMemberData = await this.membersService.findMember(
        id,
        password
      );
      res
        .status(200)
        .json({ data: LoginMemberData, message: "로그인 되었습니다." });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  updateMember = async (req, res, next) => {
    try {      
      const { userId } = res.locals.user;
      const { nickname, password, confirm } = req.body;
      await schema.validateAsync(req.body);
      const UpdateMember = await this.membersService.updateMember(
        userId,
        nickname,
        password,        
        confirm
      );
      res
        .status(200)
        .json({ data: UpdateMember, message: "수정을 완료하였습니다." });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };

  deleteMember = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      await this.membersService.deleteMember(userId);

      res.status(200).json({ message: "삭제를 완료하였습니다." });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  };
}
module.exports = MembersController;
