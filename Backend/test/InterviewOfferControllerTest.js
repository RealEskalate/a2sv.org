// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

let mongoose = require("mongoose");
const { expect } = chai;

let server = require("../index");
let { InterviewOffer } = require("../models/InterviewOfferModel");
chai.use(chaiHttp);

describe("Interview Offer API", () => {
    let interviewOffer;
    beforeEach(async () => {
        interviewOffer = new InterviewOffer({
            _id: mongoose.Types.ObjectId(),
            name: "Adam Driver",
            company_email: "Manager@google.com",
            message: "Hi, I'm a tech veteran who's been in the industry of 20 years. I would like to know more about you and your peers, so please I'll be delighted if you reached out to me.",
        });
        await interviewOffer.save();
    });
    afterEach(async () => {
        await InterviewOffer.findByIdAndDelete(interviewOffer._id);
    });
    it("It should fetch a list of interview offers", async () => {
        let response = await chai
            .request(server)
            .get("/api/interviewOffer")
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });
    it("It should fetch a specific interview offer by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/interviewOffer/" + interviewOffer._id)
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("company_email");
        expect(response.body).to.have.property("message");
    });
    it("It should not fetch a specific interview offers by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/interviewOffer/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
    it("It should create an example of interview offers", async () => {
        let response = await chai
            .request(server)
            .post("/api/interviewOffer")
            .send({
                name: "Kevin Bacon",
                company_email: "Actor@google.com",
                message:
                    "Hi, I'm a tech veteran who's been in the industry of 20 years. I would like to know more about you and your peers, so please I'll be delighted if you reached out to me.",
            });
        expect(response).to.have.status(201);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Kevin Bacon");
        expect(response.body).to.have.property("company_email");
        expect(response.body).to.have.property("message");
        await InterviewOffer.findByIdAndDelete(response.body._id);
    });
    it("It should not create an example of interview offers", async () => {
        let response = await chai.request(server).post("/api/interviewOffer").send({
            name: "Kevin Bacon"
        });
        expect(response).to.have.status(422);
    });
    it("It should patch an example of interview offers", async () => {
        let response = await chai
            .request(server)
            .patch("/api/interviewOffer/" + interviewOffer._id)
            .send({
                message:
                    "For more information, contact me with this number +251911223344",
            });
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("company_email");
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.be.equal(
            "For more information, contact me with this number +251911223344"
        );
    });
    it("It should not patch a nonexisting example of interview offers", async () => {
        let response = await chai
            .request(server)
            .patch("/api/interviewOffer/" + mongoose.Types.ObjectId())
            .send({
                company_email: "Actor@google.com",
            });
        expect(response).to.have.status(404);
    });
    it("It should not patch an example of interview offers", async () => {
        let response = await chai
            .request(server)
            .patch("/api/interviewOffer/" + interviewOffer._id)
            .send({
                company_email: "",
            });
        expect(response).to.have.status(422);
    });
    it("It should delete a existing example of interview offers", async () => {
        let insert = await chai
            .request(server)
            .post("/api/interviewOffer")
            .send({
                name: "Kevin Bacon",
                company_email: "Actor@google.com",
                message:
                    "Hi, I'm a tech veteran who's been in the industry of 20 years. I would like to know more about you and your peers, so please I'll be delighted if you reached out to me.",
            });
        let response = await chai
            .request(server)
            .delete("/api/interviewOffer/" + insert.body._id)
            .send({});
        expect(response).to.have.status(200);
    });
    it("It should not delete an example of interview offers", async () => {
        let response = await chai
            .request(server)
            .delete("/api/interviewOffer/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
});
