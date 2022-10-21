const { Members } = require("../models");

class MembersRepository {
  createMember = async (userId, nickname, password) => {
    const createUserData = await this.Members.create({
      userId,
      nickname,
      password,
    });

    return createUserData;
  };
}

module.exports = MembersRepository;
