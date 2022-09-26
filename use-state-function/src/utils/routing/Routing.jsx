import React from 'react';
import "./Routing.css";
import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import Admin from '../../pages/admin/Admin';
import NotFound from '../../pages/notFound/NotFound';
import ProtectedRoute from '../protectedroute/ProtecteadRoute'
import Table from '../../pages/table/Table';
import Register from '../../pages/table/register';
import Inputs from '../../pages/inputs/Inputs';
import AddMember from '../../pages/addMember/AddMember';
import Blogs from '../../pages/blogs/Blogs';
import AddBlog from '../../pages/blogs/addBlog/AddBlog';
import DeleteMembers from '../../pages/deleteMember/DeleteMember';
import Project from '../../pages/project/Project';
import Editable from '../../pages/editable/Editable';
import MyProfile from '../../pages/myProfile/MyProfile';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DeleteMembers />
            </ProtectedRoute>}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/table"
          element={
            <ProtectedRoute>
              <Table />
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Register />} />

        <Route path='/inputs' element={
          <Inputs />} />
        <Route path='/addMember' element={<ProtectedRoute>
          <AddMember />
        </ProtectedRoute>} />
        <Route path='/blogs' element={<ProtectedRoute>
          <Blogs />
        </ProtectedRoute>} />
        <Route path='/addpost' element={<ProtectedRoute>
          <AddBlog />
        </ProtectedRoute>} />
        <Route path='/project' element={<ProtectedRoute>
          <Project />
        </ProtectedRoute>} />
        <Route path='/editable' element={<ProtectedRoute>
          <Editable />
        </ProtectedRoute>} />
        <Route path='/myprofile' element={<ProtectedRoute>
          <MyProfile />
        </ProtectedRoute>} />
      </Routes>
     
    </>
  )
}
export default Routing;