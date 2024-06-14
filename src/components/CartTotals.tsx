import { useAppSelector } from '@/hooks';
import { formatAsEuros } from '@/utils';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';

function CartTotals() {
    const {cartTotal, shipping, tax, orderTotal} = useAppSelector((state)=>state.cartState)
  return (
    <Card className='p-8 bg-muted'>
        <CartTotalRow label='Subtotal' amount={cartTotal} />
        <CartTotalRow label='Shipping' amount={shipping} />
        <CartTotalRow label='Tax' amount={tax} />
    <CardTitle className='mt-8'>
        <CartTotalRow label='OrderTotal' amount={orderTotal} />
    </CardTitle>
    </Card>
  )
}

export default CartTotals


function CartTotalRow({label, amount, lastRow}:{label:string; amount:number; lastRow?:boolean}){
    return <>
    <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatAsEuros(amount)}</span>
    </p>
    {lastRow? null : <Separator className='my-2' />}
    </>
}

