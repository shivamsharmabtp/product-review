import { useEffect, useState } from "react";
import { SalesData } from "../ProductDetails/utils/productDetailsInterface";
import { ChevronDown } from "lucide-react";

function getFormattedHeader(str: string) {
  return str.replace(/([A-Z])/g, " $1").toUpperCase();
}

function getFormattedCell(header: string, value: string | number) {
  if (header === "weekEnding") {
    value += "T00:00:00";
    const [month, day, year] = new Date(value)
      .toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
      .split("/");
    return `${month}-${day}-${year}`;
  }
  if (header === "retailSales" || header === "wholesaleSales" || header === "retailerMargin") {
    return `$ ${value.toLocaleString()}`;
  }
  return value;
}

const SalesTable = ({ salesData }: { salesData: SalesData[] }) => {
  const [sortedData, setSortedData] = useState<SalesData[]>([]);
  const [sortBy, setSortBy] = useState<keyof SalesData | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);

  const sortData = () => {
    let newData = JSON.parse(JSON.stringify(salesData));
    if (sortBy && sortDirection)
      newData.sort((a: SalesData, b: SalesData) =>
        sortDirection === "asc"
          ? a[sortBy] > b[sortBy]
            ? 1
            : -1
          : b[sortBy] > a[sortBy]
          ? 1
          : -1
      );
    setSortedData(newData);
  };

  useEffect(() => {
    if (salesData && salesData.length > 0) {
      setTableHeaders(Object.keys(salesData[0]));
    }
    sortData();
  }, [salesData, sortBy, sortDirection]);

  return (
    <div className="w-full p-8">
      <table className="w-full text-[13px]">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="text-left font-normal text-gray-600 pb-3 cursor-pointer select-none"
                onClick={() => {
                  setSortDirection((prev) =>
                    prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
                  );
                  setSortBy(header as keyof SalesData);
                }}
              >
                <span className="flex items-center gap-2">
                  {getFormattedHeader(header)}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      sortBy === header && sortDirection === "asc"
                        ? "rotate-180"
                        : ""
                    } ${sortDirection === null ? "text-gray-400" : ""}`}
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((sale: SalesData, index) => (
            <tr key={index}>
              {tableHeaders.map((header, index) => (
                <td
                  key={index}
                  className="text-left text-gray-400 py-2 border-t border-gray-100"
                >
                  {getFormattedCell(header, sale[header as keyof SalesData])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
