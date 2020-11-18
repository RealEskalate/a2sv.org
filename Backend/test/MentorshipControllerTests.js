// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

let mongoose = require("mongoose");
const { expect } = chai;

let server = require("../index");
let { Mentorship } = require("../models/MentorshipModel");
chai.use(chaiHttp);

describe("Mentorship API", () => {
    let mentorship;
    beforeEach(async () => {
        mentorship = new Mentorship({
            _id: mongoose.Types.ObjectId(),
            name: "Adam Driver",
            email: "Manager@google.com",
            experience: "A veteran in the industry of 20 years",
            linkedin_url: "https://www.linkedin.com/in/khalid-sultan-2b3733141/",
        });
        await mentorship.save();
    });
    afterEach(async () => {
        await Mentorship.findByIdAndDelete(mentorship._id);
    });
    it("It should fetch a list of mentorships", async () => {
        let response = await chai
            .request(server)
            .get("/api/mentorship")
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });
    it("It should fetch a specific mentorships by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/mentorship/" + mentorship._id)
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("experience");
        expect(response.body).to.have.property("linkedin_url");
    });
    it("It should not fetch a specific mentorships by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/mentorship/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
    it("It should create an example of mentorships", async () => {
        let response = await chai
            .request(server)
            .post("/api/mentorship")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
                experience: "An actor with an algorithm to his name",
                linkedin_url: "https://www.linkedin.com/in/anteneh-admasu-699a3215b"
            });
        expect(response).to.have.status(201);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Kevin Bacon");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("experience");
        expect(response.body).to.have.property("linkedin_url");
        await Mentorship.findByIdAndDelete(response.body._id);
    });
    it("It should not create an example of mentorships", async () => {
        let response = await chai
            .request(server)
            .post("/api/mentorship")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
            });
        expect(response).to.have.status(422);
    });
    it("It should patch an example of mentorships", async () => {
        let response = await chai
            .request(server)
            .patch("/api/mentorship/" + mentorship._id)
            .send({
                experience: "Recently got hired by Google for an exuberant salary",
            });
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("experience");
        expect(response.body.experience).to.be.equal("Recently got hired by Google for an exuberant salary");
        expect(response.body).to.have.property("linkedin_url");
    });
    it("It should not patch a nonexisting example of mentorships", async () => {
        let response = await chai
            .request(server)
            .patch("/api/mentorship/" + mongoose.Types.ObjectId())
            .send({
                experience: "Actor@google.com",
            });
        expect(response).to.have.status(404);
    });
    it("It should not patch an example of mentorships", async () => {
        let response = await chai
            .request(server)
            .patch("/api/mentorship/" + mentorship._id)
            .send({
                email: "",
            });
        expect(response).to.have.status(422);
    });
    it("It should delete a existing example of mentorships", async () => {
        let insert = await chai
            .request(server)
            .post("/api/mentorship")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
                experience: "An actor with an algorithm to his name",
                linkedin_url: "https://www.linkedin.com/in/anteneh-admasu-699a3215b"
            });
        let response = await chai
            .request(server)
            .delete("/api/mentorship/" + insert.body._id)
            .send({});
        expect(response).to.have.status(200);
    });
    it("It should not delete an example of mentorships", async () => {
        let response = await chai
            .request(server)
            .delete("/api/mentorship/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
});
