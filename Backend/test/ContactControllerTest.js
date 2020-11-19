// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");
const mongoose = require("mongoose");

const { expect } = chai;

let server = require("../index");
let { Contact } = require("../models/ContactModel");
chai.use(chaiHttp);

describe("Contact API", () => {
    let contact;
    beforeEach(async () => {
        contact = new Contact({
            _id: mongoose.Types.ObjectId(),
            name: "Darth Vader",
            email: "vader@tatooine.com",
            subject: "Death ray usage manual request.",
            message: "test..........."
        });
        await contact.save();
    });

    afterEach(async () => {
        await Contact.findByIdAndDelete(contact._id);
    });

    
    it("It should fetch all contact ", async () => {
        let response = await chai
            .request(server)
            .get("/api/contact")
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });

    it("It should fetch all contact  with name = vader ", async () => {
        let response = await chai
            .request(server)
            .get("/api/contact?name=vader")
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);

    });

    it("It should fetch all contact  with email = vader@tatooine.com ", async () => {
        let response = await chai
            .request(server)
            .get("/api/contact?email=vader@tatooine.com")
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });

    it("It should fetch all contact  with given subject ", async () => {
        let response = await chai
            .request(server)
            .get("/api/contact?subject=Death ray")
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });

    it("It should fetch all contact  with given query params ", async () => {
        let response = await chai
            .request(server)
            .get("/api/contact?email=vader@tatooine.com&subject=Death ray")
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.data).to.be.a("array");
        expect(response.body.data).to.have.lengthOf(1);
    });


    it("It should fetch contact by id ", async () => {
        let response = await chai
            .request(server)
            .get(`/api/contact/${contact._id}`)
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
    });


    it("It should add contact ", async () => {   
        let response = await chai
            .request(server)
            .post("/api/contact")
            .send({
                name: "Darth Vader",
                email: "vader@tatooine.com",
                subject: "Death ray usage manual request.",
                message: "test..........."
            });
        expect(response).to.have.status(201);
        expect(response.body).to.be.a("object");
        await Contact.findByIdAndDelete(response.body._id)
    });

    it("It should not add contact ", async () => {   
        let response = await chai
            .request(server)
            .post("/api/contact")
            .send({
                name: "Darth Vader",
                subject: "Death ray usage manual request.",
                message: "test..........."
            });
        expect(response).to.have.status(422);
        expect(response.body).to.be.a("object");
    });

    it("It should not add contact ", async () => {   
        let response = await chai
            .request(server)
            .post("/api/contact")
            .send({
                email: "vader@tatooine.com",
                subject: "Death ray usage manual request.",
                message: "test..........."
            });
        expect(response).to.have.status(422);
        expect(response.body).to.be.a("object");
    });

    it("It should not add contact ", async () => {   
        let response = await chai
            .request(server)
            .post("/api/contact")
            .send({
                name: "Darth Vader",
                email: "vader@tatooine.com",
                message: "test..........."
            });
        expect(response).to.have.status(422);
        expect(response.body).to.be.a("object");
    });

    it("It should not add contact ", async () => {   
        let response = await chai
            .request(server)
            .post("/api/contact")
            .send({
                name: "Darth Vader",
                email: "vader@tatooine.com",
                subject: "Death ray usage manual request."
            });
        expect(response).to.have.status(422);
        expect(response.body).to.be.a("object");
    });


    it("It should update the contact", async () => {   
        let response = await chai
            .request(server)
            .patch(`/api/contact/${contact._id}`)
            .send({email: "vader@empire.com"});
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.email).to.equal("vader@empire.com");
    });

    it("It should not update the contact", async () => {   
        let response = await chai
            .request(server)
            .patch(`/api/contact/d4es23sdsds32ds`)
            .send({email: "vader@empire.com"});
        expect(response).to.have.status(500);
    });

    it("It should delete contact", async () => {   
        let response = await chai
            .request(server)
            .delete(`/api/contact/${contact._id}`)
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
    });

    it("It should not delete contact", async () => {   
        let response = await chai
            .request(server)
            .delete(`/api/contact/d45566hj23j2h32`)
        expect(response).to.have.status(500);
    });

})
