
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import type { ProductSpec } from "@/lib/products.tsx";
import { useState } from "react";
import jsPDF from "jspdf";

interface ProductSpecsProps {
    specs?: ProductSpec[];
}

const catalogContent = `
Bluezone Surgical Laparoscopic Instruments Catalog
Welcome to the Bluezone Surgical product catalog. This comprehensive guide features a detailed lineup of our laparoscopic instruments, complete with categorized descriptions. The Bluezone Surgical logo will be prominently displayed on the cover and throughout the catalog for strong brand identity.

About Bluezone Surgical
Bluezone Surgical specializes in delivering precision-engineered, reliable, and innovative instruments for minimally invasive surgery. Our products are trusted by surgical teams worldwide for consistency and quality.

Catalog Contents
1. Laparoscopic Scissors (5mm)
Curved Scissor: Allows precise dissection around vessels and curves.
Straight Scissor: Clean, controlled cuts for tissue and sutures.
Micro Scissor: Ultra-fine blades for microsurgical tasks.
Hook Scissor: Hooked blade for encircling and severing fibrous tissues.

2. Laparoscopic Graspers
Double Action (5mm):
Maryland, Mixter (90°), Universal/Maxi, Allies, Bowel/Fenestrated (long/medium/short), End Clinch, Claw (2x4/2x3), Babcock, Alligator, Plain, Oviduct.
Single Action (5mm):
Croce Olmi, Allies (Single Action).
Single Action (10mm):
Claw Forcep, Spoon Forcep, OP Scissor.

3. Clip Applicators
10mm Double Action: For secure placement of hemostatic clips (LT200, LT300, LT400 series, long inserts).
10mm Single Action: For ligating medium-to-large vessels (LT300, LT400).
5mm Clip Applicator: Designed for small vessels via 5mm ports.

4. Needle Holders
Ethicon Type (Stainless Steel)
Storz Type (Aluminum Gun, V Type)
Jaw Options: Straight, Right, Left, Toothed

5. Suction & Irrigation Systems
Thumb Suction (5mm, 10mm to 5mm)
Trumpet Suction (5mm, 10mm to 5mm)
Storz Type Trumpet Suction

6. Monopolar Electrodes
L Hook, J Hook, Spatula, Ball Electrode

7. Bipolar Instruments
Coagulation Forceps: U Handle (Tong/Fenestrated Jaw), X Handle (Tong/Fenestrated)
Non-Detachable Bipolar Graspers: Maryland D/A, Bowel D/A, Ruby D/A
Detachable Bipolar Grasper Cutters: Blue/Black Bissinger, Wolf (Handles), Maryland, Fenestrated, Ruby (Jaws)
Sealer Cutters: Non-detachable (Indian Handle), Detachable (Silver/Gold/Blue/Black Jaws)

8. Trocars & Veress Needles
Trocar Sizes: 3mm, 5mm, 7mm, 10mm, 12mm, 15mm, 20mm
Materials/Types: Stainless Steel, Brass, Storz, Magnetic
Veress Needle Lengths: 100, 120, 140, 160 mm

9. Endo Retractors
Fan Retractor Straight (5mm, 3 Prongs)
Fan Retractor Articulation (5mm/10mm, 5 Prongs)

10. Laparoscopy Reducers
Metal Reducers: 20→10mm, 15→10mm, 10→7mm, 10→5mm, 7→5mm, 5→3mm
Top Mounted & Flipon Reducers (10→5mm)

Why Choose Bluezone Surgical?
Precision-crafted instruments
Comprehensive surgical selection
Globally trusted by surgical professionals
`;

export function ProductSpecs({ specs }: ProductSpecsProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePdf = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF();
      
      // Add logo (simple text version)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text("Bluezone Surgical", 105, 20, { align: "center" });
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      
      const splitText = doc.splitTextToSize(catalogContent.trim(), 180);
      doc.text(splitText, 15, 35);
      
      doc.save("Bluezone-Surgical-Laparoscopic-Catalog.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      // You might want to show a toast notification here
    } finally {
      setIsGenerating(false);
    }
  };
  
  if (!specs || specs.length === 0) {
    return (
        <div className="text-center py-8 text-muted-foreground">
            <p>No specifications available for this product.</p>
             <div className="mt-6 text-center">
                <Button onClick={generatePdf} disabled={isGenerating}>
                    {isGenerating ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <Download className="mr-2 h-4 w-4" />
                            Download Spec Sheet (PDF)
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
  }

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
            <Button onClick={generatePdf} disabled={isGenerating}>
                {isGenerating ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                    </>
                ) : (
                    <>
                        <Download className="mr-2 h-4 w-4" />
                        Download Spec Sheet (PDF)
                    </>
                )}
            </Button>
        </div>
    </div>
  );
}
