const MembersRepository = require("../repository/members");
const jwt = require("jsonwebtoken");

class MembersService {
  membersRepository = new MembersRepository();

  createMember = async (id, nickname, password) => {
    const createMembersData = await this.membersRepository.createMember(
      id,
      nickname,
      password
    );
    return createMembersData;
  };

  findMember = async (id, password) => {
    const member = await this.membersRepository.findMember(id);
    if (!member || password !== member.password) {
      throw new Error("닉네임 또는 비밀번호가 일치하지 않습니다.")      
    }
    return { token: jwt.sign({ userId: member.userId }, "week6-mini-project") };
  };

  updateMember = async(userId, nickname, password) => {
    await this.membersRepository.updateMember(userId, nickname,password)
    await this.membersRepository.findMember(userId)
    return      
  }

  deleteMember = async(userId) => {
    console.log(userId)
    await this.membersRepository.deleteMember(userId);
    return
  }
}

module.exports = MembersService;
