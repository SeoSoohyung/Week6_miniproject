//유저
const MembersRepository = require("../../../repository/members");

const createMembersInsertSchema = {
  id:"Seosu20000",
  nickname:"Seosooooo",
  password:"1234",
};

const findMemberResultSchema = {
  userId: 2,
  id:"Seosu20000",
  nickname:"Seosooooo",
  password:"1234",
  createdAt:"2022-10-22 10:27:53",
  updatedAt:"2022-10-22 10:27:53"    
}


const findOneMembersInsertSchemaByRepository = {
  id:"Seosu20000",     
};

const mockMembers = () => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

describe("Members Repository Layer Test", () => {
    let membersRepository = new MembersRepository();
    membersRepository.Members = mockMembers();

    beforeEach(() => {
    jest.resetAllMocks();
     });

    test("Members Repository Methos findMember", async () => {
    membersRepository.Members.findOne = jest.fn(() => {
      return findMemberResultSchema;
    });

    const Members = await membersRepository.findMember(
    findOneMembersInsertSchemaByRepository
    );
    membersRepository.Members.findOne = jest.fn(() => {
      return findMemberResultSchema
    })
    //findOne으로 검색한 결과값은 바로 반환
    expect(Members).toEqual(findMemberResultSchema);

    });

    
    test("createMembers Method toHaveBeenCalled", async () => {
    const Members = await membersRepository.createMember(
    createMembersInsertSchema
    );

    //메소드는 몇번 호출되었는지
    expect(membersRepository.Members.create).toHaveBeenCalledTimes(1);
  });
});
