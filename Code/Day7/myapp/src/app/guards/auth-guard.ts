import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let flag = sessionStorage.getItem("flag");
  return flag == "1"? true: false;
};
