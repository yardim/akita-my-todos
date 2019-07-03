import { Observable } from 'rxjs';

export type GuardResolution = Observable<boolean> | Promise<boolean> | boolean;
