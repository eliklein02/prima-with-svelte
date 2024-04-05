-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
