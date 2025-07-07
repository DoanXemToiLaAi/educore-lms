import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

// Mock user data
const mockUsers = {
  system_admin: {
    id: 1,
    name: "Nguyễn Văn Admin",
    email: "admin@educore.vn",
    role: "system_admin",
    avatar: "/placeholder.svg?height=40&width=40&text=A",
  },
  school_admin: {
    id: 2,
    name: "Trần Thị Hiệu Trưởng",
    email: "hieutruong@educore.vn",
    role: "school_admin",
    avatar: "/placeholder.svg?height=40&width=40&text=HT",
  },
  teacher: {
    id: 3,
    name: "Lê Văn Giáo Viên",
    email: "giaovien@educore.vn",
    role: "teacher",
    avatar: "/placeholder.svg?height=40&width=40&text=GV",
  },
  student: {
    id: 4,
    name: "Phạm Thị Học Sinh",
    email: "hocsinh@educore.vn",
    role: "student",
    avatar: "/placeholder.svg?height=40&width=40&text=HS",
  },
  parent: {
    id: 5,
    name: "Hoàng Văn Phụ Huynh",
    email: "phuhuynh@educore.vn",
    role: "parent",
    avatar: "/placeholder.svg?height=40&width=40&text=PH",
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("educore_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (role, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "123456") {
          const userData = mockUsers[role];
          setUser(userData);
          localStorage.setItem("educore_user", JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error("Mật khẩu không đúng. Vui lòng sử dụng: 123456"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("educore_user");
  };

  const switchRole = (newRole) => {
    const updatedUser = { ...mockUsers[newRole] };
    setUser(updatedUser);
    localStorage.setItem("educore_user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
