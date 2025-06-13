import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import './Admin.css';

const Admin = () => {
  const [productList, setProductList] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    image: '',
    imageName: '',
    new_price: '',
    old_price: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [showPreviews, setShowPreviews] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      const fileURL = URL.createObjectURL(files[0]);
      setFormData({ ...formData, image: fileURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setShowPreviews(true); // previews only after update
  };

  const handleUpdate = () => {
    if (editIndex !== null) {
      const updatedList = [...productList];
      updatedList[editIndex] = { ...formData };
      setProductList(updatedList);
      setEditIndex(null);
    } else {
      const newProduct = { ...formData }; 
      setProductList([...productList, newProduct]);
    }

    setShowPreviews(true); 
    setFormData({
      id: '',
      name: '',
      category: '',
      image: '',
      imageName: '',
      new_price: '',
      old_price: '',
    });
  };

  const handleDelete = (index) => {
    const updatedList = productList.filter((_, i) => i !== index);
    setProductList(updatedList);
    setEditIndex(null);
    setFormData({
      id: '',
      name: '',
      category: '',
      image: '',
      imageName: '',
      new_price: '',
      old_price: '',
    });
    setShowPreviews(true);
  };

  const handleEdit = (index) => {
    setFormData(productList[index]);
    setEditIndex(index);
    setShowPreviews(true);
  };

  return (
    <div className='admin'>
      <div className='admin-upper-part'>
        <div className='image-shopify'>
          <img src={logo} alt='' height='25px' />
          <h1>Shopify</h1>
        </div>
      </div>

      <div className='admin-lower-part'>
        <div className='id-section'>
          <h1>Id</h1>
          <input type='text' value={formData.id} name='id' onChange={handleChange} />
          {showPreviews && formData.id && <p>{formData.id}</p>}
        </div>
        <div className='name'>
          <h1>Product Name</h1>
          <hr/>
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
          {showPreviews && formData.name && <p>{formData.name}</p>}
        </div>
        <div className='product-category'>
          <h1>Category</h1>
          <hr/>
          <input type='text' name='category' value={formData.category} onChange={handleChange} />
          {showPreviews && formData.category && <p>{formData.category}</p>}
        </div>
        <div className='image-box'>
          <h1>Image</h1>
          <input type='file' name='image' accept='image/*' onChange={handleChange} />
          {showPreviews && formData.image && <img src={formData.image} alt='' height='40px' />}
        </div>
        <div className='image-name'>
          <h1>Image Name</h1>
          <input type='text' name='imageName' value={formData.imageName} onChange={handleChange} />
          {showPreviews && formData.imageName && <p>{formData.imageName}</p>}
        </div>
        <div className='new-price-box'>
          <h1>New Price</h1>
          <input type='text' name='new_price' value={formData.new_price} onChange={handleChange} />
          {showPreviews && formData.new_price && <p>{formData.new_price}</p>}
        </div>
        <div className='old-price-box'>
          <h1>Old Price</h1>
          <input type='text' name='old_price' value={formData.old_price} onChange={handleChange} />
          {showPreviews && formData.old_price && <p>{formData.old_price}</p>}
        </div>

        <div className='update-button' onClick={handleUpdate}>Add</div>
        
      </div>

      <div className='product-list'>
        {productList.map((product, index) => (
          <div key={product.id} className='product-entry'>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Category:</strong> {product.category}</p>
            {product.image && <img src={product.image} alt='' height='40px' />}
            <p><strong>Image Name:</strong> {product.imageName}</p>
            <p><strong>New Price:</strong> {product.new_price}</p>
            <p><strong>Old Price:</strong> {product.old_price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className='edit-button' onClick={() => handleEdit(index)}>Edit</div>
              <div className='delete-button' onClick={() => handleDelete(index)}>Delete</div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Admin;


