import React, { useState } from 'react';
import { Container, Grow, Grid, Card, CardContent, Typography, Button, Modal, Paper } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

// Function to read query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const [open, setOpen] = useState(false);
  const query = useQuery();
  const page = query.get('page') || 1;

  // ✅ Function to handle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          {/* ✅ Main Content (Posts + Pagination) */}
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
            <Pagination page={page} />
          </Grid>

          {/* ✅ Sidebar (Motivational Card + Form Modal) */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.motivationCard}>
              <CardContent>
                <Typography variant="h5" className={classes.motivationTitle}>
                  "Adventure Awaits! 🌍✨"
                </Typography>
                <Typography variant="body1" className={classes.motivationText}>
                  Every journey has a story. Share your amazing travel experiences and inspire others to explore the world!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.shareButton}
                  onClick={handleOpen}
                >
                  Create Your Travel Memory
                </Button>
              </CardContent>
            </Card>

            {/* ✅ Form Modal */}
            <Modal open={open} onClose={handleClose}>
              <Paper className={classes.modalPaper}>
                <Form currentId={currentId} setCurrentId={setCurrentId} setOpen={setOpen} />
              </Paper>
            </Modal>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
