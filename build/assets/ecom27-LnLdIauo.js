var e=[`
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import * as styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const { fetchWithAuth, user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
    users: 0,
  });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    images: '',
  });
  const [productFormErrors, setProductFormErrors] = useState({});
  const [savingProduct, setSavingProduct] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [statsRes, productsRes, ordersRes, usersRes, categoriesRes] =
          await Promise.all([
            fetchWithAuth('http://localhost:5001/api/admin/stats'),
            fetchWithAuth('http://localhost:5001/api/products?limit=100'),
            fetchWithAuth('http://localhost:5001/api/orders/all'),
            fetchWithAuth('http://localhost:5001/api/users'),
            fetchWithAuth('http://localhost:5001/api/products/categories'),
          ]);

        const [statsData, productsData, ordersData, usersData, categoriesData] =
          await Promise.all([
            statsRes.json(),
            productsRes.json(),
            ordersRes.json(),
            usersRes.json(),
            categoriesRes.json(),
          ]);

        setStats(statsData);
        setProducts(productsData.products || []);
        setOrders(ordersData.orders || []);
        setUsers(usersData.users || []);
        setCategories(categoriesData.categories || []);
      } catch (err) {
        console.error('Admin fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };
    if (!user) return;
    fetchData();
  }, [user]);

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      price: '',
      stock: '',
      category: '',
      images: '',
    });
    setProductFormErrors({});
    setEditingProduct(null);
  };

  const openAddProduct = () => {
    resetProductForm();
    setShowProductModal(true);
  };

  const openEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name || '',
      description: product.description || '',
      price: product.price?.toString() || '',
      stock: product.stock?.toString() || '',
      category: product.category || '',
      images: product.images?.join(', ') || '',
    });
    setProductFormErrors({});
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    resetProductForm();
  };

  const handleProductFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
    if (productFormErrors[name]) {
      setProductFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateProductForm = () => {
    const errors = {};
    if (!productForm.name.trim()) errors.name = 'Name is required';
    if (!productForm.description.trim())
      errors.description = 'Description is required';
    if (
      !productForm.price ||
      isNaN(productForm.price) ||
      +productForm.price < 0
    )
      errors.price = 'Valid price is required';
    if (
      productForm.stock === '' ||
      isNaN(productForm.stock) ||
      +productForm.stock < 0
    )
      errors.stock = 'Valid stock quantity is required';
    setProductFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveProduct = async () => {
    if (!validateProductForm()) return;
    try {
      setSavingProduct(true);

      const imagesArray = productForm.images
        .split(',')
        .map((img) => img.trim())
        .filter((img) => img.length > 0);

      const productData = {
        name: productForm.name.trim(),
        description: productForm.description.trim(),
        price: parseFloat(productForm.price),
        stock: parseInt(productForm.stock, 10),
        category: productForm.category.trim(),
        images: imagesArray,
      };

      let res;
      if (editingProduct) {
        res = await fetchWithAuth(
          \`http://localhost:5001/api/products/\${editingProduct._id}\`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData),
          },
        );
      } else {
        res = await fetchWithAuth('http://localhost:5001/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
      }

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to save product');

      if (editingProduct) {
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? data.product : p)),
        );
        toast.success('Product updated successfully!');
      } else {
        setProducts((prev) => [data.product, ...prev]);
        setStats((prev) => ({ ...prev, products: prev.products + 1 }));
        toast.success('Product created successfully!');
      }

      if (productData.category && !categories.includes(productData.category)) {
        setCategories((prev) => [...prev, productData.category].sort());
      }
      closeProductModal();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSavingProduct(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      setDeleting(true);

      const res = await fetchWithAuth(
        \`http://localhost:5001/api/products/\${productId}\`,
        { method: 'DELETE' },
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete product');
      }

      setProducts((prev) => prev.filter((p) => p._id !== productId));
      setStats((prev) => ({ ...prev, products: prev.products - 1 }));
      toast.success('Product deleted successfully!');
      setDeleteConfirm(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem('accessToken');
      await fetchWithAuth(
        \`http://localhost:5001/api/orders/\${orderId}/status\`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: \`Bearer \${token}\`,
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o)),
      );
      toast.success('Order status updated!');
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const handleToggleAdmin = async (userId, currentRole) => {
    try {
      const token = localStorage.getItem('accessToken');
      await fetchWithAuth(\`http://localhost:5001/api/users/\${userId}/role\`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify({
          role: currentRole === 'admin' ? 'user' : 'admin',
        }),
      });
      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId
            ? { ...u, role: currentRole === 'admin' ? 'user' : 'admin' }
            : u,
        ),
      );
      toast.success(
        \`User role updated to \${currentRole === 'admin' ? 'user' : 'admin'}!\`,
      );
    } catch (err) {
      toast.error('Failed to update role');
    }
  };

  if (loading)
    return <div className={styles.loading}>Loading dashboard...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <p className={styles.welcome}>
        Welcome back, <strong>{user?.name}</strong>
      </p>

      <div className={styles.tabs}>
        {['overview', 'products', 'orders', 'users'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? styles.tabActive : styles.tab}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className={styles.grid}>
          <div className={styles.statCard}>
            <h3>Total Products</h3>
            <p className={styles.statNumber}>{stats.products}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Total Orders</h3>
            <p className={styles.statNumber}>{stats.orders}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Revenue</h3>
            <p className={styles.statNumber}>
              £{stats.revenue?.toFixed(2) || '0.00'}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Users</h3>
            <p className={styles.statNumber}>{stats.users}</p>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Products ({products.length})</h2>
            <button onClick={openAddProduct} className={styles.addBtn}>
              + Add Product
            </button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <img
                        src={p.images?.[0] || '/placeholder.jpg'}
                        alt={p.name}
                        className={styles.productThumb}
                      />
                    </td>
                    <td>{p.name}</td>
                    <td>£{p.price.toFixed(2)}</td>
                    <td>
                      <span
                        className={
                          p.stock > 10
                            ? styles.stockGood
                            : p.stock > 0
                              ? styles.stockLow
                              : styles.stockOut
                        }
                      >
                        {p.stock}
                      </span>
                    </td>
                    <td>{p.category || '-'}</td>
                    <td className={styles.actions}>
                      <button
                        onClick={() => openEditProduct(p)}
                        className={styles.editBtn}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(p)}
                        className={styles.deleteBtn}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className={styles.section}>
          <h2>Orders ({orders.length})</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o._id}>
                    <td>#{o._id.slice(-6)}</td>
                    <td>{new Date(o.createdAt).toLocaleDateString()}</td>
                    <td>{o.shippingAddress.fullName}</td>
                    <td>£{o.totalAmount.toFixed(2)}</td>
                    <td>
                      <select
                        value={o.status}
                        onChange={(e) =>
                          handleStatusChange(o._id, e.target.value)
                        }
                        className={styles.statusSelect}
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                    <td>
                      <button className={styles.viewBtn}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className={styles.section}>
          <h2>Users ({users.length})</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>
                      <button
                        onClick={() => handleToggleAdmin(u._id, u.role)}
                        className={
                          u.role === 'admin'
                            ? styles.demoteBtn
                            : styles.promoteBtn
                        }
                      >
                        {u.role === 'admin' ? 'Demote' : 'Make Admin'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showProductModal && (
        <div className={styles.modalOverlay} onClick={closeProductModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={closeProductModal} className={styles.modalClose}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={productForm.name}
                  onChange={handleProductFormChange}
                  className={
                    productFormErrors.name ? styles.inputError : styles.input
                  }
                  placeholder="Enter product name"
                />
                {productFormErrors.name && (
                  <span className={styles.errorText}>
                    {productFormErrors.name}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label>Description *</label>
                <textarea
                  name="description"
                  value={productForm.description}
                  onChange={handleProductFormChange}
                  className={
                    productFormErrors.description
                      ? styles.inputError
                      : styles.input
                  }
                  placeholder="Enter product description"
                  rows="3"
                />
                {productFormErrors.description && (
                  <span className={styles.errorText}>
                    {productFormErrors.description}
                  </span>
                )}
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Price (£) *</label>
                  <input
                    type="number"
                    name="price"
                    value={productForm.price}
                    onChange={handleProductFormChange}
                    className={
                      productFormErrors.price ? styles.inputError : styles.input
                    }
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                  {productFormErrors.price && (
                    <span className={styles.errorText}>
                      {productFormErrors.price}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Stock *</label>
                  <input
                    type="number"
                    name="stock"
                    value={productForm.stock}
                    onChange={handleProductFormChange}
                    className={
                      productFormErrors.stock ? styles.inputError : styles.input
                    }
                    placeholder="0"
                    min="0"
                  />
                  {productFormErrors.stock && (
                    <span className={styles.errorText}>
                      {productFormErrors.stock}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={productForm.category}
                  onChange={handleProductFormChange}
                  className={styles.input}
                  placeholder="e.g., Electronics, Clothing"
                  list="category-list"
                />
                <datalist id="category-list">
                  {categories.map((cat) => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>
              <div className={styles.formGroup}>
                <label>Image URLs (comma-separated)</label>
                <textarea
                  name="images"
                  value={productForm.images}
                  onChange={handleProductFormChange}
                  className={styles.input}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                  rows="2"
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                onClick={closeProductModal}
                className={styles.cancelBtn}
                disabled={savingProduct}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProduct}
                className={styles.saveBtn}
                disabled={savingProduct}
              >
                {savingProduct
                  ? 'Saving...'
                  : editingProduct
                    ? 'Update Product'
                    : 'Create Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div
          className={styles.modalOverlay}
          onClick={() => setDeleteConfirm(null)}
        >
          <div
            className={styles.confirmModal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Delete Product</h3>
            <p>
              Are you sure you want to delete "
              <strong>{deleteConfirm.name}</strong>
              "? This action cannot be undone.
            </p>
            <div className={styles.confirmActions}>
              <button
                onClick={() => setDeleteConfirm(null)}
                className={styles.cancelBtn}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(deleteConfirm._id)}
                className={styles.confirmDeleteBtn}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

`];export{e as default};
//# sourceMappingURL=ecom27-LnLdIauo.js.map