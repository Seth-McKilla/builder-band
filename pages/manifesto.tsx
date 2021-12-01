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
        <title>Manifesto</title>
        <meta name="description" content="The Builder Band Manifesto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom>
              The Builder Band Manifesto
            </Typography>
            <Typography variant="body1" align="center">
              Placeholder for the core values and principles of the Builder
              Band.
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Manifesto;
