'use client'
import { Link, useNavigate, useParams } from "react-router"
import useAuth from "../../hooks/useAuth.js"
import { useCar, useDelete } from "../../api/carsApi.js"
import { useState } from "react"

export default function Details() {
    const navigation = useNavigate()
    const { email, _id: userId } = useAuth()
    const { carId } = useParams()
    const { car } = useCar(carId)
    const { deleteGame } = useDelete()

    const carDeleteClickHendler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${car.brand} Car?`)

        if (!hasConfirm) {
            return
        }

        await deleteGame(carId)

        navigation('/cars/catalog')
    }

    

    const isOwner = userId === car._ownerId

    return (
        <div className="relative min-h-screen bg-[#111827] text-white">
            {/* Gradient Backgrounds */}
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

            <div className="pt-6 relative z-10">
                {/* Image Gallery */}
                <div className="mx-auto mt-15 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <img
                        src={car.imageUrl}
                        className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
                    />
                </div>

                {/* Product Information */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    {/* Title */}
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-600 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {car.brand}
                        </h1>
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            {car.model}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-white">{car.price} Lv</p>
                        <form className="mt-10">
                            {isOwner && (
                                <>
                                    <Link
                                        to={`/cars/${carId}/edit`}
                                        className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={carDeleteClickHendler}
                                        className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}

                            <h1>Likes: 0</h1>
                            {!isOwner &&(
                                <button
                                    onClick='#'
                                    className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Like
                                </button>)}
                           
                            <p>You have liked this car</p>
                        </form>
                    </div>

                    {/* Car Specifications and Contact */}
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-600 lg:pt-6 lg:pr-8 lg:pb-16">
                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-white">Car specifications</h3>
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-300">
                                    <li>Engine: {car.engine}</li>
                                    <li>Car Year: {car['car-year']}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-white">Contact details and address</h3>
                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm text-gray-300">
                                    <li>Phone Number: {car.phoneNumber}</li>
                                    <li>Address: {car.address}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-white">About</h2>
                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-300">{car.about}</p>
                                {car.about === '' && <p className="text-sm text-gray-300">No content for About</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
