-- CreateTable
CREATE TABLE "SystemStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastStatus" TEXT NOT NULL,

    CONSTRAINT "SystemStatus_pkey" PRIMARY KEY ("id")
);
