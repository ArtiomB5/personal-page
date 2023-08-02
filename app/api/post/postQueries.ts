import prisma from "@/lib/prisma";
import * as types from "../types";
import { v4 as uuidv4 } from 'uuid';

const experience = async (reqJson: types.ExperienceReqType) => await prisma.$queryRaw`
    INSERT INTO experience(id, job, responsibilities, company_id, work_from, work_to)
    VALUES (${uuidv4()}, ${reqJson.job}, ${reqJson.responsibilities}, ${reqJson.company_id}, ${new Date(reqJson.work_from)}, ${new Date(reqJson.work_to)})
`;
const company = async (reqJson: types.CompanyReqType) => await prisma.$queryRaw`
    INSERT INTO companies(id, company_name)
    VALUES (${uuidv4()}, ${reqJson.company_name})
`;
const contact = async (reqJson: types.ContactReqType) => await prisma.$queryRaw`
    INSERT INTO contacts(id, contact)
    VALUES (${uuidv4()}, ${reqJson.contact})
`;
const course = async (reqJson: types.CourseReqType) => await prisma.$queryRaw`
    INSERT INTO courses(id, specialization, school_id, education_from, education_to)
    VALUES (${uuidv4()}, ${reqJson.specialization}, ${reqJson.school_id}, ${reqJson.education_from}, ${reqJson.education_to})
`;
const language = async (reqJson: types.LanguageReqType) => await prisma.$queryRaw`
    INSERT INTO languages(id, language, level)
    VALUES (${uuidv4()}, ${reqJson.language}, ${reqJson.level})
`;
const link = async (reqJson: types.LinkReqType) => await prisma.$queryRaw`
    INSERT INTO links(id, description, url)
    VALUES (${uuidv4()}, ${reqJson.description}, ${reqJson.url})
`;
const school = async (reqJson: types.SchoolReqType) => await prisma.$queryRaw`
    INSERT INTO schools(id, school)
    VALUES (${uuidv4()}, ${reqJson.school})
`;

const skill = async (reqJson: types.SkillReqType) => await prisma.$queryRaw`
    INSERT INTO schools(id, skill, is_soft)
    VALUES (${uuidv4()}, ${reqJson.skill}, ${reqJson.is_soft})
`;

const summary = async (reqJson: types.SummaryReqType) => await prisma.$queryRaw`
    INSERT INTO summaries(id, summary)
    VALUES (${uuidv4()}, ${reqJson.summary})
`;

export const postQueries = {
    summary,
    skill,
    school,
    link,
    language,
    course,
    contact,
    experience,
    company
}

export type PostQueriesKeyType = keyof typeof postQueries;