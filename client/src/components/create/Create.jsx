
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Link, useNavigate } from 'react-router'
import { useCreateCar } from '../../api/carsApi.js'

export default function Create() {
    const navigate = useNavigate()

    const { create } = useCreateCar()

    const submitAction = async (formData) =>{
        const carData = Object.fromEntries(formData)
        if (!carData.brand || !carData.model || !carData["car-year"] || !carData.price || !carData.engine || !carData.imageUrl || !carData.phoneNumber || !carData.address) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        await create(carData)

        navigate('/cars/catalog')
    }
    
    return (
        <div className="relative min-h-screen bg-[#111827] text-white">
            {/* Първи тъмен градиент */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-700 to-gray-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Form Content */}
            <div className="relative z-10 p-8">
                <form action={submitAction}>
                    <div className="space-y-12">
                        {/* Personal Information Section */}
                        <div className="border-b border-gray-600/10 pb-12">
                            <div className="mt-20">
                                <h2 className="text-base font-semibold text-white">Car Information</h2>
                                <p className="mt-1 text-sm text-gray-400">Here you need to fill in the details for your car</p>
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="brand" className="block text-sm font-medium text-white">
                                        Brand
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="brand"
                                            name="brand"
                                            type="text"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="model" className="block text-sm font-medium text-white">
                                        Model
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="model"
                                            name="model"
                                            type="text"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>



                                <div className="sm:col-span-4">
                                    <label htmlFor="car-year" className="block text-sm font-medium text-white">
                                        Year of the car
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="car-year"
                                            name="car-year"
                                            type="number"
                                            autoComplete="number"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="price" className="block text-sm font-medium text-white">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="price"
                                            name="price"
                                            type="number"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="engine" className="block text-sm font-medium text-white">
                                        Engine
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="engine"
                                            name="engine"
                                            autoComplete="country-name"
                                            className="col-start-1 row-start-1 w-90 appearance-none rounded-md bg-gray-900 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        >
                                            <option>Diesel</option>
                                            <option>Petrol</option>
                                            <option>Electric</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 w-5 h-5 self-center justify-self-end text-gray-500 sm:w-4 sm:h-4"
                                        />
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-white">
                                        imageUrl
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="imageUrl"
                                            name="imageUrl"
                                            type="text"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Profile Section */}
                        <div className="border-b border-gray-600/10 pb-10">
                            <h2 className="text-base font-semibold text-white">For connection</h2>
                            <p className="mt-1 text-sm text-gray-400">
                                These fields for contact with you and more information about the car
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-white">
                                        Phone number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="number"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-white">
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium text-white">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                            defaultValue={''}
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to="/" className="text-sm font-semibold text-white">
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

            {/* Втори тъмен градиент */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gray-700 to-gray-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    )
}
