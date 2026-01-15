type MockLogin = {
  success: boolean;
};

export const mockLogin = (
  email: string,
  password: string,
): Promise<MockLogin> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.ru' && password === '123456') {
        resolve({ success: true });
      } else {
        reject(new Error('Invalid data'));
      }
    }, 1000);
  });
};

type MockVerify2FA = {
  success: boolean;
};

export const mockVerify2FA = (code: string): Promise<MockVerify2FA> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === '123456') resolve({ success: true });
      else reject(new Error('Invalid code'));
    }, 1000);
  });
};
