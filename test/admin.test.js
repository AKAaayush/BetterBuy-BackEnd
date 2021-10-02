// use the path of your model
const Register = require("../model/Admin");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://127.0.0.1:27017/BetterBuy";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("Register Schema test anything", () => {
  // the code below is for insert testing
  it("Add User testing anything", () => {
    const user = {
      name: "dummy",
      email: "dummy@gmail.com",
      password: "dummy",
    };

    return Register.create(user).then((pro_ret) => {
      expect(pro_ret.fname).toEqual("dummy");
    });
  });

  // it("to test the update", async () => {
  //   return Register.findOneAndUpdate(
  //     { _id: Object("6157f7334818bb3938be6b79") },
  //     { $set: { fname: "dummy name" } }
  //   ).then((pp) => {
  //     expect(pp.fname).toEqual("dummy name");
  //   });
  // });
  // the code below is for delete testing
  // it("to test the delete user is working or not", async () => {
  //   const status = await Register.deleteOne({
  //     _id: "6157f7c68acd0d23c0a33120",
  //   });
  //   expect(status.ok).toBe(1);
  // });
});
