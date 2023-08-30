import { expect } from 'chai';
import express from 'express';
import { newPost } from '../../controllers/postControllers';

describe('Post Controller', () => {
    describe('newPost', () => {
        it('should create a new post', async () => {
            const req: express.Request = {
                body: {
                    title: 'Test Post',
                    content: 'Test content',
                },
                file: { filename: 'test-image.jpg' },
            } as express.Request;

            let status: number | undefined;
            let responseData: any = {};
            const res: express.Response = {
                status: (s: number) => {
                    status = s;
                    return res;
                },
                json: (data: any) => {
                    responseData = data;
                },
            } as express.Response;

            await newPost(req, res);

            expect(status).to.equal(201);
            expect(responseData.title).to.equal('Test Post');
        });

        it('should return 400 if title or content is missing', async () => {
            const req: express.Request = {
                body: {
                    content: 'Test content',
                },
                file: { filename: 'test-image.jpg' },
            } as express.Request;

            let status: number | undefined;
            const res: express.Response = {
                status: (s: number) => {
                    status = s;
                    return res;
                },
                json: (data: any) => {},
            } as express.Response;

            await newPost(req, res);

            expect(status).to.equal(400);
        });
    });
});
