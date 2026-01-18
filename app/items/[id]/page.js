import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

async function getItem(id) {
  try {
    const res = await fetch(`http://localhost:3001/items/${id}`, { cache: 'no-store' })
    if (!res.ok) {
      return null
    }
    return res.json()
  } catch (error) {
    return null
  }
}

export default async function ItemDetails({ params }) {
  const item = await getItem(params.id)

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Item Not Found</h1>
            <p className="text-gray-600 mb-6">The item you're looking for doesn't exist.</p>
            <Link 
              href="/items"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Items
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            href="/items"
            className="text-primary hover:text-blue-700 transition-colors"
          >
            ← Back to Items
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-8xl">📦</span>
                )}
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {item.name}
              </h1>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${item.price}
                </span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Add to Wishlist
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Product ID:</span>
                    <span>{item.id}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-green-600">In Stock</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free shipping on orders over $50</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}