/*
  Warnings:

  - You are about to drop the column `apartmentsUrl` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `zillowUrl` on the `Property` table. All the data in the column will be lost.
  - Added the required column `url` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Property" ("address", "city", "id", "imageUrl", "state") SELECT "address", "city", "id", "imageUrl", "state" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
