/*
  Warnings:

  - You are about to drop the column `user_enail` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_email,anime_mal_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_email` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Collection_user_enail_anime_mal_id_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` DROP COLUMN `user_enail`,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Collection_user_email_anime_mal_id_key` ON `Collection`(`user_email`, `anime_mal_id`);
