const { execute } = require('@evershop/postgres-query-builder');

// eslint-disable-next-line no-multi-assign
module.exports = exports = async (connection) => {
  
  

  await execute(
    connection,
    `CREATE TABLE "company" (
  "company_id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  "uuid" UUID NOT NULL DEFAULT gen_random_uuid (),
  "status" smallint NOT NULL DEFAULT 1,  
  "ruc" varchar(13) NOT NULL,
  "full_name" varchar DEFAULT NULL,
  "trade_name" varchar DEFAULT NULL,  
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,    
  CONSTRAINT "COMPANY_UUID_UNIQUE" UNIQUE ("uuid")
)`
  );
  await execute(
    connection,
    `CREATE INDEX "COMPANY_RUC_IDX" ON "company" ("ruc")`
  );

  await execute(
    connection,
    `CREATE TABLE "company_address" (
  "company_address_id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  "uuid" UUID NOT NULL DEFAULT gen_random_uuid (),
  "company_id" INT NOT NULL,
  "movil" varchar DEFAULT NULL,
  "telephone" varchar DEFAULT NULL,
  "address_1" varchar DEFAULT NULL,
  "address_2" varchar DEFAULT NULL,
  "postcode" varchar DEFAULT NULL,
  "city" varchar DEFAULT NULL,
  "province" varchar DEFAULT NULL,
  "country" varchar NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "is_default" smallint DEFAULT NULL,
  CONSTRAINT "COMPANY_ADDRESS_UUID_UNIQUE" UNIQUE ("uuid"),
  CONSTRAINT "FK_COMPANY_ADDRESS" FOREIGN KEY ("company_id") REFERENCES "company" ("company_id") ON DELETE CASCADE
)`
  );

  await execute(
    connection,
    `CREATE TABLE "company_digital_certificate" (
  "company_digital_certificate_id" INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,  
  "company_id" INT NOT NULL,
  "certificate" BYTEA NOT NULL,
  "password" varchar DEFAULT NULL,
  "issuer" varchar DEFAULT NULL,
  "provider" varchar DEFAULT NULL,
  "subject" varchar DEFAULT NULL,  
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "is_enable" smallint DEFAULT NULL,
  CONSTRAINT "COMPANY_DIGITAL_CERTIFICATE_COMPANY_ID_UNIQUE" UNIQUE ("company_id"),
  CONSTRAINT "FK_COMPANY_DIGITAL_CERTIFICATE" FOREIGN KEY ("company_id") REFERENCES "company" ("company_id") ON DELETE CASCADE
)`
  );
};
