import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaIdCard, FaLock, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import '../styles/global.css';

const AccountSettings = () => {
  const { user } = useAuth();
  const [editingField, setEditingField] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    id: user?.id || 'USER-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    password: '••••••••'
  });
  const [tempData, setTempData] = useState({});

  const handleEdit = (field) => {
    setEditingField(field);
    setTempData({ [field]: formData[field] });
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempData({});
  };

  const handleSave = (field) => {
    setFormData({
      ...formData,
      [field]: tempData[field]
    });
    setEditingField(null);
    setTempData({});
    // Here you would normally update the user data in your backend
    console.log(`Updated ${field}:`, tempData[field]);
  };

  const handleChange = (field, value) => {
    setTempData({
      ...tempData,
      [field]: value
    });
  };

  const fields = [
    {
      key: 'name',
      label: 'Full Name',
      icon: FaUser,
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email Address',
      icon: FaEnvelope,
      type: 'email'
    },
    {
      key: 'id',
      label: 'User ID',
      icon: FaIdCard,
      type: 'text',
      readOnly: true
    },
    {
      key: 'password',
      label: 'Password',
      icon: FaLock,
      type: 'password'
    }
  ];

  return (
    <div className="account-settings-container">
      <div className="account-settings-header">
        <h1 className="account-settings-title">Account Settings</h1>
        <p className="account-settings-subtitle">Manage your account information and preferences</p>
      </div>

      <div className="account-settings-content">
        <div className="account-settings-card">
          <div className="account-settings-card-header">
            <h2 className="account-settings-card-title">Personal Information</h2>
          </div>

          <div className="account-settings-fields">
            {fields.map((field) => {
              const Icon = field.icon;
              const isEditing = editingField === field.key;
              const isReadOnly = field.readOnly;

              return (
                <div key={field.key} className="account-settings-field">
                  <div className="account-settings-field-label">
                    <Icon className="field-icon" />
                    <span className="field-label-text">{field.label}</span>
                  </div>

                  <div className="account-settings-field-value">
                    {isEditing ? (
                      <div className="field-edit-container">
                        <input
                          type={field.type}
                          value={tempData[field.key] || ''}
                          onChange={(e) => handleChange(field.key, e.target.value)}
                          className="field-edit-input"
                          autoFocus
                        />
                        <div className="field-edit-actions">
                          <button
                            onClick={() => handleSave(field.key)}
                            className="field-edit-btn field-save-btn"
                          >
                            <FaSave />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="field-edit-btn field-cancel-btn"
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="field-display-container">
                        <span className="field-value-text">{formData[field.key]}</span>
                        {!isReadOnly && (
                          <button
                            onClick={() => handleEdit(field.key)}
                            className="field-edit-trigger"
                          >
                            <FaEdit />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="account-settings-card">
          <div className="account-settings-card-header">
            <h2 className="account-settings-card-title">Account Status</h2>
          </div>

          <div className="account-status-info">
            <div className="account-status-item">
              <span className="account-status-label">Member Since</span>
              <span className="account-status-value">Today</span>
            </div>
            <div className="account-status-item">
              <span className="account-status-label">Account Type</span>
              <span className="account-status-value">Student</span>
            </div>
            <div className="account-status-item">
              <span className="account-status-label">Status</span>
              <span className="account-status-value account-status-active">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
