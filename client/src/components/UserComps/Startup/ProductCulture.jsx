const ProductCulture = ({ gallery }) => {
    return (
        <div>
            <h3 className="font-headline-md text-body-lg font-bold text-primary mb-4">Product & Culture</h3>

            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-72">
                <img src={gallery[0]} alt="" className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl" />
                <img src={gallery[1]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl" />
                <img src={gallery[2]} alt="" className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl" />
                <img src={gallery[3]} alt="" className="col-span-2 row-span-1 w-full h-full object-cover rounded-2xl" />
            </div>
        </div>
    )
}

export default ProductCulture