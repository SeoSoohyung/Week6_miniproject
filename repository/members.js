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

  findMember = async (userId) => {
    const member = await Members.findOne({ where: { userId } });
    return member;
  };


  updateMember = async (id, nickname, password) => {
    const updateMember = await Members.update(
      { nickname, password },
      { where: { id } }
    );
    return updateMember;
  };
  deleteMember = async (id) => {
    await Members.destroy({ where: { id } });
    return;
  };

}

module.exports = MembersRepository;
