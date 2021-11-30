import type { NextPage } from "next";
import Head from "next/head";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import { Layout } from "../components";

const Manifesto: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Band</title>
        <meta name="description" content="The Builder Band Members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              The Band
            </Typography>
            <Typography variant="body1" align="center">
              Placeholder for the members of the Builder Band
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Manifesto;
