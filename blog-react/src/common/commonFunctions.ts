export const stringToColor = (string: string) => {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  export const updateUrlParams = (url: string, params: any) => {
    // Iterate through the keys of the params object
    for (let key in params) {
      if (params[key]) {
        // Replace the placeholders (like :id, :user) with their values
        url = url.replace(`:${key}`, params[key]);
      } else {
        // Remove the placeholder if value is not provided
        url = url.replace(`/:${key}`, '');  // Removes the param and the preceding slash
      }
    }
    return url;
  }
