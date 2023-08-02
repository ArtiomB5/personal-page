-- CreateTable
CREATE TABLE "experience" (
    "id" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "responsibilities" JSONB NOT NULL,
    "company_id" TEXT NOT NULL,
    "work_from" TIMESTAMP(3) NOT NULL,
    "work_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "work_from" TIMESTAMP(3) NOT NULL,
    "work_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "isSoft" BOOLEAN NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "school" (
    "id" TEXT NOT NULL,
    "school" TEXT NOT NULL,

    CONSTRAINT "school_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" TEXT NOT NULL,
    "specialisation" TEXT NOT NULL,
    "school_id" TEXT NOT NULL,
    "education_from" TIMESTAMP(3) NOT NULL,
    "education_to" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "summary" (
    "id" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL,
    "descriprion" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_skill_key" ON "skills"("skill");

-- CreateIndex
CREATE UNIQUE INDEX "school_school_key" ON "school"("school");

-- CreateIndex
CREATE UNIQUE INDEX "languages_language_key" ON "languages"("language");

-- CreateIndex
CREATE UNIQUE INDEX "summary_summary_key" ON "summary"("summary");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_contact_key" ON "contacts"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "links_contact_key" ON "links"("contact");

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
