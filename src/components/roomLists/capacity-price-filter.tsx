import { useState } from "react"

export default function CapacityPriceFilter() {
    const [capacity, setCapacity] = useState("")
    const [price, setPrice] = useState("")
  
    return (
      <div className="max-w-xs p-4 bg-white">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Maximum Capacity</h2>
          <div className="space-y-2">
            {["20", "25", "40", "50", "100", "150", "200"].map((option:string) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="capacity"
                  value={option}
                  checked={capacity === option}
                  onChange={() => setCapacity(option)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option} Persons</span>
              </label>
            ))}
          </div>
        </div>
  
        <div>
          <h2 className="text-lg font-medium mb-3">Price</h2>
          <div className="space-y-2">
            {["50-100", "100-150", "150-200", "200-250", "250-300"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="price"
                  value={option}
                  checked={price === option}
                  onChange={() => setPrice(option)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    )
  }
  