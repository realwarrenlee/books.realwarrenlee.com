import { TableHead, TableCell } from "@/components/ui/table";
import { ReactNode } from "react";

interface TableHeadWithWidthProps {
  width: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

interface TableCellWithWidthProps {
  width: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

export const TableHeadWithWidth = ({ 
  width, 
  className = "", 
  children, 
  ...props 
}: TableHeadWithWidthProps) => (
  <TableHead 
    className={`font-bold align-middle ${className}`} 
    style={{ width }} 
    {...props}
  >
    {children}
  </TableHead>
);

export const TableCellWithWidth = ({ 
  width, 
  className = "", 
  children, 
  ...props 
}: TableCellWithWidthProps) => (
  <TableCell 
    className={className} 
    style={{ width }} 
    {...props}
  >
    {children}
  </TableCell>
);