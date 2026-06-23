import jsPDF from "jspdf";

export const downloadReport = (data) => {

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);

    doc.text("AI Investment Research Report", 20, y);

    y += 20;

    doc.setFontSize(14);

    doc.text(`Company: ${data.company}`, 20, y);

    y += 15;

    doc.text(
        `Investment Score: ${data.decision.investment_score}/10`,
        20,
        y
    );

    y += 15;

    doc.text(
        `Recommendation: ${data.decision.recommendation}`,
        20,
        y
    );

    y += 20;

    doc.text("Reasoning:", 20, y);

    y += 10;

    data.decision.reasoning.forEach((reason) => {

        doc.text(`• ${reason}`, 25, y);

        y += 10;

    });

    y += 10;

    doc.text("Risk Level:", 20, y);

    y += 10;

    doc.text(
        data.risk.risk_level,
        25,
        y
    );

    doc.save(
        `${data.company}_Investment_Report.pdf`
    );

};