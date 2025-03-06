import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/usersSlice";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import UserDetail from "./components/UserDetail";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { users, loading, error } = useSelector((state) => state.users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <Router>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 mb-0">Kullanıcı Yönetimi</h1>
          <button className="btn btn-primary" onClick={handleAddUser}>
            <i className="bi bi-plus-lg me-2"></i>
            Yeni Kullanıcı
          </button>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <UsersList
                users={users}
                loading={loading}
                error={error}
                onEditUser={handleEditUser}
              />
            }
          />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>

        {showModal && (
          <UserForm user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </Router>
  );
}

export default App;
