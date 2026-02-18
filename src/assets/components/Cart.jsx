


export default function Cart({ BasketItems, increaseQty, decreaseQty }) {


    return (
        <>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 pt-10 py-5">
                {BasketItems.map(items => (
                    <div
                        key={items.id}
                        className="shadow-xl shadow-gray-300 w-[350px] overflow-hidden rounded-3xl mx-auto"
                    >
                        <div className="w-full h-[280px] overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL}img/${items.img}`}
                                alt={items.title}
                                className="w-full h-full "
                            />
                        </div>

                        <div className="px-4 pt-3 break-words">
                            {items.title}
                        </div>

                        <div className="px-4 pt-2 pb-4 font-bold">
                            {items.price}
                        </div>
                        <div className='flex gap-x-6  justify-center md:justify-end py-5 items-center pl-5'>
                            <button onClick={() => increaseQty(items.id, items.apiId)} className='flex bg-gray-400 w-[35px] justify-center text-2xl pb-2 rounded-2xl'  ><p className='text-center'>+</p></button>
                            <div className='flex' >{items.quantity}</div>
                            <button onClick={() => decreaseQty(items.id, items.apiId)} className='flex bg-gray-400 w-[35px] justify-center text-2xl pb-2 rounded-2xl' ><p className='text-center'>-</p></button>
                        </div>
                    </div>

                ))}
            </div>




        </>
    )


}
