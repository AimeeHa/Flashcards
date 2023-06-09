export default function getCookie(cookieName: string): string {
  const cookieValue = document.cookie
    .split(';')
    .find((cookie) => cookie.trim().startsWith(`${cookieName}=`));

  if (cookieValue) {
    return cookieValue.split('=')[1];
  }

  return '';
}
