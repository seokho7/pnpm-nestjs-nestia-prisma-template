import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import * as path from 'path';

export const SwaggerConfig = (app: INestApplication) => {
  const swaggerConfig = readFileSync(
    path.join(__dirname, '../../../../swagger.json'),
    'utf8',
  );
  SwaggerModule.setup('api', app, JSON.parse(swaggerConfig));
};
