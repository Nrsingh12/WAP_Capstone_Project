import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showEdit, setShowEdit] = useState(false);

  // Load saved user data from localStorage
  useEffect(() => {
    const savedUserData = localStorage.getItem('userProfile');
    if (savedUserData) {
      const data = JSON.parse(savedUserData);
      setContactNumber(data.contactNumber || '');
      setDeliveryAddress(data.deliveryAddress || '');
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify({
      contactNumber,
      deliveryAddress
    }));
    setShowEdit(false);
  };

  const handleCancel = () => {
    const savedUserData = localStorage.getItem('userProfile');
    if (savedUserData) {
      const data = JSON.parse(savedUserData);
      setContactNumber(data.contactNumber || '');
      setDeliveryAddress(data.deliveryAddress || '');
    }
    setShowEdit(false);
  };

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.picture} alt="profile" className="profile-image" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>

      <div className="profile-content">
        <h3>Contact Information</h3>
        {showEdit ? (
          <div className="edit-form">
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your contact number"
              />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Enter your delivery address"
              />
            </div>
            <div className="button-group">
              <button onClick={handleSave} className="save-btn">Save Changes</button>
              <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="view-mode">
            <div className="info-item">
              <span className="label">Contact Number:</span>
              <span className="value">{contactNumber || 'Not set'}</span>
            </div>
            <div className="info-item">
              <span className="label">Delivery Address:</span>
              <span className="value">{deliveryAddress || 'Not set'}</span>
            </div>
            <button onClick={() => setShowEdit(true)} className="edit-btn">
              Edit Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
