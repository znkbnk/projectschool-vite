const solutionCode1 = `
//client/src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

const CartPage = () => <div>Cart Page</div>;
const CheckoutPage = () => <div>Checkout Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const OrderDetailPage = () => <div>Order Detail Page</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders/:id" element={<OrderDetailPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

`;

const solutionCode2 = `
//client/src/components/Productcard

import { Link } from 'react-router-dom';
import * as styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { _id, name, price, images, averageRating = 0, numReviews = 0 } = product;
  const imageUrl = images && images.length > 0 ? images[0] : '/placeholder.jpg';

  return (
    <Link to={\`/products/\${_id}\`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={\`\${styles.star} \${
                  i < Math.floor(averageRating) ? styles.starFilled : ''
                }\`}
              >
                star
              </span>
            ))}
          </div>
          <span className={styles.reviewCount}>({numReviews})</span>
        </div>

        <div className={styles.price}>\${price?.toFixed(2) || '0.00'}</div>
      </div>
    </Link>
  );
};

export default ProductCard;


`;
const solutionCode3 = `
//client/src/components/HomePage.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import * as styles from './HomePage.module.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'http://localhost:5001/api/products?limit=6&sort=-createdAt',
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch products');
        }

        setProducts(data.products || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to PLUG</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products" className={styles.heroCta}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className={styles.featured}>
        <div className={styles.featuredContainer}>
          <h2 className={styles.featuredTitle}>Featured Products</h2>

          {loading && <div className={styles.loading}>Loading products...</div>}

          {error && <div className={styles.error}>{error}</div>}

          {!loading && !error && products.length === 0 && (
            <div className={styles.empty}>No products available right now.</div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

`;
const solutionCode4 = `
//client/src/components/ProductDetailPage

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as styles from './ProductDetailPage.module.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(\`http://localhost:5001/api/products/\${id}\`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Product not found');

        setProduct(data.product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product || product.stock < quantity) return;

    try {
      setAdding(true);
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setToast({ type: 'error', message: 'Please log in to add to cart' });
        return;
      }

      const res = await fetch('http://localhost:5001/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify({ productId: product._id, quantity }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to add to cart');

      setToast({ type: 'success', message: \`Added \${quantity} to cart!\` });
      setQuantity(1);
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setAdding(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  if (loading) return <p className={styles.loading}>Loading product...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!product) return <p className={styles.empty}>Product not found</p>;

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        {/* breadcrumb */}
        <Link to="/" className={styles.breadLink}>
          Home
        </Link>
        <span className={styles.breadSep}>/</span>
        <Link to="/products" className={styles.breadLink}>
          Products
        </Link>
        <span className={styles.breadSep}>/</span>
        <span className={styles.breadCurrent}>{product.name}</span>
      </nav>

      <div className={styles.main}>
        {/*image gallery*/}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img
              src={product.images[0] || '/placeholder.jpg'}
              alt={product.name}
              className={styles.image}
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.slice(0, 4).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={\`\${product.name} \${i + 1}\`}
                  className={styles.thumb}
                />
              ))}
            </div>
          )}
        </div>

        {/*product info*/}
        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={\`\${styles.star} \${
                    i < Math.floor(product.averageRating || 0)
                      ? styles.starFilled
                      : ''
                  }\`}
                >
                  star
                </span>
              ))}
            </div>
            <span className={styles.reviewCount}>
              ({product.numReviews || 0} reviews)
            </span>
          </div>

          <div className={styles.price}>\${product.price?.toFixed(2)}</div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.stock}>
            {product.stock > 0 ? (
              <span className={styles.inStock}>
                In Stock ({product.stock} left)
              </span>
            ) : (
              <span className={styles.outOfStock}>Out of Stock</span>
            )}
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={styles.qtyBtn}
                disabled={product.stock === 0}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(product.stock, +e.target.value)),
                  )
                }
                className={styles.qtyInput}
                min="1"
                max={product.stock}
              />
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                className={styles.qtyBtn}
                disabled={product.stock === 0}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={
                adding || product.stock === 0 || product.stock < quantity
              }
              className={styles.addBtn}
            >
              {adding ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* toast */}
      {toast && (
        <div className={\`\${styles.toast} \${styles[toast.type]}\`}>
          {toast.message}
        </div>
      )}

      {/* related products*/}
      <section className={styles.related}>
        <h2 className={styles.relatedTitle}>Related Products</h2>
        {/* in reall apss fetch related by castegory*/}
        <div className={styles.relatedGrid}>
          <p className={styles.comingSoon}>Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;

`;
const solutionCode5 = `
//client/src/components/ProductListPage

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as styles from './ProductListPage.module.css';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const [formData, setFormData] = useState({
    search: search,
    category: category,
    minPrice: minPrice,
    maxPrice: maxPrice,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          'http://localhost:5001/api/products/categories',
        );
        const data = await res.json();
        if (res.ok) setCategories(data.categories || []);
      } catch (err) {
        console.error('Failed to load categories');
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (category) params.append('category', category);
        if (minPrice) params.append('minPrice', minPrice);
        if (maxPrice) params.append('maxPrice', maxPrice);
        params.append('page', page);
        params.append('limit', 12);

        const res = await fetch(\`http://localhost:5001/api/products?\${params}\`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Failed to load products');

        setProducts(data.products || []);
        setTotalPages(data.pagination?.totalPages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, category, minPrice, maxPrice, page]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParams = {};
    if (formData.search) newParams.search = formData.search;
    if (formData.category) newParams.category = formData.category;
    if (formData.minPrice) newParams.minPrice = formData.minPrice;
    if (formData.maxPrice) newParams.maxPrice = formData.maxPrice;
    newParams.page = 1;
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams((prev) => {
        const p = new URLSearchParams(prev);
        p.set('page', newPage);
        return p;
      });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>All Products</h1>
        <p className={styles.subtitle}>Browse our full collection</p>
      </section>

      <div className={styles.main}>
        <aside className={styles.filters}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="search"
              value={formData.search}
              onChange={handleInputChange}
              placeholder="Search products..."
              className={styles.input}
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <div className={styles.priceRange}>
              <input
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleInputChange}
                placeholder="Min $"
                className={styles.priceInput}
              />
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleInputChange}
                placeholder="Max $"
                className={styles.priceInput}
              />
            </div>

            <button type="submit" className={styles.applyBtn}>
              Apply Filters
            </button>
          </form>
        </aside>

        <section className={styles.gridSection}>
          {loading && <p className={styles.loading}>Loading products...</p>}

          {error && <p className={styles.error}>{error}</p>}

          {!loading && !error && products.length === 0 && (
            <p className={styles.empty}>No products match your filters.</p>
          )}

          {!loading && !error && products.length > 0 && (
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={styles.pageBtn}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={\`\${styles.pageBtn} \${page === i + 1 ? styles.pageBtnActive : ''}\`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className={styles.pageBtn}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductListPage;

`;
const solutionCode6 = `
// server/seedProducts.js

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "High-quality noise-canceling headphones with 30-hour battery life",
    price: 79.99,
    stock: 50,
    category: "Electronics",
    images: ["https://picsum.photos/seed/product1/400/400"]
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Insulated 32oz water bottle keeps drinks cold for 24 hours",
    price: 24.99,
    stock: 100,
    category: "Home & Kitchen",
    images: ["https://picsum.photos/seed/product2/400/400"]
  },
  {
    name: "Yoga Mat Premium",
    description: "Non-slip eco-friendly yoga mat with carrying strap",
    price: 39.99,
    stock: 75,
    category: "Sports & Fitness",
    images: ["https://picsum.photos/seed/product3/400/400"]
  },
  {
    name: "LED Desk Lamp",
    description: "Adjustable brightness desk lamp with USB charging port",
    price: 34.99,
    stock: 60,
    category: "Home & Office",
    images: ["https://picsum.photos/seed/product4/400/400"]
  },
  {
    name: "Backpack Laptop 15.6 inch",
    description: "Water-resistant laptop backpack with multiple compartments",
    price: 49.99,
    stock: 45,
    category: "Bags & Luggage",
    images: ["https://picsum.photos/seed/product5/400/400"]
  },
  {
    name: "Ceramic Coffee Mug Set",
    description: "Set of 4 handcrafted ceramic mugs, 12oz each",
    price: 29.99,
    stock: 80,
    category: "Home & Kitchen",
    images: ["https://picsum.photos/seed/product6/400/400"]
  },
  {
    name: "Wireless Gaming Mouse",
    description: "RGB gaming mouse with 16000 DPI and programmable buttons",
    price: 59.99,
    stock: 40,
    category: "Electronics",
    images: ["https://picsum.photos/seed/product7/400/400"]
  },
  {
    name: "Plant-Based Protein Powder",
    description: "Organic vanilla protein powder, 2lb container, 20g protein per serving",
    price: 44.99,
    stock: 90,
    category: "Health & Nutrition",
    images: ["https://picsum.photos/seed/product8/400/400"]
  },
  {
    name: "Throw Blanket Sherpa",
    description: "Ultra-soft reversible sherpa blanket, 50x60 inches",
    price: 32.99,
    stock: 65,
    category: "Home & Decor",
    images: ["https://picsum.photos/seed/product9/400/400"]
  },
  {
    name: "Portable Phone Charger",
    description: "20000mAh power bank with fast charging and dual USB ports",
    price: 27.99,
    stock: 120,
    category: "Electronics",
    images: ["https://picsum.photos/seed/product10/400/400"]
  },
  {
    name: "Running Shoes Men's",
    description: "Lightweight breathable running shoes with cushioned sole",
    price: 89.99,
    stock: 55,
    category: "Sports & Fitness",
    images: ["https://picsum.photos/seed/product11/400/400"]
  },
  {
    name: "Smart Watch Fitness Tracker",
    description: "Heart rate monitor, sleep tracking, and 7-day battery life",
    price: 129.99,
    stock: 35,
    category: "Electronics",
    images: ["https://picsum.photos/seed/product12/400/400"]
  },
  {
    name: "Sunglasses Polarized UV400",
    description: "Classic aviator style with 100% UV protection",
    price: 39.99,
    stock: 70,
    category: "Fashion & Accessories",
    images: ["https://picsum.photos/seed/product13/400/400"]
  },
  {
    name: "Kitchen Knife Set",
    description: "Professional 8-piece stainless steel knife set with block",
    price: 119.99,
    stock: 30,
    category: "Home & Kitchen",
    images: ["https://picsum.photos/seed/product14/400/400"]
  },
  {
    name: "Essential Oil Diffuser",
    description: "Ultrasonic aromatherapy diffuser with LED lights and auto shut-off",
    price: 29.99,
    stock: 85,
    category: "Home & Decor",
    images: ["https://picsum.photos/seed/product15/400/400"]
  }
];

const seedProducts = async () => {
  try {
    await connectDB();
    
    //remove all products (not recommended)
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    //insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(\`✅ Successfully added \${createdProducts.length} products\`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
`;
const solutionCode7 = `
// server/controllers/productController.js

import Product from '../models/Product.js';

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Product.distinct('category');
    res.json({ categories: categories.filter(Boolean).sort() }); 
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice,
      search,
    } = req.query;
    const query = {};
    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) query.$text = { $search: search };
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select(
        'name description price stock category images averageRating numReviews createdAt updatedAt',
      );
    const total = await Product.countDocuments(query);
    res.json({
      products,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      'ratings.user',
      'name email',
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category,
      images,
      ratings = [],
    } = req.body;
    if (!name || !description || !price || typeof stock !== 'number') {
      return res.status(400).json({
        message:
          'Required fields: name, description, price, and stock must be provided',
      });
    }
    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
      images,
      ratings,
      averageRating: 0,
      numReviews: 0,
    });
    await product.save();
    res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true },
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const addRating = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    if (!rating) {
      return res.status(400).json({ message: 'Rating is required' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const alreadyRated = product.ratings.some(
      (r) => r.user.toString() === req.user.id,
    );
    if (alreadyRated) {
      return res
        .status(400)
        .json({ message: 'User has already rated this product' });
    }
    product.ratings.push({
      user: req.user.id,
      rating,
      comment,
      createdAt: new Date(),
    });
    product.numReviews = product.ratings.length;
    product.averageRating =
      product.ratings.reduce((sum, r) => sum + r.rating, 0) /
      product.numReviews;
    await product.save();
    res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
};

export const editRating = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    if (!rating) {
      return res.status(400).json({ message: 'Rating is required' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const userRating = product.ratings.find(
      (r) => r.user.toString() === req.user.id,
    );
    if (!userRating) {
      return res
        .status(404)
        .json({ message: 'Rating not found for this user' });
    }
    userRating.rating = rating;
    userRating.comment = comment || '';
    userRating.createdAt = new Date();
    product.numReviews = product.ratings.length;
    product.averageRating =
      product.ratings.reduce((sum, r) => sum + r.rating, 0) /
      product.numReviews;
    await product.save();
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const getProductRatings = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt:desc',
      minRating,
      maxRating,
    } = req.query;
    const product = await Product.findById(req.params.id).populate(
      'ratings.user',
      'name email',
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    let ratings = [...product.ratings];
    if (minRating || maxRating) {
      const min = minRating ? Number(minRating) : 1;
      const max = maxRating ? Number(maxRating) : 5;
      ratings = ratings.filter((r) => r.rating >= min && r.rating <= max);
    }
    const [sortField, sortOrder] = sortBy.split(':');
    const validFields = ['rating', 'createdAt'];
    const field = validFields.includes(sortField) ? sortField : 'createdAt';
    const order = sortOrder === 'asc' ? 1 : -1;
    ratings.sort((a, b) => {
      if (field === 'createdAt') {
        return order * (new Date(a.createdAt) - new Date(b.createdAt));
      }
      return order * (a.rating - b.rating);
    })
    const total = ratings.length;
    const paginatedRatings = ratings.slice((page - 1) * limit, page * limit)
    .map(rating => ({
        _id: rating._id,
        user: rating.user,
        rating: rating.rating,
        comment: rating.comment,
        createdAt: rating.createdAt
      }));
    res.json({
      ratings: paginatedRatings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteRating = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const userRatingIndex = product.ratings.findIndex(
      (r) => r.user.toString() === req.user.id,
    );
    if (userRatingIndex === -1) {
      return res
        .status(404)
        .json({ message: 'Rating not found for this user' });
    }
    product.ratings.splice(userRatingIndex, 1);
    product.numReviews = product.ratings.length;
    product.averageRating =
      product.ratings.length > 0
        ? product.ratings.reduce((sum, r) => sum + r.rating, 0) /
          product.ratings.length
        : 0;
    await product.save();
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

`;
const solutionCode8 = `
//server/routes/productRoutes.js

import express from 'express';
import { getProducts, getCategories, getProductById, createProduct, updateProduct, deleteProduct, addRating, editRating, getProductRatings, deleteRating } from '../controllers/productController.js';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/categories', getCategories);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', [authMiddleware, adminMiddleware], createProduct);
router.patch('/:id', [authMiddleware, adminMiddleware], updateProduct);
router.delete('/:id', [authMiddleware, adminMiddleware], deleteProduct);
router.post('/:id/ratings', authMiddleware, addRating);
router.patch('/:id/ratings', authMiddleware, editRating);
router.get('/:id/ratings', getProductRatings);
router.delete('/:id/ratings', authMiddleware, deleteRating);

export default router;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
  solutionCode7,
  solutionCode8,
];
