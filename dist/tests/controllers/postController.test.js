"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const postControllers_1 = require("../../controllers/postControllers");
describe('Post Controller', () => {
    describe('newPost', () => {
        it('should create a new post', async () => {
            const req = {
                body: {
                    title: 'Test Post',
                    content: 'Test content',
                },
                file: { filename: 'test-image.jpg' },
            };
            let status;
            let responseData = {};
            const res = {
                status: (s) => {
                    status = s;
                    return res;
                },
                json: (data) => {
                    responseData = data;
                },
            };
            await (0, postControllers_1.newPost)(req, res);
            (0, chai_1.expect)(status).to.equal(201);
            (0, chai_1.expect)(responseData.title).to.equal('Test Post');
        });
        it('should return 400 if title or content is missing', async () => {
            const req = {
                body: {
                    content: 'Test content',
                },
                file: { filename: 'test-image.jpg' },
            };
            let status;
            const res = {
                status: (s) => {
                    status = s;
                    return res;
                },
                json: (data) => { },
            };
            await (0, postControllers_1.newPost)(req, res);
            (0, chai_1.expect)(status).to.equal(400);
        });
    });
});
//# sourceMappingURL=postController.test.js.map