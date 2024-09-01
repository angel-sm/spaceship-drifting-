import { Module } from '@nestjs/common';
import { StarshipModule } from './contexts/spaceship/infrastructure/staship.module';

@Module({
  imports: [StarshipModule],
})
export class AppModule {}
