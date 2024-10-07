export interface paths {
    "/api/infos/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_configuration"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/authentication/v1/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Sign in to the app with username and password. The username is the year of the BAC exam followed by the the BAC id (example 2021########), and the password is the code that came with the BAC notes report */
        post: operations["ApiController_authenthication"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/image/{userUUID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the user image encoded as a Base64 String */
        get: operations["ApiController_userImage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/logoEtablissement/{etablissementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Gets the logo of the current university/school encoded as a Base64 String */
        get: operations["ApiController_logoEtablissement"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/AnneeAcademiqueEncours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_anneeAcademique"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/individu": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bacIndividu"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bacNotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/dias": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bacDias"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/demandesHebregement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bacDemandesHebergement"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/anneeAcademique/{anneeAcademiqueId}/dia": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bacAnneeAcademiqueDia"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/niveau/{niveau}/periodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_niveauPeriodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/dettes/{userUUID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_dettesUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/dia/{diaId}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bacDiaGroupes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/seanceEmploi/inscription/{diaId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_seanceEmploiInscription"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/demandeTransport/{userUUID}/{diaId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_demandeTransportUserDia"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/dia/{diaId}/annuel/bilan": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bilanAnnuel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/infos/bac/{userUUID}/dias/{diaId}/periode/bilans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ApiController_bilanPeriode"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proxy/{url}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ProxyController_proxy_get"];
        put: operations["ProxyController_proxy_put"];
        post: operations["ProxyController_proxy_post"];
        delete: operations["ProxyController_proxy_delete"];
        options: operations["ProxyController_proxy_options"];
        head: operations["ProxyController_proxy_head"];
        patch: operations["ProxyController_proxy_patch"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ConfigurationDTO: {
            option1: boolean;
            option2: boolean;
            option3: boolean;
            option4: boolean;
            option5: boolean;
            option6: boolean;
            option7: boolean;
            option8: boolean;
            option9: boolean;
            option10: boolean;
            option11: boolean;
            option12: boolean;
            option13: boolean;
            newsPageUrl: string;
        };
        AuthenticationDTO: {
            username: string;
            password: string;
        };
        AuthenticationResponseDTO: {
            /** @description The jwt token used to access the api */
            token: string;
            userId: number;
            uuid: string;
            idIndividu: number;
            /** @description University or school ID */
            etablissementId: number;
            /** @description The username used to login (Usually Student ID) */
            userName: string;
        };
        String: Record<string, never>;
        AnneeAcademiqueDTO: {
            id: number;
            code: string;
            libelle: string | null;
        };
        BacIndivuduDTO: {
            id: number;
            identifiant: string;
            dateNaissance: string;
            nomArabe: string;
            nomLatin: string;
            prenomArabe: string;
            prenomLatin: string;
            lieuNaissance: string;
            lieuNaissanceArabe: string;
            photo: string;
            email: string | null;
            idCarde: string;
        };
        BacNotesDTO: {
            note: number;
            refCodeMatiereLibelleFr: string;
        };
        DiaDTO: {
            id: number;
            numeroInscription: string;
            anneeAcademiqueId: number;
            anneeAcademiqueCode: string;
            situationId: number;
            dossierEtudiantId: number;
            numeroMatricule: string;
            ouvertureOffreFormationId: number;
            refCodeCycle: string;
            refLibelleCycle: string;
            refLibelleCycleAr: string;
            ofIdDomaine: number;
            ofCodeDomaine: string;
            ofLlDomaine: string;
            ofLlDomaineArabe: string;
            ofIdFiliere: number;
            ofCodeFiliere: string;
            ofLlFiliereArabe: string;
            ofLlFiliere: string;
            ofIdSpecialite: number;
            ofCodeSpecialite: string;
            ofLlSpecialiteArabe: string;
            ofLlSpecialite: string;
            individuId: number;
            nin: string;
            individuNomArabe: string;
            individuNomLatin: string;
            individuPrenomArabe: string;
            individuPrenomLatin: string;
            individuDateNaissance: string;
            individuLieuNaissance: string;
            individuLieuNaissanceArabe: string;
            refEtablissementId: number;
            refCodeEtablissement: string;
            llEtablissementArabe: string;
            llEtablissementLatin: string;
            moyenneBac: number;
            lastMoyenne: number;
            photo: string;
            cycleId: number;
            cycleCode: string;
            cycleLibelleLongLt: string;
            niveauId: number;
            niveauCode: string;
            niveauRang: number;
            niveauLibelleLongLt: string;
            niveauLibelleLongAr: string;
            fraisInscriptionPaye: boolean;
        };
        NiveauPeriodesDTO: {
            id: number;
            code: string;
            libelleLongLt: string;
            libelleLongAr: string;
            libelleCourtLt: string | null;
            libelleCourtAr: string | null;
            rang: number;
            credit: number;
            refCodePeriodicite: string | null;
            rangNiveau: number;
            refCodePeriode: string | null;
            libelleLongFrNiveau: string;
            libelleLongFrCycle: string;
            ncPeriodeId: string | null;
            ncPeriodeCode: string | null;
            ncPeriodeLibelle: string | null;
        };
        GroupeDTO: {
            id: number;
            groupePedagogiqueId: number;
            nomGroupePedagogique: string;
            nomSection?: string;
            dateAffectation: string;
            periodeId: number;
            periodeCode: string;
            periodeLibelleLongLt: string;
        };
        BilanMcDTO: {
            id: number;
            bilanUeId: number;
            bilanSessionId: number;
            rattachementMcId: number;
            mcLibelleFr: string;
            mcLibelleAr: string;
            mcCode: string;
            coefficient: number;
            credit: number;
            creditObtenu: number;
            moyenneGenerale: number;
        };
        BilanUeDTO: {
            id: number;
            bilanSessionId: number;
            repartitionUeId: number;
            ueLibelleFr: string;
            ueCode: string;
            ueType: string;
            moyenne: number;
            coefficient: number;
            credit: number;
            creditObtenu: number;
            creditAcquis: number;
            ueNatureLcFr: string;
            ueNatureLcAr: string;
            ueNatureCode: string;
            bilanMcs: components["schemas"]["BilanMcDTO"][];
            ueNoteObtention: number;
            ueAcquis: boolean;
            totalAquis: number;
            effectif: number;
        };
        BilanAnnuelDTO: {
            id: number;
            type: number;
            bilanUes: components["schemas"]["BilanUeDTO"][];
            typeDecisionLibelleFr: string;
            typeDecisionLibelleAr: string;
            moyenne: number;
            moyenneSn: number;
            credit: number;
            creditObtenu: number;
            creditAcquis: number;
            cumulCreditPrecedent: number;
            annuel: boolean;
            niveauRang: number;
            totalAquis: number;
            effectif: number;
            coefficient: number;
        };
        BilanPeriodeDTO: {
            id: number;
            type: number;
            periodeId: number;
            periodeLibelleFr: string;
            periodeLibelleAr: string;
            bilanUes: components["schemas"]["BilanUeDTO"][];
            moyenne: number;
            moyenneSn: number;
            credit: number;
            creditObtenu: number;
            creditAcquis: number;
            annuel: boolean;
            cycleLibelleLongLt: string;
            niveauCode: string;
            niveauRang: number;
            niveauLibelleLongLt: string;
            niveauLibelleLongAr: string;
            totalAquis: number;
            effectif: number;
            coefficient: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    ApiController_configuration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConfigurationDTO"];
                };
            };
        };
    };
    ApiController_authenthication: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AuthenticationDTO"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticationResponseDTO"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_userImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["String"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_logoEtablissement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                etablissementId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["String"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_anneeAcademique: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AnneeAcademiqueDTO"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bacIndividu: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BacIndivuduDTO"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bacNotes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BacNotesDTO"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bacDias: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiaDTO"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bacDemandesHebergement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bacAnneeAcademiqueDia: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
                anneeAcademiqueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiaDTO"];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_niveauPeriodes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                niveau: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NiveauPeriodesDTO"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_dettesUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bacDiaGroupes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                diaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupeDTO"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_seanceEmploiInscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                diaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_demandeTransportUserDia: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
                diaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bilanAnnuel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
                diaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BilanAnnuelDTO"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ApiController_bilanPeriode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userUUID: string;
                diaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BilanPeriodeDTO"][];
                };
            };
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_put: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_options: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_head: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ProxyController_proxy_patch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
