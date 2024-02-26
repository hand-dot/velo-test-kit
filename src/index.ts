import { vi, beforeEach, afterEach, beforeAll, afterAll } from "vitest";
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { setupServer } from "msw/node";
import { getCollections } from './utils/collections'

import './mocks/wix-crm-backend';
import './mocks/wix-members-backend';
import './mocks/wix-data';
import './mocks/wix-secrets-backend';
import './mocks/wix-fetch';
import './mocks/wix-http-functions';
import './mocks/wix-router';
import './mocks/wix-auth';

global.mongoServer = null;
global.server = null;

beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, {});
    global.mongoServer = mongoServer;

    global.server = setupServer();
    global.server.listen({ onUnhandledRequest: "error" });
});

afterAll(async () => {
    await mongoose.disconnect();
    await global.mongoServer.stop();

    global.server.close();
});

beforeEach(async () => {
    // setup initial data
    for (const { collectionName, schema, initialData } of await getCollections()) {
        const model = mongoose.model(collectionName, schema);
        await model.insertMany(initialData);
    }
});

afterEach(async () => {
    vi.resetAllMocks();
    vi.restoreAllMocks();

    // clear all data
    const collections = await getCollections();
    await Promise.all(collections.map(async ({ collectionName }) => {
        const model = mongoose.models[collectionName] || mongoose.model(collectionName, new mongoose.Schema({}));
        await model.deleteMany({});
    }));
    
    global.server.resetHandlers();
});