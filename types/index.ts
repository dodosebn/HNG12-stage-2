export interface LayoutContProps {
    children: React.ReactNode;
}

export interface TickTypeProps {
    // bgCol: string;
    err: string;
    price: string;
    info: string;
    isSelected: boolean;
    handleTicketTypeSelection: (type: string) => void;
  }

export interface ButtonCtrlProps {
    btnName: string;
    bgCol: string;
    color: string;
    handleClicks?: () => void;
}

export interface upPageInfoProps {
    readonly pgName: string;
    readonly pgNum: string;
}
