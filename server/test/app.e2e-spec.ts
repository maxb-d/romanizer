import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ConversionModule } from './../src/conversion/conversion.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let conversion: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ConversionModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    conversion = moduleFixture.createNestApplication();
    await app.init();
    await conversion.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ (GET)', () => {
    return request(conversion.getHttpServer())
      .get('/conversion')
      .expect(200)
      .expect(2);
  });
});
