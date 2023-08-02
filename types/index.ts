export type ExperienceItemType = {
    id: string;
    job: string;
    responsibilities: JSON;
    work_from: Date;
    work_to: Date;
    company_name: string;
};
export type CompanyType = {
    id: string;
    company_name: string;
};
export type ContactType = {
    id: string;
    contact: string;
};
export type CourseType = {
    id: string;
    school: string;
    specialization: JSON;
    education_from: Date;
    education_to: Date;
};
export type LanguageType = {
    id: string;
    language: string;
    level: string;
};
export type LinkType = {
    id: string;
    description: string;
    url: string;
};
export type SchoolType = {
    id: string;
    school: string;
};
export type SkillType = {
    id: string;
    skill: string;
    is_soft: boolean;
};
export type SummaryType = {
    id: string;
    summary: string;
};