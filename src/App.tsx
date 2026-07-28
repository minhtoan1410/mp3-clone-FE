import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();
function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  async function saveUserToDatabase(data: {
    username: string;
    password: string;
  }) {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: data.username,
          password: data.password,
        },
      });

      console.log("Đã gửi và lưu thành công lên MongoDB:", newUser);
      return { success: true, data: newUser };
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu lên database:", error);
      return { success: false, error };
    } finally {
      await prisma.$disconnect();
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await saveUserToDatabase(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block mb-1 text-sm font-medium text-slate-600"
        >
          Tài khoản (Username)
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Nhập tên tài khoản..."
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-slate-600"
        >
          Mật khẩu (Password)
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Nhập mật khẩu..."
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 cursor-pointer"
      >
        Đăng Nhập
      </button>
    </form>
  );
}

export default App;
