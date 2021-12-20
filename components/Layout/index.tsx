import { ReactNode } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

// Mui
import Container from "@mui/material/Container";

// Components
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Container>
        <PerfectScrollbar>{children}</PerfectScrollbar>
      </Container>
    </>
  );
}
