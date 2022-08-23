export interface AuthToken {
  token: string;
  claims: string[];
  expiration: string;
  refreshToken: string;
}
