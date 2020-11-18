// eslint-disable-next-line no-undef
process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

const { expect } = chai;

let server = require("../index");
let { Event } = require("../models/Event");
chai.use(chaiHttp);

describe("Event API", () => {
    let event;
    const non_existing_id = "5fb41302700b9743133fcd41"
    const invalid_id = "5fb41302700b9743133"
    beforeEach(async () => {
        event = new Event({
            name: "Openning Ceremony",
            title: "Openning Ceremony of A2S",
            start: "2020-11-17T18:14:26.178Z",
            end: "2020-11-17T18:15:46.178Z",
            description: "Openning camp program take 2 for interview preparation",
            eventType: "CONTEST",
            gallery: "some html text" 
        });
        await event.save();
    });
    afterEach(async () => {
        await Event.findByIdAndDelete(event._id);
    });

    
    describe("GET events ", () => {
        it("It should fetch all events with pagination", async () => {
            let response = await chai
                .request(server)
                .get("/api/event")
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.data).to.be.a("array");
            expect(response.body.data).to.have.lengthOf(1);
        });

        it("It should fetch event by id - valid id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/event/${event._id}`)
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
        });

        it("It should fetch event by id - non-existing id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/event/${non_existing_id}`)
                .send({});
            expect(response).to.have.status(404);
            expect(response.text).to.equal("Event not found!");
        });

        it("It should not fetch event by id - invalid id", async () => {
            let response = await chai
                .request(server)
                .get(`/api/event/${invalid_id}`)
                .send({});
            expect(response).to.have.status(500);
            expect(response.text).to.contain("server error");
        });
    });

    describe("POST event ", () => {
        const eventObject = {
            name: "Openning Ceremony",
            title: "Openning Ceremony of A2S",
            start: "2020-11-17T18:14:26.178Z",
            end: "2020-11-17T18:15:46.178Z",
            description: "Openning camp program take 2 for interview preparation",
            eventType: "CONTEST",
            gallery: "Some html text" 
        };
        it("It should add event ", async () => {   
            let response = await chai
                .request(server)
                .post("/api/event")
                .send(eventObject);
            expect(response).to.have.status(201);
            expect(response.body).to.be.a("object");
            await Event.findByIdAndDelete(response.body._id)
        });

        it("It should not add event- with missing event attribute", async () => {   
            const eventObject2 = new Event({
                title: "Openning Ceremony of A2S",
                start: "2020-11-17T18:14:26.178Z",
                end: "2020-11-17T18:15:46.178Z",
                description: "Openning camp program take 2 for interview preparation",
                eventType: "CONTEST",
                gallery: "Some html text" 
            });
            let response = await chai
                .request(server)
                .post("/api/event")
                .send(eventObject2);
            expect(response).to.have.status(422);
        });

        it("It should not add event- with invalid eventType", async () => {   
            const eventObject2 = new Event({
                title: "Openning Ceremony of A2S",
                start: "2020-11-17T18:14:26.178Z",
                end: "2020-11-17T18:15:46.178Z",
                description: "Openning camp program take 2 for interview preparation",
                eventType: "SITDOWN",
                gallery: "Some html text" 
            });
            let response = await chai
                .request(server)
                .post("/api/event")
                .send(eventObject2);
            expect(response).to.have.status(422);
        });
    
    });

    describe("PUT event ", () => {
        it("It should update event without valid attribute", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/event/${event._id}`)
                .send({title: "Project Launch"});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.body.title).to.equal("Project Launch");
        });

        it("It should not update event with invalid eventType ", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/event/${event._id}`)
                .send({eventType: "SITDOWN"});
            expect(response).to.have.status(422);
        });

        it("It should not update event - non-existing id", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/event/${non_existing_id}`)
                .send({title: "Project Launch"});
            expect(response).to.have.status(404);
        });
        
        it("It should not update event - invalid id", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/event/${invalid_id}`)
                .send({eventType: "Q&A"});
            expect(response).to.have.status(500);
            expect(response.text).to.contain("server error");
        });
    });

    describe("PUT event - add Link ", () => {
        const link = {
            name: "Project Launch Meeting",
            link: "https://meet.google.com/ufg-tyfd-abg"
        }
        it("It should add event link valid link object attribute", async () => {   
            let response = await chai
                .request(server)
                .put(`/api/event/${event._id}/links`)
                .send(link);
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            expect(response.text).to.equal("Event updated successfully!");
        });

        it("It should not add event link with missing link name ", async () => {   
            const link1 = {
                link: "https://meet.google.com/ufg-tyfd-abg"
            }
            let response = await chai
                .request(server)
                .put(`/api/event/${event._id}/links`)
                .send(link1);
            expect(response).to.have.status(422);
        });

        it("It should not add event link with missing link url ", async () => {   
            const link2 = {
                name: "Project Launch Meeting"
            }
            let response = await chai
                .request(server)
                .put(`/api/event/${event._id}/links`)
                .send(link2);
            expect(response).to.have.status(422);
        });

        it("It should not add event link with extra attribute ", async () => {   
            const link3 = {
                name: "Project Launch Meeting",
                link: "https://meet.google.com/ufg-tyfd-abg",
                time: "11:00"
            }
            let response = await chai
                .request(server)
                .put(`/api/event/${event._id}/links`)
                .send(link3);
            expect(response).to.have.status(422);
        });
    });

    describe("DELETE event ", () => {

        it("It should delete event with existing id", async () => {   
            let response = await chai
                .request(server)
                .delete(`/api/event/${event._id}`)
                .send({});
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
        });

        it("It should not delete event - non-existing id", async () => {   
            let response = await chai
                .request(server)
                .delete(`/api/event/${non_existing_id}`)
                .send({});
            expect(response).to.have.status(404);
            expect(response.body).to.be.a("object");
        });

        it("It should not delete event - invalid id", async () => {   
            let response = await chai
                .request(server)
                .delete(`/api/event/${invalid_id}`)
                .send({});
            expect(response).to.have.status(500);
        });

    });
})
