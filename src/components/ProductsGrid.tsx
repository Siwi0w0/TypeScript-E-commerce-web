import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatAsEuros, type ProductsResponse } from '@/utils';

function ProductsGrid(){
  const {data:products} = useLoaderData() as ProductsResponse
  return <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
    {products.map((product)=>{
      const {title, price, image} = product.attributes;
      const eurosAmount = formatAsEuros(price);

      return (
      <Link to={`/products/${product.id}`} key={product.id}>
          <Card>
            <CardContent className='p-4'>
              <img
                alt={price}
                src={image}
                className='rounded-md h-64 md:h-48 w-full object-cover '/>
              <div className='mt-4 text-center'>
                <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                <p className='text-primary font-light mt-2'>{eurosAmount}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      )
    })}
  </div>
}

export default ProductsGrid;