import {writable} from "svelte/store";

export const coursesAndThierLinks = {
    'ECON_201': 'https://chat.whatsapp.com/DNQVq7VCNoMBUwCIh9FKEL',
    'ECON_203': 'https://chat.whatsapp.com/BTeESFcPY3bEPsvCBfOfb5',
    'PHYS_284': 'https://chat.whatsapp.com/C2kieoBaiDnDyAYwZYksoe',
    'MATH_203': 'https://chat.whatsapp.com/Gq0p3StsyCS73dHn11JpnL',
    'MATH_204': 'https://chat.whatsapp.com/FBfCysPHZbY5dJmOQwewv0',
    'MATH_205': 'https://chat.whatsapp.com/DvEgcgrldg3EogDQEHpDVz',
    'MATH_206': 'https://chat.whatsapp.com/JFGzvMfqKKJ0GDj4nwoxNe',
    'MATH_251': 'https://chat.whatsapp.com/KBbmtKKEwFT874SJEdv6G9',
    'MIAE_221': 'https://chat.whatsapp.com/L46MJxdkY703VDJjsLy1X3',
    'MIAE_215': 'https://chat.whatsapp.com/KhaLLC9hJiU3Uwt9hhVLaU',
    'MIAE_313': 'https://chat.whatsapp.com/JalQQM6mD7iI0WWdczRnom',
    'ENGR_201': 'https://chat.whatsapp.com/JiVCujhZI1BKuHvwXYdjSw',
    'ENGR_202': 'https://chat.whatsapp.com/B8NjDDNrayQDd3OfUJeOMY',
    'ENGR_371': 'https://chat.whatsapp.com/HpcmeUHCewZ57yEUVUeMFO',
    'ENGR_213': 'https://chat.whatsapp.com/KZuv6LK3Ta086D1x3J3kBx',
    'ENGR_233': 'https://chat.whatsapp.com/DWYNfEigIzTDe1MXxVy60Y',
    'ENGR_311': 'https://chat.whatsapp.com/HnQ4GcFb4OU9ilbsn64uwG',
    'ENGR_301': 'https://chat.whatsapp.com/GPJdavdPv9xAvraFDCBarz',
    'ENGR_251': 'https://chat.whatsapp.com/BdFwJDDgKc7HZuPdw8x6SN',
    'ENGR_242': 'https://chat.whatsapp.com/JZUBoCxTDVV7SXLfRytYs4',
    'ENGR_392': 'https://chat.whatsapp.com/K1LQQy6bD0GLL8htBQWRT6',
    'ENGR_244': 'https://chat.whatsapp.com/EpVpB9odWin0hmKDeVloTx',
    'ENGR_361': 'https://chat.whatsapp.com/DcKL3cBg7266uvltgIUsgt',
    'ENGR_243': 'https://chat.whatsapp.com/HS6AkJfblWm0wm016MvLlA',
    'ENGR_391': 'https://chat.whatsapp.com/BDFzFLaOnKk2f9zG5eOpKf',
    'CHEM_205': 'https://chat.whatsapp.com/Bb88taMoywqCmIimaURoMh',
    'COMP_248': 'https://chat.whatsapp.com/Ea5dUiZEEIh7EacJmdc3Q8',
    'COMP_249': 'https://chat.whatsapp.com/IjFOVEmgOovEqxgE3byGZO',
    'COMP_352': 'https://chat.whatsapp.com/GVvLRDDa0asDf0ynLdGXt2',
    'COMP_348': 'https://chat.whatsapp.com/GidxnqxtaYg4MVFVmuDy16',
    'COMP_233': 'https://chat.whatsapp.com/Dk8hPCwDS65CNvIlVR2RET',
    'COMP_335': 'https://chat.whatsapp.com/Jyi35yjfF8aL3JbhdwJZbC',
    'COMP_228': 'https://chat.whatsapp.com/JSuRCLTEAjaEtG8odr7flv',
    'COMP_232': 'https://chat.whatsapp.com/Hdite158tu8JwIPdCun1Nm',
    'COMP_361': 'https://chat.whatsapp.com/FgtwDYOjnOkLCcuVSAo0UM',
    'COMP_346': 'https://chat.whatsapp.com/D1oWcMZMyZa9aqOHh4SOlY',
    'COMP_345': 'https://chat.whatsapp.com/Dk2npwYGUCW4gNTE9l1KFz',
    'COMP_218': 'https://chat.whatsapp.com/DuIHYZEthDC5Rers6IwP6v',
    'COMP_354': 'https://chat.whatsapp.com/BXtwcoQE0C04lqYSbNyq61',
    'COMP_353': 'https://chat.whatsapp.com/BoATtwpt5SxID3hrszu4nf',
    'COMP_371': 'https://chat.whatsapp.com/FX2eyEBcr14E1EkZyPHFmv',
    'COMP_326': 'https://chat.whatsapp.com/HTqCdLDSz2LLYVLiDFFMuj',
    'SOEN_228': 'https://chat.whatsapp.com/ELJUvJReEugAkwyfgWQj4M',
    'SOEN_287': 'https://chat.whatsapp.com/Fd0AV0TJEKR4sj2kW6qJlZ',
    'SOEN_331': 'https://chat.whatsapp.com/L881EL8NKYVKPL6UmpUOeN',
    'SOEN_341': 'https://chat.whatsapp.com/CrDJSjZ4nLV1U0kscPTuhK',
    'SOEN_363': 'https://chat.whatsapp.com/DtXBe2ez06366wVlPUPXhP',
    'SOEN_343': 'https://chat.whatsapp.com/GeDkxmiYOie3c0Qpksa1QB',
    'SOEN_390': 'https://chat.whatsapp.com/BEH8D7TVtCP8LlIx1p8ZLp',
    'SOEN_385': 'https://chat.whatsapp.com/H7UODQgf3CyL7jI1dcIrnE',
    'SOEN_357': 'https://chat.whatsapp.com/LOBw43uDBcb7FM58TFIxxN',
    'SOEN_345': 'https://chat.whatsapp.com/KYGj4J9O1W88QUWfCafYwM',
    'SOEN_384': 'https://chat.whatsapp.com/GeoKprZrLBK4592YzG1s75',
    'SOEN_342': 'https://chat.whatsapp.com/Fr3KnnoDjIOGRXc4fOeuEh',
    'SOEN_321': 'https://chat.whatsapp.com/BDw3neNO38h6lGbknCuxt4',
    'PHYS_204': 'https://chat.whatsapp.com/IoWzJVtaPLuHyCz1w3gvkX',
    'PHYS_205': 'https://chat.whatsapp.com/C06YpnxBken6H0vge2Ue79',
    'ELEC_273': 'https://chat.whatsapp.com/EmfgxCH3Vyq0DaaHhbBSFs',
    'ELEC_275': 'https://chat.whatsapp.com/LBfJpqnsDwhCwBoo6jiUXU',
    'COEN_243': 'https://chat.whatsapp.com/JMEzSHyONLq1dMJoeuG40G',
    'COEN_212': 'https://chat.whatsapp.com/B5DvUPdbVNdAtd2H3LzTWE',
    'MAST_218': 'https://chat.whatsapp.com/IWfMdrq005P7qrJwMxWDAD',
    'ENCS_282': 'https://chat.whatsapp.com/EaGUCwNpHjS7uqTBThVevo',
    'MIAE_211': 'https://chat.whatsapp.com/GasOIBM1iju4bkXPt4cTSX',
    'MIAE_311': 'https://chat.whatsapp.com/BQ9Y3sIN1XoJ8kGlFM3q6d',
    'MIAE_312': 'https://chat.whatsapp.com/C4OXWfw0Brb1J8IlJzwsdp',
    'MIAE_380': 'https://chat.whatsapp.com/DuYGwlYuUopK85U20Jdke8',
    'AERO_201': 'https://chat.whatsapp.com/Fxs7A0l5MNLIj3v15GbMQI',
    'AERO_290': 'https://chat.whatsapp.com/JURX9P4FygvG20D9rDjXv6',
    'AERO_371': 'https://chat.whatsapp.com/BC1deQv784a3wH9G1lbbqL',
    'AERO_390': 'https://chat.whatsapp.com/BBZntfhSBTKDTNAKMUpsic',
    'AERO_417': 'https://chat.whatsapp.com/EmJ2QDncLeTFRNtUU03wmH',
    'AERO_481': 'https://chat.whatsapp.com/LxEo8LEAAYD1YqaaBmlHSQ',
    'AERO_455': 'https://chat.whatsapp.com/Cb75ctxngWzELSscCczAav',
    'AERO_464': 'https://chat.whatsapp.com/KhF1kL0y4NNJ30iW06wmq8',
    'MECH_343': 'https://chat.whatsapp.com/H6CXm5F6xcD0QJnsks09OS',
    'MECH_351': 'https://chat.whatsapp.com/EoYa5CJVlkEGhAXfmIC0W7',
    'MECH_361': 'https://chat.whatsapp.com/FGKEuFytDuw7bE0noSzxx7',
    'MECH_352': 'https://chat.whatsapp.com/FYQvI05w3sQ2HuovMrMg3q',
    'MECH_373': 'https://chat.whatsapp.com/J5WCIvoG8njKBZoY00xNhk',
    'MECH_375': 'https://chat.whatsapp.com/FFIAs4WS4py30v4u6bYIzb',
    'MECH_370': 'https://chat.whatsapp.com/JHE0wAkWulVK4M5tSrPi29',
    'MECH_380': 'https://chat.whatsapp.com/EtO0NUs1q2oCzH9XyRWy80',
    'MECH_371': 'https://chat.whatsapp.com/H2z5wNXUc1U3gqLe6aClFM',
    'MECH_368': 'https://chat.whatsapp.com/IDo6FEgLNmO9oazq24s2YW',
    'MECH_321': 'https://chat.whatsapp.com/LQIIndMJJ0739FOrG9i7IG',
    'MECH_344': 'https://chat.whatsapp.com/B6tm2jDl4It3AEOLZ60ftY',
    'MECH_390': 'https://chat.whatsapp.com/F7JcxL0GwmcCiwWweYsB5v',
    'INDU_323': 'https://chat.whatsapp.com/Bi9zN5sxbtuAUiu7aBOFhI',
    'INDU_371': 'https://chat.whatsapp.com/DMCOPLMaxbF00y8jlVgWHl',
    'INDU_311': 'https://chat.whatsapp.com/L0skWxKI2vgAV93Q8jlazd',
    'INDU_320': 'https://chat.whatsapp.com/Lkh89s0ZvbC6YageLBvmWw',
    'INDU_324': 'https://chat.whatsapp.com/Dpt82pYrXLQG3dNEr7rn2J',
    'INDU_330': 'https://chat.whatsapp.com/CIGZg73DO4N5h9gKy5z71l',
    'INDU_321': 'https://chat.whatsapp.com/HCdCumu2QaDDNmXqOM9TWX',
    'INDU_342': 'https://chat.whatsapp.com/CT4hpk1iBFLJEjPa0bwvTp',
    'INDU_372': 'https://chat.whatsapp.com/ENOgjspdLwe0HfPsqfZM6Z',
    'INDU_411': 'https://chat.whatsapp.com/LlVuRH42Q3O16yqScAjWsg',
    'COEN_313': 'https://chat.whatsapp.com/DGtwTMdVfqrLv9o5H7LauN',
    'COEN_352': 'https://chat.whatsapp.com/BnFls3pOHEq0Dt9KCYapHk',
    'ELEC_242': 'https://chat.whatsapp.com/J69oRDGDKboHolIobNqkTI',
    'COEN_314': 'https://chat.whatsapp.com/JBkMiqzD7rFDbqcGFilUoN',
    'COEN_346': 'https://chat.whatsapp.com/Dqt42JditEMHyhgCIsOC6d',
    'ELEC_372': 'https://chat.whatsapp.com/CK01wR6ZOJ01LUXULfbfV3',
    'ELEC_342': 'https://chat.whatsapp.com/K7HsD3F4qY8HyMp1mD7Rf2',
    'COEN_366': 'https://chat.whatsapp.com/LGp55r1kyuAKFz64pIJbXp',
    'COEN_390': 'https://chat.whatsapp.com/JfBpK9D1OTT4aLroYRBSNA',
    'COEN_320': 'https://chat.whatsapp.com/GPzeMVX9fOhBV5Fdln08Tg',
    'COEN_316': 'https://chat.whatsapp.com/I4TEPnJuEGGIzTvcUjNr6h',
    'COEN_317': 'https://chat.whatsapp.com/GBKOmsAWV8o80BkPBz5P19',
    'ELEC_321': 'https://chat.whatsapp.com/D012JxyQEk487dsiY1GzvJ',
    'ELEC_311': 'https://chat.whatsapp.com/CFmaCWP1TscFzhcrDkPHXB',
    'ELEC_251': 'https://chat.whatsapp.com/KbvK0dCJT1vCB5IhlOFd9a',
    'ELEC_331': 'https://chat.whatsapp.com/KvIpkeIaONbBSaLqhFpEV3',
    'ELEC_366': 'https://chat.whatsapp.com/CKcTVher5A0GvCxvaxMO4K',
    'ELEC_312': 'https://chat.whatsapp.com/JNVM1ttZK0XA3nT9ChleEv',
    'ELEC_351': 'https://chat.whatsapp.com/ISJVTwMWE1zFRVCr7YbRRZ',
    'ELEC_390': 'https://chat.whatsapp.com/FSTjLdXyihl2jo0kHTsY2y',
    'ELEC_367': 'https://chat.whatsapp.com/FfIBnKuVtLrCImGJcn3M3M',
    'MATH_208': 'https://chat.whatsapp.com/I0swNXm7loR1Z16rwCW7Io',
    'MATH_209': 'https://chat.whatsapp.com/BduCUraIlcX6OvP2kJmyYg',
    'BIOL_203': 'https://chat.whatsapp.com/Cq9TaYGwSiQLDtoHYaquFJ',
    'EDUC_270': 'https://chat.whatsapp.com/IaRNGNeOHVsDEL3YNtbrcX',
    'MARK_201': 'https://chat.whatsapp.com/Io13bfKARNHKoNJ8Xvo0IN',
    'RELI_216': 'https://chat.whatsapp.com/DHhKZfse4BjLPFtmbAbMyh',
    'COMP_472': 'https://chat.whatsapp.com/JSvvrBqH6tsCO0KlbCgMYE',
    'COMP_474': 'https://chat.whatsapp.com/BzGJW6noh9bD3xCKMEhXw9',
    'ENCS_393': 'https://chat.whatsapp.com/FEQjviRISgLLEAiTWAXAqu',
    'THEO_202': 'https://chat.whatsapp.com/EGZcGDLYIw7DIAYwYXEjK1',
};

export const subjectBaseUrls: { [key: string]: string } = {
    'ECON': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-080-department-of-economics/economics-courses.html',
    'BIOL': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-030-department-of-biology/biology-courses.html',
    'PHYS': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-230-department-of-physics/physics-courses.html',
    'MATH': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-200-department-of-mathematics-and-statistics/mathematics-and-statistics-courses.html',
    'MAST': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-200-department-of-mathematics-and-statistics/mathematics-and-statistics-courses.html',
    'MIAE': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'ENGR': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'AERO': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'ENCS': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'MECH': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'INDU': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-60-engineering-course-descriptions.html',
    'CHEM': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-050-department-of-chemistry-and-biochemistry/chemistry-and-biochemistry-courses.html',
    'COMP': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-70-department-of-computer-science-and-software-engineering/section-71-70-10-computer-science-and-software-engineering-courses.html',
    'SOEN': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-71-gina-cody-school-of-engineering-and-computer-science/section-71-70-department-of-computer-science-and-software-engineering/section-71-70-10-computer-science-and-software-engineering-courses.html',
    'EDUC': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-090-department-of-education/education-courses.html',
    'MARK': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-61-john-molson-school-of-business/section-61-100-department-of-marketing/marketing-courses.html',
    'RELI': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-270-department-of-religions-and-cultures/religions-and-cultures-courses.html',
    'THEO': 'https://www.concordia.ca/academics/undergraduate/calendar/current/section-31-faculty-of-arts-and-science/section-31-330-department-of-theological-studies/theological-studies-courses.html',
};

export const config = {
    name: "Study groups @Concordia",
    url: "https://concordia-groups.web.app",
    ogImage: "/og.png",
    description:
        "Join your course's study group chat on WhatsApp or Discord",
    links: {
        twitter: "",
        github: ""
    },
    keywords: `Concordia University,Study groups,help,courses,Course Chat,WhatsApp Course Groups,Study Chat,Discord Study Groups`
};

export let isLinkPopUpModelOpen = writable(false);
export let linkPopUpModelData = writable({courseName: "", courseWhatsappURL: "", courseDiscordURL: ""})