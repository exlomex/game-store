import {Navigate, Route, Routes} from 'react-router-dom';
import {MainPage} from "@/pages/MainPage";
import {RequireAuth} from "@/components/RequireAuth";
import {UserRoles} from "@/store/reducers/UserSliceSchema";
import {GoodPage} from '@/pages/GoodPage'
import {CategoryPage} from "@/pages/CategoryPage/CategoryPage";
import React from "react";
import {LoginPage} from "@/pages/LoginPage";
import {RegisterPage} from "@/pages/RegisterPage";

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
            <Route path="/admin" element={
                <RequireAuth roles={[UserRoles.ADMIN]}>
                    <div>admin page</div>
                </RequireAuth>
            }/>
            <Route path="/goods/search" element={
                <CategoryPage/>
            }/>
            <Route path="/goods:id" element={
                <GoodPage/>
            }/>
            <Route path="/login" element={
                <RequireAuth roles={[UserRoles.GUEST]}>
                    <LoginPage/>
                </RequireAuth>
            }/>

            <Route path="/register" element={
                <RequireAuth roles={[UserRoles.GUEST]}>
                    <RegisterPage/>
                </RequireAuth>
            }/>
            {/*<Route path="/order" element={*/}
            {/*    <RequireAuth roles={[UserRoles.ADMIN, UserRoles.USER]}>*/}
            {/*        <OrderPage/>*/}
            {/*    </RequireAuth>*/}
            {/*}/>*/}
            {/*<Route path="/orders" element={*/}
            {/*    <RequireAuth roles={[UserRoles.ADMIN, UserRoles.USER]}>*/}
            {/*        <MyOrdersPage/>*/}
            {/*    </RequireAuth>*/}
            {/*}/>*/}
            {/*<Route path="/" element={}/>*/}
            <Route path="*" element={<Navigate to="/404page" replace />}/>
        </Routes>
);
