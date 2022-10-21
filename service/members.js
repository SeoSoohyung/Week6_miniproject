const MembersRepository = require("../repository/members");
const jwt = require("jsonwebtoken");

class MembersService {
  membersRepository = new MembersRepository();

  createMember = async (userId, nickname, password) => {
    const createMembersData = await this.membersRepository.createMember(
      userId,
      nickname,
      password
    );
    return createMembersData;
  };

  findMember = async (userId, password) => {
    const member = await this.membersRepository.findMember(userId);
    if (!member || password !== member.password) {
      throw new Error("닉네임 또는 비밀번호가 일치하지 않습니다.")      
    }
    return { token: jwt.sign({ userId: member.userId }, "week6-mini-project") };
  };
}

module.exports = MembersService;
