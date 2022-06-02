import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const imageStorageKey = '2c213338298945009a5f44b7b85d3b4f';

    //Form Control & Submit
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = formInfo => {
        const { name, description, quantity, price, min_order, imgUrl } = formInfo;

        const image = formInfo.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url1 = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url1, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.display_url;
                    const product = {
                        name: name,
                        imgUrl: image,
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
                            if (data) {

                                toast(`Product Added to Database and product page`)
                            }
                            else {
                                toast.error(`Already have and with same Name!`)
                            }
                            // navigate(`/produc`);
                        });
                }
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
                            {/* img uplaod */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
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