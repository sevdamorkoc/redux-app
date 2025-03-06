import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "../redux/usersSlice";
import "../App.css";

const UsersList = ({ onEditUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Kullanıcıyı silmek istediğinize emin misiniz?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleEdit = (e, user) => {
    e.stopPropagation();
    onEditUser(user);
  };

  if (loading) {
    return (
      <div className="card text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        {error}
      </div>
    );
  }

  return (
    <div className="row g-4">
      {users.map((user) => (
        <div key={user.id} className="col-md-6 col-lg-4">
          <div
            className="card h-100 shadow-sm"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onClick={() => navigate(`/user/${user.id}`)}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--primary-pink)",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="flex-grow-1">
                  <h5
                    className="card-title mb-1"
                    style={{ color: "var(--dark-purple)" }}
                  >
                    {user.name}
                  </h5>
                  <p
                    className="card-text mb-0"
                    style={{ color: "var(--primary-purple)" }}
                  >
                    <i className="bi bi-envelope me-2"></i>
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="border-top pt-3">
                <h6 className="text-primary mb-2">İletişim Bilgileri</h6>
                <p className="card-text mb-2">
                  <i className="bi bi-telephone me-2"></i>
                  {user.phone || "-"}
                </p>
                <p className="card-text mb-2">
                  <i className="bi bi-globe me-2"></i>
                  {user.website || "-"}
                </p>
                <p className="card-text mb-2">
                  <i className="bi bi-building me-2"></i>
                  {user.company?.name || "-"}
                </p>
              </div>

              <div className="border-top pt-3 mt-3">
                <h6 className="text-primary mb-2">Adres Bilgileri</h6>
                <p className="card-text small mb-1">
                  <i className="bi bi-geo-alt me-2"></i>
                  {user.address?.street
                    ? `${user.address.street}${
                        user.address.suite ? `, ${user.address.suite}` : ""
                      }`
                    : "-"}
                </p>
                <p className="card-text small mb-0 text-muted">
                  {user.address?.city && user.address?.zipcode
                    ? `${user.address.city}, ${user.address.zipcode}`
                    : user.address?.city || user.address?.zipcode || "-"}
                </p>
              </div>

              <div className="d-flex gap-2 mt-3 pt-3 border-top">
                <button
                  className="button flex-grow-1"
                  onClick={(e) => handleEdit(e, user)}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Düzenle
                </button>
                <button
                  className="button"
                  style={{ background: "var(--dark-purple)" }}
                  onClick={(e) => handleDelete(e, user.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
