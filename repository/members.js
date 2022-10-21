const { Members } = require("../models");

class MembersRepository {
  createMember = async (id, nickname, password) => {
    const createMembersData = await Members.create({
      id,
      nickname,
      password,
    });

    return createMembersData;
  };

  findMember = async (id) => {
    const member = await Members.findOne({ where: { id } });
    return member;
  };

  updateMember = async (userId, nickname, password) => {
    const updateMember = await Members.update(
      { nickname, password },
      { where: { userId } }
    );
    return updateMember;
  };
  deleteMember = async (userId) => {
    await Members.destroy({ where: { userId } });
    return;
  };
}

module.exports = MembersRepository;
