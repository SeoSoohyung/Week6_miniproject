const { Members } = require("../models");

class MembersRepository {
  constructor(){
    this.Members = Members
  }
  createMember = async (id, nickname, password) => {
    const createMembersData = await this.Members.create({
      id,
      nickname,
      password,
    });

    return createMembersData;
  };

  findMember = async (id) => {
    const member = await this.Members.findOne({ where: { id } });
    return member;
  };

  findMemberbyNickname = async (nickname) => {
    const member = await this.Members.findOne({ where: { nickname } });
    return member;
  };

  updateMember = async (userId, nickname, password) => {
    const updateMember = await this.Members.update(
      { nickname, password },
      { where: { userId } }
    );
    return updateMember;
  };

  deleteMember = async (userId) => {
    await this.Members.destroy({ where: { userId } });
    return;
  };
}

module.exports = MembersRepository;
