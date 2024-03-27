import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import PdfGenerator from "../components/pdfGenerate";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { user, loading } = useContext(GlobalContext);


  
  return loading ? (
    <Loading />
  ) : (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <h5>Google Apps Script PDF</h5>
        <PdfGenerator />
      </Container>
    </>
  );
}

export default Home