import { vi } from "vitest";
import _wixCrmBackend from 'wix-crm-backend';

type WixCrmBackend = typeof _wixCrmBackend;

const wixCrmBackend: WixCrmBackend = {
  triggeredEmails: {
    emailMember: vi.fn(() => Promise.resolve()),
    emailContact: vi.fn(() => Promise.resolve()),
  },
  createContact: vi.fn(() => Promise.resolve("1")),
  deleteContact: vi.fn(() => Promise.resolve()),
  emailContact: vi.fn(() => Promise.resolve()),
  getContactById: vi.fn(() => Promise.resolve({
    firstName: "Taro",
    lastName: "Tokyo",
    picture: "https://example.com/picture.jpg",
    emails: ["taro@example.com"],
    loginEmail: "taro@example.com",
    phones: ["123-456-7890"],
    labels: ["Friend", "VIP"]
  })),
  updateContact: vi.fn(() => Promise.resolve()),
  contacts: {
    appendOrCreateContact: vi.fn(() => Promise.resolve({
      contactId: "1",
      identityType: "CONTACT"
    })),
    createContact: vi.fn(() => Promise.resolve({
      _id: "contact_123456789",
      revision: 1,
      source: {
        sourceType: "WIX_SITE",
        appId: "14bcded7-0066-7c35-14d7-466cb3f09103"
      },
      _createdDate: new Date("2023-01-01T00:00:00.000Z"),
      _updatedDate: new Date("2023-01-01T00:00:00.000Z"),
      lastActivity: {
        activityDate: new Date("2023-01-01T12:00:00.000Z"),
        activityType: "CONTACT_CREATED"
      },
      primaryInfo: {
        email: "sample@example.com",
        phone: "+1234567890"
      },
      info: {
        name: {
          first: "Taro",
          last: "Yamada"
        },
        company: "Example Inc.",
        jobTitle: "Software Engineer",
        locale: "ja-JP",
        birthdate: "1990-01-01",
        picture: {
          image: "https://example.com/profile.jpg",
          imageProvider: "EXTERNAL"
        },
        emails: [
          {
            _id: "email_123",
            tag: "MAIN",
            email: "sample@example.com",
            primary: true
          }
        ],
        phones: [
          {
            _id: "phone_123",
            tag: "MOBILE",
            phone: "+1234567890",
            countryCode: "JP",
            e164Phone: "+1234567890",
            primary: true
          }
        ],
        addresses: [
          {
            _id: "address_123",
            tag: "HOME",
            address: {
              addressLine1: "123 Example St",
              city: "Tokyo",
              country: "JP",
              postalCode: "100-0001"
            }
          }
        ],
        labelKeys: ["customer", "vip"],
        extendedFields: {
          "custom.birthday": "1990-01-01",
          "custom.membershipLevel": "Gold"
        },
        profilePicture: "https://example.com/new-profile.jpg"
      }
    })),
    deleteContact: vi.fn(() => Promise.resolve()),
    deleteExtendedField: vi.fn(() => Promise.resolve()),
    deleteLabel: vi.fn(() => Promise.resolve()),
    findOrCreateExtendedField: vi.fn(() => Promise.resolve({
      extendedField: {
        key: "custom.birthday",
        displayName: "Birthday",
        dataType: "DATE",
        fieldType: "USER_DEFINED",
        _createdDate: new Date("2023-01-01T00:00:00.000Z"),
        _updatedDate: new Date("2023-01-01T00:00:00.000Z"),
        namespace: "custom",
        description: "The contact's birthday"
      },
      newExtendedField: true
    })),
    findOrCreateLabel: vi.fn(() => Promise.resolve({
      label: {
        key: "vip-customers",
        displayName: "VIP Customers",
        labelType: "USER_DEFINED",
        _createdDate: new Date("2023-01-01T00:00:00.000Z"),
        _updatedDate: new Date("2023-01-01T00:00:00.000Z"),
        namespace: "custom"
      },
      newLabel: true
    })),
    getContact: vi.fn(() => Promise.resolve({
      _id: "contact_987654321",
      revision: 2,
      source: {
        sourceType: "USER",
        appId: "14bcded7-0066-7c35-14d7-466cb3f09103"
      },
      _createdDate: new Date("2023-01-02T00:00:00.000Z"),
      _updatedDate: new Date("2023-01-03T00:00:00.000Z"),
      lastActivity: {
        activityDate: new Date("2023-01-03T12:00:00.000Z"),
        activityType: "CONTACT_UPDATED"
      },
      primaryInfo: {
        email: "example@example.com",
        phone: "+9876543210"
      },
      info: {
        name: {
          first: "Hanako",
          last: "Tanaka"
        },
        company: "Example Corp",
        jobTitle: "Marketing Manager",
        locale: "en-US",
        birthdate: "1985-02-15",
        picture: {
          image: "https://example.com/profile-picture.jpg",
          imageProvider: "EXTERNAL"
        },
        emails: [
          {
            _id: "email_987",
            tag: "WORK",
            email: "example@example.com",
            primary: true
          }
        ],
        phones: [
          {
            _id: "phone_987",
            tag: "MOBILE",
            phone: "+9876543210",
            countryCode: "US",
            e164Phone: "+19876543210",
            primary: true
          }
        ],
        addresses: [
          {
            _id: "address_987",
            tag: "WORK",
            address: {
              addressLine1: "456 Example Blvd",
              city: "New York",
              country: "US",
              postalCode: "10001"
            }
          }
        ],
        labelKeys: ["important", "newsletter-subscriber"],
        extendedFields: {
          "custom.interests": "Marketing, Technology",
          "custom.subscriptionDate": "2022-12-01"
        },
        profilePicture: "https://example.com/new-profile-picture.jpg"
      }
    })),
    getExtendedField: vi.fn(() => Promise.resolve()),
    getLabel: vi.fn(() => Promise.resolve()),
    labelContact: vi.fn(() => Promise.resolve()),
    queryContacts: vi.fn(() => Promise.resolve()),
    queryExtendedFields: vi.fn(() => Promise.resolve()),
    queryLabels: vi.fn(() => Promise.resolve()),
    renameExtendedField: vi.fn(() => Promise.resolve()),
    renameLabel: vi.fn(() => Promise.resolve()),
    unlabelContact: vi.fn(() => Promise.resolve()),
    updateContact: vi.fn(() => Promise.resolve()),
  },
  notifications: {
    notify: vi.fn(() => Promise.resolve()),
  },
  tasks: {
    completeTask: vi.fn(() => Promise.resolve("x")),
    createTask: vi.fn(() => Promise.resolve("x")),
    getTask: vi.fn(() => Promise.resolve({
      _id: "task_001",
      title: "Complete project documentation",
      dueDate: new Date("2023-12-31"),
      contactId: "contact_123",
      isCompleted: false,
      version: 1,
      creatorType: "APP",
      applicationId: "app_456"
    })),
    removeTask: vi.fn(() => Promise.resolve("x")),
    resetTask: vi.fn(() => Promise.resolve("x")),
    updateTaskFields: vi.fn(() => Promise.resolve("x")),
  },
  workflows: {
    archiveCard: vi.fn(() => Promise.resolve()),
    createCard: vi.fn(() => Promise.resolve()),
    createPhase: vi.fn(() => Promise.resolve()),
    createWorkflow: vi.fn(() => Promise.resolve()),
    deleteCard: vi.fn(() => Promise.resolve()),
    deletePhase: vi.fn(() => Promise.resolve()),
    deleteWorkflow: vi.fn(() => Promise.resolve()),
    getCard: vi.fn(() => Promise.resolve()),
    getPhaseInfo: vi.fn(() => Promise.resolve()),
    getWorkflowInfo: vi.fn(() => Promise.resolve()),
    listCards: vi.fn(() => Promise.resolve()),
    listPhasesInfo: vi.fn(() => Promise.resolve()),
    listWorkflowsInfo: vi.fn(() => Promise.resolve()),
    moveCard: vi.fn(() => Promise.resolve()),
    movePhase: vi.fn(() => Promise.resolve()),
    restoreCard: vi.fn(() => Promise.resolve()),
    updateCardFields: vi.fn(() => Promise.resolve()),
    updatePhaseFields: vi.fn(() => Promise.resolve()),
    updateWorkflowFields: vi.fn(() => Promise.resolve()),

  },
}

vi.mock("wix-crm-backend", () => ({
  __esModule: true,
  default: wixCrmBackend,
  ...wixCrmBackend
}));