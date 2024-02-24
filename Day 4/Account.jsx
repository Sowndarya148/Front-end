import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

function Account() {
  // Sample user data, replace it with actual user data
  const user = {
    fullName: 'Riya',
    email: 'riya@example.com',
    phoneNumber: '8923671207',
    address: '123 Main St, Anytown, USA ',
    enrolledCourses: [' Cyber Security', 'Java Programming', 'Spoken English'],
  };

  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">User Account</h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center justify-center">
          {/* Add a larger rounded image here */}
          <img
            className="rounded-full h-32 w-32 object-cover"
            src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?t=st=1708757513~exp=1708761113~hmac=4c091001a67d4cf78fc6dc19d895e3347c9fdb53cb57ff720940d33a55571583&w=996"
            alt="User Profile"
            />
        </div>
        <h3 className="text-2xl leading-6 font-medium text-gray-900 mt-4">
          {user.fullName}
        </h3>
        <p className="text-sm text-gray-500">{user.email}</p>

        <table className="mt-4 w-full">
          <tbody>
            <TableRow label="Phone number" value={user.phoneNumber} />
            <TableRow label="Address" value={user.address} />
            <TableRow label="Enrolled Courses" value={user.enrolledCourses.join(', ')} />
          </tbody>
        </table>
      </div>
</div>
        <Footer />
    </div>

  );
}

// Helper component for table rows
function TableRow({ label, value }) {
  return (
    <tr>
      <td className="text-sm font-medium text-purple-500">{label}</td>
      <td className="text-sm text-gray-900">{value}</td>
    </tr>
  );
}

export default Account;
