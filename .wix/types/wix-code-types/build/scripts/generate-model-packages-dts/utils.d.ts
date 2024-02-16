import { WixPackage } from "@wix/wix-code-common";
import { TargetContexts, LibAndMatchingTripleReference } from "../types";
declare const removeDeclareFromAmbientModule: (moduleBody: string) => string;
declare const wrapInAmbientModuleDeclaration: (packageName: string, moduleBody: string) => string;
declare const getWixPackageTypingsPath: (packagePath: string) => string | null;
declare const getEmptyDestinations: () => Record<TargetContexts, LibAndMatchingTripleReference[]>;
declare const getEmptyTripleReferenceTypesMap: () => {
    stable: {
        common: LibAndMatchingTripleReference[];
        backend: LibAndMatchingTripleReference[];
        page: LibAndMatchingTripleReference[];
    };
    beta: {
        common: LibAndMatchingTripleReference[];
        backend: LibAndMatchingTripleReference[];
        page: LibAndMatchingTripleReference[];
    };
};
declare const getTypesDest: () => string;
declare const isStablePkg: (pkg: WixPackage) => boolean;
declare const isBetaPkg: (pkg: WixPackage) => boolean;
declare const createTripleReference: (filePath: string) => string;
export { removeDeclareFromAmbientModule, wrapInAmbientModuleDeclaration, getWixPackageTypingsPath, getEmptyDestinations, getEmptyTripleReferenceTypesMap, getTypesDest, isStablePkg, isBetaPkg, createTripleReference, };
//# sourceMappingURL=utils.d.ts.map