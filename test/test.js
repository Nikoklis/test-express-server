const assert = require("assert");
const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();

describe("Students", () => {
  describe("GET /", () => {
    // Test to get all students record
    it("should get all students record", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
    // Test to get single student record
    it("should get a single student record", done => {
      const id = 1;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test to get single student record
    it("should not get a single student record", done => {
      const id = 5;
      chai
        .request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
