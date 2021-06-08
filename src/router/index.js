import Vue from 'vue'
import VueRouter from 'vue-router'
import Triangle from "@/views/TrianglePro/Triangle";
import Calendar from "@/views/CalendarPro/Calendar";
import ComputerSelling from "@/views/ComputerSellingPro/ComputerSelling";
import TelCharge from "@/views/TelChargePro/TelCharge";
import ProjectAna from "@/views/ProjectAnaPro/ProjectAna";
import TriangleDe from "@/views/TrianglePro/TriangleDe";
import CalendarDe from "@/views/CalendarPro/CalendarDe";
import ComputerSellingDe from "@/views/ComputerSellingPro/ComputerSellingDe";
import TelChargeDe from "@/views/TelChargePro/TelChargeDe";
import ProjectAnaDe from "@/views/ProjectAnaPro/ProjectAnaDe";
import Home from "@/views/Home";
import SellingManage from "@/views/SellingManagePro/SellingManage";
import E_commerce from "@/views/E_commercePro/E_commerce";
import CS_System from "@/views/CS_SystemPro/CS_System";
import ATMDe from "@/views/ATMPro/ATMDe";
import ATM from "@/views/ATMPro/ATM";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Default',
        redirect: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/triangle',
        name: 'Triangle',
        component: Triangle
    },
    {
        path: '/triangleDe',
        name: 'TriangleDe',
        component: TriangleDe
    },
    {
        path: '/sellingManage',
        name: 'SellingManage',
        component: SellingManage
    },
    {
        path: '/e_commerce',
        name: 'E_commerce',
        component: E_commerce
    },
    {
        path: '/cs_system',
        name: 'CS_System',
        component: CS_System
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/calendarDe',
        name: 'CalendarDe',
        component: CalendarDe
    },
    {
        path: '/computerSelling',
        name: 'ComputerSelling',
        component: ComputerSelling
    },
    {
        path: '/computerSellingDe',
        name: 'ComputerSellingDe',
        component: ComputerSellingDe
    },
    {
        path: '/telCharge',
        name: 'TelCharge',
        component: TelCharge
    },
    {
        path: '/telChargeDe',
        name: 'TelChargeDe',
        component: TelChargeDe
    },
    {
        path: '/projectAna',
        name: 'ProjectAna',
        component: ProjectAna
    },
    {
        path: '/projectAnaDe',
        name: 'ProjectAnaDe',
        component: ProjectAnaDe
    },
    {
        path: '/atm',
        name: 'ATM',
        component: ATM
    },
    {
        path: '/atmDe',
        name: 'ATMDe',
        component: ATMDe
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
