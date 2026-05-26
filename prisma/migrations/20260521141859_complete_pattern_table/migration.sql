-- AlterTable
ALTER TABLE "Pattern" ADD COLUMN     "category" TEXT,
ADD COLUMN     "completedAt" TIMESTAMP(3),
ADD COLUMN     "currentRow" INTEGER DEFAULT 0,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "hookSize" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "sourceUrl" TEXT,
ADD COLUMN     "totalRows" INTEGER;
