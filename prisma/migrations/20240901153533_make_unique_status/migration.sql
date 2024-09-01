/*
  Warnings:

  - A unique constraint covering the columns `[lastStatus]` on the table `SystemStatus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SystemStatus_lastStatus_key" ON "SystemStatus"("lastStatus");
