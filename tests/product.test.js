const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../app');
// const baseUrl = 'http://127.0.0.1:5000/api/products';

require("dotenv").config();

// async function clearCollection () {
//   const response = await fetch(baseUrl, {method: "DELETE"});
//   const deletedInfo = await response.json();
//   return deletedInfo;
// };

/* Connecting to the DB before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  // clearCollection();
});

/* Closing DB connection after each test. */
afterEach(async () => {
  //clearCollection();
  //await fetch(baseUrl, {method: "DELETE"});
  await mongoose.connection.close();
});

// describe("GET /api/products", () => {
//   it("should return all products", async () => {
//     const res = await request(app).get("/api/products");
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBe(0);
//   });
// });

// describe("POST /api/products", () => {
//   it("should create a product", async () => {
//     const res = await request(app).post("/api/products").send({
//       name: "Product 2",
//       price: 1009,
//       description: "Description 2"
//     });
//     expect(res.statusCode).toBe(201);
//     expect(res.body.name).toBe("Product 2");
//   });
// });

// describe("PUT /api/products/:id", () => {
//   it("should update a product", async () => {
//     const res = await request(app)
//       .patch("api/products/6331abc9e9ececcc2d449e44")
//       .send({
//         name: "Product 4",
//         price: 104,
//         description: "Description 4"
//       });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.price).toBe(104);
//   });
// });

// describe("DELETE /api/products/:id", () => {
//   it("should delete a product", async () => {
//     const res = await request(app).delete(
//       "/api/products/6331abc9e9ececcc2d449e44"
//     );
//     expect(res.statusCode).toBe(200);
//   })
// });

describe("DELETE /api/products", () => {
  it("should delete all products", async () => {
    const res = await request(app).delete("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.acknowledged).toBe(true);
  })
});



