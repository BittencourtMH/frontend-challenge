import { Card, CardContent, CardHeader, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: '100%'
  }
});

function CardSales(props) {
  const { translation, elevation } = props;
  const classes = useStyles();
  return (
    <Card elevation={elevation} className={classes.card}>
      <CardHeader title={translation.cardTitle.sales} />
      <CardContent>{translation.action.addGraphHere}</CardContent>
    </Card>
  );
}

export default CardSales;
