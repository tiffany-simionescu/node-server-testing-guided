// test("a placeholder test", async () => {
//   expect(2 + 2).toBe(4)
// })

const supertest = require("supertest");
const server = require("./api/server");
const db = require("./data/dbConfig");

beforeEach(async () => {
  await db.seed.run()
})

test("Welcome Route", async () => {
  const res = await supertest(server).get("/")
  // console.log(res);

  // Does it return the expected status code?
  expect(res.status).toBe(200)

  // Does it return the expected data format?
  expect(res.type).toBe("application/json")

  // Does it return the expected data?
  expect(res.body.message).toBe("Welcome")
  // For non-case sensitive
  // expect(res.body.message).toMatch(/welcome/i)
})

// TDD - create tests before the code is written
// supertest will have a server instance and create a mock server
test("get hobbit list", async () => {
  const res = await supertest(server).get("/hobbits");
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
  expect(res.body.length).toBeGreaterThan(0)
  expect(res.body[0].id).toBe(1)
  expect(res.body[0].name).toBe("sam")
})

test("create hobbit router", async () => {
  const res = await supertest(server)
      .post('/hobbits')
      .send({ name: "gaffer" })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
  expect(res.body).toEqual({ id: 5, name: "gaffer" })
})