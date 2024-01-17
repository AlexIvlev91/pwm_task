import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Label } from "@mui/icons-material";

interface GridItemProps {
  id: number;
  img: string;
  description: string;
  price: number;
  rate: number;
  ShippingCost: number;
}

const GridItem = ({
  id,
  img,
  description,
  price,
  rate,
  ShippingCost,
}: GridItemProps) => (
  <Grid item key={id} sx={{ width: "25%", p: 0 }}>
    <Card
      sx={{
        minWidth: 258,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        alignItems: "center",
        boxShadow: "none",
        "&:hover": {
          boxShadow:
            "0px 4px 8px rgba(92, 107, 192, 0.2), 0px 2px 4px rgba(59, 69, 123, 0.2)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/assets/ProductsPngs/${img}`}
          sx={{
            height: 224,
            width: 227,
            objectFit: "cover",
            mx: "auto",
            mb: 1.5,
          }}
        />
        <CardContent sx={{ p: 0, mt: 1.5, mb: 1 }}>
          <Typography gutterBottom variant="subtitle1">
            {description}
          </Typography>
          <Typography variant="h5" color="common.black">
            ${price.toFixed(2)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${ShippingCost.toFixed(2)} for shipping.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Rating
            size="small"
            value={rate}
            readOnly
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
          <Typography>{rate}</Typography>
        </Box>

        <Button variant="outlined" color="primary" size="small">
          Watch
        </Button>
      </Box>
    </Card>
  </Grid>
);

export default GridItem;
