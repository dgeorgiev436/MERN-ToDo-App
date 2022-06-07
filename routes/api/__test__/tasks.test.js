const app = require(`../../../app`);
const request = require(`supertest`);

// Testing the API routes with JEST and Supertest
describe(`Create task`, () => {
    // Make sure that status code 200 is returned if POST request is succesfull
    it(`Returns status code 200 if task title is passed`, async() => {

        const res = await request(app).post(`/api/tasks`).send({title: "Do shopping"});

        expect(res.statusCode).toEqual(200);
    });
    // Make sure that bad request and status code 400 is returned if the user does not enter task title
    it(`Returns bad request and status code 400 if task title is missing`, async() => {

        const res = await request(app).post(`/api/tasks`).send({});

        expect(res.statusCode).toEqual(400);
    });
});

describe(`Update task`, () => {
    // Make sure that status code 200 is returned if PUT request is succesfull
    it(`Returns status code 200 if task title is passed when updating task`, async() => {

        const res = await request(app).put(`/api/tasks/629f36e9425bc3e33583e256`).send({title: "Wrap the gifts"});

        expect(res.statusCode).toEqual(200);
    });
    // Make sure that bad request and status code 400 is returned if the user does not enter task title when updating task
    it(`Returns bad request and status code 400 if task title is missing when updating`, async() => {

        const res = await request(app).put(`/api/tasks/629f36e9425bc3e33583e256`).send({});

        expect(res.statusCode).toEqual(400);
    });
});

describe(`Delete task`, () => {
    // Make sure that status code 200 is returned if DELETE request is succesfull
    it(`Returns status code 200 if delete request is succesfull`, async() => {

        const res = await request(app).delete(`/api/tasks/629f37e3425bc3e33583e25f`);

        expect(res.statusCode).toEqual(200);
    });
    // Make sure that bad request and status code 400 is returned if DELETE request is unsuccesfull
    it(`Returns Internal Server Error and status code 500 if delete request is unsuccesfull`, async() => {

        const res = await request(app).delete(`/api/tasks/notValidId`)

        expect(res.statusCode).toEqual(500);
    });
});