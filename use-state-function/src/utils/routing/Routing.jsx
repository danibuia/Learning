import React from "react";
import "./Routing.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Admin from "../../pages/admin/Admin";
import NotFound from "../../pages/notFound/NotFound";
import ProtectedRoute from "../protectedroute/ProtecteadRoute";
import Table from "../../pages/table/Table";
import Inputs from "../../pages/inputs/Inputs";
import AddMember from "../../pages/addMember/AddMember";
import DeleteMembers from "../../pages/deleteMember/DeleteMember";
import Project from "../../pages/project/Project";
import Editable from "../../pages/editable/Editable";
import Posts from "../../pages/posts/Posts";
import DeletePosts from "../../pages/posts/deletePost/Delete.Post";


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
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/table"
          element={
            <ProtectedRoute>
              <Table />
            </ProtectedRoute>
          }
        />
      

        <Route path="/inputs" element={<Inputs />} />
        <Route
          path="/addMember"
          element={
            <ProtectedRoute>
              <AddMember />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
           <Posts/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/deletepost"
          element={
            <ProtectedRoute>
              <DeletePosts/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editable"
          element={
            <ProtectedRoute>
              <Editable />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
export default Routing;
