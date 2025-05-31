import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8009';

  constructor(private http: HttpClient) {}
  private apiKeyKey = 'apiKey';

  // Guarda el apiKey en localStorage
  saveApiKey(apiKey: string): void {
    localStorage.setItem(this.apiKeyKey, apiKey);
  }

  // Obtiene el apiKey
  getApiKey(): string | null {
    return localStorage.getItem(this.apiKeyKey);
  }

  getCompanyId(): number | null {
  const stored = localStorage.getItem(this.apiKeyKey);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored);
    return parsed.id || null;
  } catch {
    return null;
  }
}

  // Elimina el apiKey (logout)
  clearApiKey(): void {
    localStorage.removeItem(this.apiKeyKey);
  }

  // Verifica si está logueado
  isLoggedIn(): boolean {
    return !!this.getApiKey();
  }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, userData, {
      responseType: 'text',
    });
  }

  login(credentials: { userName: string; password: string }) {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials, {
      responseType: 'text',
    });
  }
}
