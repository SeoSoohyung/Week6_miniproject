const MembersRepository = require("../repository/members");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class MembersService {
  membersRepository = new MembersRepository();

  createMember = async (id, nickname, password) => {
    const existsId = await this.membersRepository.findMember(id);    
    if (existsId) {
      throw { message: "아이디가 이미 존재합니다" };
    }
    const existsNickname = await this.membersRepository.findMemberbyNickname(
      nickname
    );
    if (existsNickname) {
      throw { message: "닉네임이 이미 존재합니다." };
    } 
    const salt = await bcrypt.genSalt(10);
    const enpryptedPW = bcrypt.hashSync(password, salt);
    password = enpryptedPW;
    const createMembersData = await this.membersRepository.createMember(
      id,
      nickname,
      password
    );
    return createMembersData;
  };

  findMember = async (id, password) => {
    const member = await this.membersRepository.findMember(id);
    const validPassword = await bcrypt.compare(password, member.password);
    if (!member || !validPassword) {
      throw { message: "아이디 또는 비밀번호가 일치하지 않습니다." };
    }
    return { token: jwt.sign({ userId: member.userId }, "week6-mini-project") };
  };

  updateMember = async (userId, nickname, password) => {
    const existsNickname = await this.membersRepository.findMember(nickname);
    if (existsNickname.length !== 0) {
      throw { message: "닉네임이 이미 존재합니다" };
    }
    await this.membersRepository.updateMember(userId, nickname, password);
    return;
  };

  deleteMember = async (userId) => {
    await this.membersRepository.deleteMember(userId);
    return;
  };
}

module.exports = MembersService;
