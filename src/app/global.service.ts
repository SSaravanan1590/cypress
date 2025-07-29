import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Automatically available app-wide
})
export class GlobalService {
    public headerTitlePage : string = "";
    constructor() {}

    getMessage(): string {
        return 'Hello from GlobalService!';
    }
}