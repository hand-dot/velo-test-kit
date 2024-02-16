"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTripleReference = exports.isBetaPkg = exports.isStablePkg = exports.getTypesDest = exports.getEmptyTripleReferenceTypesMap = exports.getEmptyDestinations = exports.getWixPackageTypingsPath = exports.wrapInAmbientModuleDeclaration = exports.removeDeclareFromAmbientModule = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const wix_code_common_1 = require("@wix/wix-code-common");
const constants_1 = __importDefault(require("../constants"));
const removeDeclareFromAmbientModule = (moduleBody) => {
    return moduleBody
        .split("\n")
        .map(line => line.replace(/^\s*declare\s/, ""))
        .join("\n");
};
exports.removeDeclareFromAmbientModule = removeDeclareFromAmbientModule;
const wrapInAmbientModuleDeclaration = (packageName, moduleBody) => {
    const indentedBody = moduleBody.replace(/\n/g, "\n  ").trim();
    let code = "";
    code += `declare module "${packageName}" {\n  `;
    code += indentedBody;
    code += "\n}\n";
    return code;
};
exports.wrapInAmbientModuleDeclaration = wrapInAmbientModuleDeclaration;
const getWixPackageTypingsPath = (packagePath) => {
    var _a;
    const packageJson = fs_extra_1.default.readJSONSync(path_1.default.join(packagePath, constants_1.default.PACKAGE_JSON));
    const typings = (_a = packageJson.typings) !== null && _a !== void 0 ? _a : packageJson.types;
    if (typings == null || typeof typings !== "string") {
        return null;
    }
    return path_1.default.join(packagePath, typings);
};
exports.getWixPackageTypingsPath = getWixPackageTypingsPath;
const getEmptyDestinations = () => ({
    [wix_code_common_1.DEST_TYPES_DIR_COMMON]: [],
    [wix_code_common_1.FileContext.Backend]: [],
    [wix_code_common_1.FileContext.Page]: [],
});
exports.getEmptyDestinations = getEmptyDestinations;
const getEmptyTripleReferenceTypesMap = () => ({
    [wix_code_common_1.AutocompleteType.Stable]: Object.assign({}, getEmptyDestinations()),
    [wix_code_common_1.AutocompleteType.Beta]: Object.assign({}, getEmptyDestinations()),
});
exports.getEmptyTripleReferenceTypesMap = getEmptyTripleReferenceTypesMap;
const getTypesDest = () => {
    const ROOT_PATH = path_1.default.resolve(process.cwd());
    const TYPES_PATH = path_1.default.resolve(ROOT_PATH, constants_1.default.DEST_TYPES_PATH);
    return TYPES_PATH;
};
exports.getTypesDest = getTypesDest;
const isStablePkg = (pkg) => !!pkg.autoCompleteVersions.stable;
exports.isStablePkg = isStablePkg;
const isBetaPkg = (pkg) => !!pkg.autoCompleteVersions.beta;
exports.isBetaPkg = isBetaPkg;
const createTripleReference = (filePath) => `/// <reference path="${filePath}.d.ts" />`;
exports.createTripleReference = createTripleReference;
//# sourceMappingURL=utils.js.map