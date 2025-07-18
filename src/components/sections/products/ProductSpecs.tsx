import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { ProductSpec } from "@/lib/products.tsx";
import Link from "next/link";

interface ProductSpecsProps {
    specs: ProductSpec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="mt-8">
        <div className="border rounded-lg overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-1/3">Parameter</TableHead>
                    <TableHead>Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {specs.map((spec) => (
                    <TableRow key={spec.parameter}>
                        <TableCell className="font-medium">{spec.parameter}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        <div className="mt-6 text-center">
            <Button asChild>
                <Link href="/laparoscopic-instruments-spec-sheet.txt" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Spec Sheet
                </Link>
            </Button>
        </div>
    </div>
  );
}
