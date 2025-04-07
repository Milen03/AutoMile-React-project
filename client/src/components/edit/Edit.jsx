import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useNavigate, useParams, Link } from "react-router"
import { useCar, useEditCar } from "../../api/carsApi.js"

export default function Edit() {
  const navigate = useNavigate()
  const { carId } = useParams();  // Важни скоби тук!
  const { car } = useCar(carId)
  const { edit } = useEditCar()

  const formAction = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const carData = Object.fromEntries(formData)

    await edit(carId, carData)

    navigate(`/cars/${carId}/details`)
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

      {/* Form Content – добавяме mt-20 за допълнителен отстъп */}
      <div className="relative z-10 p-8 mt-20">
        <form onSubmit={formAction}>
          <div className="space-y-12">
            {/* Car Information Section */}
            <div className="border-b border-gray-600/10 pb-12">
              <div className="mt-20">
                <h2 className="text-base font-semibold text-white">Car Edit </h2>
                
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
                      defaultValue={car.brand}
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
                      defaultValue={car.model}
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
                      defaultValue={car['car-year']}
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
                      defaultValue={car.price}
                      className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
                
                {car.engine &&(
                <div className="sm:col-span-3">
                  <label htmlFor="engine" className="block text-sm font-medium text-white">
                    Engine
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="engine"
                      name="engine"
                      autoComplete="country-name"
                      defaultValue={car.engine}
                      className="col-start-1 row-start-1 w-90 appearance-none rounded-md bg-gray-900 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    >
                      <option value="Diesel">Diesel</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Electric">Electric</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 w-5 h-5 self-center justify-self-end text-gray-500 sm:w-4 sm:h-4"
                    />
                  </div>
                </div>
                )}

                <div className="col-span-full">
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-white">
                    imageUrl
                  </label>
                  <div className="mt-2">
                    <input
                      id="imageUrl"
                      name="imageUrl"
                      type="text"
                      defaultValue={car.imageUrl}
                      className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* For connection Section */}
            <div className="border-b border-gray-600/10 pb-10">
              <h2 className="text-base font-semibold text-white">For connection Edit</h2>
              

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="number"
                      defaultValue={car.phoneNumber}
                      className="block w-[400px] rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="block text-sm font-medium text-white">
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      defaultValue={car.address}
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
                      defaultValue={car.about}
                      className="block w-full rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to={`/cars/${carId}/details`} className="text-sm font-semibold text-white">
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
