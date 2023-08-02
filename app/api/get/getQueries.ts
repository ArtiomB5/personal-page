import prisma from "@/lib/prisma";

const experience = async () => await prisma.$queryRaw`
    SELECT experience.id, experience.job, experience.responsibilities, experience.work_from, experience.work_to, companies.company_name 
    FROM experience 
    LEFT JOIN companies 
    ON experience.company_id = companies.id;
`;
const companies = async () => await prisma.$queryRaw`
    SELECT companies.id, companies.company_name
    FROM companies 
`;

const contacts = async () => await prisma.$queryRaw`
    SELECT *
    FROM contacts
`;
const courses = async () => await prisma.$queryRaw`
    SELECT courses.id, schools.school, courses.specialization, courses.education_from, courses.education_to 
    FROM courses 
    LEFT JOIN schools 
    ON courses.school_id = schools.id;
`;
const languages = async () => await prisma.$queryRaw`
    SELECT *
    FROM languages
`;
const links = async () => await prisma.$queryRaw`
    SELECT *
    FROM links
`;
const schools = async () => await prisma.$queryRaw`
    SELECT schools.id, schools.school
    FROM schools
`;

const skills = async () => await prisma.$queryRaw`
    SELECT *
    FROM skills
`;

const summaries = async () => await prisma.$queryRaw`
    SELECT *
    FROM summaries
`;

export const getQueries = {
    companies,
    experience,
    contacts,
    courses,
    languages,
    links,
    schools,
    skills,
    summaries
}

export type GetQueriesKeyType = keyof typeof getQueries;