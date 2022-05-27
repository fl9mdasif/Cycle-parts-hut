import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    //navigate
    const navigate = useNavigate();

    //Form Control & Submit
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = formInfo => {

        const { name, description, quantity, price, min_order, imgUrl } = formInfo;

        const product = {
            name: name,
            imgUrl: imgUrl,
            description: description,
            price: price,
            min_order: min_order,
            available: quantity
        }
        console.log('product', product);

        const url = `https://fast-fjord-70405.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {

                    toast(`Product Added`)
                }
                else {
                    toast.error(`Already have and with same Name!`)
                }
                navigate(`/produc`);
            });

    }
    return (
        <div>
            <div className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">ADD PRODUCT</div>

            <div className='flex  justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Input Product Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            {/* Input Product Description */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Product Description is Required'
                                        },
                                        pattern: {
                                            value: true,
                                            message: 'Provide Product Description'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>

                            {/* Input Product Price */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Product Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Product Price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>
                            {/* Input Minimum Order */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Minimum Order Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("min_order", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Order Quantity Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.minimum_order?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum_order.message}</span>}
                                </label>
                            </div>

                            {/* Input Available Product Quantity*/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Available Product Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Available Product Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: `Available Product Quantity Required`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                </label>
                            </div>
                            {/* Input Image Link*/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Image Link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("imgUrl", {
                                        required: {
                                            value: true,
                                            message: `Image Link Required`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.imgUrl?.type === 'required' && <span className="label-text-alt text-red-500">{errors.imgUrl.message}</span>}
                                </label>
                            </div>

                            {/* Sbmit Button */}
                            <input className='btn w-full max-w-xs text-white' type="submit" value="Submit Order" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;