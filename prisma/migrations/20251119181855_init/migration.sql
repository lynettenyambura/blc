-- CreateTable
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "subscribedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");

-- CreateIndex
CREATE INDEX "Newsletter_email_idx" ON "Newsletter"("email");
