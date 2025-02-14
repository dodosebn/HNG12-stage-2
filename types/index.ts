
export interface LayoutContProps {
    // padding: string;
    // radius: string;
    // height: string;
    children: React.ReactNode;
}

export interface TickTypeProps {
    // bgCol: string;
    price: string;
    info: string;
    handleTicketTypeSelection: (type: string) => void;
}

export interface ButtonCtrlProps {
    btnName: string;
    bgCol: string;
    color: string;
    handleClicks: () => void;
  }
export interface upPageInfoProps {
    pgName: string;
    pgNum: string;
}