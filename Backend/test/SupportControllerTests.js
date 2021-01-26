// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

let mongoose = require("mongoose");
const { expect } = chai;

let server = require("../index");
let { Support } = require("../models/SupportModel");
chai.use(chaiHttp);

describe("Support API", () => {
    let support;
    beforeEach(async () => {
        support = new Support({
            _id: mongoose.Types.ObjectId(),
            name: "Adam Driver",
            email: "Manager@google.com",
            experience: "A veteran in the industry of 20 years",
            way: "Q&A",
        });
        await support.save();
    });
    afterEach(async () => {
        await Support.findByIdAndDelete(support._id);
    });
    it("It should fetch a list of supports", async () => {
        let response = await chai
            .request(server)
            .get("/api/support")
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });
    it("It should fetch a specific supports by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/support/" + support._id)
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("experience");
        expect(response.body).to.have.property("way");
    });
    it("It should not fetch a specific supports by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/support/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
    it("It should create an example of supports", async () => {
        let response = await chai
            .request(server)
            .post("/api/support")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
                experience: "An actor with an algorithm to his name",
                way: "Mentor",
            });
        expect(response).to.have.status(201);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Kevin Bacon");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("experience");
        expect(response.body).to.have.property("way");
        await Support.findByIdAndDelete(response.body._id);
    });
    it("It should not create an example of supports", async () => {
        let response = await chai
            .request(server)
            .post("/api/support")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
            });
        expect(response).to.have.status(422);
    });
    it("It should patch an example of support", async () => {
        let response = await chai
            .request(server)
            .patch("/api/support/" + support._id)
            .send({
                way: "Recruit",
            });
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("experience");
        expect(response.body.way).to.be.equal("Recruit");
    });
    it("It should not patch a nonexisting example of supports", async () => {
        let response = await chai
            .request(server)
            .patch("/api/support/" + mongoose.Types.ObjectId())
            .send({
                way: "Recruit",
            });
        expect(response).to.have.status(404);
    });
    it("It should not patch an example of supports", async () => {
        let response = await chai
            .request(server)
            .patch("/api/support/" + support._id)
            .send({
                email: "",
            });
        expect(response).to.have.status(422);
    });
    it("It should delete a existing example of supports", async () => {
        let insert = await chai
            .request(server)
            .post("/api/support")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
                experience: "An actor with an algorithm to his name",
                way: "Other",
            });
        let response = await chai
            .request(server)
            .delete("/api/support/" + insert.body._id)
            .send({});
        expect(response).to.have.status(200);
    });
    it("It should not delete an example of supports", async () => {
        let response = await chai
            .request(server)
            .delete("/api/support/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
});
