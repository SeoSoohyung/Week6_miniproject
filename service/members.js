const MembersRepository = require("../repository/members");

class MembersService {
  membersRepository = new MembersRepository();
  createMember = async (userId, nickname, password) => {
    try {
      const existsUsers = await this.membersRepository.findAllMembers(nickname);
      if (existsUsers.length !== 0) {
        throw new Error("닉네임이 이미 존재합니다.");
        return;
      }

      const existsUserId = await this.membersRepository.findAllMembers(userId);
      if (existsUserId.length !== 0) {
        throw new Error("아이디가 이미 존재합니다.");
        return;
      }

      // key값?
      const hashPassword = await pbkdf2(password, key, 121381, 121, "sha512");
      password = hashPassword;
      const createUserData = await this.membersRepository.createMember(
        userId,
        nickname,
        password
      );
      return createUserData;
    } catch (e) {
      return;
    }
  };

}

module.exports = MembersService;
