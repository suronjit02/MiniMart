const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const dataFile = path.join(__dirname, 'data.json')

function readData() {
  try {
    if (fs.existsSync(dataFile)) {
      const data = fs.readFileSync(dataFile, 'utf8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error reading data:', error)
  }
  return []
}

function writeData(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error writing data:', error)
  }
}

function initializeData() {
  const existingData = readData()
  if (existingData.length === 0) {
    const initialData = [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
        price: 99.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        description: 'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Track your health goals.',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
      },
      {
        id: 3,
        name: 'Premium Laptop Backpack',
        description: 'Durable and stylish laptop backpack with multiple compartments and water-resistant material. Perfect for work and travel.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
      },
      {
        id: 4,
        name: 'Wireless Phone Charger',
        description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop'
      },
      {
        id: 5,
        name: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery life. Perfect for outdoor adventures.',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'
      },
      {
        id: 6,
        name: 'USB-C Hub',
        description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card slots. Essential for modern laptops and devices.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop'
      }
    ]
    writeData(initialData)
    return initialData
  }
  return existingData
}

let items = initializeData()

app.get('/items', (req, res) => {
  res.json(items)
})

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const item = items.find(item => item.id === id)
  
  if (!item) {
    return res.status(404).json({ error: 'Item not found' })
  }
  
  res.json(item)
})

app.post('/items', (req, res) => {
  const { name, description, price, image } = req.body
  
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Name, description, and price are required' })
  }
  
  const newItem = {
    id: Math.max(...items.map(item => item.id), 0) + 1,
    name,
    description,
    price: parseFloat(price),
    image: image || ''
  }
  
  items.push(newItem)
  writeData(items)
  
  res.status(201).json(newItem)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`Available endpoints:`)
  console.log(`  GET  /items`)
  console.log(`  GET  /items/:id`)
  console.log(`  POST /items`)
})