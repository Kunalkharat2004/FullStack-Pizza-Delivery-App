import app from "../../src/app";
import request from "supertest";

describe("POST /auth/register", () => {
    describe("Given with all fields", () => {
        it("should return statusCode 201", async () => {
            // Follow the AAA pattern (Arrange, Act, Assert)
            // Arrange
            const user = {
                fname: "Kunal",
                lname: "Kharat",
                address: "Pune, Street No. 93",
                email: "kunalkharat2004@gmail.com",
                password: "123456",
                confirmPassword: "123456",
            };

            // Act (Make a request to the server)
            const response = await request(app).post("/auth/register").send(user);

            // Assert (Check if the response is as expected)
            expect(response.status).toBe(201);
        });

        it("should return a valid json response", async () => {
            const user = {
                fname: "Kunal",
                lname: "Kharat",
                address: "Pune, Street No. 93",
                email: "kunalkharat2004@gmail.com",
            };
            const response = await request(app).post("/auth/register").send(user);

            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        });
    });

    describe("Not given with all fields", () => {
        it("", () => {});
    });
});
