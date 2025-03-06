import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/usersSlice";

const UserForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  });

  useEffect(() => {
    if (user && user.id) {
      setFormData({
        ...user,
        company: user.company || { name: "" },
        address: user.address || {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
        },
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user.id) {
      dispatch(updateUser({ ...formData, id: user.id }));
    } else {
      dispatch(addUser({ ...formData, id: Date.now() }));
    }
    onClose();
  };

  const handleChange = (e, section, field) => {
    if (section) {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const isEditMode = user && user.id;

  return (
    <>
      <div className="modal-backdrop show"></div>
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content shadow-lg border-0">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title h4">
                {isEditMode ? "Kullanıcıyı Düzenle" : "Yeni Kullanıcı Ekle"}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  {/* Temel Bilgiler */}
                  <div className="col-12">
                    <h6 className="mb-3 text-primary">Temel Bilgiler</h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="bi bi-person me-2"></i>
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="bi bi-envelope me-2"></i>
                          E-posta
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* İletişim Bilgileri */}
                  <div className="col-12">
                    <h6 className="mb-3 text-primary">İletişim Bilgileri</h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="bi bi-telephone me-2"></i>
                          Telefon
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="bi bi-globe me-2"></i>
                          Website
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          value={formData.website}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          <i className="bi bi-building me-2"></i>
                          Şirket
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.company.name}
                          onChange={(e) => handleChange(e, "company", "name")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Adres Bilgileri */}
                  <div className="col-12">
                    <h6 className="mb-3 text-primary">Adres Bilgileri</h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Sokak</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.address.street}
                          onChange={(e) => handleChange(e, "address", "street")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Daire</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.address.suite}
                          onChange={(e) => handleChange(e, "address", "suite")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Şehir</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.address.city}
                          onChange={(e) => handleChange(e, "address", "city")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Posta Kodu</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.address.zipcode}
                          onChange={(e) =>
                            handleChange(e, "address", "zipcode")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer border-top-0 pt-4">
                  <button
                    type="button"
                    className="btn btn-light px-4"
                    onClick={onClose}
                  >
                    İptal
                  </button>
                  <button type="submit" className="btn btn-primary px-4">
                    {isEditMode ? "Güncelle" : "Kaydet"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
