export type LinkReqType = {
    description: string;
    url: string;
}

export type ContactReqType = {
    contact: string;
}

export type SummaryReqType = {
    summary: string;
}

export type LanguageReqType = {
    language: string;
    level: string;
}

export type CourseReqType = {
    specialization: string;
    school_id: string;
    education_from: Date;
    education_to: Date;
}

export type SchoolReqType = {
    school: string;
}

export type SkillReqType = {
    skill: string;
    is_soft: boolean;
}

export type CompanyReqType = {
    company_name: string;
}

export type ExperienceReqType = {
    job: string;
    responsibilities: JSON;
    company_id: string;
    work_from: Date;
    work_to: Date;
}