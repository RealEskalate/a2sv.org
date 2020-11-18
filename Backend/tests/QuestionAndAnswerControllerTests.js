// eslint-disable-next-line no-undef
process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')

let mongoose = require('mongoose')
const { expect } = chai

let server = require('../index')
let {QuestionAndAnswer} = require('../models/QuestionAndAnswerModel')
chai.use(chaiHttp);

describe('Question And Answer API', () => {
    let questionAndAnswer;
    beforeEach(async () => {
        questionAndAnswer = new QuestionAndAnswer({
            _id: mongoose.Types.ObjectId(),
            name: 'Adam Driver',
            email: 'Manager@google.com',
            profession: 'Manager',
            bio: 'A veteran in the industry of 20 years'
        });
        await questionAndAnswer.save();
    })
    afterEach(async () => {
        await QuestionAndAnswer.findByIdAndDelete(questionAndAnswer._id)
    })
    it("It should fetch a list of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .get("/api/questionAndAnswer")
            .send({})
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object")
        expect(response.body.data).to.be.a("array")
        expect(response.body.data).to.have.lengthOf(1);
    })
    it("It should fetch a specific Questions and Answers by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/questionAndAnswer/"+questionAndAnswer._id)
            .send({});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("profession");
        expect(response.body).to.have.property("bio");
    });
    it("It should not fetch a specific Questions and Answers by id", async () => {
        let response = await chai
            .request(server)
            .get("/api/questionAndAnswer/"+mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
    it("It should create an example of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .post("/api/questionAndAnswer")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
                profession: "Actor",
                bio: "An actor with an algorithm to his name",
            });
        expect(response).to.have.status(201);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Kevin Bacon");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("profession");
        expect(response.body).to.have.property("bio");
        await QuestionAndAnswer.findByIdAndDelete(response.body._id);
    });
    it("It should not create an example of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .post("/api/questionAndAnswer")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
            });
        expect(response).to.have.status(422);
        expect(response.body).to.be.a("object");
    });
    it("It should patch an example of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .patch("/api/questionAndAnswer/" + questionAndAnswer._id)
            .send({
                profession: "Actor",
            });
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.be.equal("Adam Driver");
        expect(response.body).to.have.property("email");
        expect(response.body).to.have.property("profession");
        expect(response.body.profession).to.be.equal("Actor");
        expect(response.body).to.have.property("bio");
    });
    it("It should not patch a nonexisting example of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .patch("/api/questionAndAnswer/" + mongoose.Types.ObjectId())
            .send({
                email: "Actor",
            });
        expect(response).to.have.status(404);
    });
    it("It should not patch an example of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .patch("/api/questionAndAnswer/" + questionAndAnswer._id)
            .send({
                email: "",
            });
        expect(response).to.have.status(422);
    });    
    it("It should delete a existing example of Questions and Answers", async () => {
        let insert = await chai
            .request(server)
            .post("/api/questionAndAnswer")
            .send({
                name: "Kevin Bacon",
                email: "Actor@google.com",
                profession: "Actor",
                bio: "An actor with an algorithm to his name",
            });
        let response = await chai
            .request(server)
            .delete("/api/questionAndAnswer/" + insert.body._id)
            .send({});
        expect(response).to.have.status(200);
    });
    it("It should not delete an example of Questions and Answers", async () => {
        let response = await chai
            .request(server)
            .delete("/api/questionAndAnswer/" + mongoose.Types.ObjectId())
            .send({});
        expect(response).to.have.status(404);
    });
})
