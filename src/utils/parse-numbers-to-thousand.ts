export   const thousandFormat = (input:string) => {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}