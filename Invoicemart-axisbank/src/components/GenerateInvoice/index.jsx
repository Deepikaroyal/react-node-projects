import React from "react";
import { Page, Document, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 84,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleContainer: {
    marginTop: 10,
    borderBottom: 1,
    borderColor: "#CBCBCB",
  },
  reportTitle: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: 16,
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  priceTitle: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: 14,
    textAlign: "right",
    fontWeight: "bold",
  },
  sellerTitle: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: "11px",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  sellerContainer: {
    marginTop: 15,
    border: 1,
    borderColor: "#CBCBCB",
    padding: "12px",
  },
  invoiceContainer: {
    border: 1,
    borderColor: "#CBCBCB",
    padding: "15px",
    flexDirection: "row",
    width: "100%",
  },
  invoiceContainerMain: {
    marginTop: 8,
    flexDirection: "row",
    width: "100%",
  },
  InvoiceEmail: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: "11px",
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  InvoiceContent2: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: "11px",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 15,
  },
  InvoiceColumn: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: "10px",
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: "8px",
  },
  InvoiceContent: {
    color: "#000000",
    fontSize: "10px",
    textAlign: "left",
  },
});

const PdfDocument = ({ invoicedata }) => {
  const PrintData = [
    {
      sno: "1",
      name: "Samsung",
      Qty: "2",
      Rate: "10100",
      price: "20200",
    },
  ];
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.titleContainer}>
          <Text style={styles.reportTitle}>{"INV11223"}</Text>
        </View>
        <View style={styles.sellerContainer}>
          <Text style={styles.sellerTitle}>{"PSA SELLER"}</Text>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.InvoiceContent}>
              Register Address 1 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Bhivani
              - 523305, Haryana
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.InvoiceEmail}>{"Email ID : "}</Text>
              <Text style={styles.InvoiceContent}>info@text.com</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 12, alignItems: "center" }}>
          <Text style={styles.reportTitle}>{"TAX INVOICE"}</Text>
        </View>
        <View style={styles.invoiceContainerMain}>
          <View style={styles.invoiceContainer}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.InvoiceEmail}>{"Tax Inv No. : "}</Text>
                <Text style={styles.InvoiceContent}>info@text.com</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceEmail}>{"Order No. : "}</Text>
                <Text style={styles.InvoiceContent}>P0098877</Text>
              </View>
            </View>
          </View>
          <View style={styles.invoiceContainer}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.InvoiceEmail}>{"Date : "}</Text>
                <Text style={styles.InvoiceContent}>31/Jun</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceEmail}>{"Due on : "}</Text>
                <Text style={styles.InvoiceContent}>31/Jun</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={styles.invoiceContainer}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.InvoiceEmail}>{"Billed to : "}</Text>
                <Text style={styles.InvoiceContent}>JKBuyer</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceContent}>
                  jkbuyer communication address 1 Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud Bangalore
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceEmail}>{"State : "}</Text>
                <Text style={styles.InvoiceContent}>Karnataka</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceEmail}>{"GSTIN : "}</Text>
                <Text style={styles.InvoiceContent}>J3333KBu1234yer</Text>
              </View>
            </View>
          </View>
          <View style={styles.invoiceContainer}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.InvoiceEmail}>{"Shipped to : "}</Text>
                <Text style={styles.InvoiceContent}>
                  JKBuyer Invoice Report
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceContent}>
                  Register Address 1 Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  Chikkabulapur
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceEmail}>{"State : "}</Text>
                <Text style={styles.InvoiceContent}>Karnataka</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.InvoiceEmail}>{"GSTIN : "}</Text>
                <Text style={styles.InvoiceContent}>J3333KBu1234yer</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ border: 1, borderColor: "#cbcbcb", width: "10%" }}>
            <Text style={styles.InvoiceColumn}>{"SNo."}</Text>
          </View>
          <View style={{ border: 1, borderColor: "#cbcbcb", width: "38%" }}>
            <Text style={styles.InvoiceColumn}>{"Description of goods"}</Text>
          </View>
          <View style={{ border: 1, borderColor: "#cbcbcb", width: "17%" }}>
            <Text style={styles.InvoiceColumn}>{"Quantity"}</Text>
          </View>
          <View style={{ border: 1, borderColor: "#cbcbcb", width: "15%" }}>
            <Text style={styles.InvoiceColumn}>{"Rate"}</Text>
          </View>
          <View style={{ border: 1, borderColor: "#cbcbcb", width: "20%" }}>
            <Text style={styles.InvoiceColumn}>{"Amount"}</Text>
          </View>
        </View>
        {PrintData.map((item) => (
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ border: 1, borderColor: "#cbcbcb", width: "10%" }}>
              <Text style={styles.InvoiceColumn}>{item.sno}</Text>
            </View>
            <View style={{ border: 1, borderColor: "#cbcbcb", width: "38%" }}>
              <Text style={styles.InvoiceColumn}>{item.name}</Text>
            </View>
            <View style={{ border: 1, borderColor: "#cbcbcb", width: "17%" }}>
              <Text style={styles.InvoiceColumn}>{item.Qty}</Text>
            </View>
            <View style={{ border: 1, borderColor: "#cbcbcb", width: "15%" }}>
              <Text style={styles.InvoiceColumn}>{item.Rate}</Text>
            </View>
            <View style={{ border: 1, borderColor: "#cbcbcb", width: "20%" }}>
              <Text style={styles.InvoiceColumn}>{item.price}</Text>
            </View>
          </View>
        ))}
        <View style={{ flexDirection: "row", width: "100%", marginTop: 15 }}>
          <View style={{ width: "80%" }}>
            <Text style={styles.priceTitle}>{"Gross Amount : "}</Text>
          </View>
          <View style={{ width: "20%", textAlign: "right" }}>
            <Text>Rs 606012.2</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "80%" }}>
            <Text style={styles.priceTitle}>{"Deductions : "}</Text>
          </View>
          <View style={{ width: "20%", textAlign: "right" }}>
            <Text>Rs 1678</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ width: "80%" }}>
            <Text style={styles.priceTitle}>{"Taxes : "}</Text>
          </View>
          <View style={{ width: "20%", textAlign: "right" }}>
            <Text>Rs 7490</Text>
          </View>
        </View>
        <View style={styles.sellerContainer}>
          <Text style={styles.InvoiceContent}>
            <Text style={{ fontWeight: "bold" }}>Net Amount :</Text> Sixty Lakh,
            Sixty Six Thousand One Hundred and Ninety Five Rupees
          </Text>
        </View>
        <View style={styles.sellerContainer}>
          <Text style={styles.InvoiceContent}>
            <Text style={{ fontWeight: "bold" }}>Remarks :</Text> This is
            remarks
          </Text>
        </View>
        <View style={[styles.sellerContainer, { backgroundColor: "#F1F1F1" }]}>
          <Text style={styles.InvoiceContent}>
            <Text style={{ fontWeight: "bold" }}>Custom Fields</Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ flexDirection: "column", width: "50%" }}>
            <Text style={styles.InvoiceContent2}>
              {"Quality Check Id : "}
              <Text>232322</Text>
            </Text>
            <Text style={styles.InvoiceContent2}>
              #3 : <Text></Text>
            </Text>
            <Text style={styles.InvoiceContent2}>
              #5 : <Text></Text>
            </Text>
          </View>
          <View style={{ flexDirection: "column", width: "50%" }}>
            <Text style={styles.InvoiceContent2}>
              {"Gate entry ticket : "}
              <Text></Text>
            </Text>
            <Text style={styles.InvoiceContent2}>
              #4 : <Text></Text>
            </Text>
            <Text style={styles.InvoiceContent2}>
              <Text></Text>
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
