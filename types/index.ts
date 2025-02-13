import ButtonCtrl from "@/components/customs/buttonCtrl";

export interface LayoutContProps {
    // padding: string;
    // radius: string;
    // height: string;
    children: React.ReactNode;
}

export interface TickTypeProps {
    bgCol: string;
    price: string;
    info: string;
}
export interface ButtonCtrlProps {
    btnName: string;
    bgCol: string;
    color: string;
    handleClicks: any;
}
export interface upPageInfoProps {
    pgName: string;
    pgNum: string;
}