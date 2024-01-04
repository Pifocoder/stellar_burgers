type setCookieProps = {
  expires: number;
};
export function setCookie(name: string, value: string, props?: setCookieProps) {
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  if (typeof props !== "undefined") {
    const d = new Date();
    let exp = props.expires;
    d.setTime(d.getTime() + exp * 1000);
    let time = d.toUTCString;
    updatedCookie += "; " + "expires" + "=" + time;
  }
  document.cookie = updatedCookie;
}

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
