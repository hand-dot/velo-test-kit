import { vi } from "vitest";
import _wixCrmBackend from 'wix-crm-backend';

type WixCrmBackend = typeof _wixCrmBackend;

const wixCrmBackend: WixCrmBackend = {
  triggeredEmails: {
    emailMember: vi.fn(),
    emailContact: vi.fn(),
  },
  createContact: vi.fn(),
  deleteContact: vi.fn(),
  emailContact: vi.fn(),
  getContactById: vi.fn(),
  updateContact: vi.fn(),
  contacts: {
    appendOrCreateContact: vi.fn(),
    createContact: vi.fn(),
    deleteContact: vi.fn(),
    deleteExtendedField: vi.fn(),
    deleteLabel: vi.fn(),
    findOrCreateExtendedField: vi.fn(),
    findOrCreateLabel: vi.fn(),
    getContact: vi.fn(),
    getExtendedField: vi.fn(),
    getLabel: vi.fn(),
    labelContact: vi.fn(),
    queryContacts: vi.fn(),
    queryExtendedFields: vi.fn(),
    queryLabels: vi.fn(),
    renameExtendedField: vi.fn(),
    renameLabel: vi.fn(),
    unlabelContact: vi.fn(),
    updateContact: vi.fn(),
  },
  notifications: {
    notify: vi.fn(),
  },
  tasks: {
    completeTask: vi.fn(),
    createTask: vi.fn(),
    getTask: vi.fn(),
    removeTask: vi.fn(),
    resetTask: vi.fn(),
    updateTaskFields: vi.fn(),
  },
  workflows: {
    archiveCard: vi.fn(),
    createCard: vi.fn(),
    createPhase: vi.fn(),
    createWorkflow: vi.fn(),
    deleteCard: vi.fn(),
    deletePhase: vi.fn(),
    deleteWorkflow: vi.fn(),
    getCard: vi.fn(),
    getPhaseInfo: vi.fn(),
    getWorkflowInfo: vi.fn(),
    listCards: vi.fn(),
    listPhasesInfo: vi.fn(),
    listWorkflowsInfo: vi.fn(),
    moveCard: vi.fn(),
    movePhase: vi.fn(),
    restoreCard: vi.fn(),
    updateCardFields: vi.fn(),
    updatePhaseFields: vi.fn(),
    updateWorkflowFields: vi.fn(),

  },
}

vi.mock("wix-crm-backend", () => ({
  __esModule: true,
  default: wixCrmBackend,
  ...wixCrmBackend
}));