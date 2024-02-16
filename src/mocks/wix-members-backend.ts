import { vi } from "vitest";
import type { CurrentMember } from 'wix-members-backend';

const currentMember: CurrentMember = {
    getMember: vi.fn(() => {
        return Promise.resolve({
            _id: "d9cde4f8-cd5d-42d7-a827-a59d8a7789b8",
            loginEmail: "kyohei@example.com",
            loginEmailVerified: true,
            status: "APPROVED",
            contactId: "be6f3742-12d1-445c-b312-e1eba8fe8a22",
            privacyStatus: "PRIVATE",
            activityStatus: "ACTIVE",
            _createdDate: new Date(),
            _updatedDate: new Date(),
            lastLoginDate: new Date(),
            contactDetails: {
                firstName: "Kyohei",
                lastName: "Fukuda",
                phones: [],
                emails: [],
                addresses: [],
                customFields: {}
            },
            profile: {
                nickname: "Kyohei Fukuda",
                profilePhoto: {
                    _id: "",
                    url: "https://lh3.googleusercontent.com/a/test",
                    height: 0,
                    width: 0,
                    offsetX: 0,
                    offsetY: 0
                },
                slug: "kyoheif"
            }
        })
    }),
    getRoles: vi.fn(),
    makeProfilePrivate: vi.fn(),
    makeProfilePublic: vi.fn(),
    updateSlug: vi.fn(),
}

vi.mock("wix-members-backend", () => ({
    __esModule: true,
    currentMember,
}));


