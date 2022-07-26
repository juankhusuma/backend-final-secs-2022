<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Dokumentasi

  #Tabel Mata Kuliah
  #@Route: /mata-kuliah
          #Get  -> mengembalikan daftar matakuliah

          #Post -> membuat matakuliah baru 
                     -> Inputan:  code(unik), 
                                  name, 
                                  room(int),
                                  class,
                                  prodi

          #Patch -> mengupdate matakuliah
                     -> tambahan route:  /id,
                     -> Inputan:  code(unik), 
                                  name, 
                                  room(int),
                                  class,
                                  prodi

          #Delete -> menghapus matakuliah

  #Tabel User Matakuliah
  #@Route: /user-matakuliah
          #Get  -> mengembalikan data user login dan mata   kuliah yang terkoneksi

          #Post -> mengambil mata kuliah sesuai user login
                     -> Inputan:  mataKuliahId,
                                  schedule (Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu),
                                  start,
                                  end,
                                  semester

          #Patch -> mengupdate mata kuliah sesuai user login dan id matakuliah
                     -> Tambahan route:  /id,
                     -> Inputan:
                                  schedule (Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu),
                                  start,
                                  end,
                                  semester

          #Delete -> menghapus matakuliah yang diambil user

  #Tabel Penilaian
  #@Route: /penilaian
          #Get  -> mengembalikan data user nilai user

          #Post -> membuat penilaian pada user
                     -> Inputan:  kehadiran,
                                  total_sks,
                                  tugas,
                                  uas,
                                  semester,
                                  userId

          #Patch -> mengupdate penilaian berdasarkan id
                     -> Tambahan route:  /id,
                     -> Inputan:
                                  kehadiran,
                                  total_sks,
                                  tugas,
                                  uas,
                                  semester,

          #Delete -> menghapus penilaian

  #Tambahan
  #@Route: /change-password
          #Patch  -> mengubah user password yang login
                     -> Inputan:  password
                                  

