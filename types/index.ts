
export interface LayoutContProps {
    children: React.ReactNode;
}

export interface TickTypeProps {
    isSelected: boolean; 
    price: string;
    info: string;
    handleTicketTypeSelection: (type: string) => void;
        err: string;
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
