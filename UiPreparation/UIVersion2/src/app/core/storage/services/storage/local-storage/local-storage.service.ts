import {Injectable} from '@angular/core';
import {StorageService} from '../storageService';

@Injectable()
export class LocalStorageService implements StorageService {
  constructor() {}

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
