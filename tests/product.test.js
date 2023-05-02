const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../app');
//const URI = process.env.MONGO_URI;

require("dotenv").config();

/* Connecting to the DB before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing DB connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(0);
  });
});

describe("POST /api/products", () => {
  it("should create a product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "Product 2",
      price: 1009,
      description: "Description 2"
    });
    console.log("hellooooo");
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Product 2");
  });
});


