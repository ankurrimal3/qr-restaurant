import { UserInitState } from "./user";

export interface LoginUserPayload
  extends Pick<
    UserInitState,
    "accessToken" | "redirectCount" | "isAuthenticated"
  > {
  roles: string[];
  permissions: string[];
}
