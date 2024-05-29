declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
export const sendDataToGA = async (item: string) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycby1USC3DM7tp7b5LsMbdUsgKROd0DrVrkknmt4Yq3vyZrOBGJBDopcYrfXZVNkD5HY0dA/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, cart: item, variant: 'variant_5' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
