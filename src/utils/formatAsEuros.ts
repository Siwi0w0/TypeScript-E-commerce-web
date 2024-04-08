export const formatAsEuros = (price:string | number):string => {
    const eurosAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    }).format(Number(price) / 100);
    return eurosAmount;
}