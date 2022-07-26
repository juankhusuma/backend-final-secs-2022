-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DOSEN', 'MAHASISWA');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "Role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MataKuliah" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "room" VARCHAR(255) NOT NULL,
    "class" VARCHAR(50) NOT NULL,
    "prodi" VARCHAR(255) NOT NULL,

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_MataKuliah" (
    "userId" INTEGER NOT NULL,
    "mataKuliahId" INTEGER NOT NULL,
    "schedule" "Day"[],
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "User_MataKuliah_pkey" PRIMARY KEY ("userId","mataKuliahId")
);

-- CreateTable
CREATE TABLE "Penilaian" (
    "id" SERIAL NOT NULL,
    "kehadiran" INTEGER NOT NULL,
    "total_sks" INTEGER NOT NULL,
    "tugas" INTEGER NOT NULL,
    "uas" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Penilaian_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "MataKuliah_code_key" ON "MataKuliah"("code");

-- AddForeignKey
ALTER TABLE "User_MataKuliah" ADD CONSTRAINT "User_MataKuliah_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_MataKuliah" ADD CONSTRAINT "User_MataKuliah_mataKuliahId_fkey" FOREIGN KEY ("mataKuliahId") REFERENCES "MataKuliah"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
