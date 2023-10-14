-- CreateTable
CREATE TABLE "clients" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "lastname" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "company_id" UUID,
    "created_at" TIMESTAMP(6) DEFAULT '2023-09-19 18:08:29.69745'::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT '2023-09-19 18:08:29.69745'::timestamp without time zone,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "direction" VARCHAR NOT NULL,
    "number_phone" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT '2023-09-19 18:08:29.69745'::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT '2023-09-19 18:08:29.69745'::timestamp without time zone,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "lastname" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "avatar" VARCHAR DEFAULT '',
    "password" VARCHAR(200) NOT NULL,
    "token" VARCHAR(200),
    "created_at" TIMESTAMP(6) DEFAULT '2023-09-19 18:08:29.69745'::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT '2023-09-19 18:08:29.69745'::timestamp without time zone,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
