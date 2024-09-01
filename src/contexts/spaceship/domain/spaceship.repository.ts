import { SystemCodes } from './spaceship.entity';

export abstract class SpaceshipRepository {
  abstract getLastStatus(): Promise<keyof SystemCodes>;
  abstract storeStatus(status: string): Promise<void>;
}
