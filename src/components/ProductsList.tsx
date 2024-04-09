import { formatAsEuros, type ProductsResponse } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

    return (
        <div className='mt-12 grid gap-y-8'>
            {products.map((product)=> {
                const { title, price, image, company } = product.attributes;
                const eurosAmount = formatAsEuros(price);

                return (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <Card>
                            <CardContent className='p-8 gay-y-4 grid md:grid-cols-3'>
                                <img
                                    src={image}
                                    alt={title}
                                    className='h-64 w-full md:h-48 md:w-48 rounded-md object-cover'>
                                </img>
                                <div>
                                    <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                                    <h4>{company}</h4>
                                    </div>
                                    <p className='text-primary md:ml-auto'>{eurosAmount}</p>
                            </CardContent>
                        </Card>
                    </Link>
                )
            })}
        </div>
  );
};
export default ProductsList;