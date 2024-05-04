/*
  Warnings:

  - You are about to drop the column `orgnizerName` on the `EventoEvent` table. All the data in the column will be lost.
  - Added the required column `organizerName` to the `EventoEvent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EventoEvent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "organizerName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_EventoEvent" ("CreatedAt", "city", "date", "description", "id", "imageUrl", "location", "name", "slug", "updatedAt") SELECT "CreatedAt", "city", "date", "description", "id", "imageUrl", "location", "name", "slug", "updatedAt" FROM "EventoEvent";
DROP TABLE "EventoEvent";
ALTER TABLE "new_EventoEvent" RENAME TO "EventoEvent";
CREATE UNIQUE INDEX "EventoEvent_slug_key" ON "EventoEvent"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
