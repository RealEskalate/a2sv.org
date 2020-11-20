// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

const { expect } = chai;

let server = require("../index");
let { Team } = require("../models/TeamModel");
chai.use(chaiHttp);

describe("Team API", () => {
    let team;
    const non_existing_id = "5fb41302700b9743133fcd41"
    const invalid_id = "5fb41302700b9743133"
    beforeEach(async () => {
        team = new Team({
            name: "John Wick",
            email: "JohnWick@HotelContinental.com",
            image: "https://pixabay.com/images/id-5163366/",
            title: "Head Cleaner",
            description: "40 years of cleaning up toxins",
            country: "Unverified"
        });
        await team.save();
    });
    afterEach(async () => {
        await Team.findByIdAndDelete(team._id);
    });

    describe("GET teams ", () => {
        it("It should fetch all teams with pagination", async () => {
            let response = await chai
                .request(server)
                .get("/api/team")
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });

        it("It should fetch team by id - valid id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/team/${team._id}`)
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
        });

        it("It should fetch team by id - non-existing id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/team/${non_existing_id}`)
                .send({});
            expect(response).to.have.status(404);
            expect(response.text).to.equal("Team member not found.");
        });

        it("It should not fetch team by id - invalid id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/team/${invalid_id}`)
                .send({});
            expect(response).to.have.status(500);
            expect(response.text).to.contain("server error");
        });

        it("It should fetch team members with email = JohnWick@HotelContinental.com ", async () => {
            let response = await chai
                .request(server)
                .get("/api/team?email=JohnWick@HotelContinental.com");
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });

        it("It should fetch all team members  with given name = John Wick", async () => {
            let response = await chai
                .request(server)
                .get("/api/team?name=John Wick");
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });

        it("It should fetch all team members with given title = Head Cleaner", async () => {
            let response = await chai
                .request(server)
                .get("/api/team?title=Head Cleaner");
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });

        it("It should fetch all team members with given query params ", async () => {
            let response = await chai
                .request(server)
                .get("/api/team?email=JohnWick@HotelContinental.com&title=Head Cleaner");
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });
    });

    describe("POST team ", () => {
        it("It should add team", async () => {
            const teamObject = {
                name: "Adam Sandler",
                email: "AdamSandler@HotelContinental.com",
                image: "https://pixabay.com/images/id-5163366/",
                title: "Head Goof",
                description: "40 years of cleaning up toxins",
                country: "Unverified"
            };
            let response = await chai
                .request(server)
                .post("/api/team")
                .send(teamObject);
            expect(response).to.have.status(201);
            expect(response.body).to.be.a("object");
            await Team.findByIdAndDelete(response.body._id);
        });

        it("It should not add team with missing required attribute", async () => {
            const teamObject = {
                name: "Adam Sandler",
                email: "AdamSandler@HotelContinental.com",
                image: "https://pixabay.com/images/id-5163366/",
                title: "Head Goof",
                description: "40 years of cleaning up toxins",
            };
            let response = await chai
                .request(server)
                .post("/api/team")
                .send(teamObject);
            expect(response).to.have.status(422);
        });
    });

    describe("PATCH team ", () => {
        it("It should update team with valid attribute", async () => {
            let response = await chai
                .request(server)
                .patch(`/api/team/${team._id}`)
                .send({ name: "Adam Sandler" });
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.name).to.equal("Adam Sandler");
        });

        it("It should not update team - non-existing id", async () => {
            let response = await chai
                .request(server)
                .patch(`/api/team/${non_existing_id}`)
                .send({ name: "Adam Sandler" });
            expect(response).to.have.status(404);
            expect(response.text).to.equal("Team member not found.");
        });

        it("It should not update team - invalid id", async () => {
            let response = await chai
                .request(server)
                .patch(`/api/team/${invalid_id}`)
                .send({ name: "Adam Sandler" });
            expect(response).to.have.status(500);
            expect(response.text).to.contain("server error");
        });
    });

    describe("DELETE team ", () => {
        it("It should delete team with existing id", async () => {
            let response = await chai
                .request(server)
                .delete(`/api/team/${team._id}`)
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
        });

        it("It should not delete team - non-existing id", async () => {
            let response = await chai
                .request(server)
                .delete(`/api/team/${non_existing_id}`)
                .send({});
            expect(response).to.have.status(404);
            expect(response.text).to.equal("Team member not found.");
        });

        it("It should not delete team - invalid id", async () => {
            let response = await chai
                .request(server)
                .delete(`/api/team/${invalid_id}`)
                .send({});
            expect(response).to.have.status(500);
        });
    });
    
})