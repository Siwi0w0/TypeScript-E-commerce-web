import { useLoaderData } from 'react-router-dom';

import { type OrdersResponse } from '@/utils';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function OrdersList() {
    const {data:orders,meta} = useLoaderData() as OrdersResponse;



  return (
    <div className='mt-16'>
        <h4 className='mb-4 capitalize'>
            Total orders: {meta.pagination.total}
        </h4>
        <Table>
            <TableCaption>A list of yoru recent orders.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="w-[100px]">Products</TableHead>
                <TableHead className="w-[100px]">Cost</TableHead>
                <TableHead>Date</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order)=> {
                    const {name, address, numItemsInCart, orderTotal, createdAt} = order.attributes;
                    return (
                        <TableRow key={orders.id}>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell>{address}</TableCell>
                        <TableCell className='text-center'>{numItemsInCart}</TableCell>
                        <TableCell className="text-left">{orderTotal}</TableCell>
                        <TableCell className="text-left">{new Date(createdAt).toDateString()}</TableCell>

                        </TableRow>
                    )
                    })
                }
            </TableBody>
</Table>
    </div>
  )
}

export default OrdersList