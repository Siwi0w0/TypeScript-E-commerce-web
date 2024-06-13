import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export enum Mode {
  SingleProduct = 'singleProduct',
  CartItem = 'cartItem',
}

type SelectProductAmountProps = {
  mode:Mode.SingleProduct;
  amount:number;
  setAmount:React.Dispatch<React.SetStateAction<number>>;
}

type SelectCartItemAmountProps = {
  mode:Mode.CartItem;
  amount:number;
  setAmount:(value:number) => void;
}

function SelectProductAmount({mode,amount,setAmount}:SelectProductAmountProps | SelectCartItemAmountProps) {
  const cartItem = mode === Mode.CartItem;
  return (
    <>
      <h4 className='font-md mb-2'>Amount: </h4>
      <Select
        defaultValue={amount.toString()}
        // We need it to be string to be displayed
        onValueChange={(value) => setAmount(Number(value))}
        // We also need the value to be number passed to setAmount function.
      >
        <SelectTrigger className={cartItem ? 'w-[75px]':'w-[150px]'}>
          <SelectValue placeholder={amount}/>
        </SelectTrigger>
        <SelectContent>
          {Array.from({length:cartItem? amount + 10:10}, (_,index)=>{
            const selectValue = (index+1).toString();
            return <SelectItem key={index} value={selectValue}>
              {selectValue}
            </SelectItem>
          })}
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectProductAmount