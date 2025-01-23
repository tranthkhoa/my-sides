import React, { useState, useEffect } from 'react'
import Modal from 'bootstrap/js/dist/modal'

function ContactModal() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const [modalInstance, setModalInstance] = useState(null);

  useEffect(() => {
    // Initialize modal
    const modal = document.getElementById('contactModal');
    const bsModal = new Modal(modal, {
      backdrop: 'static',
      keyboard: false
    });
    setModalInstance(bsModal);

    // Cleanup on unmount
    return () => {
      if (modalInstance) {
        modalInstance.dispose();
      }
    };
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Vui lòng nhập họ tên';
    if (!formData.phone) {
      tempErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.email) {
      tempErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email không hợp lệ';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
      alert('Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        note: ''
      });
      // Close modal after successful submission
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };

  const handleClose = () => {
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  return (
    <div 
      className="modal fade" 
      id="contactModal" 
      tabIndex="-1" 
      aria-labelledby="contactModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title" id="contactModalLabel">Liên Hệ Với Chúng Tôi</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Họ và Tên</label>
                <input
                  type="text"
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên"
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Số Điện Thoại</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ email"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="note" className="form-label">Ghi Chú</label>
                <textarea
                  className="form-control"
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Nhập nội dung cần tư vấn"
                ></textarea>
              </div>

              <div className="modal-footer border-0 px-0">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleClose}
                >
                  Đóng
                </button>
                <button type="submit" className="btn btn-success">Gửi Thông Tin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal 