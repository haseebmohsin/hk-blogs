import { signIn } from 'next-auth/react';

export const loginUser = async ({ email, password }) => {
  const res = await signIn('credentials', {
    redirect: false,
    callbackUrl: '/dashboard',
    email,
    password,
  });

  return res;
};

export const getErrorMsg = (key, errors) => {
  if (errors.find((err) => err.hasOwnProperty(key) !== undefined)) {
    const errorObj = errors.find((err) => err.hasOwnProperty(key));
    return errorObj && errorObj[key];
  }
};

// formate date
export const formatDate = (date) => {
  const myDate = new Date(date);
  const day = myDate.getDate();
  const month = myDate.getMonth() + 1; // January is 0
  const year = myDate.getFullYear();

  return `${formatNumber(day)}-${formatNumber(month)}-${year}`;
};

function formatNumber(number) {
  return number.toString().padStart(2, '0');
}
