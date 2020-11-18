// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

const { expect } = chai;

let server = require("../index");
let { Information } = require("../models/Information");
chai.use(chaiHttp);

describe("Information API", () => {
    let information;
    const non_existing_id = "5fb41302700b9743133fcd41"
    const invalid_id = "5fb41302700b9743133"
    beforeEach(async () => {
        information = new Information({
            title: "Test title",
            note: "This is the note for the test information"
        });
        await information.save();
    });
    afterEach(async () => {
        await Information.deleteMany({});
    });

    describe("GET information ", () => {
        it("It should fetch all information with pagination", async () => {
            let response = await chai
                .request(server)
                .get("/api/information")
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });

        it("It should fetch information by id - valid id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/information/${information._id}`)
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
        });

        it("It should fetch information by id - non-existing id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/information/${non_existing_id}`)
                .send({});
            expect(response).to.have.status(404);
            expect(response.text).to.equal("Information not found!");
        });

        it("It should not fetch information by id - invalid id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/information/${invalid_id}`)
                .send({});
            expect(response).to.have.status(500);
            expect(response.text).to.contain("server error");
        });
    });

    describe("POST information ", () => {
        const informationObject = {
            title: "Project Launch",
            note: "Tracksym will be launched"
        }
        it("It should add information without description", async () => {   
            let response = await chai
                .request(server)
                .post("/api/information")
                .send(informationObject);
            expect(response).to.have.status(201);
            expect(response.body).to.be.a("object");
        });

        it("It should add information with description text", async () => {   
            informationObject.description = "All team mates must attend"
            let response = await chai
                .request(server)
                .post("/api/information")
                .send(informationObject);
            expect(response).to.have.status(201);
            expect(response.body).to.be.a("object");
            expect(response.body).to.haveOwnProperty("description")
        });

        it("It should add information with description object", async () => {   
            informationObject.description = {
                time: "10:30 LT",
                place: "Office 101"
            }
            let response = await chai
                .request(server)
                .post("/api/information")
                .send(informationObject);
            expect(response).to.have.status(201);
            expect(response.body).to.be.a("object");
            expect(response.body).to.haveOwnProperty("description")
        });

        it("It should not add information with missing required attribute", async () => {   
            const invalidInfoObject = {
                title: "Project title"
            }
            let response = await chai
                .request(server)
                .post("/api/information")
                .send(invalidInfoObject);
            expect(response).to.have.status(422);
        });
    
    });

    describe("PUT information ", () => {

        it("It should update information without valid attribute", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/information/${information._id}`)
                .send({title: "Project Launch II"});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.title).to.equal("Project Launch II");
        });

        it("It should update information without new description attribute", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/information/${information._id}`)
                .send({description: "New description"});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body).to.haveOwnProperty("description");
        });

        it("It should not update information - non-existing id", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/information/${non_existing_id}`)
                .send({description: "New description"});
            expect(response).to.have.status(404);
        });
        
        it("It should not update information - invalid id", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/information/${invalid_id}`)
                .send({description: "New description"});
            expect(response).to.have.status(500);
            expect(response.text).to.contain("server error");
        });
    });

    describe("DELETE information ", () => {

        it("It should delete information with existing id", async () => {   
            let response = await chai
                .request(server)
                .delete(`/api/information/${information._id}`)
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
        });

        it("It should not delete information - non-existing id", async () => {   
            let response = await chai
                .request(server)
                .delete(`/api/information/${non_existing_id}`)
                .send({});
            expect(response).to.have.status(404);
            expect(response.body).to.be.a("object");
        });

        it("It should not delete information - invalid id", async () => {   
            let response = await chai
                .request(server)
                .delete(`/api/information/${invalid_id}`)
                .send({});
            expect(response).to.have.status(500);
        });

    });
    
})