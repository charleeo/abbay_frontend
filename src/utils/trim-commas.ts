export const trimCommas = (stringWithCommas:string) => {

 return  parseFloat(stringWithCommas.replace(/,/g, ''));
}

