import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );

  if (!user) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">Kullanıcı bulunamadı!</div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="card-title mb-0">Kullanıcı Detayları</h2>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate("/")}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Geri Dön
                </button>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-2">Ad Soyad</h6>
                    <p className="mb-0">{user.name}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-2">E-posta</h6>
                    <p className="mb-0">{user.email}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-2">Telefon</h6>
                    <p className="mb-0">{user.phone}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-2">Şirket</h6>
                    <p className="mb-0">{user.company?.name || "-"}</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 bg-light rounded">
                    <h6 className="text-muted mb-2">Adres</h6>
                    <p className="mb-0">
                      {user.address?.street || "-"}, {user.address?.city || "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
