import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const specs = [
    { parameter: "Model Number", value: "EV-4K-2100" },
    { parameter: "Resolution", value: "3840 x 2160 pixels (4K UHD)" },
    { parameter: "Field of View", value: "90°" },
    { parameter: "Direction of View", value: "0° (Forward)" },
    { parameter: "Working Length", value: "302 mm" },
    { parameter: "Outer Diameter", value: "10 mm" },
    { parameter: "Sterilization", value: "Autoclavable, STERRAD, V-PRO" },
    { parameter: "Compatibility", value: "Standard camera control units (CCU)" },
];

export function ProductSpecs() {
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
            <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Full Spec Sheet
            </Button>
        </div>
    </div>
  );
}
