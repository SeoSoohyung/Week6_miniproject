const { Members } = require("../models");

class MembersRepository {
  createMember = async (userId, nickname, password) => {
    const createMembersData = await Members.create({
      userId,
      nickname,
      password,
    });

    return createMembersData;
  };

  findMember = async(userId) => {
    const member = await Members.findOne({where:{userId}})
    return member
  }
}

module.exports = MembersRepository;