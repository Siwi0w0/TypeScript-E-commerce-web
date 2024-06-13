import { useLoaderData } from 'react-router-dom';
import { Link, type LoaderFunction } from 'react-router-dom';
import {
  customFetch,
  formatAsEuros,
  type SingleProductResponse,
} from '@/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SelectProductAmount, SelectProductColor } from '@/components';
import { Mode } from '@/components/SelectProductAmount';

export const loader:LoaderFunction = async({params
}):Promise<SingleProductResponse> =>{
  const response = await customFetch<SingleProductResponse>(`/products/${params.id}`);
  return {...response.data}
}

function SingleProduct() {
  const {data:product} = useLoaderData() as SingleProductResponse;
  const {image,title,price,description,colors,company} = product.attributes;
  const eurosAmount = formatAsEuros(price);

  // useState of colors and amount of a single product
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () =>{
    console.log("add to cart.")
  }

  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant = 'link' size='sm'>
          <Link to='/'>Home</Link>
        </Button>
        <Separator orientation='vertical' />
        <Button>
          <Link to='/products'>Product</Link>
        </Button>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* Image First Col */}
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full'/>

        {/* Product info seciton col */}
        <div>
          <h1 className='captitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>{eurosAmount}</p>
          <p className='mt-6 leadning-8'>{description}</p>
          {/* COLORS */}
          <SelectProductColor colors={colors} productColor={productColor} setProductColor={setProductColor}/>
          {/* AMOUNT */}
          <SelectProductAmount mode={Mode.SingleProduct} amount={amount} setAmount={setAmount} />
          {/* CART BUTTON */}
          <Button size='lg' className='mt-10' onClick={addToCart}>Add to cart</Button>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct