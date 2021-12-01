import type { NextPage } from "next";
import Head from "next/head";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Builder Band</title>
        <meta name="description" content="The home of the builder band" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to the Builder Band!
            </Typography>
            <Typography variant="h5" align="center">
              {"The home of Gitcoin's high-performance ⚡ alumni network"}
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Home;
