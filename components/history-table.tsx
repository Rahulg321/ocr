"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, Download, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Define the data type for our table
export type FileHistory = {
  id: string;
  fileName: string;
  dateTime: string;
  processingTime: string;
  fileType: "PDF" | "DOC" | "XLS" | "PPT" | "TXT" | "Other";
  fileSize: string;
  status: "Successful" | "Unsuccessful" | "Processing" | "Pending";
  action: "Download" | "Retry";
};

// Helper function to get file type badge color
const getFileTypeBadgeColor = (fileType: string) => {
  switch (fileType) {
    case "PDF":
      return "bg-red-100 text-red-600";
    case "DOC":
      return "bg-blue-100 text-blue-600";
    case "XLS":
      return "bg-green-100 text-green-600";
    case "PPT":
      return "bg-orange-100 text-orange-600";
    case "TXT":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

// Helper function to get status badge color
const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "Successful":
      return "bg-green-100 text-green-600 hover:bg-green-100";
    case "Unsuccessful":
      return "bg-red-100 text-red-600 hover:bg-red-100";
    case "Processing":
      return "bg-blue-100 text-blue-600 hover:bg-blue-100";
    case "Pending":
      return "bg-yellow-100 text-yellow-600 hover:bg-yellow-100";
    default:
      return "bg-gray-100 text-gray-600 hover:bg-gray-100";
  }
};

// Helper function to get action button color
const getActionButtonColor = (action: string) => {
  switch (action) {
    case "Download":
      return "bg-blue-50 text-blue-600 hover:bg-blue-100";
    case "Retry":
      return "bg-orange-50 text-orange-600 hover:bg-orange-100";
    default:
      return "bg-gray-50 text-gray-600 hover:bg-gray-100";
  }
};

export function HistoryTable({ data }: { data: FileHistory[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      // Hide less important columns on smaller screens by default
      processingTime: true,
    });
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 8,
  });

  // Update column visibility based on screen size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumnVisibility({
          fileName: true,
          fileType: true,
          status: true,
          action: true,
          dateTime: false,
          processingTime: false,
          fileSize: false,
        });
      } else if (window.innerWidth < 768) {
        setColumnVisibility({
          fileName: true,
          fileType: true,
          status: true,
          action: true,
          dateTime: true,
          processingTime: false,
          fileSize: true,
        });
      } else {
        setColumnVisibility({
          fileName: true,
          fileType: true,
          status: true,
          action: true,
          dateTime: true,
          processingTime: true,
          fileSize: true,
        });
      }
    };

    // Set initial visibility
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns: ColumnDef<FileHistory>[] = [
    {
      accessorKey: "fileName",
      header: "File name",
      cell: ({ row }) => (
        <div className="font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
          {row.getValue("fileName")}
        </div>
      ),
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: ({ row }) => (
        <div className="whitespace-nowrap">{row.getValue("dateTime")}</div>
      ),
    },
    {
      accessorKey: "processingTime",
      header: "Processing time",
      cell: ({ row }) => (
        <div className="whitespace-nowrap">
          {row.getValue("processingTime")}
        </div>
      ),
    },
    {
      accessorKey: "fileType",
      header: "Uploaded file",
      cell: ({ row }) => {
        const fileType = row.getValue("fileType") as string;
        return (
          <Badge
            className={cn(
              "font-medium whitespace-nowrap",
              getFileTypeBadgeColor(fileType)
            )}
            variant="outline"
          >
            {fileType}
          </Badge>
        );
      },
    },
    {
      accessorKey: "fileSize",
      header: "File size",
      cell: ({ row }) => {
        const fileSize = row.getValue("fileSize") as string;
        const isLarge = fileSize.includes("MB");
        return (
          <Badge
            className={cn(
              "font-medium whitespace-nowrap",
              isLarge ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
            )}
            variant="outline"
          >
            {fileSize}
          </Badge>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            className={cn(
              "font-medium whitespace-nowrap",
              getStatusBadgeColor(status)
            )}
            variant="outline"
          >
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        const action = row.getValue("action") as string;
        return (
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "whitespace-nowrap min-w-[90px]",
              getActionButtonColor(action)
            )}
          >
            {action === "Download" ? (
              <>
                <Download className="mr-1 h-3 w-3" />
                <span className="hidden sm:inline">Download</span>
                <span className="sm:hidden">DL</span>
              </>
            ) : (
              <>
                <RefreshCw className="mr-1 h-3 w-3" />
                <span className="hidden sm:inline">Retry</span>
                <span className="sm:hidden">RT</span>
              </>
            )}
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Filter files..."
            value={
              (table.getColumn("fileName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("fileName")?.setFilterValue(event.target.value)
            }
            className="w-full sm:max-w-sm"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-between"
              >
                <span className="truncate">Filter by: All Category</span>
                <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuCheckboxItem
                checked={true}
                onCheckedChange={() => {}}
              >
                All Category
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                PDF Files
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                DOC Files
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                XLS Files
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-between"
              >
                <span className="truncate">Sort by: Recent</span>
                <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuCheckboxItem
                checked={true}
                onCheckedChange={() => {}}
              >
                Recent
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                Oldest
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                File Size (Largest)
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={false}
                onCheckedChange={() => {}}
              >
                File Size (Smallest)
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="whitespace-nowrap">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-3">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {Array.from({ length: Math.min(table.getPageCount(), 5) }, (_, i) => {
            const pageIndex = i;
            return (
              <Button
                key={i}
                variant={
                  pageIndex === table.getState().pagination.pageIndex
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => table.setPageIndex(pageIndex)}
                className="w-8 h-8 p-0"
              >
                {pageIndex + 1}
              </Button>
            );
          })}
          {table.getPageCount() > 5 && (
            <>
              <span className="mx-1">...</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                className="w-8 h-8 p-0"
              >
                {table.getPageCount()}
              </Button>
            </>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
