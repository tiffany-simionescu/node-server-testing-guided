const db = require("../data/dbConfig");
const hobbitsModel = require("./hobbitsModel");

// This will re-seed the db, so our data is fresh everytime
// This will help with the length test
beforeEach(async () => {
  await db.seed.run()
})

// These are called unit tests, no endpoints are tested here
describe("hobbits model", () => {
  test("getAll", async () => {
    const res = await hobbitsModel.getAll();
    expect(res.length).toBeGreaterThan(0);
  })
  test("findById", async () => {
    const res = await hobbitsModel.findById(1)
    expect(res.name).toBe("sam")
  })

  test("insert", async () => {
    await hobbitsModel.insert({ name: "bilbo" })
    const hobbits = await db("hobbits").select()
    expect(hobbits).toHaveLength(5)
  })

  test("update", async () => {
    await hobbitsModel.update(1, { name: "bilbo" })
    const hobbit = await hobbitsModel.findById(1)
    expect(hobbit.name).toBe("bilbo");
  })

  test("remove", async () => {
    await hobbitsModel.remove(1)
    const hobbits = await hobbitsModel.getAll()
    expect(hobbits).toHaveLength(3)
  })
})