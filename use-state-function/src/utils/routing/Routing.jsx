import React from 'react';
import "./Routing.css";
import { Route , Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import Dashboard from "../../pages/dashboard/Dashboard";
import Admin from '../../pages/admin/Admin';
import NotFound from '../../pages/notFound/NotFound';
import ProtectedRoute from '../protectedroute/ProtecteadRoute'
import Table from '../../pages/table/Table';

const Routing = () => {
  return (
    <>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute> 
                <Dashboard/> 
              </ProtectedRoute>}
            />
          <Route 
              path="/admin" 
              element={
                <ProtectedRoute> 
                  <Admin/> 
                </ProtectedRoute>} />
          <Route path="*" element={<NotFound/>}/>
          <Route 
            path="/table" 
            element={
              <ProtectedRoute> 
                <Table/> 
                </ProtectedRoute>
              }
            />
        </Routes>
    </>
  )
}
export default Routing;