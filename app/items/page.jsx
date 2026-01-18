import Link from "next/link";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

async function getItems() {
  try {
    const res = await fetch("http://localhost:3001/items", {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function Items() {
  const items = await getItems();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">All Items</h1>
          <p className="text-gray-600">
            Discover our amazing collection of products
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No items available
            </h3>
            <p className="text-gray-600 mb-6">
              Start the Express server to see items
            </p>
            <p className="text-sm text-gray-500">Run: npm run server</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {items.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>
                <div className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl">📦</span>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${item.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
