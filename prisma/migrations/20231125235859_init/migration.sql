-- CreateTable
CREATE TABLE "Batch" (
    "machine_number" TEXT NOT NULL,
    "submit_date" TIMESTAMP(3) NOT NULL,
    "model" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "license_level" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("machine_number")
);
